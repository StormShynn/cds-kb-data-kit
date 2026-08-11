---
name: I_SITEPRODUCTGROUP
description: "Product Group Assignment to Site"
app_component: LO-RFM-MD-SIT-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value
semantic_en: "Product Group Assignment to Site"
tags:
  - LO
  - bo:material
  - component:LO-RFM-MD-SIT-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-SIT
  - LO-RFM-MD-SIT-2CL
  - lob:logistics general
  - product
  - metadata-only
---
# I_SITEPRODUCTGROUP

**Product Group Assignment to Site**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-SIT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_SITEPRODUCTGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SiteCustomer` |  | |  |  | `CHAR(10)` | Customer Number |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `ContactPersonStdDepartment` |  | |  |  | `CHAR(4)` | Department number |
| `AssortmentGrade` |  | |  |  | `CHAR(2)` | Assortment grade |
| `ProdGroupIsExcldFrmPOSOutbound` |  | |  |  | `CHAR(1)` | Exclude material group from POS outbound processing |
| `ProdReplnmtRqmtGroup` |  | |  |  | `CHAR(2)` | Replenishment: requirement group |
| `StoreProcurementProfile` |  | |  |  | `CHAR(4)` | Store procurement profile for store order, replenishment |
| `PriceListType` |  | |  |  | `CHAR(2)` | Price determination: Item-based price list type |
| `RevaluationProfile` |  | |  |  | `CHAR(4)` | Retail revalution profile |
| `PriceIsIncludingSalesTax` |  | |  |  | `CHAR(1)` | Price including sales tax |
