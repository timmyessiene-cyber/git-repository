console.log('Change.js');

//adding git to our app: git init;

// version updates. 2 things are needed:

// 1. git add {file}. this adds the changes to our version history. another syntax is git add ., the dot (.) means add/track all the files in a certain folder(the foldr in which we are currently in); git add lets us pick the changes we want in out next version

// git commit -m "version 1". this is the syntax on the terminal to save a new version of our code to git. the -m stands for message. in this case message is: "version 1". it's proper to add a message to our commit

// there can be an error massage (fatal) and we are required to run commands adding our name and email. when done, we try to commit the version again

// in case we add changes but we want them to be in the previous commit we: 1. add the change file or folder containing the file (git add). then we commit using the command: git commit m "version 1" --amend. --amend means don't create a new version, just add/update the previous version with these changes

// the command: git log; helps us see our full version history

//how ever we can also add and commit our changes from vs code directly. i don't know about amend, but adding anc commiting, even reversing the change made in a file can be done from vscode directly. once we do git init, we can add anc commit changes form vscode at once

//working area are the changes that haven't been commited/added yet. Staged changes are the changes that will be added to out next version.

//a file can be both in the staging area and working area. this is because git tracks changes not files. the first change might have been added but the second change hasn't been added

/* the minus when a file is in staged area will revert/reset the file. it'll be back at the working area. there are also 2 commands that can do this same action:
1. git reset {filename}/.(current folder). similar to git add...
2. git checkout --{filename}/.
*/

// if we want to revert to a previous commit on the command line we do: git checkout -- {commit hash}. the commit hash obtained when we do git log; all our versions appear and we select the version we want to revert to.

// this (above) can branching, so we restore the version(skip for now). Yeah so i did touch branching. Will need to get back there

/* Alias
these are like shortcuts, that we configure manually. example: configuring and alias:
git config --global alias.s "status". this means when i type git s it means git status
*/

// git log --all: let's us see all our commits.
// git log --all --graph: let's us see the commit branch

//all of our git code/data is saved inside a file called .git. to remove git from our file/project we run the code: rm -rf .git (the syntax is diff for windows) but that's it.

// a repo is a folder tracked by git

// git repository on our computer is called a local repository while our repository on github is called remote repository.

//to link the remote repository on github to our local repository we make the command: git remote add we give it a name, (convensionally the first verion is called origin), then we add the link of the repository given by github.

// to remove a link to remote repository on our github we give command line the function: git remote remove {name link e.g origin}

// uploading code to github is called pushing the code to github while downloading code from github is called fetching the code from github

// git config --global credentials.username "Timie Essiene": this configuration is to tell github that it is US (we who created the file) that are trying to push/fetch code to our github account/repo

// we push 1 branch of commit at a time, not our ahole commit history. to push data to git: git push {name of link:origin} {main branch:master};

// a short cut for git push is:
// 1: git push origin master --set-upstream (this sets up a shortcut for git push)
// after that, the next time we want to git push, we simply type 2. git push and all of our data will be updated/be in sync for this work space of course.
