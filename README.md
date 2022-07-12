# UFOs

## Overview

The purpose of this analysis was to display UFO sightings data in a filterable table on a webpage. JavaScript was used to store data and code it into the table. HTML was used to create the webpage, since the data was supposed to be displayed online. A style.css document was also used to add additional style to the webpage. 

Data was provided in a JavaScript array and included data on sighting location, date, shape of the sighting, duration of the sighting, and any additional comments on the sighting. The data populated the table and filters were included to filter the sighting events. 


## Results

The following steps describe how to make a search on the website:

1. Visit the website. A fully populated table will appear, displaying all UFO sightings, as none of the filters have been manipulated. The following image shows the filters with an unfiltered table

![full table image](https://github.com/emariecovey/UFOs/blob/main/images/full_table.png)

2. Enter desired search criteria in the filters located at the bottom left section of the webpage. There are filler values within the boxes, helping the user know what type of values will be accepted by the filter

3. Hit the enter key, and the table should repopulate with only results matching the search criteria. This image shows a filtered table after filters were applied to only find triangular-shaped sightings in El Cajon, CA on 1/1/2010. 

![filtered table image](https://github.com/emariecovey/UFOs/blob/main/images/filtered_table.png)

## Summary 

In summary, this code displayed the data in a filterable table within a website. This code is useful, but could be improved upon. One drawback of this design is that some of the comments are cut off. Perhaps a functionality could be included where a mouse hovering over a comment could expand it to its full length. 

If this code was developed further, I would recommend:

1. Making inputs case insensitive:

 Users currently have to put in exactly what the the values are in the table of data, which are all lower case. Generally, states, countries, and cities are capitalized, which could confuse a user. 

2. Adding explaination about the filters and data: 

One example is the date filter. It would be helpful to know a range of dates that the filter would accept, without having to scroll through all the data to get a general sense of dates. 

Another example is the "shape" filter. This is vague, and a user visiting the site may not know what this is in reference to. It would also be helpful to know the possible shapes within the data (triangle, light, circle, fireball, etc.) since not all of the "shapes" are traditional shapes. This filter could be converted to a drop-down menu format. 
