<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lo que veo</title>
    <link rel="stylesheet" href="<?php echo e(asset('styles.css')); ?>">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
    <div class="sidebar">
        <a href="#" class="logo">
            <i class='bx bx-camera'></i>
            <div class="logo-name"><span>Lo que </span>veo</div>
        </a>
        <ul class="side-menu">
            <li class="<?php echo e(request()->is('/') ? 'active' : ''); ?>"><a href="<?php echo e(route('welcome')); ?>"><i class='bx bxs-dashboard'></i>Dashboard</a></li>
            <li class="<?php echo e(request()->is('folder/columna-1*') ? 'active' : ''); ?>"><a href="<?php echo e(route('columna-1')); ?>"><i class='bx bx-folder-minus'></i>Columna-1</a></li>
            <li class="<?php echo e(request()->is('folder/columna-2*') ? 'active' : ''); ?>"><a href="<?php echo e(route('columna-2')); ?>"><i class='bx bx-folder-minus'></i>Columna-2</a></li>
            <li class="<?php echo e(request()->is('folder/columna-3*') ? 'active' : ''); ?>"><a href="<?php echo e(route('columna-3')); ?>"><i class='bx bx-folder-minus'></i>Columna-3</a></li>
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
                    <h1><?php echo e($folder ?? 'Dashboard'); ?></h1>
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
                                <th>Image</th>
                                <th>Name</th>
                                <th>Tipo</th>
                                <th>Carpeta</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php $__currentLoopData = $media; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $item): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <tr>
                                    <td>
                                        <?php if($item['tipo'] == 'imagen' || $item['tipo'] == 'gif'): ?>
                                            <img src="<?php echo e($item['url']); ?>" alt="<?php echo e($item['nombre']); ?>" style="width: 50px; height: auto;">
                                        <?php endif; ?>
                                    </td>
                                    <td><?php echo e($item['nombre']); ?></td>
                                    <td><?php echo e($item['tipo']); ?></td>
                                    <td><?php echo e($item['carpeta']); ?></td>
                                    <td>
                                        <button class="btn danger" type="button" onclick="confirmDelete('<?php echo e($item['nombre']); ?>')">Eliminar</button>
                                        <form id="deleteForm<?php echo e($item['nombre']); ?>" action="<?php echo e(route('delete')); ?>" method="POST" style="display: none;">
                                            <?php echo csrf_field(); ?>
                                            <?php echo method_field('DELETE'); ?>
                                            <input type="hidden" name="filename" value="<?php echo e($item['nombre']); ?>">
                                        </form>
                                    </td>
                                </tr>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="<?php echo e(asset('deleteFile.js')); ?>"></script>
</body>
</html>
<?php /**PATH C:\Users\anoth\Desktop\Storage\resources\views/welcome.blade.php ENDPATH**/ ?>