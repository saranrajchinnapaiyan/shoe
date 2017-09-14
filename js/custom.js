/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});
    
    /* Form submit event */
    $("#contact").on('submit', function(e){
        var isValid;
        
        var formDetails = {
            name : {
                selector : '.name',
                validationType : 'empty',
                errorId : '#nameError',
            },
            email : {
                selector : '.email',
                validationType : 'email',
                errorId : '#emailError',
            },
            msg : {
                selector : '.msg',
                validationType : 'empty',
                errorId : '#msgError',
            }
        };
        
        isValid = validateForm([], formDetails);
        if(isValid)
            alert(true)
        else
            alert(false)
    })
    
    function validateForm(arr, formdDetails){
        arr = [];
        
        $.each(formdDetails, function(key, value){
            console.log(value , key);
            
            if(value.validationType == 'empty'){
                var val = $(value.selector).val();
                (val == '') ? arr.push(true) : arr.push(false);
            } else if(value.validationType == 'email'){
                var val = $(value.selector).val();
                var mailformat =  /^[a-z0-9!#$%&'"*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&*+/=?^_`{|}~-]+)*@(?:[a-z0-9[](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-zA-Z0-9]{2}|([0-9]{3}]*)|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)$/;			
                
                (val.match(mailformat)) ? arr.push(true) : arr.push( false );                
                
            }
            
            return arr;
        })
        
    }

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */




