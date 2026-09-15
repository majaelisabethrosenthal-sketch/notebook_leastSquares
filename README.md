A computational notebook, written with [Observable's "Notebook-Kit"](https://observablehq.com/notebook-kit/kit).

Developed as part of an internship at the Max Planck Institute for Evolutionary Anthropology, this project extends and builds upon the foundational codebase originally created by Stephan Schiffels (available at [notebook_leastSquares](https://github.com/stschiff/notebook_leastSquares)).

At its core, the notebook explores Least-squares fitting, using the function `dgels`, which is not yet implemented in [stdlib's implementation of LAPACK](https://stdlib.io/docs/api/latest/@stdlib/lapack), but available in an experimental package [blapack](https://github.com/rreusser/notes) by Rick Reusser.

Building upon this foundation, I incorporated the overall dispersion of the data around the model (error variance $\sigma^2$) as well as the parameter uncertainty quantified by the standard errors of $\beta$, using the function `dtrtri`, which is also available in that same experimental package [blapack](https://github.com/rreusser/notes).

Additionally I applied non-negative least squares (NNLS). For this I have used the [quadprog npm](https://github.com/albertosantini/quadprog) package, which is a direct port of the classic quadratic programming solver from R.

The project is organized into two main notebooks for core functionality of least squares [Notebook Least Squares](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/index.html) and of non-negative least squares [Notebook NNLS](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/indexNNLS.html).
There are also two application examples [PCA Projection](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/pca_projection.html) and [NNLS applied to PCA Projection](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/pca_projectionNNLS.html)

Additional notebooks:

[Testing the impact of an outlier on RSS](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/outlier.html)

[Testing the dgels function](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/dgels_test.html)

[Testing confidence ellipses](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/ellipse_testing.html)

[Testing the impact of missingness on ellipses](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/missingness.html)

[Testing non-vanishing covariance](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/nonVanishingCovariance.html)

Regarding NNLS:

[Fraction of variance per PC explained](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/pcCombinations.html)

You can view the live notebooks [here](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/) and [here](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/indexNNLS.html)

To run the notebook locally, install [node](https://nodejs.org/en/download) run `npm install` and `npm run preview`, and open in your browser under the address given on the command line, and extending by the notebook name, e.g. `http://localhost:5174/pca_projection`.

To build the notebook, run `npm bundle` and `npm build`. You can then check with `npm serve`.
