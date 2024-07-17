for pdf in `ls *pdf`
do
  convert -quality 300 -density 300 -alpha remove -alpha off $pdf `basename $pdf .pdf`.png
done
