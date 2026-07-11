export function validateCheckoutRollout(config) {
  if (config.enabled && config.rolloutPercent <= 0) throw new Error("Enabled rollout needs a positive percentage");
  if (config.rolloutPercent < 0 || config.rolloutPercent > 100) throw new Error("Rollout percentage must be between 0 and 100");
  if (config.guardrails.maximumErrorRate <= 0) throw new Error("Maximum error rate must be positive");
  return true;
}
