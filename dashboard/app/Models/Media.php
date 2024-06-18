<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model{

    // Funcion para la generacion de la api
    public function showApi(){
        // Creo un array
        $media = [];
        
        $text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,' ;
        
        // Obtener imágenes de la carpeta "columna-1"
        $filecolumn1 = Storage::files('public/columna-1');
        foreach ($filecolumn1 as $file) {
            $media['columna-1'][] = Media::getMediaInfo($file);
        }

        // Obtener imágenes de la carpeta "columna-2"
        $filecolumn2 = Storage::files('public/columna-2');
        foreach ($filecolumn2 as $file) {
            $media['columna-2'][] = Media::getMediaInfo($file);
        }

        // Obtener imágenes de la carpeta "columna-3"
        $filecolumn3 = Storage::files('public/columna-3');
        foreach ($filecolumn3 as $file) {
            $media['columna-3'][] = Media::getMediaInfo($file);
        }

        // Estructura de json
        $response = [
            'text' => $text,
            'carpetas' => $media
        ]; 

        return response()->json($response);
    }

    public static function getMediaInfo($file){

        // Obtener la extension del archivo
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

        // Crear arrays de extensiones para imagenes y videos
        $extimg = ['jpeg', 'jpg', 'png'];
        $extvid = ['mp4', 'avi', 'mov', 'wmv', 'mkv', 'flv', 'f4v', 'swf', 'm2v'];
        $type = '';

        if (in_array($extension, $extimg)) {
            $type = 'imagen';
        } elseif (in_array($extension, $extvid)) {
            $type = 'video';
        } elseif ($extension === 'gif') {
            $type = 'gif';
        }

        // Obtener el nombre del archivo sin la extensión
        $filename = pathinfo($file, PATHINFO_FILENAME);

        // Generar un ID único comenzando en 1
        static $idCounter = 1;
        $id = $idCounter++;

        // Generar una descripción (alt)
        $alt = "Descripción para {$filename}";

         // Generar la urls
        $url = Storage::url($file);

        return [
            'id' => $id,
            'type' => $type,
            'url' => $url,
            'alt' => $alt,
        ];
    }

    public static function getAllFile(){
        
        $directories = ['columna-1', 'columna-2', 'columna-3'];
        $files = [];

        foreach ($directories as $directory) {
            $directoryFiles = Storage::disk('public')->files($directory);
            
            foreach ($directoryFiles as $file) {
                $files[] = [
                    'url' => Storage::url($file),
                    'alt' => pathinfo($file, PATHINFO_FILENAME),
                    'type' => pathinfo($file, PATHINFO_EXTENSION),
                ];
            }
        }

        return $files;      
    }
}
