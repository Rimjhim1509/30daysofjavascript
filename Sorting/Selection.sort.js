function SelectionSort(arr) {
    let n=arr.length;
for(let i=0;i<n-1;i++){
    let minIndex = i;
    for(let j=i+1;j<n;j++){
        if(arr[j]<arr[minIndex]){
            minIndex = j;
        }
    }
    if(minIndex !=0){
        temp = arr[i];
        arr[i]=arr[minIndex];
        arr[minIndex] = temp;
    }

}
return arr
}
let arr1 = [11,2,4,90,12]
console.log(SelectionSort(arr1));
