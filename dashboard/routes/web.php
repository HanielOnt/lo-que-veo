<?php

use App\Http\Controllers\MediaController;
use App\Models\Media;
use Illuminate\Support\Facades\Route;

// routes/web.php
Route::get('/show-images', function () {
    return view('mediaapi.imagenes');
});


Route::get('/', [MediaController::class, 'showAllF'])->name('welcome');

Route::get('/media', [MediaController::class, 'showAllF'])->name('media.index');
