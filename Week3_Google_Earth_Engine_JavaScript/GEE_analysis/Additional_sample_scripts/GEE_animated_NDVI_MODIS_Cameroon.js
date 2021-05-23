/* GEE Code from Hannah Kerner - https://twitter.com/hannah_kerner */
/* https://code.earthengine.google.com/fe75f3bfa1b0883df7709e0d29455ed7 */
/* Based on tutorial: https://developers.google.com/earth-engine/tutorials/community/modis-ndvi-time-series-animation */

/* THIS IS FOR THE IMPORTS (top) PANE */

var geometry =
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[0.17303081082878258, 9.415866252977784],
          [0.3488120608287826, 10.292620565913728],
          [-0.10162739229621742, 10.703112180244743],
          [0.019222217078782577, 11.016009704581775],
          [-0.024723095421217423, 11.123828809024085],
          [-0.10162739229621742, 11.080705932186568],
          [-0.13458637667121742, 11.156166780630238]]]),
    geometry2 =
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[1.3096748144566561, 9.448525358970052],
          [1.3096748144566561, 9.448229026915207],
          [1.3101897985875155, 9.448229026915207],
          [1.3101897985875155, 9.448525358970052]]], null, false),
    geometry3 =
    /* color: #0b4a8b */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      },
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.MultiPolygon(
        [[[[1.3061986715733553, 9.448398359549213],
           [1.3061986715733553, 9.419949309881545],
           [1.3608299047886874, 9.419949309881545],
           [1.3608299047886874, 9.448398359549213]]],
         [[[-0.2503707054494564, 11.185594797242453],
           [-0.2503707054494564, 6.016751011907447],
           [2.1226761695505436, 6.016751011907447],
           [2.1226761695505436, 11.185594797242453]]]], null, false),
    geometry4 =
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[33.59829896564364, 5.30782770456395],
          [33.59829896564364, -4.961554550980855],
          [42.07974427814364, -4.961554550980855],
          [42.07974427814364, 5.30782770456395]]], null, false),
    geometry5 =
    /* color: #00ffff */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-12.33208374954927, 25.329593266551036],
          [-12.33208374954927, 9.888190174246066],
          [4.54291625045073, 9.888190174246066],
          [4.54291625045073, 25.329593266551036]]], null, false),
    geometry6 =
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[8.298247018355296, 13.179663664918616],
          [8.298247018355296, 1.476002396985248],
          [16.647856393355294, 1.476002396985248],
          [16.647856393355294, 13.179663664918616]]], null, false);

/* THIS IS FOR THE MAIN CODE PANE */

var col = ee.ImageCollection('MODIS/006/MOD13A2').select('NDVI');

// Define a mask to clip the NDVI data by.
var mask = ee.FeatureCollection('USDOS/LSIB_SIMPLE/2017')
  .filter(ee.Filter.eq('country_na', 'Cameroon'));

col = col.map(function(img) {
  var doy = ee.Date(img.get('system:time_start')).getRelative('day', 'year');
  return img.set('doy', doy);
});

var distinctDOY = col.filterDate('2013-01-01', '2014-01-01');

// Define a filter that identifies which images from the complete collection
// match the DOY from the distinct DOY collection.
var filter = ee.Filter.equals({leftField: 'doy', rightField: 'doy'});

// Define a join.
var join = ee.Join.saveAll('doy_matches');

// Apply the join and convert the resulting FeatureCollection to an
// ImageCollection.
var joinCol = ee.ImageCollection(join.apply(distinctDOY, col, filter));

// Apply median reduction among matching DOY collections.
var comp = joinCol.map(function(img) {
  var doyCol = ee.ImageCollection.fromImages(
    img.get('doy_matches')
  );
  return doyCol.reduce(ee.Reducer.median());
});

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

// Define GIF visualization parameters.
var gifParams = {
  'region': geometry6,
  'dimensions': 600,
  'crs': 'EPSG:3857',
  'framesPerSecond': 10
};

// Print the GIF URL to the console.
print(rgbVis.getVideoThumbURL(gifParams));

// Render the GIF animation in the console.
print(ui.Thumbnail(rgbVis, gifParams));
