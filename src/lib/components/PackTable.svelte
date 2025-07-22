<script lang="ts">
  import type { DataModel } from "$lib/models/dataModel";

  let { uploads }: { uploads: DataModel[] } = $props();
</script>
<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
  <tr>
    <th class="px-6 py-3" scope="col">Title</th>
    <th class=" py-3" scope="col">Category</th>
    <th class=" py-3" scope="col">Language</th>
    <th class=" py-3" scope="col">Provider</th>
    <th class="py-3" scope="col">Roles</th>
    <th class=" py-3" scope="col">File</th>
  </tr>
  </thead>
  <tbody>
  {#if uploads.length === 0}
    <tr>
      <td class="text-center pt-5" colspan="6">No data avaiable</td>
    </tr>
  {:else}
    {#each uploads as u}
      <tr class="bg-white border-b border-gray-200">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  ">
          {u.title}</th>
        <td>{u.category}</td>
        <td>{u.language}</td>
        <td>{u.provider}</td>
        <td>
          {#each u.roles as item}
            <span
              class="me-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset">{item}</span>
          {/each}
        </td>
        <td><a href={`https://mypoccpack.s3.eu-central-1.amazonaws.com/${u.filename}`} target="_blank">View</a></td>
      </tr>
    {/each}
  {/if}
  </tbody>
</table>
