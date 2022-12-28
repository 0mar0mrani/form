export default function SelectInput({ name, stateValue, onChange, isValid, options}) {
	return (
		<div className="form__radio">
			<div htmlFor="" className="form__radio-header">{ name }</div>

			<div className={`form__radio-container ${isValid ? '' : 'form__radio-container--invalid'}`}>
				{options.map((option) => (
					<div key={option.value}>
						<label htmlFor={option.value}> {option.label} </label>

						<input
							type="radio" 
							value={option.value} 
							id={option.value} 
							name="gender" 
							onChange={onChange}
							checked={option.value === stateValue ? true : false}
						/>	
					</div>
				))}
			</div>

			<div 
				className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
					Feil: Velg et alternativ.
			</div>
		</div>
	)
}