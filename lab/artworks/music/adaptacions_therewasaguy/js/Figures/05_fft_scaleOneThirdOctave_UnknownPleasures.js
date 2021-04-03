class Ex053 extends Exercice {

	constructor(soundFile) {
		super(soundFile);
		this.name = "Ex05 3: FFT Scale One Third Octave Unknown Pleasures";
		this.inspiration = "https://therewasaguy.github.io/p5-music-viz/demos/05_fft_scaleOneThirdOctave_UnknownPleasures";

		const binCount = 1024;
		const smoothing = 0.6;

		this.divisions = 5;
		this.speed = 1;
		this.fft = new p5.FFT(smoothing, binCount);
		this.fft.setInput(soundFile);
	}

	draw() {
		background(200, 200, 200, 1);
		const spectrum = this.fft.analyze();
		const scaledSpectrum = splitOctaves(spectrum, 12);
		const h = height / this.divisions;

		copy(canvas, 0, 0, width, height, 0, this.speed, width, height);

		beginShape();
		curveVertex(0, h);
		for (var i = 0; i < scaledSpectrum.length; i++) {
			const point = smoothPoint(scaledSpectrum, i, 8);
			var x = map(i, 0, scaledSpectrum.length-1, 0, width);
			var y = map(point, 0, 255, height, 0);
			curveVertex(x, y);
		}
		curveVertex(width, h);
		endShape();
	}

	setup() {
		background(200, 200, 200, 1);
		stroke(0,100);
		noFill();
	}

}

function smoothPoint(spectrum, index, neighbors) {
	var val = 0;
	var smoothedPoints = 0;
	for (var i = (index-neighbors); i < (index+neighbors) && i < spectrum.length; i++)
		if (typeof(spectrum[i]) !== 'undefined') {
			val += spectrum[i];
			smoothedPoints++;
		}
	val = val/smoothedPoints;
	return val;
}






/**
 *  Divides an fft array into octaves with each
 *  divided by three, or by a specified "slicesPerOctave".
 *  
 *  There are 10 octaves in the range 20 - 20,000 Hz,
 *  so this will result in 10 * slicesPerOctave + 1
 *
 *  @method splitOctaves
 *  @param {Array} spectrum Array of fft.analyze() values
 *  @param {Number} [slicesPerOctave] defaults to thirds
 *  @return {Array} scaledSpectrum array of the spectrum reorganized by division
 *                                 of octaves
 */
function splitOctaves(spectrum, slicesPerOctave) {
	var scaledSpectrum = [];
	var len = spectrum.length;
  
	// default to thirds
	var n = slicesPerOctave|| 3;
	var nthRootOfTwo = Math.pow(2, 1/n);
  
	// the last N bins get their own 
	var lowestBin = slicesPerOctave;
  
	var binIndex = len - 1;
	var i = binIndex;
  
  
	while (i > lowestBin) {
	  var nextBinIndex = round( binIndex/nthRootOfTwo );
  
	  if (nextBinIndex === 1) return;
  
	  var total = 0;
	  var numBins = 0;
  
	  // add up all of the values for the frequencies
	  for (i = binIndex; i > nextBinIndex; i--) {
		total += spectrum[i];
		numBins++;
	  }
  
	  // divide total sum by number of bins
	  var energy = total/numBins;
	  scaledSpectrum.push(energy);
  
	  // keep the loop going
	  binIndex = nextBinIndex;
	}
  
	// add the lowest bins at the end
	for (var j = i; j > 0; j--) {
	  scaledSpectrum.push(spectrum[j]);
	}
  
	// reverse so that array has same order as original array (low to high frequencies)
	scaledSpectrum.reverse();
  
	return scaledSpectrum;
  }
  
  
  
  // average a point in an array with its neighbors
  function smoothPoint(spectrum, index, numberOfNeighbors) {
  
	// default to 2 neighbors on either side
	var neighbors = numberOfNeighbors || 2;
	var len = spectrum.length;
  
	var val = 0;
  
	// start below the index
	var indexMinusNeighbors = index - neighbors;
	var smoothedPoints = 0;
  
	for (var i = indexMinusNeighbors; i < (index+neighbors) && i < len; i++) {
	  // if there is a point at spectrum[i], tally it
	  if (typeof(spectrum[i]) !== 'undefined') {
		val += spectrum[i];
		smoothedPoints++;
	  }
	}
  
	val = val/smoothedPoints;
  
	return val;
  }