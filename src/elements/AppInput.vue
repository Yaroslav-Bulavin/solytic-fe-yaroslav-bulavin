<template>
  <div
    class="app-input"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label class='app-input__label' :for="name">{{ label }}</label>

    <input
      class="app-input__input"
      :name="name"
      :id="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
    />

    <p class="app-input__message" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { toRef, defineProps } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const name = toRef(props, 'name');
const value = toRef(props, 'value');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: value,
});

console.log(inputValue);
console.log(errorMessage);
</script>

<style scoped>

</style>
