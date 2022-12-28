export default function SelectInput({name, stateValue, onChange, isValid, options}) {
	return (
		<div className="form__select">
			<label htmlFor="country" className="form__select-header" >{ name }</label>

			<select 
			name="country"  
			id="country" 
			onChange={onChange} 
			value={stateValue} 
			className={`form__input-select ${isValid ? '' : 'form__input-select--invalid'}`}>

				<option value="" disabled>Velg et alternativ</option>

				{options.map((option) => (
					<option key={option.value}> {option.label} </option>
				))}
			</select>

			<div 
				className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
					Velg et alternativ.
			</div>
		</div>
	)
}