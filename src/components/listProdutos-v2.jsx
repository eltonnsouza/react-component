import React from "react";

export function ListProdutosV2( { produtos = [] } ) {
  return (
    <div>
      <h1>Listar</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

        { produtos.map((produto, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#222",
              display: "flex",
              justifyContent: "space-between",
              padding: "10px 30px",
              color: "#fff",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          >
            <p>{produto.nome}</p>
            <p>R$ {produto.preco.toFixed(2).replace(".", ",")}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
