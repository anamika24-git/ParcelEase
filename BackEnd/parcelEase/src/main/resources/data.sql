-- Drop existing rows from student table
DELETE FROM parcel;
DELETE FROM student;

-- Insert new values
INSERT INTO student (roll_no, first_name, middle_name, last_name, course, phone_number, email, address)
VALUES
    ('MT2023147', 'Anamika', NULL, 'Mishra', 'M.Tech', '9083422799', 'anamika.mishra@iiitb.ac.in', 'Kolkata'),
    ('BT2018001', 'Rahul', 'Kumar', 'Sharma', 'B.Tech', '9876543210', 'rahul.sharma@example.com', 'Delhi'),
    ('MT2023084', 'Atul', NULL, 'Tripathi', 'M.Tech', '8217698659', 'atul.tripathi@iiitb.ac.in', 'Bangalore'),
    ('BT2018002', 'Priya', NULL, 'Singh', 'B.Tech', '7890123456', 'priya.singh@example.com', 'Mumbai');

INSERT INTO parcel (pid, roll_no, origin, date, shelf_number, received_by, is_collected)
VALUES

    ('PN-0021', 'BT2018001', 'Myntra', '2024-05-17', 'A123', 'Sameer', 0),
    ('PN-6543', 'BT2018001', 'Amazon', '2024-05-17', 'A657', 'Sameer', 1),
    ('PN-9873', 'BT2018002', 'Flipkart', '2024-05-14', 'F213', 'Sameer', 1),
    ('PN-0304', 'BT2018002', 'Nykaa', '2024-05-13', 'F546', 'Sameer', 1),
    ('PN-0324', 'BT2018002', 'Nykaa', '2024-05-13', 'F546', 'Sameer', 1),
    ('PN-3446', 'MT2023084', 'Amazon', '2024-05-13', 'F546', 'Sameer', 1),
    ('PN-3444', 'MT2023084', 'Amazon', '2024-05-13', 'F546', 'Sameer', 0);


