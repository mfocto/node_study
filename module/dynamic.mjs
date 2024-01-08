const True = true

if (True) {
    const va = await import("./var.mjs");
    console.log(va);
    const fun = await import("./func.mjs");
    console.log(fun);
}

