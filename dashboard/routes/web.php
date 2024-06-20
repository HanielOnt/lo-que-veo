<?php

use App\Http\Controllers\MediaController;
use App\Models\Media;
use Illuminate\Support\Facades\Route;

Route::get('/', [MediaController::class, 'showAllFiles'])->name('welcome');

Route::prefix('folder')->group(function () {
    Route::get('columna-1', [MediaController::class, 'showColumna1'])->name('columna-1');
    Route::get('columna-2', [MediaController::class, 'showColumna2'])->name('columna-2');
    Route::get('columna-3', [MediaController::class, 'showColumna3'])->name('columna-3');
});


Route::delete('/file/delete', [MediaController::class, 'deleteFile'])->name('file.delete');

