// when text is typed into the time spot it is saved in local storage
const timeSlots = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

let plannerTimeSlot;
let bsInputGroup;
let bsInputGroupPrepend;
let bsInputGroupText;
let bsTextArea;
let bsInputGroupAppend;
let bsSubmitButton;



let amPm = "";

// let plannerStorage = localStorage.getItem();

//     if (nineAmSlot.textContent = null) {
//         return;
//     }
//     else {
//         nineAmSlot.append(plannerItem);
//     }

plannerInput();

function plannerInput() {
    for (let i = 0; i < timeSlots.length; i++) {
        // Variables to create planner elements
        plannerTimeSlot = $("<form>");
        bsInputGroup = $("<div>").addClass("input-group flex-nowrap");
        bsInputGroupPrepend = $("<div>").addClass("input-group-prepend");
        bsInputGroupText = $("<span>").addClass("input-group-text addon-wrapping");
        bsTextArea = $("<text-area>").addClass("form-control").attr("id",  "text-area-" + timeSlots[i]);
        bsInputGroupAppend = $("<div>").addClass("input-group-append");
        bsSubmitButton = $("<button>").addClass("btn btn-outline-secondary button-addon2").attr("type", "button").attr("id", "save-btn-" + timeSlots[i]);
        
        // defines if the timeslot is am or pm
        if (timeSlots[i] >= 9 && timeSlots[i] < 12) {
            amPm = " AM";
            bsInputGroupText.textContent = timeSlots[i] + amPm;
        } else {
            amPm = " PM";
            bsInputGroupText.textContent = timeSlots[i] + amPm;
        }
        
        bsInputGroupText.textContent = timeSlots[i] + amPm;
        bsTextArea.textContent = "test";
        bsSubmitButton.textContent = "<i class='far fa-save'></i>";


        $("#container").prepend(plannerTimeSlot);
        plannerTimeSlot.append(bsInputGroup);
        bsInputGroup.append(bsInputGroupPrepend);
        bsInputGroup.append(bsTextArea);
        bsInputGroup.append(bsInputGroupAppend);

        bsInputGroupPrepend.append(bsInputGroupText);
        bsInputGroupAppend.append(bsSubmitButton);

        console.dir(bsInputGroupText.textContent);
        console.dir(bsTextArea.textContent);
        console.dir(bsSubmitButton.textContent);

    }
}

//     
   
// } 

// $("#save").on("click", function() {
//     event.preventDefault();
//     let plannerItem = nineAmSlot.val();
//     localStorage.setItem("nineAmItem", plannerItem);
    
