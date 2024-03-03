const typing_ground=document.querySelector('#textarea');
const btn=document.querySelector('#btn');
const score1=document.querySelector('#score1');
const score2=document.querySelector('#score2');
const score3=document.querySelector('#score3');
const show_sentence=document.querySelector('#showSentence');
let startTime,endTime,totalTimeTaken;
const sentence=["The quick brown fox jumps over the lazy dog."," Please take your dog, Cali, out for a walk – he really needs some exercise!","What a beautiful day it is on the beach, here in beautiful and sunny Hawaii."," Rex Quinfrey, a renowned scientist, created plans for an invisibility machine.","  Do you know why all those chemicals are so hazardous to the environment?","You never did tell me how many copper pennies where in that jar; how come?","Max Joykner sneakily drove his car around every corner looking for his dog.","  The two boys collected twigs outside, for over an hour, in the freezing cold!"," When do you think they will get back from their adventure in Cairo, Egypt?","Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.","Trixie and Veronica, our two cats, just love to play with their pink ball of yarn.","We climbed to the top of the mountain in just under two hours; isn’t that great?","  Hector quizzed Mr. Vexife for two hours, but he was unable to get any information.","I have three things to do today: wash my car, call my mother, and feed my dog.","Xavier Puvre counted eighty large boxes and sixteen small boxes stacked outside."," The Reckson family decided to go to an amusement park on Wednesday."," The Reckson family decided to go to an amusement park on Wednesday.","That herd of bison seems to be moving quickly; does that seem normal to you?"," All the grandfather clocks in that store were set at exactly 3 o’clock."," There are so many places to go in Europe for a vacation--Paris, Rome, Prague, etc."," Those diamonds and rubies will make a beautiful piece of jewelry.","The steamboats seemed to float down the Mississippi River at a snail’s pace."," In order to keep up at that pace, Zack Squeve would have to work all night."
]
const startTyping = () =>{
    let randomNumber=Math.floor(Math.random()*sentence.length);
    console.log(randomNumber);
    show_sentence.innerHTML=sentence[randomNumber];
    let date=new Date();
    startTime=date.getTime();
    btn.innerText="DONE";
}
const endTyping = () => {
    btn.innerText="START";
    let date=new Date();
    endTime=date.getTime();
    totalTimeTaken=(endTime-startTime)/1000;// convert from millisecond into seconds

    calculateSpeed(totalTimeTaken);
    show_sentence.innerHTML="";
    typing_ground.value="";
}
const calculateSpeed = (time_taken) => {
    let totalWords=typing_ground.value;
    let actualWords=totalWords.split("").length;
    if(actualWords!==0){
        let speed=(actualWords/time_taken)*60;
        speed=Math.round(speed);
       // score.innerHTML=`Your Typing speed is ${speed}words per minutes & you wrote ${actualWords} words & time taken ${time_taken} seconds`;
        score1.innerHTML=`Typing Speed:-${speed}words per minutes.`;
        score2.innerHTML=`You Wrote:-${actualWords}words.`;
        score3.innerHTML=`Time Taken:-${time_taken}seconds.`;
    }
}

btn.addEventListener('click', () => {
    switch (btn.innerText.toUpperCase()) {
        case "START":
            typing_ground.removeAttribute('disabled');
            score1.innerHTML="";
            score2.innerHTML="";
            score3.innerHTML="";
            startTyping();
            break;
            case "DONE":
                typing_ground.setAttribute('disabled',true);
                endTyping();
                break;
    }
})