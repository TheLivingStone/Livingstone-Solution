import Layouts from "@layouts/Layouts";
import PageBanner from "@components/PageBanner";
import SEO from "@components/SEO";
import VideoWork from "@components/sections/VideoWork";
import CallToActionSection from "@components/sections/CallToAction";
import { SITE_URL } from "@library/site";

const VideoPage = () => (
  <Layouts>
    <SEO
      title="Video & Media Work"
      description="Commercials, an animated children's series, lesson explainers and short-form content produced by The Livingstone Solution, with AI video generation, animation and editing."
      canonical={`${SITE_URL}/video`}
    />
    <PageBanner pageTitle={'Video &amp; <span class="mil-thin">Media</span>'} breadTitle="Video & Media" anchorLabel="See the work" anchorLink="#video-work" />
    <VideoWork soft={false} />
    <CallToActionSection />
  </Layouts>
);

export default VideoPage;
