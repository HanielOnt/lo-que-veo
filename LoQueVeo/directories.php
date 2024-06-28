<?php 

$CC = [
    'ClientUrl' => './',
    'CBase' => '',
    'Images' => ''
];

$carpetas = ['columna-1', 'columna-2', 'columna-3'];
$archivos = [];

foreach ($carpetas as $carpeta) {
    $directory = __DIR__ . '/' . $carpeta . '/';
    $dirint = dir($directory);
    while (($archivo = $dirint->read()) !== false) {
        if ($archivo !== '.' && $archivo !== '..') {
            $archivos[] = [
                'carpeta' => $carpeta,
                'archivo' => $archivo
            ];
        }
    }
    $dirint->close();
}

$archivos_select = $archivos;
$archivos_table = $archivos;

?>