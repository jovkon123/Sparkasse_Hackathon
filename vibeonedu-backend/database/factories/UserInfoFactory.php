<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\City;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserInfo>
 */
class UserInfoFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $user = User::all()->random();
        $city = City::all()->random();
        return [
            'user_id' => $user->id,
            'city_id' => $city->id,
            'phone' => $this->faker->phoneNumber,
            'gender' => $this->faker->randomElement(['male', 'female']),
            'birth_date' => $this->faker->date('Y-m-d'),
            'img_path' => $this->faker->imageUrl([
                'https://picsum.photos/300/300',
            ]),
            'study_time' => $this->faker->randomElement(['10-20 минути', '30 минути', '45 минути', '1 час']),
        ];
    }
}
