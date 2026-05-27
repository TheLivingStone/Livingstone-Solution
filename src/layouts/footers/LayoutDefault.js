import Link from "next/link";
import AppData from "@data/app.json";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import { useRouter } from "next/router";

const DefaultFooter = ({ extraClass }) => {
  const { asPath } = useRouter();

  return (
    <>
      {/* footer */}
      <footer className="mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="container mil-p-120-60">
            <div className="row justify-content-between">
              <div className="col-md-4 col-lg-4 mil-mb-60">
                <div className="mil-muted mil-logo mil-up mil-mb-30">
                  {AppData.footer.logo.text}
                </div>

                <p className="mil-light-soft mil-up mil-mb-30">
                  Subscribe our newsletter:
                </p>

                <form
                  action={AppData.settings.mailchimp.url}
                  method="post"
                  target="_blank"
                  className="mil-subscribe-form mil-up"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="EMAIL"
                    required
                  />
                  <input type="hidden" name={AppData.settings.mailchimp.key} />
                  <button
                    type="submit"
                    className="mil-button mil-icon-button-sm mil-arrow-place"
                  >
                    <ArrowIcon />
                  </button>
                </form>
              </div>
              <div className="col-md-7 col-lg-6">
                <div className="row justify-content-end">
                  <div className="col-md-6 col-lg-7">
                    <nav className="mil-footer-menu mil-mb-60">
                      <ul>
                        {AppData.footer.menu.map((item, key) => (
                          <li
                            key={`footer-menu-item-${key}`}
                            className={
                              (asPath.indexOf(item.link) != -1 &&
                                item.link != "/") ||
                                asPath == item.link
                                ? "mil-active mil-up"
                                : "mil-up"
                            }
                          >
                            <Link href={item.link}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                  <div className="col-md-6 col-lg-5">
                    <ul className="mil-menu-list mil-up mil-mb-60">
                      <li>
                        <Link href="/privacy-policy" className="mil-light-soft">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/terms-and-conditions" className="mil-light-soft">
                          Terms and conditions
                        </Link>
                      </li>
                      <li>
                        <Link href="/cookie-policy" className="mil-light-soft">
                          Cookie Policy
                        </Link>
                      </li>
                      <li>
                        <Link href="/careers" className="mil-light-soft">
                          Careers
                        </Link>
                      </li>
                      <li>
                        <Link href="/certifications" className="mil-light-soft">
                          Certifications (CBE)
                        </Link>
                      </li>
                      <li>
                        <Link href="/research" className="mil-light-soft">
                          Research
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-between flex-sm-row-reverse">
              <div className="col-md-7 col-lg-6">
                <div className="row justify-content-between">
                  <div className="col-lg-12 mil-mb-60">
                    <h6 className="mil-muted mil-mb-30">Contact</h6>

                    <p className="mil-light-soft">
                      Warm regards,
                      <br />
                      <strong>Oliyad Deyasa</strong>
                      <br />
                      Founder | The Livingstone Solution
                      <br />
                      Washington, D.C.
                      <br />
                      <a
                        href="mailto:Oliyad@thelivingstonesolution.com"
                        className="mil-link mil-light-soft"
                      >
                        Oliyad@thelivingstonesolution.com
                      </a>
                      <br />
                      <a
                        href="https://thelivingstonesolution.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mil-link mil-light-soft"
                      >
                        thelivingstonesolution.com
                      </a>
                      <br />
                      <span className="mil-no-wrap">(540) 998-9766</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-lg-6 mil-mb-60">
                <div className="mil-vert-between">
                  <div className="mil-mb-30">
                    <ul className="mil-social-icons mil-up">
                      {AppData.social.map((item, key) => (
                        <li key={`footer-social-item-${key}`}>
                          <a
                            href={item.link}
                            target="_blank"
                            className="social-icon"
                          >
                            <i className={item.icon} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mil-up">
                    <p className="mil-light-soft">{AppData.footer.copy}</p>
                    <p className="mil-light-soft mil-mb-15"><strong>{AppData.footer.uei}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
