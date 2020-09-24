<template>
  <div class="dcs-site-footer">
    <h2>DCS Site Footer</h2>
  </div>
</template>

<script>
import RplSiteFooter from '@dpc-sdp/ripple-site-footer'

export default {
  extends: RplSiteFooter,
  name: 'DcsSiteFooter'
}
</script>

<style lang="scss">
@import "~@dpc-sdp/ripple-global/scss/settings";
@import "~@dpc-sdp/ripple-global/scss/tools";

.dcs-site-footer {
  background-color: green;
}
</style>
