; Description: On holding e, multiplies the amount of e keypresses sent to the current program.
;
; Author: Brandon Presley
; GitHub: https://github.com/brandonp2412
; Date: The/Date

#MaxHotkeysPerInterval 999999999999999999
#Escape::Suspend

$e::
  While GetKeyState("e","P")
    Send, {e}
Return