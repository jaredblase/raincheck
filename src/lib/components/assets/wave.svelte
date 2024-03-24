<script lang="ts">
	import type { SVGAttributes } from 'svelte/elements'

	type $$Props = SVGAttributes<SVGElement>

	let className: $$Props['class'] = undefined
	export { className as class }
</script>

<svg viewBox="0 0 568 679" fill="none" xmlns="http://www.w3.org/2000/svg" class={className}>
	<g filter="url(#filter0_i_4_40)">
		<path
			d="M213.551 537.407C219.468 601.379 155.219 637.469 172.933 699.165C201.127 797.359 400.878 806.793 474.551 750.368C603.571 651.552 573.829 498.728 533.399 444.123C478.53 370.016 377.569 388.825 358.651 271.879C339.732 154.933 431.369 138.598 379.127 50.2724C326.885 -38.0527 150.921 0.21756 121.272 86.2209C91.6233 172.224 211.423 199.223 186.41 271.879C159.578 349.818 27.2699 294.063 3.12607 372.899C-29.4652 479.317 203.291 426.471 213.551 537.407Z"
			fill="url(#paint0_radial_4_40)"
			fill-opacity="0.75"
		/>
	</g>
	<defs>
		<filter
			id="filter0_i_4_40"
			x="0"
			y="0"
			width="568"
			height="785"
			filterUnits="userSpaceOnUse"
			color-interpolation-filters="sRGB"
		>
			<feFlood flood-opacity="0" result="BackgroundImageFix" />
			<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset />
			<feGaussianBlur stdDeviation="15" />
			<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
			<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
			<feBlend mode="normal" in2="shape" result="effect1_innerShadow_4_40" />
		</filter>
		<radialGradient
			id="paint0_radial_4_40"
			cx="0"
			cy="0"
			r="1"
			gradientUnits="userSpaceOnUse"
			gradientTransform="translate(284 392.5) rotate(90) scale(392.5 284)"
		>
			<stop stop-color="#2F97C1" />
			<stop offset="1" stop-color="#15E6CD" />
		</radialGradient>
	</defs>
</svg>
