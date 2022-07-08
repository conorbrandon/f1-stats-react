# Resources

https://www.smashingmagazine.com/2020/03/sortable-tables-react/

https://en.wikipedia.org/wiki/List_of_adjectival_and_demonymic_forms_for_countries_and_nations

https://upload.wikimedia.org/wikipedia/commons/d/df/F1_tire_Pirelli_PZero_Red.svg

https://stackoverflow.com/questions/47723996/table-with-fixed-thead-and-scrollable-tbody

cumulative standings endpoint:
https://ergast.com/api/f1/1955/drivers/ascari/results.json?limit=1000


function getRandomColor(): string {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}