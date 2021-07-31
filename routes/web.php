<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
 */
Route::group(
  [
      'prefix' => SC_ADMIN_PREFIX,
      'middleware' => SC_ADMIN_MIDDLEWARE,],function(){

Route::group(['prefix' => 'store_link'], function () {
   Route::get('/', 'TestController@index')->name('admin_store_link.index');
   Route::get('create', 'TestController@create')->name('admin_store_link.create');
   Route::post('/create', 'TestController@postCreate')->name('admin_store_link.create');
   Route::get('/edit/{id}', 'TestController@edit')->name('admin_store_link.edit');
   Route::post('/edit/{id}', 'TestController@postEdit')->name('admin_store_link.edit');
   Route::post('/delete', 'TestController@deleteList')->name('admin_store_link.delete');
});});

 Route::get('/test', function () {
   
   return ;
 });

