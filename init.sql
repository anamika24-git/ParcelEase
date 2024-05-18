-- init.sql

-- Create the student table
CREATE TABLE IF NOT EXISTS student (
    roll_no VARCHAR(50) PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    middle_name VARCHAR(100),
    last_name VARCHAR(100),
    course VARCHAR(100),
    phone_number VARCHAR(20) UNIQUE NOT NULL,
    email VARCHAR(100) NOT NULL,
    address VARCHAR(255)
);

-- Insert data only if the table is empty
DO
$$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM student) THEN
        INSERT INTO student (roll_no, first_name, middle_name, last_name, course, phone_number, email, address) VALUES
        ('MT2023147', 'Anamika', NULL, 'Mishra', 'M.Tech', '9083422799', 'anamika.mishra@iiitb.ac.in', 'Kolkata'),
        ('MT2023084', 'Atul', NULL, 'Tripathi', 'M.Tech', '9434130316', 'atul.tripathi@iiitb.ac.in', 'Bangalore');
    END IF;
END
$$;
