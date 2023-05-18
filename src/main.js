const { createApp } = require('vue');
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Tooltip from 'primevue/tooltip';
import Button from 'primevue/button';

const app = createApp(App);

app.use(PrimeVue);
app.directive('tooltip', Tooltip);
app.component('Button', Button);

app.mount('#app');
