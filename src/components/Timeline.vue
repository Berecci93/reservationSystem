<template>
    <v-timeline dense>
        <v-timeline-item v-for="(item, i) in liczbaSesji" :key="i">
            <v-card>
                <div class="py-1 pl-4 pr-2">
                    {{ "od " + item.start.hour + ":" + item.start.minutes + " do " + item.end.hour + ":" + item.end.minutes }}
                    <v-btn
                        icon
                        class="ml-1"
                        @click="$emit('hourChosen', { startHour: item.start.hour, startMinute: item.start.minutes, endHour: item.end.hour, endMinute: item.end.minutes })"
                    >
                        <v-icon color="primary">mdi-check-circle</v-icon>
                    </v-btn>
                </div>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
export default {
    name: 'Timeline',
    data() {
        return {
            liczbaSesji: [],
        }
    },
    props: {
        config: Object
    },
    methods: {
        format(number) {
            return String(number).padStart(2, "0")

        },
        policz(czasSesji, przerwa, start, end) {
            let startMin = start * 60
            let endMin = end * 60

            for (let i = startMin; i + czasSesji <= endMin; i += czasSesji + przerwa) {
                let endOfSession = i + czasSesji
                this.liczbaSesji.push({
                    start: {
                        hour: this.format(Math.floor(i / 60)),
                        minutes: this.format(i % 60)
                    },
                    end: {
                        hour: this.format(Math.floor(endOfSession / 60)),
                        minutes: this.format(endOfSession % 60)
                    }
                })
            }
            return this.liczbaSesji
        },
    },
    created() {
        this.policz(this.config.sesja, this.config.przerwa, this.config.start, this.config.end)
    },
}
</script>

<style lang="scss" scoped>
</style>