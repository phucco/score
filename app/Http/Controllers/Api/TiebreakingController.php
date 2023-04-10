<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tiebreaking;
use Illuminate\Http\Request;
use App\Http\Resources\TiebreakingResource;

class TiebreakingController extends Controller
{
  public function index()
  {
    return TiebreakingResource::collection(Tiebreaking::all());
  }
}
