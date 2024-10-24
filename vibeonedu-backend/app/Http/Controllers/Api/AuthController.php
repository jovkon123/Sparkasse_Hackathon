<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8|confirmed',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        $user = User::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Create a Sanctum token for the newly registered user
        $token = $user->createToken('YourAppName')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token // Return the token
        ], 201);
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        // Update last login time
        $user = Auth::user();
        $user->last_login_at = Carbon::now(); // Set the last login timestamp
        $user->save();

        // Use the existing token if available
        $token = $user->createToken('VibeOn')->plainTextToken;

        // Check if the user has any courses
        $courses = $user->courses;

        // Check if any course has completed_at as null (indicating it is active)
        $activeCourse = $courses->firstWhere('pivot.completed_at', null);

        // Set the active_courses variable based on whether an active course is found
        $activeCourses = $activeCourse ? true : false;

        return response()->json([
            'user' => $user,
            'active_courses' => $activeCourses, // Boolean indicating if the user has active courses
            'token' => $token // Return the token
        ]);
    }

    public function me()
    {
        return response()->json(Auth::user());
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function checkUser(Request $request, $email)
    {
        $user = User::where('email', $email)->exists();

        if ($user) {
            return response()->json(['message' => 'User exists']);
        } else {
            return response()->json(['message' => 'User does not exist'], 404);
        }
    }
}
