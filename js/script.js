function calcular() {
    var gramaje = document.getElementById("gramaje").value;
    var ancho = document.getElementById("ancho").value;
    var largo = document.getElementById("largo").value;
    var pickup = document.getElementById("pickUp").value;

    var peso = (gramaje * ancho * largo) / 1000;
    var volumenBano = (peso / 100) * pickup;
    var rendimiento = 1000/ (ancho * gramaje);

    document.getElementById("peso").value = peso.toFixed(2);
    document.getElementById("rendimiento").value = rendimiento.toFixed(2);
    document.getElementById("volumenBano").value = volumenBano.toFixed(2);

    
    
    const numeroProductos = document.getElementById("numeroProductos").value;

    var costoTotalReceta = 0;

    for (var i = 1; i <= numeroProductos; i++) {
        var concentracion = document.getElementById("concentracionProducto" + i).value;

        var pesoProducto = volumenBano * concentracion;

        document.getElementById("pesoProducto" + i).value = pesoProducto.toFixed(2);;

        var costoProducto = document.getElementById("costoProducto" + i).value;

        var costoProducto = document.getElementById("costoProducto" + i).value;
        var costoTotalProducto = pesoProducto * costoProducto;

        document.getElementById("costoTotalProducto" + i).value = costoTotalProducto.toFixed(2);

        costoTotalReceta = costoTotalReceta + costoTotalProducto;

    }

    var costoRecetaPorKilo = costoTotalReceta / peso;

    document.getElementById("costoTotal").value = costoTotalReceta.toFixed(2);
    document.getElementById("costoTotalPorKilo").value = costoRecetaPorKilo.toFixed(2);

}

function crearCamposProductos() {
    const numeroProductos = document.getElementById("numeroProductos").value;

    // Obtiene el contenedor del formulario
    var contenedorProductos = document.getElementById("productosReceta");

    // Limpia el contenedor antes de agregar nuevos elementos
    contenedorProductos.innerHTML = "";

    // Genera dinamicamente el formulario segun el numero seleccionado
    for (var i = 1; i <= numeroProductos; i++) {
        var contenedorProductoIndividual = document.createElement("div");
        contenedorProductoIndividual.id = "infoProducto" + i;

        // Combobox de producto
        var comboProducto = document.createElement("select");
        comboProducto.id="producto"+i;
        comboProducto.classList.add("combo-producto");

        var opcion1 = document.createElement("option");
        opcion1.value = "productoA";
        opcion1.text = "Producto A";

        var opcion2 = document.createElement("option");
        opcion2.value = "productoB";
        opcion2.text = "Producto B";

        var opcion3 = document.createElement("option");
        opcion3.value = "productoC";
        opcion3.text = "Producto C";


        var opcion4 = document.createElement("option");
        opcion4.value = "productoD";
        opcion4.text = "Producto D";

        var opcion5 = document.createElement("option");
        opcion5.value = "productoE";
        opcion5.text = "Producto E";

        comboProducto.add(opcion1);
        comboProducto.add(opcion2);
        comboProducto.add(opcion3);
        comboProducto.add(opcion4);
        comboProducto.add(opcion5);

        contenedorProductoIndividual.appendChild(comboProducto);

        // Concentracion
        var labelConcentracion = document.createElement("label");
        labelConcentracion.textContent = "Concetración (g/L):";
        labelConcentracion.htmlFor = "concentracionProducto" + i;

        var concetracionInput = document.createElement("input");
        concetracionInput.classList.add("caja");
        concetracionInput.type = "text";
        concetracionInput.placeholder = "Concentración";
        concetracionInput.id = "concentracionProducto" + i;

        contenedorProductoIndividual.appendChild(labelConcentracion);
        contenedorProductoIndividual.appendChild(concetracionInput);

        // Peso producto
        var labelPesoProducto = document.createElement("label");
        labelPesoProducto.textContent = "Peso (kg):";
        labelPesoProducto.htmlFor = "pesoProducto" + i;

        var pesoProductoInput = document.createElement("input");
        pesoProductoInput.classList.add("caja");
        pesoProductoInput.type = "text";
        pesoProductoInput.placeholder = "Peso";
        pesoProductoInput.id = "pesoProducto" + i;
        pesoProductoInput.disabled = true;

        contenedorProductoIndividual.appendChild(labelPesoProducto);
        contenedorProductoIndividual.appendChild(pesoProductoInput);

        // Costo producto
        var labelCostoProducto = document.createElement("label");
        labelCostoProducto.textContent = "Costo producto (USD/kg):";
        labelCostoProducto.htmlFor = "costoProducto" + i;

        var costoProductoInput = document.createElement("input");
        costoProductoInput.classList.add("caja");
        costoProductoInput.type = "text";
        costoProductoInput.placeholder = "Costo producto";
        costoProductoInput.id = "costoProducto" + i;
        costoProductoInput.disabled = true;

        contenedorProductoIndividual.appendChild(labelCostoProducto);
        contenedorProductoIndividual.appendChild(costoProductoInput);

        // Costo total
        var labelCostoTotalProducto = document.createElement("label");
        labelCostoTotalProducto.textContent = "Costo total (USD):";
        labelCostoTotalProducto.htmlFor = "costoTotalProducto" + i;

        var costoTotalProducto = document.createElement("input");
        costoTotalProducto.classList.add("caja");
        costoTotalProducto.type = "text";
        costoTotalProducto.placeholder = "Costo total";
        costoTotalProducto.id = "costoTotalProducto" + i;
        costoTotalProducto.disabled = true;

        contenedorProductoIndividual.appendChild(labelCostoTotalProducto);
        contenedorProductoIndividual.appendChild(costoTotalProducto);

        // Agrega el contenedor del producto al contenedor del formulario
        contenedorProductos.appendChild(contenedorProductoIndividual);

        // Obtener el elemento select por su ID
        document.getElementById("producto"+i).addEventListener("change", function (event) {
            
            var costosProductos = {
                productoA: 2.35,
                productoB: 1.65,
                productoC: 0.89,
                productoD: 1.37,
                productoE: 1.99
            };

            // 
            var comboSeleccionado = event.target.id;
            var indice = comboSeleccionado.charAt(comboSeleccionado.length - 1);

            // Acciones que deseas realizar cuando cambia la selección
            var opcionSeleccionada = document.getElementById("producto" + indice).value;
            var costoProducto = costosProductos[opcionSeleccionada];
            document.getElementById("costoProducto" + indice).value = costoProducto;
        });
    }
}