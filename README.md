<h3><i> Entregas do desafio técnico QA - Tinnova </i></h3>
<ul>
  <li>Analisado e documentado os critérios de aceite. ✅</li>
  <li>Realizados testes exploratórios no sistema. ✅</li>
  <li>Analisado e documentado em duas tabelas os casos de testes encontrados. ✅</li>
  <li>Realizados os testes manuais dos casos de testes. ✅</li>
  <li>Criadas automações de testes (com Cypress) dos casos que estão com o "<strong>Status</strong>" igual a "<strong>Sucesso</strong>" na documentação abaixo. ✅</li>
  <li>Relatados pontos de melhorias a serem feitos no sistema. ✅</li>
</ul>

<h3><i> Análise de requisitos/critérios de aceite </i></h3>
<ul>
  <li>Campo "<strong>Nome completo</strong>" deve ser alfanumérico. 🎯</li>
  <li>Campo "<strong>E-mail</strong>" deve ser alfanumérico. 🎯</li>
  <li>Campo "<strong>CPF</strong>" deve ser numérico. 🎯</li>
  <li>Campo "<strong>Telefone</strong>" deve ser numérico. 🎯</li>
  <li>Todos os campos devem ser obrigatórios o preenchimento. 🎯</li>
</ul>

<h3><i> Pontos de melhorias </i></h3>
<ul>
  <li>Sempre redirecionar o usuário para a listagem de pessoas cadastradas. 📈</li>
  <li>Adicionar tooltips nos botões do sistema, como por exemplo o de consultar/editar/excluir uma pessoa. 📈</li>
  <li>Adicionar a propriedade <strong>id</strong> ou <strong>data-test</strong> nos elementos. 📈</li>
  <li>Correção dos pontos de falhas informados nas tabelas anteriores. 📈</li>
</ul>

<h3><i> Casos de testes </i></h3>
<table>
  <tr>
    <td colspan="4" align="center"><strong>Casos de testes críticos/Smoke testing</strong></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><strong>Descrição</strong></td>
    <td colspan="2" align="center"><strong>Resultado</strong></td>
  </tr>
  <tr>
    <td align="center"><strong>Nº</strong></td>
    <td align="center"><strong>BDD: Dado, Quando, Então</strong></td>
    <td align="center"><strong>Status</strong></td>
    <td align="center"><strong>Motivo da falha</strong></td>
  </tr>
  <tr>
    <td align="center">01</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E após ser redirecionado para a página de cadastro digita um nome válido;</li>
            <li>E digita um e-mail válido;</li>
            <li>E digita um CPF válido;</li>
            <li>E digita um telefone válido;</li>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema cadastra a nova pessoa e redireciona o usuário para a listagem de pessoas cadastradas.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">02</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>Quando o usuário clica no botão "<strong>Consultar</strong>" em uma pessoa cadastrada.</li>
        <li>Então o sistema redireciona o usuário para a página com os detalhes da pessoa.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">03</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Editar</strong>" em uma pessoa cadastrada.
          <ul>
            <li>E após ser redirecionado para a página de detalhes digita um nome válido;</li>
            <li>E digita um e-mail válido;</li>
            <li>E digita um CPF válido;</li>
            <li>E digita um telefone válido;</li>
            <li>E clica no botão "<strong>ATUALIZAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema atualiza os dados da pessoa e redireciona o usuário para a listagem de pessoas cadastradas.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">04</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Excluir</strong>" em uma pessoa cadastrada.
          <ul>
            <li>E clica no botão "<strong>Sim</strong>" na confirmação de exclusão.</li>
          </ul>
        </li>
        <li>Então o sistema exclui a pessoa e redireciona o usuário para a página inicial.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
</table>

<br />

