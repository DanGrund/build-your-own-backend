# BYOB

## A database for the REST of us

### lol get it festivus jokes about RESTful APIs?

#### fuck I need to go to sleep, this coding delerious thing..

##### ¯\_(ツ)_/¯

## Overview
Anyway to business. BYOB is a simple server-db template. The server is built on node-express, and connects to a postgres db via knex. Endpoints are tested using Mocha Chai, because TDD is the bees knees.  We have three tables, one for users, one for compositions, and one for sounds. The idea is to implement this in my next class project, the browser-based DAW. users can create & share sounds, and then create compositions with said sounds and those of other users. anyhow, irrelelvant currently: project forthcomhing. To the task at hand..

## End Points, We've got Endpoints
you can check out the following endpoints on [heroku](https://byob-dan1.herokuapp.com/)
*****
### Users

<code>GET</code>/api/v1/users

* this little return you a JSON array of all the users

<code>POST</code>/api/v1/users

* pass an object with a users name and their email in the body to insert a new user into the user table

### Users/:id

<code>GET</code>/api/v1/users/:id

* this powerhouse'll get you back an array containing not only the user object, but also all of that user's compositions and sounds! hot damn!!

<code>GET</code>/api/v1/users/:id/creations

* this is just a lil sumthin' we snuck in so you can brag to that cute lil mama shooting u the sideeye from across the club. returns a handy message summarizing how many open source sounds and compositions you've put out into the ether. let your hips do the rest of the talking.

<code>PATCH</code>/api/v1/users/:id

* this endpoint will allow you to update a user's name and email

<code>DELETE</code>/api/v1/users/:id

* just keep this in your back pocket for when ur career is getting overwhelming and you need to pull a 2007 Britney to get out of the limelight

***

### Compositions

<code>GET</code>/api/v1/compositions

* for when you want to see all of the incredible scores and ditties our users have created

<code>GET</code>/api/v1/composition?complexity=:num

* this is for those times when you're two hours into about 300ug of needlepoint and need 13 harmonized polyrhythms to more truely understand the world.
* alternatively, also works when its 3am Saturday, you just got home and you want to brag to all your friends about how Berghain felt. Untz Untz.

<code>POST</code>/api/v1/compositions

* for when you want to build your next masterpiece and share it with the world

### Compositions/:id

<code>GET</code>/api/v1/compositions/:id

* for when you need to hear that one banger thats been stuck in your head for days. that's right, beyonce* uses this DB.

<code>PATCH</code>/api/v1/compositions/:id

* when the groove wasn't feeling quite right and you realized all you needed was a little more cowbell.

<code>DELETE</code>/api/v1/compositions/:id

* this one's here for when your ex calls you at 2am and tells you how shit your music is and you're drake enough to believe her.

***

### Sounds

<code>GET</code>/api/v1/sounds

* this'll get you an infinitely deep library of impecable sound design.

<code>POST</code>/api/v1/sounds

* you spent 2.5 hrs layering subtle choppy saw waves with just a hint of reverb over three different kick drum samples and then transposing the whole deal up two octaves to get that perfect punchy clap. it's time to share it with the world.

### Sounds/:id

<code>GET</code>/api/v1/sounds/:id

* Your boy told you about the waviest 707 acid bass sample he's ever heard. this is it.

<code>PATCH</code>/api/v1/sounds/:id

* even that punchy clap could use a layer of cowbell.

<code>DELETE</code>/api/v1/sounds/:id

* the dying whale cry isn't as experimental as you wanted it to be, and your soundcloud inbox is starting to fill up with PETA death threats. no worries! delete, delete, delete. people totally forget*  

***

## Testing, Testing, 1, 2, Test, 1, 2, Test

All paths are tested except sad paths for POST & DELETE

![passing-tests-screenshot](http://i.imgur.com/ACVVV9o.png)


*cannot confirm or deny
