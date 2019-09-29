const data = {
  title: "mrsa 📹",
  subtitle: "my first foray into machine learning",
  date: "july 20, 2019",
  content: [
    {
      header: "tl;dr"
    },
    {
      body: "I trained a logistic regression classifier to classify whether a given movie review was positive or negative, and made a React/Flask webapp to allow users to train and test the classifier. I also learned a bunch of DevOps-y things along the way."
    },
    {
      body: "Check it out <a href='https://mra.rockzhou.com' target='_blank'>here</a>."
    },
    {
      header: "some background"
    },
    {
      body: "After working on a bunch of fullstack web applications, I decided to turn my focus to something that I had always been fascinated by - artificial intelligence/machine learning."
    },
    {
      body: "To get started, I initially completed Andrew Ng's Introduction to Machine Learning course on <a href='https://www.coursera.org/learn/machine-learning' target='_blank'>Coursera</a>. If anyone is curious and wants to get into machine learning, I highly recommend this course as a first step, to understand the fundamentals and mathematics behind the technology."
    },
    {
      body: "The course by Andrew Ng mentioned above is done in MATLAB/Octave, and so when I had finished that course, I then moved onto a textbook by Sebastian Raschka called Python Machine Learning, which you can find <a href='https://www.amazon.ca/Python-Machine-Learning-scikit-learn-TensorFlow-ebook/dp/B0742K7HYF/ref=sr_1_1?crid=1HU7QZAPMXLLK&keywords=python+machine+learning&qid=1565016807&s=digital-text&sprefix=python+machine+learning%2Cdigital-text%2C154&sr=1-1' target='_blank'>here</a>. This project was largely inspired by examples in this book, so once again, I highly recommend it for anyone looking to get into machine learning in Python."
    },
    {
      header: "the dataset"
    },
    {
      body: "I used the <a href='https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews' target='_blank' rel='noopener noreferrer'>IMDB Movie Review Dataset</a>, which contains 50k different movie reviews, each classified as being either positive or negative. As with most NLP datasets, the dataset was quite simple, with just text and labels, making the preprocessing that much more important."
    },
    {
      header: "preprocessing",
      sub: true
    },
    {
      body: "Being my first NLP project, I took a fairly basic approach to preprocessing, following the “Bag-Of-Words” model. I'll get to that later. First of all however, using scikit-learn, I removed all the extraneous HTML tags and stopwords from the reviews. Examples of this include words like ‘is’, ‘the’, and so on. On top of that, extraneous clutter such as ‘&lt;br&gt;’ were removed from the reviews."
    },
    {
      body: "Then, each review was assigned a certain index out of a vocabulary constructed from the entire vocabulary of all of the reviews, and each review was encoded as a vector containing 1s and 0s, where 1s correspond to the indices in which those words occurred in the review text. This is why the approach is known as “Bag of Words”."
    },
    {
      body: "With that set up, I was now ready to start training my model."
    },
    {
      header: "the model"
    },
    {
      body: "This classifier was trained using the logistic regression classifier model from scikit-learn. For more information on it, feel free to look it up <a href='https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html' target='_blank' rel='noopener noreferrer'>here</a>. Long story short, after training the model for several epochs, I eventually reached a classification accuracy on the test set of around 95%, which I was quite happy with."
    },
    {
      header: "the app"
    },
    {
      body: "With my new trained model in hand, I decided to make a small web application, and allow users to enter their own movie review, and see if the classifier could classify it accurately."
    },
    {
      body: "The frontend of the app was created with React, and the backend was written with Flask, which was then all tied up into a easily deployable image with Docker."
    },
    {
      image: {
        src: "https://foodiy-beta.s3.amazonaws.com/mra_1.png",
        subtitle: "landing page",
      },
    },
    {
      image: {
        src: "https://foodiy-beta.s3.amazonaws.com/mra_2.png",
        subtitle: "a negative review",
      },
    },
    {
      image: {
        src: "https://foodiy-beta.s3.amazonaws.com/mra_3.png",
        subtitle: "results page",
      },
    },
    {
      header: "future considerations"
    },
    {
      body: "Although this quick project was a good introduction to fundamental NLP concepts such as the bag of words strategy and stopwords, the simplistic nature of this model means that it loses some information in the process. For example, because order of words is not considered, much of the contextual information in language is lost, and a phrase such as “it's not bad” end up being classified as nearly 100% negative, when it should likely be closer towards 50/50."
    },
    {
      body: "I'm going to try to more accurately classify this information by using a system that encodes and learns sequential data. Stay tuned next time for RNNs and LSTMs 😁."
    }
  ]
}

export default data
