//! Confirmations     → 50 نقطة
function confirmationScore(count: number): number {
  if (count >= 25) return 50;
  if (count >= 10) return 40;
  if (count >= 3) return 25;
  if (count >= 1) return 15;
  return 0;
}
//! completeness     → 25  نقطة
function completenessScore(place: {
  phone: string | null;
  description: string | null;
  area: string | null;
}): number {
  let score = 0;
  if (place.phone) score += 11;
  if (place.description) score += 9;
  if (place.area) score += 5;
  return score;
}
//! Freshness         → 15 نقطة
function freshnessScore(updatedAt: Date): number {
  const days = (Date.now() - updatedAt.getTime()) / (1000 * 60 * 60 * 24);

  if (days <= 7) return 15;
  if (days <= 30) return 10;
  if (days <= 90) return 5;
  return 2;
}
//! Reports penalty   → -30 ناقص نقطة
function reportsPenalty(reportCount: number): number {
  return Math.min(reportCount * 6, 30);
}

function clamp(n: number, min = 0, max = 100) {
  return Math.max(min, Math.min(n, max));
}

//* حساب النتيجة النهائية
export function computeScore(place: {
  confirmCountCached: number;
  reportCountCached: number;
  phone: string | null;
  description: string | null;
  area: string | null;
  updatedAt: Date;
}): number {
  const score =
    confirmationScore(place.confirmCountCached) +
    completenessScore(place) +
    freshnessScore(place.updatedAt) -
    reportsPenalty(place.reportCountCached);

  return clamp(score);
}

//! Confirmations     → 50
//! Completeness      → 25
//! Freshness         → 15
//! Reports penalty   → -30
//! -------------------------
//! Total             100
