<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MediaController extends Controller{

    // Creacion de api para mandar un json
    public function showFileApi(){
        
        // LLamar al modelo
        $mediaModel = new Media();
        // Obtengo el metodo
        $media = $mediaModel->showApi();
        return $media;
    }

    public function showAllF(){
        
        $files = Media::getAllFile();
        return view('welcome', compact('files'));
    }
}
