import Button from "../components/buttons/Button/Button.jsx";
import css from "./style.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Button className={css.btn} kind="a" />
		</div>
	);
}
