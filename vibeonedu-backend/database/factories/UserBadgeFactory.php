<?php
namespace Database\Factories;

use App\Models\UserBadge;  // Add this import to specify the correct model
use App\Models\User;
use App\Models\Badge;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
* @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\UserBadge>
*/
class UserBadgeFactory extends Factory
{
/**
* The name of the factory's corresponding model.
*
* @var string
*/
protected $model = UserBadge::class;  // Specify the correct model here

/**
* Define the model's default state.
*
* @return array<string, mixed>
*/
public function definition(): array
{
return [
'user_id' => User::inRandomOrder()->first()->id,
'badge_id' => Badge::inRandomOrder()->first()->id,
];
}
}
