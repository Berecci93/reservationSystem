<template>
    <v-stepper v-model="stepNumber">
        <v-stepper-header>
            <v-stepper-step :complete="stepNumber > 1" step="1">Pick a day</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="stepNumber > 2" step="2">Pick an hour</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step :complete="stepNumber > 3" step="3">Personal data</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4">Summary</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items>
            <v-stepper-content step="1">
                <!-- date przechowuje info z wybrana data po @input -->
                <v-date-picker v-model="date" :min="minDate" @input="stepNumber = 2"></v-date-picker>
            </v-stepper-content>
            <v-stepper-content step="2">
                <Timeline
                    :config="config"
                    :reserved="savedDates"
                    :chosenDay="date"
                    v-if="date"
                    @hourChosen="chosenHours = $event; stepNumber = 3"
                ></Timeline>
            </v-stepper-content>
            <v-stepper-content step="3">
                <Form ref="form" v-if="date" @submitFormData="submitBtn($event)"></Form>
            </v-stepper-content>
            <v-stepper-content step="4">
                <Summary
                    :config="config"
                    :chosenHours="chosenHours"
                    :date="date"
                    :formData="formData"
                    @clearForm="$emit('clearForm')"
                ></Summary>
            </v-stepper-content>
        </v-stepper-items>
    </v-stepper>
</template>
<script>
import Timeline from './Timeline.vue';
import Form from './Form.vue';
import Summary from './Summary.vue';

export default {
    props: {
        config: Object
    },
    data: () => ({
        date: null,
        savedDates: [],
        stepNumber: 1,
        formData: {},
        chosenHours: [],
    }),
    components: {
        Timeline,
        Form,
        Summary
    },
    computed: {
        minDate() {
            return new Date().toISOString().substr(0, 10)
        },
    },
    methods: {
        submitBtn(event) {
            this.formData = event
            this.stepNumber = 4
            this.savedDates.push({ day: this.date, hour: this.chosenHours })
            localStorage.setItem("reserved", JSON.stringify(this.savedDates))
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
</style>
