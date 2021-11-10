<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="firstname"
                        :rules="nameRules"
                        :counter="20"
                        label="First name"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="lastname"
                        :rules="nameRules"
                        :counter="20"
                        label="Last name"
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field
                        v-model="phoneNumber"
                        :rules="phoneRules"
                        :counter="12"
                        type="number"
                        label="Phone Number"
                        required
                    ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
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
        phoneNumber: '',
        firstname: '',
        lastname: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 20 || 'Name must be less than 20 characters',
        ],
        phoneRules: [
            v => !!v || "Number is required",
            v => v.length <= 12 || "Number must be less than 12 characters",
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
    }),
    methods: {
        clear() {
            this.firstname = ''
            this.lastname = ''
            this.phoneNumber = ''
            this.email = ''
            this.$refs.observer.reset()
        },
        submit() {
            console.log(this.firstname, this.lastname, this.phoneNumber, this.email)
        }
    }
}
</script>