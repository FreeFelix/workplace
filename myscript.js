const counter=document.querySelector('#counter')
const btns =document.querySelectorAll('.btn')
 //initialise the counter variable
 let count=0
 btns.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        const styles=e.currentTarget.classlist
        if(styles.contains('increase')){
           count++ 
        }
        counter.textContent = count
    })
 })