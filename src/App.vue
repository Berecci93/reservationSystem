<template >
    <v-app>
        <v-app-bar app elevation="2" color="primary" rounded>
            <v-spacer></v-spacer>

            <v-menu
                v-if="$vuetify.breakpoint.smAndDown"
                transition="slide-y-transition"
                bottom
                left
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn dark icon v-bind="attrs" v-on="on">
                        <v-icon>mdi-menu</v-icon>
                    </v-btn>
                </template>

                <v-list style="background-color: #272727" dark>
                    <v-list-item v-for="item in btns" :key="item.label" link>
                        <v-btn block @click="display = item.label">
                            <v-icon>{{ item.icon }}</v-icon>
                            <span class="mx-2">{{ item.label }}</span>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn
                v-for="item in btns"
                :key="item.label"
                class="mx-3"
                @click="display = item.label"
                v-else
            >
                <v-icon>{{ item.icon }}</v-icon>
                <span class="mx-2">{{ item.label }}</span>
            </v-btn>
        </v-app-bar>
        <v-main>
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
            <div class="stretch-height">
                <v-row class="all-content">
                    <v-col class="logo-container">
                        <div class="logo" style="--stacks: 3;">
                            <span style="--index: 0;">VRENT</span>
                            <span style="--index: 1;">VRENT</span>
                            <span style="--index: 2;">VRENT</span>
                        </div>
                        <span class="slogan">Experience a journey through countless realities</span>
                    </v-col>
                    <v-col class="column align-center justify-center">
                        <Prices v-if="display == 'prices'" :config="config"></Prices>
                        <Games v-if="display == 'games'"></Games>
                        <Contact v-if="display == 'contact'"></Contact>
                        <Faq v-if="display == 'faq'"></Faq>
                        <Stepper
                            v-if="display == 'reservation'"
                            :config="config"
                            @clearForm="stepperKey++"
                            :key="stepperKey"
                        ></Stepper>
                    </v-col>
                </v-row>
                <v-dialog v-model="changeConfig" max-width="600">
                    <v-card>
                        <Configchange :configData="config" @hideConfig="hideConfig"></Configchange>
                    </v-card>
                </v-dialog>
            </div>
        </v-main>
        <div id="bgplayer">
            <video autoplay="autoplay" preload loop muted playsinline type="video/mp4">
                <!-- https://www.youtube.com/watch?v=X_o4gW1ExdM Creative Commons -->
                <source src="./assets/bg.mp4" type="video/mp4" poster="./assets/poster.png" />Twoja przeglądarka nie obsługuje trybu Video.
            </video>
        </div>
    </v-app>
</template>


<script>
import Stepper from './components/Stepper.vue';
import Configchange from './components/Configchange.vue'
import Prices from './components/Prices.vue';
import Games from './components/Games.vue'
import Contact from './components/Contact.vue';
import Faq from './components/Faq.vue'

export default {
    data: () => ({
        config: {
            start: 8,
            end: 20,
            breakLength: 15,
            sessionLength: 60,
            price: 100
        },
        btns: [
            {
                label: "reservation",
                icon: "mdi-calendar-clock"
            }, {
                label: "prices",
                icon: "mdi-cash-multiple"
            }, {
                label: "games",
                icon: "mdi-gamepad-variant"
            }, {
                label: "contact",
                icon: "mdi-phone"
            },
            {
                label: "faq",
                icon: "mdi-frequently-asked-questions"
            },
        ],
        stepperKey: 1000,
        demoMenu: false,
        about: false,
        display: "",
        changeConfig: false,
        changedConfigData: {},
        checkbox: false
    }),
    components: {
        Stepper,
        Configchange,
        Prices,
        Games,
        Contact,
        Faq
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

.logo-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 40rem;
}

.slogan {
    font-family: "Genos", sans-serif;
    font-size: clamp(0.95rem, 1.45vw, 1.45rem);
    text-shadow: 1px 1px 3px #0005;
}
.logo {
    font-family: "Genos", sans-serif;
    font-size: clamp(6rem, 9vw, 9rem);
    font-weight: 600;
    display: grid;
    grid-template-columns: 1fr;
}

.logo span {
    font-weight: bold;
    grid-row-start: 1;
    grid-column-start: 1;
    --stack-height: calc(100% / var(--stacks) - 1px);
    --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
    --clip-top: calc(var(--stack-height) * var(--index));
    --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
    clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
    animation: stack 85ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
            calc(var(--index) * 30ms),
        glitch 2s ease infinite 2s alternate-reverse;
    text-shadow: 1px 1px 3px #0005;
}

.logo span:nth-child(odd) {
    --glitch-translate: 8px;
}

.logo span:nth-child(even) {
    --glitch-translate: -8px;
}

@keyframes stack {
    0% {
        opacity: 0;
        transform: translateX(-50%);
        text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    }

    60% {
        opacity: 0.5;
        transform: translateX(50%);
    }

    80% {
        transform: none;
        opacity: 1;
        text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }

    100% {
        text-shadow: none;
    }
}

@keyframes glitch {
    0% {
        text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
        transform: translate(var(--glitch-translate));
    }

    2% {
        text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
    }

    4%,
    100% {
        text-shadow: none;
        transform: none;
    }
}

#bgplayer {
    z-index: -5;
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    overflow: hidden;
    max-width: 100%;
    max-height: 100%;
    background-image: url(./assets/poster.png);
    background-position: center center;
    background-size: cover;
    filter: blur(8px) brightness(0.2);
}

#bgplayer video {
    min-height: 100vh;
    min-width: 100vw;
    object-fit: cover;
}

.all-content {
    justify-content: space-around;
    align-items: center;
    height: 100%;
    margin: 0 2rem;
    display: flex;

    @media (max-width: 1250px) {
        flex-direction: column;
    }
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

.stretch-height {
    height: 100%;
}
.v-toolbar__content {
    align-items: center;
    display: flex;
    position: relative;
    z-index: 0;
}

.theme--dark.v-application {
    background: none !important;
}

body {
    background-color: #121212;
}
</style>