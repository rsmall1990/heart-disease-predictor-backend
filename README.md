# Heart Disease Predictor Backend

This project will incorperate a ML algorith to predict the probability of heart disease
corresponding with a user's inputed data.

## Technologies Used

- JavaScript/express/mongoose/morgan/cors
- NodeJS
- MongoDB
- Heroku deployment

## Models

### PEOPLE

The people model will be populated by user input. The user must input data that matches the ML predictor algorithm, which is posted by [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Heart+Disease). Consequently the model must include attributes in the below list in addition to user data:

#### Attributes

- age: age in years
- sex: sex (1 = male; 0 = female)
- cp: chest pain type
    - Value 0: typical angina
    - Value 1: atypical angina
    - Value 2: non-anginal pain
    - Value 3: asymptomatic
- trestbps: resting blood pressure (in mm Hg on admission to the hospital)
- chol: serum cholestoral in mg/dl
- fbs: (fasting blood sugar > 120 mg/dl) (1 = true; 0 = false)
- restecg: resting electrocardiographic results
    - Value 0: normal
    - Value 1: having ST-T wave abnormality (T wave inversions and/or ST elevation or depression of > 0.05 mV)
    - Value 2: showing probable or definite left ventricular hypertrophy by Estes' criteria
- thalach: maximum heart rate achieved
- exang: exercise induced angina (1 = yes; 0 = no)
- oldpeak = ST depression induced by exercise relative to rest
- slope: the slope of the peak exercise ST segment
    - Value 0: upsloping
    - Value 1: flat
    - Value 2: downsloping
- ca: number of major vessels (0-3) colored by flourosopy
- thal: 0 = normal; 1 = fixed defect; 2 = reversable defect
- and the label
- condition: 0 = no disease, 1 = disease

Additional information such as a submission id, user name, prediction percentage, etc. will be required to generate useful information.