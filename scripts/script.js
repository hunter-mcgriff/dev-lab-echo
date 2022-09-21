$(document).ready(function() {
    console.log("doc is ready");

    let revName;


    $
        ("#btnGetFacts").click(function() {



            let userName = $("#userName").val();
            let coolFacts = generateCoolNameFacts(userName);

            console.log('you clicked the button');
            console.log('from ln 12', generateCoolNameFacts(userName));

            $("#coolNameFactsOutput").html(coolFacts);



        });


});

function generateCoolNameFacts(userName) {
    let coolFacts = '';

    coolFacts = nameLength(userName);
    coolFacts += " <br> " + nameStart(userName);
    coolFacts += "<h3> " + nameEnd(userName) + "</h3>";
    coolFacts += " <br> " + getSpiritAnimal(userName);

    console.log("initialized the'm coolFacts variable: " + coolFacts);

    return coolFacts;
}

function nameLength(name) {
    return "Your name is " + name.length + " letters long!";
}

function nameStart(name) {
    return "the first letter of your name is " + name[0]
}

function nameEnd(name) {

    let lastIndex = name.length - 1

    return "the last letter of your name is " + name[lastIndex]
}



function getSpiritAnimal(name) {

    var SpiritAnimals = [
        'Tiger',
        'Lion',
        'Whale',
        'Deer'
    ]
    let myanimal = SpiritAnimals[Math.floor(Math.random() * SpiritAnimals.length)]

    return "Your spirit animal is " + myanimal


}