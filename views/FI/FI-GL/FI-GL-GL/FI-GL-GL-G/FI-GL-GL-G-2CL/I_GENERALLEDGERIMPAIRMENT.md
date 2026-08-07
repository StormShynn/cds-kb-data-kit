---
name: I_GENERALLEDGERIMPAIRMENT
description: "General Ledger Impairment - Cube"
app_component: FI-GL-GL-G-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value
semantic_en: "General Ledger Impairment - Cube"
tags:
  - FI
  - component:FI-GL-GL-G-2CL
  - FI-GL
  - FI-GL-GL
  - FI-GL-GL-G
  - FI-GL-GL-G-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_GENERALLEDGERIMPAIRMENT

**General Ledger Impairment - Cube**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-G-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_GENERALLEDGERIMPAIRMENT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Ledger` |  | |  |  | `CHAR(2)` | Ledger in General Ledger Accounting |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditRiskClass` |  | |  |  | `CHAR(3)` | Risk Class |
| `GeneralLedgerAgingIncrement` |  | |  |  | `CHAR(15)` | Aging Increment |
| `GLAccount` |  | |  |  | `CHAR(10)` | Account Number |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `FunctionalArea` |  | |  |  | `CHAR(16)` | Functional Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Segment` |  | |  |  | `CHAR(10)` | Segment for Segmental Reporting |
| `PartnerCostCenter` |  | |  |  | `CHAR(10)` | Sender Cost Center |
| `PartnerProfitCenter` |  | |  |  | `CHAR(10)` | Partner Profit Center |
| `PartnerFunctionalArea` |  | |  |  | `CHAR(16)` | Partner Functional Area |
| `PartnerBusinessArea` |  | |  |  | `CHAR(4)` | Trading Partner's Business Area |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `PartnerSegment` |  | |  |  | `CHAR(10)` | Partner Segment for Segmental Reporting |
| `LossAllowanceKeyFigure` |  | |  |  | `CHAR(30)` | Key Figure |
| `LossAllowanceSortSequenceValue` |  | |  |  | `NUMC(3)` | Sorting Order of Key Figures in a Layout |
| `SubLedgerAcctLineItemType` |  | |  |  | `NUMC(5)` | Subledger-Specific Line Item Type |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `AmountInDisplayCurrency` |  | |  |  | `CURR(23)` |  |
