<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tournament extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'course_id',
    'format_id',
    'tiebreaking_id',
    'datetime',
    'nearest_to_the_line',
    'nearest_to_the_pin',
    'longest_drive',
    'best_gross',
    'best_net',
    'is_finish',
    'auto_assign_to_divisions',
    'note'
  ];

  protected $hidden = [
    'created_at',
    'deleted_at',
    'updated_at'
  ];

  public function course() {
    return $this->belongsTo(Course::class);
  }

  public function format() {
    return $this->belongsTo(Format::class);
  }

  public function tiebreaking() {
    return $this->belongsTo(Tiebreaking::class);
  }

  public function divisions() {
    return $this->hasMany(Division::class);
  }
}
