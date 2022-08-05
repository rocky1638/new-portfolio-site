# Neureka 2020

## tl;dr

My friend Tony and I worked on a machine learning competition to predict seizures from raw EEG \(electroencephalogram\) files and placed 4th place overall. Check out his portfolio site [here.](https://tonyxu.me/)

## an overview

The Neureka 2020 Competition, open to all high school and post\-secondary students globally, was a two\-month\-long contest to create models to accurately predict and find seizures  within raw EEG data. For more information on the contest and results, visit the official site [here.](https://neureka-challenge.com/results/) _\(Our team name was RocketShoes\)._

If you want to look at the source code, you can find it on Github [here.](https://github.com/rocky1638/eeg-seizure-detection)

If you don't want to know about the inner workings, feel free to skip to the learnings and conclusion, but read on to get an idea of how we managed to place fourth\!

## process

### preprocessing

This step was probably the most intensive step of the entire pipeline. Cleaning up the raw data and converting it into a workable input for the eventual model was quite a multi\-step process.

The raw data was simply a long string of readings from a set of channels. Medical technicians typically take these readings at a frequency of 250 hertz _\(250 samples per second\). Each_ file contained thousands of readings for recordings of sessions that lasted anywhere from 10 seconds to a couple of minutes.

After cleaning up the data, the idea was to take overlapping windows of various sessions and have each of these windows \(initially 30 seconds long\) be a data point in our model.

The next step to take was to Fourier transform the data, extract all of the separate frequencies, and plot the frequencies by both amplitude and time passed. Note that [this](https://pubmed.ncbi.nlm.nih.gov/29793128/) paper is the inspiration for this idea.

As a side note, we removed all values at the frequencies of 60 hertz, as that is the base running frequency of the EEG machine. We also removed the 120\-hertz band due to harmonics.

After this, we iterated through all of our data and grabbed overlapping windows of values, classifying the window as either seizure or background based on a configurable sensitivity, requiring X% of the window to be seizure or background.

Finally, to combat class imbalance, we moved our sliding window by less time each time we found a block of seizure to increase the number of positive data points.

Here's a picture of the visualized input to the model.
![eeg.png](https://foodiy-beta.s3.amazonaws.com/eeg.png)

### model

We decided that there wouldn't be much of a use in creating a novel new model, so we just used transfer learning on a previously successful CNN _\(Convolutional Neural Network\)_, Resnet18.

The only changes were to add a fully\-connected input layer with ReLU activation to fit the dimensions of our input image and an output layer with two nodes for classification.

### training

The training was pretty straightforward, as we just let the model run for several epochs, although for the sake of the competition, some more iterations with training would have been ideal. Unfortunately, this iteration was difficult because each epoch took about an hour and a half to train and validate, resulting in reasonably slow progress with tuning.

Because the scoring formula rewarded models that made use of fewer channels from the data, we ran a single epoch of training for each separate channel and cherry\-picked the three best\-performing channels \(on the validation set\) to use for the final model.

### tuning

One of the main issues we faced during training was a tendency to start overfitting the training data after approximately the 4th epoch. Unfortunately, due to the time constraints of the competition, we didn't have much time to combat this, so we just took the best\-performing model before we started overfitting.

### learnings

All in all, this project was a great experience in many ways:

1. We learned a lot of domain knowledge about EEGs and the technology behind them.
2. We learned how to deal with relatively messy and variable data and the preprocessing skills required to clean it and create a workable and efficient pipeline
3. We employed fairly good clean coding practices to ensure that we could use this code as boilerplate for future projects

### conclusion

Even though we didn't win anything in the end, I am still thrilled with our top four finish in the competition, considering that the winners above us all had much larger teams and were from well\-renowned technology schools.

In the end, if we had had more time, we likely could have further iterated on reducing false positives and increasing sensitivity within our model. Still, at the end of the day, it was a great learning experience, with the excellent placement in the competition being the cherry on top.
