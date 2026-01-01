---
title: apomixis
description: 4-manuals Klais organ with automated midi system
pubDate: 01-12-2019
heroImage: https://i.imgur.com/0UWsxV8.png
performedBy: 
- "[[Luciano Azzigotti]]"
tags:
  - generative
performances: "[[apomixis @CCK]]"
---
<iframe title="Apomixis Megáspora Teaser" src="https://www.youtube.com/embed/jCdQ02JPp8o?feature=oembed" height="113" width="200" style="aspect-ratio: 1.76991 / 1; width: 100%; height: 100%;" allowfullscreen="" allow="fullscreen"></iframe>

Apomixis is a set of pieces for large organ, composed to be played automatically through a generative MIDI system on the 4-manual Klais organ, installed in the Symphonic Hall of Kirchner Cultural Centre.

## development
Megáspora is the fourth piece in the Apomixis cycle, a set of pieces for large organ, composed to be performed automatically through a generative MIDI system on the 4-manual Klais organ installed in the Symphony Hall of Kirchner Cultural Centre.

The piece must be performed from a remote location outdoors. There, a performer is recorded who, in relation to the two-dimensional plane of the image frame, arranges both gestures and objects from the environment (branches, leaves, stones, seeds) in geometric arrangements to form a collection. The gestures of hands and body position are also read in their durational and rhythmic components.
This image is transmitted in real time and interpreted by a computer connected to the microprocessor of CCK's Klais Organ, with the router already in place.

The image is interpreted and translated into a very simple numerical message consisting of parameters X, Y, accelerationOfX, accelerationOfY, blob (colour outline).
These parameters are in turn translated into a dictionary of musical events that control the registers (different sounds), pitches and rhythms of the organ.

Eventually, the interactive link may be reinforced by the projection of the image of the remote performance - using the existing screen in the room - although this is not exclusive. Rather than verification, the fundamental aspect of the work concerns the latency and liminality of a minimal gesture, its resonance and remote amplification.

![](https://i.imgur.com/OlsuAwO.png)
![](https://i.imgur.com/IUCR1J4.png)
![](https://i.imgur.com/MOSiqFe.png)
![](https://i.imgur.com/qtqrTBr.png)
![](https://i.imgur.com/9ZDxH0E.png)
![](https://i.imgur.com/WpmUQpe.png)
![](https://i.imgur.com/oStg1BB.png)

## code
```js

//APOMIXIS ORGAN GENERATOR

// ( p = Pbind( \dur, Prand( [0.25,0.5,1], inf ), \freq, Pwhite( 40, 880 ), \db, Pwhite( -40,-10 ), \legato, Pwhite( 0.25, 4 ) ); m = SimpleMIDIFile( "~/Desktop/testPat.mid" ); m.init1( 2, 120, "4/4" ); m.fromPattern( p );)

p.postln;
m.plot;
m.p.play; // note numbers are not rounded
p.play; // compare
m.write; //save

///// L-SYSTEM
(
var dict = IdentityDictionary[\A -> "AB", \B -> "A", \C -> "DB", \D -> "BC"]; //These are the production rules of the L-system var word = "AC"; //Axiom word var string_temp = ""; var iter = 10;

//These are dictionaries for mapping of the alphabet to "artistic" parameters: degrees in a scale, beat occurrence, etc.
var dictnotes = IdentityDictionary[\A -> 50, \B -> 55, \C -> 54, \D -> 57]; var dictkick = IdentityDictionary[\A -> 1, \B -> 0, \C -> 1, \D -> 0]; var dicthat = IdentityDictionary[\A -> 1, \B -> 0, \C -> 1, \D -> 1]; var notes=[]; var beat=[]; var beat2=[];

//This iteration generates the system recursively
[iter.do]({
[word.asArray.do]({|i| string_temp = string_temp ++ dict[i.asSymbol]; });
word = string_temp; string_temp = ""; });
word.postln;

//Here we map the final system to the parameters as above
[word.do]({|i| notes = notes ++ dictnotes[i.asSymbol];}); [word.do]({|i| beat = beat ++ dictkick[i.asSymbol];}); 
[word.do]({|i| beat2 = beat2 ++ dicthat[i.asSymbol];});

notes.postln; beat.postln;

Pbind(*[\type, \midi, \midiout, m, \chan, 1 , \note: Pseq(notes,inf)/2, \amp: 60, \dur: 1/8]).play(quant:32);
Pbind(*[\type, \midi, \midiout, m, \chan, 2 , \note: Pseq(notes,inf)-36, \amp: 60, \note: Pseq(notes + 48,inf), \dur: 1/8]).play(quant:32 + 16);

//gen1
Pbind(*[\type, \midi, \midiout, m, \chan, 4 , \note: 
Pseq(notes,inf)-24, \amp: 60, \t: Pseq(beat,inf), \dur: 1/8]).play(quant:32 + 32);

//gen2
Pbind(*[\type, \midi, \midiout, m, \chan, 3 , \note: Pseq(notes,inf)/2, \amp: 60, \t: Pseq(beat2,inf), \r:8, \dur: 1/8]).play(quant:32 + 32 + 8);

//gen3
Pbind(_[\type, \midi, \midiout, m, \chan, 0 , \note: Pseq(notes,inf)/2, \amp: 60, \t: Prand([Pseq([0,0,1,0],4), Pseq([0,1,0,0],1)],inf), \r: 1, \dur: 1/4]).play(quant:32 + 32 + 8);_/ )
