<!-- <script lang="ts">
	import Typewriter from 'svelte-typewriter';
	import { fade } from 'svelte/transition';
	$: hobbyTextVisible = false; 
</script> -->

<svelte:head>
	<title>Home</title>
</svelte:head>


<!-- <div class="flex place-content-end">
	<div class="max-w-prose mockup-code min-w-[65ch] m-12">
		<Typewriter cascade interval={100} cursor={false} on:done={() => hobbyTextVisible = true}>
			<pre data-prefix="$">
				<code>./Spiderlogical</code>
			</pre>
		</Typewriter>
		{#if hobbyTextVisible}
		<div in:fade="{{duration: 300}}">
			<pre data-prefix=">>>">
				<code class="text-success">Student</code>	
			</pre> 
			<pre data-prefix=" ">
				<code class="text-success">Developer</code>
			</pre>
			<pre data-prefix="">
				<code>...</code>
			</pre>
		</div>
		{/if}
	</div>
  </div> -->

<div>
	<div class="hero min-h-[33.33vh] bg-neutral text-neutral-content">
		<div class="hero-content text-center">
		  <div class="max-w-md">
			<h1 class="text-7xl font-bold">Welcome!</h1>
			<p class="py-6 text-xl">This is my personal site to showcase my <a href="projects" class="link-primary link-hover">projects</a> and more!</p>
		  </div>
		</div>
	</div>
</div>