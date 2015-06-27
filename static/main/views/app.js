define([
	"views/menus/sidebar",
	"views/webix/icon",
	"views/webix/menutree"
],function(menu){

	//Top toolbar
	var mainToolbar = {
		view: "toolbar",

		elements:[
			{},
			{view: "icon", icon: "search",  width: 45, popup: "searchPopup"},
			{view: "icon", icon: "envelope-o", value: 3, width: 45, popup: "mailPopup"},
			{view: "icon", icon: "comments-o", value: 5, width: 45, popup: "messagePopup"}
		]
	};

	var body = {
		rows:[
			{ height: 49, id: "title", css: "title", template: "<div class='header'>#title#</div><div class='details'>( #details# )</div>", data: {text: "",title: ""}},
			{
				view: "scrollview", scroll:"native-y",
				body:{ cols:[{ $subview:true}] }
			}
		]
	};

	var layout = {
		rows:[
			mainToolbar,
			{
				cols:[
					menu,
					body
				]
			}
		]
	};

	return {
		$ui:layout,
		$menu:"app:menu"
	};
	
});