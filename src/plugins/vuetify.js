import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pl from 'vuetify/lib/locale/pl';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      // light: {
      //   primary: '#211919',
      //   secondary: '#871010',
      //   accent: '#64485C',
      //   error: '#282828',
      //   info: '#2196F3',
      //   success: '#3b31eb',
      //   warning: '#FFC107'
      // },
      dark: {
        primary: '#8207f5',
        secondary: '#8207f5',
        accent: '#8207f5',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        background: "#121212"
      }
    },
  },
  lang: {
    locales: { pl },
    current: 'pl',
  },
});
