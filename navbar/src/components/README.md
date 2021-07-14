tes
➜  ~ brew tap mongodb/brew
Updating Homebrew...
==> Homebrew is run entirely by unpaid volunteers. Please consider donating:
  https://github.com/Homebrew/brew#donations
==> Auto-updated Homebrew!
Updated 1 tap (homebrew/core).
==> New Formulae
amfora                     graphqurl                  ronn
argocd-vault-plugin        jello                      rpg-cli
baidupcs-go                jrsonnet                   s4cmd
bgpq4                      kalker                     scorecard
bosh-cli                   kubeconform                slides
buildpulse-test-reporter   lexbor                     soapyrtlsdr
ciphey                     lima                       soapysdr
clarinet                   mariadb@10.5               spectra
demumble                   multi-git-status           sqsmover
detect-secrets             ncc                        svgbob
envoy@1.17                 pillow                     terminator
fcp                        plow                       wasmtime
frum                       px                         waypoint
func-e                     pyflow                     wxmac@3.0
git-xargs                  pythran
==> Updated Formulae
Updated 2805 formulae.
==> Renamed Formulae
weboob -> woob
==> Deleted Formulae
libinfinity

==> Tapping mongodb/brew
Cloning into '/opt/homebrew/Library/Taps/mongodb/homebrew-brew'...
remote: Enumerating objects: 696, done.
remote: Counting objects: 100% (193/193), done.
remote: Compressing objects: 100% (173/173), done.
remote: Total 696 (delta 77), reused 43 (delta 17), pack-reused 503
Receiving objects: 100% (696/696), 153.34 KiB | 1.60 MiB/s, done.
Resolving deltas: 100% (315/315), done.
Tapped 12 formulae (28 files, 212KB).
➜  ~ brew install mongodb-community
==> Installing mongodb-community from mongodb/brew
==> Downloading https://fastdl.mongodb.org/tools/db/mongodb-database-tools-macos
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/manifests/69.1
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/icu4c/blobs/sha256:25a1ec460d42
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/14/manifests/14.17.3
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/node/14/blobs/sha256:93f9271fff
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/mongosh/manifests/1.0.0
######################################################################## 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/mongosh/blobs/sha256:d1a73f121e
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sh
######################################################################## 100.0%
==> Downloading https://fastdl.mongodb.org/osx/mongodb-macos-x86_64-4.4.5.tgz
######################################################################## 100.0%
==> Installing dependencies for mongodb/brew/mongodb-community: mongodb-database-tools, icu4c, node@14 and mongosh
==> Installing mongodb/brew/mongodb-community dependency: mongodb-database-
🍺  /opt/homebrew/Cellar/mongodb-database-tools/100.3.1: 13 files, 150.9MB, built in 3 seconds
==> Installing mongodb/brew/mongodb-community dependency: icu4c
==> Pouring icu4c--69.1.arm64_big_sur.bottle.tar.gz
🍺  /opt/homebrew/Cellar/icu4c/69.1: 259 files, 73.3MB
==> Installing mongodb/brew/mongodb-community dependency: node@14
==> Pouring node@14--14.17.3.arm64_big_sur.bottle.tar.gz
🍺  /opt/homebrew/Cellar/node@14/14.17.3: 4,377 files, 59.9MB
==> Installing mongodb/brew/mongodb-community dependency: mongosh
==> Pouring mongosh--1.0.0.arm64_big_sur.bottle.tar.gz
🍺  /opt/homebrew/Cellar/mongosh/1.0.0: 5,249 files, 28.8MB
==> Installing mongodb/brew/mongodb-community
==> Caveats
To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /opt/homebrew/etc/mongod.conf
==> Summary
🍺  /opt/homebrew/Cellar/mongodb-community/4.4.5: 11 files, 157.3MB, built in 2 seconds
==> `brew cleanup` has not been run in 30 days, running now...
Removing: /Users/katerynashydlovska/Library/Caches/Homebrew/git--2.31.1... (14.9MB)
Removing: /Users/katerynashydlovska/Library/Caches/Homebrew/pcre2--10.36... (1.5MB)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/tree... (64B)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/maven... (101B)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/openjdk... (64B)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/gettext... (64B)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/pcre2... (64B)
Removing: /Users/katerynashydlovska/Library/Logs/Homebrew/git... (64B)
==> Caveats
==> mongodb-community
To have launchd start mongodb/brew/mongodb-community now and restart at login:
  brew services start mongodb/brew/mongodb-community
