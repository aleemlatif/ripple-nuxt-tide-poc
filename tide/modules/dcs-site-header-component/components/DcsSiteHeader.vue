<template>
  <transition name="rpl-header-fade">
    <Trap :disabled="!menuContentOpen">
      <div v-show="headerVisible"
           class="rpl-site-header"
           :class="{
        'rpl-site-header--open': menuContentOpen,
        'rpl-site-header--sticky': stickyActive,
      }"
      >
        <div class="rpl-site-header__inner">
          <!-- Top Bar -->
          <div class="rpl-site-header__top">
            <div class="rpl-site-header__logo-container">
              <div class="rpl-site-header__logo-container-inner">
                <!-- Menu Button -->
                <button
                  v-if="searchState !== 'opened' && menulinks > 0"
                  class="rpl-site-header__btn rpl-site-header__btn--menu"
                  :class="{'rpl-site-header__btn--menu-open' : (menuState === 'opened')}"
                  :aria-expanded="(menuState === 'opened').toString()"
                  @click="menuToggle()"
                >
                  <rpl-icon :symbol="menuButton[menuState].icon" color="white"></rpl-icon>
                  <span>{{ menuButton[menuState].text }}</span>
                </button>

                <!--Co brand logo if it exists-->
                <div v-if="!menuContentOpen && logo" class="rpl-site-header__title">
                  <!--Render element if taxonomy includes a cobrand logo-->
                  <rpl-link :href="logo.url">
                    <img :src="logo.image" :alt="logo.alt"/>
                  </rpl-link>
                </div>
              </div>
            </div>
            <!-- Top Menu -->
            <div
              v-if="(searchState === 'closed') && ((menuContentOpen && (menuState === 'opened')) || menuLayout === 'horizontal')"
              class="rpl-site-header__menu-container"
              :class="{
              'rpl-site-header__menu-container--horizontal': (menuLayout === 'horizontal'),
              'rpl-site-header__menu-container--vertical': (menuLayout === 'vertical')
            }"
            >
              <div class="rpl-site-header__menu">
                <rpl-menu
                  :menu="links"
                  :layout="menuLayout"
                  title="Main Menu"
                  :open="(menuState === 'opened')"
                  @rootMenuClicked="rootMenuClicked"
                />
              </div>
            </div>
            <div class="rpl-site-header__btn-container">
              <!-- Logout button -->
              <button
                v-if="showLogout"
                class="rpl-site-header__btn rpl-site-header__btn--logout"
                :class="{'rpl-site-header__btn--logout-open' : (menuState === 'opened')}"
                @click="logoutFunc()">
                <span>{{ logoutButton.text }}</span>
                <rpl-icon :symbol="logoutButton.icon" color="white"/>
              </button>
              <!-- Search Button -->
              <button
                v-if="showSearch"
                @click="searchToggle()"
                class="rpl-site-header__btn rpl-site-header__btn--search"
                :class="{'rpl-site-header__btn--search-open' : (searchState === 'opened')}"
                :aria-expanded="(searchState === 'opened').toString()"
              >
                <span>{{ searchButton[searchState].text }}</span>
                <rpl-icon :symbol="searchButton[searchState].icon" color="white"/>
              </button>
            </div>
          </div>
          <!-- Search Content -->
          <div v-if="menuContentOpen && searchState == 'opened'" class="rpl-site-header__search-container">
            <rpl-search :terms="searchTerms" @search="searchFunc"/>
          </div>
        </div>
      </div>
    </Trap>
  </transition>
</template>

<script>
import RplSiteHeader from '@dpc-sdp/ripple-site-header'
import RplMenu from './menu'
import RplSearch from './search'
import RplIcon from '@dpc-sdp/ripple-icon'
import RplLink from '@dpc-sdp/ripple-link'
import Trap from 'vue-focus-lock'

export default {
  extends: RplSiteHeader,
  name: 'DcsSiteHeader',
  components: {
    Trap,
    RplIcon,
    RplLink,
    RplMenu,
    RplSearch
  }
}
</script>

<style lang="scss">
@import "~@dpc-sdp/ripple-global/scss/settings";
@import "~@dpc-sdp/ripple-global/scss/tools";
@import "scss/site_header";


.rpl-site-header {
  background-color: white;
}
</style>
