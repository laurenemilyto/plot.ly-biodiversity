// Import data and create plots
function getPlot(selectedID) {
    d3.json("data/samples.json").then((data) => {
        console.log(data)

        var plotData = data.samples;
        var subject = plotData.filter(
            (sampleobject) => sampleobject.id == selectedID
        )[0];

        console.log(subject);
        var ids = subject.otu_ids;
        var labels = subject.otu_labels;
        var values = subject.sample_values;

        //------------------------------------------------------//
        // Bar Chart
        //------------------------------------------------------//
        //  Trace for top 10 bacteria cultures 
        var trace1 = {
            x: values.slice(0, 10).reverse(),
            y: ids
                .slice(0, 10)
                .map((otuID) => `OTU ${otuID}`)
                .reverse(),
            text: labels.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h",
            marker: {
                color: "#4169E1",
                width: 900,
            }
        };

        //   Data array
        var data = [trace1];

        var layout = {
            title: "<b>Top 10 Bacteria Cultures Found</b>",
            xaxis: { autorange: true },
            yaxis: { autorange: true },
            margin: { t: 60, l: 120 },
        };
        //   Render plot
        Plotly.newPlot("bar", data, layout);

        //------------------------------------------------------//
        // Bubble Chart
        //------------------------------------------------------//
        //  Trace for Bubble Chart
        var trace1 = {
            x: ids,
            y: values,
            text: labels,
            mode: "markers",
            marker: {
                color: ids,
                size: values,
                colorscale: "Jet",
            },
        };
        //   Data array
        var data = [trace1];

        var layout = {
            title: '<b>OTU ID Samples Collected</b>',
            xaxis: { title: "OTU ID" },
            yaxis: { title: "Number of Samples Collected" },
            hovermode: "closest",
            width: 1300,
            height: 800
        };
        //   Render  plot
        Plotly.newPlot("bubble", data, layout);
    });
}

//------------------------------------------------------//
// Demographic Info 
//------------------------------------------------------//

function getDemographic(selectedID) {
    d3.json("data/samples.json").then((data) => {
        var MetaData = data.metadata;
        var subject = MetaData.filter(
            (sampleobject) => sampleobject.id == selectedID
        )[0];
        var demographicInfoBox = d3.select("#sample-metadata");
        demographicInfoBox.html("");
        Object.entries(subject).forEach(([key, value]) => {
            demographicInfoBox.append("h5").text(`${key}: ${value}`);
        });

        //------------------------------------------------------//
        // Gauge Chart
        //------------------------------------------------------//
        //  Var for Guage Chart
        var gaugeData = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: subject.wfreq,
            text: subject.wfreq,
            type: "indicator",
            mode: "gauge+number",
            delta: { reference: 10 },
            gauge: {
                axis: { range: [0, 9] },
                bar: { color: "black" },
                steps: [
                    { range: [0, 2], color: "cyan" },
                    { range: [2, 4], color: "#4169E1" },
                    { range: [4, 6], color: "#CDFF63" },
                    { range: [6, 8], color: "#ffc800" },
                    { range: [8, 9], color: "#f4615a" },
                ],
            },
        }, ];

        var layout = {
            title: "<b>Belly Button Washing Frequency</b> <br>(Scrubs Per Week)</br>",
            width: 550,
            height: 400,
            margin: { t: 50, b: 0 },
        };

        //   Render  plot
        Plotly.newPlot("gauge", gaugeData, layout);
    });
}

//------------------------------------------------------//
// Initialize Data
//------------------------------------------------------//
function init() {
    d3.json("data/samples.json").then(function(data) {
        console.log("samples.json:", data);

        // Select dropdown via D3:
        let DropDown = d3.select(`#selDataset`);

        // Populate dropdown with sample names from json
        data.names.forEach((name) => {
            DropDown.append(`option`).text(name).property(`value`, name);
        });

        // Fetch data to populate plots from first sample
        const firstSample = data.names[0];
        getPlot(firstSample);
        getDemographic(firstSample);
    });
}
// Fetch new data when a new sample is selected
function optionChanged(newSample) {
    getPlot(newSample);
    getDemographic(newSample);
}
// Initialize Dashboard
init();