EmoJS Definitions
=================

Central repository for EmoJS language syntax.

Submit language additions to `definitions.json`

## But this JSON has comments in it!

Yes, yes it does.

In short, deal with it.

To assist you in dealing with it, we have some helpful grunt tasks included with this project!

Once dev dependinces have been installed (use `npm install`), just run `grunt` to both strip comments and check that the resulting JSON is valid.

You can even run `grunt watch` to do this automagically as you edit `definitions.json`!

## Release History

### 0.2.5

Add number keycaps, operators, and grunt automation in build process


### 0.2.0

Add literals, keywords, and braces

0.2.0 is incompatible with previous 0.1.X versions, due to redone brace
definitions.

multiCharacters list reintroduced, in anticipation for multicharacter
emoji support


### 0.1.0

Initial Release

## License
Copyright (c) 2014 RedRiderX. Licensed under the MIT license.
