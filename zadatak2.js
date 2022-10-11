
let x;

let c =   (v) => 
{
    if (v>=100 && v<=150000)
    {
        console.log(v + " -> " + v + " je u intervalu [100,150000]")
    }
    else console.log(v + " -> " + v + " nije u intervalu [100,150000]")
} ; 
console.log(c(5000))