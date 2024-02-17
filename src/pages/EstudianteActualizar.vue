<template>
    <div class="container">
        <div class="form">
            <h1>Pagina Actualizar</h1>
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
            <button @click="actualizar">Actualizar</button>
        </div>

    </div>
</template>

<script>
import { actualizarFachada } from '@/helpers/clienteEstudiantes';

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
    },
}
</script>

<style scoped></style>