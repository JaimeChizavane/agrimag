<template>
  <div>
    <q-header/>
    <router-view/>
    <q-footer/>


    <!-- Back to top -->
    <div class="btn-back-to-top" id="myBtn" @click="scroll">
		<span class="symbol-btn-back-to-top">
			<span class="fas fa-angle-up"></span>
		</span>
    </div>

    <!-- Modal Video 01-->
    <div class="modal fade" id="modal-video-01" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document" data-dismiss="modal">
        <div class="close-mo-video-01 trans-0-4" data-dismiss="modal" aria-label="Close">&times;</div>

        <div class="wrap-video-mo-01">
          <div class="video-mo-01">
            <iframe src="#" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import QHeader from "@/components/Header";
import QFooter from "@/components/Footer";

export default {
  components: { QFooter, QHeader },
  methods: {
    scroll() {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }
  }
}
</script>
