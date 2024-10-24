<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Lecture;
use App\Models\Course;

class LectureFactory extends Factory
{
    protected $model = Lecture::class;

    public function definition()
    {


        return [
            'course_id' => rand(1,3),
            'name' => $this->faker->sentence(),
            'description' => $this->faker->paragraph(),
            'audio_path' => $this->faker->url(),
            'duration' => $this->faker->numberBetween(1, 60),
        ];
    }
}
