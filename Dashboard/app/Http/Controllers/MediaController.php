<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller{
    
    public function show(){

        $media = Media::getMediaInf();

        return view('welcome', compact('media'));
    }

    public function showColumna1(){
        $media = Media::getAllColumn1();

        if (empty($media)) {
            dd('No se encontraron archivos en la Columna');
        }
        return view('welcome', ['media' => $media, 'folder' => 'Columna 1']);
    }

    public function showColumna2(){
        $media = Media::getAllColumn2();

        if (empty($media)) {
            dd('No se encontraron archivos en la Columna 2');
        }
        return view('welcome', ['media' => $media, 'folder' => 'Columna 2']);
    }

    public function showColumna3(){
        $media = Media::getAllColumn3();

        if (empty($media)) {
            dd('No se encontraron archivos en la Columna 3');
        }
        return view('welcome', ['media' => $media, 'folder' => 'Columna 3']);
    }

    public function uploadFile(Request $request){

    }

    public function deleteFile(Request $request){
        
        $filename = $request->input('filename');

        $deleted = Media::deleteFile($filename);

        if ($deleted) {
            return redirect()->back()->with('success', 'Archivo eliminado correctamente.');
        } else {
            return redirect()->back()->with('error', 'Error al eliminar el archivo.');
        }
    }


}