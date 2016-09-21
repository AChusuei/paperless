Paperless = {
	printTemplate: function(template) {
		var sectionNamesPrinted = {};
		var songString = '\n\n';
		songString += template.title + '\n';
		songString += template.artist + '\n';
		songString += 'Key: ' + template.tonicNote + ' ' + template.scaleType + '\n\n';
		var scale = Scales.getScale(template.tonicNote, template.scaleType);
		template.order.forEach(function (sectionNameRaw) {
			var repeatRegex = /\(\d\)/;
			var sectionName = sectionNameRaw.replace(repeatRegex, '').trim();
			var sectionRepeat = Number((sectionNameRaw.match(repeatRegex) || '(0)').toString().trim()[1]);
			var section = template.song[sectionName] || {};
			var numberofRepeats = sectionRepeat ? ' (' + sectionRepeat + 'X)' : '';
			var sectionPostfix = sectionNamesPrinted[sectionName] ? ' >' : ':';
			songString += sectionName.toUpperCase() + numberofRepeats + sectionPostfix + '\n';
			if (!section.lyrics || sectionNamesPrinted[sectionName]) {
			} else {
				section.lyrics.forEach(function(line, index) {
					var chordLine = line.replace(/\^./g, '\^');
					chordLine = chordLine.replace(/[^\^]/g, ' ');
					var chords = section.progression[index];
					chords.forEach(function(chord) {
						chordLine = chordLine.replace(/\^/, scale.getChordAtPosition(chord));
					})
					songString += chordLine + '\n';
					var lyricLine = line.replace(/\^/g, '') + '\n';
					songString += lyricLine;
				});
			}
			sectionNamesPrinted[sectionName] = true;
			songString += '\n';
		});
		console.log(songString);
	},
};

SixthAveHeartache = {
	title: '6th Avenue Heartache',
	artist: 'The Wallflowers',
	tonicNote: E,
	scaleType: 'major',
	song: {
		'intro': {
			progression: [1, 5, 2, 4]
		},
		'verse 1': {
			progression: [[1, 5], [2, 4], [1, 5], [2, 4]],
			lyrics: ['Sirens ^ring, the shots ring o^ut', 'A stranger ^cries, screams out ^loud', 'I had my ^world strapped against my ^back', 'I held my ^hands, never knew^ how to act']
		},
		'chorus': {
			progression: [[1], [5], [2], [4]],
			lyrics: ['And the ^same black line that was drawn on you', 'Was ^drawn on me', 'And now it\'s drawn me ^in', '6th Avenue ^heartache']
		},
		'verse 2': {
			progression: [[1, 5], [2, 4], [1, 5], [2, 4]],
			lyrics: ['Below ^me was a homele^ss man', 'I\'m singin\' ^songs I knew com^plete', 'On the steps a^lone, his guitar in^ hand', 'It\'s fifty ^years, stood where he ^stands']
		},
		'verse 3': {
			progression: [[1, 5], [2, 4], [1, 5], [2, 4]],
			lyrics: ['Now walkin\' ^home on those^ streets', 'The river ^winds move my ^feet', 'Subway ^steam, like silhouettes in dre^ams', 'They stood by ^me, just like moon^beams']
		},
		'verse 4': {
			progression: [[1, 5], [2, 4], [1, 5], [2, 4], [1, 5], [2, 4]],
			lyrics: ['Look out the ^window, down upon that ^street', 'And gone like a ^midnight was that^ man', 'But I see his ^six string laid against that^ wall',
					'And all his ^things, they all look so^ small', 'I got my finge^rs crossed on a shoot^ing star', 'Just like ^me, just moved^ on']
		}
	},
	order: ['intro(2)', 'verse 1', 'chorus', 'intro', 'verse 2', 'chorus(2)', 'intro', 'verse 3', 'chorus(2)', 'intro(2)', 'verse 4', 'chorus(2)', 'intro(2)'],
}

Paperless.printTemplate(SixthAveHeartache);