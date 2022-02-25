<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\PostController;

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

//profile user id 
Route::get('/user/{id}', [AuthController::class, 'profile']); //ADD middleware

//logout
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

//All festivals
Route::get('/festivals', [PostController::class, 'showAllPosts']); 

//One festival
Route::get('/festivals/{id}', [PostController::class, 'showPost']);

//Search festivals
Route::post('/festivals/search', [PostController::class, 'search']);

//List all News
Route::get('/news', [NewsController::class, 'show']);

//Add News
Route::post('/addnews', [NewsController::class, 'store']);

//Test page
Route::get('/test', [PostController::class, 'fetch']);


//using middleware
// Route::group(['middleware' => ['auth:sanctum']], function () {
//     Route::get('/profile', function(Request $request) {
//         return auth()->user();
//     });
//     Route::post('/sign-out', [AuthController::class, 'logout']);
// });
