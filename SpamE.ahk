; Description: On holding e, multiplies the amount of e keypresses sent to the current program.

#MaxHotkeysPerInterval 999999999999999999
#Escape::Suspend

$e::
  While GetKeyState("e","P")
    Send, {e}
Return
