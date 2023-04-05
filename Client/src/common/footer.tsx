export default function Footer() {
  return (
    <div className="container-fluid bg-dark d-block fixed-bottom">
      <div className=" text-white row ">
        <div className="nav-link text-center col-xs-12">Other Links</div>
        <div className="col-xs-12">
          <div className="container">
            <div className="row">
              <div className="nav-item col-xs-12 col-sm-4 col-md-2 text-center">
                <a href="#" className="nav-link text-muted ">
                  HR
                </a>
              </div>
              <div className="nav-item col-xs-12 col-sm-4 col-md-2 text-center">
                <a href="#" className="nav-link text-muted">
                  MRN
                </a>
              </div>
              <div className="nav-item col-xs-12 col-sm-4 col-md-2 text-center">
                <a href="#" className="nav-link text-muted">
                  CLARITY
                </a>
              </div>
              <div className="nav-item col-xs-12 col-sm-4 col-md-2 text-center">
                <a href="#" className="nav-link text-muted">
                  TECH OPS
                </a>
              </div>
              <div className="nav-item col-xs-12 col-sm-4 col-md-2 text-center">
                <a href="#" className="nav-link text-muted">
                  PMS
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          A Tech Product. Copyright © 2023 Tech Technologies, Inc. All Rights
          Reserved.
        </div>
      </div>
    </div>
  );
}
