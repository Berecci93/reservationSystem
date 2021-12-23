<template>
    <v-card>
        <v-simple-table>
            <tbody>
                <tr>
                    <td>
                        <i>{{ "Picked date" }}</i>
                    </td>
                    <td>{{ date }}</td>
                </tr>
                <tr>
                    <td>
                        <i>{{ "Hour" }}</i>
                    </td>
                    <td>{{ chosenHoursToString }}</td>
                </tr>
                <tr>
                    <td>
                        <i>{{ "Name" }}</i>
                    </td>
                    <td>{{ formData.lastname + ' ' + formData.firstname }}</td>
                </tr>
                <tr>
                    <td>
                        <i>{{ "Email" }}</i>
                    </td>
                    <td>{{ formData.email }}</td>
                </tr>
                <tr>
                    <td>
                        <i>{{ "Phone number" }}</i>
                    </td>
                    <td>{{ formData.phoneNumber }}</td>
                </tr>
                <tr v-if="formData.userComment">
                    <td>
                        <i>{{ "Comment" }}</i>
                    </td>
                    <td>{{ formData.userComment }}</td>
                </tr>
                <tr>
                    <td>
                        <i>{{ "Total amount" }}</i>
                    </td>
                    <td>{{ price }}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="$emit('clearForm')">Ok</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        date: String,
        formData: Object,
        chosenHours: Array,
        price: Number
    },
    computed: {
        chosenHoursToString() {
            return this.chosenHours.map(obj => `${obj.start.hour}:${obj.start.minutes} - ${obj.end.hour}:${obj.end.minutes}`).join(", ")
        }
    },

}
</script>

<style lang="scss" scoped>
</style>