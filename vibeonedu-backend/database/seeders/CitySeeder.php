<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CitySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cities = [
            ['name' => 'Skopje'],
            ['name' => 'Veles'],
            ['name' => 'Kumanovo'],
            ['name' => 'Bitola'],
            ['name' => 'Ohrid'],
            ['name' => 'Prilep'],
            ['name' => 'Tetovo'],
            ['name' => 'Gostivar'],
            ['name' => 'Strumica'],
            ['name' => 'Kavadarci'],
        ];

        DB::table('cities')->insert($cities);
    }
}
