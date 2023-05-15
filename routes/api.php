<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ClubController;
use App\Http\Controllers\Api\FormatController;
use App\Http\Controllers\Api\TiebreakingController;
use App\Http\Controllers\Api\CourseController;
use App\Http\Controllers\Api\TournamentController;
use App\Http\Controllers\Api\DivisionController;
use App\Http\Controllers\Api\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware('auth:sanctum')->group(function() {
  Route::apiResource('clubs', ClubController::class);
  Route::apiResource('formats', FormatController::class);
  Route::apiResource('tiebreakings', TiebreakingController::class);
  Route::apiResource('courses', CourseController::class);
  Route::apiResource('tournaments', TournamentController::class);
  Route::apiResource('divisions', DivisionController::class);
  Route::apiResource('users', UserController::class);
// });

