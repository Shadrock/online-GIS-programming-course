# **Analyzing Airport Data**
Before we get to the data, let's briefly touch on Reading and writing comma-separated data, or data from `.csv` files. Comma-separated values (CSV) is a way of expressing structured data in flat text files:

```
"Refugee_Camp_Name","Country","Population2006","Population2014"
"Kakuma","Kenya","90457","153959"
"Hagadera","Kenya","59185","106968"
"Adjumani","Uganda","54051","96926"
"Dagahaley","Kenya","39526","88486"
"Zaatari","Jordan","0","84773"
```
This is a commonly used format to get data in and out of programs like spreadsheet software, where the data are tabular. [Python comes with a CSV module](https://docs.python.org/3/library/csv.html) that provides one way to easily work with CSV-delimited data: Try downloading the `Camp_stats.csv` file, wihch is previewed above and [can be accessed in the data folder](data/Camp_stats.csv), to your desktop or local working environment. Then run the following code in Colab to choose it as a file:
```python
# Upload local script to Colab here. 
from google.colab import files
uploaded = files.upload()
```
Now you can open the data up in Colab! Run the following code: 
```python
import csv
f=open("Camp_stats.csv")
for row in csv.reader(f):
    print(row)
```
Each row is read as a list of strings representing the fields in the row.

## Why not use `.split()` or `.strip()`?

We already a learned another way to do this, we’ve learned `split(",")` to split each row of text into comma-delimited fields, and then `strip()` to take off the quote marks. (We did this with the survey in IDCE 302, if you recall!)

There are a few good reasons to use the CSV module here:
*   The csv module makes it clear what you’re doing to anyone reading your code.
*   The csv module is less likely to contain an error that splits some lines the wrong way.
*   The csv module has a lot of other features ([documented here](https://docs.python.org/3/library/csv.html)) that allow it to process differently formatted files, so you can easily update your program if the file format changes.

# **Reading Airport Data**
We’re going to do some processing of real-world data now, using freely available airline data sets from the [OpenFlights project](https://openflights.org/).

Visit the [OpenFlights data page](https://openflights.org/data.html) and download their airports data file - “airports.dat”. This is a file in CSV format, open it in a text editor if you want to have a look at it. If, for some reason, you can't access the OpenFlights page or download the data, there is an [archived data set in the data folder of this tutorial](data/airports.dat).

## Exercise 1

Can you use this file to print all of the airport names for a particular country (say, Australia or Russia)? To get you started, on the OpenFlights web page it shows that “Name” is the second field in each row of data. This means in the list of fields it will have index 1 (index 0 is the first field.)

As a starting point, here’s some code that prints the name of *every* airport:
```python
import csv
f = open("airports.dat")
for row in csv.reader(f):
    print(row[1])
```
Don't forget to start by uploading the airports.dat file!

# **Creating an Airline Route Histogram**

We’re going to combine everything we’ve learned into a more complex problem to solve.

OpenFlights distribute databases for both airline locations and airline route details. You can download the routes database “routes.dat” from the OpenFlights data page. This database stores every unique flight route that OpenFlights knows about. Take a moment to look at the fields available in the routes data (listed on the OpenFlights page.) Again, if for some reason, you can't access the OpenFlights page or download the data, there is an [archived data set in the data folder of this tutorial](data/routes.dat).

By using both data sources, we can calculate how far each route travels and then plot a histogram showing the distribution of distances flown.

This a multiple stage problem:
*   Read the airports file (airports.dat) and build a dictionary mapping the unique airport ID to the geographical coordinates (latitude & longitude.) This allows you to look up the location of each airport by its ID.
*   Read the routes file (routes.dat) and get the IDs of the source and destination airports. Look up the latitude and longitude based on the ID. Using those coordinates, calculate the length of the route and append it to a list of all route lengths.
*   Plot a histogram based on the route lengths, to show the distribution of different flight distances.

## Exercise 2 - Reading the airport database
Write code to read through “airports.dat” and create a dictionary mapping from an airport ID key (use the numeric ID in the first field) to the geographic coordinates. You may want to create two dictionaries, one holding latitudes and one holding longitudes.

Look back at the OpenFlights data page to see the fields available in the airports.dat file. Hint: I ended up having to look at a copy of their data in their Github repo. 

## Exercise 3 - Route distances
Now that we have the lat/lon of each airport we can calculate the distance of each airline route.

Calculating geographic distances is a bit tricky because the earth is a sphere (actually, it's an oblate spheroid). The distance we measure is the “great circle distance”. We’re not going to implement our own great circle distance function in Python here, instead you can download a Python file with a `geo_distance()` function (use the file `geo_distance.py` in this repo!). Feel free to have a peek at it if you like, but don’t worry about completely understanding it at this stage. There are two ways you can use this function:
1. Place the file in the Notebook working directory and then import it as a Python module to use it (you can test it with the code below)

```python
# Code to import and check the geo_distance.py file to make sure it works.
geo_distance.distance(-37.814,144.963,52.519,13.406) # Melbourne to Berlin in km!
```
If you’re not using a Jupyter Notebook, this code snippet doesn’t display anything. You’ll need to store the result of the distance function to a variable, then add a line with a `print()` statement to display the contents of the variable.

2. As an alternative to the `import statement`, you can also copy and paste the contents of the `geo_distance.py` file into an Notebook cell. Run the cell to define the distance function, and then use it in subsequent cells!

```python
# Copy of geo_distance.py
# Using the Haversine formula for geographic Great Circle Distance
# As per https://en.wikipedia.org/wiki/Haversine_formula

from math import cos,radians,sin,pow,asin,sqrt

def distance(lat1, long1, lat2, long2):
  radius = 6371 # radius of the earth in km, roughly https://en.wikipedia.org/wiki/Earth_radius
  # Lat,long are in degrees but we need radians
  lat1 = radians(lat1)
  lat2 = radians(lat2)
  long1 = radians(long1)
  long2 = radians(long2)

  dlat = lat2-lat1
  dlon = long2-long1

  a = pow(sin(dlat/2),2) + cos(lat1)*cos(lat2)*pow(sin(dlon/2),2)
  distance = 2 * radius * asin(sqrt(a))

  return distance
```
Once you have the `distance()` function working, can you write a program that reads all the airline routes from “routes.dat”, looks up the latitude and longitude of the source and destination airports, and builds a list of route distances?

When looking at the list of fields in the OpenFlights data documentation, remember that we used the “Unique OpenFlights identifier” fields for each airport when we made the dictionaries of latitudes and longitudes, not the multi-letter airport codes.

TIP: You might come across an error like “KeyError: \N” when you first run your program. This is another problem of ‘dirty data’, the “routes.dat” file contains some airports that aren’t listed in “airports.dat”. You can skip these routes by adding a test of the type `if airport in latitudes`. Don't forget that even if you've previously uploaded the "airports.dat" file to this notebook you'll also need to add the "routes.dat" file to Colab here. 

## Exercise 4 - Histogram
Now we’re ready to create a histogram displaying the frequency of flights by distance. I suggest using `plt.hist()`, which can do most of the work. The first argument you supply will be the dataset (list of distances). The second argument (try starting with 100) is the number of bins to divide the histogram into. You can increase this number to see more distinct bars and a more detailed picture, or reduce it to see a coarser picture. Try setting it to some other values and see what happens to the histogram plot.

The third argument, `facecolor`, sets the color of the graph, “r” for red. There are a lot of ways to specify colors in matplotlib, all of which are [explained in the documentation](https://matplotlib.org/api/colors_api.html). All of the arguments that can be used with `hist()` can be found in the [matplotlib documentation](https://matplotlib.org/api/pyplot_api.html#matplotlib.pyplot.hist). 

For my solution, I imported two libraries using `as` to "alias" them. It is possible to modify the names of modules and their functions within Python by using the `as` keyword. There are times when you may want to change a name because you have already used the same name for something else in your program, another module you have imported also uses that name, or you may want to abbreviate a longer name that you are using a lot. The construction of this statement looks like this: 
```python
import module_name as another_name
```

The code I used was: 
```python
import numpy as np
import matplotlib.pyplot as plt
```

### Happy Coding!
After completing this module, you will have taken some real world data and graphed it in an informative way! Granted, the results aren’t earth shattering but you’re well on your way to understanding the techniques to perform other data analysis, and chart other data.
