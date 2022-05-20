let rom = document.querySelector(".rom");
for (let i = 0; i < 64; i++) {
    let data = document.createElement("div");
    data.classList.add("row-64");
    rom.appendChild(data);
}

let halt = document.querySelector(".halt");
let eachromarr = document.querySelectorAll(".row-64");
halt.addEventListener("click", () => {
    Reset();
});
let counter = 0;
let opcode = {
    MOV: "000",
    XCHG: "001",
    MUL: "010",
    STA: "011",
    LDA: "100",
    ADALL: "101",
};

console.log(eachromarr);

//fetch
eachromarr[0].innerText = `01011000000000000000`;
eachromarr[1].innerText = `10000000000010010000`;

// mov a,b
eachromarr[11].innerText = `00000100100000000000`;
//XCHG
eachromarr[15].innerText = `00000001000000100000`;
eachromarr[16].innerText = `00000100100000000000`;
eachromarr[17].innerText = `00000010000001000000`;

//MUL
eachromarr[20].innerText = `00000101000000000001`;
eachromarr[21].innerText = `00000100010000000101`;

//STA ADR
eachromarr[25].innerText = `01011000000000000000`;
eachromarr[26].innerText = `10000000000000110000`;
eachromarr[27].innerText = `00011000000001000000`;
eachromarr[28].innerText = `00000100000000001000`;

// LDA ADR
eachromarr[30].innerText = `01011000000000000000`;
eachromarr[31].innerText = `10000000000000110000`;
eachromarr[32].innerText = `00011000000001000000`;
eachromarr[33].innerText = `00000010000000010000`;

//ADDALL
eachromarr[35].innerText = `00000101000000000101`;
eachromarr[36].innerText = `00000100010000000101`;

let count = document.querySelector(".counter");
let time = document.querySelector("#time");
let input = document.querySelector(".instruction");
let pcbus = document.querySelector(".bus1");
let marbus = document.querySelector(".bus2");
let pc = 0;
let mar = 0;
let ram = ["", "", "", ""];
let marblock = document.querySelector(".mar .value");
let pcblock = document.querySelector(".pc .value");
let tmpblock = document.querySelector(".tmp .value");
let ablock = document.querySelector(".a .value");
let bblock = document.querySelector(".b .value");
let cblock = document.querySelector(".c .value");
let irblock = document.querySelector(".ir .value");
let mainbus = document.querySelector(".main-bus");
let tempbus = document.querySelector(".bus-tmp");
let a1bus = document.querySelector(".bus-a1");
let aMainbus = document.querySelector(".bus-amain");
let irbus = document.querySelector(".bus-ir");
let ramblock = document.querySelectorAll(".row-5");
let pctempbus = document.querySelector(".bus3");
let bbus = document.querySelector(".bus-b");
let cbus = document.querySelector(".bus-c");
let alubus = document.querySelector(".bus-alu");
let tmp = 0;
let a = 21;
let c = 5,
    b = 42;
let ir = 0;
display();
let abbus = document.querySelector(".busab");
function fetch1() {
    AllGreen();
    pcbus.style.backgroundColor = "red";
    mar = pc;
    marblock.innerText = `${mar}`;
    marbus.style.backgroundColor = "red";
}
function fetch2() {
    AllGreen();
    pc++;
    mainbus.style.backgroundColor = "red";
    irbus.style.backgroundColor = "red";
    ir = ram[0];
    display();
}
function MOV() {
    abbus.style.backgroundColor = "red";
    b = a;
    console.log("hii");
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}

