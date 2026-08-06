---
name: I_COLLATERALREALESTATEPARTCOST
description: Cost Details for Collateral RE Part
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value
semantic_en: Cost Details for Collateral RE Part
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_COLLATERALREALESTATEPARTCOST

**Cost Details for Collateral RE Part**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEPARTCOST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ColltrlRealEstatePartCostUUID` | `RAW(16)` | GUID for part cost |
| `CollateralRealEstatePartUUID` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` | `NUMC(10)` | Part ID for the Object |
| `CollateralRealEstateCostType` | `CHAR(6)` | Cost Type |
| `ColltrlRECostDescription` | `CHAR(30)` | Description of the cost |
| `CollateralRealEstateCostDate` | `DATS(8)` | Date on which the Cost was Incurred |
| `CollateralRealEstateCostAmount` | `CURR(17)` | Actual Cost Amount |
| `ColltrlRealEstateCostCurrency` | `CUKY(5)` | Cost Currency |
| `ColltrlRECostBaseMeasure` | `CHAR(1)` | Base Measure |
| `ColltrlREPlannedCostAmount` | `CURR(17)` | Plan Cost Amount |
| `ColltrlREPlannedCostCurrency` | `CUKY(5)` | Cost currency |
| `ColltrlRECostValueEnhancing` | `CHAR(2)` | Indicator - Value Enhancing/ Increasing |
| `ColltrlRealEstateCostMeasure` | `CHAR(6)` | Modernization or Renovation Measure |
| `ColltrlRECostIsAllowable` | `CHAR(1)` | Flag - Allowable Costs |
| `ColltrlREAllowableCostAmount` | `CURR(17)` | Allowable Cost Amount |
| `ColltrlREAllowableCostCurrency` | `CUKY(5)` | Allowable Cost Currency |
| `ColltrlREAllowableCostPercent` | `DEC(10)` | Allowable Cost In Percentage |
