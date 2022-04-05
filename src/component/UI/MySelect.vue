<template>
    <select v-model="modelValue" @change="changeOption">
        <option disabled value="">Select from list</option>
        <option 
            v-for="option in options"
            :key="option.value"
            :value="option.value">
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: { type: String },
        options: {
            type: Array, default: () => []
        }
    },
    methods: {
        changeOption(event) {
            console.log(event);
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style scoped>
/* .input {
    width: 100%;
    border: 2px solid teal;
    margin-top: 15px;
    border: 2px solid teal;
    padding: 10px 15px;
} */
</style>