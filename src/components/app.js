import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import clsx from 'clsx';
import Info from './Info';
import Buttons from './Buttons';
import Panels from './Panels';
import ThemeButton from './themebutton';

const App = () => {
	const [ theme, setTheme ] = useState(true)
	useEffect(() => {
		console.log(window.localStorage.getItem('theme'))
		const storageTheme = JSON.parse(window.localStorage.getItem('theme'))
		setTheme(storageTheme !== null ? storageTheme : true)
	}, [])
	return (
	<div className = {clsx(theme && 'darktheme', 'app')} id="app">
		<ThemeButton setValue = {(v) => {
			console.log(v)
			setTheme(v)
			window.localStorage.setItem('theme', v)
		}} value = {theme} />
		<div className = 'container'>
			<Info />
			<Buttons />
			<Panels />
		</div>
	</div>
	)
}


export default App;
