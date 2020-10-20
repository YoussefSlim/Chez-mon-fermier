import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';

import './style.scss';

const ProjectTeam = () => {
  return (
    <div className="cards team">
      <div className="card card-cascade">
        <div className="view view-cascade overlay">
          <img className="card-img-top" src="../JJ.png" alt="Jerry Dumont" />
          <Link>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>Jerry Dumont </strong>
          </h4>

          <h6 className="font-weight-bold indigo-text py-2">Product owner et Lead dev backend</h6>

          <Link className="btn-floating btn-small btn-fb jello-horizontal">
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link className="btn-floating btn-small btn-tw jello-horizontal">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="btn-floating btn-small btn-dribbble jello-horizontal">
            <i className="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
      <div className="card card-cascade">
        <div className="view view-cascade overlay">
          <img className="card-img-top" src="../TB.png" alt="Tanguy Bruwaert" />
          <Link>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>Tanguy Bruwaert</strong>
          </h4>

          <h6 className="font-weight-bold indigo-text py-2">Git master</h6>
          <Link className="btn-floating btn-small btn-fb">
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link className="btn-floating btn-small btn-tw">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="btn-floating btn-small btn-dribbble">
            <i className="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
      <div className="card card-cascade">
        <div className="view view-cascade overlay">
          <img className="card-img-top" src="../Ch.png" alt="Christine" />
          <Link>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>Christine</strong>
          </h4>

          <h6 className="font-weight-bold indigo-text py-2">????</h6>

          <Link className="btn-floating btn-small btn-fb">
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link className="btn-floating btn-small btn-tw">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="btn-floating btn-small btn-dribbble">
            <i className="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
      <div className="card card-cascade">
        <div className="view view-cascade overlay">
          <img className="card-img-top" src="../Jo.png" alt="Youssef slim" />
          <Link>
            <div className="mask rgba-white-slight"></div>
          </Link>
        </div>

        <div className="card-body card-body-cascade text-center">
          <h4 className="card-title">
            <strong>Youssef slim</strong>
          </h4>

          <h6 className="font-weight-bold indigo-text py-2">Lead dev front</h6>

          <Link className="btn-floating btn-small btn-fb">
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link className="btn-floating btn-small btn-tw">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link className="btn-floating btn-small btn-dribbble">
            <i className="fab fa-dribbble"></i>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectTeam;
