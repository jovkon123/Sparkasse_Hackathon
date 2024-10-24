<?php

namespace App\Http\Controllers;

use App\Models\Module;
use App\Http\Requests\StoreModulesRequest;
use App\Http\Requests\UpdateModulesRequest;

class ModuleController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Module::all());
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
    public function store(StoreModulesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Module $modules)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Module $modules)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateModulesRequest $request, Module $modules)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Module $modules)
    {
        //
    }
}
