import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import {SpeakerFilterProvider} from "../contextx/SpeakerFilterContext";

const Speakers = () => {


	return(<SpeakerFilterProvider startingShowSessions={false}>
			<SpeakersToolbar
				// theme={theme}
				// setTheme={setTheme}
				// showSessions={showSessions}
				// setShowSessions={setShowSessions}
			/>
			<SpeakersList
				// showSessions={showSessions}
			/>
		</SpeakerFilterProvider>
	)
}

export default Speakers;
