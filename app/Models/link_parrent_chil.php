<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SCart\Core\Admin\Models\AdminLink;
use Illuminate\Database\Eloquent\Relations\Pivot;

class link_parrent_chil extends Pivot
{
  
    public $table = 'link_parrent_chils';
    

    public function child()
    {
        return $this->belongsTo(AdminLink::class,'link_id');
    }
    public function parrent()
    {
        return $this->belongsTo(AdminLink::class,'parrent_id');

    }

}
