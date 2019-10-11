<template>
    <div>
        <router-link 
        v-for="(photo, index) of photos" 
        :to="{ name: 'gallery', params: {id: photo.id} }"
        :key="index">
            <a href="#" style="margin: 1rem">Photo {{ photo.id }}</a>
        </router-link> 
        <br>
        <photo :info="getPhoto( $route.params.id )" v-if="$route.params.id"></photo>
        <div v-else>
            <br>
        </div>
    </div>
</template>

<script>
// :to="1" = Take the current url, it need only string number
// :to="{ name: 'gallery', params: {id: photo.id} }" name-route, params-route

import Photo from '@/components/Photo'

export default {
    name: 'photos-gallery',
    data () {
        return {
            photos: [
                {id:1, name: 'beach'},
                {id:2, name: 'desert'},
                {id:3, name: 'mountain'},
                {id:4, name: 'sky'},
            ]
        }
    },
    methods: {
        getPhoto (id = null) {
            console.info(id)
            if( id === null )
                return this.photos.shift()

            return this.photos.find( (item) => item.id === id )
        }
    },
    components: {
        Photo
    }
}
</script>