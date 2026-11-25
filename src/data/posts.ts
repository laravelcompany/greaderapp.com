export const posts = [
  {
    slug: 'opml-subscriptions-are-portable',
    title: 'Moving RSS subscriptions with OPML',
    answer: 'OPML is a portable outline format commonly used to exchange RSS subscription lists. gReader News supports OPML import and export, so your subscription list does not have to stay in one reader.',
    sections: [
      ['What travels with the file', 'An OPML subscription entry can hold a feed URL and a title. The specification describes outlines and attributes, not a universal backup of every reader feature. Do not assume that an export includes downloaded articles, starred items, reading progress or account credentials. Keep the original reader available until you have checked the result.'],
      ['Check a migration before relying on it', 'Export subscriptions from the old reader, retain a copy of that file, and import it into the destination. Compare folders and a few known feed URLs. Then refresh the feeds and check that new items arrive. A subscription can import successfully while its publisher is temporarily unavailable, so distinguish list transfer from successful feed fetching.'],
      ['Keep a way out', 'An export is useful even when you are not changing apps. Save a copy somewhere you control before clearing application data or replacing a device. An OPML file is a reading-list backup, not a guarantee that a publisher will keep every historical article online.'],
    ],
    sources: [['OPML 2.0 specification', 'https://opml.org/spec2.opml'], ['gReader News app source', 'https://github.com/laravelcompany/app.greaderapp.com']],
  },
  {
    slug: 'offline-reading-needs-cached-content',
    title: 'What offline reading can and cannot promise',
    answer: 'Offline reading means using content that is already stored on your device. gReader News has local storage and offline preferences, but an unavailable network cannot supply an article or image that has not been fetched yet.',
    sections: [
      ['Prepare before the connection disappears', 'Refresh your subscriptions while connected, open the articles you expect to need, and check them with the network turned off before relying on them during a journey. This is a practical check, not a claim that every publisher allows full-text retrieval or that every media attachment is cached.'],
      ['A feed entry is not always the full article', 'RSS permits a description to contain a synopsis rather than a complete article. A headline appearing in your list therefore does not prove the full text is available offline. The publisher decides what the feed contains; reading-mode extraction is a separate request with its own failure cases.'],
      ['Images and audio are separate resources', 'An article can reference remote images or podcast media. Seeing the text while connected does not establish that every referenced resource is stored locally. The gReader News release notes describe image URL resolution improvements, but do not certify every publisher or a complete real-device offline test.'],
    ],
    sources: [['RSS 2.0 specification', 'https://www.rssboard.org/rss-specification'], ['gReader News release notes', 'https://github.com/laravelcompany/app.greaderapp.com/blob/main/docs/releases/0.0.3.md']],
  },
  {
    slug: 'how-feed-discovery-uses-website-metadata',
    title: 'How gReader News discovers a website feed',
    answer: 'Feed discovery looks for feed links advertised by a website. The gReader News release notes describe HTML metadata parsing, URL deduplication and redirect-aware resolution, rather than treating every page URL as a feed.',
    sections: [
      ['A website address and a feed address differ', 'A website can publish a normal HTML page and advertise an RSS or Atom feed in its metadata. Discovery follows that information. A site without discoverable metadata may still offer a feed elsewhere, so a failed discovery is not proof that no feed exists.'],
      ['Redirects and relative links matter', 'The release notes explain that relative feed links resolve against the final website URL after redirects. They also describe exact relationship and MIME-token checks, decoding entity-encoded URLs, and ignoring commented-out links. These are documented implementation details, not a guarantee that all unusual websites are supported.'],
      ['Separate discovery failure from storage failure', 'The same notes distinguish local storage errors from a no-feed result. That distinction matters: retrying discovery cannot repair a device that cannot save the subscription. Check the displayed error and retain a known feed URL when reporting a problem, rather than assuming every empty result has the same cause.'],
    ],
    sources: [['gReader News discovery changes and limits', 'https://github.com/laravelcompany/app.greaderapp.com/blob/main/docs/releases/0.0.3.md'], ['HTML link element specification', 'https://html.spec.whatwg.org/multipage/semantics.html#the-link-element']],
  },
  {
    slug: 'local-reading-and-the-web-proxy',
    title: 'Local reading does not make every network request local',
    answer: 'gReader News stores the local reading list on the device, but its browser and Android feed-request paths differ. The site privacy policy says web requests pass through a server proxy, while Android requests go directly to publishers.',
    sections: [
      ['Storage and transport are different questions', 'Where subscriptions are stored is separate from which systems handle a request. Local article storage does not mean that a publisher, network operator or hosting provider cannot observe a network request. Read privacy claims at the level of the specific action being performed.'],
      ['The browser proxy is an explicit part of the web path', 'The published privacy policy says the browser sends a feed address to the project server, which fetches the feed and returns it. It states that the proxy does not keep an application database of fetched addresses or content, while noting that the hosting provider may keep infrastructure logs. That is narrower than saying no server ever sees a feed address.'],
      ['Android still contacts external publishers', 'Direct device fetching means the publisher receives a request from the device. Feed discovery and podcast search also involve external sources. The website separately uses advertising and analytics technology, so the app reading-list storage model must not be presented as a description of every website cookie or request.'],
    ],
    sources: [['gReader News privacy policy', 'https://greaderapp.com/privacy-policy'], ['gReader News app source', 'https://github.com/laravelcompany/app.greaderapp.com']],
  },
  {
    slug: 'reading-release-notes-without-overclaiming',
    title: 'What gReader News release notes actually verify',
    answer: 'Release notes describe changes and their verification limits. A source version, successful unit test or prepared Android bundle is not by itself proof of a store rollout, a complete device test or universal feature compatibility.',
    sections: [
      ['Use changes as specific evidence', 'The 0.0.3 notes identify responsive-image fixes, redirected article URL handling, Keep unread behavior and feed-discovery error handling. These are useful concrete changes to check when reproducing an issue. They should not be compressed into a broader claim that every reading or discovery issue is fixed.'],
      ['Tests have a scope', 'The notes distinguish automated tests and browser fixtures from complete Android acceptance. They also leave device battery and memory validation for AI summaries and native widget behavior as follow-up work. A feature can exist in source while its device behavior still needs checking.'],
      ['Store availability is a separate check', 'The release-preparation document explicitly says it does not perform a Google Play rollout. Use the actual store listing to check availability for your account and device. When reporting a problem, include the installed version and the action that failed, rather than assuming the website and every installed app share the same revision.'],
    ],
    sources: [['gReader News 0.0.3 release notes', 'https://github.com/laravelcompany/app.greaderapp.com/blob/main/docs/releases/0.0.3.md'], ['Google Play listing', 'https://play.google.com/store/apps/details?id=app.greaderapp.com']],
  },
];
