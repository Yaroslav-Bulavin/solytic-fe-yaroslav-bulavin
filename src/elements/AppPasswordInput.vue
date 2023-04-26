<template>
  <div
    class="app-password-input"
    :class="{ 'has-error': !!errorMessage, success: meta.valid }"
  >
    <label class='app-password-input__label' :for="name">{{ label }}</label>

    <div class="app-password-input__container">
      <input
        class="app-password-input__input"
        :name="name"
        :id="name"
        :type="isShow ? 'text' : 'password'"
        :value="inputValue"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
      />

      <button
        class="app-password-input__button"
        @click.prevent="handleShow"
      >
        {{isShow ? 'Hide' : 'Show'}}
      </button>
    </div>

    <p class="app-password-input__message" v-show="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { toRef, defineProps, ref } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
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

const isShow = ref(false);
const name = toRef(props, 'name');
// const value = toRef(props, 'value');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});

const handleShow = () => {
  isShow.value = !isShow.value;
};

</script>
