import React, { Fragment } from "react";
import "../../HomeMenu/Blog/Blog.css";
import HomeNews from "../HomeNews/HomeNews";
import { Zoom, Fade } from "react-reveal";

export default function Blog() {
 

  return (
    <Fragment>
      <section className="events events-v3 events-v4">
        <div className="container">
          <Zoom>
            <h2 className="events-title">Our Events</h2>
          </Zoom>

          <div className="line" />
          <div className="row">
            <div className="own1">
            <Fade left delay={2000}>
              <div className="events-item  col-lg-6 col-md-12 col-sm-8 col-xs-12 ">
                <div>
                  <div className="events-img">
                    <img
                      src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                    <div className="events-content">
                      <p className="sky-p" style={{ marginTop: 75 }}>
                        EVENTS
                      </p>
                      <h3 className="sky-h3 v4">Beach Sports</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            </div>
          

     
             <div className="own">
             <Fade top delay={2000}>
              <div
                className="events-item col-lg-7 col-md-12  col-sm-12 col-xs-12 offset-md-6 "
                style={{ bottom: 626}}
              >
                <div>
                  <div className="events-img">
                    <img
                      width={"100%"}
                      height={250}
                      style={{ height: 300 }}
                      src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events-1.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                    <div className="events-content">
                      <p className="sky-p1" >
                        EVENTS
                      </p>
                      <h3 className="sky-h3 v4">Music Festival</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade bottom delay={2000}>
              <div
                className="events-item col-lg-7 col-md-12  col-sm-12 col-xs-12 offset-md-6 "
                style={{ bottom: 657 }}
              >
                <div>
                  <div className="events-img">
                    <img
                      width={"100%"}
                      height={250}
                      style={{ height: 255, marginTop: 42 }}
                      src="http://landing.engotheme.com/html/skyline/demo/images/Home-4/events-2.jpg"
                      className="img-responsive"
                      alt="Image"
                    />
                    <div className="events-content">
                      <p className="sky-p1" >
                        EVENTS
                      </p>
                      <h3 className="sky-h3 v4">Wedding Day</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
             </div>
         
            
          
  
         
          </div>
        </div>
      </section>
      {/* Home News */}
      <HomeNews />
    </Fragment>
  );
}
