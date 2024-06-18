<?php

use App\Http\Controllers\MediaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/media', [MediaController::class, 'showFileApi'])->name('showApi');
