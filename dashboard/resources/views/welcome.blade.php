<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lo que veo</title>
    <link rel="stylesheet" href="{{ asset('styles.css') }}">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-camera'></i>
            <div class="logo-name"><span>Lo que </span>veo</div>
        </a>
        <ul class="side-menu">
            <li class="{{ request()->is('/') ? 'active' : '' }}"><a href="{{ route('welcome') }}"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
            <li class="{{ request()->is('folder/columna-1*') ? 'active' : '' }}"><a href="{{ route('columna-1') }}"><i class='bx bx-folder-minus'></i>Columna-1</a></li>
            <li class="{{ request()->is('folder/columna-2*') ? 'active' : '' }}"><a href="{{ route('columna-2') }}"><i class='bx bx-folder-minus'></i>Columna-2</a></li>
            <li class="{{ request()->is('folder/columna-3*') ? 'active' : '' }}"><a href="{{ route('columna-3') }}"><i class='bx bx-folder-minus'></i>Columna-3</a></li>
        </ul>        
        <ul class="side-menu">
            <li>
                <a href="#" class="logout">
                    <i class='bx bx-log-out-circle'></i>
                    Logout
                </a>
            </li>
        </ul>
    </div>

    <div class="content">
        <main>
            <div class="header">
                <div class="left">
                    <h1>{{ $folder ?? 'Dashboard' }}</h1>
                </div>
                <a href="#" class="report">
                    <i class='bx bx-cloud-download'></i>
                    <span>Upload file</span>
                </a>
            </div>

            <div class="bottom-data">
                <div class="orders">
                    <div class="header">
                        <i class='bx bx-photo-album'></i>
                        <h3>Fotos</h3>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Tipo</th>
                                <th>Carpeta</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            @if(empty($files))
                                <tr>
                                    <td colspan="4">No hay archivos en esta carpeta</td>
                                </tr>
                            @else
                                @foreach ($files as $file)
                                    <tr>
                                        <td>
                                            <img src="{{ $file['url'] }}" alt="{{ $file['alt'] }}" style="max-width: 50px;" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                                            <span style="display:none;">{{ $file['filename'] }}</span> <!-- Mostrar el nombre del archivo sin la extensión -->
                                        </td>
                                        <td>{{ $file['type'] }}</td>
                                        <td>{{ basename(dirname($file['url'])) }}</td>
                                        <td>
                                            <form id="deleteForm{{ $file['id'] }}" action="{{ route('file.delete') }}" method="POST">
                                                @csrf
                                                @method('DELETE')
                                                <input type="hidden" name="file_id" value="{{ $file['id'] }}">
                                                <input type="hidden" name="file_path" value="{{ $file['url'] }}">
                                                <button class="button-edit" type="button" onclick="confirmDelete('{{ $file['id'] }}')">Eliminar</button>
                                            </form>                                                                                       
                                        </td>
                                    </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="{{ asset('deleteFile.js') }}"></script>
</body>
</html>
