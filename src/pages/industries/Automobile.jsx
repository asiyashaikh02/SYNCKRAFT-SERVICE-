import React from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Automobile() {
  return (
    <IndustryTemplate
      title="Automobile OS"
      subtitle="Vehicle & Dealership Management"
      description="Streamline dealership operations, automate customer servicing reminders, and digitize the showroom experience with AR vehicle visualization and automated lead follow-ups."
      features={[
        {
          title: "Virtual Showrooms",
          description: "High-fidelity 3D visualization allowing customers to configure vehicles before arriving at the dealership.",
          icon: "directions_car"
        },
        {
          title: "Servicing Automation",
          description: "Predictive maintenance scheduling and automated customer reminders synced with parts inventory.",
          icon: "build"
        },
        {
          title: "Dealership CRM",
          description: "End-to-end sales pipelines tracking from first test drive to final vehicle delivery.",
          icon: "handshake"
        }
      ]}
    />
  );
}
