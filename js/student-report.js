var message = '';
var student;


function print_message (mess)
{
	document.write("<section>" + mess + "</section>");
}

for (var i = 0; i < students.length; i++)
{
	student = students[i];
	message += "<h1>" + "Name: " + student.name + "</h1>";
	message += "<p>" + "Track: " + student.track + "</p>";
	message += "<p>" + "Achievements: " + student.achievements + "</p>";
	message += "<p>" + "Points: " + student.points + "</p>";
	
}

print_message(message);