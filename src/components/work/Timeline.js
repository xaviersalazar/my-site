import React from "react";
import { Scroll, Frame } from "framer";
import "./Timeline.scss";

export const Timeline = () => (
  <>
    <div class="fade" />
    <Scroll height={450} width={"100%"} className="framer-scroll">
      <Frame size={"100%"} background="#ffffff">
        <div className="timeline-container">
          <div className="timeline">
            <div id="timeline">
              <div>
                <section className="year">
                  <h3>2010</h3>
                  <section>
                    <h4>November</h4>
                    <ul>
                      <li>
                        got my first IT job as an IT Specialist for FutureTech
                      </li>
                    </ul>
                  </section>
                </section>
                <section className="year">
                  <h3>2013</h3>
                  <section>
                    <h4>June</h4>
                    <ul>
                      <li>
                        started freelance development with Peace of Mind (still
                        doing it)
                      </li>
                    </ul>
                  </section>
                </section>
                <section className="year">
                  <h3>2015</h3>
                  <section>
                    <h4>February</h4>
                    <ul>
                      <li>joined the U.S. Army</li>
                    </ul>
                  </section>
                </section>
                <section className="year">
                  <h3>2018</h3>
                  <section>
                    <h4>May</h4>
                    <ul>
                      <li>got out of the U.S. Army, contract ended</li>
                    </ul>
                  </section>
                  <section>
                    <h4>May</h4>
                    <ul>
                      <li>
                        started a full-stack development boot-camp at Codeup
                      </li>
                    </ul>
                  </section>
                  <section>
                    <h4>October</h4>
                    <ul>
                      <li>graduated from Codeup</li>
                    </ul>
                  </section>
                  <section>
                    <h4>October</h4>
                    <ul>
                      <li>
                        got a job as a full-stack developer at Appddiction
                        Studio
                      </li>
                    </ul>
                  </section>
                </section>
                <section className="year">
                  <h3>2019</h3>
                  <section>
                    <h4>January</h4>
                    <ul>
                      <li>
                        started pursuing a bachelor's in Computer Science online
                      </li>
                    </ul>
                  </section>
                  <section>
                    <h4>February</h4>
                    <ul>
                      <li>joined the Texas National Guard</li>
                    </ul>
                  </section>
                  <section>
                    <h4>December</h4>
                    <ul>
                      <li>left Appddiction Studio</li>
                    </ul>
                  </section>
                </section>
                <section className="year">
                  <h3>2020</h3>
                  <section>
                    <h4>January</h4>
                    <ul>
                      <li>got a job as a Software Engineer III at USAA</li>
                    </ul>
                  </section>
                  <section>
                    <h4>June</h4>
                    <ul>
                      <li>left USAA</li>
                    </ul>
                  </section>
                  <section>
                    <h4>July</h4>
                    <ul>
                      <li>
                        got a job as a Senior Software Developer at ERP
                        International
                      </li>
                    </ul>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </Frame>
    </Scroll>
  </>
);
