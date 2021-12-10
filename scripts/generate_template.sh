#! /bin/zsh

srcdir=src/$1

# copy the template
cp -r template/ $srcdir
touch $srcdir/test/example-input.txt
touch $srcdir/test/puzzle-input.txt

# find and replace placeholder items
sed -i '.bak' "s/PLACEHOLDER/$1/g" $srcdir/test/index.test.ts
sed -i '.bak' "s/ \/\/ eslint-disable-line//" $srcdir/test/index.test.ts
sed -i '.bak' "s/ \/\/ eslint-disable-line//" $srcdir/index.ts

# clean up backup files created by sed
rm $srcdir/test/index.test.ts.bak
rm $srcdir/index.ts.bak
