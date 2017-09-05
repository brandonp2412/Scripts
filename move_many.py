"""Renaming Multiple File Extensions

Description: Finds files with names containing argv[1] and replaces their
file extension with argv[2]

Author: Brandon Presley
GitHub: https://github.com/brandonp2412
Date: 6/9/2017
"""

import os
import sys


def main(argv):
    files = os.listdir(os.getcwd())
    targets = []
    for f in files:
        if argv[0] in f:
            targets.append(f)
    for t in targets:
        extension = t.find('.')
        os.rename(t, t[:extension] + argv[1])
    print('Renamed a total of:', len(targets), 'files')


if __name__ == "__main__":
    main(sys.argv[1:])
