---
name: I_CREDITLIMITCHANGESITUATION
description: Credit Limit Change
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value
semantic_en: Credit Limit Change
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
# I_CREDITLIMITCHANGESITUATION

**Credit Limit Change**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITCHANGESITUATION')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CrdtMgmtBPChangeUUID` |  | |  |  | `CHAR(32)` | GUID of a Master Data Change |
| `CrdtMgmtBPChangeDateTime` |  | |  |  | `DEC(21)` | UTC time stamp in long form (YYYYMMDDhhmmss,mmmuuun) |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `CreditSegment` |  | |  |  | `CHAR(10)` | Credit Segment |
| `NewCreditLimitAmount` |  | |  |  | `CURR(15)` | Credit Limit (New) |
| `OldCreditLimitAmount` |  | |  |  | `CURR(15)` | Credit Limit (Old) |
| `CreditSegmentCurrency` |  | |  |  | `CUKY(5)` | Credit Segment Currency |
| `CreditLimitChangeInPercent` |  | |  |  | `DEC(10)` | Credit Limit Change (in Percent) |
| `CreditLimitAdjustmentAmount` |  | |  |  | `CURR(15)` | Amount Change to Credit Limit |
| `CreditScoreAndLimitCalcRule` |  | |  |  | `CHAR(10)` | Rule for Calculating Score and Credit Limit |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  | `NUMC(4)` | Customer Credit Group |
