import DeptBanner from '../components/DeptBanner'
import HeroSection from '../components/HeroSection'
import AboutTeaser from '../components/AboutTeaser'
import FocusAreas from '../components/FocusAreas'
import StatisticsSection from '../components/StatisticsSection'
import GrantInAidNotice from '../components/GrantInAidNotice'

export default function Home() {
  return (
    <>
      <DeptBanner />
      <HeroSection />
      <GrantInAidNotice />
      <AboutTeaser />
      <FocusAreas />
      <StatisticsSection />
    </>
  )
}
