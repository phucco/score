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
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreign('division_id')->references('id')->on('divisions');
            $table->integer('vga')->nullable();
            $table->integer('handicap')->default(36);
            $table->integer('age')->nullable();
            $table->string('gender')->default('m');
            $table->string('hole')->nullable();
            $table->string('flight')->nullable();
            $table->string('teetime')->nullable();
            $table->string('score')->nullable();
            $table->integer('total')->default(0);
            $table->string('note')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
