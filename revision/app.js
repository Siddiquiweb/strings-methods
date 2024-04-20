///let game//
// let gamNum=72
// let userNum=prompt(" please enter the crect number");
// while(userNum!= gamNum){
//     userNum=prompt("please enter the crecet number ")
// };
// alert("corect")


///template leaterails //

let specialstring = `this is a temlapete string  ${2+2+1+4+233}`;
console.log(specialstring);


///back sleshes //

console.log("hi\nabdulrehman");


///TAB SLASH// gapp on her line

console.log(" HI\tsiddiqui")


///string method //
//upercase words all in strings//
console.log("Hello world".toUpperCase());


// lowercaseword all words are small // 

console.log("lower case ".toLocaleLowerCase());


///str.trim()remove space remove for both side and starting//
let str1 = `how are you`;
console.log(str1.trim());

/// slice methord how to work slice methods it take two  parameter first one in start of slisicing and scond on 
// strp (keep)//
let str = "abdulrehman siddiqui";
console.log(str.slice(0, 11));


//// string concat  example are two are connect to the string concat verbial are using incae//

let str3 = "java";
let str4 = "Script";

let res = str3.concat(str4);
console.log(res);


//// string example are very easy how to work so let see one by one //

let str5 = "ht";
let str6 = "ml";

let ress = str5 + str6;
console.log(ress);


////str replace serching the word and replace it whith another words  //
//serchval//

let str7 = "hello ";
console.log(str7.replace("lo", "p"));



//str charAt (index) this founction is used to get a cracter from that index //

let str8 = "abcdefg"
console.log(str8.charAt(2));



//// prompt the user to enter the full name generate a username form them based on the input start username  with @ followed by their full name and ending whith full name langht //




let fullName = prompt("please enter your full name");
let userName = "@" + fullName + fullName.length;
console.log(userName);