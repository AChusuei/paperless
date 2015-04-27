# paperless
A paperless web application for music teams tired of creating songs sheets week after week.

I lead a musical worship team at my church every week. One of the most annoying things that I have to do
every week is that I have to create song sheets for all my team members. For those familiar with this task,
I am looking to solve a few problems with this system:

- No more having to create a song sheet more than once. A song template is created once, and never has to be created again.
- Key changes are done with a single touch of a button. No more manual re-writing down of chords.
- Meter is part of the song template. No more guessing when a chord should exactly be played.
- Allow capo changes so guitarists can play using different chords structures in key. No more transposing chords on the fly.
- Interface for paging in and between songs. No more awkward page turning, just hit a button (web) or swipe (tablet) 
- Ease of set list creation. Once song templates are available:
 - Search, add, and order songs for set. No more manually collating sheets.
 - Set list up visible throughout whole set. No more guessing what the next song is.
- Certain changes are sync'ed and propagated for each member, so only one person has to make changes
 - Set list order changes are propagated for all members. No more recollating sheets.
 - Key changes are also propagated for all members. No more re-writing down chords.

The hardest part: creating a readable song template. 
- Data model for the song template will be pretty difficult, but should be hidden by abstraction
- But what interface for translating something into sheet music?

Other fancy stuff that might be handy later on:
- Metronome that plays a song template, chord for chord and in meter.
- Mini-tablature for pianists, violinists, lead guitarists and voice leads for solos.
- Modulation for key changes mid-song.
