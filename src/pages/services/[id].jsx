import Layouts from "@layouts/Layouts";
import PageBanner from "@/src/components/PageBanner";
import PageSchema from "@components/PageSchema";
import SEO from "@components/SEO";
import { SITE_URL } from "@library/site";

import { useEffect } from "react";

import { Accordion } from "../../common/utilits";

import Link from "next/link";

import { getAllServicesIds, getServiceData, getRelatedServices } from "@library/services";

import RelatedServices from "@components/sections/RelatedServices";

/* Optional frontmatter that drives SEO / GEO on each service page:
 *   seo         {title, description, keywords}  overrides title / short
 *   serviceType Service schema type
 *   definition  {question, answer}  answer-first block (40-60 words)
 *   steps       {suptitle, title, items: [{title, text}]}
 *   faq         [{question, answer}]  visible FAQ + FAQPage schema
 * Everything emitted as schema is also visible on the page. */
const ServiceDetail = ({ data, related }) => {
  const postData = data;
  const url = `${SITE_URL}/services/${postData.id}`;

  useEffect(() => {
    Accordion();
  }, [postData.id]);

  return (
    <Layouts>
      <SEO
        title={postData.seo?.title || postData.title}
        description={postData.seo?.description || postData.short}
        keywords={postData.seo?.keywords}
        canonical={url}
      />
      <PageSchema
        service={{
          id: `${url}#service`,
          url,
          name: postData.title,
          serviceType: postData.serviceType || postData.title,
          description: postData.definition?.answer || postData.short,
          areaServed: ["Washington, D.C.", "United States"],
        }}
        faq={postData.faq}
        breadcrumb={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Services", url: `${SITE_URL}/services` },
          { name: postData.title, url },
        ]}
      />
      <PageBanner pageTitle={postData.introTitle} breadTitle={postData.title} anchorLabel={"About service"} anchorLink={"#service"} />

      {/* service */}
      <section id="service">
        <div className="container mil-p-120-90">
          {postData.definition &&
            <div className="row mil-mb-90">
              <div className="col-lg-10">
                <h2 className="mil-up mil-mb-30">{postData.definition.question}</h2>
                <p className="mil-text-lg mil-up">{postData.definition.answer}</p>
              </div>
            </div>
          }
          <div className="row justify-content-between">
            <div className="col-lg-4 mil-relative mil-mb-90">

              <h4 className="mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: postData.description.title }} />
              <p className="mil-up mil-mb-30" dangerouslySetInnerHTML={{ __html: postData.description.content }} />
              <div className="mil-up">
                <Link href={postData.description.button.link} className="mil-link mil-dark mil-arrow-place">
                  <span>{postData.description.button.label}</span>
                </Link>
              </div>

            </div>
            <div className="col-lg-6">
              {postData.list != undefined &&
                <>
                  {postData.list.items.map((item, key) => (
                    <div className="mil-accordion-group mil-up" key={`service-list-${key}`}>
                      <div className="mil-accordion-menu">

                        <p className="mil-accordion-head">{item.label}</p>

                        <div className="mil-symbol mil-h3">
                          <div className="mil-plus">+</div>
                          <div className="mil-minus">-</div>
                        </div>

                      </div>
                      <div className="mil-accordion-content mil-text" dangerouslySetInnerHTML={{ __html: item.value }} />
                    </div>
                  ))}
                </>
              }
            </div>
          </div>
        </div>
      </section>
      {/* service end */}

      {/* steps */}
      {postData.steps &&
        <section className="mil-soft-bg">
          <div className="container mil-p-120-60">
            <div className="row">
              <div className="col-lg-8 mil-mb-90">
                <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">{postData.steps.suptitle}</span>
                <h2 className="mil-up" dangerouslySetInnerHTML={{ __html: postData.steps.title }} />
              </div>
            </div>
            <div className="row">
              {postData.steps.items.map((step, key) => (
                <div className="col-md-6 col-lg-3 mil-mb-60" key={`service-step-${key}`}>
                  <h3 className="mil-accent mil-thin mil-up mil-mb-30">{String(key + 1).padStart(2, "0")}</h3>
                  <h5 className="mil-up mil-mb-15">{step.title}</h5>
                  <p className="mil-up">{step.text}</p>
                </div>
              ))}
            </div>
            {postData.steps.note &&
              <p className="mil-up mil-mb-60"><strong>{postData.steps.note}</strong></p>
            }
          </div>
        </section>
      }
      {/* steps end */}

      {/* faq */}
      {postData.faq &&
        <section>
          <div className="container mil-p-120-90">
            <div className="row justify-content-between">
              <div className="col-lg-4 mil-mb-60">
                <span className="mil-suptitle mil-suptitle-dark mil-upper mil-up mil-mb-30">FAQ</span>
                <h2 className="mil-up">
                  Common <span className="mil-thin">questions</span>
                </h2>
              </div>
              <div className="col-lg-7">
                {postData.faq.map((item, key) => (
                  <div className="mil-accordion-group mil-up" key={`service-faq-${key}`}>
                    <div className="mil-accordion-menu">
                      <p className="mil-accordion-head">{item.question}</p>
                      <div className="mil-symbol mil-h3">
                        <div className="mil-plus">+</div>
                        <div className="mil-minus">-</div>
                      </div>
                    </div>
                    <div className="mil-accordion-content mil-text">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      }
      {/* faq end */}

      <RelatedServices services={related} />

    </Layouts>
  );
};
export default ServiceDetail;

export async function getStaticPaths() {
  const paths = getAllServicesIds()

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getServiceData(params.id)
  const relatedServices = await getRelatedServices(params.id)

  return {
    props: {
      data: postData,
      related: relatedServices
    }
  }
}
