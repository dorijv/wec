<template>
    <div>
        <flip-countdown deadline="2023-09-08 00:00:00" :showSeconds="false"></flip-countdown>
    </div>
</template>

<script>
    import FlipCountdown from 'vue2-flip-countdown'

    export default {
        components: { FlipCountdown }
    }
</script>

<style>
.flip-card__top, .flip-card__bottom, .flip-card__back-bottom, .flip-card__back::before, .flip-card__back::after {
    color: #9e0c02 !important; /* Dark-Red */
    background: #030303 !important; /* Dark-Black */
}
</style>