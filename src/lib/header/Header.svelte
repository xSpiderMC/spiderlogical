<script lang="ts">
	import { page } from "$app/stores";
</script>

<header>
	<nav class="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
		<div class="flex-1 px-2 mx-2">
			<span class="text-lg font-bold">
					Spiderlogical
				  </span>
		  </div> 
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden lg:flex">
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/">Home</a>
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/about">About</a>
			</div>
		</div>
	</nav>
</header>
