function difference(arr1, arr2) {
        if (arr1 == null || arr2 == null) return void 0;

        var newArray = {};

        for (var i = arr1.length - 1; i >= 0; --i) newArray[arr1[i]] = arr1[i];

        for (var i = arr2.length - 1; i >= 0; --i) newArray[arr2[i]] = arr2[i];

        var result = [];

        for (var n in newArray) {
          if (newArray.hasOwnProperty(n)) result.push(newArray[n]);
        }

        document.write(result);
      }
console.log(difference([1, 2, 3], [100, 2, 1, 10]))