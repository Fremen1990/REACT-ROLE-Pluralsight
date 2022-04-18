import Speaker from "./Speaker";
import {data} from "../SpeakerData";
import {useEffect, useState} from "react";
import ReactPlaceHolder from "react-placeholder"

const SpeakersList = ({showSessions}) => {

	const [speakersData, setSpeakersData] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [hasError, setHasError] = useState(false)
	const [error, setError] = useState("");

	const delay = ms => new Promise((resolve) => setTimeout(resolve, ms))

	useEffect(() => {

		(async () => {
			try {
				await delay(2000)
				// throw "Had error!!"
				setIsLoading(false)
				await setSpeakersData(data)
			} catch (e) {
				setIsLoading(false);
				setHasError(true);
				setError(e)
			}

		})()

	}, []);


	const onFavoriteToggle = (id) => {
		const speakersRecPrevious = speakersData.find(function (rec) {
			return rec.id === id
		});
		const speakerRecUpdate = {
			...speakersRecPrevious,
			favorite: !speakersRecPrevious.favorite
		};

		const speakersDataNew = speakersData.map(function (rec) {
			return rec.id === id ? speakerRecUpdate : rec;
		});

		setSpeakersData(speakersDataNew)
	}

	if(hasError) return <div className="text-danger">ERROR: <b>Loading Speaker Data Failed {error}</b></div>

	// if (isLoading) return <div>Loading...</div>

	return (

		<>

			<div className="container speakers-list">

				<ReactPlaceHolder
					type="media"
					rows={15}
					className="speakerslist-placeholder"
					ready={isLoading===false}
				>
					<div className="row">
						{speakersData.map(function (speaker) {
							return (
								<Speaker
									key={speaker.id}
									speaker={speaker}
									showSessions={showSessions}
									onFavoriteToggle={() => onFavoriteToggle(speaker.id)}
								/>
							)
						})}
					</div>
				</ReactPlaceHolder>


			</div>


		</>

	)
}

export default SpeakersList;
