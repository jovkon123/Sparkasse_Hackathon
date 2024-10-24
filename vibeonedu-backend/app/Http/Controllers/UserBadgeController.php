<?php

namespace App\Http\Controllers;

use App\Models\user_badge;
use App\Http\Requests\Storeuser_badgeRequest;
use App\Http\Requests\Updateuser_badgeRequest;
use App\Models\User;

class UserBadgeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($id)
    {
        $user = User::find($id);
        $badges = $user->badges;
        return response()->json($badges);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Storeuser_badgeRequest $request, $id)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(user_badge $user_badge)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(user_badge $user_badge)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Updateuser_badgeRequest $request, user_badge $user_badge)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(user_badge $user_badge)
    {
        //
    }
}
