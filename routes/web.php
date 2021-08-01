<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ZAdminStoreLinkController;

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
   Route::get('/', 'ZAdminStoreLinkController@index')->name('admin_store_link.index');
   Route::get('create', 'ZAdminStoreLinkController@create')->name('admin_store_link.create');
   Route::post('/create', 'ZAdminStoreLinkController@postCreate')->name('admin_store_link.create');
   Route::get('/edit/{id}', 'ZAdminStoreLinkController@edit')->name('admin_store_link.edit');
   Route::post('/edit/{id}', 'ZAdminStoreLinkController@postEdit')->name('admin_store_link.edit');
   Route::post('/delete', 'ZAdminStoreLinkController@deleteList')->name('admin_store_link.delete');
});});

 Route::get('/test', function () {
   
   return ;
 });

