export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans m-10 max-w-3xl leading-relaxed">
      
      <h1 className="mb-5 text-3xl font-bold">Política de Privacidad</h1>

      <p>
        Esta Política de Privacidad explica cómo se recopilan, utilizan y protegen los datos personales cuando utilizas esta plataforma de aprendizaje de inglés mediante Inteligencia Artificial.
      </p>

      <h2 className="mt-6 text-xl font-semibold">1. Responsable del tratamiento</h2>
      <p>
        <strong>Responsable:</strong> Alejandro Lopez Azorin<br />
        <strong>Contacto:</strong> alexlopezazorin@gmail.com<br />
        <strong>Dirección:</strong> C. Tesifonte Gallego, 02002, Albacete, Spain
      </p>

      <h2 className="mt-6 text-xl font-semibold">2. Datos personales que recopilamos</h2>
      <p>Podemos recopilar los siguientes datos:</p>
      <ul className="list-disc ml-6">
        <li>Correo electrónico</li>
        <li>Nombre y apellidos</li>
        <li>Nivel de inglés</li>
        <li>Datos de uso de la plataforma</li>
        <li>Grabaciones de voz y sus transcripciones</li>
        <li>Evaluaciones automáticas generadas por IA</li>
        <li>Información técnica básica (IP, tipo de dispositivo, fecha/hora)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">3. Finalidades del tratamiento</h2>
      <p>Tratamos los datos para:</p>
      <ul className="list-disc ml-6">
        <li>Ofrecer sesiones de conversación de inglés con IA</li>
        <li>Generar evaluaciones automáticas del rendimiento</li>
        <li>Mostrar estadísticas al profesor o administrador autorizado</li>
        <li>Gestionar cuentas de usuario y autenticación</li>
        <li>Mejorar el funcionamiento del servicio</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">4. Base legal del tratamiento</h2>
      <ul className="list-disc ml-6">
        <li><strong>Ejecución de un contrato</strong> (prestación del servicio educativo)</li>
        <li><strong>Consentimiento explícito</strong> para grabación de voz y análisis por IA</li>
        <li><strong>Interés legítimo</strong> para garantizar seguridad y prevención de abusos</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">5. Tecnologías y proveedores externos</h2>
      <p>Utilizamos servicios externos para alojar datos y procesar voz/IA:</p>
      <ul className="list-disc ml-6">
        <li>Vercel (hosting web)</li>
        <li>Supabase (base de datos y autenticación)</li>
        <li>Vapi (gestión de llamadas de voz)</li>
        <li>11Labs (síntesis de voz)</li>
        <li>OpenAI (procesamiento y análisis del lenguaje)</li>
        <li>Daily (infraestructura de audio en tiempo real)</li>
      </ul>

      <h2 className="mt-6 text-xl font-semibold">6. Retención de datos</h2>
      <p>
        Los datos se conservan mientras tengas una cuenta activa o durante el tiempo necesario para cumplir obligaciones legales.
      </p>

      <h2 className="mt-6 text-xl font-semibold">7. Derechos del usuario</h2>
      <p>Puedes ejercer los siguientes derechos:</p>
      <ul className="list-disc ml-6">
        <li>Acceso, rectificación y eliminación de tus datos</li>
        <li>Limitación u oposición al tratamiento</li>
        <li>Portabilidad</li>
        <li>Retirar tu consentimiento cuando quieras</li>
      </ul>

      <p>
        Para ejercerlos, contacta en: <strong>alexlopezazorin@gmail.com</strong>.
      </p>

      <h2 className="mt-6 text-xl font-semibold">8. Seguridad</h2>
      <p>
        Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos.
      </p>

      <h2 className="mt-6 text-xl font-semibold">9. Cambios en esta Política</h2>
      <p>
        Nos reservamos el derecho a actualizar esta Política de Privacidad. Las modificaciones se publicarán en esta misma página.
      </p>

    </div>
  );
}