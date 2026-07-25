"use client";

import AiNudgeCard from "./AiNudgeCard";
import BattleRewards from "./BattleRewards";
import ContestLegend from "./ContestLegend";
import ContinueStudyCard from "./ContinueStudyCard";
import HeroMission from "./HeroMission";
import MomentumStrip from "./MomentumStrip";
import ReverseStudyCard from "./ReverseStudyCard";
import UpdatesTiles from "./UpdatesTiles";
import VideoCarousel from "./VideoCarousel";
import { updateCards } from "./data";

export default function HomeFeed() {
  return (
    <div className="space-y-3">
      <HeroMission />
      <BattleRewards />
      <ContestLegend />
      <AiNudgeCard />
      <ReverseStudyCard />
      <ContinueStudyCard />
      <MomentumStrip />
      <VideoCarousel />
      <UpdatesTiles items={updateCards} />
    </div>
  );
}
