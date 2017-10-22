
// A time function, counting up from 0
var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      $(".seconds").html(pad(++sec%60));
      $(".minutes").html(pad(parseInt(sec/60,10)));
  }, 1000);

// Split name into two values
    let focus = 0;
    let rawName = $("#inputName");
    //if first time inputting name, check if more than one set of characters is input
    rawName.focusout(function(){
      let nameArray = rawName.val().split(" ");
      if (nameArray.length < 2 && focus == 0){
        alert("Please input both a first & last name.");
        focus++;
        return false;
      }
      let first = nameArray[0]
      nameArray.shift()
      let last = nameArray.toString().replace(",", " ");

  //Upon submit, transfer data over to base level

      $("#submitBtn").click(function(){

        var data = {
            title: "Constructing HTML Elements"
        }

        var template = $("#tutorial-template").html();
        // html: '<div ...>\n<h1 ...>{{title }}<h1>\n</div>'

        var html = Mustache.render(template, data);
        $("body").append(html);

        $("#lastname").val(last);
        $("#gender").val($("#inputGender").val());
        $("#age").val($("#inputAge").val());
        $("#conditions").val($("#inputConditions").val());
        $("#notes").val($("#inputNotes").val());
      });
    });
    // let radio = 1;
    // $("#radioButton").on("click", function(){
    //   if($(this).val) == radio){
    //     $(this).prop('checked', false);
    //     radio = 0;
    //   }else{
    //     $(this).prop('checked', true);
    //     radio = 1;
    //   }
    // });
