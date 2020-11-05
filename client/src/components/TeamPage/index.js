import React from 'react';
import './style.scss';

const Team = () => {
  return (
    <div>
      <main class="content">
        {/* <nav aria-label="breadcrumb" class="fil-ariane">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Accueil</a>
            </li>
            <li class="breadcrumb-item">Nom de la page</li>
          </ol>
        </nav> */}

        <section class="team-mozaic">
        <article class="devOne">
            <aside class="dev-img">
              <div class="fakebgone"></div>
            </aside>
            <aside class="dev-info">
              <h3 class="dev-name text-marine">Youssef Slim</h3>
              <p class="dev-description">Lead Dev Front - Spé React</p>
              <div class="socialzone">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="mon Linkedin"
                  href="#"
                  class="social-icon"
                >
                  {/* <span class="linkedin">&nbsp;&nbsp;</span>  */}
                  <img src="/icons/code.png" className="code" rel="Portfolio"/>
                </a>
                <a href="#" class="social-icon">
                <img src="/icons/linkedin.png" className="linkedin" rel="Linkedin"/>
                 </a>
                <a
                  href="#"
                  class="social-icon"
                >
                <img src="/icons/github.png" className="github" rel="Github"/>
                </a>
              </div>
            </aside>
          </article>
          <article class="devTwo">
            <aside class="dev-info">
              <h3 class="dev-name text-red">Jerry Dumont</h3>
              <p class="dev-description">Product Owner & Dev Fullstack - Spé Data</p>
              <div class="socialzone">
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="mon Linkedin"
                  href="https://www.linkedin.com/in/jrdumont/"
                  class="social-icon"
                >
                <img src="/icons/linkedin.png" className="linkedin" rel="Linkedin"/>
                </a>
                <a
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Mon portfolio"
                  href="http://jd-dev.me/"
                  class="social-icon"
                >
               <img src="/icons/code.png" className="code" rel="Mon Portfolio"/>
                </a>
                <a
                  href="https://github.com/Jack-Jerry-Stark"
                  class="social-icon"
                >
                <img src="/icons/github.png" className="github" rel="Github"/>
                </a>
              </div>
            </aside>
            <aside class="dev-img fakebg">
              <div class="jerrybg"></div>
            </aside>
          </article>
          <article class="devThree">
            <aside class="dev-img">
              <div class="fakebgtwo"></div>
            </aside>
            <aside class="dev-info">
              <h3 class="dev-name text-blue">Tanguy Bruwaert</h3>
              <p class="dev-description">Dev frontend & Git Master - Spé React</p>
              <div class="socialzone">
                <a
                  href="https://www.linkedin.com/in/tanguy-bruwaert-513575142/"
                  class="social-icon"
                >
                <img src="/icons/linkedin.png" className="github" rel="Linkedin"/>
                </a>
                <a
                  href="#"
                  class="social-icon"
                >
                <img src="/icons/code.png" className="code" rel="Mon Portfolio"/>
                </a>
                <a
                  href="#"
                  class="social-icon"
                >
                <img src="/icons/github.png" className="github" rel="Github"/>
                </a>
              </div>
            </aside>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Team;