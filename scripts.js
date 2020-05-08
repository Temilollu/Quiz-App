var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var correctOpt = document.querySelector('.compat')
console.log(correctOpt)

var app={
        questions:[
            {
                q:'What is the Capital of Christmas Island ?',
                options: ['Flying fish cove','Danube', 'Congo', 'oceania'],
                answer:1
            },
            {
                q:'What is the name of the Deadly virus that caused the recent pandemic ?',
                options: ['Antrax', 'Killvi', 'Corona', 'Wuhanvi'],
                answer:3
            },
            {
                q: 'What continent can Afghanistan be found ?',
                options : ['Asia','Africa', 'North America', 'South America'],
                answer : 1
            },
            {
                q: 'When last did Gulder Ultimate Search hold?',
                options : [2005, 2010, 2014, 2016], 
                answer : 3
            },
            {
                q: 'Who is the funniest Comedian in Africa?',
                options : ['Taooma', 'Mr Macaroni', 'Lasisi Elenu', 'Kenny Blaq'],
                answer : 2
            }           
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Completed!" 
                correctOpt.style.display = 'block'
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.classList.add("correct");
                this.scoreCard();
            }
            else{
                ele.classList.add("wrong");
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=  this.score + " / " +  this.questions.length 
            // scoreCard.innerHTML =  this.questions[this.index].answer
        }
        
}



window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}



