"use client";
import { useState } from "react";

export default function PrecificacaoCroche() {
  const [materiais, setMateriais] = useState(0);
  const [tempo, setTempo] = useState(0);
  const [valorHora, setValorHora] = useState(0);
  const [extras, setExtras] = useState(0);
  const [lucro, setLucro] = useState(50);
  const [precoFinal, setPrecoFinal] = useState(0);

  const calcularPreco = () => {
    const custoTotal =
      parseFloat(materiais.toString()) +
      parseFloat(tempo.toString()) * parseFloat(valorHora.toString()) +
      parseFloat(extras.toString());
    const precoComLucro = custoTotal * (1 + lucro / 100);
    setPrecoFinal(parseFloat(precoComLucro.toFixed(2)));
  };

  return (
    <main className="sm:ml-14 p-4">
      <section className="m-4 flex flex-col">
        <div className="h-full flex-1 flex-col md:p-8">
          <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4">
            <h1 className="text-2xl font-bold text-center">
              Calculadora de Precificação
            </h1>

            <div className="space-y-2">
              <label className="block font-medium">
                💰 Custo dos Materiais (R$)
              </label>
              <input
                type="number"
                value={materiais}
                onChange={(e) =>
                  setMateriais(parseFloat(e.target.value || "0"))
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">
                ⏳ Tempo de Produção (horas)
              </label>
              <input
                type="number"
                value={tempo}
                onChange={(e) => setTempo(parseFloat(e.target.value || "0"))}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">
                💸 Valor da Hora de Trabalho (R$)
              </label>
              <input
                type="number"
                value={valorHora}
                onChange={(e) =>
                  setValorHora(parseFloat(e.target.value || "0"))
                }
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">📦 Custos Extras (R$)</label>
              <input
                type="number"
                value={extras}
                onChange={(e) => setExtras(parseFloat(e.target.value || "0"))}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <div className="space-y-2">
              <label className="block font-medium">
                📊 Margem de Lucro (%)
              </label>
              <input
                type="number"
                value={lucro}
                onChange={(e) => setLucro(parseFloat(e.target.value || "0"))}
                className="w-full p-2 border rounded-lg"
              />
            </div>

            <button
              onClick={calcularPreco}
              className="w-full bg-primary-foreground text-white p-3 rounded-lg font-bold"
            >
              Calcular Preço
            </button>

            {precoFinal > 0 && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 text-lg font-semibold text-center rounded-lg">
                💰 Preço Final Sugerido: R$ {precoFinal}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
