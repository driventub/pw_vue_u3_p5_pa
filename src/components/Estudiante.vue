<template>
    <div class="container">
        <div class="formEstudiantes"></div>
        <h1>Consulta por Estudiantes</h1>
        <input v-model="id" type="number" />
        <label for="">{{ nombre }}</label>
        <label for="">{{ apellido }}</label>
        <button @click="consultarPorId">Consultar</button>

        <input v-model="apellido" type="text" />
        <button @click="insertar">Insertar</button>


    </div>
</template>

<script>
import { consultarPorIdFachada, insertarFachada } from "../helpers/clienteEstudiantes"


export default {
    data() {
        return {
            id: null,
            nombre: "Nombre",
            apellido: "Apellido"

        }
    },
    methods: {
        async consultarPorId() {
            const data = await consultarPorIdFachada(this.id);
            const { nombre, apellido } = data
            console.log(data);
            this.nombre = nombre;
            this.apellido = apellido;




        },

        async insertar() {
            console.log("Insertando....");
            const datos = {

                "nombre": "Vue",
                "apellido": this.apellido,
                "genero": "M",
                "fechaNacimiento": "1999-01-01T00:00:00",
                "semestre": "tercero",
                "afiliadoSeguro": false,
                "gratuidad": true,
                "nivelEconomico": "alto",
                "numTelefono": "09872362919",
                "domicilio": "Quito"
            }

            await insertarFachada(datos);

            console.log("Insertado!")
        }
    },
}   
</script>

<style scoped>
.container {
    display: grid;
    justify-content: center;
    align-items: center;
}
</style>