<template>
  <div class="dcs-site-footer-acknowledgement">
    <h2>DCS Site Footer Acknowledgement </h2>
  </div>
</template>

<script>
import {RplAcknowledgement} from '@dpc-sdp/ripple-site-footer'

export default {
  extends: RplAcknowledgement,
  name: 'DcsSiteFooterAcknowledgement'
}
</script>

<style lang="scss">
@import "~@dpc-sdp/ripple-global/scss/settings";
@import "~@dpc-sdp/ripple-global/scss/tools";

.dcs-site-footer-acknowledgement {
  background-color: green;
}
</style>
