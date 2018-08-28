<?php
  function TearsForFears() {
    echo 'Shout, shout, let it all out';
  }

  if ( isset($_GET['fn']) ) {
    $_GET['fn']();
  }
>
