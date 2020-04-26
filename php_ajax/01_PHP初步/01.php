<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>好高兴啊，我买了一个华为P<?php echo 39 + 1; ?></h1>
    <h1>好高兴啊，我买了一个华为P<span id="myspan"></span></h1>
    <script>
        var myspan = document.getElementById('myspan');
        myspan.innerHTML = 39 + 1;
    </script>
</body>
</html>