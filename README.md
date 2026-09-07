A computational notebook, written with [Observable's "Notebook-Kit"](https://observablehq.com/notebook-kit/kit).

Developed as part of an internship at Max Planck Institute for Evolutionary Anthropology, this project extends and builds upon the foundational codebase originally created by Stephan Schiffels (available at [notebook_leastSquares](https://github.com/stschiff/notebook_leastSquares).

At its core, the notebook explores Least-squares fitting, using the function `dgels`, which is not yet implemented in [stdlib's implementation of LAPACK](https://stdlib.io/docs/api/latest/@stdlib/lapack), but available in an experimental package [blapack](https://github.com/rreusser/notes) by Rick Reusser.

Building upon this foundation, I incorporated the overall dispersion of the data around the model (error variance $\sigma^2$) as well as the parameter uncertainty quantified by the standard errors of $\beta$, using the function `dtrtri`, which is also available in an experimental package [blapack](https://github.com/rreusser/notes).

The project is organized into a main notebook for core functionality [index.html](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/index.html) and several supplementary notebooks for testing and experimentation (see links in [index.html](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/index.html)). There is also an application example [pca_projection.html](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/pca_projection.html).

You can view the live notebooks [here](https://majaelisabethrosenthal-sketch.github.io/notebook_leastSquares/)

To run the notebook locally, install [node](https://nodejs.org/en/download) run `npm install` and `npm run preview`, and open in your browser under the address given on the command line, and extending by the notebook name, e.g. `http://localhost:5174/pca_projection`.

To build the notebook, run `npm bundle` and `npm build`. You can then check with `npm serve`.
