console.log("Hello 2")

function chorus1() {
    let words = "";
    words += "I'm in the mood for a melody\n";
    words += "I'm in the mood for a melody\n";
    words += "I'm in the mood"
    return words;
}

function chorus2() {
    let words = "";
    words += "I can make you dance\n";
    words += "I can make you sing\n";
    words += "I can make you dance\n";
    words += "I can make you sing\n";
    words += "If you want me to";
    return words;
}

function chorus3() {
    let words = "";
    words += "Any little song that you wanna to sing\n";
    words += "Any little song that you wanna to sing";
    return words;
}

function line1() {
    let words = "";
    words += "I'm in the mood";
    return words;

}

function line2() {
    let words = "";
    words += "If you want me to";
    return words;
}

function song() {
    let words = ""
    a = chorus1();
    b = chorus2();
    c = chorus3();
    d = line1();
    e = line2();

    words += `${(a)}\n`;
    words += `${(a)}\n`;
    words += `${(a)}\n\n`;

    words += `${(b)}\n`;
    words += "Oh\n";
    words += `${(b)}\n`;
    words += "Oh\n";
    words += `${(b)}\n\n`;

    words += `${(c)}\n`;
    words += "Any song will do\n";
    words += `${(c)}\n`;
    words += "It's up to you\n";
    words += `${(c)}\n`;
    words += "You're blue\n\n";

    words += `${(d)}\n`;
    words += `${(d)}\n`;
    words += `${(d)}\n\n`;

    words += "I can write it on the door\n";
    words += "I can put it on the floor\n";
    words += "I can do anything that you want me for\n";
    words += `${(e)}\n\n`;

    words += "Do it right, do it wrong\n";
    words += "Cause a matter of fact it'll turn out to be strong\n";
    words += `${(e)}\n\n`;

    words += `${(e)}\n`;
    return words
}

let s = song()

console.log(s)