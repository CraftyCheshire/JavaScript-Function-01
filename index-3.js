console.log("hello world 3")

function way() {
    let words = "";
    words = "On my way";
    return words;
}

function chorus1() {
    let words = "";
    words += "I would like to reach out my hand\n";
    words += "Oombayseeyou, oombaytellyou to run (on my way, on my way)\n";
    words += "Omabadee, seemoobadeeyah\n";
    words += "Well, pick me up with golden hand\n";
    words += "And oombayseeyou, oombaytellyou to run (on my way, on my way)\n";
    words += "Omabadee, seemoobadeeyah";
    return words;
}

function chorus2() {
    let words = "";
    words += 'Well, I would like to hold my little hand\n';
    words += "And we will run, we will, we will crawl, we will\n";
    words += "I would like to hold my little hand\n";
    words += "And we will run, we will, we will crawl";
    return words;
}

function send() {
    let words = ""
    words = "Send me on my way";
    return words;
}

function song() {
    let words = ""
    let w = way();
    let c = chorus1();
    let x = chorus2();
    let s = send();

    console.log(w);
    console.log(w);
    console.log(w);
    console.log(w);
    console.log(c);
    console.log(x);
    console.log(s);
    console.log(w);
    console.log(s);
    console.log(w);    
    console.log(s);
    console.log(w);    
    console.log(s);
    console.log(w);    
    console.log(s);
    console.log(w);
    console.log(s);
    console.log(w);
    console.log(s);
    console.log(w);
    console.log (`Mm, hmm ${(w)}`);
    console.log(x);
    console.log(s);
    console.log(s);
    console.log(s);
    console.log(w);
    console.log(s);
    console.log(s);
    console.log("Ooh, ooh, ooh, ooh, ooh, ooh, ooh, ooh");
    console.log(w);
    console.log(w);
    console.log("I would like to reach out my hand");
    words += `Oombayseeyou, oombaytellyou to run ${(w)} ${(w)}`;
    console.log("Omabadee, seemoobadeeyah")
    return words
}

song()