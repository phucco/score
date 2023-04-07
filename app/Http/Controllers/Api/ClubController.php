<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClubRequest;
use App\Http\Resources\ClubResource;
use App\Models\Club;
use Illuminate\Http\Request;

class ClubController extends Controller
{
  public function index()
  {
    return ClubResource::collection(Club::paginate(10));
  }

  public function store(ClubRequest $request)
  {
    $club = Club::create($request->validated());

    return new ClubResource($club);
  }

  public function show(Club $club)
  {
    return new ClubResource($club);
  }

  public function update(Request $request, Club $club)
  {
    $club->update($request->validated());

    return new ClubResource($club);
  }

  public function destroy(Club $club)
  {
    $club->delete();

    return response()->noContent();
  }
}
