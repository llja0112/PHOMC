import Image from 'next/image';
import previousConference from '@/public/previousConference.jpg';

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <Image src={previousConference} className="img-fluid rounded my-3" alt="Previous conference picture" />
            <h3>Be a sponsor</h3>
            <p>
              This conference is an excellent opportunity to showcase your company's brand and contributions to public health.
            </p>
            <p>
              In exchange for your support, we can offer tiered advertising packages during the conference.
            </p>
            <p>
              Download a copy of the Sponsorship Prospectus <a href="https://custom.cvent.com/FF5457269D734386A53152813B075285/files/5fc21215f92544179debaaebfcebd587.pdf">here</a>.
            </p>
            <p>
              Do reach out for more information if you are interested!
            </p>
            <ul>
              <li>
                Dr Jake Goh: <a href="mailto:gohjitkhong@gmail.com">gohjitkhong@gmail.com</a>
              </li>
              <li>
                Dr Elliot Eu: <a href="mailto:elliot.eu.z.f@singhealth.com.sg">elliot.eu.z.f@singhealth.com.sg</a>
              </li>
              <li>
                Dr Joshua Wong: <a href="mailto:wong.shiu.hong@singhealth.com.sg">wong.shiu.hong@singhealth.com.sg</a>
              </li>
              <li>
                Ms Eddi Ruan: <a href="mailto:eddi.ruan@ams.edu.sg">eddi.ruan@ams.edu.sg</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  ); 
}
