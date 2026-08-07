---
name: I_BR_NFPHARMACEUTICAL
description: This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value
semantic_en: This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.
tags:
  - FI
  - bo:plant
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
  - material
  - metadata-only
---
# I_BR_NFPHARMACEUTICAL

**This CDS view provides the prerequisites for answering business questions about relevant aspects of medicines and pharmaceutical raw material.**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFPHARMACEUTICAL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BR_NotaFiscal` |  | |  |  | `NUMC(10)` | Document Number |
| `BR_NotaFiscalItem` |  | |  |  | `NUMC(6)` | Document Item Number |
| `BR_NFePharmaMedicineLineID` |  | |  |  | `NUMC(4)` | Counter |
| `MedicineBatch` |  | |  |  | `CHAR(20)` | Batch Number of Medicines and Pharmaceutical Raw Materials |
| `MedicineQuantity` |  | |  |  | `DEC(11)` | Quantity of Medicines and Pharmaceutical Raw Materials |
| `MedicineManufacturingDate` |  | |  |  | `DATS(8)` | Manufacturing Date |
| `MedicineExpiringDate` |  | |  |  | `DATS(8)` | Expiring Date of Medicines and Pharmaceutical Raw Materials |
| `ConsumerMaxPriceMedicineAmount` |  | |  |  | `DEC(15)` | Consumer Maximum Price |
| `SalesDocumentCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base unit of measure |
