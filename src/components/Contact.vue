<template>
    <v-card class="contact-card">
        <v-col class="contact-col">
            <v-row>
                <v-btn
                    x-large
                    block
                    outlined
                    tile
                    class="contact-btn"
                    href="https://www.google.pl/maps/place/Krzysztofa+Kamila+Baczy%C5%84skiego+3,+58-260+Bielawa/@50.6781326,16.6262583,17z/data=!4m5!3m4!1s0x470e37aa04910289:0x67119633343ebe90!8m2!3d50.6781326!4d16.628447?hl=pl"
                >
                    <v-icon>mdi-map-marker</v-icon>
                    <span>{{ "Bielawa, Baczyńskiego 3/22" }}</span>
                </v-btn>
            </v-row>
            <v-row>
                <v-btn
                    x-large
                    block
                    outlined
                    tile
                    class="contact-btn"
                    href="mailto:szczypka.bartosz@gmail.com"
                >
                    <v-icon>mdi-email-edit-outline</v-icon>
                    <span>{{ "szczypka.bartosz@gmail.com" }}</span>
                </v-btn>
            </v-row>
            <v-row>
                <v-btn x-large block outlined tile class="contact-btn" href="tel:796-604-420">
                    <v-icon>mdi-phone</v-icon>
                    <span>{{ "+48796604420" }}</span>
                </v-btn>
            </v-row>
        </v-col>
    </v-card>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
.contact-card {
    padding: 2rem;
    @media #{map-get($display-breakpoints, 'sm-and-down')} {
        padding: 1rem 0.25rem;
    }
    .contact-col {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
.contact-btn {
    max-width: 100% !important;
    span {
        max-width: 100% !important;
        padding: 0.75rem;
        font-size: clamp(0.5rem, 2.5vw, 1.25rem);
    }
}
</style>