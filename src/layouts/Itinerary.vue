<script setup lang="ts">
import { ref } from "vue";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/toast/use-toast";
import Toaster from "@/components/ui/toast/Toaster.vue";
import { Loader2 } from "lucide-vue-next";

const { toast } = useToast();

const from = ref("");
const to = ref("");
const error = ref("");
const jsonResponse = ref<string | null>(null);
const loading = ref(false);

const fetchItineraries = async () => {
  loading.value = true;
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await response.json();
    console.log(data);

    if (data.error) {
      error.value = data.error;
      jsonResponse.value = null;
      toast({
        title: "Oups !",
        description:
          "Une erreur est survenue lors de la récupération des itinéraires. Veuillez réessayer.",
      });
    } else {
      jsonResponse.value = JSON.stringify(data, null, 1);
      error.value = "";
    }
  } catch (err) {
    error.value = "An error occured while fetching itineraries";
    toast({
      title: "Oups !",
      description:
        "Une erreur est survenue lors de la récupération des itinéraires. Veuillez réessayer.",
    });
  } finally {
    loading.value = false;
  }
};

// This function return a toast with a simulated error (just for displaying what user will see)
const simulateError = () => {
  loading.value = true;
  setTimeout(() => {
    error.value = "Simulated error triggered!";
    toast({
      title: "Oups !",
      description:
        "Une erreur est survenue lors de la récupération des itinéraires. Veuillez réessayer.",
    });
    loading.value = false;
  }, 1000);
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
        data-testid="search-button"
        class="form-button mb-2 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3"
        >Rechercher les itinéraires
        <Loader2 class="w-4 h-4 ml-2 animate-spin" v-if="loading"
      /></Button>
      <Button
        @click.prevent="simulateError"
        variant="destructive"
        class="form-button mb-2 w-full 2xl:w-1/3 xl:w-1/3 lg:w-1/3"
        >Simuler une erreur
        <Loader2 class="w-4 h-4 ml-2 animate-spin" v-if="loading"
      /></Button>
    </form>

    <div v-if="error" class="error text-center mt-4">
      <Toaster />
    </div>

    <div v-if="jsonResponse">{{ jsonResponse }}</div>
  </div>
</template>
