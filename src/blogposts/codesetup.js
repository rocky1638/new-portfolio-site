const data = {
  title: "my local dev setup",
  subtitle: "aka: why you should learn vim",
  date: "march 26, 2019",
  content: [
    {
      header: "tl;dr",
    },
    {
      body: "I use iTerm2 with Vim and tmux, with a bunch of cool plugins, themes, and fonts.",
    },
    {
      header: "a quick rundown",
    },
    {
      body: "Before I dive into my current setup, I want to talk about my history with text editors, for some context. If you just want to see the setup, feel free to skip this section."
    },
    {
      body: "When I first started coding about 3 years ago, I used <a href='https://atom.io/' target='_blank'>Atom</a>, because the one tutorial I watched on YouTube said it was good, and that was about the only reason I used it. Although it did satisfy my limited needs as a beginning developer, I quickly began to notice that as my files got larger, Atom got <b>very</b> laggy."
    },
    {
      body: "Eventually, I got tired of the lag and switched over to <a href='https://code.visualstudio.com/' target='_blank'>Visual Studio Code</a>, which for a while, was pretty great. It had a very active developer community creating extensions and ran significantly smoother for me than Atom did."
    },
    {
      body: "To be completely honest, I really started getting annoyed at having to move my fingers to either the arrow keys or the trackpad, whenever I wanted to do anything significant in terms of moving code around. I had heard of Vim before, but never really looked into it, and so one day during work, I decided to take the plunge and try to learn Vim."
    },
    {
      body: "The following post is not meant to teach Vim, but just an overview/guide on how to setup your terminal like mine. If you really want to learn vim, the first thing I would suggest is to type <code>vimtutor</code> into your terminal, and work through that tutorial, which takes about 20 minutes."
    },
    {
      body: "After you familiarize yourself with that, I highly recommend going through <b>Practical Vim</b>, by Drew Neil."
    },
    {
      body: "Anyways, time to jump in!"
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/terminal1.png",
        subtitle: "my setup",
      },
    },
    {
      header: "prerequisites",
    },
    {
      body: "Note that this tutorial will be targeted towards Mac OS, but most of the stuff I talk about will work on Linux and Windows with some tweaks, but you'll have to Google around some more.",
    },
    {
      body: "Before we begin, if you don't have <a href='https://brew.sh/' target='_blank'>Homebrew</a> installed yet, make sure to install that right now.",
    },
    {
      header: "iterm2 + zsh",
    },
    {
      body: "First of all, we're going to want install iTerm2 and ZSH, which gives us a bunch of cool features that the regular Mac terminal doesn't provide. For a great tutorial to get started, check out <a href='https://medium.com/@falieson/setup-zsh-w-antigen-and-a-spacey-theme-7a66808218dc' target='_blank'>this Medium article by Florian Mettetal</a>."
    },
    {
      body: "After you're done walking through that article, you should have iTerm2 installed, with a ZSH shell, and any custom themes that you might have found. If you're curious about my theme/font, skip to the bottom."
    },
    {
      body: "There's plenty of documentation out there about why ZSH is better than the standard UNIX shell, but here are some of my most used features."
    },
    {
      body: "First off, you can get intelligent tab-autocompletion on almost <i>every command you type</i> - this includes Git branch names and even the options for CLI packages that you're unfamiliar with."
    },
    {
      body: "Next, something that really adds up over time is the feature where you can <code>cd</code> into a directory without ever typing those two letters. Simply type the path to the directory that you want to enter, and ZSH will automatically change into it."
    },
    {
      body: "Finally, ZSH comes with a bunch of aliases out of the box, including several for <code>git</code>, as well as some more interesting ones that you never thought you needed, like the triple dot. Now, when you want to move two directories up, don't do this,"
    },
    {
      code: "cd ../.."
    },
    {
      body: "Just do this."
    },
    {
      code: "...",
    },
    {
      body: "For a list of all the aliases that you now have access to, just type <code>alias</code> into your terminal and start exploring. For now though, it's time to move onto Vim.",
    },
    {
      header: "vim",
    },
    {
      body: "There's probably hundreds or thousands of articles online that describe the benefits of Vim over traditional text/code editors, so I won't belabor the details, but just no that once you get really good at Vim, <b>no other method of editing large amounts of text will feel as good.</b>",
    },
    {
      body: "So, assuming that you've typed <code>vim</code> into your terminal and have familiarized yourself with moving around a file, let's get into the settings that will make your Vim easier to use. Just remember that the spirit of Vim is personalization and tinkering, so I'll just be giving some of my favorite settings and plugins, as opposed to providing the entirety of my settings.",
    },
    {
      body: "Alright, if you haven't already, run this command to start editing your <code>.vimrc</code> file, and I'll share some of my base Vim settings.",
    },
    {
      code: "vim ~/.vimrc",
    },
    {
      body: "First of all, here are some settings that really should come default with Vim.",
    },
    {
      code: "set tabstop=2<br />set softtabstop=2<br />set shiftwidth=2<br />set expandtab<br/>set backspace=indent,eol,start",
    },
    {
      body: "These settings switch the sizing and behavior of the tab key, inserting spaces and changing the tab width to something that most people would be more familiar with. Then, the backspace line makes the backspace key smarter, deleting the new tabs as if they were still tabs.",
    },
    {
      header: "tmux",
    },
    {
      header: "a e s t h e t i c s",
    },
  ],
}

export default data
