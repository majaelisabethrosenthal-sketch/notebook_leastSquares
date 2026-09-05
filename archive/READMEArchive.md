A computational notebook, written with [Observable's "Notebook-Kit"](https://observablehq.com/notebook-kit/kit).

The notebook explores Least-squares fitting, using the function `dgels`, which is not yet implemented in [stdlib's implementation of LAPACK](https://stdlib.io/docs/api/latest/@stdlib/lapack), but available in an experimental package [blapack](https://github.com/rreusser/notes) by Rick Reusser.

You can view the live notebooks [here](http://www.stephanschiffels.de/notebook_leastSquares/) and [here](http://www.stephanschiffels.de/notebook_leastSquares/pca_projection).

To run the notebook locally, install [node](https://nodejs.org/en/download) run `npm install` and `npm run preview`, and open in your browser under the address given on the command line, and extending by the notebook name, e.g. `http://localhost:5174/pca_projection`.

To build the notebook, run `npm bundle` and `npm build`. You can then check with `npm serve`.
