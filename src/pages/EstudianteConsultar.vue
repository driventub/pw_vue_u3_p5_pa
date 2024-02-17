<template>
    <div class="container">
        <div class="form">
            <h1>Estudiante Consultar</h1>
            <input v-model="id" type="number" />
            <button @click="consultar">Consultar Por id</button>
        </div>
    </div>

    <div class="container">
        <div class="form">
            <label for="nombre">Nombre</label>
        <input id="nombre" v-model="nombre" type="text" />
        <label for="apellido">Apellido</label>
        <input id="apellido" v-model="apellido" type="text" />
        <label for="genero">Genero</label>
        <input id="genero" v-model="genero" type="text" />
        </div>
    </div>
</template>

<script>
import { consultarPorIdFachada } from '@/helpers/clienteEstudiantes';

export default {
    data() {
        return {
            id: null,
            nombre: null,
            apellido: null,
            genero: null,
        }
    },

    methods: {
        async consultar() {
            const data = await consultarPorIdFachada(this.id);
            const { nombre, apellido, genero } = data
            console.log(data);
            this.nombre = nombre;
            this.apellido = apellido;
            this.genero = genero;

        }
    },
}
</script>

<style scoped></style>