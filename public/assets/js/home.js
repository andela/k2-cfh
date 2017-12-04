$(function(){

    //  Show signin modal
    $(document).on("click","#signInModalShow,#signInModalShow2", function(){
        $("#main-overlay").css("display","block");
        $("#main-overlay-top").css("display","block");
        $("#signInWhiteBox").css("display","block");
    });

    //  Hide white box
    $(document).on("click","#main-overlay-top", function(e){
        if( $(this).is(e.target)){
            $("#main-overlay,#main-overlay-top").css("display","none");
            $(".main-whitebox").css("display","none");
        }
    });

    //  Shoe signup modal
    $(document).on("click", "#signUpModalShow", function(){
        $("#main-overlay").css("display","block");
        $("#main-overlay-top").css("display","block");
        $("#signUpWhiteBox").css("display","block");
    });

    //  Power avatars
    ["avatar1","avatar2","avatar3","avatar4","avatar5","avatar6","avatar7","avatar8","avatar9","avatar10","avatar11"].map(function(item){
        $(document).on("click","#"+item+"Link", function(){
            $(".signup-avatar").removeClass("signup-avatar-active").addClass("signup-avatar-inactive");
            $("#"+item+"Span").removeClass("signup-avatar-inactive").addClass("signup-avatar-active");
            $("#"+item).click();
        });
    });


});