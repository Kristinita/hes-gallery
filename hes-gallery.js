let HesGalery = {
    executed: false,
    current: 0,
};

HesGalery.init = function() {
    if(!this.executed) {
        $("<link rel='stylesheet' href='https://api.heseya.com/hesgallery/hes-gallery.min.css'>").appendTo('head');

        $("<div id='hgallery'></div>").appendTo('body');
        $("<div id='hg-bg' onclick='HesGalery.hide()'></div>").appendTo('#hgallery');
        $("<div id='hg-pic-cont'><img id='hg-pic' /></div>").appendTo('#hgallery');
        $("<button id='hg-prev' onclick='HesGalery.prev()'></button>").appendTo('#hgallery');
        $("<button id='hg-next' onclick='HesGalery.next()'></button>").appendTo('#hgallery');
        this.executed = true;
    }
    
    this.$img = $('#hg-pic'); // <img>
    this.$galery = $('#hgallery'); // Cała galeria
    
    this.ile = $('.hes-gallery img').length; // ilość elementów galerii
    
    this.imgPaths = []; // ścieżki do plików
    this.subTexts = []; //podpis pod zdjęciem
    
    for(let i = 1; i<= this.ile; i++) {
        this.imgPaths[i] = $('.hes-gallery img:nth-of-type('+i+')').attr('src');
        this.subTexts[i] = $('.hes-gallery img:nth-of-type('+i+')').attr('data-subtext');

        $('.hes-gallery img:nth-of-type('+i+')').attr('onclick','HesGalery.show('+i+')');
    }
    
}

HesGalery.show = function(i) {
    this.current = i;

    this.$img.attr('src',this.imgPaths[i]);
    this.$galery.addClass('open');

    $('#hg-pic-cont').attr('data-subtext', this.subTexts[i]);
    $('#hg-pic-cont').attr('data-howmany', this.current+'/'+this.ile);
}

HesGalery.hide = function() {
    this.$galery.removeClass('open');
}

HesGalery.next = function() {
    if(this.current < this.ile) this.show(this.current+1);
}

HesGalery.prev = function() {
    if(this.current > 1) this.show(this.current-1);
}

addEventListener('keydown', function(e){
    if(e.keyCode == 39) HesGalery.next();
    if(e.keyCode == 37) HesGalery.prev();
    if(e.keyCode == 27) HesGalery.hide();
});

onload = function() {
    HesGalery.init();
}
