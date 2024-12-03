function memoization(n, memo = []) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibbonacci(n - 1, memo) + fibbonacci(n - 2, memo);
  return memo[n];
}


