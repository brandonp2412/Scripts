"""Internet

Description:
    This module is the hub of all my connectivity related methods.

Author:
    Brandon Presley
GitHub:
    https://github.com/brandonp2412
Date:
    3/9/2017
"""


import os
from datetime import datetime
import winsound
import time


def test_connection(server):
    """Tests the connectivity of the user to server. Once a response is
        received, a sound is played until the program is killed."""
    ping = f'ping -n 1 {server}'
    print("{:-^80}".format("CURRENT TIME IS " + str(datetime.time(
        datetime.now()).strftime("%I:%M %p"))))
    response = os.system(ping)
    while response == 1:
        time.sleep(1)
        response = os.system(ping)
        print("{:-^80}".format("CURRENT TIME IS " + 
            str(datetime.time(datetime.now()).strftime("%I:%M %p"))))

    while True:
        winsound.PlaySound('sound.wav', winsound.SND_FILENAME)
