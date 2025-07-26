module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern: /animate-float[1-4]/,
    },
  ],
  theme: {
    extend: {
      keyframes: {
        typingLoop: {
          '0%': { width: '0' },
          '40%': { width: '100%' },
          '60%': { width: '100%' },
          '100%': { width: '0' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        float1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(6px, -4px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-6px, 6px)' },
        },
        float3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(4px, 4px)' },
        },
        float4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-4px, -4px)' },
        },
      },
      animation: {
        typingLoop: 'typingLoop 3s steps(10, end) infinite',
        blink: 'blink 0.8s step-end infinite',
        float1: 'float1 4s ease-in-out infinite',
        float2: 'float2 5s ease-in-out infinite',
        float3: 'float3 6s ease-in-out infinite',
        float4: 'float4 3.5s ease-in-out infinite',
      },

    }
  }
}
