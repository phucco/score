<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;

class UserController extends Controller
{
  public function index()
  {
    return UserResource::collection(User::with('club')->paginate(10));
  }

  public function store(UserRequest $request)
  {
    $user = User::create($request->all());

    return new UserResource($user);
  }

  public function show(User $user)
  {
    return new UserResource($user);
  }

  public function update(UserRequest $request, User $user)
  {
    $user->update($request->all());

    return new UserResource($user);
  }

  public function destroy(User $user)
  {
    $user->delete();

    return response()->noContent();
  }
}
