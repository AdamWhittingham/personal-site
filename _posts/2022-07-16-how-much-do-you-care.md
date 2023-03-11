---
title: How much do you care?
description: "It's tough to convey how much something matters to you, or how certain you are on a course of action. This post describing a simple way to communicate all of that which has worked very well for several teams"
home_summary: "Quickly explain how important something is to you"
---

A common problem in any team is deciding on what to actually do - we have nearly infinite ways to solve each problem, so it's not uncommon to end up with two or more opinions.
For software engineers, this shows up in design discussions, pairing and code reviews.

It is hard to be respectful, concise and also convey how strongly held an opinion is. Is a comment in a code review just a suggestion or an essential comment which cannot be ignored?

# How much do you care?

There's a simple system that has really helped a few teams with these scenarios:

<em>Assign how much you care about an opinion or comment out of ten.</em>

This gives an instant reflection of how confident you are, or how important you think a comment is.

For example, during a code review I'll write something like:
> 1/10: this would be easier to read if split over 3 lines.

or

> 8/10: this will cause a breaking change for accounts with X enabled.


This gives the reader an insight as to how vital this comment is without needing a lot of words; It's easy to see that a 1/10 issue is a minor matter of taste that could be addressed or ignored, while the 8/10 comment is a serious issue that needs some thought.

For example, Alice and Bob disagree on the best design, and neither has managed to convince the other after a discussion. Alice is 7/10 confident while Bob is only 4/10, so they agree to go with Alice's choice.

This has also worked well when discussing solutions in person - it's just become part of the way we communicate. Someone might make a statement and then say "That was all 3 out of 10 level stuff" and we all instantly have an understanding of the confidence and importance they wanted to convey.

## So what does the scale actually mean?
The numbers themselves don't <i>mean</i> something concrete - there is not a formal definition. The goal is to make people consider the strength of their convictions; similar to tools like Planning Poker.

However it can be useful to have a rough guideline to foster a common understanding so here's an outline of how I think of it:

<table class="definitions">
  <tr>
    <td><em>1/10</em></td>
    <td>Very optional feedback (almost always about stylistic choice around formatting)</td>
  </tr>

  <tr>
    <td><em>3/10</em></td>
    <td>Far from critical but made me frown; others will probably notice or be distracted by it. I use this as the threshold for still approving a PR without wanting more of a discussion.</td>
  </tr>

  <tr>
    <td><em>5/10</em></td>
    <td>This issue feels important and needs reconsidering/discussing</td>
  </tr>

  <tr>
    <td><em>7/10</em></td>
    <td>This is important and I think I may have a better idea here</td>
  </tr>

  <tr>
    <td><em>10/10</em></td>
    <td>This will literally destroy the company/team/customers/planet</td>
  </tr>
</table>

## What if someone always picks a high number?
This system won't save you from a colleague who feels like they need to "win" discussions.

It's a tool to save time and overly-polite wrangling in a respectful dialogue. The goal is to help you communicate clearly and find the best path together, not just say the biggest number.

I've benefited greatly from the time saved and clearer gauge of how much things matter to my colleagues, and I hope this helps you and your team achieve the same!
