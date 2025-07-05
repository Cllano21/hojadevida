$serverName = "LAPTOP-8FGD0OMN\SQLEXPRESS";
$username = "sa";
$password = "1987";
$database = "tienda";

// Crear la conexión
$conn = new mysqli($serverName, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "¡Conexión exitosa!";

// Cerrar la conexión
$conn->close();