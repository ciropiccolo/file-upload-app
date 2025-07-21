<script lang="ts">
    import type {DataModel} from "$lib/models/dataModel.js";

    let { data = $bindable(), loadFunction, isOpen= $bindable(), success=$bindable() }: { data:Partial<DataModel>, loadFunction: Function, isOpen: boolean, success: boolean  } = $props()
    let file: File | null = null;

    async function handleSubmit() {
        const formData = new FormData();

        formData.append('title', data.title ?? '');
        formData.append('description', data.description?? '');
        formData.append('category', data.category?? '');
        formData.append('language', data.language?? '');
        formData.append('provider', data.provider?? '');
        formData.append('roles', JSON.stringify(data.roles));
        if (file) formData.append('file', file);

        await fetch('/api/upload', { method: 'POST', body: formData }).then(res => success = res.ok);
        await loadFunction();
        isOpen = false;
    }

</script>
        <form onsubmit={handleSubmit} class="w-full max-w-4xl mx-auto ">
            <div role="dialog" aria-modal="true" aria-labelledby="dialog-title" class="relative z-10 ">
                <div aria-hidden="true" class="fixed inset-0 bg-gray-500/75 transition-opacity"></div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div class="flex items-center space-x-4 justify-between">
                                  <div class="text-4xl/7 font-bold text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">Upload Resource</div>
                                    <button type="button" onclick={()=>isOpen=false} class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs  ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">X</button>
                                </div>
                                <div class="sm:col-span-4 mb-4">
                                    <div class="mt-2">
                                        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input bind:value={data.title} placeholder="Title" maxlength="200" required class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"   >
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-4 mb-4">
                                    <div class="mt-2">
                                        <div class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                                            <input bind:value={data.description} placeholder="Description" maxlength="1000" required class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"   >
                                        </div>
                                    </div>
                                </div>
                                <div class="sm:col-span-3 mb-4">
                                    <div class="mt-2 grid grid-cols-1">
                                        <select bind:value={data.language} placeholder="Select" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option>en</option>
                                            <option>it</option>
                                            <option>es</option>
                                        </select>
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="sm:col-span-3 mb-4">
                                    <div class="mt-2 grid grid-cols-1">
                                        <select bind:value={data.category} placeholder="Select" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option>Leadership</option>
                                            <option>Managing Complexity</option>
                                        </select>
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                <div class="sm:col-span-3 mb-4">
                                    <div class="mt-2 grid grid-cols-1">
                                        <select bind:value={data.provider} placeholder="Select" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option>Skilla</option>
                                            <option>Linkedin</option>
                                            <option>Pack</option>
                                            <option>Mentor</option>
                                        </select>
                                        <svg viewBox="0 0 16 16" fill="currentColor" data-slot="icon" aria-hidden="true" class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4">
                                            <path d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div class="sm:col-span-3 mb-4">
                                    <div class="mt-2 grid grid-cols-1">
                                        <select multiple bind:value={data.roles} placeholder="Select" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                            <option value="Mentor/Coach">Mentor/Coach</option>
                                            <option value="Mentee/Coachee">Mentee/Coachee</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="sm:col-span-3 mb-4">
                                    <div class="mt-2 grid grid-cols-1">
                                        <input type="file" required onchange={(e:Event) => file = e.target.files[0]} class="block w-full text-sm text-gray-500
    file:me-4 file:py-2 file:px-4
    border border-gray-300 rounded-md
    file:rounded-lg file:border-4
    file:text-sm file:font-semibold
    file:bg-blue-600 file:text-white
    hover:file:bg-blue-700
    file:disabled:opacity-50 file:disabled:pointer-events-none
    dark:text-neutral-500 dark:file:bg-blue-500
    dark:hover:file:bg-blue-400
  ">
                                    </div>
                                </div>
                            </div>
                            <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="submit" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
