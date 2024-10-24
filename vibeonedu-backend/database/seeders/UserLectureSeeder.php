<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\UserLecture;

class UserLectureSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        UserLecture::factory()->count(10)->create();  // Create 10 user lectures
    }
}
