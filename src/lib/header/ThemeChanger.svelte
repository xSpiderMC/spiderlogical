<script lang="ts">
	import { onMount } from "svelte";
	import { themeChange } from "theme-change";

	onMount(() => {
		themeChange(false);
	});
</script>

<div class="dropdown dropdown-end">
	<label for="themeDropdown" tabindex="0" class="btn btn-ghost rounded-btn">
		<div class="inline-flex gap-1 items-center">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-current" viewBox="0 0 32 32"
				><path
					d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM15 29V19h2v10h-2zm13.58-5.7a6 6 0 0 1-5.28 5.28c-1.43.16-2.86.26-4.3.33V19a2 2 0 0 0-2-2v-2h7a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-1a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h1v3h-7a2 2 0 0 0-2 2v2a2 2 0 0 0-2 2v9.91a68.52 68.52 0 0 1-4.3-.33 6 6 0 0 1-5.28-5.28 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a63.65 63.65 0 0 1 14.6 0 6 6 0 0 1 5.28 5.28 63.65 63.65 0 0 1 0 14.6zM21 10H11V8h10z"
				/></svg
			>
			Theme
			<svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-4 w-4" viewBox="0 0 24 24"
				><path
					d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
				/></svg
			>
		</div>
	</label>
	<ul
		tabindex="0"
		class="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-2"
		id="themeDropdown"
	>
		<li class="text-base-content">
			<a data-set-theme="halloween" data-act-class="active">Halloween</a>
		</li>
		<li class="text-base-content"><a data-set-theme="dark" data-act-class="active">Dark</a></li>
		<li class="text-base-content"><a data-set-theme="light" data-act-class="active">Light</a></li>
	</ul>
</div>
