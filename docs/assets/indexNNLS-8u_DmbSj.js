import{t as x}from"./runtime-DnUf8OyF.js";import{t as _}from"./preload-helper-DXINVdbW.js";x({root:document.getElementById("cell-2"),expanded:[],variables:[]},{id:2,body:(l,o)=>l`Non-negative least-squares is a type of constrained least-squares problem where the coefficients are not allowed to become negative. 
Given a matrix \`A\` and a vector of response variables \`b\`, the goal is to find a vector \`x\` that minimizes the Euclidean norm of the residual \`R = b - A*x\`, subject to ${o`x \ge 0`}. 
Here ${o`x \ge 0`} means that each component of the vector \`x\` should be non-negative. 

This can be further extended by adding a sum-to-one constraint (${o`\sum x_i = 1`}), which restricts the coefficients to form a convex combination or mixture proportions that add up to 100%.

To solve this constrained optimization problem in JavaScript, you can use the \`quadprog npm\` package, which is a direct port of the classic quadratic programming solver from R (originally derived from Fortran).

The \`quadprog npm\` package expects the general quadratic programming formulation 

${o`\begin{aligned}
\text{minimize} \quad & -d^T x + \frac{1}{2} x^T D x \\
\text{subject to} \quad & Amat^T x \geq bvec
\end{aligned}`}

which is mathematically equivalent to our least-squares problem ${o` \text{minimize} \quad \|Ax - b\|^2`}, just expanded, divided by 2, and with the constant term ${o`b^Tb`} dropped.

Note: in the general quadratic programming formulation, ${o`Amat`} and ${o`bvec`} are NOT our matrix ${o`A`} and vector ${o`b`}. Instead they encode our constraints ${o`x \ge 0`} and ${o`\sum x_i = 1`}.

Also note that ${o`D=A^TA`} and ${o`d=Aᵀb`}.

Here we want to test the \`quadprog npm\` package. `,inputs:["md","tex"],outputs:[],output:void 0,assets:void 0,autodisplay:!0,autoview:!1,automutable:void 0});x({root:document.getElementById("cell-10"),expanded:[],variables:[]},{id:10,body:async l=>{const[{default:o},{default:c},{solveQP:p}]=await Promise.all([_(()=>import("https://cdn.jsdelivr.net/gh/stdlib-js/random-base-normal@esm/index.mjs").then(t=>{if(!("default"in t))throw new SyntaxError("export 'default' not found");return t}),[],import.meta.url),_(()=>import("https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@esm/index.mjs").then(t=>{if(!("default"in t))throw new SyntaxError("export 'default' not found");return t}),[],import.meta.url),_(()=>import("./quadprog-BJlz7stj.js").then(t=>{if(!("solveQP"in t))throw new SyntaxError("export 'solveQP' not found");return t}),[],import.meta.url)]),i=20,e=2,n=new Float64Array(i*e);for(let t=0;t<i;t++)n[t*e+0]=c(0,5),n[t*e+1]=c(0,5);const f=new Float64Array(i);for(let t=0;t<i;t++)f[t]=n[t*e+0]*.7+n[t*e+1]*.3+o(0,1);const v=new Float64Array(i);for(let t=0;t<i;t++)v[t]=n[t*e+0]*-.7+n[t*e+1]*-.3+o(0,1);const d=[];for(let t=1;t<=e;t++){d[t]=[];for(let a=1;a<=e;a++){let r=0;for(let s=0;s<i;s++)r+=n[s*e+(t-1)]*n[s*e+(a-1)];d[t][a]=r}}const u=[];for(let t=1;t<=e;t++){u[t]=[];for(let a=1;a<=e;a++){let r=0;for(let s=0;s<i;s++)r+=n[s*e+(t-1)]*n[s*e+(a-1)];u[t][a]=r}}const b=[];for(let t=1;t<=e;t++){let a=0;for(let r=0;r<i;r++)a+=n[r*e+(t-1)]*f[r];b[t]=a}const h=[];for(let t=1;t<=e;t++){let a=0;for(let r=0;r<i;r++)a+=n[r*e+(t-1)]*v[r];h[t]=a}const m=[void 0,[void 0,1,1,0],[void 0,1,0,1]];l(m);const g=[void 0,1,0,0],A=1,y=p(d,b,m,g,A),w=p(u,h,m,g,A);return l(y),l(w),{normal:o,uniform:c,solveQP:p,M:i,N:e,A:n,b:f,b_negative:v,AtA:d,AtA_copy:u,Atb:b,Atb_neg:h,Amat:m,bvec:g,meq:A,result:y,result_negative:w}},inputs:["display"],outputs:["normal","uniform","solveQP","M","N","A","b","b_negative","AtA","AtA_copy","Atb","Atb_neg","Amat","bvec","meq","result","result_negative"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});
