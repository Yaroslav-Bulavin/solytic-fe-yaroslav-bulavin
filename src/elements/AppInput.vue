<template>
  <div class="app-input">
    <label class='app-input__label' :for="name">{{ label }}</label>

    <input
      class="app-input__input"
      :class="{ 'has-error': !!errorMessage }"
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
import { toRef, defineProps, withDefaults } from 'vue';
import { useField } from 'vee-validate';

export type AppInputProps = {
  type?: HTMLInputElement['type'];
  value?: string;
  name: string;
  label: string;
  placeholder: string;
}

const props = withDefaults(defineProps<AppInputProps>(), {
  type: 'text',
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
} = useField(name, undefined, {
  initialValue: props.value,
});
</script>
