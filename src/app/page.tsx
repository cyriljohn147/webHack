import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle preTitle="GreenLungs Benefits" title=" Why Use GreenLungs">
        GreenLungs is designed to support and empower you on your journey to
        quit smoking. Our website offers a unique, engaging experience that
        combines a reward-based system with comprehensive educational resources.
        GreenLungs makes quitting smoking not only achievable but also enjoyable
        and rewarding, helping you to lead a healthier, smoke-free life.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="By World Health Organaization"
        title="Commit To Quit Smoking"
      >
        Quitting tobacco and related products is hard, but with the right
        support and tools you can do it! You are losing a lot more than you
        think by using tobacco - your health, the health of your family and
        loved ones, the money your spending, your looks, and so much more.
        Quitters are truly winners.
      </SectionTitle>

      <Video videoSrc="videos/Commit to quit tobacco.mp4" />

      {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta /> */}
    </Container>
  );
}
