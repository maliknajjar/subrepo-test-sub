/**
 * @test/app — depends on @test/core.
 * This package also lives in its OWN separate GitHub repo, embedded here
 * via git-subrepo.
 */
import { greet, CORE_VERSION } from "@test/core";

console.log(greet("subrepo"));
console.log(`(using @test/core v${CORE_VERSION})`);

export const APP_NAME = "@test/app";

// this is so cool man
