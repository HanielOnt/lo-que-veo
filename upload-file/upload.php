<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Verificar si los archivos y la carpeta se enviaron correctamente
    if (isset($_POST['carpeta']) && !empty($_POST['carpeta']) &&
        isset($_FILES['imagen']) && !empty($_FILES['imagen']['name']) &&
        isset($_FILES['video']) && !empty($_FILES['video']['name'])) {

        // Guardar en variables
        $carpeta = htmlspecialchars($_POST['carpeta']);
        $imagen = $_FILES['imagen'];
        $video = $_FILES['video'];

        // Comprobar si son imagenes o videos
        $extI = ['jpg', 'jpeg', 'png', 'gif', 'bmp'];
        $extV = ['mp4', 'avi', 'mov', 'mkv', 'wmv'];

        // Obtener informacion
        $extensionImagen = pathinfo($imagen['name'], PATHINFO_EXTENSION);
        $extensionVideo = pathinfo($video['name'], PATHINFO_EXTENSION);

        // Definir la ruta base donde están las carpetas
        $baseDirectory = __DIR__ . '/../LoQueVeo/'; 
                
        // Verificar si la carpeta seleccionada existe
        $directory = $baseDirectory . $carpeta . '/';
        if (!is_dir($directory)) {
            echo 'Error: La carpeta seleccionada no existe.<br>';
            exit;
        }

        if (in_array(strtolower($extensionImagen), $extI) && in_array(strtolower($extensionVideo), $extV)) {

            $fileDir = $directory . basename($imagen['name']);
            $fileVideo = $directory . basename($video['name']);

            // Mover la imagen 
            $imagenSubida = move_uploaded_file($imagen['tmp_name'], $fileDir);
            
            // Mover el video
            $videoSubido = move_uploaded_file($video['tmp_name'], $fileVideo);

            if ($imagenSubida && $videoSubido) {
                echo json_encode(array('success' => true));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error al subir los archivos.'));
            }
        } else {
            echo json_encode(array('success' => false, 'message' => 'Error: Archivos no son imágenes o videos válidos.'));
        }
        
    } else {
        echo json_encode(array('success' => false, 'message' => 'No se cargaron bien los archivos.'));
    }
} else {
    echo json_encode(array('success' => false, 'message' => 'No se envió con éxito el formulario.'));
}
?>
