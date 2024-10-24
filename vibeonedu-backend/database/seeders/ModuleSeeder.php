<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Module;

class ModuleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Module::create(['name' => 'Научи за себе', 'description' => 'Introductory programming module.']);
        Module::create(['name' => 'Научи за својот бизнис', 'description' => 'Web Development using modern frameworks.']);

    }
}
