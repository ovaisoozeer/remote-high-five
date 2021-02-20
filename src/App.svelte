<script>
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
</script>

<button on:click={handleClick}>
	State: {state}
</button>