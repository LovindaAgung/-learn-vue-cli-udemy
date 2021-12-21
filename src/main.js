import { createApp } from 'vue';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

library.add(fas,fab,far);

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('fa', FontAwesomeIcon);

app.mount('#app');