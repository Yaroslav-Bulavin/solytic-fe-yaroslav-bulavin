<template>
  <div class="container">
    <div class="login">
      <div class="login__inner">
        <h1 class="login__title">Login</h1>

        <form @submit="onSubmit">
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
import AppInput from '@/elements/AppInput.vue';
import AppPasswordInput from '@/elements/AppPasswordInput.vue';
import AppButton from '@/elements/AppButton.vue';
import { computed } from 'vue';
import { useMutation } from '@vue/apollo-composable';
import { LOGIN_USER } from '@/api/mutations';
import { LOGIN_SCHEMA } from '@/schema/login.schema';

const { handleSubmit } = useForm({
  validationSchema: LOGIN_SCHEMA,
});

const { mutate: loginUser } = useMutation(LOGIN_USER);

const onSubmit = handleSubmit(async (values) => {
  const { username, password } = values;

  try {
    const res = await loginUser({
      email: username,
      password,
    });
    // eslint-disable-next-line no-alert
    alert(`Success! User ID: ${res?.data.user.id}`);
  } catch (e) {
    // eslint-disable-next-line no-alert
    alert('Oops! User does not exist');
  }
});

const isDirty = useIsFormDirty();
const isValid = useIsFormValid();

const isDisabled = computed(() => !isDirty.value || !isValid.value);

</script>
