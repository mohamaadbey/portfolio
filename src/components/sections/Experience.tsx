"use client";

import { useTranslations } from "next-intl";
import { TimelineItem } from "@/components/shared/TimelineItem";
import { SectionHeading } from "@/components/shared/SectionHeading";

const experiences = [
  {
    roleKey: "role1",
    companyKey: "company1",
    periodKey: "period1",
    descKey: "desc1",
    highlightKeys: ["highlight1_1", "highlight1_2", "highlight1_3", "highlight1_4"],
  },
  {
    roleKey: "role2",
    companyKey: "company2",
    periodKey: "period2",
    descKey: "desc2",
    highlightKeys: ["highlight2_1", "highlight2_2", "highlight2_3"],
  },
];

export function Experience() {
  const t = useTranslations("experience");

  return (
    <section className="section-padding bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title={t("title")} />

        <div>
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.roleKey}
              role={t(exp.roleKey)}
              company={t(exp.companyKey)}
              period={t(exp.periodKey)}
              description={t(exp.descKey)}
              highlights={exp.highlightKeys.map((key) => t(key))}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
