// when text is typed into the time spot it is saved in local storage
const timeSlots = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

let plannerTimeSlot;
let bsInputGroup;
let bsInputGroupPrepend;
let bsInputGroupText;
let bsTextArea;
let bsInputGroupAppend;
let bsSubmitButton;
let amPm = "";
let timeSlotI;
let currentHour;
let timeSlotStandard;
let btnID;
let plannerLocalStorage;
let currentDay = moment().format("dddd MMM Do YYYY");

plannerInput();

function plannerInput() {
    for (let i = 0; i < timeSlots.length; i++) {
        // definining variable values inside of function
        timeSlotI = timeSlots[i];
        currentHour = moment().format("H");
        timeSlotStandard = moment(timeSlotI, "H").format("h");
        btnID = "save-btn-" + timeSlotStandard;
        plannerTimeSlot = $("<form>");
        bsInputGroup = $("<div>").addClass("input-group flex-nowrap");
        bsInputGroupPrepend = $("<div>").addClass("input-group-prepend");
        bsInputGroupText = $("<span>").addClass("input-group-text addon-wrapping");
        bsTextArea = $("<textarea>").addClass("form-control").attr("id",  btnID);
        bsInputGroupAppend = $("<div>").addClass("input-group-append");
        bsSubmitButton = $("<button>").addClass("btn btn-outline-secondary button-addon2").attr("type", "button").attr("id", btnID);
        
        // defines if the timeslot is am or pm
        if (timeSlotI >= 9 && timeSlotI < 12) {
            amPm = " AM";
            bsInputGroupText.text(timeSlotStandard + amPm);
        } else {
            amPm = " PM";
            bsInputGroupText.text(timeSlotStandard + amPm);
        }
        
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

        //defines color of planner element background
        if (currentHour > timeSlotI) {
            console.log("current hour " + currentHour);
            console.log("timeslots " + timeSlotI);
            bsTextArea.addClass("past");
        } else if (currentHour === timeSlotI) {
            bsTextArea.addClass("present");
        } else {
            bsTextArea.addClass("future");
        } 
    }
    $(".btn").on("click", function(event) {
        event.preventDefault();
        let userInput = this.parentElement.parentElement.children[1].value;
        let userInputId = this.parentElement.parentElement.children[1].id;
        localStorage.setItem("" + userInputId + "", userInput);
    });
}


    
