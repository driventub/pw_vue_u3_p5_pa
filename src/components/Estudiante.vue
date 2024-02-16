<template>
    <div class="container">
        <div class="formInsertar">
            <h1>Consulta por Estudiantes</h1>
            <input v-model="id" type="number" />
            <button @click="consultarPorId">Consultar</button>

        </div>
    </div>

    <div class="container">



        <div class="formInsertar">
            <h1>Inserción de Estudiantes</h1>

            <label for="id">Id</label>
            <input id="id" v-model="id" type="text" />
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
            <button @click="actualizar">Actualizar</button>
            <button @click="eliminar">Eliminar</button>

        </div>




    </div>
</template>

<script>
import { consultarPorIdFachada, insertarFachada, actualizarFachada, eliminarFachada, consultarTodosFachada } from "../helpers/clienteEstudiantes"


export default {
    data() {
        return {
            id: null,
            nombre: "",
            apellido: "",
            genero: "",
            fechaNacimiento: "",
            telefono: "",

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

        async actualizar() {
            const datos = {
                id: this.id,
                nombre: this.nombre,
                apellido: this.apellido,
                genero: this.genero,
                fechaNacimiento: this.fechaNacimiento,
                semestre: "tercero",
                afiliadoSeguro: false,
                gratuidad: true,
                nivelEconomico: "alto",
                numTelefono: this.telefono,
                domicilio: "Quito"
            }
            console.log(datos);

            await actualizarFachada(this.id, datos);
        },

        async eliminar(){
            eliminarFachada(this.id);
        }
    },
}   
</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.formInsertar {
    margin-top: 2rem;
    display: grid;
    padding: 1rem;
    background-color: #dda15e;
    border-radius: 2rem;

}

label {
    text-align: left;
}

input {
    background-color: #fefae0;
}
</style>