<?php
/**
 * @file
 * Implementation to user short info
 * 
 * This template is used when viewing a user information by hovered "@username" in content
 * Available variables:
 *   - $user: Default User Object
 *   - $cu: Current User Object
 * 
 * @ingroup themeable
 */
?>
<div class="user_short_info">
  <?php print theme('user_picture', array('account' => $user)); ?>
  <?php if(user_access('access user profiles', $cu)): ?>
    <h1 class="name"><?php
      if(isset($realname)){
        print $realname;
        print "(" . $user->name . ")";
      }
      else{
        print $user->name;
      }?></h1>
    <div class="pm">
      <?php print l('Отправить сообщение '.$user->name, 'messages/new/'. $user->uid); ?>
    </div>
  <?php else: ?>
    <h2 class="name">Просмотр только для авторизировавшихся!</h2>
  <?php endif; ?>
</div>