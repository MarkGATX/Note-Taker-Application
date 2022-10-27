# Note-Taker-Application
An application to help take and keep notes during the day

## The eleventh challenge in the UT-Austin Full Stack Development Bootcamp - Create a Team Profile Generator


___


This challenge is meant to test our understanding of basic server side functions using Express. We were given extensive starter code that completely built out the front end. However, it wasn't functioning correctly. Our goal was to build the server backend and connect it to the front end to get it working as intended. 

Let's take a look at how the app works and what we were responsible for building.

This app is deployed on Heroku and you can see by visiting [this link](https://note-taker-project-uta.herokuapp.com/).


___



## How to use

From the main page, you'll start by clicking on the 'Get Started' button in the middle of the page. That will take you to the notes pages. To the left, you'll see a list of all the notes that are currently saved in your JSON file. To the right is the area where you can add more notes.

![Main page for the Note Taker App](./Assets/Note%20taker%20main%20page.jpg)

To add notes, fill in the title and add some information to the note. Click the 'save' icon in the upper right corner. Your new note will be added to the list at the left.

If you want to look at a previous note, simply click on the note and the area to the right of the screen will populate with all of that note's information.
![Notes page for note taker app](./Assets/Notes%20in%20the%20note%20taker%20app.jpg)

If you'd like to delete a note, simply click on the trash can icon next to the note you want to delete.

If you'f like to look at the raw JSON data, you can also access the API via [https://note-taker-project-uta.herokuapp.com/api/notes](https://note-taker-project-uta.herokuapp.com/api/notes)


___


## Changes Made and Lessons Learned

- Setting up the basic server environment in Express is fairly straightforward. You'll be using the same commands in virtually every deployment, so that part of the challenge wasn't hard to grasp. 

- I did learn that not all modules are created the same. I spent a long time trying to track down errors that just didn't make sense to me. I finally noticed that a module I grabbed from npm to add unique id numbers wasn't working. I tried troubleshooting the module but couldn't get it to work. I eventually decided the simplest route would be to use the helped application that we used in earlier assignments to assign random ID numbers. Once I did that, most of the errors went away.

- While we haven't gone over handline DELETE requests via API, we were given a challenge of making delete work within the framework we were given. I really liked making it work like that because for me it really emphasized the flexibility you have when you define your routes. We can make a lot of decisions and events happen on the backend just by customing the routes people use on the site.


___



## Possible Future Changes

- To be honest I probably won't revisit this code since the vast majority was already in place before I got it. While it can be a good reference if I need to remember how something worked or didn't work, I think this project is complete.


___



## Credits
Thanks to Leah, Ian, Diem, Negin, and all the other students who keep teaching and talking us through all the twists and turns of coding.



___



## License

MIT License

Copyright (c) 2022 Mark Gardner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.