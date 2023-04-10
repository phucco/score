<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Format;
use Illuminate\Http\Request;
use App\Http\Resources\FormatResource;

class FormatController extends Controller
{
  public function index()
  {
    return FormatResource::collection(Format::all());
  }
}
