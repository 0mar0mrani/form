export default function TextInput({ placeholderText, onInput, message}) {
	return (
		<div>
			<input
				type="text" 
				placeholder={placeholderText} 
				className="form__input" 
				onInput={onInput}
			/>

			<div 
				className="form__input-message">{message}
			</div>
		</div>
	)
}