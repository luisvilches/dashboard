<template>
    <div v-if="$store.state.navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Cardumen</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                
                <ul class="navbar-nav ml-auto mt-2 mt-lg-0 ulMobile">
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle notify" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell"></i> <i class="badge badge-secondary">1</i>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="" class="dropdown-item">Notificacion 1</router-link>
                            <router-link to="" class="dropdown-item">Notificacion 2</router-link>
                            <router-link to="" class="dropdown-item">Notificacion 3</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="" class="dropdown-item">Ver todas las notificaciones</router-link>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle relative menuImg" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Luis Vilches <img class="avatar" src="../assets/avatar.png" alt="">
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link to="" class="dropdown-item">Mi perfil</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="" class="dropdown-item">Cerrar session</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>



        <nav class="subNav">
            <div>
                <ul class="">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link"><i class="fas fa-columns"></i> <span>Dashboard</span></router-link>
                    </li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-project-diagram"></i> <span>Proyectos</span>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link :to="{name:'New'}" class="dropdown-item">Nuevo proyecto</router-link>
                            <router-link :to="{name:'Find'}" class="dropdown-item">Buscar proyecto</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link :to="{name:'List'}" class="dropdown-item">Mis proyectos</router-link>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-cogs"></i> <span>Administracion</span>
                        </a>
                        <div class="dropdown-menu" role="menu" aria-labelledby="navbarDropdown">
                            <router-link to="" class="dropdown-item">Administrar proyectos</router-link>
                            <router-link to="" class="dropdown-item">Administrar clientes</router-link>
                            <router-link to="" class="dropdown-item">Administrar equipos</router-link>
                            <router-link to="" class="dropdown-item">Administrar usuarios</router-link>
                            <router-link to="" class="dropdown-item">Administrar perfiles</router-link>
                            <router-link to="" class="dropdown-item">Administrar categorias</router-link>
                            <div class="dropdown-divider"></div>
                            <router-link to="" class="dropdown-item">Listado de usuarios</router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .navbar-light{
        padding: 5px!important;
        background:#fff!important;
        border-bottom:1px solid #eee!important;
    }

    .subNav{
        
        background:#fff;
        border-bottom:1px solid #eee;
        box-shadow: 0px 0px 10px #eee;
    }

    .subNav ul {
        padding: 0;
        margin: 0;
    }
    .subNav ul li{
        list-style: none;
        display: inline-block;
    }

    nav ul li a{
        color: #2c3e50!important;
    }

    .dropdown i {
        margin-right: 10px;
    }

    @media(max-width:768px){
        .subNav ul .dropdown span {
            display: none;
        }
        .subNav ul .nav-item span{
            display: none;
        }
        .dropdown i {
            margin-right: 0px;
        }

        .ulMobile li{
            display: inline-block!important;
        }

        .ulMobile ul li .menuImg{
            margin-right: 0px;
        }
    }

    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 100%;
        margin-left: 30px;
        position: absolute;
        top:0;
    }

    .menuImg{
        margin-right: 60px;
    }

    .navbar-brand{
        margin-left: 20px;
    }

    

</style>
