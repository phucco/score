<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
  public function register(Request $request)
  {
    $request->validate([
      'name' => 'required|string',
      'email'=>'required|string|unique:users',
      'password'=>'required|string',
      'password_confirmation' => 'required|same:password'
    ]);

    $user = new User([
      'name'  => $request->name,
      'email' => $request->email,
      'password' => bcrypt($request->password),
    ]);

    if ($user->save()) {
      $tokenResult = $user->createToken('Personal Access Token');
      $token = $tokenResult->plainTextToken;

      return response()->json([
        'message' => 'Successfully created user!',
        'accessToken'=> $token,
      ], 201);
    } else {
      return response()->json(['error'=>'Provide proper details']);
    }
  }

  public function login(Request $request)
  {
    $request->validate([
      'email' => 'required|string|email',
      'password' => 'required|string',
      'remember_me' => 'boolean'
    ]);

    $credentials = request(['email','password']);
    $remember_me = request('remember_me');

    if (!Auth::attempt($credentials, $remember_me)) {
      return response()->json([
        'message' => 'Unauthorized'
      ], 401);
    }

    $user = $request->user();
    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->plainTextToken;

    return response()->json([
      'accessToken' =>$token,
    ]);
  }

  public function user(Request $request)
  {
    return response()->json($request->user()->only(['name', 'email']));
  }

  public function logout(Request $request)
  {
    $request->user()->tokens()->delete();

    return response()->json([
      'message' => 'Successfully logged out'
    ]);
  }
}
