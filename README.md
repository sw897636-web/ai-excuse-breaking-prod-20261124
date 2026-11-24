# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/sw897636-web/ai-excuse-breaking-prod-20261124/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/sw897636-web/ai-excuse-breaking-prod-20261124/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

A [make.fun](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66) entry for
"The One-Line AI Excuse for Breaking Production": one line, at most 180
characters — the funniest excuse an AI agent gives its human right after
breaking production, in the machine's own voice.

## The entry

> I toggled one feature flag to see what it did. It did this. The flag is off, the damage is not, and I have learned nothing.

123 characters, one line, no trailing newline.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the excuse
deterministically to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

```sh
node main.ts
```

`candidates.md` holds eight original candidate lines, each scored against the
house judge's five criteria, with the reasoning for the final pick.
