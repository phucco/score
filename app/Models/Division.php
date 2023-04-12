<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'tournament_id',
    'handicap_course_limit',
    'handicap_index_limit',
    'gender',
    'note'
  ];

  protected $hidden = [
    'created_at',
    'deleted_at',
    'updated_at'
  ];

  public function tournament() {
    return $this->belongsTo(Tournament::class);
  }
}
