<?php 
    $f=fopen("./text.txt","a");
    $t=date("Y-m-d");
    fputs($f,$t)
  