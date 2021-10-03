# plot.ly-biodiversity
<img src="https://i.pinimg.com/originals/ce/8d/2c/ce8d2c7a4a75ffe43427631716994e30.jpg" width=1000 align=center> <br>

## About This Project
This project uses Javascript, Plotly and D3 to build an interactive dashboard exploring and analyzing belly button microbial diversity. The dashboard displays a bar chart showing Top 10 bacteria cultures found, a gauge chart showing belly button washing frequency, and a bubble chart showing the number of samples collected per OTU. The dashboard dynamically populates based on test subject ID selected. Demographic info for the subject ID is also displayed.  

In a sample size of 60 belly buttons, over 2300 species were discovered. Eight of those species were present in more than 70% of people, while the remaining species were rare in more than one person.

Link to Dashboard: (https://laurenemilyto.github.io/plot.ly-biodiversity/)

## Technology
- D3 
- Plotly
- Javascript
- JSON
- HTML
- CSS

## Plotly
1. Used the D3 library to read in `samples.json`.

2. Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

* Used `sample_values` as the values for the bar chart.

* Used `otu_ids` as the labels for the bar chart.

* Used `otu_labels` as the hovertext for the chart.

  ![bar Chart](Images/hw01.png)

3. Created a bubble chart that displays each sample.

* Used `otu_ids` for the x values.

* Used `sample_values` for the y values.

* Used `sample_values` for the marker size.

* Used `otu_ids` for the marker colors.

* Used `otu_labels` for the text values.

4. Displayed the sample metadata, i.e., an individual's demographic information.

5. Displayed each key-value pair from the metadata JSON object somewhere on the page.

6. Adapted the Gauge Chart from <https://plot.ly/javascript/gauge-charts/> to plot the weekly washing frequency of the individual.

## Dashboard
Bootstrap and custom CSS are used to design the interactive dashboard below: 

<img src="https://i.pinimg.com/originals/eb/08/7d/eb087dd6e790e41808c54e70f1b1f458.jpg" width=600 align=center> <br>

## Data Sources
Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/

## Contact
Lauren To: [laurenemilyto@gmail.com](laurenemilyto@gmail.com)