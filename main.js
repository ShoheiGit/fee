//各料金
var design_top_fee = 10000;
var design_sub_fee = 6000;
var coding_top_fee = 10000;
var coding_sub_fee = 8000;
var coding_mass_fee = 4000;
var wp_top_fee = 5000;
var wp_sub_fee = 4000;

var maxNum = 100;
var design_top_num = document.getElementById('DesignTopNum');
var design_sub_num = document.getElementById('DesignSubNum');
var coding_top_num = document.getElementById('CodingTopNum');
var coding_sub_num = document.getElementById('CodingSubNum');
var coding_mass_num = document.getElementById('CodingMassNum');
var wp_top_num = document.getElementById('WpTopNum');
var wp_sub_num = document.getElementById('WpSubNum');
var sum = document.getElementById('sum');

var price_design_top=0;
var price_design_sub=0;
var price_coding_top=0;
var price_coding_sub=0;
var price_coding_mass=0;
var price_wp_top=0;
var price_wp_sub=0;
var price=0;

//料金をhtmlに表示
var dtf  = document.getElementById('design_top_fee');
dtf.innerHTML= "TOPページ(" + design_top_fee + "円" + ")";
var dsf  = document.getElementById('design_sub_fee');
dsf.innerHTML= "下層ページ(" + design_sub_fee + "円" + ")";
var ctf  = document.getElementById('coding_top_fee');
ctf.innerHTML= "TOPページ(" + coding_top_fee + "円" + ")";
var csf  = document.getElementById('coding_sub_fee');
csf.innerHTML= "下層ページ(" + coding_sub_fee + "円" + ")";
var cmf  = document.getElementById('coding_mass_fee');
cmf.innerHTML= "量産ページ(" + coding_mass_fee + "円" + ")";
var wtf  = document.getElementById('wp_top_fee');
wtf.innerHTML= "TOPページ(" + wp_top_fee + "円" + ")";
var wsf  = document.getElementById('wp_sub_fee');
wsf.innerHTML= "固定ページ(" + wp_sub_fee + "円" + ")";


//-------計算---------------
//計算　デザイン
design_top_num.addEventListener('change', function() {
	var str = this.value;
    
	var num = Number(str.replace(/[^0-9]/g, ''));

	this.value = num;

	price_design_top = num * design_top_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
	sum.value = price.toLocaleString();

});



design_sub_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
    
    this.value = num;
        
    price_design_sub = num * design_sub_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
        
});

//計算coding
coding_top_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
    this.value = num;

    price_coding_top = num * coding_top_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
});

coding_sub_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
        
    this.value = num;
    price_coding_sub = num * coding_sub_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
        
});

coding_mass_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
        
    this.value = num;

    price_coding_mass = num * coding_mass_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
        
});

//wordpress化
wp_top_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
        
    this.value = num;

    price_wp_top = num * wp_top_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
        
});

wp_sub_num.addEventListener('change', function() {

    var str = this.value;
    var num = Number(str.replace(/[^0-9]/g, ''));
        
    this.value = num;

    price_wp_sub = num * wp_sub_fee;
    price = price_design_top + price_design_sub + price_coding_top + price_coding_sub + price_coding_mass + price_wp_top + price_wp_sub;
    sum.value = price.toLocaleString();
        
});

//--------計算終わり-----------