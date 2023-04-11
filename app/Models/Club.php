<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Club extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'num_holes',
    'city',
    'country',
    'phone',
    'address',
    'email',
    'website',
    'logo',
    'state',
    'investor'
  ];

  protected $hidden = [
    'created_at',
    'deleted_at',
    'updated_at'
  ];
}
