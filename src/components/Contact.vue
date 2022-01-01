<template>
    <v-container>
        <v-row>
            <v-col class="col">
                <v-btn
                    block
                    outlined
                    tile
                    class="btn"
                    href="https://www.google.pl/maps/place/Krzysztofa+Kamila+Baczy%C5%84skiego+3,+58-260+Bielawa/@50.6781326,16.6262583,17z/data=!4m5!3m4!1s0x470e37aa04910289:0x67119633343ebe90!8m2!3d50.6781326!4d16.628447?hl=pl"
                >
                    <v-icon x-large @click="displayContact = 'location'">mdi-map-marker</v-icon>
                    <span class="span">{{ "Bielawa, Baczyńskiego 3/22" }}</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="col">
                <v-btn block outlined tile class="btn" href="mailto:szczypka.bartosz@gmail.com">
                    <v-icon x-large>mdi-email-edit-outline</v-icon>
                    <span class="span">{{ "szczypka.bartosz@gmail.com" }}</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="col">
                <v-btn block outlined tile class="btn" href="tel:796-604-420">
                    <v-icon x-large @click="displayContact = 'phone'">mdi-phone</v-icon>
                    <span class="span">{{ "+48796604420" }}</span>
                </v-btn>
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
.btn {
    margin: 1rem;
}
.span {
    padding: 1rem;
    font-size: clamp(1rem, 2.5vw, 2rem);
}
.col {
    margin: 1rem;
}
</style>