<script>
  let {isOpen = $bindable()} = $props()

</script>

  <div class="text-sm font-medium text-center border-b-2 text-gray-500 border-gray-200 flex justify-between">
    <ul class="flex flex-wrap -mb-px">
      <li class="me-2">
        <a href="./" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active " >All</a>
      </li>
      <li class="me-2">
        <a  aria-current="page" href="./" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Video</a>
      </li>
      <li class="me-2">
        <a href="./" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Documents</a>
      </li>
      <li class="me-2">
        <a href="./" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 ">Lessons</a>
      </li>

    </ul>
    <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
    <div class="flex my-3">
  <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md ">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
    </svg>
  </span>
      <input type="text" id="website-admin" class="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  " placeholder="Search">
    </div>
    <button class="my-3 bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" onclick={()=>isOpen = true} >
      Upload
    </button>
  </div>
