---
layout: default
title: "Home"
---

# Hi!
I'm a <em>software engineer</em> who enjoys reading, D&D and making cool stuff.

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
  <a rel="me" href="https://ruby.social/@ad" aria-label="View Adam's Mastodon profile">
    <span class="fa-brands fa-mastodon"></span>
  </a>
  <a href="https://twitter.com/adamwhittingham"aria-label="View Adam's Twitter profile">
    <span class="fa-brands fa-twitter"></span>
  </a>
  <a href="https://github.com/AdamWhittingham" aria-label="View Adam's Github profile">
    <span class="fa-brands fa-github"></span>
  </a>
  <a href="https://uk.linkedin.com/in/adamwhittingham" aria-label="View Adam's LinkedIn profile">
    <span class="fa-brands fa-linkedin"></span>
  </a>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/brands.min.css" integrity="sha512-OivR4OdSsE1onDm/i3J3Hpsm5GmOVvr9r49K3jJ0dnsxVzZgaOJ5MfxEAxCyGrzWozL9uJGKz6un3A7L+redIQ==" crossorigin="anonymous" referrerpolicy="no-referrer" media="all" />
