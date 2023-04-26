<template>
  <div class="container">
    <div class="login">
      <div class="login__inner">
        <h1 class="login__title">Login</h1>

        <form
          @submit="onSubmit"
        >
          <AppInput
            name="name"
            type="text"
            label="Full Name"
            placeholder="Your Name"
          />

          <AppPasswordInput
            name="password"
            label="Password"
            placeholder="Your password"
          />

          <AppButton type="submit" :disabled="!isValid">Submit</AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Form, useForm } from 'vee-validate';
import * as Yup from 'yup';

import AppInput from '@/elements/AppInput.vue';
import AppButton from '@/elements/AppButton.vue';
import AppPasswordInput from '@/elements/AppPasswordInput.vue';
import { computed, ref } from 'vue';

export default {
  components: {
    AppInput,
    AppButton,
    AppPasswordInput,
  },
  async setup() {
    const validationErrors = ref({});
    const schema = Yup.object().shape({
      name: Yup.string().required('Name is a required field').min(2),
      password: Yup.string().required('Password is a required field').min(8).max(20),
    });

    const { validate, handleSubmit } = useForm({
      validationSchema: schema,
    });

    const { errors } = await validate();

    validationErrors.value = errors;

    const isValid = computed(() => !!Object.keys(validationErrors).length);

    console.log(isValid);

    console.log(errors);

    const onSubmit = handleSubmit((values: any) => {
      console.log(values);
    });

    return { onSubmit, isValid };
  },
};

</script>
