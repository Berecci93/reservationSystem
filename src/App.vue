<template >
    <v-app>
        <v-app-bar app elevation="2" color="primary" rounded>
            <v-spacer></v-spacer>
            <v-btn class="nav-btn" color="primary" @click="display = 'stepper'">reservation</v-btn>
            <v-btn class="nav-btn" color="primary" @click="display = 'prices'">prices</v-btn>
            <v-btn class="nav-btn" color="primary" @click="display = 'games'">our games</v-btn>
            <v-btn class="nav-btn" color="primary" @click="display = 'about'">about</v-btn>
            <v-btn class="nav-btn" color="primary" @click="display = 'contact'">contact</v-btn>
        </v-app-bar>
        <v-main>
            <div class="skewed-bar"></div>
            <v-menu
                :offset-y="true"
                :close-on-content-click="false"
                top
                transition="slide-x-transition"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        @click="demoMenu = !demoMenu"
                        color="primary"
                        fab
                        left
                        bottom
                        fixed
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item @click="clearStorage">Clear localStorage</v-list-item>
                    <v-list-item @click="changeConfig = !changeConfig">Change Config Hours</v-list-item>
                </v-list>
            </v-menu>
            <v-container>
                <v-row class="all-content">
                    <v-col>
                        <div class="logo-container">
                            <div class="text-effect">
                                <h1 class="neon" data-text="Vrent">VRent</h1>
                                <div class="gradient"></div>
                                <div class="spotlight"></div>
                            </div>
                            <i style="color:#8207f5"></i>
                        </div>
                    </v-col>
                    <v-col align="center" justify="center" class="column">
                        <Prices v-if="display == 'prices'" :config="config"></Prices>
                        <Games v-if="display == 'games'"></Games>
                        <Contact v-if="display == 'contact'"></Contact>
                        <Stepper
                            @priceAmount="amount"
                            v-if="display == 'stepper'"
                            :config="config"
                            @clearForm="stepperKey++"
                            :key="stepperKey"
                        ></Stepper>
                    </v-col>
                </v-row>
                <v-dialog v-model="changeConfig">
                    <v-card>
                        <Configchange :configData="config" @hideConfig="hideConfig"></Configchange>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
import Stepper from './components/Stepper.vue';
import Configchange from './components/Configchange.vue'
import Prices from './components/Prices.vue';
import Games from './components/Games.vue'
import Contact from './components/Contact.vue';

export default {
    data: () => ({
        config: {
            start: 8,
            end: 20,
            breakLength: 15,
            sessionLength: 60,
            price: 100
        },
        stepperKey: 1000,
        demoMenu: false,
        about: false,
        display: "",
        changeConfig: false,
        changedConfigData: {},
        amount: 0
    }),
    components: {
        Stepper,
        Configchange,
        Prices,
        Games,
        Contact
    },
    methods: {
        clearStorage() {
            localStorage.clear()
        },
        hideConfig() {
            this.changeConfig = false
        }
    },
};
</script>
<style lang="scss" scoped>
$color1: var(--v-primary-base);
$color2: var(--v-secondary-base);

.nav-btn {
    margin: 0rem 1rem 0rem 1rem;
}
.text-effect {
    overflow: hidden;
    position: relative;
    filter: contrast(0.952) brightness(3);
}

.neon {
    position: relative;
    background: black;
    color: transparent;

    &::before,
    &::after {
        content: attr(data-text);
        color: white;
        filter: blur(0.02em);
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
    }

    &::after {
        mix-blend-mode: difference;
    }
}

.gradient,
.spotlight {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    pointer-events: none;
    z-index: 10;
}

.gradient {
    background: linear-gradient(45deg, $color1, $color2);
    mix-blend-mode: multiply;
}

.spotlight {
    animation: light 25s infinite linear;

    background: radial-gradient(circle, white, transparent 25%) 0 0 / 25% 25%,
        radial-gradient(circle, white, black 25%) 50% 50% / 12.5% 12.5%;
    top: -100%;
    left: -100%;

    mix-blend-mode: color-dodge;
}

@keyframes light {
    100% {
        transform: translate3d(50%, 50%, 0);
    }
}
.neon {
    font: 700 150px "Lato", sans-serif;
    text-transform: uppercase;
    text-align: center;
    margin: 0;

    &:focus {
        outline: none;
        border: 1px dotted white;
    }
}

.logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.all-content {
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
<style lang="scss" >
*::-webkit-scrollbar {
    width: 15px;
}

*::-webkit-scrollbar-track {
    background: #202020;
    border-left: 1px solid #2c2c2c;
}

*::-webkit-scrollbar-thumb {
    background: #3e3e3e;
    border: solid 3px #202020;
    border-radius: 7px;
}

*::-webkit-scrollbar-thumb:hover {
    background: white;
}

.container {
    height: 100%;
}
</style>