var chordTypeMap = {
	'major': '',
	'minor': 'm',
	'seventh': '7',
}

function Chord(note, type) {
	this.note = note;
	this.type = type;
	this.toString = function() {
		return this.note.toString() + chordTypeMap[type];
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
		var sharpScales = [G, D, A, E, B];
		var sharp = _.contains(sharpScales, this.tonic);
		seq.push(new Chord(this.tonic.getEnharmonic(sharp), 'major'));
		seq.push(new Chord(seq[0].note.up.up.getEnharmonic(sharp), 'minor'));
		seq.push(new Chord(seq[1].note.up.up.getEnharmonic(sharp), 'minor'));
		seq.push(new Chord(seq[2].note.up.getEnharmonic(sharp), 'major'));
		seq.push(new Chord(seq[3].note.up.up.getEnharmonic(sharp), 'major'));
		seq.push(new Chord(seq[4].note.up.up.getEnharmonic(sharp), 'minor'));
		seq.push(new Chord(seq[5].note.up.up.getEnharmonic(sharp), 'diminished'));
		return seq;
	},
	createScaleFromDegree: function(index) {
		var seq = this.createMajorScale();
		return seq.slice(index - 1).concat(seq.slice(0, index - 1));
	},
	getChordAtPosition: function(position) {
		return this.sequence[position - 1];
	},
	toString: function() {
		return this.sequence.join(',');
	}

}

Scales = {
	getScale: function(note, type) {
		return new Scale(note, type)	
	}
}

// console.log('G major scale:', new Scale(G, 'major'));
// console.log('A minor scale:', new Scale(A, 'minor'));