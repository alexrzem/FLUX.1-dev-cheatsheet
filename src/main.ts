import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import PrimeVue from 'primevue/config';
import { theme } from './style';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';

/* import icons and add them to the Library */
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';

import App from './App.vue'; /*  */

/* add icons to the library */
library.add(fab);
library.add(fad);
library.add(fal);
library.add(far);
library.add(fas);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

const app = createApp(App);
app.component('fa', FontAwesomeIcon);
app.component('fal', FontAwesomeLayers); //
app.component('fat', FontAwesomeLayersText); //
app.use(PrimeVue, theme);
app.use(pinia);
app.mount('#app');
