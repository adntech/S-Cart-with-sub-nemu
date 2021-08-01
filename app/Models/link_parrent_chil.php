<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SCart\Core\Admin\Models\AdminLink;
use Illuminate\Database\Eloquent\Relations\Pivot;

class link_parrent_chil extends Model
{
  
    public $table = 'link_parrent_chils';
    public $timestamps = false;
    protected $fillable = ['link_id','parrent_id'];
    protected $primaryKey = 'link_id';

   
    

}
