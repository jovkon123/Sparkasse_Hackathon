<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserCourseResult>
 */
class UserCourseResultFactory extends Factory
{
    protected $model = \App\Models\UserCourseResult::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => $this->faker->numberBetween(1, 20),
            'course_id' => $this->faker->numberBetween(1, 14),
            'points' => $this->faker->numberBetween(0, 10),
            'finished_at' => $this->faker->dateTimeBetween('-30 days', 'now'),
        ];
    }
}
