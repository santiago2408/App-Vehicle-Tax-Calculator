// Clase base para la calculadora de impuestos
class CalculadoraTax {
    
    calcularImpuesto(value) {
        throw new Error('Esta clase es abstracta, y no debe ser usada directamente.');
    }
}

// Clases derivadas para cada tipo de vehículo
class CalculadoraVehiculoHidrogeno extends CalculadoraTax {
    calcularImpuesto(value) {
        return value * 0.025;
    }
}

class CalculadoraVehiculoElectrico extends CalculadoraTax {
    calcularImpuesto(value) {
        return value * 0.01;
    }
}

class CalculadoraVehiculoGasolina extends CalculadoraTax {
    calcularImpuesto(value) {
        return value * 0.06;
    }
}

class CalculadoraVehiculoDiesel extends CalculadoraTax {
    calcularImpuesto(value) {
        return value * 0.04;
    }
}

function crearCalculadora(tipo) {
    switch (tipo) {
        case 'hidrogeno':
            return new CalculadoraVehiculoHidrogeno();
        case 'electrico':
            return new CalculadoraVehiculoElectrico();
        case 'gasolina':
            return new CalculadoraVehiculoGasolina();
        case 'diesel':
            return new CalculadoraVehiculoDiesel();
        default:
            throw new Error('Tipo de vehículo no válido');
    }
}
// Se activa cuando se presiona submit
function calculadora() {


    //event.preventDefault(); // Para no refrescar la pagina y que no desaparezca
    tipoVehiculo = document.getElementById('tipoVehiculo').value;
    costoVehiculo = parseFloat(document.getElementById('costoVehiculo').value);

    calculadora = crearCalculadora(tipoVehiculo);

    impuesto = calculadora.calcularImpuesto(costoVehiculo);

    document.getElementById('result').textContent = `El impuesto anual para el año 2024 es de: ${impuesto.toFixed(2)} COP.`;
}

