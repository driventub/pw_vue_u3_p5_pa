import { createRouter, createWebHashHistory } from "vue-router";

import EstudiantesActualizar from "../pages/EstudianteActualizar.vue"
import EstudiantesGuardar from "../pages/EstudianteGuardar.vue"
import EstudiantesEliminar from "../pages/EstudianteEliminar.vue"
import EstudiantesConsultar from "../pages/EstudianteConsultar.vue"

const routes = [
    {
        path: '/actualizar',
        component: EstudiantesActualizar
    },
    {
        path: '/guardar',
        component: EstudiantesGuardar
    },
    {
        path: '/consultar',
        component: EstudiantesConsultar
    },
    {
        path: '/eliminar',
        component: EstudiantesEliminar
    },
]


const router = createRouter({history: createWebHashHistory(), routes})

export default router
