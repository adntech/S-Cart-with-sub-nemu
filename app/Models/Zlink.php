<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SCart\Core\Admin\Models\AdminLink;
class Zlink extends AdminLink
{
    public static function getLinkListAdmin(){

        $links=parent::getLinkListAdmin();
      
        return $links;
    }
}
