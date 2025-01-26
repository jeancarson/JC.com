--
-- PostgreSQL database dump
--

-- Dumped from database version 16.6
-- Dumped by pg_dump version 16.6 (Ubuntu 16.6-1.pgdg22.04+1)

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
-- Name: active_admin_comments; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.active_admin_comments (
    id bigint NOT NULL,
    namespace character varying,
    body text,
    resource_type character varying,
    resource_id bigint,
    author_type character varying,
    author_id bigint,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.active_admin_comments OWNER TO db_user;

--
-- Name: active_admin_comments_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.active_admin_comments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.active_admin_comments_id_seq OWNER TO db_user;

--
-- Name: active_admin_comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.active_admin_comments_id_seq OWNED BY public.active_admin_comments.id;


--
-- Name: admin_users; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.admin_users (
    id bigint NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp(6) without time zone,
    remember_created_at timestamp(6) without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.admin_users OWNER TO db_user;

--
-- Name: admin_users_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.admin_users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.admin_users_id_seq OWNER TO db_user;

--
-- Name: admin_users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.admin_users_id_seq OWNED BY public.admin_users.id;


--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.ar_internal_metadata OWNER TO db_user;

--
-- Name: count_down_game_scores; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.count_down_game_scores (
    id bigint NOT NULL,
    initials character varying(3) NOT NULL,
    score double precision NOT NULL,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.count_down_game_scores OWNER TO db_user;

--
-- Name: count_down_game_scores_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.count_down_game_scores_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.count_down_game_scores_id_seq OWNER TO db_user;

--
-- Name: count_down_game_scores_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.count_down_game_scores_id_seq OWNED BY public.count_down_game_scores.id;


--
-- Name: drinks; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.drinks (
    id bigint NOT NULL,
    name character varying,
    priceml numeric(5,2),
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    description character varying,
    imagepath character varying,
    color character varying
);


ALTER TABLE public.drinks OWNER TO db_user;

--
-- Name: drinks_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.drinks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.drinks_id_seq OWNER TO db_user;

--
-- Name: drinks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.drinks_id_seq OWNED BY public.drinks.id;


--
-- Name: questions; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.questions (
    id bigint NOT NULL,
    title character varying,
    tag character varying,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL,
    likes_count integer DEFAULT 0,
    dislikes_count integer DEFAULT 0
);


ALTER TABLE public.questions OWNER TO db_user;

--
-- Name: questions_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.questions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.questions_id_seq OWNER TO db_user;

--
-- Name: questions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.questions_id_seq OWNED BY public.questions.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.schema_migrations (
    version character varying NOT NULL
);


ALTER TABLE public.schema_migrations OWNER TO db_user;

--
-- Name: users; Type: TABLE; Schema: public; Owner: db_user
--

CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying DEFAULT ''::character varying NOT NULL,
    encrypted_password character varying DEFAULT ''::character varying NOT NULL,
    reset_password_token character varying,
    reset_password_sent_at timestamp(6) without time zone,
    remember_created_at timestamp(6) without time zone,
    created_at timestamp(6) without time zone NOT NULL,
    updated_at timestamp(6) without time zone NOT NULL
);


ALTER TABLE public.users OWNER TO db_user;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: db_user
--

CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO db_user;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: db_user
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: active_admin_comments id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.active_admin_comments ALTER COLUMN id SET DEFAULT nextval('public.active_admin_comments_id_seq'::regclass);


--
-- Name: admin_users id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.admin_users ALTER COLUMN id SET DEFAULT nextval('public.admin_users_id_seq'::regclass);


--
-- Name: count_down_game_scores id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.count_down_game_scores ALTER COLUMN id SET DEFAULT nextval('public.count_down_game_scores_id_seq'::regclass);


--
-- Name: drinks id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.drinks ALTER COLUMN id SET DEFAULT nextval('public.drinks_id_seq'::regclass);


--
-- Name: questions id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.questions ALTER COLUMN id SET DEFAULT nextval('public.questions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: active_admin_comments; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.active_admin_comments (id, namespace, body, resource_type, resource_id, author_type, author_id, created_at, updated_at) FROM stdin;
\.


--
-- Data for Name: admin_users; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.admin_users (id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at) FROM stdin;
1	admin@example.com	$2a$12$H5wWEU0OvqgUE24YFnnFZ./22xCkqpiqJYvYJpcrosLj3L6oUxFL.	\N	\N	\N	2024-12-29 23:56:28.60361	2024-12-29 23:56:28.60361
\.


--
-- Data for Name: ar_internal_metadata; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.ar_internal_metadata (key, value, created_at, updated_at) FROM stdin;
environment	production	2024-12-28 18:13:43.215611	2024-12-28 18:13:43.215616
\.


--
-- Data for Name: count_down_game_scores; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.count_down_game_scores (id, initials, score, created_at, updated_at) FROM stdin;
1	HHH	4.44	2024-12-29 16:14:17.522183	2024-12-29 16:14:17.522183
2	FGH	1.61	2024-12-29 16:14:31.769738	2024-12-29 16:14:31.769738
3	ABC	1000	2024-12-29 18:49:36.680496	2024-12-29 18:49:36.680496
4	DEF	2000	2024-12-29 18:49:36.84776	2024-12-29 18:49:36.84776
5	GHI	3000	2024-12-29 18:49:37.017125	2024-12-29 18:49:37.017125
6	JKL	4000	2024-12-29 18:49:37.195695	2024-12-29 18:49:37.195695
7	MNO	5000	2024-12-29 18:49:37.362559	2024-12-29 18:49:37.362559
8	PQR	6000	2024-12-29 18:49:37.5263	2024-12-29 18:49:37.5263
9	STU	7000	2024-12-29 18:49:37.690765	2024-12-29 18:49:37.690765
10	VWX	8000	2024-12-29 18:49:37.854024	2024-12-29 18:49:37.854024
11	YZA	9000	2024-12-29 18:49:38.025723	2024-12-29 18:49:38.025723
12	BCD	10000	2024-12-29 18:49:38.19007	2024-12-29 18:49:38.19007
13	EFG	20000	2024-12-29 18:49:38.353689	2024-12-29 18:49:38.353689
14	VGC	0.09	2024-12-31 11:29:01.076386	2024-12-31 11:29:01.076386
15	BVL	0.02	2025-01-02 16:12:07.37112	2025-01-02 16:14:08.637583
16	RUA	0.01	2025-01-02 17:28:34.85947	2025-01-02 17:34:13.275493
17	JAC	0.02	2025-01-13 11:17:42.300381	2025-01-13 11:17:42.300381
18	VIO	4.81	2025-01-13 11:19:12.148354	2025-01-13 11:19:12.148354
19	CON	4.87	2025-01-13 11:20:40.801556	2025-01-13 11:20:40.801556
20	ANJ	0.02	2025-01-20 15:44:36.280468	2025-01-20 15:44:36.280468
21	ELN	0.02	2025-01-20 15:46:15.163323	2025-01-20 15:46:15.163323
\.


--
-- Data for Name: drinks; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.drinks (id, name, priceml, created_at, updated_at, description, imagepath, color) FROM stdin;
1	Orange Juice	0.05	2024-12-22 12:13:00	2024-12-23 12:03:00	ZESTY	orange-juice.png	#ffbb00
2	Vodka	0.20	2024-12-22 12:12:00	2024-12-23 12:04:00	37.5% ABV	smirnoff.jpg	#cfd0d3
3	Tullamore Dew	0.20	2024-12-22 12:11:00	2024-12-23 12:04:00	40% ABV, the best because it's from Tullamore	tullamore-dew.jpg	#d59a6f
4	Ribena	0.00	2024-12-22 12:14:00	2024-12-23 12:03:00	Blackcurrant dilute	ribena.jpg	#2e183b
5	Coors	0.01	2024-12-22 12:16:00	2024-12-23 12:02:00	4.2% ABV	coors.jpg	#f25e1c
6	White Wine	0.03	2024-12-22 12:17:00	2024-12-23 12:02:00	12% ABV	white-wine.jpg	#f9e8c0
\.


--
-- Data for Name: questions; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.questions (id, title, tag, created_at, updated_at, likes_count, dislikes_count) FROM stdin;
109	How to check if a id is present in a hash?	Ruby	2025-01-22 16:01:46.675034	2025-01-22 16:01:46.675034	0	0
110	What is the difference between strings and symbol?	Ruby	2025-01-22 16:01:46.690841	2025-01-22 16:01:46.690841	0	0
111	What happens if you add two of the same ids in hash?	Ruby	2025-01-22 16:01:46.701186	2025-01-22 16:01:46.701186	0	0
112	How to delete a given id from a hash?	Ruby	2025-01-22 16:01:46.716007	2025-01-22 16:01:46.716007	0	0
113	How to check if two hashes are identical?	Ruby	2025-01-22 16:01:46.731901	2025-01-22 16:01:46.731901	0	0
114	How to combine two hashes in Ruby	Ruby	2025-01-22 16:01:46.7542	2025-01-22 16:01:46.7542	0	0
115	How to get uniwue ids from two hashes in Ruby?	Ruby	2025-01-22 16:01:46.764268	2025-01-22 16:01:46.764268	0	0
116	What does the has_id?, id?, include?, member? do?	Ruby	2025-01-22 16:01:46.77308	2025-01-22 16:01:46.77308	0	0
117	Does the order of keys matterwhen comparing two hashes?	Ruby	2025-01-22 16:01:46.788304	2025-01-22 16:01:46.788304	0	0
\.


--
-- Data for Name: schema_migrations; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.schema_migrations (version) FROM stdin;
20241103121240
20241103132915
20241118220538
20241120215923
20241120215925
20241120220046
20241217220038
20241219202852
20241223115431
20241223115724
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: db_user
--

COPY public.users (id, email, encrypted_password, reset_password_token, reset_password_sent_at, remember_created_at, created_at, updated_at) FROM stdin;
\.


--
-- Name: active_admin_comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.active_admin_comments_id_seq', 1, false);


--
-- Name: admin_users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.admin_users_id_seq', 1, true);


--
-- Name: count_down_game_scores_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.count_down_game_scores_id_seq', 21, true);


--
-- Name: drinks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.drinks_id_seq', 6, true);


--
-- Name: questions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.questions_id_seq', 117, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: db_user
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- Name: active_admin_comments active_admin_comments_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.active_admin_comments
    ADD CONSTRAINT active_admin_comments_pkey PRIMARY KEY (id);


--
-- Name: admin_users admin_users_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.admin_users
    ADD CONSTRAINT admin_users_pkey PRIMARY KEY (id);


--
-- Name: ar_internal_metadata ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: count_down_game_scores count_down_game_scores_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.count_down_game_scores
    ADD CONSTRAINT count_down_game_scores_pkey PRIMARY KEY (id);


--
-- Name: drinks drinks_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.drinks
    ADD CONSTRAINT drinks_pkey PRIMARY KEY (id);


--
-- Name: questions questions_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.questions
    ADD CONSTRAINT questions_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: db_user
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: index_active_admin_comments_on_author; Type: INDEX; Schema: public; Owner: db_user
--

CREATE INDEX index_active_admin_comments_on_author ON public.active_admin_comments USING btree (author_type, author_id);


--
-- Name: index_active_admin_comments_on_namespace; Type: INDEX; Schema: public; Owner: db_user
--

CREATE INDEX index_active_admin_comments_on_namespace ON public.active_admin_comments USING btree (namespace);


--
-- Name: index_active_admin_comments_on_resource; Type: INDEX; Schema: public; Owner: db_user
--

CREATE INDEX index_active_admin_comments_on_resource ON public.active_admin_comments USING btree (resource_type, resource_id);


--
-- Name: index_admin_users_on_email; Type: INDEX; Schema: public; Owner: db_user
--

CREATE UNIQUE INDEX index_admin_users_on_email ON public.admin_users USING btree (email);


--
-- Name: index_admin_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: db_user
--

CREATE UNIQUE INDEX index_admin_users_on_reset_password_token ON public.admin_users USING btree (reset_password_token);


--
-- Name: index_count_down_game_scores_on_initials; Type: INDEX; Schema: public; Owner: db_user
--

CREATE UNIQUE INDEX index_count_down_game_scores_on_initials ON public.count_down_game_scores USING btree (initials);


--
-- Name: index_users_on_email; Type: INDEX; Schema: public; Owner: db_user
--

CREATE UNIQUE INDEX index_users_on_email ON public.users USING btree (email);


--
-- Name: index_users_on_reset_password_token; Type: INDEX; Schema: public; Owner: db_user
--

CREATE UNIQUE INDEX index_users_on_reset_password_token ON public.users USING btree (reset_password_token);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: pg_database_owner
--

GRANT ALL ON SCHEMA public TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_advance(text, pg_lsn); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_advance(text, pg_lsn) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_create(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_create(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_drop(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_drop(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_oid(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_oid(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_progress(text, boolean); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_progress(text, boolean) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_is_setup(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_is_setup() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_progress(boolean); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_progress(boolean) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_reset(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_reset() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_session_setup(text); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_session_setup(text) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_xact_reset(); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_reset() TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_replication_origin_xact_setup(pg_lsn, timestamp with time zone) TO cloudsqlsuperuser;


--
-- Name: FUNCTION pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn); Type: ACL; Schema: pg_catalog; Owner: cloudsqladmin
--

GRANT ALL ON FUNCTION pg_catalog.pg_show_replication_origin_status(OUT local_id oid, OUT external_id text, OUT remote_lsn pg_lsn, OUT local_lsn pg_lsn) TO cloudsqlsuperuser;


--
-- PostgreSQL database dump complete
--

