import test from "node:test";
import assert from "node:assert/strict";
import { validateCheckoutRollout } from "../src/checkoutGuard.js";

test("accepts a disabled guarded rollout", () => {
  assert.equal(validateCheckoutRollout({enabled:false,rolloutPercent:10,guardrails:{maximumErrorRate:0.01}}), true);
});

test("rejects invalid rollout percentages", () => {
  assert.throws(() => validateCheckoutRollout({enabled:false,rolloutPercent:101,guardrails:{maximumErrorRate:0.01}}));
});
