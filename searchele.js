//search the element in array and return the index of the element
let a=[90,28,37,46]
let search = function (k) { // k is the value to be searched
    for(let i = 0;i<a.length;i++){
        if(k == a[i])   // if search ele is equal to the element in the array
        {
            console.log(i)//index is printed
            return      
        }
    }
    console.log("not found")
    
} 
search(37)//function call
search(92)