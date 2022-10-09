let AddHscore=document.getElementById("homescore")
let AddGscore=document.getElementById("guestscore")
let Add=0
let AddG=0
function Haddone()
{
    Add +=1
    AddHscore.innerText=Add
}
function Haddtwo()
{
    Add +=2
    AddHscore.innerText=Add
}
function Haddthree()
{
    Add +=3
    AddHscore.innerText=Add
}
function Hreset(){
    Add=0
    AddHscore.innerText=Add
}

function Gaddone()
{
    AddG +=1
    AddGscore.innerText=AddG
}
function Gaddtwo()
{
    AddG +=2
    AddGscore.innerText=AddG
}
function Gaddthree()
{
    AddG +=3
    AddGscore.innerText=AddG
}
function Greset(){
    AddG=0
    AddGscore.innerText=AddG
}