<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->integer('club_id');
            $table->string('name');
            $table->string('pars')->nullable();
            $table->integer('total_pars')->default(72);
            $table->string('indexes')->nullable();
            $table->integer('men_slope_rating')->default(113);
            $table->integer('women_slope_rating')->default(113);
            $table->boolean('is_active')->default(true);
            $table->boolean('is_default')->default(true);
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
