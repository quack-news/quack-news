convert $1 \
  -resize 200x200! \
  -modulate 150,200,100 \
  -colorspace RGB \
  -sigmoidal-contrast 1,0% \
  -sharpen 0x1 \
  -quality 25 \
  -posterize 5 \
  $2