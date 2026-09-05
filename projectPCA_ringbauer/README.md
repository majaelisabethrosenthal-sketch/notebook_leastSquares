awk 'NR>1{print $1, $2, $3, $9, $10, $4, $5, $6, $7, $8}' 20250422.ho_ptn_weights_p.tsv > weights_ho_formatted.tsv

