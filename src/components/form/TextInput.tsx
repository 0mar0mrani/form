import { React } from 'react'

export default function TextInput({name, stateName, stateValue, placeholderText, onChange, isValid, errorMessage}) {
	return (
		<div className="form__text">
			<label 
				htmlFor={name} 
				className="form__text-header">
				{name}
			</label>

			<input
				value={stateValue}
				type="text" 
				id={name} 
				placeholder={placeholderText} 
				className={`form__input form__input-text ${isValid ? '' : 'form__input-text--invalid'}`} 
				onChange={onChange}
				data-state-name={stateName}
			/>

			<div className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
				{errorMessage}
			</div>
		</div>
	)
}