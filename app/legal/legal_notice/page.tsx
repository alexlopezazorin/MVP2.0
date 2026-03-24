export default function LegalNoticePage() {
  return (
    <div className="font-sans m-10 max-w-3xl leading-relaxed">

      <h1 className="mb-5 text-3xl font-bold">Aviso Legal</h1>

      <h2 className="mt-6 text-xl font-semibold">1. Titular del sitio web</h2>
      <p>
        <strong>Responsable:</strong> Alejandro Lopez Azorin<br />
        <strong>Email:</strong> alexlopezazorin@gmail.com<br />
        <strong>Dirección:</strong> C. Tesifonte Gallego, 02002, Albacete, Spain<br />
      </p>

      <h2 className="mt-6 text-xl font-semibold">2. Objeto</h2>
      <p>Este sitio web ofrece un sistema de aprendizaje y práctica de inglés mediante un agente conversacional de Inteligencia Artificial.</p>

      <h2 className="mt-6 text-xl font-semibold">3. Condiciones de uso</h2>
      <p>El usuario se compromete a utilizar el sitio web respetando la ley, la buena fe y la presente información legal.</p>

      <h2 className="mt-6 text-xl font-semibold">4. Propiedad intelectual</h2>
      <p>Los contenidos, software, marcas y diseño de esta web son propiedad del titular o cuentan con las correspondientes licencias de uso.</p>

      <h2 className="mt-6 text-xl font-semibold">5. Responsabilidad</h2>
      <p>No nos hacemos responsables del uso indebido que los usuarios hagan del sistema. El agente de IA no sustituye asesoramiento profesional humano.</p>

      <h2 className="mt-6 text-xl font-semibold">6. Enlaces externos</h2>
      <p>Este sitio puede contener enlaces a terceros. No nos responsabilizamos de sus contenidos.</p>

      <h2 className="mt-6 text-xl font-semibold">7. Protección de datos</h2>
      <p>
        El uso de este sitio implica la aceptación de la Política de Privacidad, disponible en{" "}
        <a 
          href="https://english-ai-coach.vercel.app/legal/privacy_policy.html"
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://english-ai-coach.vercel.app/legal/privacy_policy.html
        </a>
      </p>

    </div>
  );
}