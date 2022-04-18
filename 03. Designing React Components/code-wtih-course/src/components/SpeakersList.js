import Speaker from "./Speaker";
import ReactPlaceHolder from "react-placeholder";
import useRequestDelay, { REQUEST_STATUS } from "../hooks/useRequestDelay";
import { data } from "../../SpeakerData";
import CircleLoader from "react-spinners/CircleLoader";

function SpeakersList({ showSessions }) {
	const {
		data: speakersData,
		requestStatus,
		error,
		updateRecord,
	} = useRequestDelay(2000, data);

	if (requestStatus === REQUEST_STATUS.FAILURE) {
		return (
			<div className="text-danger">
				ERROR: <b>loading Speaker Data Failed {error}</b>
			</div>
		);
	}

	//if (isLoading === true) return <div>Loading...</div>

	return (
		<div className="container speakers-list d-flex  justify-content-center">
			{/*<ReactPlaceHolder*/}
			{/*	type="media"*/}
			{/*	rows={15}*/}
			{/*	className="speakerslist-placeholder"*/}
			{/*	ready={requestStatus === REQUEST_STATUS.SUCCESS}*/}
			{/*>*/}


			{requestStatus === "loading" ?
				<CircleLoader size={150} color="#51b5b1"/>
				:
				<div className="row">
					{speakersData.map(function (speaker) {
						return (
							<Speaker
								key={speaker.id}
								speaker={speaker}
								showSessions={showSessions}
								onFavoriteToggle={(doneCallback) => {
									updateRecord({
										...speaker,
										favorite: !speaker.favorite,
									}, doneCallback);
								}}
							/>
						);
					})}
				</div>
			}


			{/*</ReactPlaceHolder>*/}
				</div>





	);
}

export default SpeakersList;
