<?php
  header('Content-Type: application/json');
  include "albums.php";
  echo json_encode($albums);