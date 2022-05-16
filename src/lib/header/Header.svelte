<script>
	import ThemeChanger from "./ThemeChanger.svelte";
</script>

<header>
	<nav class="navbar shadow-lg bg-neutral text-neutral-content">
		<div class="flex-1 px-2 mx-2 max-w-min">
			<span class="text-lg font-bold"> Spiderlogical </span>
		</div>
		<div class="flex-1 px-2 mx-2">
			<div class="items-stretch hidden lg:flex">
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/">Home</a>
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/projects">Projects</a>
				<a class="btn btn-ghost btn-sm rounded-btn" sveltekit:prefetch href="/about">About</a>
			</div>
		</div>
		<div class="flex-none mr-2 max-w-min">
			<ThemeChanger />
		</div>
	</nav>
</header>
