---
name: C_SUSTDELIVERYDOCUMENTITEMDEX
description: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value
semantic_en: This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
tags:
  - SUS
  - bo:companycode
  - component:SUS-INT
  - consumption-view
  - delivery
  - document
  - product
  - SUS-INT
  - metadata-only
---
# C_SUSTDELIVERYDOCUMENTITEMDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Item |
| `DeliveryDocumentItemCategory` |  | |  |  | `CHAR(4)` | Delivery Item Category |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `PlantAddressID` |  | |  |  | `CHAR(10)` | Address |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Actual quantity delivered in stockkeeping units |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualDeliveryQuantity` |  | |  |  | `QUAN(13)` | Actual quantity delivered (in sales units) |
| `DeliveryQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `SoldToPartyRegion` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `SoldToPartyAddressID` |  | |  |  | `CHAR(10)` | Address |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `OverallGoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
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
