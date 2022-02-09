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
            "artists" => $this->faker->word(),
            "image" => "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyOTkyNjR8MHwxfHNlYXJjaHwxfHxmZXN0aXZhbHxlbnwwfHx8fDE2NDQ0MDE2MTc&ixlib=rb-1.2.1&q=80&w=1080"
        ];
    }
}
