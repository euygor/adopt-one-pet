<?php

namespace Database\Seeders;

use App\Models\Pet;
use App\Models\Adoption;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Pet::create([
            'name' => 'Mister Cat',
            'history' => 'Mister is a good',
            'photo' => 'https://i.imgur.com/CGYuxkE.jpg',
        ]);

        Pet::create([
            'name' => 'Miss Dog',
            'history' => 'Miss is a good',
            'photo' => 'https://i.imgur.com/N858I5E.jpg',
        ]);

        Pet::create([
            'name' => 'Low Rat',
            'history' => 'Low is a good',
            'photo' => 'https://i.imgur.com/7YQZxjb.jpeg',
        ]);

        Adoption::create([
            'email' => 'adoption01@gmail.com',
            'value' => '100.00',
            'pet_id' => 1,
        ]);

        Adoption::create([
            'email' => 'adoption02@gmail.com',
            'value' => '90.00',
            'pet_id' => 2,
        ]);

        Adoption::create([
            'email' => 'adoption03@gmail.com',
            'value' => '80.00',
            'pet_id' => 3,
        ]);

    }
}
