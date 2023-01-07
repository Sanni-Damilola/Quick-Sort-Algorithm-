// const Setin = (arr: number[], value: number) => {
//     let res:number[][] = []
//     let hashtable:number[] = []

//     for (let i = 0; i < arr.length; i++){
//         let counting: number = arr[i]
//         let count =

//         if (hashtable.indexOf(counting) > -1){
//             res.push([counting, count])
//         } else {
//             hashtable.push(counting)
//         }
//     }
//     return res
// }

// console.log(Setin([7, 3, 0, 4], 7))

//         //  MERGE SORT

// console.time("")

// const merge = (arr1: number[], arr2: number[]) => {
//     let res: number[] = []
//     let i: number = 0
//     let j: number = 0

//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             res.push(arr1[i])
//             i++
//         } else {
//             res.push(arr2[j])
//             j++
//         }
//     }

//     while(i < arr1.length){
//         res.push(arr1[i])
//         i++
//     }

//     while(j < arr2.length){
//         res.push(arr2[j])
//         j++
//     }

//     return res
// }

// const OurSort = (arr:number[]) => {
//     if(arr.length <= 1){
//         return arr
//     }

//     let mid: number = Math.floor(arr.length/2)
//     let left = OurSort(arr.slice(0, mid))
//     let right = OurSort(arr.slice(mid))

//     const testData2: number[] = [];

// Array.apply(null, { length: 10000 }).map((el) => {
//   if (el === undefined) {
//     el = Math.floor(Math.random() * 100000);
//     testData2.push(el);
//   }
// });

//     return merge(left, right)

// }
// console.log(merge([1, 3, 0], [7, 2, 9]))
// console.log(OurSort([1, 3, 0, 7, 2, 9, 15, 8, 12]))
// console.log(merge(testData1))

// const OurStart = (arr: number[], start: number=0, end: number = arr.length + 1) => {
//     const swap = (arr: number[], i:number, j:number) => {
//         let temp = arr[i];
//         arr[j] = arr[j]
//         arr[j] = temp
//     };

//     let pivot = arr[start]
//     let idx = start

//     for(let i = 0; i < arr.length; i++){
//         if(pivot > arr[i]){
//             idx++
//             swap(arr, idx, i)
//         }
//     }
//     swap(arr, idx, start)
//     return idx
// }

// console.log("SWAP: ", OurStart([10, 1, 3, 0, 7, 2, 9, 15, 8, 12]))
// console.timeLog("")

// const OurQuickSort = (arr: number[], start: number = 0, end: number = arr.length -1) => {
//     if(start < end){
//         let pivotIDX = OurStart(arr, start, end);
//         OurQuickSort(arr, start, pivotIDX -1)
//         OurQuickSort(arr, pivotIDX + 1, end)
//     }

//     return arr
// }

// console.log("SWAP: ", OurStart)

const OurStart = (
  arr: number[],
  start: number = 0,
  end: number = arr.length + 1
) => {
  const swap = (arr: number[], i: number, j: number) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  let pivot = arr[start];
  let idx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      idx++;
      swap(arr, idx, i);
    }
  }

  swap(arr, start, idx);
  return idx;
};

const OurQuickSort = (
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
) => {
  if (start < end) {
    let pivotIDX = OurStart(arr, start, end);
    OurQuickSort(arr, start, pivotIDX - 1);
    OurQuickSort(arr, pivotIDX + 1, end);
  }

  return arr;
};

console.log("QuickSort: ", OurQuickSort([1, 3, 7, 2, 9, 15, 8, 12]));
