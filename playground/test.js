import dgels from 'blapack/lib/lapack/base/dgels/lib/base.js';

const A = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
const B = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );

dgels( 'row-major', 'no-transpose', 2, 2, 1, A, 2, B, 2 );

console.log(A);
