<script setup>
import {useRouter} from "vue-router";
import {Topbar, Footer} from "./components";

const router = useRouter();

function onTopbarAction(event){
  switch(event.action){
    case "signIn" : router.push("/auth/signin");
    break;
    case "signUp" : router.push("/auth/signUp");
    break;
  }
}

</script>


<template>
  <!-- topbar -->
  <Topbar
    @topbar:action="onTopbarAction"
  />

  <!-- content -->
  <RouterView />

  <!-- footer -->
  <Footer />
</template>


<style scoped>
</style>
