---
name: I_TOBEREVERSEDPAYMENTDOCUMENT
description: Payment document to be reversed
app_component: FIN-FSCM-BNK-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value
semantic_en: Payment document to be reversed
tags:
  - FIN
  - component:FIN-FSCM-BNK-2CL
  - document
  - FIN-FSCM
  - FIN-FSCM-BNK
  - FIN-FSCM-BNK-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_TOBEREVERSEDPAYMENTDOCUMENT

**Payment document to be reversed**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-BNK-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TOBEREVERSEDPAYMENTDOCUMENT')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessTransactionDocUUID` | `RAW(16)` | Globally Unique Identifier |
| `PaymentRunDate` | `DATS(8)` | Date on Which the Program Is to Be Run |
| `PaymentRunIdentification` | `CHAR(6)` | Additional Identification |
| `CompanyCode` | `CHAR(4)` | Paying Company Code |
| `PaymentDocument` | `CHAR(10)` | Document Number of the Payment Document |
| `PaymentOrder` | `CHAR(10)` | Payment Order |
| `PaymentBatch` | `NUMC(10)` | Batch Identification Number |
