<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row class="justify-space-around">
                    <v-date-picker v-model="date" min="2016-06-15" max="2023-03-20"></v-date-picker>
                    <Timeline :config="config" v-if="date"></Timeline>
                    <Form v-if="date"></Form>
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
        config: {
            start: 8,
            end: 16,
            sesja: 45,
            przerwa: 15
        },
    }),
    components: {
        Timeline,
        Form
    }
};
</script>
