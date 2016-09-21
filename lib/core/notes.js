function Note(name, accidental) {
	this.letter = name;
	this.accidental = (accidental ? accidental : null)
	this.down = null;
	this.up = null;
}

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
		if (this.accidental === sharp) {
			var newNote;
			if (this.letter === 'B' || this.letter === 'E') {
				newNote = new Note(this.getNextLetterNote(this.letter));
			} else {
				newNote = new Note(this.getNextLetterNote(this.letter), flat);
			}
			newNote.up = this.up;
			newNote.down = this.down;
			return newNote;
		} else {
			return this;
		}
	},
	getEnharmonicSharp: function() {
		if (this.accidental === flat) {
			var newNote;
			if (this.letter === 'C' || this.letter === 'F') {
				newNote = new Note(this.getPreviousLetterNote(this.letter));
			} else {
				newNote = new Note(this.getPreviousLetterNote(this.letter), sharp);
			}
			newNote.up = this.up;
			newNote.down = this.down;
			return newNote;
		} else {
			return this;
		}
	},
	getEnharmonic: function(sharp) {
		return (sharp ? this.getEnharmonicSharp() : this.getEnharmonicFlat());
	},
	toString: function() {
		return this.letter + (this.accidental ? this.accidental : '');
	},
	equals: function(note) {
		var that = note.getEnharmonicFlat();
		return (this.letter === that.letter && that.accidental === that.accidental);
	}

};

var flat = 'b';
var sharp = '#';

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