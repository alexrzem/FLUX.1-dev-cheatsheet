import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fadt } from '@fortawesome/duotone-thin-svg-icons';

/* add icons to the library */
library.add(fal, far, fass, fad, fadt);

import App from './App.vue'; /*  */

import './assets/styles/main.css';

const pinia = createPinia();

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.component('fal', FontAwesomeLayers); //
app.component('fat', FontAwesomeLayersText); //
app.use(pinia);
app.use(VueLazyload);
app.mount('#app');
