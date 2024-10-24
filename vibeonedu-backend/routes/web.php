<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

//Route::get('/admin', [AdminController::class, 'dashboard'])->name('admin.dashboard');
//Route::get('/admin/profiles', [AdminController::class, 'profile'])->name('admin.profiles');
//Route::get('/admin/statistics', [AdminController::class, 'statistics'])->name('admin.statistics');
//Route::get('/admin/courses', [AdminController::class, 'courses'])->name('admin.courses');
//Route::get('/admin/certificates', [AdminController::class, 'certificates'])->name('admin.certificates');
//Route::get('/admin/badges', [AdminController::class, 'badges'])->name('admin.badges');
//Route::get('/admin/blogs', [AdminController::class, 'blogs'])->name('admin.blogs');


require __DIR__.'/auth.php';
