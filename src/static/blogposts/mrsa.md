## tl;dr

I trained a logistic regression classifier to classify whether a movie review was positive or negative and made a React/Flask web app to allow users to train and test the classifier. I also learned a bunch of DevOps\-y things along the way.

Check it out [here](https://mra.rockzhou.com/).

## some background

After working on several full\-stack web applications, I turned my focus to something that I had always been fascinated by: artificial intelligence and machine learning.

To get started, I initially completed Andrew Ng's Introduction to Machine Learning course on [Coursera](https://www.coursera.org/learn/machine-learning). If anyone is curious and wants to dip their toes into the metaphorical shallow end of the machine learning pool, I highly recommend this course as a first step to understanding the fundamentals and mathematics behind the technology.

The course by Andrew Ng mentioned above is taught in MATLAB/Octave, so when I wrapped up that course, I moved on to a textbook by Sebastian Raschka called Python Machine Learning, which you can find [here](https://www.amazon.ca/Python-Machine-Learning-scikit-learn-TensorFlow-ebook/dp/B0742K7HYF/ref=sr_1_1?crid=1HU7QZAPMXLLK&keywords=python+machine+learning&qid=1565016807&s=digital-text&sprefix=python+machine+learning%2Cdigital-text%2C154&sr=1-1). The examples in this textbook primarily served as the inspiration for this project, so I’d suggest it to anyone looking to get into machine learning in Python.

## the dataset

I used the [IMDB Movie Review Dataset](https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews), which contains 50k different movie reviews, each classified as being positive or negative. As with most NLP datasets, the dataset was relatively simple, with just text and labels, making the preprocessing that much more critical.

### preprocessing

Being my first NLP project, I took a rudimentary approach to preprocessing, adopting the "Bag\-Of\-Words" model. I'll get to that later. First, however, using scikit\-learn, I removed all the extraneous HTML tags and stopwords from the reviews. Examples include words like 'is', 'the', and so on. I also removed any extraneous clutter, such as '\<br\>' tags, from the reviews.

Then, I assigned each review a specific index out of a vocabulary constructed from the entire vocabulary of all the reviews. I then encoded each review as a vector containing 1s and 0s, where 1s correspond to the indices in which those words occurred in the review text. This specific procedure is the inspiration behind the name "Bag of Words."

With that setup, I was now ready to train my model.

## the model

I trained this classifier using the logistic regression classifier model from scikit\-learn. For extra information on it, you can look it up [here](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html). Long story short, after training the model for several epochs, I eventually reached a classification accuracy on the test set of around 95%, which I was quite pleased with.

## the app

With my newly trained model in hand, I made a small web application to provide users the ability to enter their own movie reviews to see if the classifier could classify them accurately.

I created the app's frontend with React and the backend with Flask, which was then all tied up into an easily deployable image with Docker.

![](https://foodiy-beta.s3.amazonaws.com/mra_1.png)
![](https://foodiy-beta.s3.amazonaws.com/mra_2.png)
![](https://foodiy-beta.s3.amazonaws.com/mra_3.png)

## future considerations

Although this quick project was a superb introduction to fundamental NLP concepts such as the bag of words strategy and stopwords, the simplistic nature of this model means that it can't capture most of the spatial and contextual nuances of language. For example, because the model does not consider the order of words in a sentence, it ends up classifying a phrase such as "it's not bad" as nearly 100% negative when it should likely be closer to a lukewarm 50/50.

I'm going to try to more accurately classify this information by using a system that encodes and learns sequential data, so stay tuned for RNNs and LSTMs 😁.
