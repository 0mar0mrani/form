export default function TextInput({ placeholderText, onChange, isValid}) {
	return (
		<div>
			<input
				type="text" 
				placeholder={placeholderText} 
				className="form__input" 
				onChange={onChange}
			/>

			<div 
				className={`form__input-message ${isValid ? '' : 'form__input-message--visible'}`}>
					Feil: Fyll ut med bokstaver (inkludert mellomrom og bindestrek)
			</div>
		</div>
	)
}