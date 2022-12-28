export default function TextInput({name, stateValue, placeholderText, onChange, isValid}) {
	return (
		<div className="form__text">
			<label htmlFor={ name } className="form__text-header">{ name }</label>

			<input
				value={stateValue}
				type="text" 
				id={ name } 
				placeholder={ placeholderText } 
				className={`form__input form__input-text ${isValid ? '' : 'form__input-text--invalid'}`} 
				onChange={ onChange }
			/>

			<div 
				className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
					Fyll ut med bokstaver (inkludert mellomrom og bindestrek).
			</div>
		</div>
	)
}