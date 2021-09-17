<template>
  <header>
    <!-- Header desktop -->
    <div class="container-menu-desktop">
      <div class="topbar">
        <div class="content-topbar container h-100">
          <div class="left-topbar">
						<span class="left-topbar-item flex-wr-s-c">
							<span>
								Maputo, MPM
							</span>

							<img class="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG">

							<span>
								MAX 42° MIN 22°
							</span>
						</span>


            <router-link :to="{name: 'contacts'}" class="left-topbar-item">
              Contactos
            </router-link>

            <router-link :to="{name: 'register'}" class="left-topbar-item">
              Registar
            </router-link>

            <router-link :to="{name: 'login'}" class="left-topbar-item">
              Entrar
            </router-link>
          </div>

          <div class="right-topbar">
            <a href="#">
              <span class="fab fa-facebook-f"></span>
            </a>

            <a href="#">
              <span class="fab fa-twitter"></span>
            </a>


            <a href="#">
              <span class="fab fa-youtube"></span>
            </a>
          </div>
        </div>
      </div>

      <!-- Header Mobile -->
      <div class="wrap-header-mobile">
        <!-- Logo moblie -->
        <div class="logo-mobile">
          <router-link :to="{name: 'home'}">
            <img src="images/icons/logo-01.png" alt="IMG-LOGO">
          </router-link>
        </div>

        <!-- Button show menu -->
        <div class="btn-show-menu-mobile hamburger hamburger--squeeze m-r--8">
					<span class="hamburger-box">
						<span class="hamburger-inner"></span>
					</span>
        </div>
      </div>

      <!-- Menu Mobile -->
      <div class="menu-mobile">
        <ul class="topbar-mobile">
          <li class="left-topbar">
						<span class="left-topbar-item flex-wr-s-c">
							<span>
								Maputo, MPM
							</span>

							<img class="m-b-1 m-rl-8" src="images/icons/icon-night.png" alt="IMG">

							<span>
								MAX 42° MIN 22°
							</span>
						</span>
          </li>

          <li class="left-topbar">
            <router-link :to="{name: 'contacts'}" class="left-topbar-item">
              Contactos
            </router-link>

            <router-link :to="{name: 'register'}" class="left-topbar-item">
              Registar
            </router-link>

            <router-link :to="{name: 'login'}" class="left-topbar-item">
              Entrar
            </router-link>
          </li>

          <li class="right-topbar">
            <a href="#">
              <span class="fab fa-facebook-f"></span>
            </a>

            <a href="#">
              <span class="fab fa-twitter"></span>
            </a>


            <a href="#">
              <span class="fab fa-youtube"></span>
            </a>
          </li>
        </ul>

        <ul class="main-menu-m">
          <li v-for="(menu, index) in menus" :key="index">
            <router-link :to="{name: menu.to}">{{ menu.name }}</router-link>
          </li>

        </ul>
      </div>

      <!--  -->
      <div class="wrap-logo no-banner container">
        <!-- Logo desktop -->
        <div class="logo">
          <router-link :to="{name: 'home'}"><img src="images/icons/logo-01.png" alt="LOGO"></router-link>
        </div>
      </div>

      <!--  -->
      <div class="wrap-main-nav">
        <div class="main-nav">
          <!-- Menu desktop -->
          <nav class="menu-desktop">
            <router-link class="logo-stick" :to="{name: 'home'}">
              <img src="images/icons/logo-01.png" alt="LOGO">
            </router-link>

            <ul class="main-menu justify-content-center">
              <li v-for="(menu, index) in menus" :key="index">
                <router-link :class="[menu.sub_menus.length ? 'has_submenu' : '']" active-class="main-menu-active"
                             :to="{name: menu.to}">{{ menu.name }}
                </router-link>

                <ul class="sub-menu" v-if="menu.sub_menus.length">
                  <li v-for="(sub, index) in menu.sub_menus" :key="sub.to + index">
                    <router-link :to="{name: sub.to}">{{ sub.name }}</router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import menus from '@/json_data/menu.json'

export default {
  name: "QHeader",
  data() {
    return {
      menus
    }
  }
}
</script>

<style scoped>

</style>
