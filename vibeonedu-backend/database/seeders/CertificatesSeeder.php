<?php

namespace Database\Seeders;

use App\Models\Certificate;
use App\Models\User;
use App\Models\Course;
use Illuminate\Database\Seeder;

class CertificatesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $courses = Course::all();

        foreach ($users as $user) {
            foreach ($courses->random(1) as $course) {
                Certificate::create([
                    'user_id' => $user->id,
                    'course_id' => $course->id,
                    'image_path' => 'certificates/sample_certificate_' . $user->id . '_' . $course->id . '.jpg',
                ]);
            }
        }
    }
}
