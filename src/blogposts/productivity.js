const data = {
  title: "my productivity setup 📈",
  subtitle: "apps that help me do stuff",
  date: "october 27, 2019",
  content: [
    {
      body:
        "I’m always trying to increase my productivity <i>(I might actually spend more time trying to improve my productivity then actually being productive, but that’s besides the point).</i>"
    },
    {
      body:
        "Here’s all the productivity apps use for all aspects of my note-taking life, and why I’m using each of them."
    },
    {
      header: "academic notes"
    },
    {
      body:
        "For me, being in computer science, my courses fall into two main categories:"
    },
    {
      body:
        "<ol><li>Coding based computer science courses</li><li>Theory/proof based math courses</li></ol>"
    },
    {
      body:
        "I choose to distinguish between these two mainly because of the need to write more complex math equations in the more theoretical courses. Let’s start with the courses where <b>math equations aren’t required.</b>"
    },
    {
      header: "Neovim + Marked 2",
      sub: true
    },
    {
      body:
        "If you read my <a href='https://rockzhou.com/blog/codesetup' target='_blank' rel='noopener noreferrer'>other blogpost on the perfect coding setup</a>, then you know that I love Vim. In fact, text editing almost feels wrong without it once you really get used to."
    },
    {
      body:
        "That’s why I typically use a combination of Neovim and Marked 2 for notes in my computer science courses. I use Neovim to do all of the actual writing, and then use Marked 2 for a live preview of the markdown file. Personally, I think this strikes a good balance between editing speed and prettiness, as I can utilize the efficiency of Vim keybindings and the customizable themes of Marked 2."
    },
    {
      body: "Here’s an example of how it looks in action."
    },
    {
      image: {
        src: "https://foodiy-beta.s3.amazonaws.com/vim_marked.png",
        subtitle: "vim + marked 2"
      }
    },
    {
      body: "Neovim is free, but Marked 2 will cost you $20."
    },
    {
      body: "Find the two programs below:"
    },
    {
      body:
        '<ul><li><a href="https://github.com/neovim/neovim" target="_blank" rel="noopener noreferrer">Neovim</a></li><li><a href="https://marked2app.com/" target="_blank" rel="noopener noreferrer">Marked 2</a></li></ul>'
    },
    {
      body:
        'These two apps are enough to satisfy all of my note-taking apps, because I currently take all of my theory based notes on my iPad Pro with an Apple Pencil. If you have an iPad with Apple Pencil support and want to do the same thing, the app that I use is called GoodNotes 5, which you can find <a href="https://www.goodnotes.com/" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      body:
        "I’ve used both of these next two programs for computer science and math based notes, as they are both very capable of all types of formats, from tables, to code blocks, to LaTeX for math. I don’t currently use them though, for reasons that I’ll mention below."
    },
    {
      header: "Notion",
      sub: true
    },
    {
      body:
        "Diving in, Notion is unique in that it’s not only a markdown editor or even a note-taking platform, but it’s also a hybrid database/CMS system. Essentially, each word of block of content that you write can be turned into a link, which can be clicked to create another page for you to fill with more content."
    },
    {
      body:
        "Essentially what this means is that you can recursively create as much of a nested structure as you want with your content. On top of this, Notion has different content blocks that can satisfy any need, from customizable Airtable-esque tables to Kanban boards."
    },
    {
      body:
        "The reason that I don’t use these for my academic notes is that I almost felt it was overkill, and I would be spending more time figuring out the best way to organize my notes than actually writing notes."
    },
    {
      body:
        "Even though I don’t use Notion for my notes, I do use it for my database type activities, such as tracking job applications."
    },
    {
      body:
        'If you’re interested in taking notes with Notion, check out <a href="https://www.youtube.com/watch?v=ODl5FOMu8kI" target="_blank" rel="noopener noreferrer">this video</a> by Ali Abdaal, and download it <a href="https://notion.so" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "Typora",
      sub: true
    },
    {
      body:
        "Last on my list of recommended apps is Typora, which skips out on all the database features of Notion, but features one of the best live previews of enhanced markdown out of any app out there."
    },
    {
      body:
        "The problem with this app is that it must be treated like just a text editor, so all of the organization must be done manually on your own filesystem, which is not for everyone."
    },
    {
      body:
        "The reason that I stopped using Typora was mainly because I really wanted Vim keybindings, and felt that Typora didn’t really provide enough of a benefit over Vim + Marked 2 to justify using."
    },
    {
      body:
        'If you wanna try it out though, download it <a href="https://www.typora.io/" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "Personal Notes"
    },
    {
      body:
        "These are all the notes that aren’t for school. This can include anything from random ideas, to notes about my day or books that I’m reading, to cool articles I find online."
    },
    {
      header: "Bear",
      sub: true
    },
    {
      body:
        "Bear is a beautiful app for note taking and more long form writing, and is hands down the winner for me in this department. I’m actually writing this post in Bear right now!"
    },
    {
      body:
        "Its only method of organization is through a tagging system, but tags can be nested as deeply as you want, so it doesn’t feel all too limiting. It also has a pretty nice search function, so that can always be used for backup once the notes start piling up."
    },
    {
      body:
        "Finally, I love using Bear because it syncs seamlessly between my Mac and iPhone, so I don’t have to worry about managing my own files through something like Git."
    },
    {
      body:
        'Bear is completely usable for free, but pro doesn’t cost too much and unlocks a bunch of nice features such as PDF export and additional themes. Download it <a href="https://bear.app/" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "Ulysses",
      sub: true
    },
    {
      body:
        "A close second for this category is Ulysses, which features almost all of the same features as Bear, although the organization is sorted by folders instead of tags."
    },
    {
      body:
        "In terms of design, Ulysses is just as nice to look at and use as Bear, and as of right now feels a little bit more flushed out, with support for tables and some more layout options for images."
    },
    {
      body:
        "Even though Ulysses does have slightly more functionality, there’s something about Bear’s design which draws me to it more. On top of that, Ulysses requires a paid subscription to use, and costs about twice as much per year when compared to Bear’s pro subscription."
    },
    {
      body:
        'If you’re still curious, feel free to check it out <a href="https://ulysses.app/" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "Todo Lists"
    },
    {
      body:
        "I don’t use todo lists too often in my daily life because I find that my calendar and Notion do most of the work already, but when I do use todo lists, it’s normally for small things like groceries, or tasks that I have to do the next day, when I’m lying in bed."
    },
    {
      header: "Things 3",
      sub: true
    },
    {
      body:
        "This is basically the only app that I’ve tried besides Apple’s default Reminders app, and its UI and functionality if more than enough for all of my needs, so that’s what I use."
    },
    {
      body:
        'Check it out <a href="https://culturedcode.com/things/" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "Calendar"
    },
    {
      body:
        "Finally, everyone needs a calendar. There’s no need to reinvent the wheel when it comes to this, so I just use Google Calendar because it integrates with everything else where my Google account is used."
    },
    {
      header: "Google Calendar + Fantastical",
      sub: true
    },
    {
      body:
        "The actual app that I use to interact with my calendar is called Fantastical, which makes event creation extremely easy, with natural language input. It also offers beautifully designed apps for both MacOS and iOS, so there really is no reason for me to use anything else for this category."
    },
    {
      body:
        'Fantastical can be found on the Mac and iOS app stores, or online <a href="https://flexibits.com/fantastical" target="_blank" rel="noopener noreferrer">here</a>.'
    },
    {
      header: "conclusion"
    },
    {
      body:
        'That’s all that I can think of for now, but I’ll be sure to update this post if I find anything new! Also, feel free to contact me at <a href="mailto:rockzhou15@gmail.com" target="_blank" rel="noopener noreferrer">rockzhou15@gmail.com</a> if you have any questions about my productivity setup or have any suggestions.'
    }
  ]
};
export default data;
