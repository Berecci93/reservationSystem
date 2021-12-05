<template>
    <v-app>
        <v-main>
            <v-app-bar elevation="2" color="primary">
                <v-btn @click="aboutNumber++">About</v-btn>
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
                                    @input="stepNumber = 2"
                                    min="2016-06-15"
                                    max="2023-03-20"
                                ></v-date-picker>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <Timeline
                                    :config="config"
                                    v-if="date"
                                    @hourChosen="timelineData = $event; stepNumber = 3"
                                ></Timeline>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <Form
                                    ref="form"
                                    v-if="date"
                                    @submitFormData="formData = $event; dialog = true"
                                ></Form>
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
                                <tbody>
                                    <tr>
                                        <td>
                                            {{ "picked date" }}
                                            <br />
                                            {{ "hour" }}
                                            <br />
                                            {{ "name" }}
                                            <br />
                                            {{ "email" }}
                                            <br />
                                            {{ "phone number" }}
                                        </td>
                                        <td>
                                            {{ date }}
                                            <br />
                                            {{ timelineData.startHour + ":" }}{{ timelineData.startMinute }}{{ " to " + timelineData.endHour + ":" }}{{ timelineData.endMinute }}
                                            <br />
                                            {{ formData.lastname }}
                                            {{ formData.firstname }}
                                            <br />
                                            {{ formData.email }}
                                            <br />
                                            {{ formData.phoneNumber }}
                                        </td>
                                    </tr>
                                </tbody>
                            </v-simple-table>
                        </v-card>
                        <v-btn>Agree</v-btn>
                        <v-btn @click="dialog = false; $refs.form.clear(); stepNumber = 1">Disagree</v-btn>
                    </v-dialog>
                </v-col>
                <v-col>
                    <v-card v-if="aboutNumber > 0">
                        <v-card-text>
                            <b>About</b>
                            <ul>
                                <li>
                                    In association with:
                                    <a href="https://hiijac.com/">HIIJAC</a>
                                    I thank him all my knowledge and skills
                                </li>
                                <li>You can book any termin you want</li>
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
        config: {
            start: 8,
            end: 16,
            sesja: 45,
            przerwa: 15
        },
        stepNumber: 1,
        aboutNumber: 0,
        formData: {},
        timelineData: {},
    }),
    components: {
        Timeline,
        Form
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
