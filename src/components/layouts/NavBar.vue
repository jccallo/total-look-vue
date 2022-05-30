<template>
    <div class="container-fluid mb-4" style="background-color: #242939;">
        <div class="container">

        <!-- navbar -->
        <nav class="navbar navbar-expand-sm navbar-dark py-3 px-0" style="background-color: #242939;">

            <!-- Brand -->
            <a class="navbar-brand" href="index.html">
                <h5>Total<span class="text-success"><i class="bi bi-emoji-heart-eyes-fill"></i>LOOK</span></h5>
            </a>

            <!-- Toggler/collapsibe Button -->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <!-- Navbar links -->
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                    <router-link :to="{ name: 'escritorio-component'}" class="nav-link mr-4">
                        <i class="bi bi-house-fill"></i> Escritorio
                    </router-link>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle mr-4" href="" data-toggle="dropdown">
                        <i class="bi bi-tools"></i> Mantenimientos
                    </a>
                    <div class="dropdown-menu mb-3">
                        <router-link :to="{ name: 'index-rol'}" class="dropdown-item">
                            <i class="bi bi-sliders"></i> Roles
                        </router-link>
                        <router-link :to="{ name: 'index-empleado'}" class="dropdown-item">
                            <i class="bi bi-sliders"></i> Empleados
                        </router-link>
                        <router-link :to="{ name: 'index-etiqueta'}" class="dropdown-item">
                            <i class="bi bi-sliders"></i> Etiquetas
                        </router-link>
                    </div>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle text-capitalize" href="" data-toggle="dropdown">
                        <span class="badge badge-success">Admin</span> Armando Morales
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mb-3">
                        <a class="dropdown-item" href="">
                            <i class="bi bi-fingerprint"></i> Perfil
                        </a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="">
                            <i class="bi bi-arrow-left-circle-fill text-secondary mr-1"></i> Cerrar Sesion
                        </a>
                    </div>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "NavBar",
}
</script>