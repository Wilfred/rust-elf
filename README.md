[![Build Status](https://travis-ci.org/cole14/rust-elf.svg?branch=master)](https://travis-ci.org/cole14/rust-elf)

# rust-elf
Pure-Rust library for parsing ELF files

## Example:
```rust
extern crate elf;

use std::path::Path;

let path = Path::new("/some/file/path");
let file = match elf::File::open(&path) {
    Ok(f) => f,
    Err(e) => panic!("Error: {:?}", e),
};

let text_scn = match file.get_section(String::from_str(".text")) {
    Some(s) => s,
    None => panic!("Failed to look up .text section"),
};

println!("{}", text_scn.data);

```
