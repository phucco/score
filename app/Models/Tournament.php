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
    'groups',
    'is_finish',
    'auto_assign_to_divisions',
    'note'
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
}
