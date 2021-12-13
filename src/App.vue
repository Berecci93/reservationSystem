<template >
    <v-app>
        <v-main>
            <!-- <v-app-bar elevation="2" color="primary">

            </v-app-bar>-->
            <v-btn @click="demoNumber++" color="primary" fab left bottom fixed>
                <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-container>
                <v-row>
                    <v-col>
                        <div class="logo-container">
                            <div class="text-effect">
                                <h1 class="neon" data-text="VRent">VRent</h1>
                                <div class="gradient"></div>
                                <div class="spotlight"></div>
                            </div>
                        </div>company description
                    </v-col>
                    <v-col align="center" justify="center" class="column">
                        <v-stepper v-model="stepNumber">
                            <v-stepper-header>
                                <v-stepper-step :complete="stepNumber > 1" step="1">Name of step 1</v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step :complete="stepNumber > 2" step="2">Name of step 2</v-stepper-step>

                                <v-divider></v-divider>

                                <v-stepper-step step="3">Name of step 3</v-stepper-step>
                            </v-stepper-header>
                            <v-stepper-items>
                                <v-stepper-content step="1">
                                    <!-- date przechowuje info z wybrana data po @input -->
                                    <v-date-picker
                                        v-model="date"
                                        :min="minDate"
                                        @input="stepNumber = 2"
                                    ></v-date-picker>
                                </v-stepper-content>
                                <v-stepper-content step="2">
                                    <Timeline
                                        :config="config"
                                        :reserved="savedDates"
                                        :chosenDay="date"
                                        v-if="date"
                                        @hourChosen="chosenHour = $event; stepNumber = 3"
                                    ></Timeline>
                                </v-stepper-content>
                                <v-stepper-content step="3">
                                    <Form
                                        ref="form"
                                        v-if="date"
                                        @submitFormData="submitBtn($event)"
                                    ></Form>
                                </v-stepper-content>
                            </v-stepper-items>
                        </v-stepper>
                        <!-- <v-col>
                        <div class="logo">
                            <img src=".\assets\vue logo.png" />
                        </div>
                        </v-col>-->
                    </v-col>
                </v-row>
                <v-dialog v-model="dialog" max-width="400">
                    <v-card>
                        <v-simple-table>
                            <!-- <thead>
                                    <tr>
                                        <th>Check your data</th>
                                        <th></th>
                                    </tr>
                            </thead>-->
                            <tbody>
                                <tr>
                                    <td>
                                        <i>{{ "Picked date" }}</i>
                                    </td>
                                    <td>{{ date }}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>{{ "Hour" }}</i>
                                    </td>
                                    <td>{{ chosenHoursToString }}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>{{ "Name" }}</i>
                                    </td>
                                    <td>{{ formData.lastname + ' ' + formData.firstname }}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>{{ "Email" }}</i>
                                    </td>
                                    <td>{{ formData.email }}</td>
                                </tr>
                                <tr>
                                    <td>
                                        <i>{{ "Phone number" }}</i>
                                    </td>
                                    <td>{{ formData.phoneNumber }}</td>
                                </tr>
                            </tbody>
                        </v-simple-table>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="success"
                                @click="dialog = false; $refs.form.clear(); stepNumber = 1"
                            >Ok</v-btn>
                            <!-- <v-btn color="primary">Agree</v-btn> -->
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-row>
                    <v-col>
                        <v-card v-if="demoNumber > 0">
                            <v-card-actions>
                                <v-btn color="secondary" @click="clearStorage">Clear localStorage</v-btn>
                                <v-btn color="secondary" @click="aboutNumber++">About</v-btn>
                            </v-card-actions>
                        </v-card>
                        <v-card v-if="aboutNumber > 0">
                            <v-card-text>
                                <b>About</b>
                                <ul>
                                    <li>
                                        In association with:
                                        <a href="https://hiijac.com/">HIIJAC</a>
                                        I thank him all my knowledge and skills
                                        {{ chosenHoursToString }}
                                    </li>
                                </ul>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>
import Timeline from './components/Timeline.vue';
import Form from './components/Form.vue';

export default {
    data: () => ({
        date: null,
        dialog: false,
        savedDates: [],
        config: {
            start: 8,
            end: 20,
            sesja: 60,
            przerwa: 15
        },
        stepNumber: 1,
        demoNumber: 0,
        aboutNumber: 0,
        formData: {},
        chosenHour: [],
    }),
    components: {
        Timeline,
        Form
    },
    computed: {
        minDate() {
            return new Date().toISOString().substr(0, 10)
        },
        chosenHoursToString() {
            return this.chosenHour.map(obj => `${obj.start.hour}:${obj.start.minutes}-${obj.end.hour}:${obj.end.minutes}`).join(", ")
        }
    },
    methods: {
        submitBtn(event) {
            //formData = $event; dialog = true
            this.formData = event
            this.dialog = true
            this.savedDates.push({ day: this.date, hour: this.chosenHour })
            localStorage.setItem("reserved", JSON.stringify(this.savedDates))
        },
        clearStorage() {
            localStorage.clear()
        },

    },
    created() {
        let storageString = localStorage.getItem("reserved")
        this.savedDates = JSON.parse(storageString) || []
        this.date = this.minDate
    }
};
</script>
<style lang="scss" scoped>
// .column {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
// }
// .logo {
//     margin: 6rem 0 0 0;
// }

//--------------------------------------

$color1: var(--v-primary-base);
$color2: var(--v-secondary-base);

.text-effect {
    overflow: hidden;
    position: relative;
    filter: contrast(110%) brightness(190%);
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
    align-content: center;
    align-items: center;
}
</style>
