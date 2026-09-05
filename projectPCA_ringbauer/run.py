from projectPCA.run import project_eigenstrat

project_eigenstrat(es_path="../2024_Gretzinger_earlyCelts",
                   pca="HO", es_type="plink", iids=[],
                   plot_bgrd_c=False, verbose=True, flip=True, 
                   fig_path='ringbauer_HO.png')