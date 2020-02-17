---
title: Day 2 - How to hide your API keys and sensitive data
date: "2020-02-11T22:12:03.284Z"
time: 2
description: Simple guide on how to hide your sensitive data
---


On day 2, I decided to publish some code on GitHub. To do that, I had to learn how to hide your API keys. There is a simple guide on how to do that.

## How to hide sensitive data in .env file
1. Create a file called .env in the root of your project’s directory.
![directory](directory.png)
2. Inside the .env file create name to your API key, for example **REACT_APP_MOVIEDB_KEY** and add .env file to .gitignore.
![env and gitignore](envfile.png)
3. Access the API key via the process.env object.
```javascript
console.log(process.env.REACT_APP_MOVIEDB_KEY)
```
If after saving files and reloading the page this do not work, try to restart your server!