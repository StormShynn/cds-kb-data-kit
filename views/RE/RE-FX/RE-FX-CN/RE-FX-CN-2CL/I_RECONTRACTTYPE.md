---
name: I_RECONTRACTTYPE
description: Real Estate Contract Type
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value
semantic_en: Real Estate Contract Type
tags:
  - RE
  - component:RE-FX-CN-2CL
  - contract
  - interface-view
  - RE-FX
  - RE-FX-CN
  - RE-FX-CN-2CL
  - metadata-only
---
# I_RECONTRACTTYPE

**Real Estate Contract Type**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_RECONTRACTTYPE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `REContractType` | `CHAR(4)` | External Real Estate Contract Type |
| `REConditionGroup` | `CHAR(4)` | Condition Group |
| `REAdjustNumberGroup` | `NUMC(4)` | Start of Group Number |
| `REAdjustNumber` | `NUMC(4)` | Interval Between Group Numbers |
| `REBusinessPartnerRole1` | `CHAR(6)` | Business Partner: Role |
| `REBusinessPartnerRole2` | `CHAR(6)` | Business Partner: Role |
| `REContractUserSupplier` | `NUMC(1)` | Offerer (Customer), User (Vendor) |
| `REContractCategory` | `NUMC(1)` | Real Estate Contract Category |
| `RECashFlowPeriod` | `NUMC(2)` | Update Period of Cash Flow Items in Years |
| `RETaxType` | `CHAR(4)` | Default Value for Tax Type |
| `TaxGroup` | `CHAR(20)` | Default Value for Tax Group |
| `REContractDepositType` | `CHAR(4)` | Contract Type of Security Deposit Agreement |
| `REContractIsTaxFree` | `CHAR(1)` | Tax-Exempt |
| `RENoticeProcedure` | `CHAR(4)` | Notice Procedure: Default When Creating Contract |
| `REInfluenceHoldings` | `CHAR(1)` | Influence on Changes in Holdings |
| `REFinanceDepositLevel` | `CHAR(2)` | Planning Level |
| `REIsPossessionDate` | `CHAR(1)` | Possession Dates Active/Inactive |
| `REConditionGroupTotal` | `CHAR(4)` | Condition Group Total |
| `REHasNewCreationAssignment` | `CHAR(1)` | No New Creation or Assignment |
| `REIsExclForNewAssgmt` | `CHAR(1)` | No New Creation or Assignment |
| `NumberRangeInterval` | `CHAR(2)` | Number Range Number |
| `REUsageType` | `NUMC(1)` | Rental unit usage category indicator |
| `REContractTypeCategory` | `NUMC(1)` | Real Estate contract category |
| `REIsAreaBasedRent` | `CHAR(1)` | Rental based on area is not permitted |
| `REHasDistributionOnObject` | `CHAR(1)` | Indicator for automatic distribution on object |
