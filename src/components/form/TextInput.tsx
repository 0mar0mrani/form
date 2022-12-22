export default function TextInput({ placeholderText, onInput, isValid}) {
	return (
		<div>
			<input
				type="text" 
				placeholder={placeholderText} 
				className="form__input" 
				onInput={onInput}
			/>

			<div 
				className="form__input-message">
				{isValid ? '' : 'Feil: Fyll ut med bokstaver (inkludert mellomrom og bindestrek).'}
			</div>
		</div>
	)
}