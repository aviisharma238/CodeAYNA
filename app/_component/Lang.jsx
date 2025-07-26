"user client";
import React from 'react';

const ConverterGrid = () => {
  const languages = [
    'actionscript', 'ada', 'assembly', 'c', 'c++', 'clojure',
    'cobol', 'coffeescript', 'cql', 'crystal', 'csharp', 'dart',
    'elasticsearch', 'elixir', 'elm', 'erlang', 'fortran', 'fsharp',
    'golang', 'groovy', 'haskell', 'haxe', 'infinity', 'java',
    'javascript', 'julia', 'kotlin', 'lisp', 'lua', 'matlab',
    'mongodb', 'mysql', 'objc', 'ocaml', 'pascal', 'php',
    'postgresql', 'pyspark', 'python', 'r', 'racket', 'redis',
    'ruby', 'rust', 'sas', 'scala', 'scheme', 'shield-check',
    'sql', 'swift', 'tcl', 'target', 'typescript'
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <h2 className="text-[#ff0080] text-2xl font-bold mb-8 text-center">
        Try our ready-to-use converters using the links below
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full max-w-6xl">
        {languages.map((lang, index) => (
          <a
            key={index}
            href={`/convert-from/${lang}`}
            className="bg-gray-300 rounded-xl w-60 h-20 flex items-center justify-start gap-3 px-5 py-4 font-semibold text-black hover:bg-gray-400 transition"
          >
            <img
              src={`/codeimg/${lang}.svg`}
              alt={`${lang} logo`}
              className="w-6 h-6"
            />
            <span className="truncate">
              Convert from {lang === 'cplus' ? 'C++' : lang.toUpperCase()}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConverterGrid;
