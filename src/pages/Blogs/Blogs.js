import React from 'react'
import Blog from '../HomeMenu/Blog/Blog'
import Roomheader from '../Room&Rate/RoomHeader/Roomheader'
import '../Blogs/Blog.css'
import {InstagramOutlined,FacebookOutlined,TwitterOutlined,YoutubeOutlined} from '@ant-design/icons'
import {Fade,Rotate} from 'react-reveal';
export default function Blogs() {
  return (
    <div>
      <Roomheader />
      <div className="section-blog ">
        <div className="container">
          <div className="blog">
            <div className="row">
           
            <div className=" col-lg-8 col-md-7 col-md-push-4">
                <div className="blog-content">
                  <Fade left delay={2000} duration={2}>
                  <div className="widget widget_search">
                    <div className="widgetsearch">
                      <form action="#">
                        <input type="search" className="input-text" placeholder="Search your entry here ..." defaultValue name="s" />
                        <input type="submit" className="input-submit" defaultValue="Search" />
                      </form>
                    </div>
                  </div></Fade>
                  <article className="post">
                  <Fade top cascade delay={1000}>
                    <div className="entry-media">
                      <a  className="post-thumbnail hover-zoom"><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-11.jpg" alt="#" /></a>
                      <span className="posted-on"><strong>23</strong>JUN</span>
                    </div></Fade>
                    <div className="entry-header">
                      <h2 className="entry-title"><a> <Fade bottom big cascade>relaxing &amp; travel in our hotel</Fade></a></h2>
                    </div>
                    <div className="entry-content">
                      <p><Fade right cascade delay={2000}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Fade></p>
                      <br />
                      <p><Fade left cascade delay={2000}>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</Fade></p>
                    </div>
                    <div className="entry-footer">
                      <p className="entry-meta">
                      <Fade bottom cascade delay={2200}>
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span>
                          <span className="entry-time">JUN 23, 2014</span>
                        </span>
                        <span className="entry-author">
                          <span className="screen-reader-text">Posted by </span>
                          <a href="#" className="entry-author-link">
                            <span className="entry-author-name">Jonatha Owens</span>
                          </a>
                        </span>
                        <span className="entry-categories">
                          <a href="#">Travel</a>
                        </span>
                        <span className="entry-comments-link">
                          <a href="#">3 Comments</a>
                        </span>
                        <span className="entry-tags">
                          <span className="screen-reader-text"><i className="fa fa-tag" aria-hidden="true" /></span>
                          <a href="#">Food</a> -
                          <a href="#">Drink</a> -
                          <a href="#">Event</a>
                        </span></Fade>
                      </p>
                    </div>
                  </article>
                  <article className="post">
                  <Fade top cascade delay={1000}>
                    <div className="entry-media">
                      <a  className=" hover-zoom"><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-12.jpg" alt="#" /></a>
                      <span className="posted-on"><strong>16</strong>JUN</span>
                    </div></Fade>
                    <div className="entry-header">
                      <h2 className="entry-title"><a><Fade bottom big cascade>new kind of chicken food for dinner</Fade></a></h2>
                    </div>
                    <div className="entry-content">
                      <p><Fade right cascade delay={2000}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Fade></p>
                      <br />
                      <p><Fade left cascade delay={2000}>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</Fade></p>
                    </div>
                    <Fade bottom cascade delay={2200}>
                    <div className="entry-footer">
                      <p className="entry-meta">
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span>
                          <span className="entry-time">JUN 23, 2014</span>
                        </span>
                        <span className="entry-author">
                          <span className="screen-reader-text">Posted by </span>
                          <a href="#" className="entry-author-link">
                            <span className="entry-author-name">Jonatha Owens</span>
                          </a>
                        </span>
                        <span className="entry-categories">
                          <a href="#">Travel</a>
                        </span>
                        <span className="entry-comments-link">
                          <a href="#">3 Comments</a>
                        </span>
                        <span className="entry-tags">
                          <span className="screen-reader-text"><i className="fa fa-tag" aria-hidden="true" /></span>
                          <a href="#">Food</a> -
                          <a href="#">Drink</a> -
                          <a href="#">Event</a>
                        </span>
                      </p>
                    </div></Fade>
                  </article>
                  <article className="post">
                  <Fade top cascade delay={1000}> <div className="entry-media">
                      <a  className=" hover-zoom"><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-13.jpg" alt="#" /></a>
                      <span className="posted-on"><strong>16</strong>JUN</span>
                    </div></Fade>
                    <div className="entry-header">
                      <h2 className="entry-title"><a><Fade bottom big cascade>one night wedding with jessica &amp; robet</Fade></a></h2>
                    </div>
                    <div className="entry-content">
                      <p><Fade right cascade delay={2000}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Fade></p>
                      <br />
                      <p><Fade left cascade delay={2000}>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</Fade></p>
                    </div>
                    <Fade bottom cascade delay={2200}>
                    <div className="entry-footer">
                      <p className="entry-meta">
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span>
                          <span className="entry-time">JUN 23, 2014</span>
                        </span>
                        <span className="entry-author">
                          <span className="screen-reader-text">Posted by </span>
                          <a href="#" className="entry-author-link">
                            <span className="entry-author-name">Jonatha Owens</span>
                          </a>
                        </span>
                        <span className="entry-categories">
                          <a href="#">Travel</a>
                        </span>
                        <span className="entry-comments-link">
                          <a href="#">3 Comments</a>
                        </span>
                        <span className="entry-tags">
                          <span className="screen-reader-text"><i className="fa fa-tag" aria-hidden="true" /></span>
                          <a href="#">Food</a> -
                          <a href="#">Drink</a> -
                          <a href="#">Event</a>
                        </span>
                      </p>
                    </div></Fade>
                  </article>
                  <article className="post">
                  <Fade top cascade delay={1000}>
                    <div className="entry-media ">
                      <a><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-14.jpg" alt="#" /></a>
                      <span className="posted-on"><strong>06</strong>JUN</span>
                    </div></Fade>
                    <div className="entry-header">
                      <h2 className="entry-title"><a ><Fade bottom big cascade>fishing with lotus hotel</Fade></a></h2>
                    </div>
                    <div className="entry-content">
                      <p><Fade right cascade delay={2000}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</Fade></p>
                      <br />
                      <p><Fade left cascade delay={2000}>But also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum.</Fade></p>
                    </div>
                    <Fade bottom cascade delay={2200}>
                    <div className="entry-footer">
                      <p className="entry-meta">
                        <span className="posted-on">
                          <span className="screen-reader-text">Posted on</span>
                          <span className="entry-time">JUN 23, 2014</span>
                        </span>
                        <span className="entry-author">
                          <span className="screen-reader-text">Posted by </span>
                          <a href="#" className="entry-author-link">
                            <span className="entry-author-name">Jonatha Owens</span>
                          </a>
                        </span>
                        <span className="entry-categories">
                          <a href="#">Travel</a>
                        </span>
                        <span className="entry-comments-link">
                          <a href="#">3 Comments</a>
                        </span>
                        <span className="entry-tags">
                          <span className="screen-reader-text"><i className="fa fa-tag" aria-hidden="true" /></span>
                          <a href="#">Food</a> -
                          <a href="#">Drink</a> -
                          <a href="#">Event</a>
                        </span>
                      </p>
                    </div></Fade>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-5 col-md-pull-8">
                <div className="sidebar1"> 
                <Rotate top right cascade delay={2000}>             
                  <div className="widget widget_upcoming_events">
                    <h4 className="widget-title">Upcoming Events</h4>
                    <ul>
                      <li>
                        <span className="event-date">
                          <strong>23</strong>
                          JUN
                        </span>
                        <div className="text">
                          <a href="#">DISCOUNT EVENT ROOM</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                      <li>
                        <span className="event-date">
                          <strong>18</strong>
                          JUN
                        </span>
                        <div className="text">
                          <a href="#">Event wedding 1</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                      <li>
                        <span className="event-date">
                          <strong>7</strong>
                          JUN
                        </span>
                        <div className="text">
                          <a href="#">EVENT WEDDING 2</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                    </ul>
                  </div></Rotate> 
                  <Rotate top right cascade delay={2000}>   <div className="widget widget_recent_entries ">
                    <h4 className="widget-title">Recent Posts</h4>
                    <ul>
                      <li>
                        <div className="img">
                          <a><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-3.jpg" alt="#" /></a>
                        </div>
                        <div className="text">
                          <a>Relaxing &amp; travel in our hotel</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                      <li>
                        <div className="img">
                          <a><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-4.jpg" alt="#" /></a>
                        </div>
                        <div className="text">
                          <a>New kind of chicken food for dinner</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                      <li>
                        <div className="img">
                          <a><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-5.jpg" alt="#" /></a>
                        </div>
                        <div className="text">
                          <a>One night wedding with jessia &amp; robet</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                      <li>
                        <div className="img">
                          <a><img src="http://landing.engotheme.com/html/skyline/demo/images/Blog/blog-6.jpg" alt="#" /></a>
                        </div>
                        <div className="text">
                          <a>Fishing with Skyline hotel</a>
                          <span className="date">at 12:30 Pm, Thu 01 Oct 2017</span>
                        </div>
                      </li>
                    </ul>
                  </div></Rotate>
                  <Rotate top right cascade delay={2000}>
                  <div className="widget widget_categories">
                    <h4 className="widget-title">CATEGORIES</h4>
                    <ul>
                      <li><a href="#">Food &amp; Drinks &nbsp;(4)</a></li>
                      <li><a href="#">Gardening &nbsp;(2)</a></li>
                      <li><a href="#">Personal &nbsp; (6)</a></li>
                      <li><a href="#">Recipes &nbsp;(2)</a></li>
                    </ul>
                  </div></Rotate>
                  <Rotate top right cascade delay={2000}>
                  <div className="widget widget_tag_cloud">
                    <h4 className="widget-title">Tags</h4>
                    <div className="tagcloud">
                      <a href="#">Restaurant</a>
                      <a href="#">Food Dinner</a>
                      <a href="#">Travel</a>
                      <a href="#">Blog</a>
                      <a href="#">Wedding</a>
                      <a href="#">Luxury Room</a>
                      <a href="#">Valentine</a>
                      <a href="#">Valentine</a>
                    </div>
                  </div></Rotate>
                  <Rotate top right cascade delay={2000}>
                  <div className="widget widget_social">
                    <h4 className="widget-title">SOCIALS</h4>
                    <div className="widget-social">
                      <a href="#"><InstagramOutlined /></a>
                      <a href="#"><FacebookOutlined /></a>
                      <a href="#"><TwitterOutlined /></a>
                      <a href="#"><YoutubeOutlined /></a>
                    </div>
                  </div>  </Rotate>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
