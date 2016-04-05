var searchIndex = {};
searchIndex['rust_readelf'] = {"items":[],"paths":[]};
searchIndex['elf'] = {"items":[[3,"File","elf","",null,null],[12,"ehdr","","",0,null],[12,"phdrs","","",0,null],[12,"sections","","",0,null],[3,"Section","","",null,null],[12,"shdr","","",1,null],[12,"data","","",1,null],[4,"ParseError","","",null,null],[13,"IoError","","",2,null],[13,"InvalidMagic","","",2,null],[13,"InvalidFormat","","",2,null],[13,"NotImplemented","","",2,null],[0,"types","","",null,null],[3,"Class","elf::types","Represents the ELF file class (32-bit vs 64-bit)",null,null],[3,"Data","","Represents the ELF file data format (little-endian vs big-endian)",null,null],[3,"Version","","Represents the ELF file version",null,null],[3,"OSABI","","Represents the ELF file OS ABI",null,null],[3,"Type","","Represents the ELF file type (object, executable, shared lib, core)",null,null],[3,"Machine","","Represents the ELF file machine architecture",null,null],[3,"FileHeader","","Encapsulates the contents of the ELF File Header",null,null],[12,"class","","32-bit vs 64-bit",3,null],[12,"data","","little vs big endian",3,null],[12,"version","","elf version",3,null],[12,"osabi","","OS ABI",3,null],[12,"abiversion","","Version of the OS ABI",3,null],[12,"elftype","","ELF file type",3,null],[12,"machine","","Target machine architecture",3,null],[12,"entry","","Virtual address of program entry point",3,null],[3,"ProgFlag","","Represents ELF Program Header flags",null,null],[3,"ProgType","","Represents ELF Program Header type",null,null],[3,"ProgramHeader","","Encapsulates the contents of an ELF Program Header",null,null],[12,"progtype","","Program segment type",4,null],[12,"offset","","Offset into the ELF file where this segment begins",4,null],[12,"vaddr","","Virtual adress where this segment should be loaded",4,null],[12,"paddr","","Physical address where this segment should be loaded",4,null],[12,"filesz","","Size of this segment in the file",4,null],[12,"memsz","","Size of this segment in memory",4,null],[12,"flags","","Flags for this segment",4,null],[12,"align","","file and memory alignment",4,null],[3,"SectionType","","Represens ELF Section type",null,null],[3,"SectionFlag","","",null,null],[3,"SectionHeader","","Encapsulates the contents of an ELF Section Header",null,null],[12,"name","","Section Name",5,null],[12,"shtype","","Section Type",5,null],[12,"flags","","Section Flags",5,null],[12,"addr","","in-memory address where this section is loaded",5,null],[12,"offset","","Byte-offset into the file where this section starts",5,null],[12,"size","","Section size in bytes",5,null],[12,"link","","Defined by section type",5,null],[12,"info","","Defined by section type",5,null],[12,"addralign","","address alignment",5,null],[12,"entsize","","size of an entry if section data is an array of entries",5,null],[3,"SymbolType","","",null,null],[3,"SymbolBind","","",null,null],[3,"SymbolVis","","",null,null],[3,"Symbol","","",null,null],[12,"name","","Symbol name",6,null],[12,"value","","Symbol value",6,null],[12,"size","","Symbol size",6,null],[17,"EI_NIDENT","","Length of ELF file header platform-independent identification fields",null,null],[17,"ELFMAG0","","ELF magic number byte 1",null,null],[17,"ELFMAG1","","ELF magic number byte 2",null,null],[17,"ELFMAG2","","ELF magic number byte 3",null,null],[17,"ELFMAG3","","ELF magic number byte 4",null,null],[17,"EI_CLASS","","Location of ELF class field in ELF file header ident array",null,null],[17,"EI_DATA","","Location of data format field in ELF file header ident array",null,null],[17,"EI_VERSION","","Location of ELF version field in ELF file header ident array",null,null],[17,"EI_OSABI","","Location of OS ABI field in ELF file header ident array",null,null],[17,"EI_ABIVERSION","","Location of ABI version field in ELF file header ident array",null,null],[17,"ELFCLASSNONE","","Invalid ELF file class",null,null],[17,"ELFCLASS32","","32-bit ELF file",null,null],[17,"ELFCLASS64","","64-bit ELF file",null,null],[17,"ELFDATANONE","","Invalid ELF data format",null,null],[17,"ELFDATA2LSB","","little-endian ELF file",null,null],[17,"ELFDATA2MSB","","big-endian ELF file",null,null],[17,"EV_NONE","","Invalid version",null,null],[17,"EV_CURRENT","","Current version",null,null],[17,"ELFOSABI_NONE","","Defaults to Unix System V",null,null],[17,"ELFOSABI_SYSV","","Unix System V",null,null],[17,"ELFOSABI_HPUX","","HP-UX",null,null],[17,"ELFOSABI_NETBSD","","NetBSD",null,null],[17,"ELFOSABI_LINUX","","Linux with GNU extensions",null,null],[17,"ELFOSABI_SOLARIS","","Solaris",null,null],[17,"ELFOSABI_AIX","","AIX",null,null],[17,"ELFOSABI_IRIX","","SGI Irix",null,null],[17,"ELFOSABI_FREEBSD","","FreeBSD",null,null],[17,"ELFOSABI_TRU64","","Compaq TRU64 UNIX",null,null],[17,"ELFOSABI_MODESTO","","Novell Modesto",null,null],[17,"ELFOSABI_OPENBSD","","OpenBSD",null,null],[17,"ET_NONE","","No file type",null,null],[17,"ET_REL","","Relocatable object file",null,null],[17,"ET_EXEC","","Executable file",null,null],[17,"ET_DYN","","Shared library",null,null],[17,"ET_CORE","","Core file",null,null],[17,"EM_NONE","","",null,null],[17,"EM_M32","","",null,null],[17,"EM_SPARC","","",null,null],[17,"EM_386","","",null,null],[17,"EM_68K","","",null,null],[17,"EM_88K","","",null,null],[17,"EM_860","","",null,null],[17,"EM_MIPS","","",null,null],[17,"EM_S370","","",null,null],[17,"EM_MIPS_RS3_LE","","",null,null],[17,"EM_PARISC","","",null,null],[17,"EM_VPP500","","",null,null],[17,"EM_SPARC32PLUS","","",null,null],[17,"EM_960","","",null,null],[17,"EM_PPC","","",null,null],[17,"EM_PPC64","","",null,null],[17,"EM_S390","","",null,null],[17,"EM_V800","","",null,null],[17,"EM_FR20","","",null,null],[17,"EM_RH32","","",null,null],[17,"EM_RCE","","",null,null],[17,"EM_ARM","","",null,null],[17,"EM_FAKE_ALPHA","","",null,null],[17,"EM_SH","","",null,null],[17,"EM_SPARCV9","","",null,null],[17,"EM_TRICORE","","",null,null],[17,"EM_ARC","","",null,null],[17,"EM_H8_300","","",null,null],[17,"EM_H8_300H","","",null,null],[17,"EM_H8S","","",null,null],[17,"EM_H8_500","","",null,null],[17,"EM_IA_64","","",null,null],[17,"EM_MIPS_X","","",null,null],[17,"EM_COLDFIRE","","",null,null],[17,"EM_68HC12","","",null,null],[17,"EM_MMA","","",null,null],[17,"EM_PCP","","",null,null],[17,"EM_NCPU","","",null,null],[17,"EM_NDR1","","",null,null],[17,"EM_STARCORE","","",null,null],[17,"EM_ME16","","",null,null],[17,"EM_ST100","","",null,null],[17,"EM_TINYJ","","",null,null],[17,"EM_X86_64","","",null,null],[17,"EM_PDSP","","",null,null],[17,"EM_FX66","","",null,null],[17,"EM_ST9PLUS","","",null,null],[17,"EM_ST7","","",null,null],[17,"EM_68HC16","","",null,null],[17,"EM_68HC11","","",null,null],[17,"EM_68HC08","","",null,null],[17,"EM_68HC05","","",null,null],[17,"EM_SVX","","",null,null],[17,"EM_ST19","","",null,null],[17,"EM_VAX","","",null,null],[17,"EM_CRIS","","",null,null],[17,"EM_JAVELIN","","",null,null],[17,"EM_FIREPATH","","",null,null],[17,"EM_ZSP","","",null,null],[17,"EM_MMIX","","",null,null],[17,"EM_HUANY","","",null,null],[17,"EM_PRISM","","",null,null],[17,"EM_AVR","","",null,null],[17,"EM_FR30","","",null,null],[17,"EM_D10V","","",null,null],[17,"EM_D30V","","",null,null],[17,"EM_V850","","",null,null],[17,"EM_M32R","","",null,null],[17,"EM_MN10300","","",null,null],[17,"EM_MN10200","","",null,null],[17,"EM_PJ","","",null,null],[17,"EM_OPENRISC","","",null,null],[17,"EM_ARC_A5","","",null,null],[17,"EM_XTENSA","","",null,null],[17,"EM_AARCH64","","",null,null],[17,"EM_TILEPRO","","",null,null],[17,"EM_MICROBLAZE","","",null,null],[17,"EM_TILEGX","","",null,null],[17,"PF_NONE","","",null,null],[17,"PF_X","","Executable program segment",null,null],[17,"PF_W","","Writable program segment",null,null],[17,"PF_R","","Readable program segment",null,null],[17,"PT_NULL","","Program header table entry unused",null,null],[17,"PT_LOAD","","Loadable program segment",null,null],[17,"PT_DYNAMIC","","Dynamic linking information",null,null],[17,"PT_INTERP","","Program interpreter",null,null],[17,"PT_NOTE","","Auxiliary information",null,null],[17,"PT_SHLIB","","Unused",null,null],[17,"PT_PHDR","","The program header table",null,null],[17,"PT_TLS","","Thread-local storage segment",null,null],[17,"PT_GNU_EH_FRAME","","GCC .eh_frame_hdr segment",null,null],[17,"PT_GNU_STACK","","Indicates stack executability",null,null],[17,"PT_GNU_RELRO","","Read-only after relocation",null,null],[17,"SHT_NULL","","Inactive section with undefined values",null,null],[17,"SHT_PROGBITS","","Information defined by the program, includes executable code and data",null,null],[17,"SHT_SYMTAB","","Section data contains a symbol table",null,null],[17,"SHT_STRTAB","","Section data contains a string table",null,null],[17,"SHT_RELA","","Section data contains relocation entries with explicit addends",null,null],[17,"SHT_HASH","","Section data contains a symbol hash table. Must be present for dynamic linking",null,null],[17,"SHT_DYNAMIC","","Section data contains information for dynamic linking",null,null],[17,"SHT_NOTE","","Section data contains information that marks the file in some way",null,null],[17,"SHT_NOBITS","","Section data occupies no space in the file but otherwise resembles SHT_PROGBITS",null,null],[17,"SHT_REL","","Section data contains relocation entries without explicit addends",null,null],[17,"SHT_SHLIB","","Section is reserved but has unspecified semantics",null,null],[17,"SHT_DYNSYM","","Section data contains a minimal set of dynamic linking symbols",null,null],[17,"SHT_INIT_ARRAY","","Section data contains an array of constructors",null,null],[17,"SHT_FINI_ARRAY","","Section data contains an array of destructors",null,null],[17,"SHT_PREINIT_ARRAY","","Section data contains an array of pre-constructors",null,null],[17,"SHT_GROUP","","Section group",null,null],[17,"SHT_SYMTAB_SHNDX","","Extended symbol table section index",null,null],[17,"SHT_NUM","","Number of reserved SHT_* values",null,null],[17,"SHT_GNU_ATTRIBUTES","","Object attributes",null,null],[17,"SHT_GNU_HASH","","GNU-style hash section",null,null],[17,"SHT_GNU_LIBLIST","","Pre-link library list",null,null],[17,"SHT_GNU_VERDEF","","Version definition section",null,null],[17,"SHT_GNU_VERNEED","","Version needs section",null,null],[17,"SHT_GNU_VERSYM","","Version symbol table",null,null],[17,"SHF_NONE","","Empty flags",null,null],[17,"SHF_WRITE","","Writable",null,null],[17,"SHF_ALLOC","","Occupies memory during execution",null,null],[17,"SHF_EXECINSTR","","Executable",null,null],[17,"SHF_MERGE","","Might be merged",null,null],[17,"SHF_STRINGS","","Contains nul-terminated strings",null,null],[17,"SHF_INFO_LINK","","`sh_info' contains SHT index",null,null],[17,"SHF_LINK_ORDER","","Preserve order after combining",null,null],[17,"SHF_OS_NONCONFORMING","","Non-standard OS specific handling required",null,null],[17,"SHF_GROUP","","Section is member of a group",null,null],[17,"SHF_TLS","","Section hold thread-local data",null,null],[17,"STT_NOTYPE","","Unspecified symbol type",null,null],[17,"STT_OBJECT","","Data object symbol",null,null],[17,"STT_FUNC","","Code object symbol",null,null],[17,"STT_SECTION","","Section symbol",null,null],[17,"STT_FILE","","File name symbol",null,null],[17,"STT_COMMON","","Common data object symbol",null,null],[17,"STT_TLS","","Thread-local data object symbol",null,null],[17,"STT_GNU_IFUNC","","Indirect code object symbol",null,null],[17,"STB_LOCAL","","Local symbol",null,null],[17,"STB_GLOBAL","","Global symbol",null,null],[17,"STB_WEAK","","Weak symbol",null,null],[17,"STB_GNU_UNIQUE","","Unique symbol",null,null],[17,"STV_DEFAULT","","Default symbol visibility",null,null],[17,"STV_INTERNAL","","Processor-specific hidden visibility",null,null],[17,"STV_HIDDEN","","Hidden visibility",null,null],[17,"STV_PROTECTED","","Protected visibility",null,null],[11,"eq","","",7,{"inputs":[{"name":"class"},{"name":"class"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"class"},{"name":"class"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"class"}],"output":{"name":"class"}}],[11,"fmt","","",7,{"inputs":[{"name":"class"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",7,{"inputs":[{"name":"class"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",8,{"inputs":[{"name":"data"},{"name":"data"}],"output":{"name":"bool"}}],[11,"ne","","",8,{"inputs":[{"name":"data"},{"name":"data"}],"output":{"name":"bool"}}],[11,"clone","","",8,{"inputs":[{"name":"data"}],"output":{"name":"data"}}],[11,"fmt","","",8,{"inputs":[{"name":"data"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",8,{"inputs":[{"name":"data"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",9,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"ne","","",9,{"inputs":[{"name":"version"},{"name":"version"}],"output":{"name":"bool"}}],[11,"clone","","",9,{"inputs":[{"name":"version"}],"output":{"name":"version"}}],[11,"fmt","","",9,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",9,{"inputs":[{"name":"version"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",10,{"inputs":[{"name":"osabi"},{"name":"osabi"}],"output":{"name":"bool"}}],[11,"ne","","",10,{"inputs":[{"name":"osabi"},{"name":"osabi"}],"output":{"name":"bool"}}],[11,"clone","","",10,{"inputs":[{"name":"osabi"}],"output":{"name":"osabi"}}],[11,"fmt","","",10,{"inputs":[{"name":"osabi"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",10,{"inputs":[{"name":"osabi"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",11,{"inputs":[{"name":"type"},{"name":"type"}],"output":{"name":"bool"}}],[11,"ne","","",11,{"inputs":[{"name":"type"},{"name":"type"}],"output":{"name":"bool"}}],[11,"clone","","",11,{"inputs":[{"name":"type"}],"output":{"name":"type"}}],[11,"fmt","","",11,{"inputs":[{"name":"type"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",11,{"inputs":[{"name":"type"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",12,{"inputs":[{"name":"machine"},{"name":"machine"}],"output":{"name":"bool"}}],[11,"ne","","",12,{"inputs":[{"name":"machine"},{"name":"machine"}],"output":{"name":"bool"}}],[11,"clone","","",12,{"inputs":[{"name":"machine"}],"output":{"name":"machine"}}],[11,"fmt","","",12,{"inputs":[{"name":"machine"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"machine"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",3,{"inputs":[{"name":"fileheader"},{"name":"fileheader"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"fileheader"},{"name":"fileheader"}],"output":{"name":"bool"}}],[11,"fmt","","",3,{"inputs":[{"name":"fileheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"fileheader"}],"output":{"name":"fileheader"}}],[11,"new","","",3,{"inputs":[{"name":"fileheader"}],"output":{"name":"fileheader"}}],[11,"fmt","","",3,{"inputs":[{"name":"fileheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",13,{"inputs":[{"name":"progflag"},{"name":"progflag"}],"output":{"name":"bool"}}],[11,"ne","","",13,{"inputs":[{"name":"progflag"},{"name":"progflag"}],"output":{"name":"bool"}}],[11,"clone","","",13,{"inputs":[{"name":"progflag"}],"output":{"name":"progflag"}}],[11,"fmt","","",13,{"inputs":[{"name":"progflag"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",13,{"inputs":[{"name":"progflag"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",14,{"inputs":[{"name":"progtype"},{"name":"progtype"}],"output":{"name":"bool"}}],[11,"ne","","",14,{"inputs":[{"name":"progtype"},{"name":"progtype"}],"output":{"name":"bool"}}],[11,"clone","","",14,{"inputs":[{"name":"progtype"}],"output":{"name":"progtype"}}],[11,"fmt","","",14,{"inputs":[{"name":"progtype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",14,{"inputs":[{"name":"progtype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"programheader"},{"name":"programheader"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"programheader"},{"name":"programheader"}],"output":{"name":"bool"}}],[11,"fmt","","",4,{"inputs":[{"name":"programheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"programheader"}],"output":{"name":"programheader"}}],[11,"fmt","","",4,{"inputs":[{"name":"programheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",15,{"inputs":[{"name":"sectiontype"},{"name":"sectiontype"}],"output":{"name":"bool"}}],[11,"ne","","",15,{"inputs":[{"name":"sectiontype"},{"name":"sectiontype"}],"output":{"name":"bool"}}],[11,"clone","","",15,{"inputs":[{"name":"sectiontype"}],"output":{"name":"sectiontype"}}],[11,"fmt","","",15,{"inputs":[{"name":"sectiontype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",15,{"inputs":[{"name":"sectiontype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",16,{"inputs":[{"name":"sectionflag"},{"name":"sectionflag"}],"output":{"name":"bool"}}],[11,"ne","","",16,{"inputs":[{"name":"sectionflag"},{"name":"sectionflag"}],"output":{"name":"bool"}}],[11,"clone","","",16,{"inputs":[{"name":"sectionflag"}],"output":{"name":"sectionflag"}}],[11,"fmt","","",16,{"inputs":[{"name":"sectionflag"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",16,{"inputs":[{"name":"sectionflag"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"sectionheader"},{"name":"sectionheader"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"sectionheader"},{"name":"sectionheader"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"sectionheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"sectionheader"}],"output":{"name":"sectionheader"}}],[11,"fmt","","",5,{"inputs":[{"name":"sectionheader"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",17,{"inputs":[{"name":"symboltype"},{"name":"symboltype"}],"output":{"name":"bool"}}],[11,"ne","","",17,{"inputs":[{"name":"symboltype"},{"name":"symboltype"}],"output":{"name":"bool"}}],[11,"clone","","",17,{"inputs":[{"name":"symboltype"}],"output":{"name":"symboltype"}}],[11,"fmt","","",17,{"inputs":[{"name":"symboltype"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",18,{"inputs":[{"name":"symbolbind"},{"name":"symbolbind"}],"output":{"name":"bool"}}],[11,"ne","","",18,{"inputs":[{"name":"symbolbind"},{"name":"symbolbind"}],"output":{"name":"bool"}}],[11,"clone","","",18,{"inputs":[{"name":"symbolbind"}],"output":{"name":"symbolbind"}}],[11,"fmt","","",18,{"inputs":[{"name":"symbolbind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",19,{"inputs":[{"name":"symbolvis"},{"name":"symbolvis"}],"output":{"name":"bool"}}],[11,"ne","","",19,{"inputs":[{"name":"symbolvis"},{"name":"symbolvis"}],"output":{"name":"bool"}}],[11,"clone","","",19,{"inputs":[{"name":"symbolvis"}],"output":{"name":"symbolvis"}}],[11,"fmt","","",19,{"inputs":[{"name":"symbolvis"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"symbol"},{"name":"symbol"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"symbol"},{"name":"symbol"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"symbol"}],"output":{"name":"symbol"}}],[11,"sym_type","","",6,{"inputs":[{"name":"symbol"}],"output":{"name":"symboltype"}}],[11,"sym_bind","","",6,{"inputs":[{"name":"symbol"}],"output":{"name":"symbolbind"}}],[11,"sym_vis","","",6,{"inputs":[{"name":"symbol"}],"output":{"name":"symbolvis"}}],[0,"utils","elf","",null,null],[5,"get_string","elf::utils","",null,{"inputs":[{"name":"vec"},{"name":"usize"}],"output":{"name":"result"}}],[8,"ReadExact","elf","",null,null],[10,"read_exactly","","",20,{"inputs":[{"name":"readexact"},{"name":"u64"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"file"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"file"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"parseerror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from","","",2,{"inputs":[{"name":"parseerror"},{"name":"error"}],"output":{"name":"self"}}],[11,"from","","",2,{"inputs":[{"name":"parseerror"},{"name":"fromutf8error"}],"output":{"name":"self"}}],[11,"open_path","","",0,{"inputs":[{"name":"file"},{"name":"t"}],"output":{"name":"result"}}],[11,"open_stream","","",0,{"inputs":[{"name":"file"},{"name":"t"}],"output":{"name":"result"}}],[11,"get_section","","",0,{"inputs":[{"name":"file"},{"name":"t"}],"output":{"name":"option"}}],[11,"new","","",0,{"inputs":[{"name":"file"}],"output":{"name":"file"}}],[11,"fmt","","",1,{"inputs":[{"name":"section"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",1,{"inputs":[{"name":"section"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"read_u8!","","",null,null],[14,"read_u16!","","",null,null],[14,"read_u32!","","",null,null],[14,"read_u64!","","",null,null]],"paths":[[3,"File"],[3,"Section"],[4,"ParseError"],[3,"FileHeader"],[3,"ProgramHeader"],[3,"SectionHeader"],[3,"Symbol"],[3,"Class"],[3,"Data"],[3,"Version"],[3,"OSABI"],[3,"Type"],[3,"Machine"],[3,"ProgFlag"],[3,"ProgType"],[3,"SectionType"],[3,"SectionFlag"],[3,"SymbolType"],[3,"SymbolBind"],[3,"SymbolVis"],[8,"ReadExact"]]};
searchIndex['byteorder'] = {"items":[[4,"BigEndian","byteorder","Defines big-endian serialization.",null,null],[4,"LittleEndian","","Defines little-endian serialization.",null,null],[6,"NetworkEndian","","Defines network byte order serialization.",null,null],[6,"NativeEndian","","Defines system native-endian serialization.",null,null],[8,"ReadBytesExt","","Extends `Read` with methods for reading numbers. (For `std::io`.)",null,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[8,"WriteBytesExt","","Extends `Write` with methods for writing numbers. (For `std::io`.)",null,null],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}],[8,"ByteOrder","","ByteOrder describes types that can serialize integers as bytes.",null,null],[10,"read_u16","","Reads an unsigned 16 bit integer from `buf`.",2,null],[10,"read_u32","","Reads an unsigned 32 bit integer from `buf`.",2,null],[10,"read_u64","","Reads an unsigned 64 bit integer from `buf`.",2,null],[10,"read_uint","","Reads an unsigned n-bytes integer from `buf`.",2,null],[10,"write_u16","","Writes an unsigned 16 bit integer `n` to `buf`.",2,null],[10,"write_u32","","Writes an unsigned 32 bit integer `n` to `buf`.",2,null],[10,"write_u64","","Writes an unsigned 64 bit integer `n` to `buf`.",2,null],[10,"write_uint","","Writes an unsigned integer `n` to `buf` using only `nbytes`.",2,null],[11,"read_i16","","Reads a signed 16 bit integer from `buf`.",2,null],[11,"read_i32","","Reads a signed 32 bit integer from `buf`.",2,null],[11,"read_i64","","Reads a signed 64 bit integer from `buf`.",2,null],[11,"read_int","","Reads a signed n-bytes integer from `buf`.",2,null],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"write_i16","","Writes a signed 16 bit integer `n` to `buf`.",2,null],[11,"write_i32","","Writes a signed 32 bit integer `n` to `buf`.",2,null],[11,"write_i64","","Writes a signed 64 bit integer `n` to `buf`.",2,null],[11,"write_int","","Writes a signed integer `n` to `buf` using only `nbytes`.",2,null],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number.",2,null],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number.",2,null],[11,"read_u16","","",3,null],[11,"read_u32","","",3,null],[11,"read_u64","","",3,null],[11,"read_uint","","",3,null],[11,"write_u16","","",3,null],[11,"write_u32","","",3,null],[11,"write_u64","","",3,null],[11,"write_uint","","",3,null],[11,"read_u16","","",4,null],[11,"read_u32","","",4,null],[11,"read_u64","","",4,null],[11,"read_uint","","",4,null],[11,"write_u16","","",4,null],[11,"write_u32","","",4,null],[11,"write_u64","","",4,null],[11,"write_uint","","",4,null],[11,"read_u8","","Reads an unsigned 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i8","","Reads a signed 8 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u16","","Reads an unsigned 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i16","","Reads a signed 16 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u32","","Reads an unsigned 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i32","","Reads a signed 32 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_u64","","Reads an unsigned 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_i64","","Reads a signed 64 bit integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_uint","","Reads an unsigned n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_int","","Reads a signed n-bytes integer from the underlying reader.",0,{"inputs":[{"name":"readbytesext"},{"name":"usize"}],"output":{"name":"result"}}],[11,"read_f32","","Reads a IEEE754 single-precision (4 bytes) floating point number from\nthe underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"read_f64","","Reads a IEEE754 double-precision (8 bytes) floating point number from\nthe underlying reader.",0,{"inputs":[{"name":"readbytesext"}],"output":{"name":"result"}}],[11,"write_u8","","Writes an unsigned 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u8"}],"output":{"name":"result"}}],[11,"write_i8","","Writes a signed 8 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i8"}],"output":{"name":"result"}}],[11,"write_u16","","Writes an unsigned 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u16"}],"output":{"name":"result"}}],[11,"write_i16","","Writes a signed 16 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i16"}],"output":{"name":"result"}}],[11,"write_u32","","Writes an unsigned 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u32"}],"output":{"name":"result"}}],[11,"write_i32","","Writes a signed 32 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i32"}],"output":{"name":"result"}}],[11,"write_u64","","Writes an unsigned 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u64"}],"output":{"name":"result"}}],[11,"write_i64","","Writes a signed 64 bit integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i64"}],"output":{"name":"result"}}],[11,"write_uint","","Writes an unsigned n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"u64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_int","","Writes a signed n-bytes integer to the underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"i64"},{"name":"usize"}],"output":{"name":"result"}}],[11,"write_f32","","Writes a IEEE754 single-precision (4 bytes) floating point number to\nthe underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"f32"}],"output":{"name":"result"}}],[11,"write_f64","","Writes a IEEE754 double-precision (8 bytes) floating point number to\nthe underlying writer.",1,{"inputs":[{"name":"writebytesext"},{"name":"f64"}],"output":{"name":"result"}}]],"paths":[[8,"ReadBytesExt"],[8,"WriteBytesExt"],[8,"ByteOrder"],[4,"BigEndian"],[4,"LittleEndian"]]};
initSearch(searchIndex);
