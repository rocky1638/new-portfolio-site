const data = {
  title: "neureka 2020 🧠",
  subtitle: "at the cusp of medicine and tech",
  date: "june 1, 2019",
  content: [
    {
      header: "tl;dr"
    },
    {
      body:
        "My friend Tony and I worked on a machine learning competition trying to predict seizures from raw EEG (electroencephalogram) files, and ended up placing 4th place overall. Check out his portfolio site <a href='https://tonyxu.me/' target='_blank rel='noopener noreferrer'>here.</a>"
    },
    {
      header: "an overview"
    },
    {
      body:
        "The Neureka 2020 Competition , open to all high school and post secondary students globally, was a two month long contest with the goal of creating models to accurately predict and find seizures, within raw EEG data. For more information on the contest and results, visit the official site <a href='https://neureka-challenge.com/results/' target='_blank rel='noopener noreferrer'>here.</a> <i>(Our team name was RocketShoes).</i>"
    },
    {
      body:
        "If you don't want to know about the inner workings, feel free to skip to the learnings and conclusion, but read on to get an idea of how we managed to place fourth!"
    },
    {
      header: "process"
    },
    {
      header: "preprocessing",
      sub: true
    },
    {
      body:
        "This step was probably the most intensive step of the entire pipeline, as cleaning up the raw data and converting it into a workable input for the eventual model was quite a multi-step process."
    },
    {
      body:
        "The raw data was simply a long string of readings from a set of channels. These readings were typically taken at a frequency of 250 hertz <i>(250 samples per second),</i> and so each file contained thousands of readings, for recordings of sessions that lasted anywhere from 10 seconds to a couple of minutes."
    },
    {
      body:
        "The idea after cleaning up the data was to take overlapping windows of various sessions, and to have each of these windows (originally 30 seconds long) be a data point into our model."
    },
    {
      body:
        "The next step to take was to Fourier transform of the data, to extract all of the separate frequencies, and plot the frequencies by both amplitude and time passed. Note that <a href='https://pubmed.ncbi.nlm.nih.gov/29793128/' target='_blank' rel='noopener noreferrer'>this paper</a> was the inspiration for this idea."
    },
    {
      blockquote:
        "As a side note, we removed all values at the frequencies of 60 hertz, as that is the base running frequency of the EEG machine. We also removed the 120 hertz band, due to harmonics."
    },
    {
      body:
        "After this, we iterated through all of our data, and grabbed overlapping windows of values, classifying the window as either seizure or background based on a configurable sensitivity, requiring X% of the window to be seizure or background."
    },
    {
      body:
        "Finally, to combat class imbalance, we moved our sliding window by less time each time we found a block of seizure, so as to increase the number of positive data points."
    },
    {
      body: "Data visualization coming soon!"
    },
    {
      header: "model",
      sub: true
    },
    {
      body:
        "We decided that there wasn't going to be too much of a use of creating a novel new model, so we decided to just use transfer learning on a previously successful CNN <i>(Convolutional Neural Network)</i>, Resnet18."
    },
    {
      body:
        "The only changes made were to add a fully-connected input layer with ReLU activation to fit the dimensions of our input image, and an output layer with two nodes, for classification."
    },
    {
      header: "training",
      sub: true
    },
    {
      body:
        "Training was fairly straightforward, as we just let the model run for several epochs, although for the sake of the competition, some more iteration with training would have been nice. This iteration was difficult because each epoch took about an hour and half to both train and validate, resulting in fairly slow progress with tuning."
    },
    {
      blockquote:
        "Because the scoring formula rewarded models that made use of less channels from the data, we ran a single epoch of training for each separate channel, and cherry-picked the three best performing channels (on the validation set) to use for the final model."
    },
    {
      header: "tuning",
      sub: true
    },
    {
      body:
        "One of the main issues we faced during training was a tendency to start overfitting the training data after around the 4th epoch. Unfortunately, due to the time constraints of the competition, we didn't have much time to combat this, and so just took the best performing model before we started overfitting."
    },
    {
      header: "learnings"
    },
    {
      body: "All in all, this project was a great experience in many ways:"
    },
    {
      body:
        "<ol><li>We learned a lot of domain knowledge about EEGs and the technology behind them</li><li>We learned how to deal with fairly messy and variable data, and the preprocessing skills required to clean it and create a workable and efficient pipeline</li><li>We employed fairly good clean coding practices to ensure that this code could be used as boilerplate for future projects</li></ol>"
    },
    {
      header: "conclusion"
    },
    {
      body:
        "Even though we didn't win anything in the end, I am still extremely happy with our top four finish in the competition, considering that the winners above us all had much larger teams, and were from very well-renowned technology schools."
    },
    {
      body:
        "In the end, if we had more time, we likely could have further iterated on reducing false positives and increasing sensitivity within our model, but at the end of the day, it was a great learning experience with the great placement in the competition being the cherry on top."
    }
  ]
};

module.exports = data;
