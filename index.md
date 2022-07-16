---
layout: default
title: "Home"
---

I'm a <em>UK-based software engineer</em> who enjoys reading, travelling and board games.

I'm a Principal Engineer at <a href="https://cronofy.com">Cronofy</a>, building the best tools and APIs to <a href="https://cronofy.com">schedule everything for everyone</a>.

# Posts

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>

# Projects

[Vim](https://github.com/AdamWhittingham/vim-config)
|
[Shell Setup](https://github.com/AdamWhittingham/adshell)
|
[Kitty Terminal](https://github.com/AdamWhittingham/adshell/blob/master/config/kitty/kitty.conf)
|
[Tmux](https://github.com/AdamWhittingham/tmux-config)
|
[Keyboard firmware](https://github.com/AdamWhittingham/keyboards)

# Social

<div class="social">
  <a href="https://twitter.com/adamwhittingham">
    <span class="fa-brands fa-twitter"></span>
  </a>
  <a href="https://github.com/AdamWhittingham">
    <span class="fa-brands fa-github"></span>
  </a>
  <a href="https://uk.linkedin.com/in/adamwhittingham">
    <span class="fa-brands fa-linkedin"></span>
  </a>
</div>
