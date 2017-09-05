import os
import sys


def main(argv):
    files = os.listdir(os.getcwd())
    targets = []
    for f in files:
        if argv[0] in f:
            targets.append(f)
    print(targets)
    for t in targets:
        extension = t.find('.')
        os.rename(t, t[:extension] + argv[1])


if __name__ == "__main__":
    main(sys.argv[1:])
