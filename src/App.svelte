<script>
	let pusher;
	let state = 'Not ready';
	
	function handleClick() {
		switch (state)
		{
			case 'Not ready':
				state = 'Ready';
				break;
			case 'Ready':
				state = 'High five!';
				break;
		}
	}

	const initPusher = () => {
		pusher = new Pusher('f360fc8c9852a44893fb', {
			authTransport: 'jsonp',
			authEndpoint: 'https://admiring-goldberg-f67d32.netlify.app/.netlify/functions/authenticate'
		});
	}
</script>

<svelte:head>
	<script src="//js.pusher.com/7.0/pusher.min.js" on:load={initPusher}></script>
</svelte:head>

<button on:click={handleClick}>
	State: {state}
</button>