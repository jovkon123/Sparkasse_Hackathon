<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    protected $fillable = ['name', 'description', 'image_path'];

    public function user(){
        return $this->belongsToMany(User::class);
    }
}
