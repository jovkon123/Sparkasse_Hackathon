<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Badge;

class BadgeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $badges = [
            [
                'name' => 'Финансиски пионер',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge1.jpg'
            ],
            [
                'name' => 'Економски ентузијаст',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge2.jpg'
            ],
            [
                'name' => 'Капитален архитект',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge3.jpg'
            ],
            [
                'name' => 'Капитален стратег',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge4.jpg'
            ],
            [
                'name' => 'Оперативен менаџер',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge5.jpg'
            ],
            [
                'name' => 'Стратешки визионер',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge6.jpg'
            ],
            [
                'name' => 'Лидер на иднината',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge7.jpg'
            ],
            [
                'name' => 'Иден CFO',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge8.jpg'
            ],
            [
                'name' => 'CЕО',
                'description' => 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
                'image_path' => 'public/Assets/Images/Badge9.jpg'
            ],
        ];

        foreach ($badges as $badge) {
            Badge::create($badge);
        }

    }
}
