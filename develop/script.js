// when text is typed into the time spot it is saved in local storage
const timeSlots = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

let plannerTimeSlot;
let bsInputGroup;
let bsInputGroupPrepend;
let bsInputGroupText;
let bsTextArea;
let bsInputGroupAppend;
let bsSubmitButton;
let amPm = "";
let plannerLocalStorage;
let currentDay = moment().format("dddd MMM Do YYYY");
let currentHour = moment().format("H")
console.log(currentHour);

plannerInput();

function plannerInput() {
    for (let i = 0; i < timeSlots.length; i++) {
        if (currentHour > timeSlots[i]) {
            bsTextArea.addClass("past");
        };
        let timeSlotStandard = moment(timeSlots[i], "H").format("h");
        console.log(timeSlotStandard);
        // Variables to create planner elements
        plannerTimeSlot = $("<form>");
        bsInputGroup = $("<div>").addClass("input-group flex-nowrap");
        bsInputGroupPrepend = $("<div>").addClass("input-group-prepend");
        bsInputGroupText = $("<span>").addClass("input-group-text addon-wrapping");
        bsTextArea = $("<textarea>").addClass("form-control").attr("id",  "text-area-" + timeSlotStandard);
        bsInputGroupAppend = $("<div>").addClass("input-group-append");
        bsSubmitButton = $("<button>").addClass("btn btn-outline-secondary button-addon2").attr("type", "button").attr("id", "save-btn-" + timeSlotStandard);
        
        // defines if the timeslot is am or pm
        if (timeSlots[i] >= 9 && timeSlots[i] < 12) {
            amPm = " AM";
            bsInputGroupText.text(timeSlotStandard + amPm);
        } else {
            amPm = " PM";
            bsInputGroupText.text(timeSlotStandard + amPm);
        }

        //defines color of planner element background
        
        // adding text content to planner
        bsSubmitButton.html("<i class='far fa-save'>");

        $("#currentDay").text(currentDay);
        $("#container").append(plannerTimeSlot);
        plannerTimeSlot.append(bsInputGroup);
        bsInputGroup.append(bsInputGroupPrepend);
        bsInputGroup.append(bsTextArea);
        bsInputGroup.append(bsInputGroupAppend);

        bsInputGroupPrepend.append(bsInputGroupText);
        bsInputGroupAppend.append(bsSubmitButton);
        
        //style planner
        $(".addon-wrapping").width("50px");
        
    }
}


    
