export default function Button({ submitMethod, isDisabled }) {
	return (
		<button
			className={`form__button ${isDisabled ? 'form__button--disabled' : ''}`}
			onClick={submitMethod}>Submit me!
		</button>
	)
}