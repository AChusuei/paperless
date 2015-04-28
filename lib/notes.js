function Note(name, accidental) {
	this.letter = name;
	this.accidental = (accidental ? accidental : null)
	this.down = null;
	this.up = null;
}

var flat = 'b';
var sharp = '#'

// Declare notes.
A = new Note('A'); // this could technically be Bbb, or G## ... 
Bf = new Note('B', flat); // This is also A#, but we gotta pick a name .. 
B = new Note('B');
C = new Note('C');
Df = new Note('D', flat);
D = new Note('D');
Ef = new Note('E', flat);
E = new Note('E');
F = new Note('F');
Gf = new Note('G', flat);
G = new Note('G');
Af = new Note('A', flat);

// Declare relationships.
 A.down = Af;  A.up = Bf;
Bf.down = A;  Bf.up = B;
 B.down = Bf;  B.up = C;
 C.down = B;   C.up = Df;
Df.down = C;  Df.up = D;
 D.down = Df;  D.up = Ef;
Ef.down = D;  Ef.up = E;
 E.down = Ef;  E.up = F;
 F.down = E;   F.up = Gf;
Gf.down = F;  Gf.up = G;
 G.down = Gf;  G.up = Af;
Af.down = G;  Af.up = A;

Note.prototype = {

	getNextLetterNote: function(letter) {
		if (letter === 'G') return 'A';
		return String.fromCharCode(letter.charCodeAt(0) + 1);
	},
	getPreviousLetterNote: function(letter) {
		if (letter === 'A') return 'G';
		return String.fromCharCode(letter.charCodeAt(0) - 1);
	},
	getEnharmonicFlat: function() {
		if (this.accidental === sharp && (this.letter !== 'B' || this.letter !== 'E')) {
			return new Note(this.getNextLetterNote(this.letter), flat);
		} else {
			return this;
		}
	},
	getEnharmonicSharp: function() {

	},
	equals: function(note) {
		var that = note.getEnharmonicFlat();
		return (this.letter === that.letter && that.accidental === that.accidental);
	},
	toString: function() {
		return this.letter + this.accidental;
	},

};