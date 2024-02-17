<template>
    <div class="container">
        <div class="form">
         <label for="nombre">Nombre</label>
            <input id="nombre" v-model="nombre" type="text" />
            <label for="apellido">Apellido</label>
            <input id="apellido" v-model="apellido" type="text" />
            <label for="genero">Genero</label>
            <input id="genero" v-model="genero" type="text" />
            <label for="fecha">Fecha de Nacimiento</label>
            <input id="fecha" v-model="fechaNacimiento" type="datetime-local" />
            <label for="tel">Numero de Telefono</label>
            <input id="tel" v-model="telefono" type="text" />

            <button @click="insertar">Insertar</button>
        </div>




    </div>
</template>

<script>
import { insertarFachada } from '@/helpers/clienteEstudiantes';



export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null, 
            fechaNacimiento: null,
            numTelefono: null,
        }
    },
    methods: {
        async insertar() {
            console.log("Insertando....");
            const datos = {

                "nombre": this.nombre,
                "apellido": this.apellido,
                "genero": this.genero,
                "fechaNacimiento": this.fechaNacimiento,
                "semestre": "tercero",
                "afiliadoSeguro": false,
                "gratuidad": true,
                "nivelEconomico": "alto",
                "numTelefono": this.telefono,
                "domicilio": "Quito"
            }

            await insertarFachada(datos);

            console.log("Insertado!")
        },
    },
}
</script>

<style scoped></style>