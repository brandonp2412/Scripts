"""Text to Discord Emojis

Description:
    This module serves the sole purpose of turning normal text into
    a set of the regional indicator discord emojis.

Author: Brandon Presley
GitHub: https://github.com/brandonp2412
Date: 5/9/2017
"""

import string
import pyperclip


def regional(text=pyperclip.paste()):
    meme_text = []
    for c in text.lower():
        if c == " ":
            meme_text.append(" ")
        elif c in string.punctuation:
            meme_text.append(c)
        else:
            meme_text.append(" :regional_indicator_" + c + ": ")
    pyperclip.copy("".join(meme_text))


def main():
    if __name__ == '__main__':
        regional()
