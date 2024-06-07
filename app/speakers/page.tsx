import speakersJson from '@/public/speakers/speakers.json';
import SpeakerProfile from '@/components/speakerProfile';

export default function Page () {
  const data = speakersJson.data;

  return (
    <>
      <div className="container">
        {data.map((speaker) => (
          <div className="my-3">
            <SpeakerProfile
              index={speaker.index}
              speakerName={speaker.name}
              speakerTitle={speaker.title}
              speakerBio={speaker.biography}
              presentationTitle={speaker.presentationTitle}
              presentationSynopsis={speaker.presentationSynopsis}
             />
          </div>
        ))}
      </div>
    </>
  )
}
