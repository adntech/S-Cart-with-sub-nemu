<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use SCart\Core\Admin\Models\AdminLink;
use SCart\Core\Front\Models\ShopLinkStore;
use SCart\Core\Front\Models\ShopLink;
use App\Models\link_parrent_chil;
class Zlink extends AdminLink
{
    public static function getLinkListAdmin() {
        $linkList = (new AdminLink);
        $tableLink = $linkList->getTable();
        if (sc_config_global('MultiVendorPro')) {
            if (session('adminStoreId') != SC_ID_ROOT) {
                $tableLinkStore = (new ShopLinkStore)->getTable();
                $linkList = $linkList->leftJoin($tableLinkStore, $tableLinkStore . '.link_id', $tableLink . '.id');
                $linkList = $linkList->where($tableLinkStore . '.store_id', session('adminStoreId'));
            }
        }
        $parrentlink= new link_parrent_chil;
        $parrentlinktable= $parrentlink->getTable();
        $linkList = $linkList->leftJoin($parrentlinktable, $parrentlinktable . '.link_id', $tableLink . '.id');


        
        $linkList = $linkList->orderBy($tableLink.'.id', 'desc');
        
        $linkList = $linkList->paginate(20);

        
        return $linkList;
    }

    public static function getLinkAdmin($id) {
        $data = self::where('id', $id);
        if (sc_config_global('MultiVendorPro')) {
            if (session('adminStoreId') != SC_ID_ROOT) {
                $tableLinkStore = (new ShopLinkStore)->getTable();
                $tableLink = (new ShopLink)->getTable();
                $data = $data->leftJoin($tableLinkStore, $tableLinkStore . '.link_id', $tableLink . '.id');
                $data = $data->where($tableLinkStore . '.store_id', session('adminStoreId'));
            }
        }
        
        $tableLink = (new ShopLink)->getTable();
        $parrentlink= new link_parrent_chil;
        $parrentlinktable= $parrentlink->getTable();
        $data  = $data ->leftJoin($parrentlinktable, $parrentlinktable . '.link_id', $tableLink . '.id');
        $data = $data->first();
        return $data;
    }
    public static function getreductLinkListAdmin(){
        $lnk =Zlink::all(['id','name',]);
        return $lnk;


    }
    public function set_parrent($p){
        $lpc=link_parrent_chil::firstOrNew(['link_id'=>$this->id]);
        
        $lpc->parrent_id=$p;
        
        $lpc->save();
       
        return $lpc;
    }
    
}