<table>
  <tr>
    <td colspan="4" align="center"><strong>Casos de testes alternativos/exploratórios/negativos</strong></td>
  </tr>
  <tr>
    <td colspan="2" align="center"><strong>Descrição</strong></td>
    <td colspan="2" align="center"><strong>Resultado</strong></td>
  </tr>
  <tr>
    <td align="center"><strong>Nº</strong></td>
    <td align="center"><strong>BDD: Dado, Quando, Então</strong></td>
    <td align="center"><strong>Status</strong></td>
    <td align="center"><strong>Motivo da falha</strong></td>
  </tr>
  <tr>
    <td align="center">01</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema não cadastra uma nova pessoa e mostra uma mensagem de campos obrigatórios.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">02</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E após ser redirecionado para a página de cadastro digita um nome inválido (por exemplo deixar em branco);</li>
            <li>E digita um e-mail válido;</li>
            <li>E digita um CPF válido;</li>
            <li>E digita um telefone válido;</li>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema não cadastra uma nova pessoa e mostra uma mensagem de campos obrigatórios.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">03</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E após ser redirecionado para a página de cadastro digita um nome válido;</li>
            <li>E digita um e-mail inválido (por exemplo deixar em branco);</li>
            <li>E digita um CPF válido;</li>
            <li>E digita um telefone válido;</li>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema não cadastra uma nova pessoa e mostra uma mensagem de campos obrigatórios.</li>
      </ul>
    </td>
    <td>Falha</td>
    <td>O sistema está mostrando a mensagem de campos obrigatórios porém faz o cadastro mesmo sem o preenchimento válido.</td>
  </tr>
  <tr>
    <td align="center">04</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E após ser redirecionado para a página de cadastro digita um nome válido;</li>
            <li>E digita um e-mail válido;</li>
            <li>E digita um CPF inválido (por exemplo deixar em branco);</li>
            <li>E digita um telefone válido;</li>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema não cadastra uma nova pessoa e mostra uma mensagem de campos obrigatórios.</li>
      </ul>
    </td>
    <td>Falha</td>
    <td>O sistema está mostrando a mensagem de campos obrigatórios porém faz o cadastro mesmo sem o preenchimento válido.</td>
  </tr>
  <tr>
    <td align="center">05</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Adicionar</strong>".
          <ul>
            <li>E após ser redirecionado para a página de cadastro digita um nome válido;</li>
            <li>E digita um e-mail válido;</li>
            <li>E digita um CPF válido;</li>
            <li>E digita um telefone inválido (por exemplo deixar em branco);</li>
            <li>E clica no botão "<strong>GUARDAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema não cadastra uma nova pessoa e mostra uma mensagem de campos obrigatórios.</li>
      </ul>
    </td>
    <td>Falha</td>
    <td>O sistema está mostrando a mensagem de campos obrigatórios porém faz o cadastro mesmo sem o preenchimento válido.</td>
  </tr>
  <tr>
    <td align="center">06</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>Quando o usuário clica no botão "<strong>Consultar</strong>" em uma pessoa cadastrada.</li>
        <li>Então o sistema redireciona o usuário para a página com os detalhes da pessoa e não deixa editar as informações.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">07</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Consultar</strong>" em uma pessoa cadastrada.
          <ul>
            <li>E após ser redirecionado para a página de detalhes clica no botão "<strong>VOLTAR</strong>".</li>
          </ul>
        </li>
        <li>Então o sistema redireciona o usuário para a listagem de pessoas cadastradas.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">08</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>
          Quando o usuário clica no botão "<strong>Excluir</strong>" em uma pessoa cadastrada.
          <ul>
            <li>E clica no botão "<strong>Não</strong>" na confirmação de exclusão.</li>
          </ul>
        </li>
        <li>Então o sistema fecha a janela de confirmação e não exclui o cadastro da pessoa.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
  <tr>
    <td align="center">09</td>
    <td>
      <ul>
        <li>Dado que o usuário acessou a listagem de pessoas cadastradas.</li>
        <li>Quando o usuário clica no botão "<strong>Sair</strong>".</li>
        <li>Então o sistema redireciona o usuário para a tela inicial.</li>
      </ul>
    </td>
    <td>Sucesso</td>
    <td></td>
  </tr>
</table>
