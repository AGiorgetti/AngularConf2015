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
