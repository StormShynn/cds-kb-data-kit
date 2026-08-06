---
name: C_RDPDELIVERYDOCUMENTDEX
description: This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction.
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value
semantic_en: This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction.
tags:
  - SUS
  - bo:material
  - component:SUS-RDP-INT
  - consumption-view
  - delivery
  - document
  - product
  - SUS-RDP
  - SUS-RDP-INT
  - metadata-only
---
# C_RDPDELIVERYDOCUMENTDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `DeliveryDocument` | `CHAR(10)` | Delivery |
| `DeliveryDocumentType` | `CHAR(4)` | Delivery Type |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` | `DATS(8)` | Actual Goods Movement Date |
| `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallGoodsMovementStatus` | `CHAR(1)` | Goods Movement Status (All Items) |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Entry time |
| `LastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `DeletionIndicator` | `CHAR(1)` | Document deletion indicator |
