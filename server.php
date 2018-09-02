<?php
class FunctionController {
  public function action_func1() {
    echo func1();
  }

  public function action_func2() {
    echo func2();
  }

  # ...
}

$controller = new FunctionController();

if ( isset( $_POST[ 'action' ] ) && method_exists( $controller, 'action_' . $_POST[ 'action' ] ) ) {
  $action = 'action_' . $_POST[ 'action' ];
  $controller->$action();
} else {
  header( 'HTTP/1.1 404 Not Found' );
}
>
