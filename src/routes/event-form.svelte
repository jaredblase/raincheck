<script lang="ts">
	import * as Form from '$lib/components/ui/form'
	import { Input } from '$lib/components/ui/input'
	import { eventSchema, type EventSchema } from '$lib/models/event'
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms'
	import { zodClient } from 'sveltekit-superforms/adapters'
	import { dateProxy } from 'sveltekit-superforms'
	import { Checkbox } from '$lib/components/ui/checkbox'
	import { Label } from '$lib/components/ui/label'
	import { slide } from 'svelte/transition'
	import { cn } from '$lib/utils'
	import type { HTMLFormAttributes } from 'svelte/elements'

	export let data: SuperValidated<Infer<EventSchema>>

	const form = superForm(data, {
		validators: zodClient(eventSchema),
	})

	const { form: formData, enhance, constraints } = form
	const startDateProxy = dateProxy(form, 'startDate', { format: 'date' })
	const endDateProxy = dateProxy(form, 'endDate', { format: 'date' })

	let minDate: string

	$: if (typeof $constraints.startDate?.min === 'string') {
		minDate = new Date($constraints.startDate?.min).toLocaleDateString('sv-SE') //  yyyy-mm-dd format
	}

	let includeTime = false
	let className: HTMLFormAttributes['class'] = undefined
	export { className as class }
</script>

<form method="POST" use:enhance class={cn('grid gap-x-4 gap-y-6 sm:grid-cols-2', className)}>
	<Form.Field {form} name="name" class="col-span-full">
		<Form.Control let:attrs>
			<Form.Label class="text-lg">Event Name</Form.Label>
			<Input {...attrs} bind:value={$formData.name} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="startDate">
		<Form.Control let:attrs>
			<Form.Label class="text-lg">Start Date</Form.Label>
			<Input type="date" {...attrs} bind:value={$startDateProxy} min={minDate} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<Form.Field {form} name="endDate">
		<Form.Control let:attrs>
			<Form.Label class="text-lg">End Date</Form.Label>
			<Input type="date" {...attrs} min={$startDateProxy} bind:value={$endDateProxy} />
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>
	<div class="col-span-full flex items-center gap-x-2">
		<Checkbox id="include-time" bind:checked={includeTime} />
		<Label for="include-time" class="text-lg">Include time?</Label>
	</div>
	<div class="col-span-full grid grid-cols-subgrid">
		{#if includeTime}
			<div
				class="col-span-full grid grid-cols-subgrid"
				transition:slide={{ duration: 400, axis: 'y' }}
			>
				<Form.Field {form} name="startTime">
					<Form.Control let:attrs>
						<Form.Label class="text-lg">Start Time</Form.Label>
						<Input type="time" {...attrs} bind:value={$formData.startTime} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="endTime">
					<Form.Control let:attrs>
						<Form.Label class="text-lg">End Time</Form.Label>
						<Input type="time" {...attrs} bind:value={$formData.endTime} />
					</Form.Control>
					<Form.FieldErrors />
				</Form.Field>
			</div>
		{/if}
	</div>
	<Form.Button class="col-span-full text-lg font-semibold">Create Event</Form.Button>
</form>
