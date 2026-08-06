---
name: I_CREDITLIMITUTILIZATION
description: Customer Credit Utilization - Cube
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value
semantic_en: Customer Credit Utilization - Cube
tags:
  - FIN
  - bo:businesspartner
  - component:FIN-FSCM-CR-2CL
  - customer
  - FIN-FSCM
  - FIN-FSCM-CR
  - FIN-FSCM-CR-2CL
  - interface-view
  - lob:finance
  - metadata-only
---
# I_CREDITLIMITUTILIZATION

**Customer Credit Utilization - Cube**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CREDITLIMITUTILIZATION')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CreditSegment` | `CHAR(10)` | Credit Segment |
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BusinessPartnerIsCritical` | `CHAR(1)` | Special Attention Required |
| `CreditRiskClass` | `CHAR(3)` | Risk Class |
| `Country` | `CHAR(3)` | Country/Region |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CreditAccountGroup` | `NUMC(4)` | Customer Credit Group (Obsolete) |
| `CrdtMgmtBusinessPartnerGroup` | `NUMC(4)` | Customer Credit Group |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `CreditSegmentCurrency` | `CUKY(5)` | Credit Segment Currency |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type |
| `KeyDate` | `DATS(8)` | Exchange Rate Date |
| `ValuationThresholdPercent` | `DEC(5)` |  |
| `CustomerCreditExposureAmount` | `CURR(23)` | Credit Exposure Amount |
| `HedgedExposureAmount` | `CURR(15)` | Hedged Credit Exposure |
| `CustomerCreditLimitAmount` | `CURR(23)` | Customer's Credit Limit |
| `CustomerIsAboveThreshold` | `INT4(10)` | Threshold exceeded |
| `CrdtLmtExceededAmtInDspCrcy` | `CURR(23)` | Credit Limit Exceeded Amount |
| `RemainingCreditAmtInDspCrcy` | `CURR(23)` | Remaining Credit Amount |
| `CrdtUsageWthnLmtAmtInDspCrcy` | `CURR(23)` | Credit Amount used within Limit |
