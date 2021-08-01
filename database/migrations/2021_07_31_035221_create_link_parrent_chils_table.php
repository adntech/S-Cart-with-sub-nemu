<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLinkParrentChilsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('link_parrent_chils', function (Blueprint $table) {
            
            $table->foreignId('link_id')->references('id')->on('sc_shop_link');
              
            $table->unsignedBigInteger('parrent_id');
            $table->foreign('parrent_id');
            
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('link_parrent_chils');
    }
}
