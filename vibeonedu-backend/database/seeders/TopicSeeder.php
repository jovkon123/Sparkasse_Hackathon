<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Topic;
use Illuminate\Support\Facades\DB;

class TopicSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $topics = [
            'Web Development',
            'Machine Learning',
            'Cybersecurity',
            'Data Science',
            'Mobile App Development',
        ];

        foreach ($topics as $topic) {
            DB::table('topics')->insert([
                'name' => $topic,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
