const data = {
  title: "my local dev setup",
  subtitle: "aka: why you should learn vim",
  date: "june 7, 2019",
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
      language: "shell",
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
      header: "vim - an intro",
    },
    {
      body: "There's probably hundreds or thousands of articles online that describe the benefits of Vim over traditional text/code editors, so I won't belabor the details, but just know that once you get really good at Vim, <b>no other method of editing large amounts of text will feel as good.</b>",
    },
    {
      body: "So, assuming that you've typed <code>vim</code> into your terminal and have familiarized yourself with moving around a file, let's get into the settings that will make your Vim easier to use. Just remember that the spirit of Vim is personalization and tinkering, so I'll just be giving some of my favorite settings and plugins, as opposed to providing the entirety of my settings.",
    },
    {
      body: "Alright, if you haven't already, run this command to start editing your <code>.vimrc</code> file, and I'll share some of my base Vim settings.",
    },
    {
      language: "console",
      code: "vim ~/.vimrc",
    },
    {
      header: "vim - settings",
    },
    {
      body: "First of all, here are some settings that really should come default with Vim.",
    },
    {
      language: "vim",
      code: "set tabstop=2\nset softtabstop=2\nset shiftwidth=2\nset expandtab\nset backspace=indent,eol,start",
    },
    {
      body: "These settings switch the sizing and behavior of the tab key, inserting spaces and changing the tab width to something that most people would be more familiar with. Then, the last line makes the backspace key smarter, deleting the new tabs as if they were still tabs.",
    },
    {
      body: "Keeping with the spirit of Vim, feel free to adjust any of the values I show here or in the upcoming sections to something that you're more comfortable with.",
    },
    {
      body: "Next up are some settings that I personally find quite useful, but aren't necessarily required.",
    },
    {
      language: "vim",
      code: "set number\nset cursorline\nset wrap\nset autoindent",
    },
    {
      body: "The first two settings add line numbers to Vim, and show highlighting on the line that you currently have selected. Then, the next two settings make your life easier, autoindenting and wrapping your text as you type.",
    },
    {
      language: "vim",
      code: "set incsearch\nset hlsearch\nset ignorecase\nset smartcase",
    },
    {
      body: "This last set of settings improves the searching experience in Vim, highlighting matches as they are found and intelligently ignoring the case of your search if you only type lowercase letters. More information on searching in Vim can be found in the official wiki <a href='https://vim.fandom.com/wiki/Searching' target='_blank'>here</a>.",
    },
    {
      body: "There's plenty more settings for Vim that you can feel free to play around with, which you can look through by typing <code>:options</code> into your Vim while in normal mode. For now though, I'm going to move onto plugins.",
    },
    {
      header: "vim - plugins",
    },
    {
      body: "Just as with any other text/code editor, plugins can be used to enhance and improve the code editing experience in Vim. To get started, we're going to need to install a plugin manager to make installing these plugins easier."
    },
    {
      body: "I personally use <a href='https://github.com/VundleVim/Vundle.vim' target='_blank'>Vundle</a>, but <a href='https://github.com/junegunn/vim-plug' target='_blank'>Vim-Plug</a> is also a popular one. From what I can tell, they are functionally identical, so install whichever one your heart desires.",
    },
    {
      body: "Now that you're set up to install plugins, let's start with some plugins that I can't live without.",
    },
    {
      body: "<a href='https://github.com/kien/ctrlp.vim' target='_blank'>ctrlp.vim</a> - A fuzzy file searcher similar to what you'd find in other code editors like VSCode. An absolute must when working on projects of any reasonable size.",
    },
    {
      body: "<a href='https://github.com/itchyny/lightline.vim' target='_blank'>lightline.vim</a> - A more aesthetically pleasing and themable status bar in the bottom of your Vim that provides useful information while editing.",
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/lightline.png",
        subtitle: "my lightline",
      },
    },
    {
      body: "<a href='https://github.com/scrooloose/nerdtree' target='_blank'>nerdtree</a> - A visual file explorer that will be very familiar if you are coming from more feature-heavy code editors. Although you won't need it for most operations when you have ctrlp.vim as well as default Vim commands, it's always nice to see a visual representation of your project directory structure once in a while.",
    },
    {
      image: {
        src: "https://s3.amazonaws.com/foodiy-beta/nerdtree.png",
        subtitle: "nerdtree",
      },
    },
    {
      body: "<a href='https://github.com/w0rp/ale' target='_blank'>ale</a> - An asynchronous linter that uses your previously installed linters like ESLint and Prettier to lint your code as you type and display errors and warnings in the sidebar. This plugin can also be configured to automatically fix your code when you save/edit your code.",
    },
    {
      body: "<a href='https://github.com/ajh17/VimCompletesMe' target='_blank'>VimCompletesMe</a> - A simple plugin that maps all of the autocompletion commands in Vim to the tab key, so it's easier to access the autocompletion features that Vim has. Default Vim keybindings for autocompletion are pretty complicated, but you can find them <a href='https://www.youtube.com/watch?v=UWUtWMpUwIQ' target='_blank'>here</a> if you're curious.",
    },
    {
      header: "vim - mappings",
    },
    {
      body: "This is the part of Vim that really allows you to make Vim your own. Vim allows you to basically map any command to any combination of keys. The possibilities are endless, so I'm gonna share some of my favorite mappings, but feel free to add your own. A guide for adding mappings can be found <a href='https://medium.com/vim-drops/understand-vim-mappings-and-create-your-own-shortcuts-f52ee4a6b8ed' target='_blank'>here</a>.",
    },
    {
      body: "First of all, we're going to remap the leader key to something that's easier to reach, as it is set to be the \\ by default. The leader key is a key specifically used for user made shortcuts, when we don't want to override any of the default Vim mappings.",
    },
    {
      language: "vim",
      code: "let mapleader=\",\"",
    },
    {
      body: "Next up, some mappings to help you with general movement",
    },
    {
      language: "vim",
      code: "nnoremap j gj\nnnoremap k gk\nnnoremap B ^\nnnoremap E $",
    },
    {
      body: "The first two mappings there map the normal up and down movement keys to visually respect wrapped lines, meaning that they'll behave more in the way that you expect them to. Then, the next two mappings are just logical continuations of the normal 'b' and 'e' commands, which move you to the beginning and end of a word respectively. I've mapped the capital versions of these letters to move you to the beginning and the end of the <b>line</b>, respectively.",
    },
    {
      language: "vim",
      code: "nnoremap <left> <<\nnnoremap <right> >>\nvnoremap <Left> <gv\nvnoremap <Right> >gv\nnnoremap H ^\nnnoremap J <C-d>\nnnoremap K <C-u>"
    },
    {
      body: "Some of my most used mappings are here. The first for allow you to indent/unindent just using your arrow keys <i>(because you shouldn't be using your arrow keys for movement)</i>."
    },
    {
      body: "Then, the last three just make sense, making H, J, and K do the more extreme versions of their lowercase counterparts."
    },
    {
      header: "tmux",
    },
    {
      body: "TMUX is a <b>terminal multiplexer.</b> Essentially, what this means is that it allows you to open multiple instances of your terminal, dividing your terminal into panes and windows that allow you to take advantage of more complex workflows. For a quick rundown, check out this <a href='https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340' target='_blank'>post from Hackernoon.</a>"
    },
    {
      body: "There's a lot to get into when it comes to TMUX, so I recommend you do some research yourself. Personally, I like to start with the configuration provided <a href='https://github.com/gpakosz/.tmux' target='_blank'>here.</a>"
    },
    {
      image: {
        src: "https://foodiy-beta.s3.amazonaws.com/tmux.png",
        subtitle: "an example of tmux",
      }
    },
    {
      header: "a e s t h e t i c s",
    },
    {
      body: "Finally, when it comes to aesthetics, the world is really your oyster. The main thing most people customize when it comes to aesthetics is their vim and terminal colorscheme. Some great resources for this include <a href='http://colorswat.ch/vim/' target='_blank'>colorswat.ch</a>, as well as just browsing the <a href='https://reddit.com/r/vim' target='_blank'>Vim subreddit</a>. Most of these colorschemes can be downloaded with your vim plugin manager that we installed before, and can be set in your <code>.vimrc</code>."
    },
    {
      body: "Next, fonts can be changed through the settings of your terminal emulator, so choose whatever your heart desires. You can find some recommended free fonts <a href='https://www.reddit.com/r/linux/comments/529oy3/what_is_your_favorite_terminal_font/' target='_blank'>here</a>, as a starting point."
    },
    {
      header: 'conclusion',
    },
    {
      body: "Hopefully this is enough to convince you to at least give this terminal-only workflow a shot. I promise that if you give it time and a little bit of tinkering, you'll be able to be more efficient then you would with other workflows."
    },
    {
      body: "<b>P.S.</b> As you start tinkering with your configuration and achieving something that you like, I highly recommend backing up these configuration files, or 'dotfiles', to Github. A tutorial to do this can be found <a href='https://www.atlassian.com/git/tutorials/dotfiles' target='_blank'>here</a>.",
    },
  ],
}

export default data