Or, if you don't want/need a background service you can just run:
  mongod --config /opt/homebrew/etc/mongod.conf
➜  ~ brew services start mongodb-community
==> Tapping homebrew/services
Cloning into '/opt/homebrew/Library/Taps/homebrew/homebrew-services'...
remote: Enumerating objects: 1321, done.
remote: Counting objects: 100% (200/200), done.
remote: Compressing objects: 100% (141/141), done.
remote: Total 1321 (delta 77), reused 169 (delta 56), pack-reused 1121
Receiving objects: 100% (1321/1321), 389.44 KiB | 1.60 MiB/s, done.
Resolving deltas: 100% (554/554), done.
Tapped 1 command (28 files, 471.5KB).
==> Successfully started `mongodb-community` (label: homebrew.mxcl.mongodb-commu
➜  ~ mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("7f62f9a2-11f0-4a47-82d1-8f4053f1231f") }
MongoDB server version: 4.4.5
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
	https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
	https://community.mongodb.com
---
The server generated these startup warnings when booting:
        2021-07-12T16:28:26.748-04:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> ps -ax | grep mongo
uncaught exception: SyntaxError: unexpected token: identifier :
@(shell):1:14
> ^C
bye
➜  ~ mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("1e038642-6b58-42f5-959c-f69ce4e61cc1") }
MongoDB server version: 4.4.5
---
The server generated these startup warnings when booting:
        2021-07-12T16:28:26.748-04:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> ^C
bye
➜  ~ mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("cdff5533-11bc-43fe-8e62-c501f107006f") }
MongoDB server version: 4.4.5
---
The server generated these startup warnings when booting:
        2021-07-12T16:28:26.748-04:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

  db.STUDENT.insert({name: STRING, hom^Cstate: STRING, lucky_number: NUMBER, birthday: {month: 0 day: 22, year: 1994})
bye
➜  ~ mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("2e1da44f-ced7-4ec1-8522-374a5878ef33") }
MongoDB server version: 4.4.5
---
The server generated these startup warnings when booting:
        2021-07-12T16:28:26.748-04:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> use myfirstdb
