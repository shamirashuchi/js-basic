function average(a,n){
        var sum=0;
        for(var i=0; i<n; i++){
            
            sum = sum + a[i];
            
        }
        sum=sum/n;
        return sum;
    }
    var arr =[10, 2,10];
    var n = 3;
    var sum1 = average(arr,n);
    console.log(sum1);