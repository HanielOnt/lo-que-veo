<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model{
    use HasFactory;

     // Mostrar un json de la api con los datos correspondientes
     public function showApi() {
        $media = [];
        $text = 'Jerza';
        
        $filecolumn1 = Storage::disk('public')->files('columna-1');
        foreach ($filecolumn1 as $file) {
            $media['columna-1'][] = self::getMediaInfo($file, false);
        }

        $filecolumn2 = Storage::disk('public')->files('columna-2');
        foreach ($filecolumn2 as $file) {
            $media['columna-2'][] = self::getMediaInfo($file, false);
        }

        $filecolumn3 = Storage::disk('public')->files('columna-3');
        foreach ($filecolumn3 as $file) {
            $media['columna-3'][] = self::getMediaInfo($file, false);
        }

        $response = [
            'text' => $text,
            'carpetas' => $media
        ];

        return response()->json($response);
    }

    // Obtener todo de las columnas
    public static function getAllFile() {

        // Directorios
        $directories = ['columna-1', 'columna-2', 'columna-3'];
        $files = [];

        // Recorrer donde estan ubicados y a la vez obtener todo
        foreach ($directories as $directory) {
            $directoryFiles = Storage::disk('public')->files($directory);
            
            foreach ($directoryFiles as $file) {
                $files[] = self::getMediaInfo($file);
            }
        }

        return $files;      
    }

    // Obtener toda la informacion de las carpetas con sus archivos
    public static function getMediaInfo($file, $includeFilename = true) {

        // Obtener la extencion
        $extension = strtolower(pathinfo($file, PATHINFO_EXTENSION));

        // Variables para verificar que tipo de archivo son 
        $extimg = ['jpeg', 'jpg', 'png'];
        $type = '';

        // Verificar que es
        if (in_array($extension, $extimg)) {
            $type = 'imagen';
        } elseif ($extension === 'gif') {
            $type = 'gif';
        }

        // Obtener nombre del archivo sin extencion
        $filename = pathinfo($file, PATHINFO_FILENAME);

        // Generar un id empezando desde 1
        static $idCounter = 1;
        $id = $idCounter++;

        // Generar una descripcion
        $alt = "Descripción para {$filename}";
        
        // Generar una url
        $url = Storage::url($file);

        // Agrupar todo en una variable
        $mediaInfo = [
            'id' => $id,
            'type' => $type,
            'url' => $url,
            'alt' => $alt,
        ];

        // Incluir el nombre
        if ($includeFilename) {
            $mediaInfo['filename'] = $filename;
        }

        return $mediaInfo;
    }

    public static function getAllColumn1() {
        return self::getFilesFromDirectory('columna-1');
    }

    public static function getAllColumn2() {
        return self::getFilesFromDirectory('columna-2');
    }

    public static function getAllColumn3() {
        return self::getFilesFromDirectory('columna-3');
    }

    private static function getFilesFromDirectory($directory) {
        $files = Storage::disk('public')->files($directory);
        $mediaFiles = [];

        foreach ($files as $file) {
            $mediaFiles[] = self::getMediaInfo($file);
        }

        return $mediaFiles;
    }

    public static function deleteFile($filePath){
        // Construir la ruta completa al archivo en el disco público
        $fullPath = 'public/' . $filePath;
    
        // Verificar que el archivo exista
        if (Storage::disk('public')->exists($fullPath)) {
            // Eliminar el archivo del sistema de archivos
            Storage::disk('public')->delete($fullPath);
            return true;
        }
    
        return false;
    }
}
