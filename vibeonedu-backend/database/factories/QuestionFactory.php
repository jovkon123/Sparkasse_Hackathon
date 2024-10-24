<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Question>
 */
class QuestionFactory extends Factory
{
    protected $model = \App\Models\Question::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'question' => $this->faker->sentence(),
            'correct_answer' => $this->faker->word(),
            'answer_1' => $this->faker->word(),
            'answer_2' => $this->faker->word(),
            'answer_3' => $this->faker->word(),
            'course_id' => $this->faker->numberBetween(1, 14),
        ];
    }
}
