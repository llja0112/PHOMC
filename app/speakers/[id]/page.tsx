import SpeakerProfile from '@/components/speakerProfile';
import speakersJson from '@/public/speakers/speakers.json';

export default function Page (
  { params }: { params: { id: string } }
) {
  const data = speakersJson.data;
  const speaker = data.filter((speaker) => speaker.index == Number(params.id))[0];

  return (
    <>
      <div className="container">
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
      </div>
    </>
  )
}
