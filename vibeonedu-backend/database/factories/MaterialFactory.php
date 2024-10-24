<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Models\Lecture;
use App\Models\Material;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class MaterialFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $lecture = Lecture::inRandomOrder()->first();

        return [
            'lecture_id' => $lecture->id,
            'type' => $this->faker->word(),
            'content' => $this->faker->paragraph(),
        ];
    }
}
