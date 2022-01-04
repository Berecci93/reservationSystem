<template>
    <v-form v-model="valid" ref="vform">
        <v-container>
            <v-row>
                <v-col>
                    <v-text-field
                        autocomplete="false"
                        v-model="formData.firstname"
                        :rules="nameRules"
                        :counter="50"
                        label="First name"
                        required
                    ></v-text-field>

                    <v-text-field
                        autocomplete="false"
                        v-model="formData.lastname"
                        :rules="nameRules"
                        :counter="50"
                        label="Last name"
                        required
                    ></v-text-field>

                    <v-text-field
                        autocomplete="false"
                        v-model="formData.phoneNumber"
                        :rules="phoneRules"
                        :counter="12"
                        type="number"
                        label="Phone Number"
                        required
                    ></v-text-field>

                    <v-text-field
                        autocomplete="false"
                        v-model="formData.email"
                        :rules="emailRules"
                        label="E-mail"
                        type="email"
                        required
                    ></v-text-field>
                    <v-textarea
                        v-model="formData.userComment"
                        label="Do you want to tell us something? Leave you comment here"
                        name="input-7-1"
                        solo
                    ></v-textarea>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-btn @click="clear" color="error" block>clear</v-btn>
                </v-col>
                <v-col>
                    <v-btn @click="submit" color="success" :disabled="!valid" block>submit</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>
<script>
export default {
    name: "Form",
    data: () => ({
        valid: false,
        formData: {
            phoneNumber: '',
            firstname: '',
            lastname: '',
            email: '',
            userComment: '',
        },
        //w walidacji sprawdzic czy element istnieje && aby zadzialal refs.form.reset()
        nameRules: [
            v => !!v || 'Name is required',
            v => !!v && v.length <= 50 || 'Name must be less than 50 characters',
        ],
        phoneRules: [
            v => !!v || "Number is required",
            v => !!v && v.length <= 12 || "Number must be less than 12 characters",
            v => !!v && v.length >= 9 || "Number must be greater than 8 characters"
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