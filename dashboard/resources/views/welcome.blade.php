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
    <!-- Sidebar -->
    <div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-camera'></i>
            <div class="logo-name"><span>Lo que </span>veo</div>
        </a>
        <ul class="side-menu">
            <li class="{{ request()->is('/') ? 'active' : '' }}"><a href="/"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
            <li class="{{ request()->is('folder/columna-1') ? 'active' : '' }}"><a href="/folder/columna-1"><i class='bx bx-folder-minus'></i>Columna-1</a></li>
            <li class="{{ request()->is('folder/columna-2') ? 'active' : '' }}"><a href="/folder/columna-2"><i class='bx bx-folder-minus'></i>Columna-2</a></li>
            <li class="{{ request()->is('folder/columna-3') ? 'active' : '' }}"><a href="/folder/columna-3"><i class='bx bx-folder-minus'></i>Columna-3</a></li>
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
    <!-- End of Sidebar -->

    <!-- Main Content -->
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
                            @foreach ($files as $file) 
                                <tr>
                                    <td><img src="{{ $file['url'] }}" alt="{{ $file['alt'] }}" style="max-width: 50px;"></td>
                                    <td>{{ $file['type'] }}</td>
                                    <td>{{ basename(dirname($file['url'])) }}</td>
                                    <td><button class="button-edit" type="submit">Eliminar</button></td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
</body>
</html>
