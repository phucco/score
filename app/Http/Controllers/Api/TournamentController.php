<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Tournament;
use Illuminate\Http\Request;
use App\Http\Resources\TournamentResource;

class TournamentController extends Controller
{
  public function index()
  {
    return TournamentResource::collection(Tournament::with('course', 'groups', 'format', 'tiebreaking')->paginate(10));
  }

  public function store(Request $request)
  {
    $tournament = Tournament::create($request->all());

    return new TournamentResource($tournament);
  }

  public function show(Tournament $tournament)
  {
    return new TournamentResource($tournament);
  }

  public function update(Request $request, Tournament $tournament)
  {
    $tournament->update($request->except(['id', 'created_at']));

    return new TournamentResource($tournament);
  }

  public function destroy(Tournament $tournament)
  {
    $tournament->delete();

    return response()->json();
  }
}
