	-- Crear la base de datos
	CREATE DATABASE salon_eventos;
	USE salon_eventos;

	-- Tabla de usuarios
	CREATE TABLE usuarios (
		id_usuario INT AUTO_INCREMENT PRIMARY KEY,
		nombre VARCHAR(100) NOT NULL,
		correo VARCHAR(100) UNIQUE NOT NULL,
		contrasena VARCHAR(255) NOT NULL,
		telefono VARCHAR(20),
		rol ENUM('admin','usuario') DEFAULT 'usuario',
		fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
	);

	-- Tabla de paquetes del salón
	CREATE TABLE paquetes (
		id_paquete INT AUTO_INCREMENT PRIMARY KEY,
		nombre VARCHAR(100) NOT NULL,
		descripcion TEXT,
		precio DECIMAL(10,2) NOT NULL,
		duracion_horas INT DEFAULT 4
	);

	-- Tabla de reservas
	CREATE TABLE reservas (
		id_reserva INT AUTO_INCREMENT PRIMARY KEY,
		id_usuario INT NOT NULL,
		id_paquete INT NOT NULL,
		fecha_evento DATE NOT NULL,
		hora_inicio TIME NOT NULL,
		estado ENUM('pendiente','confirmada','cancelada') DEFAULT 'pendiente',
		fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
		FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
		FOREIGN KEY (id_paquete) REFERENCES paquetes(id_paquete)
	);

	-- Tabla de pagos de reservas
	CREATE TABLE pagos (
		id_pago INT AUTO_INCREMENT PRIMARY KEY,
		id_reserva INT NOT NULL,
		fecha_pago DATE NOT NULL,
		monto DECIMAL(10,2) NOT NULL,
		metodo_pago ENUM('efectivo','tarjeta','transferencia') NOT NULL,
		estado_pago ENUM('pendiente','pagado','rechazado') DEFAULT 'pendiente',
		FOREIGN KEY (id_reserva) REFERENCES reservas(id_reserva)
	);

