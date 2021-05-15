var mp = new Map(), str = "abcdefghijklmnopqrstuvwxyz";
for (var i = 1; i < 27; i++) {
    mp.set(str[i - 1], i);
}
function getXOR(p) {
    var xor = 0;
    for (var _i = 0, p_1 = p; _i < p_1.length; _i++) {
        var s = p_1[_i];
        xor = xor ^ mp.get(s);
    }
    return xor;
}
function findAnagrams(s, p) {
    var ans = [], lengthP = p.length, lengthS = s.length;
    if (lengthP > lengthS) {
        return ans;
    }
    var xorP = getXOR(p);
    var xorS = getXOR(s.slice(0, lengthP)), start = 0;
    if (xorP == xorS) {
        ans.push(0);
    }
    for (var i = lengthP; i < lengthS; i++) {
        xorS = xorS ^ mp.get(s[start]);
        xorS = xorS ^ mp.get(s[i]);
        if (xorS == xorP) {
            ans.push(i);
        }
        start++;
    }
    return ans;
}
console.log(findAnagrams("cbaebabacd", "abc"));
console.log(findAnagrams("abab", "ab"));
