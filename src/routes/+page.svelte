<script lang="ts">
  import { onMount } from "svelte";
  import type { DataModel } from "$lib/models/dataModel";
  import PackTable from "$lib/components/PackTable.svelte";
  import PackModal from "$lib/components/PackModal.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  import { fade } from "svelte/transition";


  let data: Partial<DataModel> = $state({});
  let uploads: DataModel[] = $state([]);

  async function loadUploads() {
    const res = await fetch("/api/files");
    uploads = await res.json();
  }

  let isOpen = $state(false);
  let success = $state(false);

  $effect(() => {
    if (success) {
      setTimeout(() => {
        success = false;
      }, 2000);
    }
  });

  onMount(loadUploads);
</script>

<div class="mx-auto w-5/6 shadow-md mt-5 p-5 rounded-2xl">
  <Tabs bind:isOpen {success}></Tabs>
  {#if isOpen}
    <PackModal bind:data loadFunction={loadUploads} bind:isOpen bind:success />
  {/if}
  <div class="relative overflow-x-auto text-center">
    <PackTable {uploads} />
  </div>
</div>

