function Chord(note, type) {
	this.note = note;
	this.type = type;
	this.toString = function() {
		return this.note.toString()
	}
}

function Scale(note, type) {
	this.tonic = note;
	this.useSharps = (!note.accidental && note.letter !== 'F');
	this.type = type;
	this.sequence = this.createScale();
}

Scale.prototype = {
	
	createScale: function() {
		switch (this.type) {
			case 'major': return this.createMajorScale();
			case 'minor': return this.createScaleFromDegree(6);
		}
	},
	createMajorScale: function() {
		var seq = [];
		seq.push(new Chord(this.tonic, 'major'));
		seq.push(new Chord(seq[0].note.up.up, 'minor'));
		seq.push(new Chord(seq[1].note.up.up, 'minor'));
		seq.push(new Chord(seq[2].note.up, 'major'));
		seq.push(new Chord(seq[3].note.up.up, 'major'));
		seq.push(new Chord(seq[4].note.up.up, 'minor'));
		seq.push(new Chord(seq[5].note.up.up, 'diminished'));
		return seq;
	},
	createScaleFromDegree: function(index) {
		var seq = this.createMajorScale();
		return seq.slice(index - 1).concat(seq.slice(0, index - 1));
	},
	toString: function() {
		this.sequence.forEach(function (chord) {

		});
	}

}

console.log('G major scale:', new Scale(G, 'major'));
console.log('A minor scale:', new Scale(A, 'minor'));