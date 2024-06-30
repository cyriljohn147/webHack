"use client";
import { Container } from "@/components/Container";
import { Exercise } from "@/components/Exercise";
import { exerciseData } from "@/components/data";

export default function Streak() {
  return (
    <Container className="flex flex-wrap">
      <div className="w-full">
        <Exercise techniques={exerciseData.techniques} />
      </div>
      <div className="w-1/2"></div>
    </Container>
  );
}
