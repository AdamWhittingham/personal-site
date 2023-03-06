---
title: Being wrong is awesome
description: 
draft: true
---

# Being wrong is awesome!
## (and here's how to be better at it)

Engineers often prize being correct over most other things. After all, we are logical and want to make things as good as we possibly can.

Unfortunately, this makes certain types of conflict much more prevalent; many of us have worked with someone who is really smart and accustomed to being right.
This adds friction into our teams, and friction generates heat and wears things down.

It's a delicate topic when we're talking about the people we work with, but it comes up often enough that is worth some thought.
The answer isn't to empower a gifted "lone wolf" - that just sidesteps the issue and creates a single point of failure.

So what can we personally do to mitigate it?


# Be Wrong Sometimes

An unfortunate pattern I've seen play out more than once is the smart engineer who is _often_ right: so often that they find it difficult to be wrong.
They would constantly make snide remarks every time an issue came up that "If we'd built it my way instead, this wouldn't be an issue" or bring up their pet rework project every planning session, despite the idea being thoroughly discussed and decided it wasn't going to provide enough benefit for at least a few years.

The team dynamics quickly shifted into factions:
- The majority of the team found the person in question abrasive and hard to work with, resenting their good advice and trying to keep any new decisions out of earshot.
- The engineer in question became increasingly pushy in trying to be heard and trying to force their will on the team 100% of the time.

Often, the difficult engineer would have one or two people who vehemently agreed with them _in private_, stoking the righteous fury that things were not as good they could be.
Arguments were rehashed often, with decreasing respect, as both sides tired of the others perceived stubbornness.

In each case, the result was the same: trenches were dug and the team became highly dysfunctional until major interventions occurred.

While there are many great posts, books and talks on how to resolve conflicts like this, prevention is better than cure.

This is where the first quote really hit home with me:

> Never win more than 70% of the time.
> <cite> </cite>

This advice really hits the mark in two different ways:
- If you are often right, it reminds you to be humble and help coach teammates so they get the win.
- If you are struggling with obstinate colleagues, it helps you de-escalate your contribution to the dynamic by deliberately avoiding being the one with the answer every time.

This advice does not mean "just shut up" or "argue the insane to lose on purpose" - both of these options are going to deprive the team of your expertise or compromise your integrity and add to a feeling of immaturity around conflict.

Instead, shift your focus on asking better questions as neutrally as possible, and facilitate discussion towards a decent solution.
Even if it's not the _best_ answer, help those around you work through it: give them the benefit of your expertise not by telling them an answer, but by making them think though the pitfalls they've not spotted yet. Make sure others are the ones in the spotlight.

By shifting into this mode at least 30% of the time, you can not only avoid fueling resentment, but you can still provide value in a way that helps your colleagues grow and makes you a better communicator.


# Be Wrong Scientifically

One of the most most precious resources we are trusted with as more senior engineers, is the time of those we are working with. This is both expensive in terms of raw capital used to pay everyone, as well as in the social capital that we gain when we help everyone succeed.

Having a project not deliver carries negative connotations, but most companies are trying to do things that haven't been done before; this paradox of "break the mould but in a reliable way with no missteps" is probably one of the biggest contributing to poor performance in Software Engineering teams[^1].

We also learn most when we're right on the edge of our comfort zone, and that means trying things that may not pan out.

> I can accept failure, everyone fails at something. But I can't accept not trying.
><cite>Michael Jordan</cite>

Thankfully there's a huge amount we can borrow from other fields to take sensible gambles.
By far the biggest one is to always find the smallest step we can take from here to something that will generate feedback.

Sometimes this is easy an obvious, but other times not so much, and we need to go a bit off the path to find it.

A recent example is in building a logging/journal system, where we wanted to optimise for high throughput. However, writing all the data to disk isn't very useful unless we can retreive it too. This means the smallest features we could think to build was 50% of the system - a journal writer and some indexer to perform basic queries against.
We discussed ways to find something smaller or easier to gain feedback that both sides could be fast enough.
The smart decision was to write the files with filenames that included the three fields we wanted to query by in the filename. No longer would we need to to build a whole indexer to query - for a minimum viable product, we could use good old `find`, or `ls` and `grep`. This halved what we needed to build and we had something working just about quick enough inside of 3 weeks instead of 6+.

It's not always clear what the smallest step is, but it is almost always worth taking a small detour now to guarantee confidence tomorrow, rather than trying to build the perfect system and not getting confidence for two weeks.


# Be Wrong Empathetically

The term "Authority Gradient" describes the perceived imbalance of power between colleagues of different seniorities. It has often been cited as a contributing factor to accidents, where a more junior person has spotted something or wanted to question something but has avoided it for fear of looking foolish or appearing to challenge their seniors.
This is clearly a risk to software teams too, where we can have quite a wide spread of experience.

Another omnipresent risk is Imposter syndrome; while it is experienced at all levels, it's possible to exaggerate it in more junior teammates when they see you easily complete something they are struggling with.

Showing that we are fallible can help demystify the areas where building things are more art than science, and show that recovering from mistakes, learning from them and not beating yourself up are all skills too.

> Mistakes should be examined, learned from, and discarded; not dwelled upon and stored.
> <cite>Tim Fargo</cite>

Dwelling on mistakes is something that I've spent far too much energy on in the past, and that brainpower could be spent on fixing the issue rather than replaying the mistakes. I hope to help those around me accept, learn and recover faster than I have in the past.

I find it useful, both for the team and myself, to share a short summary of mistakes that have happened. This can be written or, if short enough, said at a retrospective or stand-up meeting. The recipe is simple:

1. Concise summary of what happened
2. How the mistake was made
3. How it was spotted
4. How it was repaired
5. What we learned or setup to prevent similar issues in the future.


# Be Wrong Loudly

I often advocate for working through problems and thought-processes aloud when possible, but there is a hidden gotcha in this too. Being too vague around key mechanisms can really cause a focussed team to suddenly diverge just as momentum is building. For example, knowing that you are building 3 components that will pass data around is fine, but deciding that data will be JSON with certain pre-designed keys can vastly de-risk a project.

This is where another excellent quote comes in:

> Vague sticks around, but Wrong gets Corrected
> <cite>Tanya Reilly - [The Staff Engineers Path][staffeng]</cite>

It's better to decide _something_ to the resolution that it can be worked with and built again, even if that thing is wrong.
With a vague "A will talk to B, which will do something and pass it to C" leaves the door open for hesitation and inconsistency.
With a defined common idea, there is almost no chance that incompatible decisions will be made, even though there is _some_ chance it'll need to be changed for other reasons.

The assertion might be wrong, but it'll definitely be spotted and discussed or documented if it doesn't work.
A vague option can lurk, fester and spread, adding bet-hedging code that may never be removed or discussed.

## ...but not _too_ loudly

All of the above advice served me very well. However, as I moved into roles with more influence, it's been important to remember that you can also say **too much**.
For example, in situations with a large experience gap, a principal engineers half-baked wondering could become a junior devs project for the week.

It's always important to be mindful of your audience, and be careful to only show more junior devs the process to derive an answer. Idle wondering in-front of a senior who knows enough to know a bad idea when they hear it is one thing, but be careful to explain a few options and _why_ you're recommending one over the other to more junior colleagues.

[^1]: Apart from all the other ones.

[staffeng]: https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/
