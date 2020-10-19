# Introduction to Google Earth Engine (GEE)
This repos briefly lays out a "code along" exercise that I do with students to introduce them to [Google Earth Engine](https://earthengine.google.com/), which is a geospatial processing service that uses an in-browser developnment environment to access and analyize Google's enormous library of geospatial data. Everything runs in browser (I use Chrome just to be safe) so you don't have to have students install any additional software. However, students do need to sign up for the service and should have a Google account with space in their Google drive to hold any outputs.

## Purpose of the Code Along
I always try to introduce students to new technology and right now the hot trend is coding and, specifically, coding to access data and computing power in "[the cloud](https://www.zdnet.com/article/stop-saying-the-cloud-is-just-someone-elses-computer-because-its-not/)." It's also fun to introduce students to a new programming language and the language used by the Earth Engine IDE is JavaScript. Most students in this class have completed my 6 week module in Python programming and are comfortable with that language. Showing them that they can use their experience with Python to quickly pick up another language gives them a nice boost and, besides, it's fantastic to see outputs rendered on an interactive map. Finally, this class does require an exploratory final project in which the student chooses a new technology to explore and... well... explores it! Those in the class who have a special interest in remote sensing or raster data analysis often appreciate having GEE as an option. Additional [Google Earth Engine resources for instructors can be found here](https://developers.google.com/earth-engine/tutorials/edu#introductory-remote-sensing-code-labs).

## The Lesson
The lesson is fairly straight forward. I lecture, record an asynchronous lecture, or link to videos that introduce students to what GEE is and the basics of the development environment: essentially what they see in the browser ([more info here](https://www.google.com/earth/outreach/learn/introduction-to-google-earth-engine/).

I start by opening a new file and simply doing some basic JavaScript programming to go over things like variables, lists, dictionaries, `print` staement, and functions: all the same things they already know about in Python. The code for this is found in the `JS_basics.js` file in this repo. Note that no geospatial analysis takes place during this portion of the code along. Instead, all outputs are rendered in the GEE console tab. 
> ![](images/JS_basics_output.png.png)

Once the basics are out of the way, I move on to some basic analysis and visualization. The code for this can be found in the `DSM_analysis.js` file in this repo. Students are asked to start a new file (or over-write the file containing the basics of JS) and import the ALOS World 3D - 30m (AW3D30) global digital surface model (horizontal resolution of approximately 30 meters). There are actually a few versions of this available in GEE and the code I have used references bands specific to version 2.2, released in April 2019, which [can be found here](https://developers.google.com/earth-engine/datasets/catalog/JAXA_ALOS_AW3D30_V2_2). The code takes students through the steps of:
- importing the data;
- exlporing the data in the console window to ensure they have the right data set;
- visualizing the data using (a cartographically incorrect) qualitative color scheme (it's the easiest to code!); and
- creating a mask that only shows areas of elevation over 500 meters. 

> ![](images/DSM_analysis_output.png)

While my code is presented here as files, you can also access a [snapshot of my code on the GEE site here](https://code.earthengine.google.com/8675ccd49ee67b0048f13477c32930cd).
