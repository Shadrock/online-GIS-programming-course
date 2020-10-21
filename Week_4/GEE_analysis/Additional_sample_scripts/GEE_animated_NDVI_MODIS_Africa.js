/* This JavaScript code creates an animated GIF of NDVI across a 20 year period, for continental Africa, in Google Earth Engine. It has been adjusted slightly for my class and comes from this tutorial: https://developers.google.com/earth-engine/tutorials/community/modis-ndvi-time-series-animation#2_define_clipping_and_region_boundary_geometries */

// Retrieve the MODIS dataset as an ee.ImageCollection and select the NDVI band.
var col = ee.ImageCollection('MODIS/006/MOD13A2').select('NDVI');

// Define clipping and region boundary geometries
// Optional step, but important for processing.
// We're selecting continental Africa here.
// We're using the Large Scale International Boundary vectors

// Define a mask to clip the NDVI data by.
var mask = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('wld_rgn', 'Africa'));

// Define the regional bounds of animation frames.
var region = ee.Geometry.Polygon(
  [[[-18.698368046353494, 38.1446395611524],
    [-18.698368046353494, -36.16300755581617],
    [52.229366328646506, -36.16300755581617],
    [52.229366328646506, 38.1446395611524]]],
  null, false
);

// Group images by composite data
// this uses a property called 'doy', which stands for Day-of-year
col = col.map(function(img) {
  var doy = ee.Date(img.get('system:time_start')).getRelative('day', 'year');
  return img.set('doy', doy);
});

// Join operation: groups images by the 'doy' property added above
var distinctDOY = col.filterDate('2013-01-01', '2014-01-01');

// Define a filter that identifies which images from the complete collection
// match the DOY from the distinct DOY collection.
var filter = ee.Filter.equals({leftField: 'doy', rightField: 'doy'});

// Define a join.
var join = ee.Join.saveAll('doy_matches');

// Apply the join and convert the resulting FeatureCollection to an
// ImageCollection.
var joinCol = ee.ImageCollection(join.apply(distinctDOY, col, filter));

// New we're reducing the composite groups and getting the median reduction among matching DOY collections.
var comp = joinCol.map(function(img) {
  var doyCol = ee.ImageCollection.fromImages(
    img.get('doy_matches')
  );
  return doyCol.reduce(ee.Reducer.median());
});

// The fun part: Make visualization images!

// Define RGB visualization parameters.
var visParams = {
  min: 0.0,
  max: 9000.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};

// Create RGB visualization images for use as animation frames.
var rgbVis = comp.map(function(img) {
  return img.visualize(visParams).clip(mask);
});

// Here's where we create the animated .GIF
// Define GIF visualization parameters.
var gifParams = {
  'region': region,
  'dimensions': 600,
  'crs': 'EPSG:3857',
  'framesPerSecond': 10
};

// Print the GIF URL to the console.
print(rgbVis.getVideoThumbURL(gifParams));

// Render the GIF animation in the console.
print(ui.Thumbnail(rgbVis, gifParams));
