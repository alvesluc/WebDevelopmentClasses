{
    const teacherFujioka = {
        name: "Fujioka",
        age: "26",
        teaches: [
            "Java",
            "HTML",
            "JavaScript",
            "Spring",
            "Angular",
            "Node",
            "Quarkus"
        ],
    };

    var fujiokaToJson = JSON.stringify(teacherFujioka);
    document.getElementById("fujiokaToJson").innerHTML = fujiokaToJson;

    var jsonToFujiokaString = '{"name": "Fujioka","age": "26","teaches": ["Java","HTML","JavaScript","Spring","Angular","Node","Quarkus"]}';

    var jsonToFujioka = JSON.parse(jsonToFujiokaString);
    document.getElementById("jsonToFujioka").innerHTML = jsonToFujioka.name + ", " + jsonToFujioka.age;

    var subjectsString = jsonToFujioka.teaches.toString();
    var subjects = subjectsString.replace(/,/g, ', ');
    document.getElementById("jsonToFujiokaTeaches").innerHTML = subjects;
}