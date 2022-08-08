## TL;DR

I use iTerm2 with Vim and TMUX, with a bunch of cool plugins, themes, and fonts.

## A quick rundown

Before I dive into my current setup, I want to talk about my history with text editors, for some context. However, if you just want to see the setup, feel free to skip this section.

When I first started coding about 3 years ago, I used [Atom](https://atom.io/), because the singular tutorial I watched on YouTube said it was good, which was enough of a reason for me to use it. Although it satisfied my limited needs as a budding developer, I quickly noticed that as my files got larger, Atom got _very_ laggy.

Eventually, I got tired of the lag and switched over to [Visual Studio Code](https://code.visualstudio.com/), which for a while, was pretty awesome. It had a lively and engaged developer community creating extensions and ran significantly smoother for me than Atom did.

Although Visual Studio Code provided all the features for me to work on my school and side projects, there was something missing. To be completely honest, I started getting annoyed at having to move my fingers to either the arrow keys or the track pad whenever I wanted to do anything significant to move code around. I had heard of Vim before, but never really looked into it. One day during a slow day at work, partially driven by the desire to further minimize the amount of physical activity I did in a day and partially driven by the urge to feel like a movie hacker, _\(let's face it, who hasn't\)_, I took the plunge and tried to learn Vim once and for all.

I'm not writing the following post to teach you Vim, but just to provide an overview/guide on how to set up your terminal like mine. If you actually want to learn Vim, the first thing I would suggest is to type `vimtutor` into your terminal and work through the tutorial the appears, which will take about 20 minutes.

After you familiarize yourself with basic movement and text manipulation, I highly recommend going through **Practical Vim by Drew Neil.**

Anyway, time to jump in\!

![](https://foodiy-beta.s3.amazonaws.com/terminal1.png)

## Prerequisites

Note that I will target this tutorial towards MacOS users, but most of the programs I talk about will have equivalents on Linux and Windows with some tweaks, but you'll have to Google around some more.

Before we begin, if you don't have [Homebrew](https://brew.sh/) installed yet, install that right now.

## iTerm2 \+ ZSH

First, you're going to want to install iTerm2 and ZSH, which will give you a bunch of cool features that the regular Mac terminal doesn't provide. For a great tutorial to get started, check out [this Medium article by Florian Mettetal](https://medium.com/@falieson/setup-zsh-w-antigen-and-a-spacey-theme-7a66808218dc).

After you're done walking through that article, you should have iTerm2 installed, with a ZSH shell, and any custom themes that you might have found. If you're curious about my theme/font, skip to the bottom.

There's plenty of documentation out there about why ZSH is better than the standard UNIX shell, but here are some of my most used features.

First off, you can get intelligent tab auto\-completion on almost _every command you type_ \- this includes Git branch names and even the options for CLI packages that you're unfamiliar with.

Next, something that really adds up over time is the feature where you can `cd` into a directory without ever typing those two letters. Simply type the path to the directory that you want to enter, and ZSH will automatically change into it.

Finally, ZSH comes with plenty of aliases out of the box, including several for Git, as well as some more interesting ones that you never thought you needed, like the triple dot. Now, when you want to move two directories up, don't do this,

```
cd ../..
```

Just do this.

```
...
```

For a list of all the aliases that you now have access to, just type `alias` into your terminal and start exploring. For now, though, it's time to move onto Vim.

## Vim

### An introduction

There's probably hundreds or thousands of articles online that describe the benefits of Vim over traditional text/code editors, so I won't belabor the details, but just know that once you get well\-versed at Vim, **no other method of editing large amounts of text will feel as good.**

So, assuming that you've typed `vim` into your terminal and have familiarized yourself with moving around a file, let's get into the settings that will make your Vim easier to use. Just remember that the spirit of Vim is personalization and tinkering, so I'll just be giving some of my favorite settings and plugins as opposed to providing all of my settings.

Alright, if you haven't already, run this command to edit your `.vimrcfile`, and I'll share some of my base Vim settings.

```
vim ~/.vimrc
```

### Settings

First, here are some settings that absolutely should come default with Vim.

```
set tabstop=2
set softtabstop=2
set shiftwidth=2
set expandtab
set backspace=indent,eol,start
```

These settings switch the sizing and behavior of the tab key, inserting spaces and changing the tab width to something that most people would be more familiar with. Then, the last line makes the backspace key smarter, deleting the new tabs as if they were still tabs.

Keeping with the spirit of Vim, feel free to adjust any of the values I show here or in the upcoming sections to something that you're more comfortable with.

Next up are some settings that I find quite useful, but aren't required.

```
set number
set cursorline
set wrap
set autoindent
```

The first two settings add line numbers to Vim, and show highlighting on the line that you currently have selected. Then, the next two settings make your life easier, auto\-indenting and wrapping your text as you type.

```
set incsearch
set hlsearch
set ignorecase
set smartcase
```

This last set of settings improves the searching experience in Vim, highlighting matches as they are found and intelligently ignoring the case of your search if you only type lowercase letters. You can find more information on searching in Vim at the official wiki [here](https://vim.fandom.com/wiki/Searching).

There's plenty more settings for Vim that you can experiment with, which you can look through by typing `:options` into your Vim while in normal mode. For now, though, I'm going to move onto plugins.

### Plugins

Just as with any other text editor, plugins can enhance and improve the code editing experience in Vim. To get started, we're going to need to install a plugin manager to make installing these plugins easier.

I use [Vundle](https://github.com/VundleVim/Vundle.vim), but [Vim\-Plug](https://github.com/junegunn/vim-plug)is another popular one. From what I can tell, they are functionally identical, so install whichever one your heart desires.

Now that you're set up to install plugins, let's start with some plugins that I can't live without.

[ctrlp.vim](https://github.com/kien/ctrlp.vim)\- A fuzzy file searcher similar to what you'd find in other code editors like VSCode. An absolute must when working on projects of any reasonable size.

[lightline.vim](https://github.com/itchyny/lightline.vim)\- A more aesthetically\-pleasing and themable status bar at the bottom of your Vim that provides useful information while editing.

![](https://foodiy-beta.s3.amazonaws.com/lightline.png)

[nerdtree](https://github.com/scrooloose/nerdtree)\- A visual file explorer that will be very familiar if you are coming from more feature\-heavy code editors. Although you won't need it for most operations when you have ctrlp.vim and default Vim commands, it's always nice to see a visual representation of your project directory structure once in a while.

![](https://foodiy-beta.s3.amazonaws.com/nerdtree.png)

[ale](https://github.com/w0rp/ale)\- An asynchronous linter that uses your previously installed linters like ESLint and Prettier to lint your code as you type and display errors and warnings in the sidebar. You can also configure this plugin to fix your code automatically when you save or edit it.

[VimCompletesMe](https://github.com/ajh17/VimCompletesMe)\- A simple plugin that maps all the auto\-completion commands in Vim to the tab key, so it's easier to access the auto\-completion features that Vim has. Default Vim key bindings for auto\-completion are pretty complicated, but you can find them [here](https://www.youtube.com/watch?v=UWUtWMpUwIQ)if you're curious.

### Mappings

This is the part of Vim that really allows you to make Vim your own. Vim allows you essentially to map any command to any combination of keys. The possibilities are endless, so I'm going to share some of my favorite mappings, but as you explore Vim and learn your preferences, add your own\! You can find a guide for adding mappings [here](https://medium.com/vim-drops/understand-vim-mappings-and-create-your-own-shortcuts-f52ee4a6b8ed).

First, we're going to remap the leader key to something that's easier to reach, as it will be the \\ by default. The leader key is a key specifically used for user\-made shortcuts when we don't want to override any of the default Vim mappings.

```
let mapleader=","
```

Next up, some mappings to help you with general movement

```
nnoremap j gj
nnoremap k gk
nnoremap B ^
nnoremap E $
```

The first two mappings listed above map the normal up and down movement keys to respect visually wrapped lines, meaning that they'll behave more in how you expect them to. Then, the next two mappings are just logical continuations of the normal 'b' and 'e' commands, which move you to the beginning and end of a word, respectively. I've mapped the capital versions of these letters to move you to the beginning and the end of the _line_, respectively.

```
nnoremap <left> <<
nnoremap <right> >>
vnoremap <Left> <gv
vnoremap <Right> >gv
nnoremap H ^
nnoremap J <C-d>
nnoremap K <C-u>
```

Some of my most used mappings are here. The first four allow you to indent/un\-indent just by using your arrow keys, because you shouldn't be using your arrow keys for movement.

Then, the last three just make sense; I make H, J, and K do the more extreme versions of their lowercase counterparts.

## TMUX

TMUX is a **terminal multiplexer.** Essentially, what this means is that it allows you to open multiple instances of your terminal, dividing your terminal into panes and windows that allow you to take advantage of more complex workflows. For a quick rundown, check out this [post from Hackernoon.](https://hackernoon.com/a-gentle-introduction-to-tmux-8d784c404340)

There's a lot to get into when it comes to TMUX, so I recommend you do some research yourself. Personally, I like to start with the configuration provided [here.](https://github.com/gpakosz/.tmux)

![](https://foodiy-beta.s3.amazonaws.com/tmux.png)

## Aesthetics

Finally, aesthetics. In this arena, the world is really your oyster. The first thing most people customize is their Vim and terminal color scheme. Some great resources for this include [colorswat.ch](http://colorswat.ch/vim/), as well as just browsing the [Vim subreddit](https://reddit.com/r/vim). You can download most of these color schemes directly with your Vim plugin manager that we installed previously, and set them in your `.vimrc`.

Next, you can change fonts through the settings of your terminal emulator, so choose whatever your heart desires. You can find some recommended free fonts [here](https://www.reddit.com/r/linux/comments/529oy3/what_is_your_favorite_terminal_font/), as a starting point.

## Conclusion

Hopefully, this is enough to convince you to at least give this terminal\-only workflow a shot. I promise that if you give it time and a little tinkering, you'll be able to be more efficient than you would with other workflows.

**P.S.** As you mess around with your configuration and eventually arrive at something that you like, I highly suggest backing up these configuration files, or 'dot files', to GitHub. You can find a tutorial [here](https://www.atlassian.com/git/tutorials/dotfiles).