function XCHG1() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    tempbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    tmp = a;
    display();
}
function XCHG2() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    bbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    a = b;
    display();
}
function XCHG3() {
    AllGreen();
    tempbus.style.backgroundColor = "red";
    bbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    b = tmp;
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}
function MUL1() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    bbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    alubus.style.backgroundColor = "red";
    a = a * b;
    display();
}
function MUL2() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    cbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    alubus.style.backgroundColor = "red";
    a += c;
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}
function ADALL1() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    bbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    alubus.style.backgroundColor = "red";
    a = a + b;
    display();
}
function ADALL2() {
    AllGreen();
    aMainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    cbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    alubus.style.backgroundColor = "red";
    a += c;
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}
function STA2() {
    AllGreen();
    tempbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    tmp = parseInt(ram[1], 2);
    pc++;
    display();
}
function STA3() {
    AllGreen();
    tempbus.style.backgroundColor = "red";
    mainbus.style.backgroundColor = "red";
    tmp = parseInt("" + ram[2] + ram[1], 2);
    display();
}
function STA4() {
    AllGreen();
    marbus.style.backgroundColor = "red";
    pctempbus.style.backgroundColor = "red";
    mar = tmp;
    display();
}
function STA5() {
    AllGreen();
    mainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    aMainbus.style.backgroundColor = "red";
    ram[3] = a;
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}
function LDA() {
    AllGreen();
    mainbus.style.backgroundColor = "red";
    a1bus.style.backgroundColor = "red";
    aMainbus.style.backgroundColor = "red";
    a = ram[3];
    display();
    setTimeout(function () {
        alert("Execution Done!");
        Reset();
    }, 2000);
}
let currinstruction = "";
input.addEventListener("keydown", function (e) {
    if (e.key == "Enter") {
        let opcodeblock = document.querySelector(".opcode");
        currinstruction = input.value;
        currinstruction = currinstruction.toUpperCase();
        let instype = currinstruction.split(" ");
        console.log(opcode[instype]);
        Reset();
        if (opcode[instype[0]] != undefined) {
            ram[0] = opcode[instype[0]];
            if (instype[0] == "STA" || instype[0] == "LDA") {
                let addr = instype[1];
                let higher = addr.substring(0, 3);
                let lower = addr.substring(3);
                ram[2] = higher;
                ram[1] = lower;
                if (instype[0] == "LDA") {
                    ram[3] = "84";
                }
            }
            display();
        } else alert("INVALID INPUT");
    }
});

function Reset() {
    pc = 0;
    a = 21;
    b = 42;
    tmp = 0;
    c = 5;
    ir = 0;
    ram = ["", "", "", ""];
    mar = 0;
    counter = 0;
    display();
    let romidx = eachromarr[0];
    romidx.scrollIntoView({
        behavior: "smooth",
    });
    AllGreen();
    input.value = "";
    for (let i = 0; i < 64; i++) {
        eachromarr[i].style.backgroundColor = "";
    }
}
function display() {
    bblock.innerText = `${b}`;
    irblock.innerText = `${ir}`;
    marblock.innerText = `${mar}`;
    pcblock.innerText = `${pc}`;
    ablock.innerText = `${a}`;
    cblock.innerText = `${c}`;
    tmpblock.innerText = `${tmp}`;
    time.innerText = `${counter}`;

    for (let i = 1; i < 5; i++) {
        ramblock[i].innerText = `${ram[i - 1]}`;
    }
}

//Counter Wala Kaam

