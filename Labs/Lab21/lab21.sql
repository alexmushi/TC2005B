SELECT SUM(E.cantidad) AS 'Cantidad Total', 
SUM(Cantidad * (M.precio + M.impuesto)) AS 'Importe Total'
FROM Entregan AS E, Materiales AS M
WHERE E.clave = M.clave AND YEAR(E.fecha) = '1997';

SELECT P.razonsocial 'Razon Social', COUNT(E.RFC) AS 'Número de entregas', 
SUM(Cantidad * (M.precio + M.impuesto)) AS 'Importe Total'
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND M.clave = E.clave
GROUP BY P.RFC;

SELECT M.clave, M.descripción, SUM(E.Cantidad) AS 'Cantidad entregada',
SUM(E.Cantidad * (M.precio + M.impuesto)) AS 'Importe Total', 
MIN(E.Cantidad) AS 'Cantidad minima',
MAX(E.cantidad) AS 'Cantidad Maxima'
FROM Materiales AS M, Entregan AS E 
WHERE M.clave = E.clave
GROUP BY M.clave
HAVING AVG(E.Cantidad) > '400';

SELECT P.razonsocial, AVG(E.Cantidad) AS 'Promedio de Entregas', M.clave, M.descripcion
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND E.clave = M.clave
GROUP BY P.razonsocial, M.Clave
HAVING AVG(E.Cantidad) > 500;

SELECT P.razonsocial, AVG(E.Cantidad) AS 'Promedio de Entregas', M.clave, M.descripcion
FROM Proveedores AS P, Entregan AS E, Materiales AS M
WHERE P.RFC = E.RFC AND E.clave = M.clave
GROUP BY P.razonsocial, M.clave
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450;

INSERT INTO Materiales VALUES ('5000', 'MacBook Pro 2021', '600', '60', '2.34');
INSERT INTO Materiales VALUES ('5001', 'Windows Chafa', '240', '24', '2.64');
INSERT INTO Materiales VALUES ('5002', 'Alex', '1000', '100', '2.43');
INSERT INTO Materiales VALUES ('5003', 'iPhone', '2000', '200', '2.29');
INSERT INTO Materiales VALUES ('5004', 'Samsung', '345', '34.5', '2.57');

SELECT M.Clave, M.Descripcion 
FROM Materiales AS M
WHERE M.Clave NOT IN (SELECT Clave FROM Entregan);

SELECT razonsocial
FROM Proveedores
WHERE RFC IN (SELECT E.RFC FROM Entregan AS E, Proyectos AS P
WHERE E.numero = P.numero AND P.Denominacion = 'Vamos México') 
AND RFC IN (SELECT E.RFC FROM Entregan AS E, Proyectos AS P
WHERE E.numero = P.numero AND P.Denominacion = 'Querétaro Limpio');

SELECT Descripcion
FROM Materiales 
WHERE Clave NOT IN 
(SELECT E.clave FROM Entregan AS E, Proyectos AS P 
WHERE E.numero = P.numero AND P.Denominacion = 'CIT Yucatán');

INSERT INTO Proveedores VALUES ('VAGO780901', 'Vago Inc.');
INSERT INTO Entregan VALUES ('5000', 'VAGO780901', '5000', '2020-02-01', '350');

SELECT P.razonsocial, AVG(E.cantidad) AS 'Promedio cantidad Entregada'
FROM Proveedores AS P, Entregan AS E
WHERE P.RFC = E.RFC
GROUP BY P.RFC
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad) FROM Entregan WHERE RFC = 'VAGO780901');

SELECT P.RFC, P.razonsocial 
FROM Proveedores AS P, Entregan AS E
WHERE P.RFC = E.RFC AND 
P.RFC IN (SELECT E.RFC FROM Entregan AS E, Proyectos AS P 
WHERE E.numero = P.numero AND P.Denominacion = 'Infonavit Durango') 
GROUP BY P.RFC
HAVING (SELECT SUM(Cantidad) FROM entregan WHERE YEAR(fecha) = '2000') > 
(SELECT SUM(Cantidad) FROM Entregan WHERE YEAR(fecha) = '2001');