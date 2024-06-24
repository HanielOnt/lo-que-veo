function confirmDelete(filename) {
    Swal.fire({
        title: '¿Está seguro?',
        text: "¡No podrás revertir esto!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sí, eliminarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            // Enviar el formulario de eliminación
            document.getElementById('deleteForm' + filename).submit();
        }
    });
}