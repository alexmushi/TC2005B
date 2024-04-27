/* Stored procedure pago Colegiatura */
CREATE PROCEDURE `insertar_Pago`(IN pIDDeuda INT, IN pmotivo VARCHAR(50), IN pmontoPagado FLOAT, IN pNota VARCHAR(200), In ptipoPago VARCHAR(30),
IN pfechaPago TIMESTAMP)
BEGIN
INSERT INTO Pago (IDDeuda, Motivo, montoPagado, Nota, tipoPago, fechaPago)
VALUES(pIDDeuda, pmotivo, pmontoPagado, pNota, ptipoPago, pfechaPago);
END

/* Llamar el stored procedure */
CALL `insertar_Pago`('31', 'Pago Abril', '100', 'Perdon por pagar tarde', 'Tarjeta', '2024-04-02');

/* Stored procedure de pago diplomado */
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertarPagoDiplomado`(IN pmatricula VARCHAR(20), IN pIDDiplomado VARCHAR(20), IN pfechaPago TIMESTAMP, 
IN pmontoPagado FLOAT, IN pMotivo VARCHAR(40), IN pNota VARCHAR(60), IN ptipoPago VARCHAR(30))
BEGIN
INSERT INTO pagaDiplomado VALUES (pmatricula, pIDDiplomado, pfechaPago, pmontoPagado, pmotivo, pNota, ptipoPago);
END

/* Llamar el stored procedure */
CALL `insertarPagoDiplomado` ('8001', 'DIPL0002', '2024-04-02', '690', 'Pago AI Moda', 'Perdon por pagar tarde', 'Transferencia');

/* Stored procedure pago Extra */
CREATE PROCEDURE `insertarPagoExtra` (IN pIDPagosExtra VARCHAR(10), IN pmotivoPago VARCHAR(40), IN pmontoPagar FLOAT)
BEGIN
INSERT INTO pagosExtras VALUES(pIDPagosExtra, pmotivoPago, pmontoPagar);
END

/* Llamar el stored procedure */
CALL `insertarPagoExtra` ('PAGEX021', 'Robot', 650);
