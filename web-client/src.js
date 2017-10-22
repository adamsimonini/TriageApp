$(document).ready(function(){

  // A time function, counting up from 0
  var sec = 0;
    function pad ( val ) { return val > 9 ? val : "0" + val; }
    setInterval( function(){
        $(".seconds").html(pad(++sec%60));
        $(".minutes").html(pad(parseInt(sec/60,10)));
    }, 1000);

    //Upon submit, transfer data over to base level

      function newPatient(patient){
        alert(patient);
      }

      function getLastName(){
        let rawName = $("#inputName");
        //if first time inputting name, check if more than one set of characters is input
        let nameArray = rawName.val().split(" ");
        if (nameArray.length < 2 && focus == 0){
          alert("Please input both a first & last name.");
          return false;
        }
        nameArray.shift()
        let last = nameArray.toString().replace(",", " ");
        return(last);
      }

      $("#submitBtn").click(function(){
        let placement1 = $("input[name='optradio']:checked");
        let placement = placement1.val();

        alert(placement);
        function generatePatient(){
          let patient = [];
          patient[0] = $("#inputPriority").val()
          patient[1] = getLastName();
          patient[2] = $("#inputGender").val()
          patient[3] = $("#inputAge").val();
          patient[4] = $("#inputConditions").val();
          patient[5] = $("#inputSymptom").val();
          patient[6] = $("#inputNotes").val();
          return(patient);
        }
        let patient = generatePatient();

        function generatePatientDiv(){
          $("<p>Test</p>").appendTo(document.getElementById(placement));
        }
        generatePatientDiv();
        // $("body").append(newPatient(patient));
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
