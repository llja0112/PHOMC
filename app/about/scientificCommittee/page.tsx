export default function Page (){
  return(
    <>
      <div className="container">
        <div className="row">
          <div className ="col-md-8 offset-md-2 text-center">
            <h3 className="">Scientific Committee</h3>
            <h4>Chairman</h4>
            <p>Dr Lim Huai Yang</p>

            <h4>Vice Chair</h4>
            <p>Dr Sylvia Teo</p>

            <h4>members</h4>
            <div className="row">
              <div className="col">
                <p>
                  Dr Tyson Chan
                </p>
              </div>
              <div className="col">
                <p>
                  Dr Lim Dwee Wee
                </p>
              </div>
              <div className="col">
                <p>
                  Dr Raymond Lim
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <p>
                  Dr Benjamin Seah
                </p>
              </div>
              <div className="col">
                <p>
                  Dr M Premikha
                </p>
              </div>
              <div className="col">
                <p>
                  Dr Lim Gim Hui
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
