# Visual Studio Code port for FreeBSD
This repository contains an experimental port of Visual Studio Code for FreeBSD. The port is largely based on:

- VS Code patches and build procedures by [@prash-wghats](https://github.com/prash-wghats/)

## Get
A package file is available at the releases page. To install, download the file (with .txz extension) and run the command:

``` shell
pkg install vscode-<version>.txz
```

## Run

``` shell
code-oss
```

## Build
If you would like to build artifacts for yourself, be sure you have the ports tree on your machine. If not, run the following commands:

``` shell
portsnap fetch
portsnap extract
```

Clone this repository with git command and build/install vs code:

``` shell
git clone https://github.com/tagattie/FreeBSD-VSCode
cd FreeBSD-VSCode/editors/vscode
make install clean
```

## Platform
- Built on FreeBSD 11 and 12 amd64.

## Credits
- VS Code patches and build scripts by @prash-wghats at [Electron-VSCode-Atom-For-FreeBSD](https://github.com/prash-wghats/Electron-VSCode-Atom-For-FreeBSD)
