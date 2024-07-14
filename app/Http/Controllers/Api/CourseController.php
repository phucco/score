<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Course;
use Illuminate\Http\Request;
use App\Http\Resources\CourseResource;

class CourseController extends Controller
{
  public function index()
  {
    return CourseResource::collection(Course::with('club')->paginate(10));
  }

  public function store(Request $request)
  {
    $course = Course::create($request->all());
    var_dump($request);

    return new CourseResource($course);
  }

  public function show(Course $course)
  {
    return new CourseResource($course->load('club'));
  }

  public function update(Request $request, Course $course)
  {
    $course->update($request->except(['id', 'created_at']));

    return new CourseResource($course);
  }

  public function destroy(Course $course)
  {
    $course->delete();

    return response()->json();
  }
}
