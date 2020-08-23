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
let currentDay = moment().format("dddd MMM Do YYYY");
plannerInput();

function plannerInput() {
	for(let i = 0; i < timeSlots.length; i++) {
		// definining variable values inside of function
		timeSlotI = timeSlots[i];
		currentHour = moment().format("HH");
		timeSlotStandard = moment(timeSlotI, "HH").format("h");
		btnID = "save-btn-" + timeSlotI;
		plannerTimeSlot = $("<form>").addClass("row");
		bsInputGroup = $("<div>").addClass("input-group flex-nowrap");
		bsInputGroupPrepend = $("<div>").addClass("input-group-prepend");
		bsInputGroupText = $("<span>").addClass("input-group-text addon-wrapping time-block");
		bsTextArea = $("<textarea>").addClass("form-control").attr("id", btnID);
		bsInputGroupAppend = $("<div>").addClass("input-group-append");
		bsSubmitButton = $("<button>").addClass("btn btn-outline-secondary button-addon2 time-block input-group-text").attr("type", "button").attr("id", btnID);
		// defines if the timeslot is am or pm
		if(timeSlotI >= 9 && timeSlotI < 12) {
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
		//appending planner elements
		plannerTimeSlot.append(bsInputGroup);
		bsInputGroup.append(bsInputGroupPrepend);
		bsInputGroup.append(bsTextArea);
		bsInputGroup.append(bsInputGroupAppend);
		bsInputGroupPrepend.append(bsInputGroupText);
		bsInputGroupAppend.append(bsSubmitButton);
		// planner style
		$(".addon-wrapping").width("50px");
		$(".btn").width("20px");
		//defines color of planner element background
		if(currentHour > timeSlotI) {
			bsTextArea.addClass("past");
		} else if(currentHour === timeSlotI) {
			bsTextArea.addClass("present");
		} else {
			bsTextArea.addClass("future");
		}
		// pulls planner details per timeslot
		let savedUserInput = localStorage.getItem("save-btn-" + timeSlotI);
		if(savedUserInput === null) {
			bsTextArea.text("");
		} else {
			bsTextArea.append(savedUserInput);
		}
	}
	$(".btn").on("click", function(event) {
		event.preventDefault();
		let userInput = this.parentElement.parentElement.children[1].value;
		let userInputId = this.parentElement.parentElement.children[1].id;
		localStorage.setItem("" + userInputId + "", userInput);
	});
}