---
name: I_ARUNANLYTSBLKDSLSORDCUBE
description: Blocked Sales Orders - Cube
app_component: LO-RFM-ARN
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value
semantic_en: Blocked Sales Orders - Cube
tags:
  - LO
  - bo:salesorder
  - component:LO-RFM-ARN
  - interface-view
  - LO-RFM
  - LO-RFM-ARN
  - lob:logistics general
  - order
  - sales-order
  - metadata-only
---
# I_ARUNANLYTSBLKDSLSORDCUBE

**Blocked Sales Orders - Cube**

| Property | Value |
|---|---|
| App Component | `LO-RFM-ARN` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ARUNANLYTSBLKDSLSORDCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RequirementDocumentNumber` |  | |  |  | `CHAR(10)` | Sales Document |
| `RequirementDocumentItem` |  | |  |  | `NUMC(6)` | Sales Document Item |
| `Issue` |  | |  |  | `CHAR(4)` | Issue |
| `IssueName` |  | |  |  | `CHAR(60)` | Short Text for Fixed Values |
| `IssueCategory` |  | |  |  | `CHAR(5)` | Issue Category |
| `NumberOfSalesOrderItems` |  | |  |  | `INT4(10)` | Item Issues in Order |
| `ARunDocumentItemUniqueID` |  | |  |  | `CHAR(17)` | Unique Identification for Supply Assignment Document Item |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` |  |
| `RequirementType` |  | |  |  | `CHAR(2)` |  |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `CrossPlantConfigurableProduct` |  | |  |  | `CHAR(40)` | Cross-Plant Configurable Material |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `Customer` |  | |  |  | `CHAR(10)` | Customer Number |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `RequirementSegment` |  | |  |  | `CHAR(40)` | Requirement Segment |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TotActualAmtInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
