---
name: I_PAYMENTBYBANKCUBE
description: This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?
tags:
  - FIN
  - bo:plant
  - component:FIN-FSCM-CLM-BAM-2CL
  - FIN-FSCM
  - FIN-FSCM-CLM
  - FIN-FSCM-CLM-BAM
  - FIN-FSCM-CLM-BAM-2CL
  - interface-view
  - lob:finance
  - payment
  - metadata-only
---
# I_PAYMENTBYBANKCUBE

**This CDS view provides the prerequisites for answering the following business questions: What's the total incoming payment amount per bank in a certain period? What's the total outgoing payment amount per bank in a certain period? What are the banks that have the most incoming/outgoing payments in a certain period?**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PAYMENTBYBANKCUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `TransactionDate` | `DATS(8)` | Transaction Date |
| `Bank` | `CHAR(15)` | Bank Key |
| `BankCountry` | `CHAR(3)` | Bank Country/Region Key |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `InAmountInDisplayCurrency` | `CURR(23)` |  |
| `OutAmountInDisplayCurrency` | `CURR(23)` |  |
| `AmountInDisplayCurrency` | `CURR(23)` |  |
| `CreditRating` | `CHAR(3)` | Rating |
| `DisplayCurrency` | `CUKY(5)` |  |
