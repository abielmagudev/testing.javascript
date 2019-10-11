<template>
    <div>
        <h2>Photo #{{ photo.id}} / {{ photo.name }}</h2>
    </div>
</template>

<script>
export default {
    name: 'photo',
    props: ['info'],
    computed: {
        photo () {
            if ( typeof this.info === 'object')
                return this.info

            return {
                id: 0,
                name: 'nameless'
            }
        }
    }
}
</script>