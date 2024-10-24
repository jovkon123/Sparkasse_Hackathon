<?php

namespace Database\Factories;

use App\Models\UserLecture;
use App\Models\Lecture;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserLecture>
 */
class UserLectureFactory extends Factory
{
    protected $model = UserLecture::class; // Specify the model here

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::inRandomOrder()->first()->id,  // More efficient
            'lecture_id' => Lecture::inRandomOrder()->first()->id,  // More efficient
            'started_at' => now(),
            'completed_at' => now(),
        ];
    }
}
