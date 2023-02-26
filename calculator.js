let see=document.getElementById('see');
let keys=Array.from(document.getElementsByClassName('button'));
keys.map(button => {
    button.addEventListener('click',(e) => {
        switch(e.target.innerText){
            case 'C':
                see.innerText ='';
                 break;
            case '←':
                if(see.innerText){
                see.innerText = see.innerText.slice(0,-1);
                }
                break;
            case'=':
            try{
                see.innerText = eval(see.innerText);
            }
            catch{
                see.innerText = 'ERROR!';
            }
                break;
            default:
                see.innerText += e.target.innerText;
        }
    });
});
