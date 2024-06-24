<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class Media extends Model{
    use HasFactory;

    protected $guarded = [];

    public static function getMediaInf(){

        // Obtener las carpetas
        $directory = 'public';
        $directories = Storage::directories($directory);

        // Almacenar la informacion de lo optenido 
        $media = [];

        // Recorer los directorios
        foreach ($directories as $directory) {
            // Obtener la lista de los archivos
            $files = Storage::files($directory);

            // Recorer los archivos
            foreach ($files as $file) {

                // Obtener la informacion
                $filename = pathinfo($file, PATHINFO_FILENAME);
                $extension = pathinfo($file, PATHINFO_EXTENSION);
                $url = Storage::url($file);
                $folder = basename($directory);

                // Variables para verificar el tipo de archivo
                $extimg = ['jpeg', 'jpg', 'png'];
                $type = '';
            
                // Verificar que son 
                if (in_array($extension, $extimg)) {
                    $type = 'imagen';
                } elseif ($extension === 'gif') {
                    $type = 'gif';
                }

                // Guardar los datos en un arreglo
                $media[] = [
                    'carpeta' => $folder,
                    'nombre' => $filename,
                    'extension' => $extension,
                    'tipo' => $type,
                    'url' => $url,
                ];
            }
        }

        return $media;
    }

    public static function getMediaFolder($column){

        // Obtener las carpetas
        $directory = 'public/' . $column;
        $files = Storage::files($directory);

        // Almacenar la informacion de lo optenido 
        $media = [];

        // Recorer los archivos
        foreach ($files as $file) {

            // Obtener la informacion
            $filename = pathinfo($file, PATHINFO_FILENAME);
            $extension = pathinfo($file, PATHINFO_EXTENSION);
            $url = Storage::url($file);
            $folder = basename($directory);

            // Variables para verificar el tipo de archivo
            $extimg = ['jpeg', 'jpg', 'png'];
            $type = '';

            if (in_array($extension, $extimg)) {
                $type = 'imagen';
            } elseif ($extension === 'gif') {
                $type = 'gif';
            }

            $media[] = [
                'carpeta' => $folder,
                'nombre' => $filename,
                'extension' => $extension,
                'tipo' => $type,
                'url' => $url,
            ];
        }

        return $media;
    }

    public static function getAllColumn1(){
        // Manda a llamar otro metodo y pasa un argumento
        return self::getMediaFolder('columna-1');
    }
    public static function getAllColumn2(){
        // Manda a llamar otro metodo y pasa un argumento
        return self::getMediaFolder('columna-2');
    }
    public static function getAllColumn3(){
        // Manda a llamar otro metodo y pasa un argumento
        return self::getMediaFolder('columna-3');
    }

    public static function uploadFile(){
        
    }

    public static function deleteFile($filename){
        // Directorio base donde se encuentran las carpetas
        $directory = 'public';
        $folders = Storage::directories($directory);

        // Variable para almacenar el resultado de la verificación
        $fileFound = false;

        foreach ($folders as $folder) {
            // Construir la ruta completa del archivo
            $filePath = $folder . '/' . $filename;

            // Verificar si el archivo existe
            if (Storage::exists($filePath)) {
                $fileFound = true;
                break;
            }
        }

        if ($fileFound) {
            Storage::delete($filePath);
            return true;
        } else {
            return false;
        }
    }
}
