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
                    <td>
                        <span class="original-price">{{ originalPrice }}</span>
                        <span class="final-price">&nbsp;{{ finalPrice }} PLN</span>
                        <span v-if="originalPrice">&nbsp;({{ discount * 100 }}% discount)</span>
                    </td>
                </tr>
            </tbody>
        </v-simple-table>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="$emit('clearForm')" block>Ok</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        date: String,
        formData: Object,
        chosenHours: Array,
        config: Object
    },
    data() {
        return {
            discount: (20 / 100),
            discountThreshold: 300
        }
    },
    computed: {
        chosenHoursToString() {
            return this.chosenHours.map(obj => `${obj.start.hour}:${obj.start.minutes} - ${obj.end.hour}:${obj.end.minutes}`).join(", ")
        },
        total() {
            return this.chosenHours.length * this.config.price
        },
        originalPrice() {
            return this.total > this.discountThreshold ? this.total : null;
        },
        finalPrice() {
            return this.total > this.discountThreshold ?
                this.total - (this.total * this.discount) :
                this.total;
        },
    },

}
</script>

<style lang="scss" scoped>
.original-price {
    text-decoration: line-through;
    text-decoration-color: black;
    color: red;
    font-size: small;
    font-style: italic;
}
.final-price {
    font-size: larger;
}
</style>