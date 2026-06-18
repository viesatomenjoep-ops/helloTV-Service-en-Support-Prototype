CREATE EXTENSION IF NOT EXISTS timescaledb;

CREATE TABLE tickets (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_email VARCHAR(255),
    customer_phone VARCHAR(50),
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100),
    serial_number VARCHAR(100),
    defect_description TEXT,
    status VARCHAR(50) DEFAULT 'Nieuw',
    media_urls JSONB,
    external_api_responses JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- We would normally create a hypertable for timescaledb SLA tracking
-- SELECT create_hypertable('ticket_status_history', 'changed_at');

CREATE TABLE ticket_status_history (
    id SERIAL PRIMARY KEY,
    ticket_id INTEGER REFERENCES tickets(id),
    old_status VARCHAR(50),
    new_status VARCHAR(50),
    changed_by VARCHAR(100),
    changed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Dummy data for testing the UI
INSERT INTO tickets (customer_name, customer_email, customer_phone, brand, model, serial_number, defect_description, status, media_urls)
VALUES
('Jan Smit', 'jan.smit@example.com', '+31612345678', 'LG', 'OLED65C1', 'LG123456789', 'Scherm blijft zwart, wel geluid', 'In behandeling reparatie', '["http://localhost:9000/media/video1.mp4"]'::jsonb),
('Klaas Vaak', 'klaas@example.com', '+31687654321', 'Samsung', 'QLED55', 'SAM987654321', 'Achterspeakers doen het niet', 'Wachtend op onderdeel', '[]'::jsonb);
