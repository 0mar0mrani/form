export default function SelectInput({onChange, isValid, options}) {
	return (
		<div>
			<label htmlFor="country">Velg land:</label>

			<select name="country"  id="country" onChange={onChange} defaultValue="">
				<option value="" disabled>Velg et alternativ</option>

				{options.map((option) => (
					<option key={option.value}> {option.label} </option>
				))}
			</select>

			<div 
				className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
					Feil: Velg et alternativ.
			</div>
		</div>
	)
}