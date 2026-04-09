import React from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Hospitality() {
  return (
    <IndustryTemplate
      title="Hospitality Intel"
      subtitle="Hotel & Resort Management"
      description="Orchestrate unforgettable guest experiences from digital check-in to automated room service, unified comprehensively with backend housekeeping and booking engines."
      features={[
        {
          title: "Seamless Booking Engine",
          description: "Direct reservation systems that maximize revenue without OTA commission leakages.",
          icon: "hotel"
        },
        {
          title: "Digital Key & Check-In",
          description: "Allow guests to bypass the front desk and access rooms securely via their smartphones.",
          icon: "room_preferences"
        },
        {
          title: "Operational Automation",
          description: "Instantly sync guest status with housekeeping priority to optimize room turnover times.",
          icon: "cleaning_services"
        }
      ]}
    />
  );
}
