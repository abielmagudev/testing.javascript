<template>
    <div>
        <h1>Gallery</h1>
        <photos-gallery />
        <hr>
        <button @click="home">Home</button>
        <button @click="prev">Prev</button>
        <button @click="next">Next</button>
    </div>
</template>

<script>
import PhotosGallery from '@/components/PhotosGallery'

export default {
    name: 'gallery',
    components: {
        PhotosGallery
    },
    methods: {
        home () {
            this.$router.push('/')
        },
        prev () {
            this.$router.go(-1)
        },
        next () {
            this.$router.go(1)
        }
    }
}
</script>