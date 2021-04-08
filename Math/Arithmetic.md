# Arithmetic

## Addition
The addition of numbers `n` and `m` is the combination or concatenation of a string of `|`'s. It is written as `n + m`.

### Laws
#### Commutative
`n + m = m + n`
The order of the numbers that are being concatenated doesn't alter the addition result.

#### Associative
`(k + n) + m = k + (m + n)`
No matter how we group numbers the addition result won't be mutated.

#### Successor
`n + 1 = s(n)`
The successor of a number is the next number after the origin number.
  
## Multiplication
The product of numbers `n` and `m` is the string formed by a copy of `m` for every `|` in `n`. This can be represented in many ways:
  - `n x m`
  - `n ⋅ m`
  - `nm`

### Laws
#### Commutative
`n ⋅ m = m ⋅ n`
`||| ⋅ || = || || ||` or `6`. Rearranging this, `|| ⋅ |||` is `||| |||` which is again `6`.

#### Associative
`(k ⋅ n) ⋅ m = k ⋅ (n ⋅ m)`

If `k = |`, and `n = ||`, and `m = |||` and parenthesis expressions are evaluated first:
- Left side: `(k ⋅ n) ⋅ m`. We first evaluate `(k ⋅ n)` as `||` (`2` groups of `1`, the identity law), and `2 ⋅ m` is `||| |||` (`2` groups of `3`) for a total of `6`.
- Right side: `k ⋅ (n ⋅ m)`: In the parenthesis `n ⋅ m` is `2` groups of `3`, so `||| |||`. `k ⋅ (6)` is the identity law, one group of `6`. Thus `(k ⋅ n) ⋅ m = k ⋅ (n ⋅ m)`.

#### Distributive
`(k + n ⋅ m = k ⋅ m + n ⋅ m`

If `k = ||||`, and `n = ||`, and `m = |`:
- Left side: (`|||| + ||`) is `6`, and `(6) x 1` is six groups of `1` or `6` according to the identity law.
- Right side: `k ⋅ m + n ⋅ m`: `4` groups of one is `4`, plus two groups of `1` is `2` (identity law). Answer is again `6`.

#### Identity
`n ⋅ 1 = n`
We are creating n groups of `1`. According to our definition of multiplication `|||| ⋅ |` would be `4` groups of `|` or `||||`. This is still `4`.

- _Associative_: 
- _Distributive_: `k ⋅ (n + m) = (k ⋅ n) + (k ⋅ m)`
- _Identity_: 
