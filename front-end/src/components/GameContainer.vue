<template>

</template>

<script>
import flagService from "../services/FlagService.js";

export default {
    data() {
        return {
            flag: {
                countryId: "",
                name: "",
                code: "",
                capital: "",
                continent: "",
                flagImage: ""
            }
        }
    },

    created() {
        flagService.get().then( (response) => {
            this.flag = response.data;
        });
    }
}
</script>

<style>

</style>