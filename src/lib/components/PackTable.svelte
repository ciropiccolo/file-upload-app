<script lang="ts">
  import type { DataModel } from "$lib/models/dataModel";

  let { uploads }: { uploads: DataModel[] } = $props();
  let mimeType: string | null = $state("");
  let filenameUrl: string = $state("");
  const view = async (filename: string) => {

    const res = await fetch("https://mypoccpack.s3.eu-central-1.amazonaws.com/" + filename, { method: "HEAD" });
    filenameUrl = "https://mypoccpack.s3.eu-central-1.amazonaws.com/" + filename;
    mimeType = res.headers.get("Content-Type");


  };
</script>
<table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
  <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
  <tr>
    <th class="px-6 py-3" scope="col">Title</th>
    <th class=" py-3" scope="col">Category</th>
    <th class=" py-3" scope="col">Language</th>
    <th class=" py-3" scope="col">Provider</th>
    <th class="py-3" scope="col">Roles</th>
    <th class=" py-3" scope="col">File preview</th>
    <th class=" py-3" scope="col">Download</th>
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
        <td class="me-3">
          <button onclick={()=>{
           view(u.filename)
          }}>View
          </button>

        </td>
        <td class="me-3">
          <a href={`https://mypoccpack.s3.eu-central-1.amazonaws.com/${u.filename}`} target="_blank">Download</a>
        </td>
      </tr>
    {/each}
  {/if}
  </tbody>
</table>
{#if mimeType }
  <div aria-labelledby="dialog-title" aria-modal="true" class="relative z-10 " role="dialog">
    <div aria-hidden="true" class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>

    <div class="flex min-h-full justify-center  text-center sm:items-center sm:p-0">
      <div
        class="relative transform overflow-hidden rounded-lg bg-white ">
        {#if mimeType.startsWith('image/')}
          <img src={filenameUrl} alt="Image"
               class="max-w-full h-auto" />
        {:else if mimeType === 'application/pdf'}
          <iframe src={filenameUrl} class="w-full h-[80vh]" />
        {:else if mimeType.startsWith('video/')}
          <video controls class="w-full">
            <source src={filenameUrl} type={mimeType} />
            Your browsed does not support video
          </video>
        {:else}
          <a href={filenameUrl} target="_blank"
             class="text-blue-600 underline">Open file</a>
        {/if}
        <button
          class="mt-3 pt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs  ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onclick={()=>mimeType=null}
          type="button">
          close
        </button>
      </div>
    </div>
  </div>

{/if}
