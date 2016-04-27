$( document ).ready(function() {



  $.getJSON( "update.json", function( data ) {
    var cont=0
    var updatelist=[]
    $.each( data.user, function( key, val ) {
    num_users=key+1;
    updatelist.push("<div id="+val.Autor +">")
      $.each( val, function( i, item ) {

        if(i== "Avatar"){
          updatelist.push( " <img src="+ item+ "></img>" );
        }else{
            updatelist.push( "<li id='" + i + "'>" + item + "</li>" );
        }
      });
      updatelist.push("</div>");
    });

    cont=num_users;

    $("#more").val(cont+" messages left!")
    $("#more").click(function(){
            $( "<ul/>", {
              "class": "my-list-update",
              html: updatelist.join( "" )
            }).appendTo( ".my-new-list" );
            $("#more").val(" 0 mmessages left!")

  });
  });

  $(function() {
    $( "#tabs" ).tabs();

      var listtime=[]
      console.log("entraaaa")
      $.getJSON( "myline.json", function( data ) {
        $.each( data.user, function( key, val ) {
          listtime.push("<div id="+val.Autor +">")
          $.each( val, function( i, item ) {
          if(i== "Avatar"){
            listtime.push( " <img src="+ item+ "></img>" );
          }else if(i == "Fecha"){

            var date = new Date(item);
            listtime.push( "<li id='" + i + "'>" + item+ "</li>" );
          }else{
              listtime.push( "<li id='" + i + "'>" + item + "</li>" );
          }
        });

        listtime.push("</div>");
        console.log(listtime)
        });
        $( "<ul/>", {
          "class": "timeline",
          html: listtime.join( "" )
        }).appendTo( "#tabs-2" );
    });

    $.getJSON( "timeline.json", function( data ) {
      var items = [];
      $.each( data.user, function( key, val ) {

          items.push("<div id="+val.Autor +">")
          $.each( val, function( i, item ) {

            if(i== "Avatar"){
              items.push( "<img src="+ item+ "></img>" );
            }else{
                items.push( "<li id='" + i + "'>" + item + "</li>" );
            }
        });
        items.push("</div>");
      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "#tabs-1" );

    });
  });
});
