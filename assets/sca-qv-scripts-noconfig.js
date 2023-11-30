/*
 *	jQuery elevateZoom 3.0.8
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 *

/*
 *	jQuery elevateZoom 3.0.3
 *	Demo's and documentation:
 *	www.elevateweb.co.uk/image-zoom
 *
 *	Copyright (c) 2012 Andrew Eades
 *	www.elevateweb.co.uk
 *
 *	Dual licensed under the GPL and MIT licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function() {
    const verifyPositionQuickView = () => {
        const positionQuery = `.grid__item, .card-list .card-list__column, .cc-product-list .product-block, collection-list.grid .grid__item`
        document.querySelectorAll(positionQuery).forEach((eachProduct) => {
            const aProduct = eachProduct.querySelector('a[href*="/products/"]')
            if (aProduct) {
                const arrHandle = aProduct?.getAttribute("href")?.split('/') ?? []
                const indexProductString = arrHandle?.indexOf("products")
                const handleProduct = indexProductString >= 0 ? arrHandle[indexProductString + 1] ?? null : null

                if (!eachProduct.querySelector(".sca-qv-button")) {
                    let divQv = document.createElement("div")
                    divQv.setAttribute("style", "display: none !important")

                    let textNode = `<a class="sca-qv-button" href="#sca-qv-showqv" title="Quick View" handle="${handleProduct}" style="font-family: tahoma; font-size: 14px; color: rgb(255, 255, 255); background: rgb(0, 0, 0);">QUICK VIEW</a>`
                    const docDivQv = new DOMParser().parseFromString(textNode, "text/html")
                    divQv.innerHTML = docDivQv.body.innerHTML
                    eachProduct.appendChild(divQv)
                }
            }
        })
    }

    verifyPositionQuickView()

    if ((typeof Shopify) === 'undefined') { window.Shopify = {}; }
    // Get from cart.js returns the cart in JSON
    if ((typeof Shopify.getCart) === 'undefined'){
        Shopify.getCart = function(callback, cart){
            if(!cart){
                jQuery.getJSON('/cart.js', function (cart, textStatus) {
                    if ((typeof callback) === 'function') {
                        callback(cart);
                    }
                    else {
                        Shopify.onCartUpdate(cart);
                    }
                });
            }else{
                if ((typeof callback) === 'function') {
                    callback(cart);
                }else if(typeof Shopify.onCartUpdate ==='function') {
                    Shopify.onCartUpdate(cart);
                }
            }
        };
    }
    function isMoblieBrowser () {
        var check = false;
        try {
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        } catch (e) {
            console.log(e);
        }
        return check;
    }


    if ((typeof SCAShopify) === 'undefined') {
        SCAShopify = {};
    }


    SCAShopify.preload = function (images, size) {
        for (var i=0; i < images.length; i++) {
            var image = images[i];

            SCAShopify.loadImage(SCAShopify.getSizedImageUrl(image, size));
        }
    };

    SCAShopify.loadImage = function (path) {
        new Image().src = path;
    };

    SCAShopify.getSizedImageUrl = function (src, size) {
        if (size == null) {
            return src;
        }

        if (size == 'master') {
            return SCAShopify.removeProtocol(src);
        }

        var match  = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

        if (match != null) {
            var prefix = src.split(match[0]);
            var suffix = match[0];

            return SCAShopify.removeProtocol(prefix[0] + "_" + size + suffix);
        } else {
            return null;
        }
    };

    SCAShopify.removeProtocol = function (path) {
        return path.replace(/http(s)?:/, "");
    };

    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    /*

	Override so that SCAShopify.formatMoney returns pretty
	money values instead of cents.

	*/

    SCAShopify.money_format = '${{amount}}';


    SCAShopify.formatMoney = function(cents, format) {

        if (typeof Shopify != "undefined" && typeof Shopify.formatMoney != "undefined") {
            return Shopify.formatMoney(cents,format);
        }

        if (typeof cents == 'string') { cents = cents.replace('.',''); }
        var value = '';
        var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
        var formatString = (format || this.money_format);

        function defaultOption(opt, def) {
            return (typeof opt == 'undefined' ? def : opt);
        }

        function formatWithDelimiters(number, precision, thousands, decimal) {
            precision = defaultOption(precision, 2);
            thousands = defaultOption(thousands, ',');
            decimal   = defaultOption(decimal, '.');

            if (isNaN(number) || number == null) { return 0; }

            number = (number/100.0).toFixed(precision);

            var parts   = number.split('.'),
                dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
                cents   = parts[1] ? (decimal + parts[1]) : '';

            return dollars + cents;
        }

        switch(formatString.match(placeholderRegex)[1]) {
            case 'amount':
                value = formatWithDelimiters(cents, 2);
                break;
            case 'amount_no_decimals':
                value = formatWithDelimiters(cents, 0);
                break;
            case 'amount_with_comma_separator':
                value = formatWithDelimiters(cents, 2, '.', ',');
                break;
            case 'amount_no_decimals_with_comma_separator':
                value = formatWithDelimiters(cents, 0, '.', ',');
                break;
        }

        return formatString.replace(placeholderRegex, value);
    }

    SCAShopify.resizeImage = function(image, size) {
        try {
            if(size == 'original') { return image; }
            else {
                var matches = image.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);
                return matches[1] + '_' + size + '.' + matches[2];
            }
        } catch (e) { return image; }
    };

    /* Used by Tools */

    function floatToString(numeric, decimals) {
        var amount = numeric.toFixed(decimals).toString();
        if(amount.match(/^\.\d+/)) {return "0"+amount; }
        else { return amount; }
    }

    /* Used by API */

    function attributeToString(attribute) {
        if ((typeof attribute) !== 'string') {
            // Converts to a string.
            attribute += '';
            if (attribute === 'undefined') {
                attribute = '';
            }
        }
        // Removing leading and trailing whitespace.
        return jQuery.trim(attribute);
    }


    var loadjscssfile = function(filename, filetype) {
        if (filetype == "js") { // if filename is a external JavaScript file
            var fileref = document.createElement('script');
            fileref.setAttribute("type", "text/javascript");
            fileref.setAttribute("src", filename);
        } else if (filetype == "css") { // if filename is an external CSS file
            var fileref = document.createElement("link");
            fileref.setAttribute("rel", "stylesheet");
            fileref.setAttribute("type", "text/css");
            fileref.setAttribute("href", filename);
        }
        if (typeof fileref != "undefined")
            document.getElementsByTagName("head")[0].appendChild(fileref);
    };

    var list_cart_variants = [];
    function loadProductFromCart ($) {
        $.ajax({
            dataType: "json",
            url: '/cart.js',
            success: function (cart) {
                var temp = [];
                $.each(cart.items,function (index, value) {
                    temp.push(value.id);
                });

                list_cart_variants = temp;
            }
        });
    }

    var SCASettings = {
        loadSettings : function ($ , settings) {
            $('#sca-qv-cartform .sca-qv-product-options').append('<div id="sca-qv-addcart-msg" class="sca-qv-addcart-msg" style="position: absolute !important; margin-top:15px"></div>');
            if(settings.cart_notify_add_format != undefined && settings.cart_notify_in_format != undefined) {
                product_in_cart = settings.cart_notify_add_format.replace('*','<a href="/cart"  class="sca-qv-msg-cart-link">').replace('%','</a>');
                product_added = settings.cart_notify_in_format.replace('*','<a href="/cart"  class="sca-qv-msg-cart-link">').replace('%','</a>');
            }

            var css = '.fancyox-view-detail .zoomWrapper img {  max-width:' +  settings.img_main_width  +' !important ; max-height:' +  settings.img_main_width  +' !important ;   }',
                head = document.head || document.getElementsByTagName('head')[0],
                style = document.createElement('style');

            if(settings.cart_color != undefined) {
                var cart_bnt_config = ' a.sca-qv-cartbtn-config, input.sca-qv-cartbtn-config {background:none repeat scroll 0 0 ' + settings.cart_color +' !important;}';
                css = css + cart_bnt_config;
                $('.sca-qv-cartbtn').addClass('sca-qv-cartbtn-config');
            }

            if (settings.sale_icon_color != undefined) {
                var sale_css = '  .sca-qv-sale-settings {background-color:'+ settings.sale_icon_color +' !important;}';
                css = css + sale_css;
                $('#sca-qv-sale').addClass('sca-qv-sale-settings');
            }

            if (settings.link_color != undefined) {
                var sale_css = '  #sca-qv-right a {color:'+ settings.link_color +';}';
                css = css + sale_css;
            }

            if (settings.title_color != undefined) {
                var sale_css = '  #sca-qv-title strong {color:'+ settings.title_color +';}';
                css = css + sale_css;
            }



            style.type = 'text/css';
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }
            head.appendChild(style);
            //-------------------------------
            var button_text = $('.sca-qv-button');

            var parent = button_text.parent();
            parent.parent().addClass('sca-qv-image');

            button_text.text(settings.bnt_text);
            //button_text.prop('title',settings.bnt_text);

            button_text.hover (
                function () {$(this).css({'color' : settings.bnt_text_hover , 'background' : settings.bnt_color_hover});}
                , function (){$(this).css({'color' : settings.bnt_text_color , 'background-color' : settings.bnt_color});}
            );

            button_text.css({'font-family':(settings.bnt_text_font != 'auto'? settings.bnt_text_font : '')
                ,'font-size': settings.bnt_text_fontsize
                ,'top' : (settings.bnt_possition == 'top'? '20%' :(settings.bnt_possition=='bottom' ? '80%': '5%0'))
                ,'color' : settings.bnt_text_color
                ,'background-color' : settings.bnt_color
            });

            //$('.sca-qv-image').hover(function(){ /*$('.sca-qv-button',this).text(settings.bnt_text);*/$('.sca-qv-button',this).parent().show();}, function(){$('.sca-qv-button',this).parent().hide(); /*$('.sca-qv-button',this).text('');*/});

            if (!(isMoblieBrowser()|| isTablet ())) {
                $('.sca-qv-image').hover(function(){ /*$('.sca-qv-button',this).text(settings.bnt_text);*/$('.sca-qv-button',this).parent().show();}, function(){$('.sca-qv-button',this).parent().hide(); /*$('.sca-qv-button',this).text('');*/});
            } else {
                if (settings.btn_mobile_display && settings.btn_mobile_display !='normal') {
                    if(settings.btn_mobile_display == 'always_show') {
                        $('.sca-qv-image a[href*="/products/"]').off('click');
                        $('.sca-qv-image a[href*="/products/"]').click(function (e) {e.preventDefault();});
                        $('.sca-qv-image a[href*="/products/"]').click(function () {
                            window.location.href= $(this).attr('href');
                        });
                        $('.sca-qv-button').parent().show();
                        $('.sca-qv-button').css('opacity','1');
                    } else {
                        $('.sca-qv-image a[href*="/products/"]').click(function (e) {e.preventDefault();});
                        SCAShopify.click_to_view = function () {
                            $(this).unbind('click.click_to_view');
                            $('.sca-qv-image a[href*="/products/"]').off('click');
                            $('.sca-qv-image a[href*="/products/"]').click(function (e) {e.preventDefault();});
                            $('.sca-qv-image a[href*="/products/"]',this).off('click');
                            $('.sca-qv-button',this).trigger('click');
                            $(this).bind('click.click_to_view',SCAShopify.click_to_view);
                        };
                        $('.sca-qv-image').bind ('click.click_to_view',SCAShopify.click_to_view);
                    }
                } else {
                    $('.sca-qv-image a[href*="/products/"]').click(function (e) {e.preventDefault();});
                    $('.sca-qv-image').click ( function(e) {
                        $('.sca-qv-image .sca-qv-button').parent().hide();
                        $('.sca-qv-button .sca-qv-button').css('opacity','0');
                        $('.sca-qv-button',this).parent().show();
                        $('.sca-qv-button',this).css('opacity','1');
                        $('.sca-qv-image a[href*="/products/"]').off('click');
                        $('.sca-qv-image a[href*="/products/"]').click(function (e) {e.preventDefault();});
                        $('a[href*="/products/"]',this).off('click');
                        $('a[href*="/products/"]',this).click(function () {
                            window.location.href= $(this).attr('href');
                        });
                    });
                }

            };

        }





    };

    var SCABase64 = {

        // private property
        _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

        // public method for encoding
        encode : function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            input = SCABase64._utf8_encode(input);

            while (i < input.length) {

                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

            }

            return output;
        },

        // public method for decoding
        decode : function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (i < input.length) {

                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }

            }

            output = SCABase64._utf8_decode(output);

            return output;

        },

        // private method for UTF-8 encoding
        _utf8_encode : function (string) {
            string = string.replace(/\r\n/g,"\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                }
                else if((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
                else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        },

        // private method for UTF-8 decoding
        _utf8_decode : function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;

            while ( i < utftext.length ) {

                c = utftext.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                }
                else if((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i+1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                }
                else {
                    c2 = utftext.charCodeAt(i+1);
                    c3 = utftext.charCodeAt(i+2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }

            }

            return string;
        }

    };

    function scaqvImageZoom ($,window, document,  undefined) {
        if ( typeof Object.create !== 'function' ) {
            Object.create = function( obj ) {
                function F() {};
                F.prototype = obj;
                return new F();
            };
        }

        (function( $, window, document, undefined ) {

            var ElevateZoom = {
                init: function( options, elem ) {
                    var self = this;

                    self.elem = elem;
                    self.$elem = $( elem );

                    self.imageSrc = self.$elem.data("zoom-image") ? self.$elem.data("zoom-image") : self.$elem.attr("src");

                    self.options = $.extend( {}, $.fn.elevateZoom.options, options );

                    //TINT OVERRIDE SETTINGS
                    if(self.options.tint) {
                        self.options.lensColour = "none", //colour of the lens background
                            self.options.lensOpacity =  "1" //opacity of the lens
                    }
                    //INNER OVERRIDE SETTINGS
                    if(self.options.zoomType == "inner") {self.options.showLens = false;}


                    //Remove alt on hover

                    self.$elem.parent().removeAttr('title').removeAttr('alt');

                    self.zoomImage = self.imageSrc;

                    self.refresh( 1 );



                    //Create the image swap from the gallery
                    $('#'+self.options.gallery + ' a').click( function(e) {

                        //Set a class on the currently active gallery image
                        if(self.options.galleryActiveClass){
                            $('#'+self.options.gallery + ' a').removeClass(self.options.galleryActiveClass);
                            $(this).addClass(self.options.galleryActiveClass);
                        }
                        //stop any link on the a tag from working
                        e.preventDefault();

                        //call the swap image function
                        if($(this).data("zoom-image")){self.zoomImagePre = $(this).data("zoom-image")}
                        else{self.zoomImagePre = $(this).data("image");}
                        self.swaptheimage($(this).data("image"), self.zoomImagePre);
                        return false;
                    });

                },

                refresh: function( length ) {
                    var self = this;

                    setTimeout(function() {
                        self.fetch(self.imageSrc);

                    }, length || self.options.refresh );
                },

                fetch: function(imgsrc) {
                    //get the image
                    var self = this;
                    var newImg = new Image();
                    newImg.onload = function() {
                        //set the large image dimensions - used to calculte ratio's
                        self.largeWidth = newImg.width;
                        self.largeHeight = newImg.height;
                        //once image is loaded start the calls
                        self.startZoom();
                        self.currentImage = self.imageSrc;
                        //let caller know image has been loaded
                        self.options.onZoomedImageLoaded(self.$elem);
                    }
                    newImg.src = imgsrc; // this must be done AFTER setting onload

                    return;

                },

                startZoom: function( ) {
                    var self = this;
                    //get dimensions of the non zoomed image
                    self.nzWidth = self.$elem.width();
                    self.nzHeight = self.$elem.height();

                    //activated elements
                    self.isWindowActive = false;
                    self.isLensActive = false;
                    self.isTintActive = false;
                    self.overWindow = false;

                    //CrossFade Wrappe
                    if(self.options.imageCrossfade){
                        self.zoomWrap = self.$elem.wrap('<div style="height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;" class="zoomWrapper" />');
                        /*self.$elem.css('position', 'absolute'); */
                    }

                    self.zoomLock = 1;
                    self.scrollingLock = false;
                    self.changeBgSize = false;
                    self.currentZoomLevel = self.options.zoomLevel;


                    //get offset of the non zoomed image
                    self.nzOffset = self.$elem.offset();
                    //calculate the width ratio of the large/small image
                    self.widthRatio = (self.largeWidth/self.currentZoomLevel) / self.nzWidth;
                    self.heightRatio = (self.largeHeight/self.currentZoomLevel) / self.nzHeight;


                    //if window zoom
                    if(self.options.zoomType == "window") {
                        self.zoomWindowStyle = "overflow: hidden;"
                            + "background-position: 0px 0px;text-align:center;"
                            + "background-color: " + String(self.options.zoomWindowBgColour)
                            + ";width: " + String(self.options.zoomWindowWidth) + "px;"
                            + "height: " + String(self.options.zoomWindowHeight)
                            + "px;float: left;"
                            + "background-size: "+ self.largeWidth/self.currentZoomLevel+ "px " +self.largeHeight/self.currentZoomLevel + "px;"
                            + "display: none;z-index:100;"
                            + "border: " + String(self.options.borderSize)
                            + "px solid " + self.options.borderColour
                            + ";background-repeat: no-repeat;"
                            + "position: absolute;";
                    }


                    //if inner  zoom
                    if(self.options.zoomType == "inner") {
                        //has a border been put on the image? Lets cater for this

                        var borderWidth = self.$elem.css("border-left-width");

                        self.zoomWindowStyle = "overflow: hidden;"
                            + "margin-left: " + String(borderWidth) + ";"
                            + "margin-top: " + String(borderWidth) + ";"
                            + "background-position: 0px 0px;"
                            + "width: " + String(self.nzWidth) + "px;"
                            + "height: " + String(self.nzHeight)
                            + "px;float: left;"
                            + "display: none;"
                            + "cursor:"+(self.options.cursor)+";"
                            + "px solid " + self.options.borderColour
                            + ";background-repeat: no-repeat;"
                            + "position: absolute;";
                    }



                    //lens style for window zoom
                    if(self.options.zoomType == "window") {


                        // adjust images less than the window height

                        if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
                            lensHeight = self.nzHeight;
                        }
                        else{
                            lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
                        }
                        if(self.largeWidth < self.options.zoomWindowWidth){
                            lensWidth = self.nzWidth;
                        }
                        else{
                            lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
                        }


                        self.lensStyle = "background-position: 0px 0px;width: " + String((self.options.zoomWindowWidth)/self.widthRatio) + "px;height: " + String((self.options.zoomWindowHeight)/self.heightRatio)
                            + "px;float: right;display: none;"
                            + "overflow: hidden;"
                            + "z-index: 999;"
                            + "-webkit-transform: translateZ(0);"
                            + "opacity:"+(self.options.lensOpacity)+";filter: alpha(opacity = "+(self.options.lensOpacity*100)+"); zoom:1;"
                            + "width:"+lensWidth+"px;"
                            + "height:"+lensHeight+"px;"
                            + "background-color:"+(self.options.lensColour)+";"
                            + "cursor:"+(self.options.cursor)+";"
                            + "border: "+(self.options.lensBorderSize)+"px" +
                            " solid "+(self.options.lensBorderColour)+";background-repeat: no-repeat;position: absolute;";
                    }


                    //tint style
                    self.tintStyle = "display: block;"
                        + "position: absolute;"
                        + "background-color: "+self.options.tintColour+";"
                        + "filter:alpha(opacity=0);"
                        + "opacity: 0;"
                        + "width: " + self.nzWidth + "px;"
                        + "height: " + self.nzHeight + "px;"

                    ;

                    //lens style for lens zoom with optional round for modern browsers
                    self.lensRound = '';

                    if(self.options.zoomType == "lens") {

                        self.lensStyle = "background-position: 0px 0px;"
                            + "float: left;display: none;"
                            + "border: " + String(self.options.borderSize) + "px solid " + self.options.borderColour+";"
                            + "width:"+ String(self.options.lensSize) +"px;"
                            + "height:"+ String(self.options.lensSize)+"px;"
                            + "background-repeat: no-repeat;position: absolute;";


                    }


                    //does not round in all browsers
                    if(self.options.lensShape == "round") {
                        self.lensRound = "border-top-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                            + "border-top-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                            + "border-bottom-left-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;"
                            + "border-bottom-right-radius: " + String(self.options.lensSize / 2 + self.options.borderSize) + "px;";

                    }

                    //create the div's                                                + ""
                    //self.zoomContainer = $('<div/>').addClass('zoomContainer').css({"position":"relative", "height":self.nzHeight, "width":self.nzWidth});

                    self.zoomContainer = $('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+self.nzOffset.left+'px;top:'+self.nzOffset.top+'px;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;"></div>');
                    $('body').append(self.zoomContainer);


                    //this will add overflow hidden and contrain the lens on lens mode
                    if(self.options.containLensZoom && self.options.zoomType == "lens"){
                        self.zoomContainer.css("overflow", "hidden");
                    }
                    if(self.options.zoomType != "inner") {
                        self.zoomLens = $("<div class='zoomLens' style='" + self.lensStyle + self.lensRound +"'>&nbsp;</div>")
                            .appendTo(self.zoomContainer)
                            .click(function () {
                                self.$elem.trigger('click');
                            });


                        if(self.options.tint) {
                            self.tintContainer = $('<div/>').addClass('tintContainer');
                            self.zoomTint = $("<div class='zoomTint' style='"+self.tintStyle+"'></div>");


                            self.zoomLens.wrap(self.tintContainer);


                            self.zoomTintcss = self.zoomLens.after(self.zoomTint);

                            //if tint enabled - set an image to show over the tint

                            self.zoomTintImage = $('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+self.nzWidth+'px; height: '+self.nzHeight+'px;" src="'+self.imageSrc+'">')
                                .appendTo(self.zoomLens)
                                .click(function () {

                                    self.$elem.trigger('click');
                                });

                        }

                    }







                    //create zoom window
                    if(isNaN(self.options.zoomWindowPosition)){
                        self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                            .appendTo('body')
                            .click(function () {
                                self.$elem.trigger('click');
                            });
                    }else{
                        self.zoomWindow = $("<div style='z-index:999;left:"+(self.windowOffsetLeft)+"px;top:"+(self.windowOffsetTop)+"px;" + self.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>")
                            .appendTo(self.zoomContainer)
                            .click(function () {
                                self.$elem.trigger('click');
                            });
                    }
                    self.zoomWindowContainer = $('<div/>').addClass('zoomWindowContainer').css("width",self.options.zoomWindowWidth);
                    self.zoomWindow.wrap(self.zoomWindowContainer);


                    //  self.captionStyle = "text-align: left;background-color: black;color: white;font-weight: bold;padding: 10px;font-family: sans-serif;font-size: 11px";
                    // self.zoomCaption = $('<div class="elevatezoom-caption" style="'+self.captionStyle+'display: block; width: 280px;">INSERT ALT TAG</div>').appendTo(self.zoomWindow.parent());

                    if(self.options.zoomType == "lens") {
                        self.zoomLens.css({ backgroundImage: "url('" + self.imageSrc + "')" });
                    }
                    if(self.options.zoomType == "window") {
                        self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
                    }
                    if(self.options.zoomType == "inner") {
                        self.zoomWindow.css({ backgroundImage: "url('" + self.imageSrc + "')" });
                    }
                    /*-------------------END THE ZOOM WINDOW AND LENS----------------------------------*/
                    //touch events
                    if (isMoblieBrowser () ) {
                        return;
                    }
                    self.$elem.bind('touchmove', function(e){
                        e.preventDefault();
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        self.setPosition(touch);

                    });
                    self.zoomContainer.bind('touchmove', function(e){
                        if(self.options.zoomType == "inner") {
                            self.showHideWindow("show");

                        }
                        e.preventDefault();
                        var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                        self.setPosition(touch);

                    });
                    self.zoomContainer.bind('touchend', function(e){
                        self.showHideWindow("hide");
                        if(self.options.showLens) {self.showHideLens("hide");}
                        if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
                    });

                    self.$elem.bind('touchend', function(e){
                        self.showHideWindow("hide");
                        if(self.options.showLens) {self.showHideLens("hide");}
                        if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
                    });
                    if(self.options.showLens) {
                        self.zoomLens.bind('touchmove', function(e){

                            e.preventDefault();
                            var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                            self.setPosition(touch);
                        });


                        self.zoomLens.bind('touchend', function(e){
                            self.showHideWindow("hide");
                            if(self.options.showLens) {self.showHideLens("hide");}
                            if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("hide");}
                        });
                    }
                    //Needed to work in IE
                    self.$elem.bind('mousemove', function(e){
                        if(self.overWindow == false){self.setElements("show");}
                        //make sure on orientation change the setposition is not fired
                        if(self.lastX !== e.clientX || self.lastY !== e.clientY){
                            self.setPosition(e);
                            self.currentLoc = e;
                        }
                        self.lastX = e.clientX;
                        self.lastY = e.clientY;

                    });

                    self.zoomContainer.bind('mousemove', function(e){

                        if(self.overWindow == false){self.setElements("show");}

                        //make sure on orientation change the setposition is not fired
                        if(self.lastX !== e.clientX || self.lastY !== e.clientY){
                            self.setPosition(e);
                            self.currentLoc = e;
                        }
                        self.lastX = e.clientX;
                        self.lastY = e.clientY;
                    });
                    if(self.options.zoomType != "inner") {
                        self.zoomLens.bind('mousemove', function(e){
                            //make sure on orientation change the setposition is not fired
                            if(self.lastX !== e.clientX || self.lastY !== e.clientY){
                                self.setPosition(e);
                                self.currentLoc = e;
                            }
                            self.lastX = e.clientX;
                            self.lastY = e.clientY;
                        });
                    }
                    if(self.options.tint && self.options.zoomType != "inner") {
                        self.zoomTint.bind('mousemove', function(e){
                            //make sure on orientation change the setposition is not fired
                            if(self.lastX !== e.clientX || self.lastY !== e.clientY){
                                self.setPosition(e);
                                self.currentLoc = e;
                            }
                            self.lastX = e.clientX;
                            self.lastY = e.clientY;
                        });

                    }
                    if(self.options.zoomType == "inner") {
                        self.zoomWindow.bind('mousemove', function(e) {
                            //self.overWindow = true;
                            //make sure on orientation change the setposition is not fired
                            if(self.lastX !== e.clientX || self.lastY !== e.clientY){
                                self.setPosition(e);
                                self.currentLoc = e;
                            }
                            self.lastX = e.clientX;
                            self.lastY = e.clientY;
                        });

                    }


                    //  lensFadeOut: 500,  zoomTintFadeIn
                    self.zoomContainer.add(self.$elem).mouseenter(function(){

                        if(self.overWindow == false){self.setElements("show");}


                    }).mouseleave(function(){
                        if(!self.scrollLock){
                            self.setElements("hide");
                        }
                    });
                    //end ove image





                    if(self.options.zoomType != "inner") {
                        self.zoomWindow.mouseenter(function(){
                            self.overWindow = true;
                            self.setElements("hide");
                        }).mouseleave(function(){

                            self.overWindow = false;
                        });
                    }
                    //end ove image



//				var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);

                    //      $(this).empty();
                    //    return false;

                    //fix for initial zoom setting
                    if (self.options.zoomLevel != 1){
                        //	self.changeZoomLevel(self.currentZoomLevel);
                    }
                    //set the min zoomlevel
                    if(self.options.minZoomLevel){
                        self.minZoomLevel = self.options.minZoomLevel;
                    }
                    else{
                        self.minZoomLevel = self.options.scrollZoomIncrement * 2;
                    }


                    if(self.options.scrollZoom){


                        self.zoomContainer.add(self.$elem).bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e){


//						in IE there is issue with firing of mouseleave - So check whether still scrolling
//						and on mouseleave check if scrolllock
                            self.scrollLock = true;
                            clearTimeout($.data(this, 'timer'));
                            $.data(this, 'timer', setTimeout(function() {
                                self.scrollLock = false;
                                //do something
                            }, 250));

                            var theEvent = e.originalEvent.wheelDelta || e.originalEvent.detail*-1


                            //this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
                            //   e.preventDefault();


                            e.stopImmediatePropagation();
                            e.stopPropagation();
                            e.preventDefault();


                            if(theEvent /120 > 0) {
                                //scrolling up
                                if(self.currentZoomLevel >= self.minZoomLevel){
                                    self.changeZoomLevel(self.currentZoomLevel-self.options.scrollZoomIncrement);
                                }

                            }
                            else{
                                //scrolling down


                                if(self.options.maxZoomLevel){
                                    if(self.currentZoomLevel <= self.options.maxZoomLevel){
                                        self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);
                                    }
                                }
                                else{
                                    //andy

                                    self.changeZoomLevel(parseFloat(self.currentZoomLevel)+self.options.scrollZoomIncrement);
                                }

                            }
                            return false;
                        });
                    }


                },
                setElements: function(type) {
                    var self = this;
                    if(!self.options.zoomEnabled){return false;}
                    if(type=="show"){
                        if(self.isWindowSet){
                            if(self.options.zoomType == "inner") {self.showHideWindow("show");}
                            if(self.options.zoomType == "window") {self.showHideWindow("show");}
                            if(self.options.showLens) {self.showHideLens("show");}
                            if(self.options.tint && self.options.zoomType != "inner") {self.showHideTint("show");
                            }
                        }
                    }

                    if(type=="hide"){
                        if(self.options.zoomType == "window") {self.showHideWindow("hide");}
                        if(!self.options.tint) {self.showHideWindow("hide");}
                        if(self.options.showLens) {self.showHideLens("hide");}
                        if(self.options.tint) {	self.showHideTint("hide");}
                    }
                },
                setPosition: function(e) {

                    var self = this;

                    if(!self.options.zoomEnabled){return false;}

                    //recaclc offset each time in case the image moves
                    //this can be caused by other on page elements
                    self.nzHeight = self.$elem.height();
                    self.nzWidth = self.$elem.width();
                    self.nzOffset = self.$elem.offset();

                    if(self.options.tint && self.options.zoomType != "inner") {
                        self.zoomTint.css({ top: 0});
                        self.zoomTint.css({ left: 0});
                    }
                    //set responsive
                    //will checking if the image needs changing before running this code work faster?
                    if(self.options.responsive && !self.options.scrollZoom){
                        if(self.options.showLens){
                            if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
                                lensHeight = self.nzHeight;
                            }
                            else{
                                lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
                            }
                            if(self.largeWidth < self.options.zoomWindowWidth){
                                lensWidth = self.nzWidth;
                            }
                            else{
                                lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
                            }
                            self.widthRatio = self.largeWidth / self.nzWidth;
                            self.heightRatio = self.largeHeight / self.nzHeight;
                            if(self.options.zoomType != "lens") {


                                //possibly dont need to keep recalcalculating
                                //if the lens is heigher than the image, then set lens size to image size
                                if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
                                    lensHeight = self.nzHeight;

                                }
                                else{
                                    lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
                                }

                                if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
                                    lensWidth = self.nzWidth;
                                }
                                else{
                                    lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
                                }

                                self.zoomLens.css('width', lensWidth);
                                self.zoomLens.css('height', lensHeight);

                                if(self.options.tint){
                                    self.zoomTintImage.css('width', self.nzWidth);
                                    self.zoomTintImage.css('height', self.nzHeight);
                                }

                            }
                            if(self.options.zoomType == "lens") {

                                self.zoomLens.css({ width: String(self.options.lensSize) + 'px', height: String(self.options.lensSize) + 'px' })


                            }
                            //end responsive image change
                        }
                    }

                    //container fix
                    self.zoomContainer.css({ top: self.nzOffset.top});
                    self.zoomContainer.css({ left: self.nzOffset.left});
                    self.mouseLeft = parseInt(e.pageX - self.nzOffset.left);
                    self.mouseTop = parseInt(e.pageY - self.nzOffset.top);
                    //calculate the Location of the Lens

                    //calculate the bound regions - but only if zoom window
                    if(self.options.zoomType == "window") {
                        self.Etoppos = (self.mouseTop < (self.zoomLens.height()/2));
                        self.Eboppos = (self.mouseTop > self.nzHeight - (self.zoomLens.height()/2)-(self.options.lensBorderSize*2));
                        self.Eloppos = (self.mouseLeft < 0+((self.zoomLens.width()/2)));
                        self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.zoomLens.width()/2)-(self.options.lensBorderSize*2)));
                    }
                    //calculate the bound regions - but only for inner zoom
                    if(self.options.zoomType == "inner"){
                        self.Etoppos = (self.mouseTop < ((self.nzHeight/2)/self.heightRatio) );
                        self.Eboppos = (self.mouseTop > (self.nzHeight - ((self.nzHeight/2)/self.heightRatio)));
                        self.Eloppos = (self.mouseLeft < 0+(((self.nzWidth/2)/self.widthRatio)));
                        self.Eroppos = (self.mouseLeft > (self.nzWidth - (self.nzWidth/2)/self.widthRatio-(self.options.lensBorderSize*2)));
                    }

                    // if the mouse position of the slider is one of the outerbounds, then hide  window and lens
                    if (self.mouseLeft <= 0 || self.mouseTop < 0 || self.mouseLeft > self.nzWidth || self.mouseTop > self.nzHeight ) {
                        self.setElements("hide");
                        return;
                    }
                    //else continue with operations
                    else {


                        //lens options
                        if(self.options.showLens) {
                            //		self.showHideLens("show");
                            //set background position of lens
                            self.lensLeftPos = String(self.mouseLeft - self.zoomLens.width() / 2);
                            self.lensTopPos = String(self.mouseTop - self.zoomLens.height() / 2);


                        }
                        //adjust the background position if the mouse is in one of the outer regions

                        //Top region
                        if(self.Etoppos){
                            self.lensTopPos = 0;
                        }
                        //Left Region
                        if(self.Eloppos){
                            self.windowLeftPos = 0;
                            self.lensLeftPos = 0;
                            self.tintpos=0;
                        }
                        //Set bottom and right region for window mode
                        if(self.options.zoomType == "window") {
                            if(self.Eboppos){
                                self.lensTopPos = Math.max( (self.nzHeight)-self.zoomLens.height()-(self.options.lensBorderSize*2), 0 );
                            }
                            if(self.Eroppos){
                                self.lensLeftPos = (self.nzWidth-(self.zoomLens.width())-(self.options.lensBorderSize*2));
                            }
                        }
                        //Set bottom and right region for inner mode
                        if(self.options.zoomType == "inner") {
                            if(self.Eboppos){
                                self.lensTopPos = Math.max( ((self.nzHeight)-(self.options.lensBorderSize*2)), 0 );
                            }
                            if(self.Eroppos){
                                self.lensLeftPos = (self.nzWidth-(self.nzWidth)-(self.options.lensBorderSize*2));
                            }

                        }
                        //if lens zoom
                        if(self.options.zoomType == "lens") {
                            self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomLens.width() / 2) * (-1));
                            self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomLens.height() / 2) * (-1));

                            self.zoomLens.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });

                            if(self.changeBgSize){

                                if(self.nzHeight>self.nzWidth){
                                    if(self.options.zoomType == "lens"){
                                        self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                    }

                                    self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                }
                                else{
                                    if(self.options.zoomType == "lens"){
                                        self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                    }
                                    self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                }
                                self.changeBgSize = false;
                            }

                            self.setWindowPostition(e);
                        }
                        //if tint zoom
                        if(self.options.tint && self.options.zoomType != "inner") {
                            self.setTintPosition(e);

                        }
                        //set the css background position
                        if(self.options.zoomType == "window") {
                            self.setWindowPostition(e);
                        }
                        if(self.options.zoomType == "inner") {
                            self.setWindowPostition(e);
                        }
                        if(self.options.showLens) {

                            if(self.fullwidth && self.options.zoomType != "lens"){
                                self.lensLeftPos = 0;

                            }
                            self.zoomLens.css({ left: self.lensLeftPos + 'px', top: self.lensTopPos + 'px' })
                        }

                    } //end else



                },
                showHideWindow: function(change) {
                    var self = this;
                    if(change == "show"){
                        if(!self.isWindowActive){
                            if(self.options.zoomWindowFadeIn){
                                self.zoomWindow.stop(true, true, false).fadeIn(self.options.zoomWindowFadeIn);
                            }
                            else{self.zoomWindow.show();}
                            self.isWindowActive = true;
                        }
                    }
                    if(change == "hide"){
                        if(self.isWindowActive){
                            if(self.options.zoomWindowFadeOut){
                                self.zoomWindow.stop(true, true).fadeOut(self.options.zoomWindowFadeOut);
                            }
                            else{self.zoomWindow.hide();}
                            self.isWindowActive = false;
                        }
                    }
                },
                showHideLens: function(change) {
                    var self = this;
                    if(change == "show"){
                        if(!self.isLensActive){
                            if(self.options.lensFadeIn){
                                self.zoomLens.stop(true, true, false).fadeIn(self.options.lensFadeIn);
                            }
                            else{self.zoomLens.show();}
                            self.isLensActive = true;
                        }
                    }
                    if(change == "hide"){
                        if(self.isLensActive){
                            if(self.options.lensFadeOut){
                                self.zoomLens.stop(true, true).fadeOut(self.options.lensFadeOut);
                            }
                            else{self.zoomLens.hide();}
                            self.isLensActive = false;
                        }
                    }
                },
                showHideTint: function(change) {
                    var self = this;
                    if(change == "show"){
                        if(!self.isTintActive){

                            if(self.options.zoomTintFadeIn){
                                self.zoomTint.css({opacity:self.options.tintOpacity}).animate().stop(true, true).fadeIn("slow");
                            }
                            else{
                                self.zoomTint.css({opacity:self.options.tintOpacity}).animate();
                                self.zoomTint.show();


                            }
                            self.isTintActive = true;
                        }
                    }
                    if(change == "hide"){
                        if(self.isTintActive){

                            if(self.options.zoomTintFadeOut){
                                self.zoomTint.stop(true, true).fadeOut(self.options.zoomTintFadeOut);
                            }
                            else{self.zoomTint.hide();}
                            self.isTintActive = false;
                        }
                    }
                },
                setLensPostition: function( e ) {


                },
                setWindowPostition: function( e ) {
                    //return obj.slice( 0, count );
                    var self = this;

                    if(!isNaN(self.options.zoomWindowPosition)){

                        switch (self.options.zoomWindowPosition) {
                            case 1: //done
                                self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
                                self.windowOffsetLeft =(+self.nzWidth); //DONE 1, 2, 3, 4, 16
                                break;
                            case 2:
                                if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin

                                    self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
                                    self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
                                }
                                else{ //negative margin

                                }
                                break;
                            case 3: //done
                                self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
                                self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
                                break;
                            case 4: //done
                                self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                                self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
                                break;
                            case 5: //done
                                self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                                self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
                                break;
                            case 6:
                                if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
                                    self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8

                                    self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);
                                }
                                else{ //negative margin

                                }


                                break;
                            case 7: //done
                                self.windowOffsetTop = (self.nzHeight);  //DONE - 4,5,6,7,8
                                self.windowOffsetLeft = 0; //DONE 7, 13
                                break;
                            case 8: //done
                                self.windowOffsetTop = (self.nzHeight); //DONE - 4,5,6,7,8
                                self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
                                break;
                            case 9:  //done
                                self.windowOffsetTop = (self.nzHeight - self.zoomWindow.height() - (self.options.borderSize*2)); //DONE 3,9
                                self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
                                break;
                            case 10:
                                if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin

                                    self.windowOffsetTop = ((self.options.zoomWindowHeight/2)-(self.nzHeight/2))*(-1);
                                    self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
                                }
                                else{ //negative margin

                                }
                                break;
                            case 11:
                                self.windowOffsetTop = (self.options.zoomWindowOffety);
                                self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
                                break;
                            case 12: //done
                                self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
                                self.windowOffsetLeft =(self.zoomWindow.width()+(self.options.borderSize*2) )* (-1);  //DONE 8,9,10,11,12
                                break;
                            case 13: //done
                                self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
                                self.windowOffsetLeft =(0); //DONE 7, 13
                                break;
                            case 14:
                                if(self.options.zoomWindowHeight > self.nzHeight){ //positive margin
                                    self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16

                                    self.windowOffsetLeft =((self.options.zoomWindowWidth/2)-(self.nzWidth/2)+(self.options.borderSize*2))*(-1);
                                }
                                else{ //negative margin

                                }

                                break;
                            case 15://done
                                self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
                                self.windowOffsetLeft =(self.nzWidth-self.zoomWindow.width()-(self.options.borderSize*2)); //DONE - 5,15
                                break;
                            case 16:  //done
                                self.windowOffsetTop = (self.zoomWindow.height()+(self.options.borderSize*2))*(-1); //DONE 12,13,14,15,16
                                self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
                                break;
                            default: //done
                                self.windowOffsetTop = (self.options.zoomWindowOffety);//DONE - 1
                                self.windowOffsetLeft =(self.nzWidth); //DONE 1, 2, 3, 4, 16
                        }
                    } //end isNAN
                    else{
                        //WE CAN POSITION IN A CLASS - ASSUME THAT ANY STRING PASSED IS
                        self.externalContainer = $('#'+self.options.zoomWindowPosition);
                        self.externalContainerWidth = self.externalContainer.width();
                        self.externalContainerHeight = self.externalContainer.height();
                        self.externalContainerOffset = self.externalContainer.offset();

                        self.windowOffsetTop = self.externalContainerOffset.top;//DONE - 1
                        self.windowOffsetLeft =self.externalContainerOffset.left; //DONE 1, 2, 3, 4, 16

                    }
                    self.isWindowSet = true;
                    self.windowOffsetTop = self.windowOffsetTop + self.options.zoomWindowOffety;
                    self.windowOffsetLeft = self.windowOffsetLeft + self.options.zoomWindowOffetx;

                    self.zoomWindow.css({ top: self.windowOffsetTop});
                    self.zoomWindow.css({ left: self.windowOffsetLeft});

                    if(self.options.zoomType == "inner") {
                        self.zoomWindow.css({ top: 0});
                        self.zoomWindow.css({ left: 0});

                    }


                    self.windowLeftPos = String(((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1));
                    self.windowTopPos = String(((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));
                    if(self.Etoppos){self.windowTopPos = 0;}
                    if(self.Eloppos){self.windowLeftPos = 0;}
                    if(self.Eboppos){self.windowTopPos = (self.largeHeight/self.currentZoomLevel-self.zoomWindow.height())*(-1);  }
                    if(self.Eroppos){self.windowLeftPos = ((self.largeWidth/self.currentZoomLevel-self.zoomWindow.width())*(-1));}

                    //stops micro movements
                    if(self.fullheight){
                        self.windowTopPos = 0;

                    }
                    if(self.fullwidth){
                        self.windowLeftPos = 0;

                    }
                    //set the css background position


                    if(self.options.zoomType == "window" || self.options.zoomType == "inner") {

                        if(self.zoomLock == 1){
                            //overrides for images not zoomable
                            if(self.widthRatio <= 1){

                                self.windowLeftPos = 0;
                            }
                            if(self.heightRatio <= 1){
                                self.windowTopPos = 0;
                            }
                        }
                        // adjust images less than the window height

                        if(self.largeHeight < self.options.zoomWindowHeight){

                            self.windowTopPos = 0;
                        }
                        if(self.largeWidth < self.options.zoomWindowWidth){
                            self.windowLeftPos = 0;
                        }

                        //set the zoomwindow background position
                        if (self.options.easing){

                            //     if(self.changeZoom){
                            //           clearInterval(self.loop);
                            //           self.changeZoom = false;
                            //           self.loop = false;

                            //            }
                            //set the pos to 0 if not set
                            if(!self.xp){self.xp = 0;}
                            if(!self.yp){self.yp = 0;}
                            //if loop not already started, then run it
                            if (!self.loop){
                                self.loop = setInterval(function(){
                                    //using zeno's paradox

                                    self.xp += (self.windowLeftPos  - self.xp) / self.options.easingAmount;
                                    self.yp += (self.windowTopPos  - self.yp) / self.options.easingAmount;
                                    if(self.scrollingLock){


                                        clearInterval(self.loop);
                                        self.xp = self.windowLeftPos;
                                        self.yp = self.windowTopPos

                                        self.xp = ((e.pageX - self.nzOffset.left) * self.widthRatio - self.zoomWindow.width() / 2) * (-1);
                                        self.yp = (((e.pageY - self.nzOffset.top) * self.heightRatio - self.zoomWindow.height() / 2) * (-1));

                                        if(self.changeBgSize){
                                            if(self.nzHeight>self.nzWidth){
                                                if(self.options.zoomType == "lens"){
                                                    self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                                }
                                                self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                            }
                                            else{
                                                if(self.options.zoomType != "lens"){
                                                    self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                                }
                                                self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });

                                            }

                                            /*
             if(!self.bgxp){self.bgxp = self.largeWidth/self.newvalue;}
						if(!self.bgyp){self.bgyp = self.largeHeight/self.newvalue ;}
                 if (!self.bgloop){
                 	self.bgloop = setInterval(function(){

                 self.bgxp += (self.largeWidth/self.newvalue  - self.bgxp) / self.options.easingAmount;
								self.bgyp += (self.largeHeight/self.newvalue  - self.bgyp) / self.options.easingAmount;

           self.zoomWindow.css({ "background-size": self.bgxp + 'px ' + self.bgyp + 'px' });


                  }, 16);

                 }
										 */
                                            self.changeBgSize = false;
                                        }

                                        self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                                        self.scrollingLock = false;
                                        self.loop = false;

                                    }
                                    else{
                                        if(self.changeBgSize){
                                            if(self.nzHeight>self.nzWidth){
                                                if(self.options.zoomType == "lens"){
                                                    self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                                }
                                                self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                            }
                                            else{
                                                if(self.options.zoomType != "lens"){
                                                    self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                                }
                                                self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                            }
                                            self.changeBgSize = false;
                                        }

                                        self.zoomWindow.css({ backgroundPosition: self.xp + 'px ' + self.yp + 'px' });
                                    }
                                }, 16);
                            }
                        }
                        else{
                            if(self.changeBgSize){
                                if(self.nzHeight>self.nzWidth){
                                    if(self.options.zoomType == "lens"){
                                        self.zoomLens.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                    }

                                    self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                }
                                else{
                                    if(self.options.zoomType == "lens"){
                                        self.zoomLens.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                    }
                                    if((self.largeHeight/self.newvaluewidth) < self.options.zoomWindowHeight){

                                        self.zoomWindow.css({ "background-size": self.largeWidth/self.newvaluewidth + 'px ' + self.largeHeight/self.newvaluewidth + 'px' });
                                    }
                                    else{

                                        self.zoomWindow.css({ "background-size": self.largeWidth/self.newvalueheight + 'px ' + self.largeHeight/self.newvalueheight + 'px' });
                                    }

                                }
                                self.changeBgSize = false;
                            }

                            self.zoomWindow.css({ backgroundPosition: self.windowLeftPos + 'px ' + self.windowTopPos + 'px' });
                        }
                    }
                },
                setTintPosition: function(e){
                    var self = this;
                    self.nzOffset = self.$elem.offset();
                    self.tintpos = String(((e.pageX - self.nzOffset.left)-(self.zoomLens.width() / 2)) * (-1));
                    self.tintposy = String(((e.pageY - self.nzOffset.top) - self.zoomLens.height() / 2) * (-1));
                    if(self.Etoppos){
                        self.tintposy = 0;
                    }
                    if(self.Eloppos){
                        self.tintpos=0;
                    }
                    if(self.Eboppos){
                        self.tintposy = (self.nzHeight-self.zoomLens.height()-(self.options.lensBorderSize*2))*(-1);
                    }
                    if(self.Eroppos){
                        self.tintpos = ((self.nzWidth-self.zoomLens.width()-(self.options.lensBorderSize*2))*(-1));
                    }
                    if(self.options.tint) {
                        //stops micro movements
                        if(self.fullheight){
                            self.tintposy = 0;

                        }
                        if(self.fullwidth){
                            self.tintpos = 0;

                        }
                        self.zoomTintImage.css({'left': self.tintpos+'px'});
                        self.zoomTintImage.css({'top': self.tintposy+'px'});
                    }
                },

                swaptheimage: function(smallimage, largeimage){
                    var self = this;
                    var newImg = new Image();

                    if(self.options.loadingIcon){
                        /*self.spinner = $('<div style="background: url('+self.options.loadingIcon+') no-repeat center;height:'+self.nzHeight+'px;width:'+self.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>');
					self.$elem.after(self.spinner);*/
                        $.scafancybox.showLoading();
                    }

                    self.options.onImageSwap(self.$elem);

                    newImg.onload = function() {
                        self.largeWidth = newImg.width;
                        self.largeHeight = newImg.height;
                        self.zoomImage = largeimage;
                        self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });
                        self.zoomWindow.css({ "background-size": self.largeWidth + 'px ' + self.largeHeight + 'px' });


                        self.swapAction(smallimage, largeimage);
                        return;
                    }
                    newImg.src = largeimage; // this must be done AFTER setting onload

                },
                swapAction: function(smallimage, largeimage){


                    var self = this;

                    var newImg2 = new Image();
                    newImg2.onload = function() {
                        //re-calculate values
                        self.nzHeight = newImg2.height;
                        self.nzWidth = newImg2.width;
                        self.options.onImageSwapComplete(self.$elem);

                        self.doneCallback();
                        return;
                    }
                    newImg2.src = smallimage;

                    //reset the zoomlevel to that initially set in options
                    self.currentZoomLevel = self.options.zoomLevel;
                    self.options.maxZoomLevel = false;

                    //swaps the main image
                    //self.$elem.attr("src",smallimage);
                    //swaps the zoom image
                    if(self.options.zoomType == "lens") {
                        self.zoomLens.css({ backgroundImage: "url('" + largeimage + "')" });
                    }
                    if(self.options.zoomType == "window") {
                        self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
                    }
                    if(self.options.zoomType == "inner") {
                        self.zoomWindow.css({ backgroundImage: "url('" + largeimage + "')" });
                    }



                    self.currentImage = largeimage;

                    if(self.options.imageCrossfade){
                        var oldImg = self.$elem;
                        var newImg = oldImg.clone();
                        self.$elem.attr("src",smallimage)
                        self.$elem.after(newImg);
                        newImg.stop(true).fadeOut(self.options.imageCrossfade, function() {
                            $(this).remove();
                        });

                        //       				if(self.options.zoomType == "inner"){
                        //remove any attributes on the cloned image so we can resize later
                        self.$elem.width("auto").removeAttr("width");
                        self.$elem.height("auto").removeAttr("height");
                        //   }

                        oldImg.fadeIn(self.options.imageCrossfade);

                        if(self.options.tint && self.options.zoomType != "inner") {

                            var oldImgTint = self.zoomTintImage;
                            var newImgTint = oldImgTint.clone();
                            self.zoomTintImage.attr("src",largeimage)
                            self.zoomTintImage.after(newImgTint);
                            newImgTint.stop(true).fadeOut(self.options.imageCrossfade, function() {
                                $(this).remove();
                            });



                            oldImgTint.fadeIn(self.options.imageCrossfade);


                            //self.zoomTintImage.attr("width",elem.data("image"));

                            //resize the tint window
                            self.zoomTint.css({ height: self.$elem.height()});
                            self.zoomTint.css({ width: self.$elem.width()});
                        }

                        self.zoomContainer.css("height", self.$elem.height());
                        self.zoomContainer.css("width", self.$elem.width());

                        if(self.options.zoomType == "inner"){
                            if(!self.options.constrainType){
                                self.zoomWrap.parent().css("height", self.$elem.height());
                                self.zoomWrap.parent().css("width", self.$elem.width());

                                self.zoomWindow.css("height", self.$elem.height());
                                self.zoomWindow.css("width", self.$elem.width());
                            }
                        }

                        if(self.options.imageCrossfade){
                            self.zoomWrap.css("height", self.$elem.height());
                            self.zoomWrap.css("width", self.$elem.width());
                        }
                    }
                    else{
                        self.$elem.attr("src",smallimage);
                        if(self.options.tint) {
                            self.zoomTintImage.attr("src",largeimage);
                            //self.zoomTintImage.attr("width",elem.data("image"));
                            self.zoomTintImage.attr("height",self.$elem.height());
                            //self.zoomTintImage.attr('src') = elem.data("image");
                            self.zoomTintImage.css({ height: self.$elem.height()});
                            self.zoomTint.css({ height: self.$elem.height()});

                        }
                        self.zoomContainer.css("height", self.$elem.height());
                        self.zoomContainer.css("width", self.$elem.width());

                        if(self.options.imageCrossfade){
                            self.zoomWrap.css("height", self.$elem.height());
                            self.zoomWrap.css("width", self.$elem.width());
                        }
                    }
                    if(self.options.constrainType){

                        //This will contrain the image proportions
                        if(self.options.constrainType == "height"){

                            self.zoomContainer.css("height", self.options.constrainSize);
                            self.zoomContainer.css("width", "auto");

                            if(self.options.imageCrossfade){
                                self.zoomWrap.css("height", self.options.constrainSize);
                                self.zoomWrap.css("width", "auto");
                                self.constwidth = self.zoomWrap.width();


                            }
                            else{
                                self.$elem.css("height", self.options.constrainSize);
                                self.$elem.css("width", "auto");
                                self.constwidth = self.$elem.width();
                            }

                            if(self.options.zoomType == "inner"){

                                self.zoomWrap.parent().css("height", self.options.constrainSize);
                                self.zoomWrap.parent().css("width", self.constwidth);
                                self.zoomWindow.css("height", self.options.constrainSize);
                                self.zoomWindow.css("width", self.constwidth);
                            }
                            if(self.options.tint){
                                self.tintContainer.css("height", self.options.constrainSize);
                                self.tintContainer.css("width", self.constwidth);
                                self.zoomTint.css("height", self.options.constrainSize);
                                self.zoomTint.css("width", self.constwidth);
                                self.zoomTintImage.css("height", self.options.constrainSize);
                                self.zoomTintImage.css("width", self.constwidth);
                            }

                        }
                        if(self.options.constrainType == "width"){
                            self.zoomContainer.css("height", "auto");
                            self.zoomContainer.css("width", self.options.constrainSize);

                            if(self.options.imageCrossfade){
                                self.zoomWrap.css("height", "auto");
                                self.zoomWrap.css("width", self.options.constrainSize);
                                self.constheight = self.zoomWrap.height();
                            }
                            else{
                                self.$elem.css("height", "auto");
                                self.$elem.css("width", self.options.constrainSize);
                                self.constheight = self.$elem.height();
                            }
                            if(self.options.zoomType == "inner"){
                                self.zoomWrap.parent().css("height", self.constheight);
                                self.zoomWrap.parent().css("width", self.options.constrainSize);
                                self.zoomWindow.css("height", self.constheight);
                                self.zoomWindow.css("width", self.options.constrainSize);
                            }
                            if(self.options.tint){
                                self.tintContainer.css("height", self.constheight);
                                self.tintContainer.css("width", self.options.constrainSize);
                                self.zoomTint.css("height", self.constheight);
                                self.zoomTint.css("width", self.options.constrainSize);
                                self.zoomTintImage.css("height", self.constheight);
                                self.zoomTintImage.css("width", self.options.constrainSize);
                            }

                        }


                    }

                },
                doneCallback: function(){

                    var self = this;
                    /*	if(self.options.loadingIcon){
					self.spinner.hide();
				}   */

                    $.scafancybox.hideLoading();
                    self.nzOffset = self.$elem.offset();
                    self.nzWidth = self.$elem.width();
                    self.nzHeight = self.$elem.height();

                    $.scafancybox.scaupdate();
                    // reset the zoomlevel back to default
                    self.currentZoomLevel = self.options.zoomLevel;

                    //ratio of the large to small image
                    self.widthRatio = self.largeWidth / self.nzWidth;
                    self.heightRatio = self.largeHeight / self.nzHeight;

                    //NEED TO ADD THE LENS SIZE FOR ROUND
                    // adjust images less than the window height
                    if(self.options.zoomType == "window") {

                        if(self.nzHeight < self.options.zoomWindowWidth/self.widthRatio){
                            lensHeight = self.nzHeight;

                        }
                        else{
                            lensHeight = String((self.options.zoomWindowHeight/self.heightRatio))
                        }

                        if(self.options.zoomWindowWidth < self.options.zoomWindowWidth){
                            lensWidth = self.nzWidth;
                        }
                        else{
                            lensWidth =  (self.options.zoomWindowWidth/self.widthRatio);
                        }


                        if(self.zoomLens){

                            self.zoomLens.css('width', lensWidth);
                            self.zoomLens.css('height', lensHeight);


                        }
                    }
                },
                getCurrentImage: function(){
                    var self = this;
                    return self.zoomImage;
                },
                getGalleryList: function(){
                    var self = this;
                    //loop through the gallery options and set them in list for fancybox
                    self.gallerylist = [];
                    if (self.options.gallery){


                        $('#'+self.options.gallery + ' a').each(function() {

                            var img_src = '';
                            if($(this).data("zoom-image")){
                                img_src = $(this).data("zoom-image");
                            }
                            else if($(this).data("image")){
                                img_src = $(this).data("image");
                            }
                            //put the current image at the start
                            if(img_src == self.zoomImage){
                                self.gallerylist.unshift({
                                    href: ''+img_src+'',
                                    title: $(this).find('img').attr("title")
                                });
                            }
                            else{
                                self.gallerylist.push({
                                    href: ''+img_src+'',
                                    title: $(this).find('img').attr("title")
                                });
                            }


                        });
                    }
                    //if no gallery - return current image
                    else{
                        self.gallerylist.push({
                            href: ''+self.zoomImage+'',
                            title: $(this).find('img').attr("title")
                        });
                    }
                    return self.gallerylist;

                },
                changeZoomLevel: function(value){
                    var self = this;

                    //flag a zoom, so can adjust the easing during setPosition
                    self.scrollingLock = true;

                    //round to two decimal places
                    self.newvalue = parseFloat(value).toFixed(2);
                    newvalue = parseFloat(value).toFixed(2);




                    //maxwidth & Maxheight of the image
                    maxheightnewvalue = self.largeHeight/((self.options.zoomWindowHeight / self.nzHeight) * self.nzHeight);
                    maxwidthtnewvalue = self.largeWidth/((self.options.zoomWindowWidth / self.nzWidth) * self.nzWidth);




                    //calculate new heightratio
                    if(self.options.zoomType != "inner")
                    {
                        if(maxheightnewvalue <= newvalue){
                            self.heightRatio = (self.largeHeight/maxheightnewvalue) / self.nzHeight;
                            self.newvalueheight = maxheightnewvalue;
                            self.fullheight = true;

                        }
                        else{
                            self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight;
                            self.newvalueheight = newvalue;
                            self.fullheight = false;

                        }


//					calculate new width ratio

                        if(maxwidthtnewvalue <= newvalue){
                            self.widthRatio = (self.largeWidth/maxwidthtnewvalue) / self.nzWidth;
                            self.newvaluewidth = maxwidthtnewvalue;
                            self.fullwidth = true;

                        }
                        else{
                            self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth;
                            self.newvaluewidth = newvalue;
                            self.fullwidth = false;

                        }
                        if(self.options.zoomType == "lens"){
                            if(maxheightnewvalue <= newvalue){
                                self.fullwidth = true;
                                self.newvaluewidth = maxheightnewvalue;

                            } else{
                                self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth;
                                self.newvaluewidth = newvalue;

                                self.fullwidth = false;
                            }}
                    }



                    if(self.options.zoomType == "inner")
                    {
                        maxheightnewvalue = parseFloat(self.largeHeight/self.nzHeight).toFixed(2);
                        maxwidthtnewvalue = parseFloat(self.largeWidth/self.nzWidth).toFixed(2);
                        if(newvalue > maxheightnewvalue){
                            newvalue = maxheightnewvalue;
                        }
                        if(newvalue > maxwidthtnewvalue){
                            newvalue = maxwidthtnewvalue;
                        }


                        if(maxheightnewvalue <= newvalue){


                            self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight;
                            if(newvalue > maxheightnewvalue){
                                self.newvalueheight = maxheightnewvalue;
                            }else{
                                self.newvalueheight = newvalue;
                            }
                            self.fullheight = true;


                        }
                        else{



                            self.heightRatio = (self.largeHeight/newvalue) / self.nzHeight;

                            if(newvalue > maxheightnewvalue){

                                self.newvalueheight = maxheightnewvalue;
                            }else{
                                self.newvalueheight = newvalue;
                            }
                            self.fullheight = false;
                        }




                        if(maxwidthtnewvalue <= newvalue){

                            self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth;
                            if(newvalue > maxwidthtnewvalue){

                                self.newvaluewidth = maxwidthtnewvalue;
                            }else{
                                self.newvaluewidth = newvalue;
                            }

                            self.fullwidth = true;


                        }
                        else{

                            self.widthRatio = (self.largeWidth/newvalue) / self.nzWidth;
                            self.newvaluewidth = newvalue;
                            self.fullwidth = false;
                        }


                    } //end inner
                    scrcontinue = false;

                    if(self.options.zoomType == "inner"){

                        if(self.nzWidth > self.nzHeight){
                            if( self.newvaluewidth <= maxwidthtnewvalue){
                                scrcontinue = true;
                            }
                            else{

                                scrcontinue = false;
                                self.fullheight = true;
                                self.fullwidth = true;
                            }
                        }
                        if(self.nzHeight > self.nzWidth){
                            if( self.newvaluewidth <= maxwidthtnewvalue){
                                scrcontinue = true;
                            }
                            else{
                                scrcontinue = false;

                                self.fullheight = true;
                                self.fullwidth = true;
                            }
                        }
                    }

                    if(self.options.zoomType != "inner"){
                        scrcontinue = true;
                    }

                    if(scrcontinue){



                        self.zoomLock = 0;
                        self.changeZoom = true;

                        //if lens height is less than image height


                        if(((self.options.zoomWindowHeight)/self.heightRatio) <= self.nzHeight){


                            self.currentZoomLevel = self.newvalueheight;
                            if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                                self.changeBgSize = true;

                                self.zoomLens.css({height: String((self.options.zoomWindowHeight)/self.heightRatio) + 'px' })
                            }
                            if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                                self.changeBgSize = true;
                            }


                        }




                        if((self.options.zoomWindowWidth/self.widthRatio) <= self.nzWidth){



                            if(self.options.zoomType != "inner"){
                                if(self.newvaluewidth > self.newvalueheight)   {
                                    self.currentZoomLevel = self.newvaluewidth;

                                }
                            }

                            if(self.options.zoomType != "lens" && self.options.zoomType != "inner") {
                                self.changeBgSize = true;

                                self.zoomLens.css({width: String((self.options.zoomWindowWidth)/self.widthRatio) + 'px' })
                            }
                            if(self.options.zoomType == "lens" || self.options.zoomType == "inner") {
                                self.changeBgSize = true;
                            }

                        }
                        if(self.options.zoomType == "inner"){
                            self.changeBgSize = true;

                            if(self.nzWidth > self.nzHeight){
                                self.currentZoomLevel = self.newvaluewidth;
                            }
                            if(self.nzHeight > self.nzWidth){
                                self.currentZoomLevel = self.newvaluewidth;
                            }
                        }

                    }      //under

                    //sets the boundry change, called in setWindowPos
                    self.setPosition(self.currentLoc);
                    //
                },
                closeAll: function(){
                    if(self.zoomWindow){self.zoomWindow.hide();}
                    if(self.zoomLens){self.zoomLens.hide();}
                    if(self.zoomTint){self.zoomTint.hide();}
                },
                changeState: function(value){
                    var self = this;
                    if(value == 'enable'){self.options.zoomEnabled = true;}
                    if(value == 'disable'){self.options.zoomEnabled = false;}

                }

            };




            $.fn.elevateZoom = function( options ) {
                return this.each(function() {
                    var elevate = Object.create( ElevateZoom );

                    elevate.init( options, this );

                    $.data( this, 'elevateZoom', elevate );

                });
            };

            $.fn.elevateZoom.options = {
                zoomActivation: "hover", // Can also be click (PLACEHOLDER FOR NEXT VERSION)
                zoomEnabled: true, //false disables zoomwindow from showing
                preloading: 1, //by default, load all the images, if 0, then only load images after activated (PLACEHOLDER FOR NEXT VERSION)
                zoomLevel: 1, //default zoom level of image
                scrollZoom: false, //allow zoom on mousewheel, true to activate
                scrollZoomIncrement: 0.1,  //steps of the scrollzoom
                minZoomLevel: false,
                maxZoomLevel: false,
                easing: false,
                easingAmount: 12,
                lensSize: 200,
                zoomWindowWidth: 400,
                zoomWindowHeight: 400,
                zoomWindowOffetx: 0,
                zoomWindowOffety: 0,
                zoomWindowPosition: 1,
                zoomWindowBgColour: "#fff",
                lensFadeIn: false,
                lensFadeOut: false,
                debug: false,
                zoomWindowFadeIn: false,
                zoomWindowFadeOut: false,
                zoomWindowAlwaysShow: false,
                zoomTintFadeIn: false,
                zoomTintFadeOut: false,
                borderSize: 4,
                showLens: true,
                borderColour: "#888",
                lensBorderSize: 1,
                lensBorderColour: "#000",
                lensShape: "square", //can be "round"
                zoomType: "window", //window is default,  also "lens" available -
                containLensZoom: false,
                lensColour: "white", //colour of the lens background
                lensOpacity: 0.4, //opacity of the lens
                lenszoom: false,
                tint: false, //enable the tinting
                tintColour: "#333", //default tint color, can be anything, red, #ccc, rgb(0,0,0)
                tintOpacity: 0.4, //opacity of the tint
                gallery: false,
                galleryActiveClass: "zoomGalleryActive",
                imageCrossfade: false,
                constrainType: false,  //width or height
                constrainSize: false,  //in pixels the dimensions you want to constrain on
                loadingIcon: "data:image/gif;base64,R0lGODlhGAAYAKUAAAQCBISChERCRMTCxCQiJKSipGRiZBQSFJSSlFRSVOTi5DQyNLSytHRydAwKDIyKjExKTMzOzCwqLKyqrBwaHJyanFxaXPz+/Dw6PHx6fGxqbOzq7Ly6vAQGBISGhERGRMzKzCQmJKSmpGRmZBQWFJSWlFRWVDQ2NLS2tHR2dAwODIyOjExOTNTS1CwuLKyurBweHJyenFxeXDw+PHx+fOzu7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCQA2ACwAAAAAGAAYAAAG/kCbcEg8DCIhonJJyXyEH4XCIAxVnsshLQJKRhUjW6d12XSyQkukVbF9qZrLZYAWAl5rwXekqskXSyEZAgA2MxERDF8yCHIxQh0kKkIrHCgIEgAILRESMS8kERc1FAAHBKiFJhysKCkEHiOFQgIMLCqoIQQwQy4lrBwyaB25MAdKABAiKDNoADAEJLM2Khgn1gK8dR0qDt0OACsi4+MZdTbQugQhMCXjE+MB59C5uxR6AhACFOfcKv8qptmgoMFDsywdoDlYosLEgxUrqGTBhYrCmSoeEEBsQECACzvUQhwgsU7XMRsJVjwIgAEAixQNDsxIQGLBjJYJUWkjMYLFUEIKKVJoUGHBwgkJM2YkoUZh0hIZQSU4sCADQ4cZAmYsrOMiRQYL1CyYwIAu68c6EBo04De1qg0AJ24KVHKABSAxMowKUSGBxLklGFjwqxMEACH5BAkJADQALAAAAAAYABgAhQQCBISChERCRMTGxCQiJKSipGRmZBQSFOzu7DQyNJSWlFRSVLSytHR2dNze3AwKDIyKjExKTCwqLGxubBwaHDw6PLy6vMzOzKyqrPz6/JyenFxaXHx+fAQGBISGhERGRCQmJKSmpGxqbBQWFDQ2NJyanLS2tHx6fOTi5AwODIyOjExOTCwuLHRydBweHDw+PLy+vNTS1Pz+/FxeXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJpwSDwwYCCicjmavISvS2wjJHiey2HLYiLQBJfLjNaxOC6ArHBlsUC+0vEMhcKohR1N+/WKiQ8XDg4sSwQiFWkkbRoffhscdG80CRoiQhwhIQEgABwwFiAKBSMmKBcjFAoZMjIUNCsFmQUGBCcbaUIVJR8iCKwyAx1CEh6ZIQtqLL8ILbhCAAKiJGoHKBkKB0MpLAks3K53KQQpD+QAJyrp6ZZ3LgQgBO8UHCoQ6i13NBTx/C4jFS8qCByRr0OKgweFDaGwoEUCNR0IuMim5MGHBhiRZREXj4JCGi4mnMA4w0WCJEM6jHgw4h08ihdbiEgAoMKGDSkkVDiwzwVOgA7uJAo5sECAsBE3VzzgA6JlUyEpKKTIEuGmi6UCJADg9zELgZsfyAh4keQAPHBqSNwk2GGsBBoA3LnIl6ICyg4vBNyVmm+JBBIU1QQBACH5BAkJADMALAAAAAAYABgAhQQCBISGhERCRMzKzCQiJGRiZKSmpBQSFPz+/DQyNHRydFRSVNza3JyenLy6vAwKDIyOjNTS1CwqLGxqbBwaHDw6PHx6fFxaXExKTKyurOTi5MTCxAQGBIyKjERGRMzOzCQmJGRmZKyqrBQWFDQ2NHR2dFRWVNze3KSipLy+vAwODJSSlNTW1CwuLGxubBweHDw+PHx+fFxeXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJlwSDw0RASicnkokIQVh2MhfMUqS2LIgHrNog7TjCP6pABZoQdlsHylYtMn0kgLARCDgQQ2qVIRAxJLLxcJaC0iKBAwUgslczFCEhAXQhMQEC4EAAp6BAEQIwYRGwcjAQwaJyMzApkrHSYvLgtoQiSMMhGrGhkcQgQKmRAeaRInqxEywEMAJDEdLWkHGwwBB0MPIBLcEq12BCEXJhcLIyEl6uqWdgMI8PAfEyUKFgolMnYzEfHwDAdaJBjYIpsdWi4STkgy5IAAE4OyAHhB4MGSByQuaISRRgWBjxSazRhRjhyGEQQoEOEw4gFKECAIGMxIDgQAEDAEcKDw4gFOBQIvAHCgCFSICgEtgB3ISeLBxxEvwamgoCJLgpwjboLI+pGAyCwUciaYAeDpjAMxVdrBCaMqBwJbyVL0YueBBLVvCYDbWXWfkhE99wUBACH5BAkJADMALAAAAAAYABgAhQQCBISChERCRMTCxCQiJKSipGRiZBQSFFRSVDQyNLSytOTi5JSWlHRydAwKDExKTMzOzCwqLKyqrBwaHFxaXDw6PLy6vIyKjGxqbPz+/JyenHx6fAQGBERGRMzKzCQmJKSmpBQWFFRWVDQ2NLS2tOTm5JyanHR2dAwODExOTNTS1CwuLKyurBweHFxeXDw+PLy+vIyOjGxubAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJlwSETFTBOicnlArIQJUOEhbMlGS6IodkmOQCAqx2SRALLCSiyGmUWns5TFEkMLAaf1Kip5oCQWJB9LEw8RQhFrG18FHRgWMA1CHwEiQiInJy4TAAZcLRsbIQwWLAcHGxCqBzMVmScNDyEuAmdCKwEjFDAQKhAFti0uGw0nFWgfvRADFLZ3KxgNg1kHJBAbKEMOLdwtBNl2LRQp5A8HKRTp6R12MwoL8PAKCBQiLuvtFvHwMA4f///AoSHg4p4LES2KrHiRJEuEEgsMOBPC4YOAFwIOZXGRoaOHF0MOVMD4IgGKAwJnOAgRokDHjheEEMBYgVMIAgQ43OQwgUBJCwAvPHQsccbBCgJnOOBsoZQASwIfWHWCQSGLtw8oAHxwCgBqznYocCZpGmLGAbHtbn5V+qEsAG8J7ehkNaNrW4oTUrYTsrNdEAAh+QQJCQA2ACwAAAAAGAAYAIUEAgSEgoREQkTMyswkIiRkYmSkpqTk5uQUEhRUUlQ0MjR0cnSUkpTc2ty0srT8+vwMCgxMSkwsKiwcGhxcWlw8Ojx8enyMjozU0tRsbmysrqzs7uycmpzk4uS8urwEBgSEhoRERkTMzswkJiRkZmSsqqwUFhRUVlQ0NjR0dnTc3ty0trT8/vwMDgxMTkwsLiwcHhxcXlw8Pjx8fnz08vScnpwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEhsWQImonLZCo2EkstFJpwUXktiJLVIvqQCGwBk4ACyQsUidbJFL2GBwWBBCwGFVEryFkAYcwRLCBUwQgR6VwwXFTEGJQWHKS5CIRQUIUkJelYZCAFlLQgZHh4rCG4nMZcoCC4VRBILCi4apR4XH0ImERSqWFkEtxouukMABAknhlktBisZLUMfJtXV0nYTJyERISEIKAIyMgICwGgGGCLqGAYV5OMyCnY2JesD6xofE/z8EPQwfPk6MYHIPgLYlowYMODEGSIATBAgMCJJlhMdVHRwgGIIBIoUYUBAkNAGCg4hLmhUoaKODYkEYEiDSY3AhwEsDiBQ4CDjTIAz1Eyc+Rjzw0QTNViwYCAmgYEEWSaMGNECwAgCJibQYPHgiZ0WEwsaxWrDgtIV9GjaGJsEQgMWG4xloYbNaEUhFRxQoLdEotwsQQAAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkpKKkZGJk5OLkFBIUlJKUNDI0VFJUtLK0dHJ01NLUDAoMjIqMTEpMLCosrKqsbGpsHBocnJqcPDo8zMrM/P78XFpcvLq8fH583NrcBAYEhIaEREZEJCYkpKakZGZk5ObkFBYUlJaUNDY0VFZUdHZ01NbUDA4MjI6MTE5MLC4srK6sbG5sHB4cnJ6cPD48zM7MvL68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BIfIwoJaJy+TjFhKFUSiEsoSRL4kmjWdlCjdTJBkhBAoAslCv4SscXFouiFgJa3FhU/AiwIE9KKxJJNhUaKC0SYQoLECwaQjEjbTYuAjMKXjNcCAtdDSwBKysGBSIFXjEzmDMSKzMuRCEGEiAWIrloQisKmAKBSzGnIhYgaUQlFzMIaisJBQYPQwAPK9bXdTYlEawzMysxBOMhBBXaCRs1G+wm5OPm2jLs9DIepPge2hUt/f2FQh5UIOAlC4F1C5BRKwEPoJIWDmjQEEEloB4CIWI8QFBQnwsIMwLQiEgDRpVyBLeN8/CCRAQGHWj0EhFxQxoPFRDcHCcuQ0eGAh8OdOBApoWFCFnEhVhBwGeBEiqEhtDGNF4MnyJswDhwQIY2hgT0Nc2Q9UGNDg70qfFQopmNqz+FKJDRQpsSABMOVFITBAAh+QQJCQA1ACwAAAAAGAAYAIUEAgSEgoREQkTEwsQkIiSkpqRkYmTk4uQUEhSUkpRUUlQ0MjTU0tS8urx0dnQMCgyMioxMSkzMyswsKiysrqxsamwcGhycmpxcWlw8Ojz8/vwEBgSEhoRERkTExsQkJiSsqqxkZmTk5uQUFhSUlpRUVlQ0NjTc3ty8vrx8fnwMDgyMjoxMTkzMzswsLiy0srRsbmwcHhycnpxcXlw8PjwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCacEjcsBQqonK5+YyEFgzmI0R0CEviR0B71GLSSQ0wc1QAWShN4KpFS+KFw4FJCwGLNQI8m2xgcxZMI0k1CDQ0GWBTAnMRUCUZUAQEFhs1LlwPNB0PZRUPKgoQKxBJCAQflCMPEzFEBAoENAErtjBoNRsxqh8IaSOkKwE0uUMqMQReWSopEArLY6GhKpd2CAIZJtrIlKmVdjUcBeTkHJSqlIJ2EOXkEBsq8vLWaRYdEQL5v0MPFgSFlsQAUaCDsTsjvD3JEqGBwwRihDzglSqGhQQh7tSYkMKEgxcoHGasMSKdCgAFNGj4cEECjQItUCCYQMJhATQbLCBAQ0PlT4EPJw5ASMGghYMxHSAIWAJAgkoDFg6cSDBiAAMJr+zMUCkBQIygK2oYaMEgQTgZKmm4kWp2w4sWAw4qmUChAhSwQlyseBSOCAASHiTZCQIAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkpKKkZGZk5OLkFBIUNDI0lJKUVFJUtLK0dHZ01NLU9Pb0DAoMjIqMLCosrKqsbG5sHBocPDo8XFpcTEpMzMrM7OrsnJ6cvLq8fH58BAYEhIaEREZEJCYkpKakbGpsFBYUNDY0lJaUVFZUtLa0fHp83N7c/P78DA4MjI6MLC4srK6sdHJ0HB4cPD48XF5czM7M7O7sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BI9JQsEKJy6SElbQiZoCJklajLIYlA8NhIAlnMBsBcFoBslUuNim2hywmkHsa4LEQ45llcZghMJCxCEAQhMVFTCRcXJUIkGC5CFWxelV0uCR5mJx4sIDANDUkIh1wkTYFaMhUJFA0pDRdpNh4xIYerSySiDSMJtUMsd09LEAYwIMYAECzOLF51CBaaLi4Qd1y5WGoULeAtCjDbXATdWQ3gES0RDZ8s8Xl1XwIW9xa7NiUDDxRqFUwokCGM0oYVCFGokSGiYYAQQwTUQLjCgYAOF4SkCQEjwYgCIiYUOCHEBEINIzwoUKGCQAQOFhRwEMFCQgCQJtJIQNEiUFMJFQcyEKBBIwAFDhwMkJGRwsISAAwOqDhRgYaDDyQYcEAxps4CoAwAVKXxwcYFpGXrtJCawEbVq7Y2cHhRUAkBEzMoEQ0gREIHOvSIAPjA4VGdIAAh+QQJCQA1ACwAAAAAGAAYAIUEAgSEgoREQkTMyswkIiRkYmSkoqTk5uQUEhQ0MjR0cnSUlpRUUlTc2ty0trQMCgyMiozU0tQsKixsamwcGhw8Ojx8enxcWlxMTkysqqycnpzk4uS8vrwEBgSEhoRERkTMzswkJiRkZmSkpqT8/vwUFhQ0NjR0dnScmpxUVlTc3ty8urwMDgyMjozU1tQsLixsbmwcHhw8Pjx8fnxcXlwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCacEgExAgdonLZKT2EjxCBBQ0hlsQSAVl7bKkAk6yCHbK2lBpLSqXIBK/y8Eh4eKedikxGVTb7XiExUVMhbxJCLBUhQhRoSY5IJTEACQIVHQ8mF5xJCARSBCVNV2YSCCEMFykXHwBCHTFSVmUsqzQMIa9ELEdPWB0MKSZJjazHpbUJEiHMDw0k0dEccjU0J9gKJzQH0tED1QXa2BYFBBMw6ROMcggmCfAvfUIvGS4FZSUzMya7QyUQVGxQoaGMiRYtICggMKRChIEbHFQ4wUDIKwIFXlyAgLAFBiEBBIKg0cFDBBAxZmRIEGDEAi8KOM54FULDDCoJBoBYEWPFTooTIkaMuFAjzIQESwCMiBABA4UVDiyw0JDBQBo5GE4aAFDC54kaDAyMUFAtAAgQcbr+rNGhxQgU/pbEaEG0htqvNQgoIFOtyIkRSOUEAQAh+QQJCQA2ACwAAAAAGAAYAIUEAgSEgoREQkTEwsQkIiRkYmSkoqTk4uQUEhRUUlQ0MjR0cnSUkpS0srTMzswMCgyMioxMSkwsKixsamz8+vwcGhxcWlw8Ojx8enzMysysqqycnpy8urwEBgSEhoRERkTExsQkJiRkZmSkpqTk5uQUFhRUVlQ0NjR0dnSUlpTU0tQMDgyMjoxMTkwsLixsbmz8/vwcHhxcXlw8Pjx8fny8vrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCbcEgExAgdonLZKT2EjxBhJWw+l8MSAWl7bKm2IwE7XG0rtpWUijiTh+KHd2qUJpWnkQXQJYRiUVMlUiVQIWg2AzAwGRc2g0gVFR0VWwAdITMCM0koi4sbJSUIRA8lKxUXmjMKfDYCDp8BZA8zmhcVrlUiJBQJZAAnMyF3jxEtLREmEm99RzExHQMH1NQjzR8W2toRINXUGs0t2iYyFhExMuYyJiHNKxIh8iFXQhIbIBZkCBMiLkslaDhwoIIBGQkoEspAZOPEABUqHGg4MSGCED4x2kVIiGHBDCEYBtYwAQADhwYxXqRwsQBCAEoyFqCYgDHFAlISGtQYEWOETQERJliwaCHEhQV3SgCkqMHhAwINBiasgEC10JsPHDgwAFDCwIgJr4QWaLYgq7sSI77a6ICBRQBdS2LQIGoDQVqwYQooaJb0BQNmb4IAACH5BAkJADYALAAAAAAYABgAhQQCBISChERCRMzKzCQiJGRiZKSipPz6/BQSFFRSVDQyNLSytNza3HRydJSSlAwKDExKTNTS1CwqLGxqbKyqrBwaHFxaXDw6PLy6vIyOjOTi5Hx+fJyanAQGBISGhERGRMzOzCQmJGRmZKSmpPz+/BQWFFRWVDQ2NLS2tNze3HR2dJSWlAwODExOTNTW1CwuLGxubKyurBweHFxeXDw+PLy+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJtwSATICB2icilbmYSPEIEl7JQeSyKHdHjZHoSp8EjIDmEkUs3GklIR4Yq5ykgnwFOjNKl8ORIANhBpKQhuJVIlVSVUNhQpKQsKAAtpIRUVHRVhAAAlYQSBEykakBkSFBuBUFcsMiFSMkMXKKUaMGYdBFJiRSYDDB9mRgQlqzYIHxDKLSFzNpoIJdMdCyAgEdcczwo0At40ChjY5CPcNOACJzImFu0JsnMPMpgVV0QhGQstZggJLWWUIGiAoWAAMzIszLDwQZEQBTEKolihYIYAIYFKQJBxwYJHC15sTMCAIkaLDhNGGKgwY0OIGSomWPngsUUgGR5EUJFgYIRKgxIZHDBUoeKiDQIf4hXxMGIEDQQZMlh40EBFAwTPaDQNAACqVBsniCZ4JkKlM68WoImIeWxJhQbCkEVNa6NCAgnPlACwsCGgmSAAIfkECQkANgAsAAAAABgAGACFBAIEhIKEREJExMLEJCIkZGJkpKKk5OLkFBIUlJKUVFJUNDI01NLUdHJ0tLa0DAoMjIqMTEpMzMrMLCosbGpsHBocnJqcXFpcPDo8/P783NrcfH58vL68BAYEhIaEREZExMbEJCYkZGZkpKak7OrsFBYUlJaUVFZUNDY0dHZ0vLq8DA4MjI6MTE5MzM7MLC4sbG5sHB4cnJ6cXF5cPD483N7cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Am3BILGlIE6JyWfFEhK1MpiHslB5LouegSSqkKWGMQMgOZ4fayPbNhFfkirnKORw+7RSATOgsX04ANjRpA20NCAQhJVUlK0IWDC4GLwAWaS8qIBVjMQAAJXyCBS4ukgEhJjCCVRUPcIoEMUMLI5IuFGYdZCExj0QACioSAmYAYyWsNgg0AjQ0H2VzACuvDw8AMirbHCoQczZjIbwxI9sO2wngY7yyFS0tCvCzcx0r9/fKNgQbMh9mDzBgYKQEgQgDI0ZQyVLimYAFv2xMsJBwBIQJLTAIEYQARYUJDmlIm5HQggAAF1hAKNGCQowPFxTYW/BMo40KKS5gIcCCxUcGBClSREBx4cICISUWEAQGoycKBA1StHhw4sKJiFlQsEjQgFrQJxOK0gB3QuWsFVGfdGgRU5+SEgVsrvgqhBk9cERa3s0SBAA7", //http://www.example.com/spinner.gif
                cursor:"default", // user should set to what they want the cursor as, if they have set a click function
                responsive:true,
                onComplete: $.noop,
                onZoomedImageLoaded: function() {},
                onImageSwap: $.noop,
                onImageSwapComplete: $.noop
            };

        })( $, window, document );

    }

