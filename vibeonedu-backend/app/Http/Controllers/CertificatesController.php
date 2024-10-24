<?php

namespace App\Http\Controllers;

use App\Models\Certificates;
use App\Http\Requests\StoreCertificatesRequest;
use App\Http\Requests\UpdateCertificatesRequest;

class CertificatesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
    public function store(StoreCertificatesRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Certificates $certificates)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Certificates $certificates)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCertificatesRequest $request, Certificates $certificates)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Certificates $certificates)
    {
        //
    }
}
