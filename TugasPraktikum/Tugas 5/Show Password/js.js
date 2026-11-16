$(document).ready(function(){

    $("#chkShow").click(function(){
        if($(this).is(":checked")){
            $("#cek").hide();
            $("#cek2").show();
        } else {
            $("#cek").show();
            $("#cek2").hide();
        }
    });

        $("#cek").hide();
        $("#cek2").show();
    });