<template>
    <v-app>
        <v-main>
            <v-container>
                <v-col>
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
                                <v-date-picker
                                    v-model="date"
                                    @input="stepNumber = 2"
                                    min="2016-06-15"
                                    max="2023-03-20"
                                ></v-date-picker>
                            </v-stepper-content>
                            <v-stepper-content step="2">
                                <Timeline :config="config" v-if="date" @hourChosen="stepNumber = 3"></Timeline>
                            </v-stepper-content>
                            <v-stepper-content step="3">
                                <Form v-if="date"></Form>
                            </v-stepper-content>
                        </v-stepper-items>
                    </v-stepper>
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
        config: {
            start: 8,
            end: 16,
            sesja: 45,
            przerwa: 15
        },
        stepNumber: 1
    }),
    components: {
        Timeline,
        Form
    }
};
</script>
