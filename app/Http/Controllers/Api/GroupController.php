<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Group;
use Illuminate\Http\Request;
use App\Http\Resources\GroupResource;

class GroupController extends Controller
{
  public function index()
  {
    return GroupResource::collection(Group::all());
  }

  public function store(Request $request)
  {
    $group = Group::create($request->all());

    return new GroupResource($group);
  }

  public function show(Group $group)
  {
    return new GroupResource($group);
  }

  public function update(Request $request, Group $group)
  {
    $group->update($request->except(['id', 'created_at']));

    return new GroupResource($group);
  }

  public function destroy(Group $group)
  {
    $group->delete();

    return response()->json();
  }
}
