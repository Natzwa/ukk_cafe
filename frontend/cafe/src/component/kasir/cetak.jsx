import React, { useRef } from "react";
import "./cetak.css";
import logoImage from "./logocetak.png";

export default function Cetak({ data }) {
  const printWindow = useRef(null);
  console.log(data);
  const handleCetak = () => {
    // Buka jendela cetak
    const printWindowRef = window.open("", "", "fullscreen=yes");
    printWindowRef.document.open();

    // Kode HTML untuk mencetak
    const htmlContent = `
      <html>
        <head>
          <style>
          body {
            white-space: pre-wrap;
          }
            table {
              width: 100%;
              border-collapse: collapse;
            }

            table, th, td {
              border: 1px solid black;
            }

            th, td {
              padding: 8px;
              text-align: left;
            }

            .print-content {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }

            .logo {
              display: none;
              width: 100px;
              height: 100px;
            }

            h4, p {
              margin: 9px;
            }
          </style>
        </head>
        <body>
          <div class="print-content">
            <h1>Animal Crossing Cafe</h1>
            <img src="${logoImage}" alt="Logo" class="logo" />
            <table>
              <tr>
                <th>Nama Pelanggan</th>
                <th>Nomor Meja</th>
                <th>Menu</th>
                <th>Harga</th>
                <th>Total Harga</th>
                <th>Status</th>
              </tr>
              <tr>
                <td>${data.nama_pelanggan}</td>
                <td>${data.meja.nomor_meja}</td>
                <td>${data.detail_transaksis.map((val) => {
                  return val.menu.nama_menu;
                }).join("<br />")}</td>
                <td>
                  ${data.detail_transaksis.map((val) => {
                    return val.menu.harga;
                  }).join("<br />")}
                </td>
                <td>${data.total}</td>
                <td>${data.status}</td>
               
              </tr>
            </table>
            <br>
            <br>
            <br>
            <h4>Enjoy Your Food!</h4>
            <p>=======================================</p>
          </div>
        </body>
      </html>        
    `;

    // Menulis konten HTML ke jendela cetak
    printWindowRef.document.write(htmlContent);
    printWindowRef.document.close();

    // Menampilkan gambar saat mencetak
    printWindowRef.document.querySelector(".logo").style.display = "block";

    // Melakukan pencetakan
    // printWindowRef.print();
    // printWindowRef.close();
  };

  return (
    <button
      onClick={handleCetak}
      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
    >
      Cetak
    </button>
  );
}
