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
        $directory = 'public';
        $directories = Storage::directories($directory);

        $media = [];

        foreach ($directories as $directory) {
            $files = Storage::files($directory);

            foreach ($files as $file) {
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
        }

        return $media;
    }

    public static function getMediaFolder($column){

        $directory = 'public/' . $column;
        $files = Storage::files($directory);

        $media = [];

        foreach ($files as $file) {
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
        return self::getMediaFolder('columna-1');
    }
    public static function getAllColumn2(){
        return self::getMediaFolder('columna-2');
    }
    public static function getAllColumn3(){
        return self::getMediaFolder('columna-3');
    }

    public static function deleteFile($filename)
    {
        $filePath = 'public/' . $filename;

        try {
            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
                return true; // Archivo eliminado exitosamente
            } else {
                throw new \Exception("El archivo no existe o no se pudo encontrar.");
            }
        } catch (\Exception $e) {
            // Manejar cualquier excepción y devolver false en caso de error
            Log::error('Error al eliminar el archivo: ' . $e->getMessage());
            return false;
        }
    }
}
