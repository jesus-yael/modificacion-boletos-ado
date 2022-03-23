    function comprar() {
        numeroBoletos = prompt('¿Cuántos boletos quieres?');
        precio = numeroBoletos * 10;
        confirmacion = confirm('El costo sería de ' + precio + '. ' + '¿Desdeas confirmar la compra?');

        var array = new Uint32Array(1);
        self.crypto.getRandomValues(array);

        console.log("Your lucky numbers:");
        for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
        }

        idTransaccion = array;

        // Data Layer

        var urlActual = window.location.pathname;
        if(confirmacion == true){
            
            alert('Tu compra fue exitosa. Tu número de operación es: ' + array + '. El costo fue de: ' + precio + 'MXN. y Tu total de boletos fue de: ' + numeroBoletos);
            
            window.dataLayer.push({
                'event':'Compra',
                'ecommerce': {
                    'purchase': {
                    'actionField': {
                        'id': idTransaccion,
                        'affiliation':'ADO Internet',
                        'revenue': lprecio,
                    },
                    'products': [{
                        'id': 'Producto 1',
                        'name': 'Boleto Genérico',
                        'price': '10',
                        'brand': 'Boletos ADO',
                        'category': 'Largo Recorrido',
                        "quantity": numeroBoletos
                    }]
                    }
                }
                });
        }
    
        
    }

    function modificar() {
        idTransaccionCancel = prompt('¿Cuál es tu ID de transacción?');
        boletosComprados = prompt('¿Cuántos boletos compraste?')
        numeroBoletosCancel = prompt('¿Cuántos boletos quieres cancelar?');
        confirmarCancel = confirm('Vas a cancelar ' + numeroBoletosCancel + ' boleos. ¿Deseas confirmar?')
        precioCancel = numeroBoletosCancel * 10;

        if(confirmarCancel == true){
            alert('Se cancelaron ' + numeroBoletosCancel + ' boletos.')
            window.dataLayer.push({
                'event':'Cancelación',
                'ecommerce': {
                    'purchase': {
                    'actionField': {
                        'id': idTransaccionCancel,
                        'affiliation':'ADO Internet',
                        'revenue': '-' + precioCancel,
                    },
                    'products': [{
                        'id': 'Producto 1',
                        'name': 'Boleto Genérico',
                        'price': '10',
                        'brand': 'Boletos ADO',
                        'category': 'Largo Recorrido',
                        "quantity": '-' + numeroBoletosCancel
                    }]
                    }
                }
                });
        }
    }