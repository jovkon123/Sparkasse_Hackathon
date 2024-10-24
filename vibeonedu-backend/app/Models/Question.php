<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Question extends Model
{
    use HasFactory;

    protected $table = 'questions';

    protected $fillable = [
        'question',
        'correct_answer',
        'answer_1',
        'answer_2',
        'answer_3',
        'course_id',
    ];

    public function course()
    {
        return $this->belongsTo(Course::class);
    }
}
