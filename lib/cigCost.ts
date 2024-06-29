export default function cigCost(cigPerDay: number, streak: number): number {
  const cigCost = 18;
  return cigCost * cigPerDay * streak;
}
