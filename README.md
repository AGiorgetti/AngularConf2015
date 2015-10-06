# AngularConf2015

-----------------------
Setup:

Install node: http://www.nodejs.org

Install gulp: npm install gulp -g

Install tsd: npm install tsd -g

from a console prompt:

npm install

tsd install

-----------------------
Visual Studio Code

if you want to use a local copy of the typescript compiler
edit the file settings.json and specify the correct absolute path for "typescript.tsdk" 

-----------------------
Update definitions:

tsd update -s -o
tsd rebundle

ncu --upgradeAll
npm install

-----------------------
Purge global caches:

tsd purge


Notes:
- VSCode trick: if you place a tsconfig.json file on the root VSCode will internally pick that and use it. This way any .ts and .d.ts will be read and compiled and there will be no need to add /// <reference path="tsd.d.ts" /> all around
				
