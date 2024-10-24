<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lecture;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

class CourseController extends Controller
{

    public function businessCourses() {
        $businessCourses = Course::where('module_id', 2)->get();

        return response()->json($businessCourses);
    }

    public function individualCourses() {
        $individualCourses = Course::where('module_id', 1)->get();

        return response()->json($individualCourses);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Course::all());

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
    public function store(StoreCourseRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        {
            return response()->json($course->load('module'));
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        //
    }
     public function courseLectures($courseId){

        $numberOfLectures = Lecture::where('course_id', $courseId)->count();

        return response()->json($numberOfLectures);
     }
}
