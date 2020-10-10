# Lab 3 Data Sorting and Geographical Plotting using Geocoding

In this lab we will be working to sort the COVID-19 cases in the United States and plotting them on Tableau for atleast 3 states.

Briefly explain the tutorial and link to any available external outputs, such as a Tableau map.   

### To complete this assignment you will need:
- A Google account or you can work on Jupyter Notebook using Anaconda. We'll be using Colab or Jupyter Notebook, but also space in your Google Drive: this will be nice example of hosting a small data science project with your own services.

- You need to downloaded data from https://www.kaggle.com/sudalairajkumar/covid19-in-usa

- A free student account on: 

Tableau - https://www.tableau.com/academic/students

or

Carto - https://carto.com/help/getting-started/student-accounts/

### What you will submit:

A link to your Github repo. The repo must contain the script with minimum three (3) filtered states, exported csv file and Tableau / Carto Map image containing county names and number of cases in each of the county within the image. 

## Why is this lab important?
In this lab we will be learning how to groupby, sort and export data using Python and how to plot on Tableau / Carto with the help of county name.

## Getting the Data
You need to download data from Kaggle (by creating a free account on Kaggle to download the data): https://www.kaggle.com/sudalairajkumar/covid19-in-usa.

# Tutorial

### Python Script: 
***Challenge 1:*** Filter minimum of three (3) states in the file exercise.py to export data of three states in .csv format. Submit the updated exercise.py file and the exported csv file.

Step 1 - You need to update the exercise.py with desired states that you want to use by putting them in filter and exporting the data accordingly.  
Step 2 - The file you recieve should be first downloaded / saved and later on coverted in Excel Workbook format by going to **File -> Save As -> File Format** and choosing Excel Workbook (.xlsx) format in Microsoft Excel. 

### Tableau plot:

***Challenge 2:*** Plot the map on Tableau using County and States in the exported excel workbook file. Submit the image file with county names and number of cases in that county.

Step 1 - Install and Open Tableau

Step 2 - Upload the data by clicking on **Microsoft Excel** on the left.

Step 3 - In the bottom left, click on Sheet 1.

Step 4 - Drag the County column on the left in Details within **Marks**.

Step 5 - On the right top-most click on **Show Me**.

Step 6 - Drag the County column and Cases in **Label**.

Step 7 - Zoom according to the states you have selected.  

Step 8 - Right click on the map and click on Copy and then Image and click on Copy in the dialog box that will appear. Once you will copy it you can save it anywhere either on Word, Paint or directly paste on Github using the Paste option or Command + V (for Mac) or Ctrl + V (for Windows).

***Feel free to search on the internet or anywhere!***

### Creating a Finished Product with Carto
Explain what their output should be (e.g. GeoJSON, a CSV, a Shapefile) and then link to the service we want to use for finishing (e.g. Tableau). Be sure to link to a tutorial or instructions about uploading the files to that service. For example...
- Uploading your data to Carto will require formatting your output in the following way... 
- Sign in to Carto in with your Github account (remember, you *must* have signed up for Github's student developer pack to use Carto: using a regular free Github account will not work). 
- [start here with a walk through about how to upload new data](https://carto.com/help/tutorials/getting-started-with-carto-builder/).
- To create a new map, [start with Carto's documentation here](https://carto.com/help/tutorials/using-builder/).
- Publish, Update, and share your maps! ([More details on this at Carto](https://carto.com/help/tutorials/publishing-and-sharing-maps/)). 

# Citation
If we use other sources, it's good to cite them here even if it is not required. 
