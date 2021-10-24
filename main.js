// get left button
var button=document.getElementsByClassName('btn');
// get right button
var longerButton=document.getElementsByClassName('longerBtn');
// get bottom button
var shorterButton=document.getElementsByClassName('shorterBtn');

//get left button content container
var leftButtonContainer=document.getElementsByClassName('leftButtonContent')[0];
//get each left button container
var buttonContainer=document.getElementsByClassName('buttonC');

//get right button content container
var rightButtonContainer=document.getElementsByClassName('rightButtonContent')[0];
//get each left button container
var longerButtonContainer=document.getElementsByClassName('longerButtonC');

//get bottom button content container
var bottomButtonContainer=document.getElementsByClassName('bottomSectionContent')[0];
//get each left button container
var shorterButtonContainer=document.getElementsByClassName("shorterContent");

//get topic button element
var topicButton=document.getElementsByClassName('topicButton');
//get topic each button container
var topicButtonC=document.getElementsByClassName('topicButtonC');
// get topic container
var topicContainer =document.getElementsByClassName('topicContainer')[0];

//display left button  content

function leftButtonDisplay(item,index){

    item.addEventListener('click',()=>{
        rightButtonContainer.style.display="none";
        bottomButtonContainer.style.display="none";
        for (let i = 0; i < buttonContainer.length; i++) {
            if (index==i) {
                buttonContainer[i].style.display="block"
                leftButtonContainer.style.display="block"
            }
            else{
                buttonContainer[i].style.display="none"
            }
        }
    })
}
Array.from(button).forEach(leftButtonDisplay);

//display right button  content

function rightButtonDisplay(item,index){

    item.addEventListener('click',()=>{
        leftButtonContainer.style.display="none";
        bottomButtonContainer.style.display="none";
        for (let i = 0; i < longerButtonContainer.length; i++) {
            if (index==i) {
                longerButtonContainer[i].style.display="block"
                rightButtonContainer.style.display="block"
            }
            else{
                longerButtonContainer[i].style.display="none"
            }
        }
    })
}
Array.from(longerButton).forEach(rightButtonDisplay);

//display bottom button  content

function bottomButtonDisplay(item,index){

    item.addEventListener('click',()=>{
        leftButtonContainer.style.display="none";
        rightButtonContainer.style.display="none";
        for (let i = 0; i < shorterButtonContainer.length; i++) {
            if (index==i) {
                shorterButtonContainer[i].style.display="block"
                bottomButtonContainer.style.display="block"
            }
            else{
                shorterButtonContainer[i].style.display="none"
            }
        }
    })
}
Array.from(shorterButton).forEach(bottomButtonDisplay);


// display topic content
function topicButtonDisplay(item,index){
    item.addEventListener('click',()=>{
        for (let i = 0; i < topicButtonC.length; i++) {
            if (index==i) {
                topicButtonC[i].style.display="block";
            }
            else{
                topicButtonC[i].style.display="none";
            }
        }
    })
}
Array.from(topicButton).forEach(topicButtonDisplay)
