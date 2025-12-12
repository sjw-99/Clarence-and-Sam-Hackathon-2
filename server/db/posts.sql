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
    