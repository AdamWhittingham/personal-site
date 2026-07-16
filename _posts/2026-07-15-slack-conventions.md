---
title: Slack Conventions for that Actually Scale
description: "How we grew without being killed by communication overhead"
home_summary: "How we grew without being killed by communication overhead"
---

# Slack Conventions for that Actually Scale
## How to grow your company without being killed by communication overhead

As engineering teams grow, communication overhead grows faster. Every extra person adds more conversations, more channels, and more opportunities for information to get lost or duplicated. The teams that run smoothly are not the ones that communicate the most, they are the ones that communicate deliberately. Over the years I have settled on a set of conventions for how I use Slack, and they have made a noticeable difference to how quickly decisions get made and how little time we spend repeating ourselves.

## Work in the open

The majority of communication should happen in public Slack channels. When a conversation happens in a DM, the information in it reaches exactly two people. When the same conversation happens in a public channel, it radiates outwards: teammates skim it, stakeholders spot things relevant to them, and people joining a project later can read the history rather than asking someone to repeat it.

Working in the open feels slower at first (there is a natural instinct to keep half-formed thoughts private), but the compounding effect of information reaching a wide audience by default is one of the highest-leverage habits a team can build.

## Channels are cheap (but need structure)

Slack channels are free to create, and the unread tab makes it easy to stay up to date on a large number of them. That said, an unstructured sprawl of channels becomes unwieldy quickly, so we create channels in one of two modes:

1. **Long-running channels** for projects and team discussions. These are the durable homes for a stream of work, and they stick around for as long as the project or team does. Examples are `project-design-system-v4`, a long-running channel for all stakeholders of a project, and `engineering-team-doc-brown`, a team-based channel for coordinating work on whichever projects the team is tackling.
3. **Short-term channels** for issue resolution or specific events. When an incident or a thorny problem needs focused attention, spin up a channel, resolve the issue, and archive it. Examples would be of the shape `incident-20260131-us-db-errors` or `event-20260412-ai-conference`

If a channel does not fit one of those two modes, question whether it should exist.

There is some overlap - what if I’m working on some nuance for the design system project in team Doc Brown? The deciding factor is “do the broader stakeholders care or is this a purely functional conversation?”. So, for that example, the naming structure for the CSS will impact the design team as well as engineering, and deserves to be in the project channel. Reviewing the PR that implements it is purely an in-team thing for the team channel. The PR being merged may be worth a post in the project channel.

## Keep threads short

Threads are excellent for keeping a channel readable by allowing side-bars, but they have a failure mode: the never-ending thread that becomes a shadow meeting. Our rule of thumb is that a thread should not run for more than 12 messages. If a discussion passes that point, it is a signal that the topic is bigger than a thread can handle. Take it to a call, a short-term channel, or a written proposal instead.

## Say things once

Cross-posting the same message into multiple channels creates noise and waste. Everyone who follows both channels reads it twice, replies fragment across two locations, and nobody is sure which copy is canonical. Post in the single most appropriate channel and trust the open-by-default culture to carry the information to the people who need it.

The same discipline applies within a channel. Slack lets you send a thread reply to the channel as well, and this should be used for exactly one purpose: summarising the outcome when the thread concludes. It should not be used to keep both the thread and the channel updated as the conversation unfolds, which forces everyone to follow two versions of the same discussion.

## Bring the audience to you

I’ve also seen cases where people decide the channel to message based on who is already in there, rather than the context of the message. The canonical example would be a support engineer messaging about support tickets in the #engineering channel because they want an engineers help. However, we have a #support-engineering channel that has the superset of both teams in for this purpose, and it gives us one place to spot escalations and a single spot to audit to spot the topics that are getting escalated most frequently.

It’s much better to put the message in the channel that most closely represents the context and invite people to the channel as needed, rather than going to them (or even worse, direct messaging them). This keeps each channel as the chronicle for a given concept or type of work.

## Use emoji to convey context

We use an emoji at the start of a message to denote it has extra important or to add context.

For example, conversations meander, and the decision buried in message 12 of a thread is easy to miss. When a decision is made, we mark it with the 🦺 emoji to show this needs to be highly visible.

Urgent decisions blocking work get the ⁉️ emoji, plans that need to be challenged get the 🚜 emoji, based on the idea of "Farming for Dissent" from "No Rules Rules".
We also use certain emoji reactions to simplify common requests - such as 🔮 to mean "this message doesn't have enough context for me to help and I don't have a crystal ball - please edit it with more info". 👀 and ✅ or ❓ are use to say "I'm looking at this PR/issue" and "it's resolved" or "I have left questions and comments" respectively.

It is a tiny convention with an outsized payoff: anyone can scan a channel or thread and find the decisions in seconds, without reading everything around them.

Also Huge amounts of 'filler' conversation is replaced by an emoji - "Sorry but I don't question follow what you mean, there's not enough context in here for me to know what you're looking at, can you add some more please?" becomes a simple polite 🔮 reaction.

## Mention people sparingly

An @-mention sends a notification, and notifications interrupt focused work. Reserve them for urgent issues that genuinely need someone's attention now. In normal conversation, type the person's name as plain text without the mention. They will see it when they next read the channel, which is soon enough for anything that is not urgent, and their concentration stays intact in the meantime.

## Slack is not a knowledge base

Everything in Slack should be treated as having a shelf life of a couple of weeks. It is a stream, not an archive: search is unreliable, context evaporates, and conversations scroll away. Anything worth keeping longer (decisions, designs, playbooks, agreed processes) need to be promoted out of Slack and into internal documentation, where it has a permanent home and a clear owner.

A useful habit is to end any significant thread by asking whether anything in it deserves to outlive the fortnight. If so, the thread's summary becomes the seed of a document. LLMs are proving very helpful in turning conversations into draft docs to kickstart that process.

## The payoff

None of these conventions are complicated, and each one on its own saves a few seconds or a single duplicated message. Together, they change the character of how a team communicates: information reaches the people who need it without being repeated, decisions are easy to find, interruptions are rare, and knowledge that matters ends up somewhere durable. That is what smooth-running looks like day to day, and it is built out of small, consistent habits rather than grand process.
