---
title: A blog with Gatsby
date: '2019-05-01T14:00:00.000Z'
verb: started
description: 'All the cool kids are doing it!'
cover: ./_JMA2445.jpg
---

Today I started a blog with [Gatsby]!

[gatsby]: https://www.gatsbyjs.org/ 'Fast in every way that matters'

## Why

There are more than enough writers on the internets, covering any subject imaginable; but that doesn't change the fact that **I** am a creative person and could use more outlets for my thoughts! Even if the tech world at large won't benefit from my posts, I know I will from putting them together 🙌🏼

And, hey, if somebody does find my musings interesting or useful, that's a fantastic bonus. Do get in touch to let me know you're out there 😁

Still, why not just post to [Medium]? Again, it's for my personal benefit. I find the best way **I** learn something is to build something real with it! It's one thing to read about [Flutter], and another to build an MVP with it. Getting dirty with code exposes the strengths and weaknesses of the framework / methodology / pattern I'm interested in exploring.

That said, I will still be cross-posting content over at Medium: unlike engineering superstar [Dan Abramov], I don't have a following that will find my work no matter where it is on the internet! And, even if the key point here is personal, the more people I do reach, the better.

So, how about that Gatsby?

[medium]: https://medium.com/
[flutter]: https://flutter.io/ 'Beautiful apps in record time'
[dan abramov]: https://overreacted.io/ 'Pun on being most known for work in React?'

## How: Gatsby

Gatsby.js is a static website generator that I did toy with a couple of years back, but it has only been exploding in popularity since. It feels like it's becoming its own platform, irrespective of Javascript or React, akin to how [Wordpress] became its own thing, irrespective of PHP.

Static website generators themselves are still trending in general, combining the dynamism of single-page apps with user, and SEO, friendly render times. Another one I've tried is [Hugo]: I wanted to do more in Golang then, and I still hear good things about it now.

All static website generators have always been no-brainers for simple portfolio websites; then they became easy go-tos for simple blogs by working nicely with markdown, then for more complicated multi-author blogs by integrating with services like [Contentful], and eventually even full-fledged business websites by integrating with the likes of [Shopify]. Nowadays, is there anything you **cannot** build with them?!

![Here's looking at you, kid](https://i.giphy.com/media/rY93u9tQbybks/giphy.webp)

But just because you **could** doesn't mean you **should**, which I guess is what I'm trying to tease out by creating this blog with Gatsby. Gatsby is based in Javascript / Typescript which has been my bread and butter for years, which means I won't be worrying about the language at all and be focused on what the framework is giving me. Gatsby is also putting [GraphQL] front and center, which I 100% appreciate. I love GraphQL and promote it whenever I can: I want to shape a future where people reach for it as easily as they reach for your classic RESTful API.

Of course, this blog will start out quite simple before I bring in more niche features, like checkout flows, but I do already have some things highlight!

[wordpress]: https://wordpress.org/ 'Blog Tool, Publishing Platform, and CMS'
[hugo]: https://gohugo.io/ 'It claims it is the fastest!'
[contentful]: https://www.contentful.com/ 'Content Infrastructure for Digital Teams'
[shopify]: https://www.shopify.com/ 'Sell online, on social media, or in person'
[graphql]: https://graphql.org/ 'A query language for your API'

## Peeves

Right out the box there are a couple of small "code style" nits that might seem silly, but I am worried they'll catch on as Gatsby grows more popular still.

First one is using template literals **for every string**, even when you aren't using an expression / variable inside it! Can you really not be bothered to change your quotes into back-ticks when you do decide to use something dynamic in them? In my eyes it makes me think you **meant** to use a variable, but forgot, and are therefore left with a bug in your code.

Second one is using `kebab-case` for the filenames of component files. I don't think I've ever seen that convention in anything moderately popular, even when React was in its infancy, so it was just so jarring to see in 2017, let alone 2019.

But alright, above nits aside, the biggest and **actual** problem with a Gatsby project is how badly it plays with my editor. [Visual Studio Code] just refuses to help me! What's the point of using Typescript if I can't get automatic imports, speedy project-wide refactors and brilliant intellisense? I don't pass objects to methods that expect strings **that** often.

Is it me doing something wrong? Check out the [source code], and let me know 😉

Even so, given how a lot of my forthcoming praises are about things that "just work" with no effort on my part, it is a bit sad my editor just doesn't.

[visual studio code]: https://code.visualstudio.com/ 'Almost as clever as Webstorm, almost as fast as Sublime'
[source code]: https://github.com/jmagrippis/blog/ 'crowd-sourcing code quality since 2019'

## Wins

There is a plethora of [Gatsby starters] that should allow even a rookie developer to create something performant that looks professional with little effort! I do think the popular ones have some... unfortunate... styling and typography solutions enforced, but I guess if I feel that strongly about it, I should create better alternatives myself 😛

Bringing in Typescript, or esnext, or css imports into a component "just works". I would have minded this "magic" if we were still in ye ol' [Webpack] days, but with [Parcel] also allowing developers to get "real" apps out in production without really needing to look behind the curtain and wrangle tangled messes of babel and/or typescript compiler configurations, I think the simplicity is fantastic.

Hot-reloading also "just works" which always makes development much faster and pleasurable.

As do the plugins, such as [remark-images] which "magically" generates responsive images and their quick-loading "blurry preview" versions for the initial load. All you really need is some vague understanding of how the graphql queries work, or enough tenacity to copy & paste your way to victory. A huge benefit of using a popular tool is how easily you can find code samples for your use case.

The danger there, of course, is that people who don't really know what they're doing will be creating their Frankestein's monster of a website: something terrifying that is alive much to the chagrin of the community. But, much like Javascript itself, it won't be the tool that's "bad", it's the people that use it incorrectly.

But back on subject, yeah, there is a "just works" feel throughout, which gets a big thumbs up from me 👍🏼

It gives me confidence you could build a "production" app with Gatsby without jumping too far out of the box!

[gatsby starters]: https://www.gatsbyjs.org/starters/?v=2 'Too much magic'
[webpack]: https://webpack.js.org/ 'bundle your assets'
[parcel]: https://parceljs.org/ 'Blazing fast, zero configuration web application bundler'
[remark-images]: https://www.gatsbyjs.org/packages/gatsby-remark-images/ 'quick-loading responsive images'

## The Blog

So, besides playing with Gatsby, what are the goals of this blog? I am hoping to:

- Write more often. On the way to that, it's likely I'll be celebrating more achievements, big and small, voicing opinions on more subjects, and working **the brand** more! Each one of these ancillaries has its own benefits.

- Get my photos out in the public eye, as companion pieces too! Sure, my personal blog does not really qualify as "the wild", but it's still wilder exposure than my personal, private, instagram, and in a different format. I'll probably be uploading pictures I use here in the excellent [Unsplash] as well.

- Improve more rapidly. The fastest way to improve an app, is to be getting it and its new features and iterations in front of real users as fast as possible. It stands to reason that if I apply this with my thought process, I'll always be improving the app that is my brain at an unheard of pace.

Hm... "Your brain as an app" sounds like a title begging for an article...

[unsplash]: https://unsplash.com/ 'The most generous community of photographers'
