<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Course extends Model
{
    use LogsActivity;
    protected $fillable = ['module_id', 'name', 'description'];

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


    public function module()
    {
        return $this->belongsTo(Module::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class, 'user_courses')->withPivot('started_at', 'completed_at');
    }


    public function lectures() {
        return $this->hasMany(Lecture::class);
    }

    public function questions()
{
    return $this->hasMany(Question::class);
}


}
