<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Media extends Model
{
    use HasFactory;
    // protected $appends = [""];
    public function getMediaInf(){
         // Obtener las carpetas
         $directory = 'public';
         $directories = Storage::directories($directory);

         // Almacenar la informacion de lo optenido 
        $text = 'Hola mundo esto es un ejemplo';
        $media = [
            'texto'=> $text,
            'carpetas'=> [],
        ];
 
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
                 $media['carpetas'][] = [
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
}
