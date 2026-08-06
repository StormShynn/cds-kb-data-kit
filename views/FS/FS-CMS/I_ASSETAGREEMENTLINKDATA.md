---
name: I_ASSETAGREEMENTLINKDATA
description: Asset Agreement Link Details
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value
semantic_en: Asset Agreement Link Details
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_ASSETAGREEMENTLINKDATA

**Asset Agreement Link Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETAGREEMENTLINKDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `AssetAgreementUUID` | `RAW(16)` | GUID for Table CMS_CHG |
| `ObjectAssetUUID` | `RAW(16)` | GUID for Table CMS_AST |
| `CollateralAgreementUUID` | `RAW(16)` | GUID for Table CMS_CAG |
| `AssetAgreementDescription` | `CHAR(30)` | Description for Charges |
| `AssetAgreementRankingOrderVal` | `NUMC(4)` | Ranking of a Collateral Agreement in an Asset |
| `AssetAgreementSequence` | `NUMC(4)` | Sequence of an Asset in a Collateral agreement |
| `AssetAgreementRegisterNumber` | `CHAR(32)` | Register Number |
| `AssetAgreementRegisterDate` | `DATS(8)` | Date on which the Land Charge was Registered |
| `AssetAgreementBPShareNumerator` | `INT4(10)` | Numerator in Business Partner Share of Asset |
| `AssetAgreementBPShareDnmntr` | `INT4(10)` | Denominator in the Business Partner Share of Asset |
| `AssetAgreementQuantity` | `QUAN(13)` | Size of the Asset used as Charge |
| `AssetAgreementAmount` | `CURR(17)` | Amount of Asset used as Charge |
| `AssetAgreementAssessmentAmount` | `CURR(17)` | Assessment amount of a charge |
| `AssetAgreementAssessmentCrcy` | `CUKY(5)` | CMS_DTE_CHG_ASMT_CURR |
| `AssetAgreementAssessmentDate` | `DATS(8)` | Date of assessment |
| `AssetAgreementValidFromDate` | `DATS(8)` | Date |
| `AssetAgreementValidToDate` | `DATS(8)` | Date |
| `ObjectAssetReferenceSystem` | `CHAR(6)` | Object System Reference ID |
| `ObjectAssetUnitOfMeasure` | `UNIT(3)` | Unit of Measure of Quantity |
| `ObjectAssetFinalCurrency` | `CUKY(5)` | Currency of the Final Asset Value |
