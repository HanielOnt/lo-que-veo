<!-- resources/views/media/images.blade.php -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mostrar Imágenes</title>
    <style>
        .image-gallery {
            display: flex;
            flex-wrap: wrap;
        }
        .image-item {
            margin: 10px;
        }
        .image-item img {
            max-width: 100px;
            max-height: 100px;
        }
    </style>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fetch('/api/media')
                .then(response => response.json())
                .then(data => {
                    const container = document.getElementById('image-container');
                    // Mostrar imágenes de columna-1
                    if (data.carpetas['columna-1']) {
                        data.carpetas['columna-1'].forEach(item => {
                            const div = document.createElement('div');
                            div.classList.add('image-item');
                            const img = document.createElement('img');
                            img.src = item.url;
                            img.alt = item.alt;
                            div.appendChild(img);
                            container.appendChild(div);
                        });
                    }
                    // Mostrar imágenes de columna-2
                    if (data.carpetas['columna-2']) {
                        data.carpetas['columna-2'].forEach(item => {
                            const div = document.createElement('div');
                            div.classList.add('image-item');
                            const img = document.createElement('img');
                            img.src = item.url;
                            img.alt = item.alt;
                            div.appendChild(img);
                            container.appendChild(div);
                        });
                    }
                    // Mostrar imágenes de columna-3
                    if (data.carpetas['columna-3']) {
                        data.carpetas['columna-3'].forEach(item => {
                            const div = document.createElement('div');
                            div.classList.add('image-item');
                            const img = document.createElement('img');
                            img.src = item.url;
                            img.alt = item.alt;
                            div.appendChild(img);
                            container.appendChild(div);
                        });
                    }
                })
                .catch(error => console.error('Error:', error));
        });
    </script>
</head>
<body>
    <h1>Imágenes</h1>
    <div id="image-container" class="image-gallery"></div>
</body>
</html>
