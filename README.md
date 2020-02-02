# Point Of Vue

Bellow you can find a basic configuration for building a vue project.

### Packages used

* [vuex](https://vuex.vuejs.org) - vue store 
* [vue-router](https://router.vuejs.org/) - easily define routes
* [vue-axios](https://github.com/imcvampire/vue-axios#readme) - http requests interface with javascript Promise concept
* [vuetify](https://vuetifyjs.com/en/introduction/why-vuetify) - Great UI templates
* [vue-material-design-icons](https://materialdesignicons.com/)

### Nice To Have
* [Color Pallete](https://vuetifyjs.com/en/styles/colors#material-colors)    

## Project setup
1. **Install packages**
``` yarn add vuex es6-promise vue-router vue-axios vue-material-design-icons vuetify ```
2. **Create Environment files (Variables in the form of VUE_APP_< variable name >)**
``` touch .env.dev ```
3. **Create store with a single module to start with**
``` 
    mkdir src/store
    touch src/store/index.js
    mkdir src/store/modules
    touch src/store/modules/module1.js (pick a meaningful name)

    module1.js initial content:
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    import axios from 'axios';
    const bp_mountpoint = "<your api mountpoint>/"
    const ROOT_API = process.env.VUE_APP_ROOT_API + bp_mountpoint

    const state = {}

    const getters = {}

    const actions = {}

    const mutations = {}

    export default {
        state,
        getters,
        actions,
        mutations
    };

```
4. **Update main.js** (under src folder)
```
    import axios from 'axios'
    import VueAxios from 'vue-axios'
    import VueRouter from 'vue-router';
    import store from './store';
    import vuetify from './plugins/vuetify';

    Vue.use(VueAxios, axios)
    Vue.use(VueRouter)

    const MODE = process.env.VUE_APP_MODE

    const routes = [
  { path: '/', redirect: '/esxs' },
  { path: '/route1', name: 'route1', component: route1, meta: {title: 'ROUTE' + '-' + MODE}, props: true },

]

    const router = new VueRouter({
    routes // short for `routes: routes`
    })
    
    new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app')
    
    
    
```
### Compiles and hot-reloads for development
```
yarn serve --mode dev
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
