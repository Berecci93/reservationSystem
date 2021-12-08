<template >
    <v-app>
        <v-main>
            <v-app-bar elevation="2" color="primary">
                <v-btn @click="demoNumber++" color="secondary">Demo options</v-btn>
            </v-app-bar>
            <v-container>
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
                                    v-bind="newdate"
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
                                <Form ref="form" v-if="date" @submitFormData="submitBtn($event)"></Form>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
                    <v-col>
                        <div class="logo">
                            <img src=".\assets\vue logo.png" />
                        </div>
                    </v-col>
                </v-col>
                <v-col>
                    <v-dialog v-model="dialog" max-width="400">
                        <v-card>
                            <v-simple-table>
                                <thead>
                                    <tr>
                                        <th>Check your data</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <i>
                                                {{ "Picked date" }}
                                                <br />
                                                {{ "Hour" }}
                                                <br />
                                                {{ "Name" }}
                                                <br />
                                                {{ "Email" }}
                                                <br />
                                                {{ "Phone number" }}
                                            </i>
                                        </td>
                                        <td>
                                            <b>
                                                {{ date }}
                                                <br />
                                                {{ chosenHour.startHour + ":" }}{{ chosenHour.startMinute }}{{ " to " + chosenHour.endHour + ":" }}{{ chosenHour.endMinute }}
                                                <br />
                                                {{ formData.lastname }}
                                                {{ formData.firstname }}
                                                <br />
                                                {{ formData.email }}
                                                <br />
                                                {{ formData.phoneNumber }}
                                            </b>
                                        </td>
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
                </v-col>
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
                                </li>
                            </ul>
                        </v-card-text>
                    </v-card>
                </v-col>
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
        newdate: { min: "" },
        demoNumber: 0,
        aboutNumber: 0,
        formData: {},
        chosenHour: {},
    }),
    components: {
        Timeline,
        Form
    },
    computed: {
        getDate() {
            return this.newdate.min = new Date().toISOString().substr(0, 10)


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
    }
};
</script>
<style lang="scss" scoped>
.column {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.logo {
    margin: 6rem 0 0 0;
}
</style>
