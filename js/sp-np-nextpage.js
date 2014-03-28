(function() {
	tinymce.create("tinymce.plugins.spnpnextpage", {
		init : function(ed, url) {			
			ed.addButton( "spnpNextPageBtn", {
                title: "Insert Next Page Tag (Alt+Shift+P)",
                cmd: "WP_Page",
				
            });
		}
	});
	tinymce.PluginManager.add("spnpnextpage", tinymce.plugins.spnpnextpage);
})();