//----------------------------------------------------------------------------
    /*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * @requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

    function scaqvFancybox (window, document, $, undefined) {
        "use strict";

        var H = $("html"),
            W = $(window),
            D = $(document),
            F = $.scafancybox = function () {
                F.open.apply( this, arguments );
            },
            IE =  navigator.userAgent.match(/msie/i),
            didUpdate	= null,
            isTouch		= document.createTouch !== undefined,

            isQuery	= function(obj) {
                return obj && obj.hasOwnProperty && obj instanceof $;
            },
            isString = function(str) {
                return str && $.type(str) === "string";
            },
            isPercentage = function(str) {
                return isString(str) && str.indexOf('%') > 0;
            },
            isScrollable = function(el) {
                return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
            },
            getScalar = function(orig, dim) {
                var value = parseInt(orig, 10) || 0;

                if (dim && isPercentage(orig)) {
                    value = F.getViewport()[ dim ] / 100 * value;
                }

                return Math.ceil(value);
            },
            getValue = function(value, dim) {
                return getScalar(value, dim) + 'px';
            };

        $.extend(F, {
            // The current version of fancyBox
            version: '2.1.5',

            defaults: {
                padding : 15,
                margin  : 20,

                width     : 800,
                height    : 600,
                minWidth  : 100,
                minHeight : 100,
                maxWidth  : 9999,
                maxHeight : 9999,
                pixelRatio: 2, // Set to 2 for retina display support

                autoSize   : true,
                autoHeight : false,
                autoWidth  : false,

                autoResize  : true,
                autoCenter  : !isTouch,
                fitToView   : true,
                aspectRatio : false,
                topRatio    : 0.5,
                leftRatio   : 0.5,

                scrolling : 'auto', // 'auto', 'yes' or 'no'
                wrapCSS   : '',

                arrows     : true,
                closeBtn   : true,
                closeClick : false,
                nextClick  : false,
                mouseWheel : true,
                autoPlay   : false,
                playSpeed  : 3000,
                preload    : 3,
                modal      : false,
                loop       : true,

                ajax  : {
                    dataType : 'html',
                    headers  : { 'X-sca-fancybox': true }
                },
                iframe : {
                    scrolling : 'auto',
                    preload   : true
                },
                swf : {
                    wmode: 'transparent',
                    allowfullscreen   : 'true',
                    allowscriptaccess : 'always'
                },

                keys  : {
                    next : {
                        13 : 'left', // enter
                        34 : 'up',   // page down
                        39 : 'left', // right arrow
                        40 : 'up'    // down arrow
                    },
                    prev : {
                        8  : 'right',  // backspace
                        33 : 'down',   // page up
                        37 : 'right',  // left arrow
                        38 : 'down'    // up arrow
                    },
                    close  : [27], // escape key
                    play   : [32], // space - start/stop slideshow
                    toggle : [70]  // letter "f" - toggle fullscreen
                },

                direction : {
                    next : 'left',
                    prev : 'right'
                },

                scrollOutside  : true,

                // Override some properties
                index   : 0,
                type    : null,
                href    : null,
                content : null,
                title   : null,

                // HTML templates
                tpl: {
                    wrap     : '<div class="sca-fancybox-wrap" tabIndex="-1"><div class="sca-fancybox-skin"><div class="sca-fancybox-outer"><div class="sca-fancybox-inner"></div></div></div></div>',
                    image    : '<img class="sca-fancybox-image" src="{href}" alt="" />',
                    iframe   : '<iframe id="sca-fancybox-frame{rnd}" name="sca-fancybox-frame{rnd}" class="sca-fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                    error    : '<p class="sca-fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn : '<a title="Close" class="sca-fancybox-item sca-fancybox-close" href="javascript:;"></a>',
                    next     : '<a title="Next" class="sca-fancybox-nav sca-fancybox-next" href="javascript:;"><span></span></a>',
                    prev     : '<a title="Previous" class="sca-fancybox-nav sca-fancybox-prev" href="javascript:;"><span></span></a>'
                },

                // Properties for each animation type
                // Opening fancyBox
                openEffect  : 'fade', // 'elastic', 'fade' or 'none'
                openSpeed   : 250,
                openEasing  : 'swing',
                openOpacity : true,
                openMethod  : 'zoomIn',

                // Closing fancyBox
                closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
                closeSpeed   : 250,
                closeEasing  : 'swing',
                closeOpacity : true,
                closeMethod  : 'zoomOut',

                // Changing next gallery item
                nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
                nextSpeed  : 250,
                nextEasing : 'swing',
                nextMethod : 'changeIn',

                // Changing previous gallery item
                prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
                prevSpeed  : 250,
                prevEasing : 'swing',
                prevMethod : 'changeOut',

                // Enable default helpers
                helpers : {
                    overlay : true,
                    title   : true
                },

                // Callbacks
                onCancel     : $.noop, // If canceling
                beforeLoad   : $.noop, // Before loading
                afterLoad    : $.noop, // After loading
                beforeShow   : $.noop, // Before changing in current item
                afterShow    : $.noop, // After opening
                beforeChange : $.noop, // Before changing gallery item
                beforeClose  : $.noop, // Before closing
                afterClose   : $.noop  // After closing
            },

            //Current state
            group    : {}, // Selected group
            opts     : {}, // Group options
            previous : null,  // Previous element
            coming   : null,  // Element being loaded
            current  : null,  // Currently loaded element
            isActive : false, // Is activated
            isOpen   : false, // Is currently open
            isOpened : false, // Have been fully opened at least once

            wrap  : null,
            skin  : null,
            outer : null,
            inner : null,

            player : {
                timer    : null,
                isActive : false
            },

            // Loaders
            ajaxLoad   : null,
            imgPreload : null,

            // Some collections
            transitions : {},
            helpers     : {},

            /*
		 *	Static methods
		 */

            open: function (group, opts) {
                if (!group) {
                    return;
                }

                if (!$.isPlainObject(opts)) {
                    opts = {};
                }

                // Close if already active
                if (false === F.close(true)) {
                    return;
                }

                // Normalize group
                if (!$.isArray(group)) {
                    group = isQuery(group) ? $(group).get() : [group];
                }

                // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
                $.each(group, function(i, element) {
                    var obj = {},
                        href,
                        title,
                        content,
                        type,
                        rez,
                        hrefParts,
                        selector;

                    if ($.type(element) === "object") {
                        // Check if is DOM element
                        if (element.nodeType) {
                            element = $(element);
                        }

                        if (isQuery(element)) {
                            obj = {
                                href    : element.data('sca-fancybox-href') || element.attr('href'),
                                title   : element.data('sca-fancybox-title') || element.attr('title'),
                                isDom   : true,
                                element : element
                            };

                            if ($.metadata) {
                                $.extend(true, obj, element.metadata());
                            }

                        } else {
                            obj = element;
                        }
                    }

                    href  = opts.href  || obj.href || (isString(element) ? element : null);
                    title = opts.title !== undefined ? opts.title : obj.title || '';

                    content = opts.content || obj.content;
                    type    = content ? 'html' : (opts.type  || obj.type);

                    if (!type && obj.isDom) {
                        type = element.data('sca-fancybox-type');

                        if (!type) {
                            rez  = element.prop('class').match(/sca-fancybox\.(\w+)/);
                            type = rez ? rez[1] : null;
                        }
                    }

                    if (isString(href)) {
                        // Try to guess the content type
                        if (!type) {
                            if (F.isImage(href)) {
                                type = 'image';

                            } else if (F.isSWF(href)) {
                                type = 'swf';

                            } else if (href.charAt(0) === '#') {
                                type = 'inline';

                            } else if (isString(element)) {
                                type    = 'html';
                                content = element;
                            }
                        }

                        // Split url into two pieces with source url and content selector, e.g,
                        // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                        if (type === 'ajax') {
                            hrefParts = href.split(/\s+/, 2);
                            href      = hrefParts.shift();
                            selector  = hrefParts.shift();
                        }
                    }

                    if (!content) {
                        if (type === 'inline') {
                            if (href) {
                                content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

                            } else if (obj.isDom) {
                                content = element;
                            }

                        } else if (type === 'html') {
                            content = href;

                        } else if (!type && !href && obj.isDom) {
                            type    = 'inline';
                            content = element;
                        }
                    }

                    $.extend(obj, {
                        href     : href,
                        type     : type,
                        content  : content,
                        title    : title,
                        selector : selector
                    });

                    group[ i ] = obj;
                });

                // Extend the defaults
                F.opts = $.extend(true, {}, F.defaults, opts);

                // All options are merged recursive except keys
                if (opts.keys !== undefined) {
                    F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
                }

                F.group = group;

                return F._start(F.opts.index);
            },

            // Cancel image loading or abort ajax request
            cancel: function () {
                var coming = F.coming;

                if (!coming || false === F.trigger('onCancel')) {
                    return;
                }

                F.hideLoading();

                if (F.ajaxLoad) {
                    F.ajaxLoad.abort();
                }

                F.ajaxLoad = null;

                if (F.imgPreload) {
                    F.imgPreload.onload = F.imgPreload.onerror = null;
                }

                if (coming.wrap) {
                    coming.wrap.stop(true, true).trigger('onReset').remove();
                }

                F.coming = null;

                // If the first item has been canceled, then clear everything
                if (!F.current) {
                    F._afterZoomOut( coming );
                }
            },

            // Start closing animation if is open; remove immediately if opening/closing
            close: function (event) {
                F.cancel();

                if (false === F.trigger('beforeClose')) {
                    return;
                }

                F.unbindEvents();

                if (!F.isActive) {
                    return;
                }

                if (!F.isOpen || event === true) {
                    $('.sca-fancybox-wrap').stop(true).trigger('onReset').remove();

                    F._afterZoomOut();

                } else {
                    F.isOpen = F.isOpened = false;
                    F.isClosing = true;

                    $('.sca-fancybox-item, .sca-fancybox-nav').remove();

                    F.wrap.stop(true, true).removeClass('sca-fancybox-opened');

                    F.transitions[ F.current.closeMethod ]();
                }
            },

            // Manage slideshow:
            //   $.fancybox.play(); - toggle slideshow
            //   $.fancybox.play( true ); - start
            //   $.fancybox.play( false ); - stop
            play: function ( action ) {
                var clear = function () {
                        clearTimeout(F.player.timer);
                    },
                    set = function () {
                        clear();

                        if (F.current && F.player.isActive) {
                            F.player.timer = setTimeout(F.next, F.current.playSpeed);
                        }
                    },
                    stop = function () {
                        clear();

                        D.unbind('.player');

                        F.player.isActive = false;

                        F.trigger('onPlayEnd');
                    },
                    start = function () {
                        if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                            F.player.isActive = true;

                            D.bind({
                                'onCancel.player beforeClose.player' : stop,
                                'onUpdate.player'   : set,
                                'beforeLoad.player' : clear
                            });

                            set();

                            F.trigger('onPlayStart');
                        }
                    };

                if (action === true || (!F.player.isActive && action !== false)) {
                    start();
                } else {
                    stop();
                }
            },

            // Navigate to next gallery item
            next: function ( direction ) {
                var current = F.current;

                if (current) {
                    if (!isString(direction)) {
                        direction = current.direction.next;
                    }

                    F.jumpto(current.index + 1, direction, 'next');
                }
            },

            // Navigate to previous gallery item
            prev: function ( direction ) {
                var current = F.current;

                if (current) {
                    if (!isString(direction)) {
                        direction = current.direction.prev;
                    }

                    F.jumpto(current.index - 1, direction, 'prev');
                }
            },

            // Navigate to gallery item by index
            jumpto: function ( index, direction, router ) {
                var current = F.current;

                if (!current) {
                    return;
                }

                index = getScalar(index);

                F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
                F.router    = router || 'jumpto';

                if (current.loop) {
                    if (index < 0) {
                        index = current.group.length + (index % current.group.length);
                    }

                    index = index % current.group.length;
                }

                if (current.group[ index ] !== undefined) {
                    F.cancel();

                    F._start(index);
                }
            },

            // Center inside viewport and toggle position type to fixed or absolute if needed
            reposition: function (e, onlyAbsolute) {
                var current = F.current,
                    wrap    = current ? current.wrap : null,
                    pos;

                if (wrap) {
                    pos = F._getPosition(onlyAbsolute);

                    if (e && e.type === 'scroll') {
                        delete pos.position;

                        wrap.stop(true, true).animate(pos, 200);

                    } else {
                        wrap.css(pos);

                        current.pos = $.extend({}, current.dim, pos);
                    }
                }
            },

            update: function (e) {
                var type = (e && e.type),
                    anyway = !type || type === 'orientationchange';

                if (anyway) {
                    clearTimeout(didUpdate);

                    didUpdate = null;
                }

                if (!F.isOpen || didUpdate) {
                    return;
                }

                didUpdate = setTimeout(function() {
                    var current = F.current;

                    if (!current || F.isClosing) {
                        return;
                    }

                    F.wrap.removeClass('sca-fancybox-tmp');

                    if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                        F._setDimension();
                    }

                    if (!(type === 'scroll' && current.canShrink)) {
                        F.reposition(e);
                    }

                    F.trigger('onUpdate');

                    didUpdate = null;

                }, (anyway && !isTouch ? 0 : 300));
            },
            scaupdate: function (e) {
                var type = (e && e.type),
                    anyway = true;

                if (anyway) {
                    clearTimeout(didUpdate);

                    didUpdate = null;
                }

                if (!F.isOpen || didUpdate) {
                    return;
                }

                var wait ;
                var wait = 0 ;
                /*console.log ( $('#sca-qv-left').outerHeight() + "---" + $('.sca-fancybox-inner').outerHeight())
            console.log ( $('#sca-qv-left').outerWidth() + "---" + $('.sca-fancybox-inner').outerWidth() + "---" + $('#sca-qv-zoomcontainer').outerWidth() + " ---- "+ $('#sca-qv-zoomcontainer').outerHeight()+ "----" + $('#sca-qv-zoomImg').outerHeight());*/
                if (($('#sca-qv-left').outerHeight() > $('.sca-fancybox-inner').outerHeight())) {
                    wait = 345;
                } else {
                    wait = 0;
                }

                if ((0 == $('#sca-qv-zoomcontainer').outerHeight()) && ($('#sca-qv-left').outerHeight() !== $('.sca-fancybox-inner').outerHeight())) {
                    if (wait == 0) {
                        wait = 345;
                    }
                    $('#sca-qv-zoomcontainer').height($('#sca-qv-zoomImg').outerHeight());
                }

                didUpdate = setTimeout(function() {
                    var current = F.current;

                    if (!current || F.isClosing) {
                        return;
                    }

                    F.wrap.removeClass('sca-fancybox-tmp');

                    if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                        F._setDimension();
                    }

                    if (!(type === 'scroll' && current.canShrink)) {
                        F.reposition(e);
                    }

                    F.trigger('onUpdate');

                    didUpdate = null;

                    F.hideLoading();
                }, wait);
            },

            // Shrink content to fit inside viewport or restore if resized
            toggle: function ( action ) {
                if (F.isOpen) {
                    F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                    // Help browser to restore document dimensions
                    if (isTouch) {
                        F.wrap.removeAttr('style').addClass('sca-fancybox-tmp');

                        F.trigger('onUpdate');
                    }

                    F.update();
                }
            },

            hideLoading: function () {
                D.unbind('.loading');

                $('#sca-fancybox-loading').remove();
            },

            showLoading: function () {
                var el, viewport;

                F.hideLoading();

                el = $('<div id="sca-fancybox-loading"><div></div></div>').click(F.cancel).appendTo('body');

                // If user will press the escape-button, the request will be canceled
                D.bind('keydown.loading', function(e) {
                    if ((e.which || e.keyCode) === 27) {
                        e.preventDefault();

                        F.cancel();
                    }
                });

                if (!F.defaults.fixed) {
                    viewport = F.getViewport();

                    el.css({
                        position : 'absolute',
                        top  : (viewport.h * 0.5) + viewport.y,
                        left : (viewport.w * 0.5) + viewport.x
                    });
                }
            },

            getViewport: function () {
                var locked = (F.current && F.current.locked) || false,
                    rez    = {
                        x: W.scrollLeft(),
                        y: W.scrollTop()
                    };

                if (locked) {
                    rez.w = locked[0].clientWidth;
                    rez.h = locked[0].clientHeight;

                } else {
                    // See http://bugs.jquery.com/ticket/6724
                    rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
                    //rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
                    rez.h = isTouch || window.innerHeight ? window.innerHeight : W.height();
                }

                return rez;
            },

            // Unbind the keyboard / clicking actions
            unbindEvents: function () {
                if (F.wrap && isQuery(F.wrap)) {
                    F.wrap.unbind('.fb');
                }

                D.unbind('.fb');
                W.unbind('.fb');
            },

            bindEvents: function () {
                var current = F.current,
                    keys;

                if (!current) {
                    return;
                }

                // Changing document height on iOS devices triggers a 'resize' event,
                // that can change document height... repeating infinitely
                W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

                keys = current.keys;

                if (keys) {
                    D.bind('keydown.fb', function (e) {
                        var code   = e.which || e.keyCode,
                            target = e.target || e.srcElement;

                        // Skip esc key if loading, because showLoading will cancel preloading
                        if (code === 27 && F.coming) {
                            return false;
                        }

                        // Ignore key combinations and key events within form elements
                        if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                            $.each(keys, function(i, val) {
                                if (current.group.length > 1 && val[ code ] !== undefined) {
                                    F[ i ]( val[ code ] );

                                    e.preventDefault();
                                    return false;
                                }

                                if ($.inArray(code, val) > -1) {
                                    F[ i ] ();

                                    e.preventDefault();
                                    return false;
                                }
                            });
                        }
                    });
                }

                if ($.fn.mousewheel && current.mouseWheel) {
                    F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                        var target = e.target || null,
                            parent = $(target),
                            canScroll = false;

                        while (parent.length) {
                            if (canScroll || parent.is('.sca-fancybox-skin') || parent.is('.sca-fancybox-wrap')) {
                                break;
                            }

                            canScroll = isScrollable( parent[0] );
                            parent    = $(parent).parent();
                        }

                        if (delta !== 0 && !canScroll) {
                            if (F.group.length > 1 && !current.canShrink) {
                                if (deltaY > 0 || deltaX > 0) {
                                    F.prev( deltaY > 0 ? 'down' : 'left' );

                                } else if (deltaY < 0 || deltaX < 0) {
                                    F.next( deltaY < 0 ? 'up' : 'right' );
                                }

                                e.preventDefault();
                            }
                        }
                    });
                }
            },

            trigger: function (event, o) {
                var ret, obj = o || F.coming || F.current;

                if (!obj) {
                    return;
                }

                if ($.isFunction( obj[event] )) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    $.each(obj.helpers, function (helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }

                D.trigger(event);
            },

            isImage: function (str) {
                return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
            },

            isSWF: function (str) {
                return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
            },

            _start: function (index) {
                var coming = {},
                    obj,
                    href,
                    type,
                    margin,
                    padding;

                index = getScalar( index );
                obj   = F.group[ index ] || null;

                if (!obj) {
                    return false;
                }

                coming = $.extend(true, {}, F.opts, obj);

                // Convert margin and padding properties to array - top, right, bottom, left
                margin  = coming.margin;
                padding = coming.padding;

                if ($.type(margin) === 'number') {
                    coming.margin = [margin, margin, margin, margin];
                }

                if ($.type(padding) === 'number') {
                    coming.padding = [padding, padding, padding, padding];
                }

                // 'modal' propery is just a shortcut
                if (coming.modal) {
                    $.extend(true, coming, {
                        closeBtn   : false,
                        closeClick : false,
                        nextClick  : false,
                        arrows     : false,
                        mouseWheel : false,
                        keys       : null,
                        helpers: {
                            overlay : {
                                closeClick : false
                            }
                        }
                    });
                }

                // 'autoSize' property is a shortcut, too
                if (coming.autoSize) {
                    coming.autoWidth = coming.autoHeight = true;
                }

                if (coming.width === 'auto') {
                    coming.autoWidth = true;
                }

                if (coming.height === 'auto') {
                    coming.autoHeight = true;
                }

                /*
			 * Add reference to the group, so it`s possible to access from callbacks, example:
			 * afterLoad : function() {
			 *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
			 * }
			 */

                coming.group  = F.group;
                coming.index  = index;

                // Give a chance for callback or helpers to update coming item (type, title, etc)
                F.coming = coming;

                if (false === F.trigger('beforeLoad')) {
                    F.coming = null;

                    return;
                }

                type = coming.type;
                href = coming.href;

                if (!type) {
                    F.coming = null;

                    //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                    if (F.current && F.router && F.router !== 'jumpto') {
                        F.current.index = index;

                        return F[ F.router ]( F.direction );
                    }

                    return false;
                }

                F.isActive = true;

                if (type === 'image' || type === 'swf') {
                    coming.autoHeight = coming.autoWidth = false;
                    coming.scrolling  = 'visible';
                }

                if (type === 'image') {
                    coming.aspectRatio = true;
                }

                if (type === 'iframe' && isTouch) {
                    coming.scrolling = 'scroll';
                }

                // Build the neccessary markup
                coming.wrap = $(coming.tpl.wrap).addClass('sca-fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' sca-fancybox-type-' + type + ' sca-fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

                $.extend(coming, {
                    skin  : $('.sca-fancybox-skin',  coming.wrap),
                    outer : $('.sca-fancybox-outer', coming.wrap),
                    inner : $('.sca-fancybox-inner', coming.wrap)
                });

                $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                    coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
                });

                F.trigger('onReady');

                // Check before try to load; 'inline' and 'html' types need content, others - href
                if (type === 'inline' || type === 'html') {
                    if (!coming.content || !coming.content.length) {
                        return F._error( 'content' );
                    }

                } else if (!href) {
                    return F._error( 'href' );
                }

                if (type === 'image') {
                    F._loadImage();

                } else if (type === 'ajax') {
                    F._loadAjax();

                } else if (type === 'iframe') {
                    F._loadIframe();

                } else {
                    F._afterLoad();
                }
            },

            _error: function ( type ) {
                $.extend(F.coming, {
                    type       : 'html',
                    autoWidth  : true,
                    autoHeight : true,
                    minWidth   : 0,
                    minHeight  : 0,
                    scrolling  : 'no',
                    hasError   : type,
                    content    : F.coming.tpl.error
                });

                F._afterLoad();
            },

            _loadImage: function () {
                // Reset preload image so it is later possible to check "complete" property
                var img = F.imgPreload = new Image();

                img.onload = function () {
                    this.onload = this.onerror = null;

                    F.coming.width  = this.width / F.opts.pixelRatio;
                    F.coming.height = this.height / F.opts.pixelRatio;

                    F._afterLoad();
                };

                img.onerror = function () {
                    this.onload = this.onerror = null;

                    F._error( 'image' );
                };

                img.src = F.coming.href;

                if (img.complete !== true) {
                    F.showLoading();
                }
            },

            _loadAjax: function () {
                var coming = F.coming;

                F.showLoading();

                F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                    url: coming.href,
                    error: function (jqXHR, textStatus) {
                        if (F.coming && textStatus !== 'abort') {
                            F._error( 'ajax', jqXHR );

                        } else {
                            F.hideLoading();
                        }
                    },
                    success: function (data, textStatus) {
                        if (textStatus === 'success') {
                            coming.content = data;

                            F._afterLoad();
                        }
                    }
                }));
            },

            _loadIframe: function() {
                var coming = F.coming,
                    iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                        .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                        .attr('src', coming.href);

                // This helps IE
                $(coming.wrap).bind('onReset', function () {
                    try {
                        $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                    } catch (e) {}
                });

                if (coming.iframe.preload) {
                    F.showLoading();

                    iframe.one('load', function() {
                        $(this).data('ready', 1);

                        // iOS will lose scrolling if we resize
                        if (!isTouch) {
                            $(this).bind('load.fb', F.update);
                        }

                        // Without this trick:
                        //   - iframe won't scroll on iOS devices
                        //   - IE7 sometimes displays empty iframe
                        $(this).parents('.sca-fancybox-wrap').width('100%').removeClass('sca-fancybox-tmp').show();

                        F._afterLoad();
                    });
                }

                coming.content = iframe.appendTo( coming.inner );

                if (!coming.iframe.preload) {
                    F._afterLoad();
                }
            },

            _preloadImages: function() {
                var group   = F.group,
                    current = F.current,
                    len     = group.length,
                    cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
                    item,
                    i;

                for (i = 1; i <= cnt; i += 1) {
                    item = group[ (current.index + i ) % len ];

                    if (item.type === 'image' && item.href) {
                        new Image().src = item.href;
                    }
                }
            },

            _afterLoad: function () {
                var coming   = F.coming,
                    previous = F.current,
                    placeholder = 'sca-fancybox-placeholder',
                    current,
                    content,
                    type,
                    scrolling,
                    href,
                    embed;

                F.hideLoading();

                if (!coming || F.isActive === false) {
                    return;
                }

                if (false === F.trigger('afterLoad', coming, previous)) {
                    coming.wrap.stop(true).trigger('onReset').remove();

                    F.coming = null;

                    return;
                }

                if (previous) {
                    F.trigger('beforeChange', previous);

                    previous.wrap.stop(true).removeClass('sca-fancybox-opened')
                        .find('.sca-fancybox-item, .sca-fancybox-nav')
                        .remove();
                }

                F.unbindEvents();

                current   = coming;
                content   = coming.content;
                type      = coming.type;
                scrolling = coming.scrolling;

                $.extend(F, {
                    wrap  : current.wrap,
                    skin  : current.skin,
                    outer : current.outer,
                    inner : current.inner,
                    current  : current,
                    previous : previous
                });

                href = current.href;

                switch (type) {
                    case 'inline':
                    case 'ajax':
                    case 'html':
                        if (current.selector) {
                            content = $('<div>').html(content).find(current.selector);

                        } else if (isQuery(content)) {
                            if (!content.data(placeholder)) {
                                content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
                            }

                            content = content.show().detach();

                            current.wrap.bind('onReset', function () {
                                if ($(this).find(content).length) {
                                    content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
                                }
                            });
                        }
                        break;

                    case 'image':
                        content = current.tpl.image.replace('{href}', href);
                        break;

                    case 'swf':
                        content = '<object id="sca-fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                        embed   = '';

                        $.each(current.swf, function(name, val) {
                            content += '<param name="' + name + '" value="' + val + '"></param>';
                            embed   += ' ' + name + '="' + val + '"';
                        });

                        content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                        break;
                }

                if (!(isQuery(content) && content.parent().is(current.inner))) {
                    current.inner.append( content );
                }

                // Give a chance for helpers or callbacks to update elements
                F.trigger('beforeShow');

                // Set scrolling before calculating dimensions
                current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

                // Set initial dimensions and start position
                F._setDimension();

                F.reposition();

                F.isOpen = false;
                F.coming = null;

                F.bindEvents();

                if (!F.isOpened) {
                    $('.sca-fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

                } else if (previous.prevMethod) {
                    F.transitions[ previous.prevMethod ]();
                }

                F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

                F._preloadImages();
            },

            _setDimension: function () {
                var viewport   = F.getViewport(),
                    steps      = 0,
                    canShrink  = false,
                    canExpand  = false,
                    wrap       = F.wrap,
                    skin       = F.skin,
                    inner      = F.inner,
                    current    = F.current,
                    width      = current.width,
                    height     = current.height,
                    minWidth   = current.minWidth,
                    minHeight  = current.minHeight,
                    maxWidth   = current.maxWidth,
                    maxHeight  = current.maxHeight,
                    scrolling  = current.scrolling,
                    scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
                    margin     = current.margin,
                    wMargin    = getScalar(margin[1] + margin[3]),
                    hMargin    = getScalar(margin[0] + margin[2]),
                    wPadding,
                    hPadding,
                    wSpace,
                    hSpace,
                    origWidth,
                    origHeight,
                    origMaxWidth,
                    origMaxHeight,
                    ratio,
                    width_,
                    height_,
                    maxWidth_,
                    maxHeight_,
                    iframe,
                    body;

                // Reset dimensions so we could re-check actual size
                wrap.add(skin).add(inner).width('auto').height('auto').removeClass('sca-fancybox-tmp');

                wPadding = getScalar(skin.outerWidth(true)  - skin.width());
                hPadding = getScalar(skin.outerHeight(true) - skin.height());

                // Any space between content and viewport (margin, padding, border, title)
                wSpace = wMargin + wPadding;
                hSpace = hMargin + hPadding;

                origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
                origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

                if (current.type === 'iframe') {
                    iframe = current.content;

                    if (current.autoHeight && iframe.data('ready') === 1) {
                        try {
                            if (iframe[0].contentWindow.document.location) {
                                inner.width( origWidth ).height(9999);

                                body = iframe.contents().find('body');

                                if (scrollOut) {
                                    body.css('overflow-x', 'hidden');
                                }

                                origHeight = body.outerHeight(true);
                            }

                        } catch (e) {}
                    }

                } else if (current.autoWidth || current.autoHeight) {
                    inner.addClass( 'sca-fancybox-tmp' );

                    // Set width or height in case we need to calculate only one dimension
                    if (!current.autoWidth) {
                        inner.width( origWidth );
                    }

                    if (!current.autoHeight) {
                        inner.height( origHeight );
                    }

                    if (current.autoWidth) {
                        origWidth = inner.width();
                    }

                    if (current.autoHeight) {
                        origHeight = inner.height();
                    }

                    inner.removeClass( 'sca-fancybox-tmp' );
                }

                width  = getScalar( origWidth );
                height = getScalar( origHeight );

                ratio  = origWidth / origHeight;

                // Calculations for the content
                minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
                maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

                minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
                maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

                // These will be used to determine if wrap can fit in the viewport
                origMaxWidth  = maxWidth;
                origMaxHeight = maxHeight;

                if (current.fitToView) {
                    maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
                    maxHeight = Math.min(viewport.h - hSpace, maxHeight);
                }

                maxWidth_  = viewport.w - wMargin;
                maxHeight_ = viewport.h - hMargin;

                if (current.aspectRatio) {
                    if (width > maxWidth) {
                        width  = maxWidth;
                        height = getScalar(width / ratio);
                    }

                    if (height > maxHeight) {
                        height = maxHeight;
                        width  = getScalar(height * ratio);
                    }

                    if (width < minWidth) {
                        width  = minWidth;
                        height = getScalar(width / ratio);
                    }

                    if (height < minHeight) {
                        height = minHeight;
                        width  = getScalar(height * ratio);
                    }

                } else {
                    width = Math.max(minWidth, Math.min(width, maxWidth));

                    if (current.autoHeight && current.type !== 'iframe') {
                        inner.width( width );

                        height = inner.height();
                    }

                    height = Math.max(minHeight, Math.min(height, maxHeight));
                }

                // Try to fit inside viewport (including the title)
                if (current.fitToView) {
                    inner.width( width ).height( height );

                    wrap.width( width + wPadding );

                    // Real wrap dimensions
                    width_  = wrap.width();
                    height_ = wrap.height();

                    if (current.aspectRatio) {
                        while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                            if (steps++ > 19) {
                                break;
                            }

                            height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                            width  = getScalar(height * ratio);

                            if (width < minWidth) {
                                width  = minWidth;
                                height = getScalar(width / ratio);
                            }

                            if (width > maxWidth) {
                                width  = maxWidth;
                                height = getScalar(width / ratio);
                            }

                            inner.width( width ).height( height );

                            wrap.width( width + wPadding );

                            width_  = wrap.width();
                            height_ = wrap.height();
                        }

                    } else {
                        width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
                        height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                    }
                }

                if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                    width += scrollOut;
                }

                inner.width( width ).height( height );

                wrap.width( width + wPadding );

                width_  = wrap.width();
                height_ = wrap.height();

                canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
                canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

                $.extend(current, {
                    dim : {
                        width	: getValue( width_ ),
                        height	: getValue( height_ )
                    },
                    origWidth  : origWidth,
                    origHeight : origHeight,
                    canShrink  : canShrink,
                    canExpand  : canExpand,
                    wPadding   : wPadding,
                    hPadding   : hPadding,
                    wrapSpace  : height_ - skin.outerHeight(true),
                    skinSpace  : skin.height() - height
                });

                if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                    inner.height('auto');
                }
            },

            _getPosition: function (onlyAbsolute) {
                var current  = F.current,
                    viewport = F.getViewport(),
                    margin   = current.margin,
                    width    = F.wrap.width()  + margin[1] + margin[3],
                    height   = F.wrap.height() + margin[0] + margin[2],
                    rez      = {
                        position: 'absolute',
                        top  : margin[0],
                        left : margin[3]
                    };

                if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                    rez.position = 'fixed';

                } else if (!current.locked) {
                    rez.top  += viewport.y;
                    rez.left += viewport.x;
                }

                rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
                rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

                return rez;
            },

            _afterZoomIn: function () {
                var current = F.current;

                if (!current) {
                    return;
                }

                F.isOpen = F.isOpened = true;

                F.wrap.css('overflow', 'visible').addClass('sca-fancybox-opened');

                F.update();

                // Assign a click event
                if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
                    F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                        if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                            e.preventDefault();

                            F[ current.closeClick ? 'close' : 'next' ]();
                        }
                    });
                }

                // Create a close button
                if (current.closeBtn) {
                    $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                        e.preventDefault();

                        F.close();
                    });
                }

                // Create navigation arrows
                if (current.arrows && F.group.length > 1) {
                    if (current.loop || current.index > 0) {
                        $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                    }

                    if (current.loop || current.index < F.group.length - 1) {
                        $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                    }
                }

                F.trigger('afterShow');

                // Stop the slideshow if this is the last item
                if (!current.loop && current.index === current.group.length - 1) {
                    F.play( false );

                } else if (F.opts.autoPlay && !F.player.isActive) {
                    F.opts.autoPlay = false;

                    F.play();
                }
            },

            _afterZoomOut: function ( obj ) {
                obj = obj || F.current;

                $('.sca-fancybox-wrap').trigger('onReset').remove();

                $.extend(F, {
                    group  : {},
                    opts   : {},
                    router : false,
                    current   : null,
                    isActive  : false,
                    isOpened  : false,
                    isOpen    : false,
                    isClosing : false,
                    wrap   : null,
                    skin   : null,
                    outer  : null,
                    inner  : null
                });

                F.trigger('afterClose', obj);
            }
        });

        /*
	 *	Default transitions
	 */

        F.transitions = {
            getOrigPosition: function () {
                var current  = F.current,
                    element  = current.element,
                    orig     = current.orig,
                    pos      = {},
                    width    = 50,
                    height   = 50,
                    hPadding = current.hPadding,
                    wPadding = current.wPadding,
                    viewport = F.getViewport();

                if (!orig && current.isDom && element.is(':visible')) {
                    orig = element.find('img:first');

                    if (!orig.length) {
                        orig = element;
                    }
                }

                if (isQuery(orig)) {
                    pos = orig.offset();

                    if (orig.is('img')) {
                        width  = orig.outerWidth();
                        height = orig.outerHeight();
                    }

                } else {
                    pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
                    pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
                }

                if (F.wrap.css('position') === 'fixed' || current.locked) {
                    pos.top  -= viewport.y;
                    pos.left -= viewport.x;
                }

                pos = {
                    top     : getValue(pos.top  - hPadding * current.topRatio),
                    left    : getValue(pos.left - wPadding * current.leftRatio),
                    width   : getValue(width  + wPadding),
                    height  : getValue(height + hPadding)
                };

                return pos;
            },

            step: function (now, fx) {
                var ratio,
                    padding,
                    value,
                    prop       = fx.prop,
                    current    = F.current,
                    wrapSpace  = current.wrapSpace,
                    skinSpace  = current.skinSpace;

                if (prop === 'width' || prop === 'height') {
                    ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                    if (F.isClosing) {
                        ratio = 1 - ratio;
                    }

                    padding = prop === 'width' ? current.wPadding : current.hPadding;
                    value   = now - padding;

                    F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
                    F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
                }
            },

            zoomIn: function () {
                var current  = F.current,
                    startPos = current.pos,
                    effect   = current.openEffect,
                    elastic  = effect === 'elastic',
                    endPos   = $.extend({opacity : 1}, startPos);

                // Remove "position" property that breaks older IE
                delete endPos.position;

                if (elastic) {
                    startPos = this.getOrigPosition();

                    if (current.openOpacity) {
                        startPos.opacity = 0.1;
                    }

                } else if (effect === 'fade') {
                    startPos.opacity = 0.1;
                }

                F.wrap.css(startPos).animate(endPos, {
                    duration : effect === 'none' ? 0 : current.openSpeed,
                    easing   : current.openEasing,
                    step     : elastic ? this.step : null,
                    complete : F._afterZoomIn
                });
            },

            zoomOut: function () {
                var current  = F.current,
                    effect   = current.closeEffect,
                    elastic  = effect === 'elastic',
                    endPos   = {opacity : 0.1};

                if (elastic) {
                    endPos = this.getOrigPosition();

                    if (current.closeOpacity) {
                        endPos.opacity = 0.1;
                    }
                }

                F.wrap.animate(endPos, {
                    duration : effect === 'none' ? 0 : current.closeSpeed,
                    easing   : current.closeEasing,
                    step     : elastic ? this.step : null,
                    complete : F._afterZoomOut
                });
            },

            changeIn: function () {
                var current   = F.current,
                    effect    = current.nextEffect,
                    startPos  = current.pos,
                    endPos    = { opacity : 1 },
                    direction = F.direction,
                    distance  = 200,
                    field;

                startPos.opacity = 0.1;

                if (effect === 'elastic') {
                    field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                    if (direction === 'down' || direction === 'right') {
                        startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
                        endPos[ field ]   = '+=' + distance + 'px';

                    } else {
                        startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
                        endPos[ field ]   = '-=' + distance + 'px';
                    }
                }

                // Workaround for http://bugs.jquery.com/ticket/12273
                if (effect === 'none') {
                    F._afterZoomIn();

                } else {
                    F.wrap.css(startPos).animate(endPos, {
                        duration : current.nextSpeed,
                        easing   : current.nextEasing,
                        complete : F._afterZoomIn
                    });
                }
            },

            changeOut: function () {
                var previous  = F.previous,
                    effect    = previous.prevEffect,
                    endPos    = { opacity : 0.1 },
                    direction = F.direction,
                    distance  = 200;

                if (effect === 'elastic') {
                    endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
                }

                previous.wrap.animate(endPos, {
                    duration : effect === 'none' ? 0 : previous.prevSpeed,
                    easing   : previous.prevEasing,
                    complete : function () {
                        $(this).trigger('onReset').remove();
                    }
                });
            }
        };

        /*
	 *	Overlay helper
	 */

        F.helpers.overlay = {
            defaults : {
                closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
                speedOut   : 200,       // duration of fadeOut animation
                showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
                css        : {},        // custom CSS properties
                locked     : !isTouch,  // if true, the content will be locked into overlay
                fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
            },

            overlay : null,      // current handle
            fixed   : false,     // indicates if the overlay has position "fixed"
            el      : $('html'), // element that contains "the lock"

            // Public methods
            create : function(opts) {
                opts = $.extend({}, this.defaults, opts);

                if (this.overlay) {
                    this.close();
                }

                this.overlay = $('<div class="sca-fancybox-overlay"></div>').appendTo( F.coming ? F.coming.parent : opts.parent );
                this.fixed   = false;

                if (opts.fixed && F.defaults.fixed) {
                    this.overlay.addClass('sca-fancybox-overlay-fixed');

                    this.fixed = true;
                }
            },

            open : function(opts) {
                var that = this;

                opts = $.extend({}, this.defaults, opts);

                if (this.overlay) {
                    this.overlay.unbind('.overlay').width('auto').height('auto');

                } else {
                    this.create(opts);
                }

                if (!this.fixed) {
                    W.bind('resize.overlay', $.proxy( this.update, this) );

                    this.update();
                }

                if (opts.closeClick) {
                    this.overlay.bind('click.overlay', function(e) {
                        if ($(e.target).hasClass('sca-fancybox-overlay')) {
                            if (F.isActive) {
                                F.close();
                            } else {
                                that.close();
                            }

                            return false;
                        }
                    });
                }

                this.overlay.css( opts.css ).show();
            },

            close : function() {
                var scrollV, scrollH;

                W.unbind('resize.overlay');

                if (this.el.hasClass('sca-fancybox-lock')) {
                    $('.sca-fancybox-margin').removeClass('sca-fancybox-margin');

                    scrollV = W.scrollTop();
                    scrollH = W.scrollLeft();

                    this.el.removeClass('sca-fancybox-lock');

                    W.scrollTop( scrollV ).scrollLeft( scrollH );
                }

                $('.sca-fancybox-overlay').remove().hide();

                $.extend(this, {
                    overlay : null,
                    fixed   : false
                });
            },

            // Private, callbacks

            update : function () {
                var width = '100%', offsetWidth;

                // Reset width/height so it will not mess
                this.overlay.width(width).height('100%');

                // jQuery does not return reliable result for IE
                if (IE) {
                    offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                    if (D.width() > offsetWidth) {
                        width = D.width();
                    }

                } else if (D.width() > W.width()) {
                    width = D.width();
                }

                this.overlay.width(width).height(D.height());
            },

            // This is where we can manipulate DOM, because later it would cause iframes to reload
            onReady : function (opts, obj) {
                var overlay = this.overlay;

                $('.sca-fancybox-overlay').stop(true, true);

                if (!overlay) {
                    this.create(opts);
                }

                if (opts.locked && this.fixed && obj.fixed) {
                    if (!overlay) {
                        this.margin = D.height() > W.height() ? $('html').css('margin-right').replace("px", "") : false;
                    }

                    obj.locked = this.overlay.append( obj.wrap );
                    obj.fixed  = false;
                }

                if (opts.showEarly === true) {
                    this.beforeShow.apply(this, arguments);
                }
            },

            beforeShow : function(opts, obj) {
                var scrollV, scrollH;

                if (obj.locked) {
                    if (this.margin !== false) {
                        $('*').filter(function(){
                            return ($(this).css('position') === 'fixed' && !$(this).hasClass("sca-fancybox-overlay") && !$(this).hasClass("sca-fancybox-wrap") );
                        }).addClass('sca-fancybox-margin');

                        this.el.addClass('sca-fancybox-margin');
                    }

                    scrollV = W.scrollTop();
                    scrollH = W.scrollLeft();

                    this.el.addClass('sca-fancybox-lock');

                    W.scrollTop( scrollV ).scrollLeft( scrollH );
                }

                this.open(opts);
            },

            onUpdate : function() {
                if (!this.fixed) {
                    this.update();
                }
            },

            afterClose: function (opts) {
                // Remove overlay if exists and fancyBox is not opening
                // (e.g., it is not being open using afterClose callback)
                //if (this.overlay && !F.isActive) {
                if (this.overlay && !F.coming) {
                    this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
                }
            }
        };

        /*
	 *	Title helper
	 */

        F.helpers.title = {
            defaults : {
                type     : 'float', // 'float', 'inside', 'outside' or 'over',
                position : 'bottom' // 'top' or 'bottom'
            },

            beforeShow: function (opts) {
                var current = F.current,
                    text    = current.title,
                    type    = opts.type,
                    title,
                    target;

                if ($.isFunction(text)) {
                    text = text.call(current.element, current);
                }

                if (!isString(text) || $.trim(text) === '') {
                    return;
                }

                title = $('<div class="sca-fancybox-title sca-fancybox-title-' + type + '-wrap">' + text + '</div>');

                switch (type) {
                    case 'inside':
                        target = F.skin;
                        break;

                    case 'outside':
                        target = F.wrap;
                        break;

                    case 'over':
                        target = F.inner;
                        break;

                    default: // 'float'
                        target = F.skin;

                        title.appendTo('body');

                        if (IE) {
                            title.width( title.width() );
                        }

                        title.wrapInner('<span class="child"></span>');

                        //Increase bottom margin so this title will also fit into viewport
                        F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
                        break;
                }

                title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
            }
        };

        // jQuery plugin initialization
        $.fn.scafancybox = function (options) {
            var index,
                that     = $(this),
                selector = this.selector || '',
                run      = function(e) {
                    var what = $(this).blur(), idx = index, relType, relVal;

                    if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.sca-fancybox-wrap')) {
                        relType = options.groupAttr || 'data-sca-fancybox-group';
                        relVal  = what.attr(relType);

                        if (!relVal) {
                            relType = 'rel';
                            relVal  = what.get(0)[ relType ];
                        }

                        if (relVal && relVal !== '' && relVal !== 'nofollow') {
                            what = selector.length ? $(selector) : that;
                            what = what.filter('[' + relType + '="' + relVal + '"]');
                            idx  = what.index(this);
                        }

                        options.index = idx;

                        // Stop an event from bubbling if everything is fine
                        if (F.open(what, options) !== false) {
                            e.preventDefault();
                        }
                    }
                };

            options = options || {};
            index   = options.index || 0;

            if (!selector || options.live === false) {
                that.unbind('click.fb-start').bind('click.fb-start', run);

            } else {
                D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.sca-fancybox-item, .sca-fancybox-nav')", 'click.fb-start', run);
            }

            this.filter('[data-sca-fancybox-start=1]').trigger('click');

            return this;
        };

        $.fn.scashowLoading = function(){
            F.showLoading();
        }
        $.fn.scahideLoading = function(){
            F.hideLoading();
        }

        // Tests that need a body at doc ready
        D.ready(function() {
            var w1, w2;

            if ( $.scrollbarWidth === undefined ) {
                // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
                $.scrollbarWidth = function() {
                    var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                        child  = parent.children(),
                        width  = child.innerWidth() - child.height( 99 ).innerWidth();

                    parent.remove();

                    return width;
                };
            }

            if ( $.support.fixedPosition === undefined ) {
                $.support.fixedPosition = (function() {
                    var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                        fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

                    elem.remove();

                    return fixed;
                }());
            }

            $.extend(F.defaults, {
                scrollbarWidth : $.scrollbarWidth(),
                fixed  : $.support.fixedPosition,
                parent : $('body')
            });

            //Get real width of page scroll-bar
            w1 = $(window).width();

            H.addClass('sca-fancybox-lock-test');

            w2 = $(window).width();

            H.removeClass('sca-fancybox-lock-test');

            $("<style type='text/css'>.sca-fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
        });
    }


