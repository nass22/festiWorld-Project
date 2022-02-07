<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AuthenticationController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//register new user
Route::post('/register', [AuthController::class, 'register']);

//login user
Route::post('/login', [AuthController::class, 'login']);

//profile user
Route::post('/me', [AuthController::class, 'me'])->middleware('auth:sanctum');

//logout
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

//All festivals
Route::get('/festivals', [ApiController::class, 'listAllPosts']);

//One festival
Route::get('/festivals/{id}', [ApiController::class, 'listPost']);

//Search festivals
Route::post('/festivals/search', [ApiController::class, 'search']);



//using middleware
// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('/profile', function(Request $request) {
//         return auth()->user();
//     });
//     Route::post('/sign-out', [AuthController::class, 'logout']);
// });
