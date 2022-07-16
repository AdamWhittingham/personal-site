A common problem in any team is deciding on what to actually do - we have nearly infinite ways to solve each problem, so it's not uncommon to end up with two or more opinions.
For software engineers, this shows up in design discussions, pairing and code reviews.

It is hard to be respectful, concise and also convey how strongly held an opinion is. Is a comment in a code review just a suggestion or an essential comment which cannot be ignored?

# A simple answer
There's a simple system that has really helped a few teams with these scenarios:

**Assign how much you care about an opinion or comment out of ten.**

This gives an instant reflection of how confident you are, or how important you think a comment is.

For example, during a code review I'll write something like:
> 1/10: this would be easier to read if split over 3 lines.

or

> 8/10: this will cause a breaking change for accounts with X enabled.


This gives the reader an insight as to how vital this comment is without needing a lot of words; It's easy to see that a 1/10 issue is a minor matter of taste that could be addressed or ignored, while the 8/10 comment is a serious issue that needs some thought.

This has also worked well when discussing solutions.

Alice and Bob disagree on the best design, and neither has managed to convince the other after a discussion. Alice is 7/10 confident while Bob is only 4/10, so they agree to go with Alice's choice.

## So what does the scale actually mean?
The numbers themselves don't _mean_ something concrete - there is not a formal definition. The goal is to make people consider the strength of their convictions; similar to tools like Planning Poker.

However it can be useful to have a rough guideline to foster a common understanding so here's an outline of how I think of it:

1/10 - very optional feedback (almost always about stylistic choice around formatting)

3/10 - doesn't matter in the grand scheme of things but made me frown, people will probably notice or be distracted by it.  I use this as the threshold for still approving a PR without wanting more of a discussion.

5/10 - this issue feels important and needs reconsidering/discussing

7/10 - this is important and I think I may have a better idea here

10/10 - this will literally destroy the company/team/customers/planet

## What if someone just always picks a high number to win debates?
This system won't save you from a colleague who feels like they need to "win" discussions. 

It's a tool to save time and overly-polite wrangling in a respectful dialogue. The goal is to help you communicate clearly and find the best path together, not just say the biggest number.

I've benefited greatly from the time saved and clearer gauge of how much things matter to my colleagues, and I hope this helps you and your team achieve the same!