//--------------------------------------------------------------------------------

    var settings;
    var enable_mobile = true;
    var moneyFormat;
    var add_to_cart_text;
    var unavailable_text = "Unavailable";
    var noimage;
    var overlay_lock = false;
    var loadScript = function(url,callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        if (script.readyState) {
            script.onreadystatechange = function() {
                if (script.readyState == "loaded"
                    || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
        } else {
            script.onload = function() {
                callback();
            };
        }

        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    function preloadQV ($,qv) {
        var handle = qv.attr('handle');
        return $.ajax({
            dataType: 'json',
            url: "/products/" + handle + ".js",
        }).done (function (product) {
            SCAShopify.preload(product.images,'large');
            SCAShopify.preload(product.images);
        });

    }

    function findQVContainer ($,qv) {
        if( $('a[href*="/products/"]',qv.parent()).has('img[src*="/products/"] , img[src*="/no-image"]').length > 1 || ((qv.parent().width() - qv.width()) > 50) ) {
            return qv;
        }

        return findQVContainer($,qv.parent());
    }
    var initQuickViewContent = function ($) {
        var qv_bnt_html = '<div class="sca-qv-button-wrap" style="display: none !important;" ><a class="sca-qv-button"  href="#sca-qv-showqv" handle="?" ></a></div>';

        var listItems = $('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').has('img[src*="/products/"]:not([class*="not-sca-qv"]), img[src*="/no-image"],img[data-srcset*="/products/"]:not([class*="not-sca-qv"])').add($('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])',$('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').parent().has('img[src*="/products/"]:not([class*="not-sca-qv"]), img[src*="/no-image"],img[data-srcset*="/products/"]:not([class*="not-sca-qv"])')));

        // if(listItems.length==0){
        //     listItems = jQuery('.product-card-wrapper').has('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').has('img[src*="/products/"]:not([class*="not-sca-qv"]), img[src*="/no-image"],img[data-srcset*="/products/"]:not([class*="not-sca-qv"])').add(jQuery('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])',jQuery('a[href*="/products/"]:not([href*=".jp"]):not(form a[href*="/products/"]):not(.related-products a[href*="/products/"]):not(.not-sca-qv a[href*="/products/"]):not([href*=".JP"]):not([href*=".png"]):not([href*=".PNG"])').parent().has('img[src*="/products/"]:not([class*="not-sca-qv"]), img[src*="/no-image"],img[data-srcset*="/products/"]:not([class*="not-sca-qv"])')));
        // }

        if (product_selector) {
            console.log("product_selector : " + product_selector);
            listItems = $(product_selector);
        }

        for (var i = 0 ; i < listItems.length ; ++ i ) {
            var pr_container = listItems.eq(i);
            var splits = pr_container.attr('href').split('/');
            var handle = splits[splits.length - 1].split('?')[0];

            if (collection_handle != null) {
                handle = pr_container.attr('href').split('?')[0] + '.js';
            }
            var container = pr_container.parent();
            try {
                container = findQVContainer($,pr_container.parent());
            } catch (e) {
                console.log('error when get product container ');
                console.log(e);
            }

            if (container == undefined || container == null) {
                container = pr_container.parent();
            }

            if ($('.sca-qv-button',container).length == 0) {
                container.append(qv_bnt_html.replace('?',handle));
            }
        }
    }


    var product_in_cart = 'This product in <a href="/cart"  class="sca-qv-msg-cart-link">cart</a> already.';
    var product_added = 'Item added to cart! <a href="/cart"  class="sca-qv-msg-cart-link">View Cart</a>.';
    var collection_handle;
    var product_selector = null;

    function loadData ($,data) {

        if (typeof data.enable_mobile !== 'undefined') {
            enable_mobile = data.enable_mobile;
        }
        if (isMoblieBrowser() && !enable_mobile ) {
            return false;
        }

        if (data.product_selector) product_selector = data.product_selector;
        collection_handle = data.collection_handle;
        if (data.autoconfig == 'yes') {
            initQuickViewContent($);
        }
        scaqvFancybox(window, document, $, undefined);
        scaqvImageZoom($,window, document,  undefined);
        var base64data = data.jsondata;
        moneyFormat = data.moneyFormat;

        console.log('collection_handle : ' + collection_handle);
        console.log('enable_mobile : ' + enable_mobile);
        noimage = data.noimage;
        console.log('no image : ' + noimage);
        add_to_cart_text = $('.sca-qv-cartbtn').val();
        if ($('#sca-qv-unavailable').length) {
            unavailable_text = $('#sca-qv-unavailable').text();
        }

        if (!(isMoblieBrowser()|| isTablet ())) {
            if (data.overlay_lock) {
                overlay_lock = data.overlay_lock;
            }
        } else {
            overlay_lock = true;
        }



        settings = $.parseJSON( SCABase64.decode(base64data));
        console.log('Disable QV : ' + settings.qv_disable);
        SCASettings.loadSettings($,settings);
        if (settings.qv_disable == 'on' ) {
            $('.sca-qv-button-wrap').removeClass('sca-qv-button-wrap');
            $('.sca-qv-button').removeClass('sca-qv-button');
        }
        return true;
    }
    SCAShopify.initSettings = function($) {
        SCAShopify.showByHandle  = function (handle) {
            var $ = SCAShopify.jQuery;
            if ($('.scaqv-temp-handle').length) {
                $('.scaqv-temp-handle').remove();
            }
            $('html').append('<a id="scaqv-temp-handle"  class="scaqv-temp-handle sca-qv-button" href="#sca-qv-showqv" data-index="1" handle="' + handle + '" style="display:none !important"></a>');
            $('#scaqv-temp-handle').trigger('click');
        };
        $ = SCAShopify.jQuery;
        loadProductFromCart($);
        /* var metadata = $('#sca-qv-metadata');
    if (metadata.length) {
    	var base64data = metadata.attr('jsondata');
    	moneyFormat = metadata.attr('moneyFormat');
        noimage= metadata.attr('noimage');
        console.log('no image : ' + noimage);
        add_to_cart_text = $('.sca-qv-cartbtn').val();
      	if ($('#sca-qv-unavailable').length) {
      		unavailable_text = $('#sca-qv-unavailable').text();
      	}

        settings = $.parseJSON( SCABase64.decode(base64data));
        SCASettings.loadSettings($,settings);
        return true;
    }*/

        var status = false;
        $.ajax({
            dataType: "json",
            url: '/index?view=sca.quickviewpro',
            contentType: "application/json; charset=utf-8",
            success: function(data) {
                status = loadData($,data);
                if (status) {
                    onAddCartClicked($);
                    displayQuickView($);
                }

            },
            error: function () {
                console.log('cant  load metadata and try with html');
                var intermediate  = $('#scaqv-metadata');
                if (intermediate.length < 1) {return false;};
                var data = {};
                data.jsondata = intermediate.attr('jsondata');
                data.moneyFormat = intermediate.attr('moneyFormat');
                data.noimage = intermediate.attr('noimage');
                data.autoconfig = intermediate.attr('autoconfig');
                data.product_selector = intermediate.attr('product_selector');
                status = loadData($,data);
                if (status) {
                    onAddCartClicked($);
                    displayQuickView($);
                }
            }
        });

        return status;
    }



    function createCartForm ($,product,container) {

        var form = $('#sca-qv-add-item-form',container);

        if (form.length == 0) return;

        var divOption = $('.sca-qv-product-options',form);

        //append variant option
        var sca_qv_variant_options = $('#sca-qv-variant-options',divOption);
        sca_qv_variant_options.empty();
        sca_qv_variant_options.append('<div > <select id="sca-qv-product-selected" name="id" class="sca-qv-hidden"> </select> </div>');
        var selectedProduct = $('#sca-qv-product-selected',sca_qv_variant_options);
        selectedProduct.empty();
        var variants = product.variants;
        var found_one_in_stock = false;
        $.each(variants, function(index, variant) {
            var selected = '';
            if (variant.available && found_one_in_stock == false) {
                found_one_in_stock = true;
                selected = 'selected="selected"';
            }
            selectedProduct.append('<option value="'+ variant.id +'" ' + selected +'>'+ variant.title +' - '+ SCAShopify.formatMoney(variant.price,moneyFormat) +'</option>');
        });

        $('#sca-qv-quantity',container).val('1');

        //append addtocart
        $('#sca-qv-sold-out').addClass('sca-qv-hidden');
        if (product.available) {
            $('.sca-qv-cartbtn').removeClass('sca-qv-hidden');
            $('.sca-qv-cartbtn').removeClass('disabled').removeAttr('disabled').val(add_to_cart_text);

        } else {
            $('.sca-qv-cartbtn').removeClass('sca-qv-hidden');
            $('.sca-qv-cartbtn').val($('#sca-qv-sold-out').text()).addClass('disabled').attr('disabled', 'disabled');
        }



        formatVariantOption ($, product);

    }

    function showIfProductAdd($,varianid) {
        if($.inArray(varianid,list_cart_variants) != -1) {
            $('#sca-qv-addcart-msg').html(product_in_cart);
            $('#sca-qv-addcart-msg').fadeIn(1000);
        }
    }


    function convert_currency ()  {
        try {
            if ((typeof Currency !== "undefined") && (typeof Currency.convertAll !== "undefined")) {
                Currency.convertAll(Currency.shopCurrency, Currency.currentCurrency);
            }
        } catch (e) {
            console.log(e);
        }
    }

    function formatVariantOption ($, product) {
        var selectCallback = function(variant, selector) {
            $('#sca-qv-addcart-msg').hide();

            var price_color = '';
            if (settings.price_color != undefined && settings.price_color != null) {
                price_color = settings.price_color;
            }
            var $product = $('#sca-qv-showqv');
            if (variant) {
                /*if (variant.featured_image) {
				$('#sca-qv-zoomImg').attr('data-zoom-image', SCAShopify.resizeImage(variant.featured_image.src, 'original'));
				$('#sca-qv-zoomImg').attr('src', SCAShopify.resizeImage(variant.featured_image.src, 'large'));
				var splits = SCAShopify.resizeImage(variant.featured_image.src, 'large').split('/');
				var src = splits[splits.length - 1];
				$('#sca-qv-galleryid a[data-image*="'+src+'"]').trigger('click');
			}*/

                if (variant.available) {
                    showIfProductAdd($,variant.id);
                    // Selected a valid variant that is available.
                    $('.sca-qv-cartbtn').removeClass('disabled').removeAttr('disabled').val(add_to_cart_text);
                } else {
                    // Variant is sold out.
                    $('.sca-qv-cartbtn').val($('#sca-qv-sold-out').text()).addClass('disabled').attr('disabled', 'disabled');
                }
                // Whether the variant is in stock or not, we can update the price and compare at price.
                if (variant.compare_at_price > variant.price) {
                    $('.sca-qv-price-container',$product).html(
                        '<span class="sca-qv-product-price" style="color:' + price_color + ' !important;">' + SCAShopify.formatMoney(variant.price,moneyFormat)
                        + '&nbsp;<del class="sca-qv-product-compare-price">' + SCAShopify.formatMoney(variant.compare_at_price,moneyFormat) + '</del>'
                        + '</span>'
                    ) ;
                } else {
                    $('.sca-qv-price-container',$product).html(
                        '<span class="sca-qv-product-price"  style="color:' + price_color + ' !important;">'
                        + SCAShopify.formatMoney(variant.price,moneyFormat) + '</span>');
                }
            } else {
                // variant doesn't exist.
                $('.sca-qv-cartbtn').val(unavailable_text).addClass('disabled').attr('disabled', 'disabled');
            }

            //convert_currency ();
        };



        // $(function(option) {
        var $product = $('#sca-qv-showqv');

        try {
            new Shopify.OptionSelectors('sca-qv-product-selected', { product: product, onVariantSelected: selectCallback });
        } catch (e) {
            console.log(e);
        }

        // Add label if only one product option and it isn't 'Title'.
        if( product.options.length == 1 && product.options[0] != 'Title' && $('.selector-wrapper:eq(0) label', $product).length == 0 ) {
            $('.selector-wrapper:eq(0)', $product).prepend('<label>'+product.options[0]+'</label>');
        }
        // Auto-select first available variant on page load.
        var found_one_in_stock = false;
        var variants = product.variants;
        $.each(variants , function (index,variant) {
            if (variant.available && found_one_in_stock == false) {
                found_one_in_stock = true;
                var options = product.options;
                $.each(options , function (index, value) {
                    $('.single-option-selector:eq('+index+')', $product).val(variant.options[index]).trigger('change');
                });
            }
        });

        // });

        $('#sca-qv-variant-options').removeClass('sca-qv-hidden');
        if (product.variants.length == 1 && product.variants[0].title.indexOf('Default') > -1) {
            $('#sca-qv-variant-options').addClass('sca-qv-hidden');
        }
    }

    function truncate ($,str) {
        var tempResult = $('<div/>').html(str);
        str = tempResult.text();
        str = str.replace(/\r?\n/g, "");
        str = str.replace(/<!--\n?.*\n?-->/,'');
        var split = str.split(" ");
        var n = 30;
        var toLong = split.length > n,
            str = toLong ? split.splice(0,n).join(" ") + '...' : str ;
        /* var n = 92;
	  var toLong = str.length>n,
	  str = toLong ? str.substr(0,n-1) + '...' : str ;*/
        return str ;
    }



    var target;
    function truncateNode (node) {
        if(node.children().length == 0 && target > 0) {
            var split = node.text().trim().split(/\s+/);
            var toLong = split.length - target;
            if (toLong > 0 ) {
                target = 0;
            } else {
                if (node.text().trim().length > 0) {
                    target = target - split.length;
                }
            }

            var str = toLong >= 0  ? split.splice(0,toLong).join(" ") + '...' : '' ;
            if (str.length > 0) {
                node.text(str);
            } else {
                node.remove();
            }

        } else if (node.children().length > 0 && target > 0) {
            for (var i = node.children().length - 1; i > -1 ; --i) {
                truncateNode(node.children('*:eq(' + i + ')'));
            }

            truncateNode(node);
        }


    }

    function createDesc ($, product, container) {
        if(!settings.des_num) settings.des_num = 30;
        var desc = $('#sca-qv-des');
        desc.off();
        desc.empty();
        // desc.empty();
        var tempResult = $('<div/>').html(product.description);
        target = tempResult.text().split(/\s+/).length - settings.des_num;
        if (tempResult.text().split(/\s+/).length > settings.des_num) {
            truncateNode(tempResult,tempResult.text().split(/\s+/).length - settings.des_num);
        }

        if (settings.des_num == 0) {
            desc.html('');
        } else {
            desc.html(tempResult.html());
        }

        //  desc.text(truncate(desc.text()));
        desc.append('<div class="clear-both"></div');
    }

    function createDetail ($,product,container,handle) {
        var detail = $('#sca-qv-detail',container);
        if (collection_handle != null) {
            detail.attr('href',handle.replace('.js',''));
        } else {
            detail.attr('href','/products/' + product.handle);
        }
    }

    function createPrice ($,product,container) {
        var price = $('#sca-qv-price-container',container);
        price.empty();
        if (product.compare_at_price > product.price) {
            $('#sca-qv-sale').removeClass('sca-qv-hidden');
            price.append('<span class="sca-qv-product-price ">' + SCAShopify.formatMoney(product.price,moneyFormat) + '&nbsp;<del class="sca-qv-product-compare-price">' + SCAShopify.formatMoney(product.compare_at_price,moneyFormat) + '</del>  </span>');
        } else {
            price.append('<span class="sca-qv-product-price ">' + SCAShopify.formatMoney(product.price,moneyFormat) + '</span>');
        }

    }

    function createTitle ($,product, container) {
        var title = $('#sca-qv-title',container);
        title.empty();
        title.append('<strong>' + product.title +  '</strong>');
    }


    function createGallery ($,product, container) {
        var sca_qv_galleryid = $('#sca-qv-galleryid',container);
        sca_qv_galleryid.empty();
        var qs_images = product.images;
        var img_main_width = parseInt(settings.img_main_width,10) ;
        var max_thumb_width = ( img_main_width - 8)/4;
        if (qs_images.length > 1) {
            cratezoomgalery($,sca_qv_galleryid,product.featured_image,max_thumb_width);
            $.each(qs_images, function(index, value) {
                if ( (0 < index) && (index < 4) ) {
                    cratezoomgalery($,sca_qv_galleryid,value,max_thumb_width);
                }
            });
        }
    }

    function cratezoomgalery ($,container,image,max_thumb_width) {
        var style = 'max-width:' + max_thumb_width  +'px;max-height:' +   max_thumb_width  +'px;  ';
        var atag = '<a href="#" data-image="' +SCAShopify.resizeImage(image, 'large')+ '" data-zoom-image="' +SCAShopify.resizeImage(image, 'original')+ '"  class="sca-qv-gallery-a" > <img src="' + SCAShopify.resizeImage(image,'large') +'" class="sca-qv-gallery-img" style="' + style + '"/> </a>';
        container.append(atag);
    }

    function createZoomContainer ($,product, container) {
        var divzoom = $('#sca-qv-zoomcontainer',container);
        divzoom.empty();
        var featured_image = noimage;
        if(product.featured_image != null) {
            featured_image = product.featured_image;
        }
        //divzoom.height("auto");
        divzoom.append('<img  id="sca-qv-zoomImg" style="max-width:'+settings.img_main_width+';max-height:'+settings.img_main_width+'" src="'+SCAShopify.resizeImage(featured_image, 'large')+'" data-zoom-image="'+SCAShopify.resizeImage(featured_image, 'original')+'" alt=""  >');
    }

    function cleanTemplate($, container) {
        var divzoom = $('#sca-qv-zoomcontainer',container);
        divzoom.empty();
        var sca_qv_galleryid = $('#sca-qv-galleryid',container);
        sca_qv_galleryid.empty();
        var title = $('#sca-qv-title',container);
        title.empty();
        var price = $('#sca-qv-price-container',container);
        price.empty();
        var desc = $('#sca-qv-des',container);
        desc.empty();
        var form = $('#sca-qv-add-item-form',container);


        var divOption = $('.sca-qv-product-options',form);

        //append variant option
        var sca_qv_variant_options = $('#sca-qv-variant-options',divOption);
        sca_qv_variant_options.empty();
        var selectedProduct = $('#sca-qv-product-selected',sca_qv_variant_options);
        selectedProduct.empty();
    }

    var getProductJson = function ($, handle,callbackQV) {
        var url;
        if (collection_handle != null) {
            url = handle;
        } else {
            url ="/products/" + handle + ".js"
        }

        return $.ajax({
            type:'GET',
            dataType: 'json',
            url: url,
            success : function(data) {
                callbackQV(SCAShopify.jQuery,data);
            }
        }).responseText;
    }


    function preloadQV ($,index) {
        var changeQV;
        var list_qv = $('.sca-qv-button');
        if (index  > -1 && list_qv.length > index) {
            changeQV = list_qv.eq(index);
            console.log(changeQV);
            var handle = changeQV.attr('handle');
            $.ajax({
                dataType: 'json',
                url: "/products/" + handle + ".js",
            }).done (function (product) {
                SCAShopify.preload(product.images,'large');
                SCAShopify.preload(product.images);
            });
        }
    }

    function preloadNearItem ($,qv) {
        var index = $('.sca-qv-button').index(qv);
        preloadQV($,index - 1);
        preloadQV($,index + 1);
    }



    function freegifts_filter ($,product) {
        var variants = [];
        $.each(product.variants ,function (index, value){
            var isgift = false;
            $.each(value.options ,function (oi, ov){
                if(ov.length > 6 && ov.substring(ov.length - 6,ov.length) == '% off)') {
                    isgift = true;
                    return false;
                }

                if(ov.length > 6 && ov.substring(ov.length - 6,ov.length) == '% Off)') {
                    isgift = true;
                    return false;
                }

                if (ov.length > 11 && ov.substring(ov.length - 11,ov.length) == '(Freegifts)') {
                    isgift = true;
                    return false;
                }

                try {
                    var brodev_regex = /\(BK \d+\)/g;
                    if(ov.match(brodev_regex)) {
                        isgift = true;
                        return false;
                    }
                } catch (e) {
                }

            });

            if (!isgift) {
                variants.push(value);
            }
        });

        product.variants = variants;
        return product;

    }


    function buyx_product_json($,product) {
        var variants = []
        // does it have BuyXDiscount option?
        var option_position = -1
        for ( var oi = 0, olen = product.options.length; oi < olen; oi++) {
            if (product.options[oi] == "BuyXDiscount") {
                option_position = oi + 1
                break
            }
        }
        if (option_position == -1) {
            return product
        }
        if (product.options.length > 1) {
            product.options.splice(option_position - 1, 1)
        } else {
            product.options[0] = "Title"
        }
        option_position = "option" + option_position
        product.available = false
        for ( var vi = 0, vlen = product.variants.length; vi < vlen; vi++) {
            if (product.variants[vi][option_position] == "Default") {
                product.variants[vi][option_position] = ""
                variants.push(product.variants[vi])
                product.available = product.available
                    || product.variants[vi].available
            }
        }
        product.variants = variants
        return product
    }


    var callbackQV = function ($,product) {
        //var product ;
        //product =  $.parseJSON(json);
        var options = [];
        $.each(product.options ,function (index, value){
            options[index] = value.name;
        });
        product.options = options;
        try {
            product = freegifts_filter($,product);
            product = buyx_product_json($,product);
        } catch (e) {
            console.log(e);
        }

        var sca_qv_left = $('#sca-qv-left');
        createZoomContainer($,product, sca_qv_left);
        createGallery ($,product, sca_qv_left);
        SCAShopify.preload(product.images);
        SCAShopify.preload(product.images,'large');
        //start right;

        var sca_qv_right = $('#sca-qv-right');

        createTitle($,product,sca_qv_right);
        createPrice($,product,sca_qv_right);
        createDesc($,product,sca_qv_right);
        createDetail ($, product, sca_qv_right,product.handle);
        createCartForm($, product, sca_qv_right);



        try {
            if (typeof sca_default_callback_function !== 'undefined') {
                sca_default_callback_function($,product);
            }
        } catch (e) {
            console.log(e);
            console.log('custom quick view function error');
        }


        var newImg = new Image();
        newImg.onload = function () {
            var curHeight = newImg.height;
            var trytime = 10;

            var loop = setInterval (function () {
                newImg = new Image();
                newImg.src = $('#sca-qv-zoomImg').attr('src');
                curHeight = newImg.height;
                --trytime;
                if (trytime == 0 || curHeight > 0) {
                    window.clearInterval(loop);
                    zoomAllProduct($);
                    if ($('#sca-qv-zoomcontainer').outerHeight() < $('#sca-qv-zoomImg').outerHeight()) {
                        $('#sca-qv-zoomcontainer').height($('#sca-qv-zoomImg').outerHeight());
                    }

                    if ((settings.wd_width == 'auto' || settings.wd_height=='auto') ) {
                        $.scafancybox.scaupdate();
                    } else {
                        if ($('#sca-qv-right').outerHeight() > $('#sca-qv-left').outerHeight()) {
                            $('#sca-qv-left').outerHeight($('#sca-qv-right').outerHeight());
                        }
                        $.scafancybox.hideLoading();
                    }

                };
            }, 300);

        };

        newImg.onerror = function () {
            console.error("Cannot load image");
            $.scafancybox.hideLoading();
        };

        newImg.src = $('#sca-qv-zoomImg').attr('src');
        if ($('#sca-qv-right').outerHeight() > $('.sca-fancybox-inner').outerHeight() ){
            $('#sca-qv-left').outerHeight('');
            $('#sca-qv-left').height('');
            $('#sca-qv-right').outerHeight('');
            $('#sca-qv-right').height('');
            $('.sca-fancybox-inner').css('overflow','auto');
        }

        try {
            if ($("#sca-qv-showqv").hasClass("sca-bm")) {
                $('.sca-fancybox-outer').append ('<div id="sca-brankmark" class="sca-brankmark" style=" position: absolute;bottom: -50px;left:45% ;  background: transparent !important;display:block !important; font-family:sans-serif;font-size:13px;text-align:center;box-sizing:border-box"><a  onclick="window.open(\'http://secomapp.com/?utm_channel=referral&utm_medium=quickview&utm_campaign=qvreferral\', \'_blank\')" href="http://secomapp.com/?utm_channel=referral&utm_medium=quickview&utm_campaign=qvreferral" style="color:white!important;">Powered by <span style="color:#006eff!important;text-decoration: underline;">Secomapp</span></a> </div>');
                $('#sca-brankmark a').click(function(e) {
                    e.preventDefault();
                });
            };
        } catch (e) {
        }

    }
    var displayQuickView = function($) {
        $ = SCAShopify.jQuery;
        var autosize = false;
        var maxWidth = 9999;
        var maxHeight = 9999;

        var minw = parseInt(settings.wd_width,10) || 720;
        var minh = parseInt(settings.wd_height,10) || 200;
        if ((settings.wd_width == 'auto' || settings.wd_height=='auto') ) {
            autosize = true;
            maxWidth = minw;
        }

        if (settings.wd_height!='auto') {
            maxHeight = minh;
        }

        $('.sca-qv-button').scafancybox({
            arrows : false,
            openEffect :'elastic',
            scrolling: 'no',
            maxHeight: maxHeight,
            maxWidth: maxWidth,
            autoSize: autosize,
            minHeight: minh,
            minWidth: minw,
            title: null,
            helpers: {
                overlay: {
                    locked: overlay_lock
                }
            },


            beforeLoad: function () {
                loadProductFromCart($);
                cleanTemplate($, $('#sca-qv-showqv'));
                $('#sca-qv-addcart-msg').hide();
                $('#sca-qv-sale').addClass('sca-qv-hidden');

                var qv = $(this.element);
                qv.scashowLoading();
                var product;

                var quickview = qv.attr('handle');
                if (quickview != undefined) {
                    var json=getProductJson($,$.trim(quickview),callbackQV);

                } else if($('span[class="sca-qv-handle"]',qv.parent()).length > 0) {
                    quickview = $('span[class="sca-qv-handle"]',qv.parent());
                    var json=getProductJson($,$.trim(quickview.html()),callbackQV);

                } else {
                    quickview = $('span',qv.parent());
                    product =  $.parseJSON($.trim(quickview.html()));
                }

            },
            afterShow: function () {

            },

            afterClose: function() {
                $.scafancybox.hideLoading();
            }

        });

        /*	var button_text = $('.sca-qv-button');

				var parent = button_text.parent();
				parent.show();*/

    };


    var zoomAllProduct = function ($) {
        var zoomEnabled = false;
        if (!(isMoblieBrowser()|| isTablet ())) {
            zoomEnabled = true;
        }

        function zoomProduct ($) {
            // $("#sca-qv-zoomImg").removeData('elevateZoom');
            // Using custom configuration
            $("#sca-qv-zoomImg").elevateZoom({
                //zoomWindowFadeIn : 400,
                //zoomLensFadeIn : 400,
                gallery : "sca-qv-galleryid",
                //	imageCrossfade : true,
                //zoomWindowWidth : 300,
                //zoomWindowHeight : 300,
                zoomWindowOffetx : 10,
                borderSize:1,
                scrollZoom : zoomEnabled,
                cursor : "pointer",
                zoomEnabled : zoomEnabled
            });
        }


        zoomProduct($);

    }


    var onAddCartClicked = function ($) {

        function updateCartcount ($form) {
            var quantity = parseInt($('[name="quantity"]',$form).val(), 10) || 1;
            var current = parseInt($(settings.cartcount).text(),10) || 0;
            var cartCount =  current + quantity;
            $(settings.cartcount).text(cartCount);
            $(settings.cartcount).show();
            return quantity;
        }

        //-----------------------------------------------
        function updateCartTotal () {
            $.getJSON("/cart.js", function(cart){
                $(settings.cart_total).html(SCAShopify.formatMoney(cart.total_price, moneyFormat));
                $(settings.cart_total).show();
            });
        }


        function updateCart(selectorString,currentUrl) {
            console.log(currentUrl);
            $.ajax({
                type: 'get',
                cache: false,
                async: false,
                url: currentUrl,
                success: function(result) {
                    var tempResult = $('<div/>').html(result);
                    $.each(selectorString.split('|'), function (index, value) {
                        var selector = $.trim(value);
                        var update = $(selector,tempResult);
                        $(selector).empty();
                        $(selector).append(update.html());
                    })
                },
                error: function () {
                    console.log('add to cart error');
                }
            });

        }

        if(typeof SCAShopify.cartCallback === 'undefined') {SCAShopify.cartCallback = function() {}};

        function addItem(form_id,$form) {
            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: $form.serialize(),
                success: scaonSuccess($form),
                error: scaonError
            }).done(function(variant) {
                try {
                    Shopify.getCart(function () {
                        var currentUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                        var selector = settings.cartcount + '|' + settings.cart_total;
                        updateCart(selector,currentUrl);
                        SCAShopify.cartCallback();
                    });
                } catch (e) {
                    var currentUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                    var selector = settings.cartcount + '|' + settings.cart_total;
                    updateCart(selector,currentUrl);
                }

            });
        }

        $(".sca-qv-cartbtn").click(function(e){
            var form = $('#sca-qv-add-item-form');
            if ($(this).attr('form-id') && $(this).attr('form-id') !="") {
                form = $($(this).attr('form-id'));
            }
            if (settings.cart_go == 'no'){
                var elem = $(this)
                $(elem).prop("disabled", true)
                e.preventDefault();
                addItem('sca-qv-add-item-form',form);
            } else {
                form.attr('action','/cart/add');
                form.submit();
            }
        });

        var scaonSuccess = function($form) {
            /* var elem = $('.sca-qv-cartbtn',$form);
      var quantity = parseInt($('[name="quantity"]',$form).val(), 10) || 1;
	  $("#sca-qv-cart-animation",$form).show();
      $("#sca-qv-cart-animation",$form).fadeOut(5000, function (){
     		 elem.removeAttr("disabled")  ;
      });  */
            $('#sca-qv-addcart-msg').hide();
            $('#sca-qv-addcart-msg').html(product_added);
            $('#sca-qv-addcart-msg').fadeIn(700 ,function () {
                var elem = $('.sca-qv-cartbtn',$form);
                elem.removeAttr("disabled")  ;
            });


        };


        var scaonError = function(XMLHttpRequest, textStatus ) {
            // SCAShopify returns a description of the error in XMLHttpRequest.responseText.
            // It is JSON.
            // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
            var data = eval('(' + XMLHttpRequest.responseText + ')');
            if (!!data.message) {
                alert(data.message + '(' + data.status  + '): ' + data.description);
            } else {
                alert('Error : ' + scafullMessagesFromErrors(data).join('; ') + '.');
            }
            $('.sca-qv-cartbtn').removeAttr("disabled");
        };

        var scafullMessagesFromErrors = function(errors) {
            var fullMessages = [];
            $.each(errors, function(attribute, messages) {
                $.each(messages, function(index, message) {
                    fullMessages.push(attribute + ' ' + message);
                });
            });
            return fullMessages;
        };

    };



    var $checkVersion = function (strVersionA, strVersionB){
        try {
            var arrVersionA = strVersionA.split('.');
            var arrVersionB = strVersionB.split('.');
            var intVersionA = (100000000 * parseInt(arrVersionA[0])) + (1000000 * parseInt(arrVersionA[1])) + (10000 * parseInt(arrVersionA[2]));
            var intVersionB = (100000000 * parseInt(arrVersionB[0])) + (1000000 * parseInt(arrVersionB[1])) + (10000 * parseInt(arrVersionB[2]));

            if (intVersionA > intVersionB) {
                return 1;
            } else if (intVersionA < intVersionB) {
                return -1;
            } else {
                return 0;
            }
            return false;
        } catch (e) {
            console.log(e);
        }

        return 1;
    }


    function isTablet () {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            return true;
        }
        return false;
    }
    function isMoblieBrowser () {
        var check = false;
        try {
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
        } catch (e) {
            console.log(e);
        }

        if (!check) {
            check = isTablet();
        }

        return check;
    }

    if (SCAShopify.loaded) return;
    SCAShopify.loaded = true;

    if (true||typeof jQuery === 'undefined' || $checkVersion("1.7.0",jQuery.fn.jquery)>0) {
        console.log('load jquery 1.11');
        loadScript("//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js",function() {
            jQuery191 = jQuery.noConflict(true);
            SCAShopify.jQuery = jQuery191;
            jQuery191(document).ready(function() {
                var isInstalled =  jQuery191('script:contains("sca-qv-scripts-noconfig"):contains("asyncLoad")').length > 0;
                if (!isInstalled) {
                    SCAShopify.loaded = false;
                    return false;
                }
                loadScript("//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js",function() {});
                var keepWork = SCAShopify.initSettings(jQuery191);
            });
        });
    } else {
        console.log("load shop's jquery ");
        SCAShopify.jQuery = jQuery;
        jQuery(document).ready(function() {
            loadScript("//cdnjs.cloudflare.com/ajax/libs/json2/20130526/json2.min.js",function() {});
            var keepWork = SCAShopify.initSettings(jQuery);

        });
    }



//--------------------------------------------------------------------------------




})();

