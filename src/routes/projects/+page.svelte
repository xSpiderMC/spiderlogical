<script lang="ts">
	import Card from '$lib/display/card.svelte';
	import adtracc from '$lib/assets/adtracc.png';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="flex justify-center mt-16">
	<div class="flex max-w-[75%] gap-8">
		<Card
			title="Ad-Tracc"
			bodyContent="Ad-Tracc allowed users to reward players on their minecraft server for advertising in the Minehut (a server hosting service) lobby. This project was originally closed source and sold as a service. It was later open sourced and eventually archived."
			imageSrc={adtracc}
		/>
	</div>
</div>
