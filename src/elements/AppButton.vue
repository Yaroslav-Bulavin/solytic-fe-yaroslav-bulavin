<template>
  <button class="app-button" :type="type" :disabled="disabled">
    <slot/>
  </button>
</template>

<script setup lang="ts">
import { defineProps, toRef, withDefaults } from 'vue';

export type AppButtonProps = {
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
}

const props = withDefaults(defineProps<AppButtonProps>(), {
  type: 'button',
  disabled: false,
});
</script>
