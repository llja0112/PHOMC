import Image from 'next/image';
import cphopPic from '@/public/cphop.png';
import amsPic from '@/public/ams.png';

export default function Page (){
  return(
    <>
      <div className="container">
        <div className="row">
          <div className ="col-md-8 offset-md-2">
            <h3 className="text-center my-3">Organisers</h3>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 text-center">
                  <Image src={cphopPic} alt="CPHOP picture" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">College of Public Health and Occupational Physicians</h5>
                    <p className="card-text">
                      The College of Public Health and Occupational Physicians (CPHOP) was formed on 1 February 2013 as a College of the Academy of Medicine, Singapore.
                    </p>
                    <p className="card-text">
                      The College provides professional leadership and continuing education in public health, occupational medicine and aviation medicine. It also provides recommendations to the Academy of Medicine, Singapore on specialist qualification and training.
                    </p>
                    <p className="card-text">
                      Many Fellows of the College play important roles in the public healthcare sector and they also serve on national specialist training committees and academic programme committees of the three specialties.
                    </p>
                    <p className="card-text">
                      For more information, please visit <a href="https://www.ams.edu.sg/colleges/CPHOP/home">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4 text-center">
                  <Image src={amsPic} alt="AMS picture" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Academy of Medicine, Singapore</h5>
                    <p className="card-text">
                      Formed in 1957, the Academy of Medicine, Singapore is a professional institution of medical and dental specialists devoted to advancing the art and science of medicine in Singapore through postgraduate specialist training; maintenance of high standards of competency and ethical integrity through continuous professional development as well as dissemination of information and knowledge to the public on matters related to health.
                    </p>
                    <p className="card-text">
                      For more information, please visit <a href="https://www.ams.edu.sg/">here</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </>
  );
}
