"use client";
import { useState } from "react";
import Image from "next/image";

export default function LanguageConverter() {
  const allLanguages = [
    "actionscript",
    "ada",
    "assembly",
    "c",
    "c++",
    "clojure",
    "cobol",
    "coffeescript",
    "cql",
    "crystal",
    "csharp",
    "dart",
    "elasticsearch",
    "elixir",
    "elm",
    "erlang",
    "fortran",
    "fsharp",
    "golang",
    "groovy",
    "haskell",
    "haxe",
    "infinity",
    "java",
    "javascript",
    "julia",
    "kotlin",
    "lisp",
    "lua",
    "matlab",
    "mongodb",
    "mysql",
    "objc",
    "ocaml",
    "pascal",
    "php",
    "postgresql",
    "pyspark",
    "python",
    "r",
    "racket",
    "redis",
    "ruby",
    "rust",
    "sas",
    "scala",
    "scheme",
    "shield-check",
    "sql",
    "swift",
    "tcl",
    "target",
    "typescript",
  ];

  const iconMap = {
  actionscript: "/codeimg/actionscript.svg",
  ada: "/codeimg/ada.svg",
  assembly: "/codeimg/assembly.svg",
  c: "/codeimg/c.svg",
  "c++": "/codeimg/c++.svg",
  clojure: "/codeimg/clojure.svg",
  cobol: "/codeimg/cobol.svg",
  coffeescript: "/codeimg/coffeescript.svg",
  cql: "/codeimg/cql.svg",
  crystal: "/codeimg/crystal.svg",
  csharp: "/codeimg/csharp.svg",
  dart: "/codeimg/dart.svg",
  elasticsearch: "/codeimg/elasticsearch.svg",
  elixir: "/codeimg/elixir.svg",
  elm: "/codeimg/elm.svg",
  erlang: "/codeimg/erlang.svg",
  fortran: "/codeimg/fortran.svg",
  fsharp: "/codeimg/fsharp.svg",
  golang: "/codeimg/golang.svg",
  groovy: "/codeimg/groovy.svg",
  haskell: "/codeimg/haskell.svg",
  haxe: "/codeimg/haxe.svg",
  infinity: "/codeimg/infinity.svg",
  java: "/codeimg/java.svg",
  javascript: "/codeimg/javascript.svg",
  julia: "/codeimg/julia.svg",
  kotlin: "/codeimg/kotlin.svg",
  lisp: "/codeimg/lisp.svg",
  lua: "/codeimg/lua.svg",
  matlab: "/codeimg/matlab.svg",
  mongodb: "/codeimg/mongodb.svg",
  mysql: "/codeimg/mysql.svg",
  objc: "/codeimg/objc.svg",
  ocaml: "/codeimg/ocaml.svg",
  pascal: "/codeimg/pascal.svg",
  php: "/codeimg/php.svg",
  postgresql: "/codeimg/postgresql.svg",
  pyspark: "/codeimg/pyspark.svg",
  python: "/codeimg/python.svg",
  r: "/codeimg/r.svg",
  racket: "/codeimg/racket.svg",
  redis: "/codeimg/redis.svg",
  ruby: "/codeimg/ruby.svg",
  rust: "/codeimg/rust.svg",
  sas: "/codeimg/sas.svg",
  scala: "/codeimg/scala.svg",
  scheme: "/codeimg/scheme.svg",
  "shield-check": "/codeimg/shield-check.svg",
  sql: "/codeimg/sql.svg",
  swift: "/codeimg/swift.svg",
  tcl: "/codeimg/tcl.svg",
  target: "/codeimg/target.svg",
  typescript: "/codeimg/typescript.svg",
};


  const [lang1, setLang1] = useState("javascript");
  const [lang2, setLang2] = useState("python");

  const handleLang1Change = (e) => {
    const selected = e.target.value;
    setLang1(selected);
    if (selected === lang2) {
      const fallback = allLanguages.find((l) => l !== selected) || "";
      setLang2(fallback);
    }
  };

  const filteredLang2 = allLanguages.filter((lang) => lang !== lang1);
  const getIcon = (lang) =>
    iconMap[lang.toLowerCase()] || "/codeimg/default.svg";

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center px-4 py-8">
      <h1 className="text-pink-500 text-4xl font-bold mb-1">Online!</h1>
      <p className="text-white text-lg font-semibold mb-8">
        “{lang1}” to “{lang2}” converter
      </p>

      <div className="flex flex-row items-center gap-6">
        {/* Source Language */}
        <div className="flex items-center gap-2">
          <Image
            src={getIcon(lang1)}
            alt={lang1}
            width={36}
            height={36}
            className="rounded"
          />
          <select
            value={lang1}
            onChange={handleLang1Change}
            className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none"
          >
            {allLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Target Language */}
        <div className="flex items-center gap-2">
          <Image
            src={getIcon(lang2)}
            alt={lang2}
            width={36}
            height={36}
            className="rounded"
          />
          <select
            value={lang2}
            onChange={(e) => setLang2(e.target.value)}
            className="bg-zinc-800 text-white px-4 py-2 rounded focus:outline-none"
          >
            {filteredLang2.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
