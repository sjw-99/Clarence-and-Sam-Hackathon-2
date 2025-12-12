# Hackathon - 'Diary App'

Welcome to our repository! Here you will find our take on the hackathon theme of a 'Diary App'. We decided to design our app throught the lens of a football jounralist, documenting various pieces of football news and insight.

## Getting Started

1. Clone our repository to your machine by fetching the SSH address and using <br> `git clone <SSH Address>`
2. Navigate into the folder containing our 'package.json'
3. Install the required packages for our scripts using <br> `npm install`
4. Connect your instance of the application with our database using <br> `npm run setup-db`
5. Enjoy our application using <br> `npm start`

## Our Application - Football Journalism Diary

As football fans who consume far too much media, we wanted to create a one-stop place for football journalists to post their content that audiences could easily interact with to find the articles they're looking for.

The back-end of our application is based on a database of 'posts' made by the user that can be read from, written to, updated, and deleted from by the user (EVENTUALLY - STILL IN PRODUCTION).

The front-end of our application enables the user to interact with the database as described above, and is styled for clean minimalism where what you want is what you see!

## Database Schema

``` SQL
-- If there is already a table, get rid of it
DROP TABLE IF EXISTS posts;

-- Create the posts table
CREATE TABLE posts (
    post_id INT GENERATED ALWAYS AS IDENTITY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    category VARCHAR(100) NOT NULL,
    club VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    text VARCHAR,
    keywords TEXT[],
    PRIMARY KEY (post_id)
);

-- Insert sample posts
INSERT INTO posts (date, time, category, club,  title, text, keywords)
VALUES
    ('2025-12-12', '09:15:00', 'Injury News', 'Arsenal', 'Gabriel Jesus makes long-awaited return from injury', 'Arsenal fans were delighted to see Gabriel Jesus enter the fray during their 3-0 triumph over Club Brugge on wednesday evening.', '{Jesus, Arsenal, Injury}'),
    ('2025-12-12', '09:30:00', 'Match Report', 'Chelsea', 'Chelsea lose again', 'It was unsurprising to see Chelsea beaten once again, decidedly second-best in their 2-1 defeat to Atalanta', '{Chelsea, Atalanta, Champions League}'),
    ('2025-12-12', '09:45:00', 'Transfer News', 'Manchester United', 'Manchester United plotting swoop for Arsenal''s Ethan Nwaneri', 'Manchester United are reportedly preparing a bid for Arsenal academy graduate Ethan Nwaneri when the transfer window opens, who do they think they are?', '{Manchester United, Arsenal, Nwaneri}'),
    ('2025-12-12', '10:00:00', 'Club News', 'Arsenal', 'Arsenal close to securing new sleeve sponsor', 'Arsenal are reported to have signed a deal with HR platform Deel to replace their current, controversial, sleeve sponsor Visit Rwanda.', '{Arsenal, Sponsorship, Controversy}');
```

## Next Phase of Development - Full CRUD Functionality and Beyond

We are currently working on implementing full CRUD functionality to the back-end of our application, affording the user a range of methods to interact with the database. Our aim is then to marry this up to a clean UI that is easy to use!

Looking longer term, we then want users to be able to filter the stories they see by date, club, category of post, or keywords!
