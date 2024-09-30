<script setup lang="ts">
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const from = ref("");
const to = ref("");
const error = ref("");
const jsonResponse = ref<string | null>(null);

const fetchItineraries = async () => {
  try {
    const response = await fetch("https://api-backend/plan");
    const data = await response.json();
    console.log(data);

    if (data.error) {
      error.value = data.error;
      jsonResponse.value = null;
    } else {
      jsonResponse.value = JSON.stringify(data, null, 1);
      error.value = "";
    }
  } catch (err) {
    error.value =
      "Une erreur est survenue lors de la récupération des itinéraires.";
  }
};
</script>

<template>
  <div class="mt-10 max-w-screen-2xl w-full">
    <form
      class="px-6 flex flex-col items-center"
      @submit.prevent="fetchItineraries"
    >
      <div class="mb-2 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3">
        <Label for="from">Point de départ</Label>
        <Input
          v-model="from"
          id="from"
          type="text"
          placeholder="Point de départ"
        />
      </div>
      <div class="mb-2 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3">
        <Label for="to">Point d'arrivée</Label>
        <Input v-model="to" id="to" type="text" placeholder="Point d'arrivée" />
      </div>
      <Button
        type="submit"
        class="form-button mb-2 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3"
        >Rechercher les itinéraires</Button
      >
    </form>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="jsonResponse">{{ jsonResponse }}</div>
  </div>
</template>
