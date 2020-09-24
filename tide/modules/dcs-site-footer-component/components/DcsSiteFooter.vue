<template>
  <div class="rpl-site-footer dcs-site-footer">

    <div class="rpl-site-footer__bottom">
      <div class="rpl-site-footer__bottom-main">
        <rpl-links-and-copyright :links="links" :copyright="copyright"></rpl-links-and-copyright>
      </div>
    </div>

    <div class="rpl-site-footer__main">
      <rpl-acknowledgement class="rpl-site-footer__acknowledgement" :text="acknowledgement"/>
      <div v-if="caption" class="rpl-site-footer__caption">{{ caption }}</div>
    </div>

  </div>
</template>

<script>
import {RplSiteFooter} from '@dpc-sdp/ripple-site-footer'
import RplAcknowledgement from './Acknowledgement'
import RplLinksAndCopyright from './LinksAndCopyright'
import RplFooterNavigation from './FooterNavigation'
import RplLink from '@dpc-sdp/ripple-link'

// The footer logo is hardcoded because they are not required to be configurable.
import nswLogoImage from '~/static/img/nsw-logo.png'

const nswLogo = {
  src: nswLogoImage,
  alt: 'NSW Logo',
  url: 'https://nsw.gov.au'
}

export default {
  extends: RplSiteFooter,
  name: 'DcsSiteFooter',
  components: {
    RplAcknowledgement,
    RplLinksAndCopyright,
    RplFooterNavigation,
    RplLink
  },
  props: {
    nav: Array,
    links: Array,
    copyright: String,
    acknowledgement: String,
    caption: String,
    logos: Array
  },
  computed: {
    footerLogos() {
      if (!this.rplOptions.vicLogoFooter) {
        return this.logos ? this.logos : ''
      }
      return this.logos ? this.logos.concat([nswLogo]) : [nswLogo]
    }
  }
}
</script>

<style lang="scss">
@import "~@dpc-sdp/ripple-global/scss/settings";
@import "~@dpc-sdp/ripple-global/scss/tools";

.rpl-site-footer {
  & .dcs-site-footer {
    background-color: green;
  }
}

</style>
