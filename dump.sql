--
-- PostgreSQL database dump
--

-- Dumped from database version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.8 (Ubuntu 14.8-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: donation; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.donation (
    id integer NOT NULL,
    nome character varying(255) NOT NULL,
    idade integer NOT NULL,
    sexo character(1) NOT NULL,
    tipo_sanguineo character varying(5) NOT NULL,
    data_doacao timestamp without time zone NOT NULL
);


--
-- Name: donation_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.donation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: donation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.donation_id_seq OWNED BY public.donation.id;


--
-- Name: donation id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donation ALTER COLUMN id SET DEFAULT nextval('public.donation_id_seq'::regclass);


--
-- Data for Name: donation; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.donation VALUES (1, 'João', 25, 'M', 'O+', '2023-06-29 10:00:00');


--
-- Name: donation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.donation_id_seq', 1, true);


--
-- Name: donation donation_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.donation
    ADD CONSTRAINT donation_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

