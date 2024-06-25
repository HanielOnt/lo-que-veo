<?php

namespace App\Http\Controllers;

use App\Models\Media;
use Illuminate\Http\Request;

class MediaController extends Controller
{
    public function mediaAll(){

        $medias =  new Media();

        $media = $medias->getMediaInf();

        $response = response()->json($media);
        $response->setStatusCode(200); 
        return $response;
    }
}
