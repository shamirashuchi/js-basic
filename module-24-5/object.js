const student = {
    name: 'Sakib Khan',
    id:121,
    address:'movie cinema',
    isSingle:true,
    friends: ['Apu','Raaz','Salman','aamir'],
    movies:[{name:'No.1', year: 2015},{name: 'King Khan',year:2018}],
    act: function(){
        console.log('acting like Sakib Khan')
    },
    car:{
        brand:'tesla',
        price: 50000000,
        made:2025,
    }
}
console.log(student);
console.log(student.car);
console.log(student.act);
student.act();