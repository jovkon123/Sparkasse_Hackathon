<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    public function userHasCity() {
        return $this->hasMany(UserInfo::class);
    }
}
