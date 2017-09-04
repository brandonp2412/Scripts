; Author: Brandon Presley
; GitHub: https://github.com/brandonp2412
; Date: 5/9/2017
;
; Description: Forces the active window to close when pressing Alt+1.

!1::
WinGet, active_id, PID, A
run, taskkill /PID %active_id% /F,,Hide
return