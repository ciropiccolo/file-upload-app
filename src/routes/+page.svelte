<script lang="ts">
  import { onMount } from 'svelte';
  import type {DataModel} from "$lib/models/dataModel";
  import PackTable from "$lib/components/PackTable.svelte";
  import PackModal from "$lib/components/PackModal.svelte";
  import Tabs from "$lib/components/Tabs.svelte";
  import { fade } from "svelte/transition";


  let data: Partial<DataModel> = $state({})
  let uploads: DataModel[] = $state([]);

  async function loadUploads() {
    const res = await fetch('/api/files');
    uploads = await res.json();
  }
  let isOpen = $state(false);
  let success = $state(false);

  $effect(()=>{
    if (success) {
      setTimeout(() => {
        success = false;
      }, 3000);
    }
  })

  onMount(loadUploads);
</script>

<div class="mx-auto w-5/6 shadow-md mt-5 p-5 rounded-2xl">
  {#if success}
  <div out:fade class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
    <div class="flex align-bottom ">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="0 0 40 40">
      <path fill="#bae0bd" d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path><path fill="#5e9c76" d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"></path><path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3" d="M11.2,20.1l5.8,5.8l13.2-13.2"></path>
    </svg>
    <span class="ms-3 align-middle">Resource updated successfully</span>
    </div>
  </div>
    {/if}
  <Tabs bind:isOpen></Tabs>
    {#if isOpen}
    <PackModal bind:data loadFunction={loadUploads} bind:isOpen bind:success></PackModal>
      {/if}
  <div class="relative overflow-x-auto text-center">
  <PackTable {uploads}></PackTable>
</div>
</div>

