#MaxHotkeysPerInterval 999999999999999999
#Escape::Suspend

$e::
  While GetKeyState("e","P")
    Send, {e}
Return