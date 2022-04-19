import Layout from './Layout'
import Header from "./Header";
import Speakers from "./Speakers";
import {AuthProvider} from "../contexts/AuthContext";

const App = () => {

	return (
		<AuthProvider initialLoggedInUser="Tomasz">
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
		</AuthProvider>
	)
}

export default App;
