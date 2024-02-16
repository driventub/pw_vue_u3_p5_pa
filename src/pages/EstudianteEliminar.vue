<template>
    <div class="container">
        <div class="form">
            <h1>Pagina Eliminar</h1>
            <input v-model="id" type="number" />
            <button @click="consultarPorId">Eliminar</button>
        </div>

    </div>
</template>

<script>
import { eliminarFachada} from "../helpers/clienteEstudiantes"

export default {
    data() {
        return {
            id: null,
        }
    },
    methods: {
        async eliminar(){
            await eliminarFachada(this.id);
        }
    },
}
</script>

<style scoped></style>