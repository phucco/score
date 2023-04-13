<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Division;
use App\Models\Tournament;
use Illuminate\Http\Request;
use App\Http\Resources\DivisionResource;

class DivisionController extends Controller
{
  public function index()
  {
    return DivisionResource::collection(Division::all());
  }

  public function store(Request $request)
  {
    $division = Division::create($request->all());

    return new DivisionResource($division);
  }

  public function show(Division $division)
  {
    return new DivisionResource($division);
  }

  public function update(Request $request, Division $division)
  {
    $division->update($request->except(['id', 'created_at']));

    return new DivisionResource($division);
  }

  public function destroy(Division $division)
  {
    $division->delete();

    return response()->json();
  }
}
