<script lang="ts">
	import { useState } from '@/hooks/useState';
	let initialCount = 0;
	const [count, setCount] = useState<number>(initialCount);
	const handleClick = () => {
		setCount(count + 1);
	};
</script>

<div>
	<p>
		{count}
	</p>
	<button on:click={handleClick}> set State </button>
</div>