switched to db myfirstdb
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
> show collections
> db.createCollection("Student");
{ "ok" : 1 }
> db.Student.insert({name: Kateryna, home_state: Texas, luchy_n) db.Student.insert({name: Kateryna, home_state: Texas, luchy_nu)db.Student.insert({name: Kateryna, home_state: Texas, luchy_numdb.Student.insert({name: Kateryna, home_state: Texas, luchy_numdb.Student.insert({name: Kateryna, home_state: Texas, luchy_numdb.Student.insert({name: Kateryna, home_state: Texas, luchy_numdb.Student.insert({name: Kateryna, home_state: Texas, luchy_numdb.Student.insert({name: Kateryna, home_state: Texas, luchy_nu)db.Student.insert({name: Kateryna, home_state: Texas, luchy_nu)                                                             ^C
bye
➜  ~ mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("96e9c15f-2d29-4330-bd03-516c0653e12f") }
MongoDB server version: 4.4.5
---
The server generated these startup warnings when booting:
        2021-07-12T16:28:26.748-04:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
---
---
        Enable MongoDB's free cloud-based monitoring service, which will then receive and display
        metrics about your deployment (disk utilization, CPU, operation statistics, etc).

        The monitoring data will be available on a MongoDB website with a unique URL accessible to you
        and anyone you share the URL with. MongoDB may use this information to make product
        improvements and to suggest MongoDB products and deployment options to you.

        To enable free monitoring, run the following command: db.enableFreeMonitoring()
        To permanently disable this reminder, run the following command: db.disableFreeMonitoring()
---
> show dbs
admin      0.000GB
config     0.000GB
local      0.000GB
myfirstdb  0.000GB
> use myfirstdb
switched to db myfirstdb
> show collections
Student
> db.Student.insert({name: Kateryna, home_state: Texas, lucky_number: 22, birthday:{month:05, day:22, year:1994}});
uncaught exception: ReferenceError: Kateryna is not defined :
@(shell):1:20
> db.Student.insert({User_doc})
uncaught exception: ReferenceError: User_doc is not defined :
@(shell):1:20
> show.collection
uncaught exception: ReferenceError: show is not defined :
@(shell):1:1
> show collection
uncaught exception: Error: don't know how to show [collection] :
shellHelper.show@src/mongo/shell/utils.js:1191:11
shellHelper@src/mongo/shell/utils.js:819:15
@(shellhelp2):1:1
> show collections
Student
> db.Student.find()
> db.Student.insert({name: "Kateryna", home_state: "Texas", lucky_number: 22, birthday:{month:05, day:22, year:1994}});
WriteResult({ "nInserted" : 1 })
> db.Student.find()
{ "_id" : ObjectId("60ef05475900cf32424a5a0e"), "name" : "Kateryna", "home_state" : "Texas", "lucky_number" : 22, "birthday" : { "month" : 5, "day" : 22, "year" : 1994 } }
> db.Student.insert({name: "Andrii", home_state: "Washington", lucky_number: 3, birthday:{month:03, day:03, year:1991}});
WriteResult({ "nInserted" : 1 })
> db.Student.insert({name: "mrHulk", home_state: "Texas", lucky_number: 16, birthday:{month:09, day:16, year:2019}});
WriteResult({ "nInserted" : 1 })
> db.Student.insert({name: "BigMac", home_state: "Texas", lucky_number: 9, birthday:{month:05, day:08, year:2020}});
WriteResult({ "nInserted" : 1 })
> db.Student.insert({name: "Roman", home_state: "Luhansk", lucky_number: 22, birthday:{month:06, day:11, year:1968}});
WriteResult({ "nInserted" : 1 })
> db.Student.find()
{ "_id" : ObjectId("60ef05475900cf32424a5a0e"), "name" : "Kateryna", "home_state" : "Texas", "lucky_number" : 22, "birthday" : { "month" : 5, "day" : 22, "year" : 1994 } }
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 } }
{ "_id" : ObjectId("60ef05c25900cf32424a5a10"), "name" : "mrHulk", "home_state" : "Texas", "lucky_number" : 16, "birthday" : { "month" : 9, "day" : 16, "year" : 2019 } }
{ "_id" : ObjectId("60ef05ef5900cf32424a5a11"), "name" : "BigMac", "home_state" : "Texas", "lucky_number" : 9, "birthday" : { "month" : 5, "day" : 8, "year" : 2020 } }
{ "_id" : ObjectId("60ef06dd5900cf32424a5a12"), "name" : "Roman", "home_state" : "Luhansk", "lucky_number" : 22, "birthday" : { "month" : 6, "day" : 11, "year" : 1968 } }
> db.find({home_state: ("California" or "Washington")});
uncaught exception: SyntaxError: missing ) in parenthetical :
@(shell):1:35
> db.find({home_state: "Washington"});
uncaught exception: TypeError: db.find is not a function :
@(shell):1:1
> db.Student.find({home_state: "Washington"});
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 } }
> db.Student.find({home_state: ("Washington" or "California")});
uncaught exception: SyntaxError: missing ) in parenthetical :
@(shell):1:43
> db.Student.find({lucky_number: {$gt: 3}});
{ "_id" : ObjectId("60ef05475900cf32424a5a0e"), "name" : "Kateryna", "home_state" : "Texas", "lucky_number" : 22, "birthday" : { "month" : 5, "day" : 22, "year" : 1994 } }
{ "_id" : ObjectId("60ef05c25900cf32424a5a10"), "name" : "mrHulk", "home_state" : "Texas", "lucky_number" : 16, "birthday" : { "month" : 9, "day" : 16, "year" : 2019 } }
{ "_id" : ObjectId("60ef05ef5900cf32424a5a11"), "name" : "BigMac", "home_state" : "Texas", "lucky_numbdb.find({home_state: ("California" or "Washington")});
uncaught exception: SyntaxError: missing ) in parenthetical :
@(shell):1:35
> cls
> db.Student.insert({interests: []});
WriteResult({ "nInserted" : 1 })
> db.Student.find();
{ "_id" : ObjectId("60ef05475900cf32424a5a0e"), "name" : "Kateryna", "home_state" : "Texas", "lucky_number" : 22, "birthday" : { "month" : 5, "day" : 22, "year" : 1994 } }
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 } }
{ "_id" : ObjectId("60ef05c25900cf32424a5a10"), "name" : "mrHulk", "home_state" : "Texas", "lucky_number" : 16, "birthday" : { "month" : 9, "day" : 16, "year" : 2019 } }
{ "_id" : ObjectId("60ef05ef5900cf32424a5a11"), "name" : "BigMac", "home_state" : "Texas", "lucky_number" : 9, "birthday" : { "month" : 5, "day" : 8, "year" : 2020 } }
{ "_id" : ObjectId("60ef06dd5900cf32424a5a12"), "name" : "Roman", "home_state" : "Luhansk", "lucky_number" : 22, "birthday" : { "month" : 6, "day" : 11, "year" : 1968 } }
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student({$push:{interests: {'coding', 'brunch', 'MongoDB'}}});
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:39
> db.Student({$addToSet:{interests: {'coding', 'brunch', 'MongoDB'}}});
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:43
> db.Student({_id: ObjectId(60ef05475900cf32424a5a0e)}, {$push: {inserts: 'coding', 'brunch',MongoDB'}});
uncaught exception: SyntaxError: missing exponent :
@(shell):1:26
> db.Student.update({_id: ObjectId(60ef05475900cf32424a5a0e)}, {$push: {inserts: 'coding', 'brunch',MongoDB'}});
uncaught exception: SyntaxError: missing exponent :
@(shell):1:33
> db.Student.update({_id: ObjectId(60ef05475900cf32424a5a0e)}, {$push: {inserts: 'coding'}});
uncaught exception: SyntaxError: missing exponent :
@(shell):1:33
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'coding'}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'brunch', 'MongoDB'}});
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:100
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'brunch'}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'MongoDB'}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'coding'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'brunch'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: 'MongoDB'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.find({lucky_number:{$gt: 1, $lt: 9}});
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 } }
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: "taxes}});
uncaught exception: SyntaxError: "" literal not terminated before end of script :
@(shell):1:91
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$push: {inserts: "taxes"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.update({_id: ObjectId("60ef05475900cf32424a5a0e")}, {$pull: {inserts: "taxes"}});
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.find({_id: ObjectId("60ef05475900cf32424a5a0e"});
... cls
... ^C

> db.Student.find();
{ "_id" : ObjectId("60ef05475900cf32424a5a0e"), "name" : "Kateryna", "home_state" : "Texas", "lucky_number" : 22, "birthday" : { "month" : 5, "day" : 22, "year" : 1994 }, "inserts" : [ "coding", "brunch", "MongoDB", "coding", "brunch", "MongoDB" ] }
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 } }
{ "_id" : ObjectId("60ef05c25900cf32424a5a10"), "name" : "mrHulk", "home_state" : "Texas", "lucky_number" : 16, "birthday" : { "month" : 9, "day" : 16, "year" : 2019 } }
{ "_id" : ObjectId("60ef05ef5900cf32424a5a11"), "name" : "BigMac", "home_state" : "Texas", "lucky_number" : 9, "birthday" : { "month" : 5, "day" : 8, "year" : 2020 } }
{ "_id" : ObjectId("60ef06dd5900cf32424a5a12"), "name" : "Roman", "home_state" : "Luhansk", "lucky_number" : 22, "birthday" : { "month" : 6, "day" : 11, "year" : 1968 } }
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05475900cf32424a5a0e"),
	"name" : "Kateryna",
	"home_state" : "Texas",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 5,
		"day" : 22,
		"year" : 1994
	},
	"inserts" : [
		"coding",
		"brunch",
		"MongoDB",
		"coding",
		"brunch",
		"MongoDB"
	]
}
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	}
}
{
	"_id" : ObjectId("60ef05c25900cf32424a5a10"),
	"name" : "mrHulk",
	"home_state" : "Texas",
	"lucky_number" : 16,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 2019
	}
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	}
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	}
}
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student.find({name: "mrHulk"});
{ "_id" : ObjectId("60ef05c25900cf32424a5a10"), "name" : "mrHulk", "home_state" : "Texas", "lucky_number" : 16, "birthday" : { "month" : 9, "day" : 16, "year" : 2019 } }
> db.Student.update({name: "MrHulk"});
uncaught exception: Error: need an update object or pipeline :
DBCollection.prototype._parseUpdate@src/mongo/shell/collection.js:451:15
DBCollection.prototype.update@src/mongo/shell/collection.js:497:18
@(shell):1:1
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05475900cf32424a5a0e"),
	"name" : "Kateryna",
	"home_state" : "Texas",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 5,
		"day" : 22,
		"year" : 1994
	},
	"inserts" : [
		"coding",
		"brunch",
		"MongoDB",
		"coding",
		"brunch",
		"MongoDB"
	]
}
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	}
}
{
	"_id" : ObjectId("60ef05c25900cf32424a5a10"),
	"name" : "mrHulk",
	"home_state" : "Texas",
	"lucky_number" : 16,
	"birthday" : {
		"month" : 9,
		"day" : 16,
		"year" : 2019
	}
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	}
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	}
}
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student.update({name: "mrHulk"});
uncaught exception: Error: need an update object or pipeline :
DBCollection.prototype._parseUpdate@src/mongo/shell/collection.js:451:15
DBCollection.prototype.update@src/mongo/shell/collection.js:497:18
@(shell):1:1
> db.Student.deleteOne({name: 'mrHulk'});
{ "acknowledged" : true, "deletedCount" : 1 }
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05475900cf32424a5a0e"),
	"name" : "Kateryna",
	"home_state" : "Texas",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 5,
		"day" : 22,
		"year" : 1994
	},
	"inserts" : [
		"coding",
		"brunch",
		"MongoDB",
		"coding",
		"brunch",
		"MongoDB"
	]
}
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	}
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	}
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	}
}
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student.deleteOne({lucky_number: {$gt:5}});
{ "acknowledged" : true, "deletedCount" : 1 }
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	}
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	}
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	}
}
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
> db.Student.insert({number_of_belts: 0});
WriteResult({ "nInserted" : 1 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	}
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	}
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	}
}
{ "_id" : ObjectId("60ef47c05900cf32424a5a13"), "interests" : [ ] }
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "number_of_belts" : 0 }
> db.Student.update({}, {$set: {"number_of_belts": 0}}, false, true);
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 4 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"number_of_belts" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "number_of_belts" : 0 }
> db.Student.find({home_state: "Washington"});
{ "_id" : ObjectId("60ef05965900cf32424a5a0f"), "name" : "Andrii", "home_state" : "Washington", "lucky_number" : 3, "birthday" : { "month" : 3, "day" : 3, "year" : 1991 }, "number_of_belts" : 0 }
> db.Student.update({home_state: "Washington"}, {$ser: "number_of_belts" : +1});
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:71
> db.Student.update({{home_state: "Washington"}, {$ser: "number_of_belts" : +1}});
uncaught exception: SyntaxError: expected property name, got '{' :
@(shell):1:19
> db.Student.update({"home_state": "Washington"}, {$set: "number_of_belts" : +1});
uncaught exception: SyntaxError: missing } after property list :
@(shell):1:73
> db.Student.update({"home_state": "Washington"}, {$set: {"number_of_belts": 0}}, false, true);
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"number_of_belts" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "number_of_belts" : 0 }
> db.Student.update({"home_state": "Washington"}, {$set: {"number_of_belts": +1}}, false, true);
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"number_of_belts" : 1
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"number_of_belts" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"number_of_belts" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "number_of_belts" : 0 }
> db.Student.update({}, {$set: {"belts_earned": }}, false, true);
uncaught exception: SyntaxError: expected expression, got '}' :
@(shell):1:46
> db.Student.update({}, {$set: {"belts_earned"}}, false, true);
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:44
> db.Student.update({}, {$rename: {"number_of_belts": "belts_earned"}}, false, true);
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 5 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"lucky_number" : 3,
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"belts_earned" : 1
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"belts_earned" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "belts_earned" : 0 }
> db.Student.deleteOne({lucky_number});
uncaught exception: ReferenceError: lucky_number is not defined :
@(shell):1:23
> db.Student.deleteMany({lucky_number});
uncaught exception: ReferenceError: lucky_number is not defined :
@(shell):1:24
> db.Student.update({},{ $unset: {"lucky_number" } });
uncaught exception: SyntaxError: missing : after property id :
@(shell):1:47
> db.Student.update({},{ $unset: {"lucky_number":"" } });
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"belts_earned" : 1
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"lucky_number" : 9,
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"lucky_number" : 22,
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"belts_earned" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "belts_earned" : 0 }
> db.Student.update({},{ $unset: {"lucky_number":"" },false, true });
uncaught exception: SyntaxError: false is an invalid identifier :
@(shell):1:52
> db.Student.update({},{ $unset: {"lucky_number":"" }}, false, true);
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 2 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"belts_earned" : 1
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"belts_earned" : 0
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"belts_earned" : 0
}
{ "_id" : ObjectId("60ef4f415900cf32424a5a14"), "belts_earned" : 0 }
> db.Student.update({},{ $set: {"updated_on": @currentDate }}, false, true);
uncaught exception: SyntaxError: illegal character :
@(shell):1:44
> db.Student.update({},{ $set: {"updated_on": $currentDate }}, false, true);
uncaught exception: ReferenceError: $currentDate is not defined :
@(shell):1:31
> db.Student.update({}, {$set: {"number_of_belts": new Date()}}, false, true);
WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 5 })
> db.Student.find().pretty();
{
	"_id" : ObjectId("60ef05965900cf32424a5a0f"),
	"name" : "Andrii",
	"home_state" : "Washington",
	"birthday" : {
		"month" : 3,
		"day" : 3,
		"year" : 1991
	},
	"belts_earned" : 1,
	"number_of_belts" : ISODate("2021-07-14T21:24:55.001Z")
}
{
	"_id" : ObjectId("60ef05ef5900cf32424a5a11"),
	"name" : "BigMac",
	"home_state" : "Texas",
	"birthday" : {
		"month" : 5,
		"day" : 8,
		"year" : 2020
	},
	"belts_earned" : 0,
	"number_of_belts" : ISODate("2021-07-14T21:24:55.001Z")
}
{
	"_id" : ObjectId("60ef06dd5900cf32424a5a12"),
	"name" : "Roman",
	"home_state" : "Luhansk",
	"birthday" : {
		"month" : 6,
		"day" : 11,
		"year" : 1968
	},
	"belts_earned" : 0,
	"number_of_belts" : ISODate("2021-07-14T21:24:55.001Z")
}
{
	"_id" : ObjectId("60ef47c05900cf32424a5a13"),
	"interests" : [ ],
	"belts_earned" : 0,
	"number_of_belts" : ISODate("2021-07-14T21:24:55.001Z")
}
{
	"_id" : ObjectId("60ef4f415900cf32424a5a14"),
	"belts_earned" : 0,
	"number_of_belts" : ISODate("2021-07-14T21:24:55.001Z")
}
>