function rollnum(num,time,nextroll){
    setTimeout(
        ()=> {
            console.log("roll.no. is ",num);
            if(nextroll) nextroll();
        
        },time)
    
}
rollnum(1,1000,()=>{
    rollnum(2,3000,()=>{
        rollnum(3,4000,()=>{
            rollnum(4,5000);
        });
    });
});