<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller {

    // Creacion de api para mandar un JSON
    public function showFileApi() {
        // Llamar al modelo y obtener el método
        $media = (new Media)->showApi();
        return $media;
    }

    // Mostrar todos los archivos en una vista
    public function showAllFiles() {
        $files = Media::getAllFile();
        return view('welcome', compact('files'));
    }

    // Mostrar lo que contiene capeta 1
    public function showColumna1()
    {
        $files = Media::getAllColumn1();
        // Depuración
        if (empty($files)) {
            dd('No se encontraron archivos en Columna 1');
        }
        return view('welcome', ['files' => $files, 'folder' => 'Columna 1']);
    }

    // Mostrar lo que contiene capeta 2
    public function showColumna2()
    {
        $files = Media::getAllColumn2();
        // Depuración
        if (empty($files)) {
            dd('No se encontraron archivos en Columna 2');
        }
        return view('welcome', ['files' => $files, 'folder' => 'Columna 2']);
    }

    // Mostrar lo que contiene capeta 3
    public function showColumna3()
    {
        $files = Media::getAllColumn3();
        // Depuración
        if (empty($files)) {
            dd('No se encontraron archivos en Columna 3');
        }
        return view('welcome', ['files' => $files, 'folder' => 'Columna 3']);
    }

    public function deleteFile(Request $request){
        // Validar la solicitud
        $request->validate([
            'file_id' => 'required',
            'file_path' => 'required',
        ]);
    
        $fileId = $request->input('file_id');
        $filePath = $request->input('file_path');
    
        // Delegar la eliminación al modelo Media
        $deleted = Media::deleteFile($filePath);
    
        if ($deleted) {
            return redirect()->back()->with('success', 'Archivo eliminado correctamente.');
        }
    
        return redirect()->back()->with('error', 'No se pudo eliminar el archivo.');
    }
}
