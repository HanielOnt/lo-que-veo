document.getElementById('uploadFileButton').addEventListener('click', function(event) {
    event.preventDefault();
    const uploadUrl = this.getAttribute('data-upload-url');
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    Swal.fire({
        title: 'Upload File',
        html: `
            <form id="uploadForm" enctype="multipart/form-data">
                <p>Seleccionar Carpeta:</p>
                <div>
                    <input type="radio" id="columna-1" name="folder" value="columna-1">
                    <label for="columna-1">Columna-1</label><br>
                    <input type="radio" id="columna-2" name="folder" value="columna-2">
                    <label for="columna-2">Columna-2</label><br>
                    <input type="radio" id="columna-3" name="folder" value="columna-3">
                    <label for="columna-3">Columna-3</label>
                </div>
                <p>Subir Archivo:</p>
                <input type="file" id="upload-file" name="file" aria-label="Upload your file"><br>
                <input type="hidden" name="_token" value="${csrfToken}">
            </form>
        `,
        showCancelButton: true,
        confirmButtonText: 'Upload',
        preConfirm: () => {
            const form = Swal.getPopup().querySelector('#uploadForm');
            const formData = new FormData(form);

            return fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: formData
            }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            }).catch(error => {
                Swal.showValidationMessage(`Request failed: ${error}`);
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Success', 'File uploaded successfully', 'success');
        }
    });
});