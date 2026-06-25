# @test/app

A small app that depends on `@test/core`.

This package is developed inside a Bun-workspace monorepo, but is also
published to its own standalone GitHub repository using
[git-subrepo](https://github.com/ingydotnet/git-subrepo). Changes flow both
ways via `git subrepo push` / `git subrepo pull`.

> Note: standalone, this package needs `@test/core` to be available
> (it resolves to a sibling workspace package inside the monorepo).
