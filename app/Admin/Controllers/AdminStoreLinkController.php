<?php
namespace App\Admin\Controllers;
use SCart\Core\Admin\Models\AdminLink;
//use App\Models\link_parrent_chil;

class AdminStoreLinkController extends \SCart\Core\Admin\Controllers\AdminStoreLinkController
{
    public function __construct()
    {
        parent::__construct();
        
    
}
/**
 * Form edit
 */
public function edit($id)
{
    $link = AdminLink::getLinkAdmin($id);
    if (!$link) {
        return redirect()->route('admin.data_not_found')->with(['url' => url()->full()]);
    }
    $data = [
        'title' => sc_language_render('action.edit'),
        'subTitle' => '',
        'title_description' => '',
        'icon' => 'fa fa-edit',
        'link' => $link,
        'arrTarget' => $this->arrTarget,
        'arrGroup' => $this->arrGroup(),
        'url_action' => sc_route_admin('admin_store_link.edit', ['id' => $link['id']]),
        'parrent' => '5',
        
    ];
    return view($this->templatePathAdmin.'screen.store_link')
        ->with($data);
}


}