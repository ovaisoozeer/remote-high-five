<script>
	let pusher, channel;
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
		
		channel = pusher.subscribe('presence-remote-high-five');

		channel.bind('pusher:subscription_succeeded', function() {
			console.log('I\'ve subscribed to the presence channel');

			console.log('Now to tell others...');
			channel.trigger('client-subscribed', { ovais: 'joined' });
		});

		channel.bind('client-subscribed', function (data, metadata) {
			console.log(
				'I received ', data,
				'from user ', metadata.user_id,
				'with user info ', channel.members.get(metadata.user_id).info
			);
		});
	}
</script>

<svelte:head>
	<script src="//js.pusher.com/7.0/pusher.min.js" on:load={initPusher}></script>
</svelte:head>

<button on:click={handleClick}>
	State: {state}
</button>