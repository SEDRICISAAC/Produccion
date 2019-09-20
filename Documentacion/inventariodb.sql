-- Database generated with pgModeler (PostgreSQL Database Modeler).
-- pgModeler  version: 0.7.2
-- PostgreSQL version: 9.4
-- Project Site: pgmodeler.com.br
-- Model Author: ---

SET check_function_bodies = false;
-- ddl-end --


-- Database creation must be done outside an multicommand file.
-- These commands were put in this file only for convenience.
-- -- object: new_database | type: DATABASE --
-- -- DROP DATABASE new_database;
-- CREATE DATABASE new_database
-- ;
-- -- ddl-end --
-- 

-- object: public."InventarioGeneral" | type: TABLE --
-- DROP TABLE public."InventarioGeneral";
CREATE TABLE public."InventarioGeneral"(
	"id_InventarioGeneral" integer,
	"id_InventarioTelas" integer,
	"id_InventarioHilos" integer,
	"id_InventarioReatas" integer,
	"id_InventarioBotones" integer,
	"id_InventarioEtiquetas" integer,
	CONSTRAINT "id_InventarioGeneral" PRIMARY KEY ("id_InventarioGeneral")

);
-- ddl-end --
-- object: public."InventarioTelas" | type: TABLE --
-- DROP TABLE public."InventarioTelas";
CREATE TABLE public."InventarioTelas"(
	"id_InventarioTelas" integer,
	"id_Tela" numeric(8),
	cantidad numeric(8),
	CONSTRAINT "id_InventarioTelas" PRIMARY KEY ("id_InventarioTelas")

);
-- ddl-end --
-- object: public."InventarioBotones" | type: TABLE --
-- DROP TABLE public."InventarioBotones";
CREATE TABLE public."InventarioBotones"(
	"id_InventarioBotones" integer,
	"id_Boton" numeric(8),
	cantidad numeric(8),
	CONSTRAINT "id_InventarioBotones" PRIMARY KEY ("id_InventarioBotones")

);
-- ddl-end --
-- object: public."InventarioHilos" | type: TABLE --
-- DROP TABLE public."InventarioHilos";
CREATE TABLE public."InventarioHilos"(
	"id_InventarioHilos" integer,
	"id_Hilo" numeric(8),
	cantidad numeric(8),
	CONSTRAINT "id_InventarioHilos" PRIMARY KEY ("id_InventarioHilos")

);
-- ddl-end --
-- object: public."InventarioReatas" | type: TABLE --
-- DROP TABLE public."InventarioReatas";
CREATE TABLE public."InventarioReatas"(
	"id_InventarioReatas" integer,
	"id_Reata" numeric(8),
	cantidad numeric(8),
	CONSTRAINT "id_InventarioReatas" PRIMARY KEY ("id_InventarioReatas")

);
-- ddl-end --
-- object: public."InventarioEtiquetas" | type: TABLE --
-- DROP TABLE public."InventarioEtiquetas";
CREATE TABLE public."InventarioEtiquetas"(
	"id_InventarioEtiquetas" integer,
	"id_Etiqueta" numeric(8),
	cantidad numeric(8),
	CONSTRAINT "id_InventarioEtiquetas" PRIMARY KEY ("id_InventarioEtiquetas")

);
-- ddl-end --
-- object: public."Telas" | type: TABLE --
-- DROP TABLE public."Telas";
CREATE TABLE public."Telas"(
	"id_Tela" numeric(8),
	nombre varchar(25),
	CONSTRAINT "id_Tela" PRIMARY KEY ("id_Tela")

);
-- ddl-end --
-- object: public."Botones" | type: TABLE --
-- DROP TABLE public."Botones";
CREATE TABLE public."Botones"(
	"id_Boton" numeric(8),
	nombre varchar(25),
	CONSTRAINT "id_Boton" PRIMARY KEY ("id_Boton")

);
-- ddl-end --
-- object: public."Hilos" | type: TABLE --
-- DROP TABLE public."Hilos";
CREATE TABLE public."Hilos"(
	"id_Hilo" numeric(8),
	nombre varchar(25),
	CONSTRAINT "id_Hilo" PRIMARY KEY ("id_Hilo")

);
-- ddl-end --
-- object: public."Reatas" | type: TABLE --
-- DROP TABLE public."Reatas";
CREATE TABLE public."Reatas"(
	"id_Reata" numeric(8),
	nombre varchar(25),
	CONSTRAINT "id_Reata" PRIMARY KEY ("id_Reata")

);
-- ddl-end --
-- object: public."Etiquetas" | type: TABLE --
-- DROP TABLE public."Etiquetas";
CREATE TABLE public."Etiquetas"(
	"id_Etiqueta" numeric(8),
	nombre varchar(25),
	CONSTRAINT "id_Etiqueta" PRIMARY KEY ("id_Etiqueta")

);
-- ddl-end --
-- object: "fk_InventarioTelas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioGeneral" DROP CONSTRAINT "fk_InventarioTelas";
ALTER TABLE public."InventarioGeneral" ADD CONSTRAINT "fk_InventarioTelas" FOREIGN KEY ("id_InventarioTelas")
REFERENCES public."InventarioTelas" ("id_InventarioTelas") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_InventarioHilos" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioGeneral" DROP CONSTRAINT "fk_InventarioHilos";
ALTER TABLE public."InventarioGeneral" ADD CONSTRAINT "fk_InventarioHilos" FOREIGN KEY ("id_InventarioHilos")
REFERENCES public."InventarioHilos" ("id_InventarioHilos") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_InventarioReatas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioGeneral" DROP CONSTRAINT "fk_InventarioReatas";
ALTER TABLE public."InventarioGeneral" ADD CONSTRAINT "fk_InventarioReatas" FOREIGN KEY ("id_InventarioReatas")
REFERENCES public."InventarioReatas" ("id_InventarioReatas") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_InventarioBotones" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioGeneral" DROP CONSTRAINT "fk_InventarioBotones";
ALTER TABLE public."InventarioGeneral" ADD CONSTRAINT "fk_InventarioBotones" FOREIGN KEY ("id_InventarioBotones")
REFERENCES public."InventarioBotones" ("id_InventarioBotones") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_InventarioEtiquetas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioGeneral" DROP CONSTRAINT "fk_InventarioEtiquetas";
ALTER TABLE public."InventarioGeneral" ADD CONSTRAINT "fk_InventarioEtiquetas" FOREIGN KEY ("id_InventarioEtiquetas")
REFERENCES public."InventarioEtiquetas" ("id_InventarioEtiquetas") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_Telas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioTelas" DROP CONSTRAINT "fk_Telas";
ALTER TABLE public."InventarioTelas" ADD CONSTRAINT "fk_Telas" FOREIGN KEY ("id_Tela")
REFERENCES public."Telas" ("id_Tela") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_Botones" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioBotones" DROP CONSTRAINT "fk_Botones";
ALTER TABLE public."InventarioBotones" ADD CONSTRAINT "fk_Botones" FOREIGN KEY ("id_Boton")
REFERENCES public."Botones" ("id_Boton") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_Hilos" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioHilos" DROP CONSTRAINT "fk_Hilos";
ALTER TABLE public."InventarioHilos" ADD CONSTRAINT "fk_Hilos" FOREIGN KEY ("id_Hilo")
REFERENCES public."Hilos" ("id_Hilo") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_Reatas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioReatas" DROP CONSTRAINT "fk_Reatas";
ALTER TABLE public."InventarioReatas" ADD CONSTRAINT "fk_Reatas" FOREIGN KEY ("id_Reata")
REFERENCES public."Reatas" ("id_Reata") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --


-- object: "fk_Etiquetas" | type: CONSTRAINT --
-- ALTER TABLE public."InventarioEtiquetas" DROP CONSTRAINT "fk_Etiquetas";
ALTER TABLE public."InventarioEtiquetas" ADD CONSTRAINT "fk_Etiquetas" FOREIGN KEY ("id_Etiqueta")
REFERENCES public."Etiquetas" ("id_Etiqueta") MATCH FULL
ON DELETE NO ACTION ON UPDATE CASCADE;
-- ddl-end --



