<?php

use App\Http\Controllers\AdoptionController;
use App\Http\Controllers\PetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/pets', [PetController::class, 'index']);
Route::post('/pets', [PetController::class, 'store']);

Route::get('/adoptions', [AdoptionController::class, 'index']);
Route::post('/adoptions', [AdoptionController::class, 'store']);

Route::any('/{any}', function () {
    return ['error' => 'Route not found.'];
})->where('any', '.*');