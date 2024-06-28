<?php
    require("directories.php");
?>

<div id='main'>
    <form class='artcreb'>
        <div class='scrtx'><textarea name='articulo' id='article'></textarea></div>
        <div>Título noticia</div>
        <input type='text' name='titulo' placeholder='Titulo'>

        <div>Texto Corto</div>
        <input type='text' name='textoc' placeholder='Subtitulo'>

        <div>Imagen</div>
        <select name='imagen'>
            <?php while (($archivo = current($archivos_select)) !== false): ?>
                <?php next($archivos_select); ?>
                <option value='<?php echo $archivo['carpeta'] . '/' . $archivo['archivo']; ?>'>
                    <?php echo $archivo['archivo']; ?>
                </option>
            <?php endwhile; ?>
        </select>
        
        <div><input type='submit' name='public' value='Publicar'></div>
    </form>
    <div class='ImgV'>
        <table>
            <?php while (($archivo = current($archivos_table)) !== false): ?>
                <?php next($archivos_table); ?>
                <tr>
                    <td><?php echo $archivo['archivo']; ?></td>
                    <?php
                        $imagePath = $CC['ClientUrl'] . $CC['CBase'] . $CC['Images'] . $archivo['carpeta'] . '/' . $archivo['archivo'];
                    ?>
                    <td><img src='<?php echo $imagePath; ?>' alt='<?php echo $archivo['archivo']; ?>'></td>
                </tr>
            <?php endwhile; ?>
        </table>
    </div>
</div>
