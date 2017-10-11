
$(document).on('click','#done',function(){
    	trivia.done();
    });


//when start is clicked the trivia questions show up
$("#start").on('click',function(){
	//removes the start button
	$("#start").remove();
	//sets timer to countdown
	timer=setInterval(trivia.countdown,1000);
	//displaying the time
	$("#game").html('<h3 id=clock>Time Remaining</h3>');	
	//loop will list quest and create radio buttons with possible answers 
	for (var i=0;i<questions.length;i++){	
		//display question in object questions	
		$("#game").append("<h2>"+questions[i].question+'</h2>');	
		//displays the answer choices from object questions.answers	
		for (var j=0; j < questions[i].answers.length; j++){
			$("#game").append('<input id="choices" type="radio" name="capQuest'+i+'" value='+"'"+questions[i].answers[j]+"'"+'>'+questions[i].answers[j]+'  ');
		}
	}
	$("#game").append('<br><button id="done">Done</button>');
})
//the object with questions, answers and the correct answer
var questions = [{
	question:"What is the Capital of Texas?",
	answers:["Houston","Dallas","San Antonio","Austin"],
	correctAnswer: "Austin",
}, {
	question:"What is the Capital of California?",
	answers:["Sacramento","San Francisco","San Diego","Los Angeles"],
	correctAnswer: "Sacramento",
}, {
	question:"What is the Capital of North Dakota?",
	answers:["Fargo","Pierre","Bismarck","North Dakota City"],
	correctAnswer: "Bismarck",
}, {
	question:"What is the Capital of Vermont?",
	answers:["Burlington","Concord","Montpelier","Dover"],
	correctAnswer: "Montpelier",
}, {
	question:"What is the Capital South Carolina?",
	answers:["Charleston","Charlotte","Greenville","Columbia"],
	correctAnswer: "Columbia",
}, {
	question:"What is the Capital of Michigan?",
	answers:["Detroit","Grand Rapids","Lansing","Plymouth"],
	correctAnswer: "Lansing",
}, {
	question:"What is the Capital of Nevada?",
	answers:["Carson City","Las Vegas","Lake Tahoe","Palm Springs"],
	correctAnswer: "Carson City",
}, {
	question:"What is the Capital of Oregon",
	answers:["Portland","Salem","Olympia","Springfield"],
	correctAnswer: "Salem",
}, {
	question:"What is the Capital of Nebraska",
	answers:["Lincoln","Omaha","Des Moines","Topeka"],
	correctAnswer: "Lincoln",
}, {
	question:"What is the Capital of Tennessee",
	answers:["Knoxville","Chattanooga","Memphis","Nashville"],
	correctAnswer: "Nashville",
}];
//object to hold all game information such as counters and game actions
var trivia = {	
	correct:0,
	wrong: 0,
	unanswered:0,
	clock: 60,
	//timer feature before results are shown
	countdown: function(){
		trivia.clock--;
		$("#clock").html('Time Remaining: ' + trivia.clock+ ' seconds');		
		if (trivia.clock <= 0){
			trivia.done();
		}
	},
	//when time is up it will then check your answers and increment right and wrong answers
	done:function (){
		clearInterval(timer);
		var answerSelected=""
		for (var i=0; i < questions.length; i++){
			answerSelected=$("input[name='capQuest"+i+"']:checked").val();
			console.log("answer Selected "+answerSelected);
			if (answerSelected == null){
				trivia.unanswered++;
			}
			else if (answerSelected == questions[i].correctAnswer){
				trivia.correct++;
			}
			else{
				trivia.wrong++;
			}
		}
		//calls the results function
		this.results();
	},
	//displays the results
	results:function(){
		$("#game").remove();
		$("#results").html("<h1>Results</h1>");
		$("#results").append("<h2>Questions Correct: "+trivia.correct+ "</h2>");
		$("#results").append("<h2>Questions Wrong: "+trivia.wrong+ "</h2>");
		$("#results").append("<h2>Questions Unanswered: "+trivia.unanswered+ "</h2>");
	}

}
