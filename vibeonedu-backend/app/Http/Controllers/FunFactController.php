<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreFunFactRequest;
use App\Http\Requests\UpdateFunFactRequest;
use App\Models\FunFact;

class FunFactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        return response()->json(FunFact::all());
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
    public function store(StoreFunFactRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(FunFact $funFact)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(FunFact $funFact)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFunFactRequest $request, FunFact $funFact)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(FunFact $funFact)
    {
        //
    }
}
