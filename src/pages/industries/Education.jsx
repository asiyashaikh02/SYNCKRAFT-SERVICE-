import React from 'react';
import IndustryTemplate from '../../components/IndustryTemplate';

export default function Education() {
  return (
    <IndustryTemplate
      title="Cognitive Education"
      subtitle="Smart Institutional Management"
      description="Automate administrative burdens, provide a centralized digital campus for students, and use analytics to predict student performance and optimize curriculum delivery."
      features={[
        {
          title: "Unified Student Portal",
          description: "One-stop access for assignments, progress tracking, billing, and campus notifications.",
          icon: "school"
        },
        {
          title: "Administrative Automation",
          description: "Automated enrollment workflows, fee collection systems, and dynamic scheduling.",
          icon: "admin_panel_settings"
        },
        {
          title: "Performance AI",
          description: "Identify at-risk students securely using grade and attendance data patterns.",
          icon: "insights"
        }
      ]}
    />
  );
}
