<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            "user_id" => 1,
            "title" => $this->faker->sentence(),
            "content" => $this->faker->paragraph(),
            "location" => $this->faker->state(),
            "artists" => $this->faker->word()
        ];
    }
}
