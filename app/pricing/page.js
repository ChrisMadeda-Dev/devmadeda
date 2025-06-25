import React from 'react'
import PricingHeader from './_components/PricingHeader'
import PricingCards from './_components/PricingCards'
import FeatureComparisonTable from './_components/FeatureComparisonTable'
import AdditionalInfo from './_components/AdditionalInfo'
import FAQ from './_components/FAQ'

const Pricing = () => {
  return (
    <>
    <PricingHeader />
    <PricingCards />
    <FeatureComparisonTable />
    <AdditionalInfo />
    <FAQ />
    </>
  )
}

export default Pricing