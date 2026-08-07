---
name: I_CRDTWRTHNSSSCORECHGSITUATION
description: Credit Worthiness Change
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value
semantic_en: Credit Worthiness Change
tags:
  - FIN
  - component:FIN-FIO-CCD-CR-2CL
  - FIN-FIO
  - FIN-FIO-CCD
  - FIN-FIO-CCD-CR
  - FIN-FIO-CCD-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CRDTWRTHNSSSCORECHGSITUATION

**Credit Worthiness Change**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CRDTWRTHNSSSCORECHGSITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` |  | |  |  | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Score |
| `PrevCreditWorthinessScoreValue` |  | |  |  | `CHAR(10)` | Previous Internal Score |
| `CrdtWrthnssScoreNumericValue` |  | |  |  | `DEC(12)` | New Internal Score (Numeric) |
| `OldCrdtWrthnssScrNumericValue` |  | |  |  | `DEC(12)` | Old Internal Score (Numeric) |
| `CrdtWrthnssScoreChangePercent` |  | |  |  | `DEC(6)` | Change to Internal Score (in Percent) |
| `CrdtWrthnssScrAdjustmentValue` |  | |  |  | `DEC(10)` | Delta Value of Internal Score |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
