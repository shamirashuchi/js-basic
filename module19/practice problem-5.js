function traffic(singnal){
    if(singnal == 'red'){
        console.log('danger');
    }
    else if(singnal == 'yellow'){
        console.log('stop');
    }
    else{
        console.log('green');
    }
}
let trafficSignal = traffic('yellow');