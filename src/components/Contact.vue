<template>
    <v-container>
        <v-row>
            <v-col class="mb-6 col">
                <v-icon x-large class="mr-3" @click="displayContact = 'location'">mdi-map-marker</v-icon>
                {{ "Bielawa, Baczyńskiego 3/22" }}
            </v-col>
        </v-row>
        <v-row>
            <v-col class="mb-6">
                <a class="link" href="mailto:szczypka.bartosz@gmail.com">
                    <v-icon x-large @click="dialog = true" class="mr-3">mdi-email-edit-outline</v-icon>
                    {{ "szczypka.bartosz@gmail.com" }}
                </a>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <a class="link" href="tel:796-604-420">
                    <v-icon x-large @click="displayContact = 'phone'" class="mr-3">mdi-phone</v-icon>
                    {{ "+48796604420" }}
                </a>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            displayContact: "",
        }
    }


}
</script>

<style lang="scss" scoped>
.col {
    border: solid 1px white;
    color: white !important;
}
.link {
    text-decoration: none;
    margin-bottom: 2rem;
    color: white;
}
</style>