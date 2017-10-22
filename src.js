
// A time function, counting up from 0
var sec = 0;
  function pad ( val ) { return val > 9 ? val : "0" + val; }
  setInterval( function(){
      $(".seconds").html(pad(++sec%60));
      $(".minutes").html(pad(parseInt(sec/60,10)));
  }, 1000);

    let focus = 0;
    let rawName = jQuery("#fullName");
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
      jQuery("#altSubmit").click(function(){
        jQuery("#firstname").val(first);
        jQuery("#lastname").val(last);
        jQuery("#email_address").val(jQuery("#altEmail").val());
        jQuery("#telephone").val(jQuery("#altPhone").val());
        jQuery("#password").val(jQuery("#altPassword").val());
        jQuery("#confirmation").val(jQuery("#altPasswordConfirm").val());
        jQuery("#company").val(jQuery("#altCompany").val());
        jQuery("#customer_website_url").val(jQuery("#altURL").val());
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
