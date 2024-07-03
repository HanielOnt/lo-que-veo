<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Subir Archivos</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>
<body>
<div class="form container-fluid">
        <form id="uploadForm" action="upload.php" method="post" enctype="multipart/form-data">
            <label class="form-label fs-1" for="title">Subir archivos</label>
            <div class="mb-3 row align-items-end">
                <label class="col-sm-4 fs-5 col-form-label text-sm-start" for="carpeta">Elige una carpeta:</label>
                <div class="col-sm-8">
                    <select class="form-select form-select-md btn btn-outline-primary" name="carpeta" id="carpeta" required>
                        <option value="">Selecciona una opción</option>
                        <option value="columna-1">Columna 1</option>
                        <option value="columna-2">Columna 2</option>
                        <option value="columna-3">Columna 3</option>
                    </select>
                </div>
            </div>

            <div class="mb-3 row align-items-end">
                <label class="col-sm-4 fs-5 col-form-label text-sm-start" for="imagen">Selecciona una imagen:</label>
                <div class="col-sm-8">
                    <input class="form-control btn btn-outline-primary" type="file" name="imagen" id="imagen" required>
                </div>
            </div>

            <div class="mb-3 row align-items-end">
                <label class="col-sm-4 fs-5 col-form-label text-sm-start" for="video">Selecciona un video:</label>
                <div class="col-sm-8">
                    <input class="form-control btn btn-outline-primary" type="file" name="video" id="video" required>
                </div>
            </div>

            <div class="mb-3">
                <button type="submit" class="fs-5 btn btn-outline-primary">Subir Archivos</button>
            </div>
        </form>
        <a class="form-label fs-5" href="#">Regresar</a>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="form.js"></script>

</body>
</html>
