# Note-Taker-Application
An application to help take and keep notes during the day

## The eleventh challenge in the UT-Austin Full Stack Development Bootcamp - Create a Team Profile Generator


___


This challenge is meant to test our understanding of basic server side functions using Express. We were given extensive starter code that wasn't functioning correctly and our goal was to refactor the code to get it working as intended. 

Because this isn't a deployed app, there's not a link to a live site showing it's functionality. Instead you can watch a short video here that shows how it works at its most basic.

[Video of the Development Team Generator in Action](https://drive.google.com/file/d/1lSUTUFGxwM-rN99UC_Orp-QTecgInhgt/view)


___



## How to use

From the parent folder of the index.js file, call on index.js. Several questions will be sent to the command line asking you for vital information about your development team members. 

![Command line interface for Team Generator](./images/Team%20Roster%20commands%20and%20questions.jpg)

Each employee has four questions to answer. At the end of those four questions, you'll be asked if you want to add any more employees, either Engineers or Interns. (The assumption here is that there will be one Manager on the team).

When you're finished with the employees on your team, you'll choose 'Finish.' An HTML page will be generated in the `dist` folder. You can open this page to see a graphical, responsive rendering of your team.

![Generated HTML page for Development Team](./images/Team%20Roster%20generated%20HTML%20page.jpg)

___


## Changes Made and Lessons Learned

- As my first experience dealing with Classes and Subclasses this project, this helped me really grasp the concept of creating them more than the purely abstract concept. This project gave me one of the 'ah ha!' moments that we all hear about when I was constructing my subclasses. 

- I'm continuing to push my familiarity with Bootstrap and it is getting slightly more intuitive with every iteration. I still find myself customizing the CSS and I realize now that if I use version 5.0 then I can theoretically override the default color values and have Bootstrap automatically assign complimentary colors. I will need to learn hpw to use SaSS in order to make that work but if it gives me more freedom with color then it's worth the effort.

- Creating the tests became an issue of me overthinking my problems. I went from trying to create new methods to pull data from the main application without realizing all I needed to do was create testing data independent of the actual application. Life suddenly made more sense.


___



## Possible Future Changes

- Resize Material Icons on the cards so they show up better.
- Integrate validation on the inquirer prompts.



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