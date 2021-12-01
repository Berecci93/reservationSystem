<template>
    <v-form v-model="valid">
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
            <v-btn @click="clear">clear</v-btn>
            <v-btn @click="submit" color="primary" :disabled="!valid">submit</v-btn>
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
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 20 || 'Name must be less than 20 characters',
        ],
        phoneRules: [
            v => !!v || "Number is required",
            v => v.length <= 12 || "Number must be less than 12 characters",
        ],
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        clear() {
            this.formData.firstname = ''
            this.formData.lastname = ''
            this.formData.phoneNumber = ''
            this.formData.email = ''
        },
        submit() {
            this.$emit("submitFormData", { ...this.formData })//spread syntax
        }
    }
}
</script>