<template>
    <div :class="{ 'ml-72': isSidebarVisible }">
      <div class="max-w-2xl my-4 mx-auto p-4 rounded-md shadow-md bg-[#baf77c]">
    <h2 class="text-2xl font-semibold mb-4">Contatos</h2>

    <div class="contato mb-8 p-6 bg-white rounded-md shadow-md">
      <p class="mb-4">
        <strong class="text-blue-600">Pró-Reitoria de Assuntos Estudantis (Proest):</strong><br />
        <strong>E-mail:</strong> proest@uft.edu.br<br />
        <strong>Telefone:</strong> (63) 3229-4179<br />
        <strong>Site:</strong> <a href="https://www.uft.edu.br/ru" target="_blank" rel="noopener noreferrer">www.uft.edu.br/ru</a>
      </p>
      <p>
        <strong class="text-blue-600">Endereço (Coordenação):</strong><br />
        Universidade Federal do Tocantins (UFT) | Câmpus de Palmas<br />
        Avenida NS 15, Quadra 109 Norte | Plano Diretor Norte<br />
        Sala 102, Bloco IV, Proest<br />
        Palmas/TO | 77001-090
      </p>
    </div>

    <div class="contato mb-8 p-6 bg-white rounded-md shadow-md">
      <p class="mb-4">
        <strong class="text-blue-600">RU do Câmpus de Palmas:</strong><br />
        <strong>Telefones:</strong> (63) 3229-4263 | (63) 3229-4363<br />
        <strong>E-mail:</strong> <a href="mailto:rupalmas@uft.edu.br">rupalmas@uft.edu.br</a>
      </p>
      <p class="mb-4">
        <strong class="text-blue-600">RU do Câmpus de Araguaína:</strong><br />
        <strong>Telefone:</strong> (63) 2112-2150<br />
        <strong>E-mail:</strong> <a href="mailto:ruaraguaina@uft.edu.br">ruaraguaina@uft.edu.br</a>
      </p>
      <p>
        <strong class="text-blue-600">RU do Câmpus de Gurupi:</strong><br />
        <strong>Telefone:</strong> (63) 3312-2575<br />
        <strong>E-mail:</strong> <a href="mailto:rugurupi@uft.edu.br">rugurupi@uft.edu.br</a>
      </p>
    </div>
  </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isSidebarVisible: Boolean,
    },
    data() {
      return {
        refecao: [
          { label: "Almoço", icon: "pi pi-home" },
          { label: "Janta", icon: "pi pi-chart-line" },
        ],
      };
    },
  };
  </script>
  