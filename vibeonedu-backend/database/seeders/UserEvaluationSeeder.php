<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserEvaluation;

class UserEvaluationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserEvaluation::factory()->count(20)->create();  // Create 20 user evaluations
    }
}
