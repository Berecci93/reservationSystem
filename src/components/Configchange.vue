<template>
    <v-form ref="form" v-model="valid" lazy-validation>
        <v-card-text>
            <b>Config</b>
            <v-text-field
                label="Start of session (in hours) "
                placeholder="Start (in hours)"
                type="number"
                v-model.number="configData.start"
                :rules="startRules"
                required
            ></v-text-field>
            <v-text-field
                label="End of session (in hours)"
                placeholder="End (in hours)"
                type="number"
                v-model.number="configData.end"
                :rules="endRules"
                required
            ></v-text-field>
            <v-text-field
                label="Break length (in minutes)"
                placeholder="Break (in minutes)"
                type="number"
                v-model.number="configData.breakLength"
                :rules="breakLengthRules"
                required
            ></v-text-field>
            <v-text-field
                label="Session length (in minutes)"
                placeholder="Session (in minutes)"
                type="number"
                v-model.number="configData.sessionLength"
                :rules="sessionRules"
                required
            ></v-text-field>
            <v-btn class="mr-4" color="success" :disabled="!valid" @click="agree">Agree</v-btn>

            <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>
        </v-card-text>
    </v-form>
</template>
<script>
export default {
    name: 'Configchange',
    props: {
        configData: Object
    },
    data: () => ({
        valid: false,
        startRules: [
            v => !!v || 'Value is required',
            v => (v && v > 0 && v <= 24) || 'Value cannot be greater than 24',
        ],
        endRules: [
            v => !!v || 'Value is required',
            v => (v && v > 0 && v <= 24) || 'Value cannot be greater than 24',
        ],
        breakLengthRules: [
            v => !!v || 'Value is required',
            v => (v && v > 0 && v <= 120) || 'Value cannot be greater than 120',
        ],
        sessionRules: [
            v => !!v || 'Value is required',
            v => (v && v > 0 && v <= 300) || 'Value cannot be greater than 300',
        ],
    }),

    methods: {
        agree() {
            this.$emit("submitedConfigData", { ...this.configData })
        },
        reset() {
            this.$refs.form.reset()
        },
    },
}
</script>
<style lang="scss" scoped>
</style>
