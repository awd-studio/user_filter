<?php 

/**
 * User info page
 */
function user_filter_info($name){
  $user = user_load_by_name($name);
  return $user;
}