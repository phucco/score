<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
    'club_id',
    'name',
    'pars',
    'total_pars',
    'indexes',
    'order',
    'is_default'
  ];

  protected $hidden = [
    'created_at',
    'deleted_at',
    'updated_at'
  ];

  public function club() {
    return $this->belongsTo(Club::class);
  }
}
