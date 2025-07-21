<script>
  import { fade } from "svelte/transition";

  let { isOpen = $bindable(), success } = $props();

</script>

<div class="text-sm font-medium text-center border-b-1 text-gray-500 border-gray-200 flex justify-between">
  <ul class="flex flex-wrap -mb-px">
    <li class="me-2">
      <a class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active " href="./">All</a>
    </li>
    <li class="me-2">
      <a aria-current="page"
         class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
         href="./">Video</a>
    </li>
    <li class="me-2">
      <a class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
         href="./">Documents</a>
    </li>
    <li class="me-2">
      <a class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "
         href="./">Lessons</a>
    </li>
  </ul>
  {#if success}
    <div out:fade class="flex my-3 px-4 bg-green-100 border border-green-400 text-green-700 py-2 rounded "
         role="alert">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="25" viewBox="0 0 40 40">
          <path fill="#bae0bd"
                d="M20,38.5C9.8,38.5,1.5,30.2,1.5,20S9.8,1.5,20,1.5S38.5,9.8,38.5,20S30.2,38.5,20,38.5z"></path>
          <path fill="#5e9c76"
                d="M20,2c9.9,0,18,8.1,18,18s-8.1,18-18,18S2,29.9,2,20S10.1,2,20,2 M20,1C9.5,1,1,9.5,1,20s8.5,19,19,19	s19-8.5,19-19S30.5,1,20,1L20,1z"></path>
          <path fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="3"
                d="M11.2,20.1l5.8,5.8l13.2-13.2"></path>
        </svg>
        <span class="ms-3 align-middle">Resource updated successfully</span>
      </div>
    </div>
  {/if}
  <div class="flex my-3">
    <span
      class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
    <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor"
         viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    </svg>
    </span>
    <input
      class=" me-3 rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  "
      id="website-admin"
      placeholder="Search"
      type="text">
    <button class=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            onclick={()=>isOpen = true}>
      Upload
    </button>
  </div>
</div>
