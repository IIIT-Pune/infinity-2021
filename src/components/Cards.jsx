import "./card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Cards() {
  return (
    <div className="all-cards">
      <div className="card card-left">
        <h1 className="title">India #1</h1>
        <h2 className="sub-title">Cho Sang-Woo</h2>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Nishant Shah</h4>
            <h5 className="user-organisation">DAIICT</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/nishant403">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'20</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Shubham Atri</h4>
            <h5 className="user-organisation">IIT Bombay</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/shubham__12">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="https://www.linkedin.com/in/shubham-atri-2455a91a7/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'19</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Priyanshu Kumar</h4>
            <h5 className="user-organisation">IIIT Allahabad</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/priyanshukm">
                <FontAwesomeIcon icon={faCode} className="" />
              </a>
              <a href="https://github.com/priyanshukm">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="https://www.linkedin.com/in/priyanshukm/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'18</div>
          </div>
        </div>
      </div>
      <div className="card card-center">
        <h1 className="title">WORLD #1</h1>
        <h2 className="sub-title">Seong Gi-hun</h2>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Jay Leeds</h4>
            <h5 className="user-organisation">Swarthmore College</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/geothermal">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'20</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Kang</h4>
            <h5 className="user-organisation">
              Kim Chaek University of Technology
            </h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/kut_hgs1997">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'19</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Himanshu Jaju</h4>
            <h5 className="user-organisation">Google</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/himanshujaju">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="https://github.com/himanshujaju">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="https://www.linkedin.com/in/himanshujaju/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'18</div>
          </div>
        </div>
      </div>
      <div className="card">
        <h1 className="title">IIIT Pune #1</h1>
        <h2 className="sub-title">Kang Sae-Byeok</h2>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Gaurav</h4>
            <h5 className="user-organisation">IIIT Pune</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/g0uravlathwal">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="https://www.linkedin.com/in/g0uravlathwal/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'20</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Harsh Prakash</h4>
            <h5 className="user-organisation">IIIT Pune</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/harsh132">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="https://github.com/harsh132">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="https://www.linkedin.com/in/harsh132/">
                <FontAwesomeIcon icon={faLinkedin} className="" />
              </a>
            </div>
            <div className="year">'19</div>
          </div>
        </div>
        <div className="main-content">
          <div className="user-image">
            <img
              className="user-image-content"
              src="https://firebasestorage.googleapis.com/v0/b/infinity-2k20.appspot.com/o/codechef-logo-white.png?alt=media&token=5c96a744-410a-4c5b-9bcb-247c7f7f3f05"
            />
          </div>
          <div className="user-details">
            <h4 className="user-name">Darshan Lokhande</h4>
            <h5 className="user-organisation">IIIT Pune</h5>
            <div className="icons">
              <a href="https://www.codechef.com/users/darshancool25">
                <FontAwesomeIcon icon={faCode} className=" " />
              </a>
              <a href="https://github.com/darshancool25">
                <FontAwesomeIcon icon={faGithub} className="" />
              </a>

              <a href="">
                <a href="https://www.linkedin.com/in/darshanlokhande/">
                  <FontAwesomeIcon icon={faLinkedin} className="" />
                </a>
              </a>
            </div>
            <div className="year">'18</div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
