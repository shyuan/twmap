var all_data = null;

var population_density_init_data = function(data){
    all_data = [];
    data.forEach(function(d){
        var id;
        id = d['name'];
        all_data[id] = d;
    });
    console.log(all_data);
};

var population_density_style_cb = function(d) {
    if ('undefined' == typeof(all_data[d.id])) {
        return '';
    }
    var rgb = [];
    if( all_data[d.id]['populationDensity'] < 20) {
      rgb = [247,251,255];
    } else if(all_data[d.id]['populationDensity'] < 50) {
      rgb = [222,235,247];
    } else if(all_data[d.id]['populationDensity'] < 300) {
      rgb = [198,219,239];
    } else if(all_data[d.id]['populationDensity'] < 500) {
      rgb = [158,202,225];
    } else if(all_data[d.id]['populationDensity'] < 1000) {
      rgb = [107,174,214];
    } else if(all_data[d.id]['populationDensity'] < 5000) {
      rgb = [66,146,198];
    } else if(all_data[d.id]['populationDensity'] < 10000) {
      rgb = [33,113,181];
    } else if(all_data[d.id]['populationDensity'] < 20000) {
      rgb = [8,81,156];
    } else if(all_data[d.id]['populationDensity'] < 50000) {
      rgb = [8,48,107];
    }
    return 'fill:rgb(' + rgb.join(',') + ')';
};

var population_density_mouseover_cb = function(e){
  var data = all_data[e.id];

  if ('undefined' == typeof(data)) {
    $('#info').text('不知道的鄉鎮: ' + e.id);
  }

  var body = '';

  for (var i in data) {
    if ('' !== data[i]) {
      if('name'== i) {
        body += '<br>行政區: ' + data[i] + '<br>';
      } else if ('populationDensity'== i) {
        body += '人口密度: ' + data[i] + ' 人/平方公里<br>';
      }
    }
  }

  $('#info').html(body);
};
