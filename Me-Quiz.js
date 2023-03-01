var readlineSync=require('readline-sync');
var name = readlineSync.question("Sir, your name please ? ");
var feeling = readlineSync.question("How you feeling sir ? ");
var konw = readlineSync.question("let's begin the quiz then");
var questions=[
    {
        ques:"what's my name ? ",
        ans:"uma shankar"
    },
    {
        ques:"where do i live ? ",
        ans:"palwal"
    },
    {
        ques:"what is my age ? ",
        ans:"22"
    },
    {
        ques:"what is my graduation discipline ? ",
        ans:"electrical"
    },
    
];
var score =0;
for(var i=0;i<questions.length;i++){
    var answer = readlineSync.question(questions[i].ques);
    if(answer.toLowerCase()==questions[i].ans.toLowerCase()){
        score=score+1;
    }
    else{
        score=score-1;
    }
}
var jj = readlineSync.question("Great, it was an amazing session\n Press 'Y' to know yr score");
if(jj=="y"){
    console.log(name,score)
}
else{
    console.log("%d keep it up :-()",score);
}