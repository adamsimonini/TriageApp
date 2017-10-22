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
        let patientArray = generatePatient();

        function generatePatientDiv(patient){
          let patientDiv =
            $('<div/>', {
                id: patient[1] + patient[3] + "Div",
                html: patient[6]
            });
          let patientInput =
            $('<input/>', {
                id: patient[1] + patient[3] + "Input",
                type: "radio",
                name: "item",
                id: "item-5"
            });
          let patientNotes =
            $('<div/>', {
                id: patient[1] + patient[3] + "Input",
                type: "radio",
                name: "item",
                html:
            });
            // <div>
            //   <input type="radio" name="item" id="item-one" hidden />
            //   <label for="item-one"><p class="priorityNumber">8</p><p class="lastName"> Anderson </p><span class="minutes"></span>:<span class="seconds"></span></label>
            //   <div>
            //     <p>In for back pain. Has type-2 diabetes</p>
            //   </div>
            // </div>

          patientDiv.appendTo(document.getElementById(placement));
          patientInput.appendTo(document.getElementById(patient[1] + patient[3]));
        }

        // <div>
        //   <input type='radio' name='item' id='item-one' hidden />
        //   <label for="item-one"><p class='priorityNumber'>8</p><p class="lastName"> Anderson </p><span class="minutes"></span>:<span class="seconds"></span></label>
        //   <div>
        //     <p>In for back pain. Has type-2 diabetes</p>
        //   </div>
        // </div>

        generatePatientDiv(patientArray);
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
