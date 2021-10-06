<template>
  <footer>
    <div class="bg2 p-t-40 p-b-25">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 p-b-20">
            <div class="size-h-3 flex-s-c">
              <router-link :to="{name: 'home'}">
                <img class="max-s-full" src="images/icons/logo-02.png" alt="LOGO">
              </router-link>
            </div>

            <div>
              <p class="f1-s-1 cl11 p-b-16">
                Contribuimos para o sector agrario em Moçambique com uma abordagem revolucionaria da mesma, trazemos o
                que é feito nas zonas rurais, na area industrial e tambem como contribuimos para parcerias bilaterais.
              </p>

              <!-- <p class="f1-s-1 cl11 p-b-16">
                Quer publicitar? Ligue em (+258) 21 716 6879
              </p> -->

              
            </div>
          </div>

          <div class="col-sm-6 col-lg-4 p-b-20">
            <div class="size-h-3 flex-s-c">
              <h5 class="f1-m-7 cl0">
                Siga nos redes sociais
              </h5>
            </div>
            <div class="p-t-30">
                <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                  <span class="fab fa-facebook-f"></span>
                </a>

                <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                  <span class="fab fa-twitter"></span>
                </a>

                <a href="#" class="fs-18 cl11 hov-cl10 trans-03 m-r-8">
                  <span class="fab fa-youtube"></span>
                </a>
              </div>
            
          </div>

          <div class="col-sm-6 col-lg-4 p-b-20">
            <div class="size-h-3 flex-s-c">
              <h5 class="f1-m-7 cl0">
                Quick
              </h5>
            </div>

            <ul class="m-t--12">
              <li class="how-bor1 p-rl-5 p-tb-10">
                <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                  Noticias
                </a>
              </li>

              <li class="how-bor1 p-rl-5 p-tb-10">
                <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                  Directório
                </a>
              </li>

              <li class="how-bor1 p-rl-5 p-tb-10">
                <a href="#" class="f1-s-5 cl11 hov-cl10 trans-03 p-tb-8">
                  Mapa Agricola
                </a>
              </li>


            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg11">
      <div class="container size-h-4 flex-c-c p-tb-15">
				<span class="f1-s-1 cl0 txt-center">
Copyright &copy;{{ new Date().getFullYear() }} Todos Direitos reservados | Desenhado com
            <i class="fa fa-heart text-danger" aria-hidden="true"></i> pela
          <a href="https://ekutivasolutions.co.mz" class="f1-s-1 cl10 hov-link1" target="_blank">eKutivaSolutions</a>

				</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "QFooter"
}
</script>

<style scoped>

</style>
