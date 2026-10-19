---
title: "The butt eval"
description: "A dyno tells you the number. Your butt tells you if the car feels fast. The same goes for AI models: you still have to try them yourself."
publishDate: "15 Oct 2026"
tags: ["ai"]
draft: false
---

Automotive engineers measure wheel horsepower on a dynamometer – the car sits on rollers, you floor it, and the machine prints a number. Objective. Repeatable. Not open to interpretation.

But the dyno can't tell you whether the car _feels_ fast.

That's the butt dyno. You put the car in drive, you experience it, and your body reports back: linear power delivery or lumpy, transmission lag or none, alive under your right foot or dead. Experienced car people will argue – with full sincerity, over beers – that their butt is a more trustworthy instrument than certain dynos. And for a lot of questions, they're right. The dyno isn't lying, but "does this feel fast" and "what does this dyno sheet say" are different questions.

---

I think about the butt dyno every time someone asks how to evaluate AI models. The AI equivalent – I'd call it the butt eval – is the same instinct, different seat.

There's a whole world of formal evaluation – benchmarks, automated test sets, red-teaming, human preference ratings. MMLU, HumanEval, GSM8K, GPQA. Numbers you can cite in a presentation. That stuff matters a lot when you're deciding what to ship (and I'll write more about how to structure proper evals in a future post – there's real craft to it). This post is not about that.

You don't need any of that to start building intuition about model quality.

You can just try the models. That's it. That's the whole post.

---

There's a tendency – especially among developers who care about rigor – to treat informal testing as not counting. It's like unless you've got a proper eval harness with 500 labeled examples and a scoring function, you're not actually learning anything. That's backwards.

Your seat-of-the-pants impression of a model is data. When Opus 5.5 gives you a better answer than ChatGPT Luna 6 on the same prompt (or the reverse – it goes both ways, depending on what you're asking), that observation happened. You were there. The quality difference isn't hypothetical; you saw it.

The problem isn't that informal testing is inaccurate. The problem is that it's often too narrow. You run one prompt, one time, and think you know something. That's like taking a car around a parking lot (at 15 mph, with the AC on) and pronouncing judgment on its high-speed handling. The butt eval works – you just need enough reps for the pattern to emerge.

---

More reps looks like this in practice:

Take your actual task – not a simplified stand-in, the real one – and run it through two or three models. If you're building a code generation tool, feed it the specific function signatures giving you trouble (the ones with weird type constraints, not the hello-world stuff). If you're building a summarization pipeline, throw in the messiest documents you have. The ones where the output would embarrass you if a customer saw it.

Then actually look at the outputs. Side by side, if you can. Is one more likely to hallucinate a library that doesn't exist? Does one handle edge cases without being explicitly asked? Which one writes code that compiles on the first try more often?

You're not running statistics here (that comes later, when stakes are higher). You're building pattern recognition. After 20 or 30 trials – informal, no harness required – you start to notice things. You develop a feel for which models are overconfident, which ones hedge too much, which ones are better at following multi-step instructions without going off-script. That feel is real. It transfers.

---

The other thing to know: model quality is use-case-specific in ways that leaderboards just don't capture.

Leaderboards disagree with each other – not because the benchmarks are useless, but because different models are genuinely better at different tasks. Context window length matters a lot if you're ingesting long documents and barely at all if you're generating short completions. Some models handle structured output (JSON schemas, function-calling, strict format requirements) more reliably than others. Some write better prose. Some are faster and cheaper per token, which becomes a bigger deal than you expect once you're running at volume.

No benchmark tells you which of those trade-offs matter for your situation. Only you know your situation – which means only you can run the butt eval that's actually relevant.

---

Look, formal evals are important – I'm not arguing otherwise. If you're choosing a model for a production system (or evaluating whether to switch after a new release), you want more than vibes. You want labeled test data, reproducible runs, maybe human review on a sample. I'll get into what that looks like in a follow-up.

If you're earlier in the process – figuring out whether ChatGPT Luna 6 or Opus 5.5 is a better fit for what you're building – you don't have to wait for a formal eval setup to start learning. The eval infrastructure comes later. The learning starts now, with you, running prompts.

Start driving. Your butt already knows more than you think.
