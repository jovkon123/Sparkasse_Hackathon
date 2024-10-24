<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\UserEvaluation;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call([
            CitySeeder::class,
            FunFactSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            BadgeSeeder::class,
            ModuleSeeder::class,
            CourseSeeder::class,
            LectureSeeder::class,
            TopicSeeder::class,
            UserTopicSeeder::class,
            CertificatesSeeder::class,
            UserCourseSeeder::class,
            UserLectureSeeder::class,
            UserBadgeSeeder::class,
            UserEvaluationSeeder::class,
            LectureSeeder::class,
            UserLectureSeeder::class,
            UserInfoSeeder::class,
            MaterialSeeder::class,
            QuizSeeder::class,
            

        ]);

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
    }
}
