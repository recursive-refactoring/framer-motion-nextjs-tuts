import ChangeLogsFeature from "@/features/logs/change-logs";
import { ComponentsFeature } from "@/features/examples/components";
import ActivityInfoCard from "@/components/cards/activity-info-card";
import { HeroCard } from "@/components/cards/hero-card";

export default function Home() {
  return (
    <>
      {/* <ComponentsFeature />
      <ChangeLogsFeature /> */}
      {/* <ActivityInfoCard
        name="Let us try"
        info="Motion frmaer is aathe aminaiton aod"
      /> */}
      <HeroCard />
    </>
  );
}
