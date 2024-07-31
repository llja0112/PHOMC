import Image from 'next/image';
import LimHuaiYangPic from '@/public/scientificCommittee/LimHuaiYang.jpg';
import SylviaTeoPic from '@/public/scientificCommittee/SylviaTeo.png';
import TysonChanPic from '@/public/scientificCommittee/TysonChan.jpeg';
import LimDweeWeePic from '@/public/scientificCommittee/LimDweeWee.jpeg';
import RaymondLimPic from '@/public/scientificCommittee/RaymondLimBoonTar.jpeg';
import BenjaminSeahPic from '@/public/scientificCommittee/BenjaminSeah.jpeg';
import PremikhaPic from '@/public/scientificCommittee/Premikha.jpeg';
import LimGimHuiPic from '@/public/scientificCommittee/LimGimHui.png';
import AnneGoeiPic from '@/public/scientificCommittee/AnneGoei.jpg';
import CelineTanPic from '@/public/scientificCommittee/CelineTan.jpg';

export default function Page (){
  return(
    <>
      <div className="container">
        <div className="row">
          <div className ="col-md-8 offset-md-2 text-center">
            <h3 className="">Scientific Committee</h3>
            <h4>Chairman</h4>
            <Image src={LimHuaiYangPic} alt="Dr Lim Huai Yang" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
            <p>Dr Lim Huai Yang</p>

            <Image src={SylviaTeoPic} alt="Dr Sylvia Teo" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
            <h4>Vice Chair</h4>
            <p>Dr Sylvia Teo</p>

            <h4>members</h4>
            <div className="row">
              <div className="col">
                <Image src={TysonChanPic} alt="Dr Tyson Chan" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Tyson Chan
                </p>
              </div>
              <div className="col">
                <Image src={LimDweeWeePic} alt="Dr Lim Dwee Wee" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Lim Dwee Wee
                </p>
              </div>
              <div className="col">
                <Image src={RaymondLimPic} alt="Dr Raymond Lim" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Raymond Lim
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Image src={BenjaminSeahPic} alt="Dr Benjamin Seah" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Benjamin Seah
                </p>
              </div>
              <div className="col">
                <Image src={PremikhaPic} alt="Dr M Premikha" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr M Premikha
                </p>
              </div>
              <div className="col">
                <Image src={LimGimHuiPic} alt="Dr Lim Gim Hui" className="rounded-circle border" style={{height:"auto", width:"200px"}} />
                <p>
                  Dr Lim Gim Hui
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <Image src={AnneGoeiPic} alt="Dr Anne Goei Hui Yi" className="rounded-circle border" style={{height:"200px", width:"auto"}} />
                <p>
                  Dr Anne Goei Hui Yi
                </p>
              </div>
              <div className="col">
                <Image src={CelineTanPic} alt="Dr Celine Tan Yan Shan" className="rounded-circle border" style={{height:"200px", width:"auto"}} />
                <p>
                  Dr Celine Tan Yan Shan
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
