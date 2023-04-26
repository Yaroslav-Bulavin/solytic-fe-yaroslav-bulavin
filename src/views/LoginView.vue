<template>
  <div class="container">
    <div class="login">
      <div class="login__inner">
        <h1 class="login__title">Login</h1>

        <form
          @submit="onSubmit"
        >
          <AppInput
            name="username"
            type="text"
            label="Username"
            placeholder="Your user email"
          />

          <AppPasswordInput
            name="password"
            label="Password"
            placeholder="Your password"
          />

          <AppButton type="submit" :disabled="isDisabled">Submit</AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useIsFormDirty, useIsFormValid, useForm,
} from 'vee-validate';
import * as Yup from 'yup';
import AppInput from '@/elements/AppInput.vue';
import AppPasswordInput from '@/elements/AppPasswordInput.vue';
import AppButton from '@/elements/AppButton.vue';
import { computed } from 'vue';

const schema = Yup.object().shape({
  username: Yup.string().email().required(),
  password: Yup.string().min(6).required(),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values: any) => {
  console.log(values);
});

const isDirty = useIsFormDirty();
const isValid = useIsFormValid();

const isDisabled = computed(() => !isDirty.value || !isValid.value);

</script>
