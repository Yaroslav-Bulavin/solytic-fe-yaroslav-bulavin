<template>
  <div class="container">
    <div class="details">
      <div class="details__inner">
        <div class="flex-start details__text">
          <h2>User ID:</h2>
          <h2>{{user.id}}</h2>
        </div>
        <div class="flex-start details__text">
          <h2>User email:</h2>
          <h2>{{user.email}}</h2>
        </div>
        <div class="flex-start details__text">
          <h2>User password:</h2>
          <h2>{{user.password}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getNeededUser } from '@/utils/db';

const userId = sessionStorage.getItem('userId') as string;
const user = getNeededUser(userId);
</script>
