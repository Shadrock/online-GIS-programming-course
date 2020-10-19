/*This code loads the dsm and shows the user specified display of 0 and 500 from the data. This code uses "ALOS DSM: global 30m" V2_2 in the Earth Engine catalogue. Inspect the bands to ensure the data set includes the AVE_DSM band. This analysis does not change the data set: it's just a visualization. */

//manual way to searched for DSM, which I normally have them import using the search bar
var image = ee.Image('JAXA/ALOS/AW3D30_V2_2');

// Explore the data in the console: how many bands do the data have?
print(dsm)  

//zoom to an area of interest

//example of an error: this loaded the footprint but we didn't do anything with the underlying pixel values.
// Map.addLayer(dsm)

// This adds the data (band)
Map.addLayer(dsm.select('AVE_DSM'), {min: 0, max: 500}, 'dsm');

// Add color to see different elevations.  (I am obviously not a cartographer.)
var elevPalette = ['black', 'blue', 'green', 'yellow', 'orange'];
var elevParams = {min: 0, max: 500, palette: elevPalette};
Map.addLayer(dsm.select('AVE_DSM'), elevParams, 'dsm palettized');
// What does this code do? Execution flow?

//This code masks everything over 500m in the dem and the palette is red. "gt" is greater than. "lt" is less than.
var elev = dsm.select('AVE_DSM');
var elevgt500 = elev.gt(500)
elevgt500 = elevgt500.updateMask(elevgt500);
Map.addLayer(elevgt500, {palette:['red']}, "elev>500m")

// Zoom in a bit, use “layers” map control to turn off DSM, reduce opacity of the colors, and see how your analysis looks. 
