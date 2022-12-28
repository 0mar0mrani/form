export default function Button({ name, clearMethod }) {
	return (
		<button
			className="form__button-secondary"
			onClick={clearMethod}>
			{name}
		</button>
	)
}