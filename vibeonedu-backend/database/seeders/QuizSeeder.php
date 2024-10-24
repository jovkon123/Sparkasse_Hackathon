<?php

namespace Database\Seeders;

use App\Models\Question;
use Illuminate\Database\Seeder;
use App\Models\UserCourseResult;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Question::factory()->count(50)->create();

        UserCourseResult::factory()->count(200)->create();
    }
}
