import HeroNew from '@/components/HeroNew'
import RedBanner from '@/components/RedBanner'
import PlanningSection from '@/components/PlanningSection'
import TroublesSection from '@/components/TroublesSection'
import ThreeReasonsNew from '@/components/ThreeReasonsNew'
import CtaRed from '@/components/CtaRed'
import GlimpseSection from '@/components/GlimpseSection'
import ReadyToExplore from '@/components/ReadyToExplore'
import AboutSection from '@/components/AboutSection'
import LimitedSale from '@/components/LimitedSale'
import ProductSummary from '@/components/ProductSummary'
import TestimonialsNew from '@/components/TestimonialsNew'
import FaqSection from '@/components/FaqSection'
import MessageSection from '@/components/MessageSection'
import FinalCta from '@/components/FinalCta'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroNew />
      <RedBanner />
      <PlanningSection />
      <TroublesSection />
      <ThreeReasonsNew />
      <CtaRed />
      <GlimpseSection />
      <ReadyToExplore />
      <AboutSection />
      <LimitedSale />
      <ProductSummary />
      <TestimonialsNew />
      <FaqSection />
      <MessageSection />
      <FinalCta />
      <ContactSection />
    </main>
  )
}