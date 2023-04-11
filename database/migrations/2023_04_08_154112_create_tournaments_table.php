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
        Schema::create('tournaments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('course_id');
            $table->integer('format_id')->nullable();
            $table->string('tie_breaking')->nullable();
            $table->datetime('datetime')->nullable();
            $table->string('nearest_to_the_line')->nullable();
            $table->string('nearest_to_the_pin')->nullable();
            $table->string('longest_drive')->nullable();
            $table->string('best_gross')->nullable();
            $table->string('best_net')->nullable();
            $table->boolean('is_finish')->default(0);
            $table->boolean('auto_assign_to_groups')->default(0);
            $table->text('note')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tournaments');
    }
};
