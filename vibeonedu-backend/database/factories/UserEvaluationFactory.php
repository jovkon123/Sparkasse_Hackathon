<?php

namespace Database\Factories;

use App\Models\UserEvaluation;
use App\Models\User;
use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserEvaluation>
 */
class UserEvaluationFactory extends Factory
{
    protected $model = UserEvaluation::class;

    public function definition(): array
    {
        $grades = ['Одличен', 'Добар', 'Среден', 'Лош'];

        return [
            'user_id' => User::inRandomOrder()->first()->id,  // Get a random user ID
            'course_id' => Course::inRandomOrder()->first()->id,  // Get a random course ID
            'recommendation' => $this->faker->boolean(),
            'grade' => $this->faker->randomElement($grades),
            'message' => $this->faker->text(),
        ];
    }
}
