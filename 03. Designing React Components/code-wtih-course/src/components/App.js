import Layout from './Layout'
import Header from "./Header";
import Speakers from "./Speakers";

const App = () => {

	return (
		<Layout startingTheme="light">
			<div>
				<Header
					// theme={theme}
				/>
				<Speakers
					// theme={theme}
					// setTheme={setTheme}f
				/>
			</div>
		</Layout>

	)
}

export default App;

