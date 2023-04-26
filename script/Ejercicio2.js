let edad;

edad = Number(prompt('ingrese la edad'))

if ( edad < 10) {
    alert('Es un niño')
}else if ( edad >=10 && edad <15 ) {
    alert ('Es preadolecente')
    }else if ( edad >=15 && edad <18) {
        alert('Es un adolecente')
    }else if ( edad >=18 && edad <50) {
        alert('Es un adulto')
    }else if (edad >= 50) {
        alert('Es un adulto mayor')
    }