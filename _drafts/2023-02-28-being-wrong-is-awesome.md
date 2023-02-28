---
title: Being wrong is awesome
description: 
draft: true
---

# Being wrong is awesome!
## (and here's how to be better at it)

Most people have worked with one of those people who is blessed with great intellect but are accustomed to always being right.

Maybe it's down to a lack of humility, or too much confidence in their own ideas leads, or something else entirely, but it adds friction into our teams, and friction generates heat and wears things down.
Teams can be organised to empower a gifted "lone wolf", but that just sidesteps the issue.
Sometimes that person can be fine to work with but just isn't adding more than their own efforts to a team - they do good work but just  don't help to improve those around them.

I've been on both sides of this issue, and want to share the advice that has helped me be a better teammate and a better team leader.


# Be Wrong Sometimes

An unfortunate pattern I've seen play out more than once is the smart engineer who is _often_ right. So often that they really found it difficult to be wrong.
They would constantly make snide remarks every time an issue came up that "If we'd built my idea instead this wouldn't be an issue" or bring up their pet rework project every planning session, despite the idea being thoroughly discussed and decided it wasn't going to provide enough benefit for at least a few years.

The team dynamics quickly shifted into factions:
- The majority of the team found the person in question abrasive and hard to work with, resenting their good advice and trying to keep any new decisions out of earshot.
- The engineer in question became increasingly pushy in trying to be heard and trying to force their will on the team 100% of the time.

Often, the difficult engineer would have one or two people who vehemently agreed with them _in private_, stoking the righteous fury that things were not as good they could be. Arguments were rehashed often, with decreasing respect, as both sides tired of the others perceived stubbornness.

In each case, the result was the same: the trenches were dug, and the teams became highly dysfunctional until pretty major interventions occurred.

While there are many great posts, books and talks on how to resolve conflicts like this, prevention is better than cure.

This is where the first quote really hit home with me:

> Never win more than 70% of the time.
> <cite> </cite>

This advice really hits the mark in two different ways:
- If you are often right, it reminds you to be humble and help coach teammates so they get the win.
- If you are struggling with obstinate colleagues, it helps you de-escalate your contribution to the dynamic by deliberately avoiding being the one with the answer.

Neither of these mean "just shut up" or "argue the insane to lose on purpose" - both of these are going to deprive the team of your expertise or compromise your integrity.

Instead, focus on asking better questions - facilitate the discussion to a good answer. Even if it's not the _best_ answer, help those around you work through it. Give them the benefit of your expertise not by telling them an answer, but by making them think though the pitfalls they've not spotted yet.

By shifting into this mode at least 30% of the time, you can not only still provide value, but do so in a way that will help your colleagues grow, starting a feedback cycle that will make you a better communicator and build a stronger team.


# Be Wrong Scientifically

One of the most most precious resources we are trusted with as more senior engineers, is the time of those we are working with. This is both expensive in terms of raw capital used to pay everyone, as well as in the social capital that we gain when we help everyone succeed.

Having a project not deliver carries negative connotations, but most companies are trying to do things that haven't been done before; this paradox of "break the mould but in a reliable way with no missteps" is probably one of the biggest contributing to poor performance in Software Engineering teams[^1].

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

Imposter syndrome is often experienced at all levels, but it's possible to exaggerate it in more junior teammates when they see you easily complete something they are struggling with.

Showing that we are fallible can help demystify the areas where building things are more art than science, and show that recovering from mistakes, learning from them and not beating yourself up are all skills too.

> “Mistakes should be examined, learned from, and discarded; not dwelled upon and stored.”
> <cite>Tim Fargo</cite>

Dwelling on mistakes is something that I've spent far too much energy on in the past, and that brainpower could be spent on fixing the issue rather than replaying the mistakes. I hope to help those around me accept, learn and recover faster than I have in the past.


# Be Wrong Loudly

I often advocate for working through problems and thought-processes aloud when possible, but there is a hidden gotcha in this too. Being too vague around key mechanisms can really cause a focussed team to suddenly diverge just as momentum is building. For example, knowing that you are building 3 components that will pass data around is fine, but deciding that data will be JSON with certain pre-designed keys can vastly de-risk a project.

This is where the next quote comes in:

> Vague sticks around, but Wrong gets Corrected
> <cite>Tanya Reilly - [The Staff Engineers Path][staffeng]</cite>

It's better to decide _something_ to the resolution that it can be worked with and built again, even if that thing is wrong.
With a vague "A will talk to B, which will do something and pass it to C" leaves the door open for hesitation and inconsistency.
With a defined common idea, there is almost no chance that incompatible decisions will be made, even though there is _some_ chance it'll need to be changed for other reasons.

The assertion might be wrong, but it'll definitely be spotted and discussed or documented if it doesn't work.
A vague option can lurk, fester and spread, adding bet-hedging code that may never be removed or discussed.

## ...but not _too_ loudly

All of the above advice served me very well. However, as I adjust to new roles with more sway in an organisation, it's important to remember that you can **say too much**.
In a position where there is a larger experience gap, a principal engineers half-baked wondering could become a junior devs project for the week. It's always important to be mindful of your audience, and be careful to only show more junior devs the process to derive an answer. Idle wondering in-front of a senior who knows enough to know a bad idea when they hear it is one thing, but be careful to explain a few options and _why_ you're recommending one over the other to more junior colleagues.

[^1]: Apart from all the other ones.

[staffeng]: https://www.oreilly.com/library/view/the-staff-engineers/9781098118723/
