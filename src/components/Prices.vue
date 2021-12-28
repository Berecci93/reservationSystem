<template>
    <v-container>
        <v-simple-table dark>
            <tbody>
                <tr>
                    <td>
                        <v-icon class="mr-3">mdi-cash-100</v-icon>
                        {{ "Price for the session" }}
                    </td>
                    <td>{{ `${config.price} PLN` }}</td>
                </tr>
                <tr>
                    <td>
                        <v-icon class="mr-3">mdi-clock-time-nine-outline</v-icon>
                        {{ "Session length" }}
                    </td>
                    <td>{{ `${config.sessionLength} min ` }}</td>
                </tr>
                <tr>
                    <td>
                        <v-icon class="mr-3">mdi-information-outline</v-icon>
                        {{ "Discount" }}
                    </td>
                    <td>{{ "From 300 PLN" }}</td>
                </tr>
            </tbody>
        </v-simple-table>
        <template></template>
    </v-container>
</template>

<script>
export default {
    props: {
        config: Object
    }
}
</script>

<style lang="scss" scoped>
</style>