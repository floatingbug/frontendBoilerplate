import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import ProgressSpinner from "primevue/progressspinner";
import Message from "primevue/message";
import Password from "primevue/password";
import Drawer from 'primevue/drawer';
import Menu from "primevue/menu";
import Tooltip from 'primevue/tooltip';

import App from './App.vue'
import router from './router'
import "./styles/main.scss";
import "./styles/tokens.css";
import 'primeicons/primeicons.css'


const app = createApp(App)


app.use(createPinia())
app.use(router)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.dark-mode',
    }
  }
});


app.component('Button', Button);
app.component('InputText', InputText);
app.component('ProgressSpinner', ProgressSpinner);
app.component("Message", Message);
app.component("Password", Password);
app.component("Drawer", Drawer);
app.component("Menu", Menu);

app.directive('tooltip', Tooltip);


app.mount('#app')
