$images=Get-ChildItem *.jpg,*.png,*.jpeg
$date=Get-Date -Format "yyyy_MM_dd_H_m_s"
$seq=0;
foreach($i in $images){
    rename-Item $i $date"_"$seq.jpg
    Write-Output "rename-Item $i $date"_"$seq.jpg"
    $seq++
}
$seq=0
foreach($i in Get-ChildItem *.jpg,*.png){
    Rename-Item $i image_$seq.jpg
    $seq++
    Write-Output " Rename-Item $i image_$seq.jpg"
}