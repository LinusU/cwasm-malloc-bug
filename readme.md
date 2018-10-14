# Malloc Bug

This repo contains a small test case that triggers a bug in `malloc`.

## Usage

To build a small Wasm file exporting only `malloc` and `free`, run the following command:

```sh
make test.wasm
```

To run a small script that triggers the bug (`test.js`), run the following command:

```sh
make test
```

## Prebuilt

I've included a prebuilt version of the Wasm file for easy testing, simply copy `test-prebuilt.wasm` to `test.wasm` to use that file.
