import Image from 'next/image';
import academiaPic from '@/public/academia.jpg';

export default function Page () {
  return (
    <>
      <div className="container">
        <div className="row">
          <h3 className="my-3 text-center">Conference Venue</h3>
          <div className="col-md-8 offset-md-2 mb-5">
            <p className="text-center">
              <Image className="rounded img-fluid border" src={academiaPic} alt="Academia picture" />
            </p>
            <p>
              Located in Outram, the Central Area of the Central Region in Singapore, Academia of SingHealth enjoys proximity to Singapore River (to the north), the Downtown Core (to the east and the south) and Bukit Merah (to the west). It’s a 10-minute walk from Singapore General Hospital (SGH), national specialty centres and the Duke-NUS Medical School, making it an ideal location for great minds to meet.
            </p>
            <p>
              Designed to facilitate inter-connectivity among clinical scientists, researchers, pathologists, educators and medical students, Academia is equipped with state-of-the-art conference facilities that support live streaming and simulcast to multiple locations. Its auditorium is designed for an audience of over 400 and there is a variety of seminar rooms suitable for special occasions and business conferences.
            </p>
          </div>
        </div>

      </div>
    </>
  ); 
}
