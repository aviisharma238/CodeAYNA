"use client";

import { useState, useRef } from "react";
import { FiUpload, FiDownload, FiCopy } from "react-icons/fi";
import { Repeat } from "lucide-react";
import Image from "next/image";
import Editor from "@monaco-editor/react";

export default function CodeConverterUI() {
  const [inputCode, setInputCode] = useState("");
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [outputCode, setOutputCode] = useState("");

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

  const [sourceLang, setSourceLang] = useState("javascript");
  const [targetLang, setTargetLang] = useState("python");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setInputCode(event.target.result);
    };
    reader.readAsText(file);
  };

  const handleDownload = () => {
    const blob = new Blob([outputCode], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${targetLang}_output.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  const handleConvert = async () => {
  setLoading(true);
  setOutputCode(""); // optional: reset output

  try {
    const res = await fetch("/api/convert", {
      method: "POST",
      body: JSON.stringify({
        sourceLang,
        targetLang,
        inputCode,
      }),
    });

    const data = await res.json();

    const cleaned = data.convertedCode
      ?.replace(/^```[\s\S]*?\n/, "") // remove opening ```
      .replace(/```$/, "") // remove closing ```
      .trim();

    setOutputCode(cleaned || "");
  } catch (error) {
    console.error("Conversion failed:", error);
    setOutputCode("// Failed to convert");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-black text-white px-4 py-10 flex flex-col items-center">
      <h1 className="text-5xl font-bold text-pink-500 mb-1">Online!</h1>
      <h2 className="text-2xl font-semibold text-center mb-8">
        {sourceLang} to {targetLang} converter
      </h2>

      {/* Language Selector */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-8">
        <div className="flex items-center gap-3">
          <Image
            src={iconMap[sourceLang]}
            alt="Source Icon"
            width={40}
            height={40}
          />
          <select
            className="bg-zinc-900 text-white px-4 py-2 rounded-md"
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
          >
            {allLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={() => {
            const temp = sourceLang;
            setSourceLang(targetLang);
            setTargetLang(temp);
          }}
          className="p-2 bg-pink-600 hover:bg-pink-700 rounded-full shadow transition hover:rotate-180 duration-300"
        >
          <Repeat size={18} />
        </button>

        <div className="flex items-center gap-3">
          <select
            className="bg-zinc-900 text-white px-4 py-2 rounded-md"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
          >
            {allLanguages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
          <Image
            src={iconMap[targetLang]}
            alt="Target Icon"
            width={40}
            height={40}
          />
        </div>
      </div>

      {/* Input and Output Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        {/* Input Box */}
        <div className="bg-zinc-200 text-black rounded-xl shadow-md overflow-hidden">
          <div
            className="bg-zinc-300 px-4 py-2 text-sm flex items-center gap-2 cursor-pointer"
            onClick={() => fileInputRef.current.click()}
          >
            <FiUpload />
            <span>
              Click to select or drop your input code file here.
              <br />
              You can also type the input code below.
            </span>
            <input
              ref={fileInputRef}
              type="file"
              accept=".txt,.js,.py,.java,.cpp"
              className="hidden"
              onChange={handleFileUpload}
            />
          </div>
          <Editor
            height="300px"
            defaultLanguage={sourceLang}
            value={inputCode}
            theme="light" // use 'light' or 'vs-light'
            onChange={(value) => setInputCode(value || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false }, // hides the vertical preview panel
              scrollBeyondLastLine: false,
              scrollbar: {
                vertical: "visible", // visible but slim
                horizontal: "visible",
                verticalScrollbarSize: 6,
                horizontalScrollbarSize: 6,
                handleMouseWheel: true,
                useShadows: false,
              },
              lineNumbers: "on",
              wordWrap: "on", // or "bounded"
            }}
          />
        </div>

        {/* Output Box */}
        {/* Output Box */}
<div className="bg-zinc-200 text-black rounded-xl shadow-md relative overflow-hidden min-h-[300px]">
  <button
    onClick={handleDownload}
    className="bg-zinc-300 px-4 w-full py-2 text-sm flex items-center gap-2"
    disabled={loading}
  >
    <FiDownload />
    <span>
      Download your {targetLang} file in just one click.
      <br />
      You can also copy code below.
    </span>
  </button>

  {loading ? (
    <div className="flex justify-center items-center h-[260px]">
      <div className="flex flex-col items-center text-pink-600">
        <div className="w-6 h-6 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-medium">Converting your code…</p>
      </div>
    </div>
  ) : (
    <>
      <Editor
        height="260px"
        defaultLanguage={targetLang}
        value={outputCode}
        theme="light"
        options={{
          readOnly: true,
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: "visible",
            horizontal: "visible",
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
            handleMouseWheel: true,
            useShadows: false,
          },
          lineNumbers: "on",
          wordWrap: "on",
        }}
      />
      <button
        className="absolute bottom-2 right-2 text-gray-600 hover:text-black"
        onClick={() => navigator.clipboard.writeText(outputCode)}
      >
        <FiCopy size={18} />
      </button>
    </>
  )}
</div>

      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 mt-10">
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md font-semibold"
          onClick={handleConvert}
        >
          Convert
        </button>

        <button
          className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-md font-semibold"
          onClick={() => {
            setInputCode("");
            setOutputCode("");
          }}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}