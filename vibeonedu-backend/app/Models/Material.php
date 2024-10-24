<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Material extends Model
{
    use HasFactory, LogsActivity;

    public function getActivitylogOptions(): LogOptions
    {
        return LogOptions::defaults()
            ->logAll()
            ->logExcept([
                'created_at',
                'updated_at',
                'deleted_at',
            ])
            ->logOnlyDirty();
    }


    protected $guarded = null;

    public function lecture()
    {
        return $this->belongsTo(Lecture::class);
    }
}
