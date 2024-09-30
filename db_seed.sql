-- Create the table first
CREATE TABLE reviews (
    id serial PRIMARY KEY,
    username VARCHAR(50),
    feedback VARCHAR(255)
);

-- view table
SELECT * FROM reviews;

-- Insert five reviews in Swedish
INSERT INTO reviews (username, feedback) 
VALUES ('johan Larsson', 'Fantastisk belysning! Installationen gick snabbt och smidigt. Tack, Elektriker Jansson!');

INSERT INTO reviews (username, feedback) 
VALUES ('maria Eriksson', 'Väldigt nöjd med den nya belysningen i köket. Proffsigt arbete och bra service.');

INSERT INTO reviews (username, feedback) 
VALUES ('peter Nilsson', 'Elektriker Jansson gjorde ett utmärkt jobb med våra utomhuslampor. Väldigt trevlig och kunnig.');

INSERT INTO reviews (username, feedback) 
VALUES ('lina Svensson', 'Bra pris och snabb installation. Min nya hallbelysning är perfekt!');

INSERT INTO reviews (username, feedback) 
VALUES ('karl Andersson', 'Supernöjd med ljusinstallationen i vardagsrummet. Det blev precis som vi ville ha det.');
