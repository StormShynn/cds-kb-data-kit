---
name: C_RDPDELIVERYDOCUMENTITEMDEX
description: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction."
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
# C_RDPDELIVERYDOCUMENTITEMDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Item |
| `DeliveryDocumentItemCategory` |  | |  |  | `CHAR(4)` | Delivery Item Category |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Actual quantity delivered in stockkeeping units |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualDeliveryQuantity` |  | |  |  | `QUAN(13)` | Actual quantity delivered (in sales units) |
| `DeliveryQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `OverallGoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