count.addEventListener("click", function () {
    counter++;
    time.innerText = `${counter}`;
    if (counter == 1) {
        eachromarr[0].style.backgroundColor = "red";
        fetch1();
    } else if (counter == 2) {
        eachromarr[0].style.backgroundColor = "";
        eachromarr[1].style.backgroundColor = "red";
        fetch2();
    } else if (counter == 3) {
        let instype = currinstruction.split(" ");
        mainbus.style.backgroundColor = "green";
        irbus.style.backgroundColor = "green";
        if (instype[0] == "MOV") {
            let romidx = eachromarr[11];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[11].style.backgroundColor = "red";
            MOV();
        } else if (instype[0] == "XCHG") {
            let romidx = eachromarr[15];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[15].style.backgroundColor = "red";
            XCHG1();
        } else if (instype[0] == "MUL") {
            let romidx = eachromarr[20];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[20].style.backgroundColor = "red";
            MUL1();
        } else if (instype[0] == "STA") {
            let romidx = eachromarr[25];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[25].style.backgroundColor = "red";
            fetch1();
        } else if (instype[0] == "LDA") {
            let romidx = eachromarr[30];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[30].style.backgroundColor = "red";
            fetch1();
        } else {
            let romidx = eachromarr[35];
            romidx.scrollIntoView({
                behavior: "smooth",
            });
            eachromarr[1].style.backgroundColor = "";
            eachromarr[35].style.backgroundColor = "red";
            ADALL1();
        }
    } else if (counter == 4) {
        let instype = currinstruction.split(" ");
        if (instype[0] == "XCHG") {
            eachromarr[15].style.backgroundColor = "";
            eachromarr[16].style.backgroundColor = "red";
            XCHG2();
        } else if (instype[0] == "MUL") {
            eachromarr[20].style.backgroundColor = "";
            eachromarr[21].style.backgroundColor = "red";
            MUL2();
        } else if (instype[0] == "ADALL") {
            eachromarr[35].style.backgroundColor = "";
            eachromarr[36].style.backgroundColor = "red";
            ADALL2();
        } else if (instype[0] == "STA") {
            eachromarr[25].style.backgroundColor = "";
            eachromarr[26].style.backgroundColor = "red";
            STA2();
        } else if (instype[0] == "LDA") {
            eachromarr[30].style.backgroundColor = "";
            eachromarr[31].style.backgroundColor = "red";
            STA2();
        }
    } else if (counter == 5) {
        let instype = currinstruction.split(" ");
        if (instype[0] == "XCHG") {
            eachromarr[16].style.backgroundColor = "";
            eachromarr[17].style.backgroundColor = "red";
            XCHG3();
        } else if (instype[0] == "STA") {
            eachromarr[26].style.backgroundColor = "";
            eachromarr[25].style.backgroundColor = "red";
            fetch1();
        } else if (instype[0] == "LDA") {
            eachromarr[31].style.backgroundColor = "";
            eachromarr[30].style.backgroundColor = "red";
            fetch1();
        }
    } else if (counter == 6) {
        let instype = currinstruction.split(" ");
        if (instype[0] == "STA") {
            eachromarr[25].style.backgroundColor = "";
            eachromarr[26].style.backgroundColor = "red";
            STA3();
        } else {
            eachromarr[30].style.backgroundColor = "";
            eachromarr[31].style.backgroundColor = "red";
            STA3();
        }
    } else if (counter == 7) {
        let instype = currinstruction.split(" ");
        if (instype[0] == "STA") {
            eachromarr[26].style.backgroundColor = "";
            eachromarr[27].style.backgroundColor = "red";
            STA4();
        } else {
            eachromarr[31].style.backgroundColor = "";
            eachromarr[32].style.backgroundColor = "red";
            STA4();
        }
    } else {
        let instype = currinstruction.split(" ");
        if (instype[0] == "STA") {
            eachromarr[27].style.backgroundColor = "";
            eachromarr[28].style.backgroundColor = "red";
            STA5();
        } else {
            eachromarr[32].style.backgroundColor = "";
            eachromarr[33].style.backgroundColor = "red";
            LDA();
        }
    }
});
function AllGreen() {
    aMainbus.style.backgroundColor = "green";
    a1bus.style.backgroundColor = "green";
    tempbus.style.backgroundColor = "green";
    mainbus.style.backgroundColor = "green";
    pcbus.style.backgroundColor = "green";
    marbus.style.backgroundColor = "green";
    irbus.style.backgroundColor = "green";
    pctempbus.style.backgroundColor = "green";
    bbus.style.backgroundColor = "green";
    cbus.style.backgroundColor = "green";
    alubus.style.backgroundColor = "green";
    abbus.style.backgroundColor = "green";
}

//   let romidx=document.querySelectorAll(".row-64")[63];
//   romidx.scrollIntoView({
//     behavior: 'smooth'
//   });
