<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.home');
})->name('home');

Route::get('/products', function () {
    return view('pages.about');
})->name('products');

Route::get('/single', function () {
    return view('pages.single');
})->name('single');