<template>
    <v-form v-model="valid" ref="vform">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="formData.firstname"
                        :rules="nameRules"
                        :counter="20"
                        label="First name"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="formData.lastname"
                        :rules="nameRules"
                        :counter="20"
                        label="Last name"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="formData.phoneNumber"
                        :rules="phoneRules"
                        :counter="12"
                        type="number"
                        label="Phone Number"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="formData.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-btn @click="clear" color="secondary">clear</v-btn>
            <v-btn @click="submit" color="accent" :disabled="!valid">submit</v-btn>
        </v-container>
    </v-form>
</template>
<script>
export default {
    data: () => ({
        valid: false,
        formData: {
            phoneNumber: '',
            firstname: '',
            lastname: '',
            email: '',
        },
        //w walidacji sprawdzic czy element istnieje && aby zadzialal refs.form.reset()
        nameRules: [
            v => !!v || 'Name is required',
            v => !!v && v.length <= 20 || 'Name must be less than 20 characters',
        ],
        phoneRules: [
            v => !!v || "Number is required",
            v => !!v && v.length <= 12 || "Number must be less than 12 characters",
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => !!v && /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        clear() {
            this.$refs.vform.reset()
            this.$refs.vform.resetValidation()
        },
        submit() {
            this.dialog = true
            this.$emit("submitFormData", { ...this.formData })//spread syntax
        }
    }
}
</script>