---
name: I_STOCKTRANSPORTORDER_2
description: "Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDER_2')/$value
semantic_en: "Stock Transport Order"
keywords:
  - "Stock Transport Order"
tags:
  - MM
  - bo:inventory
  - component:MM-PUR-PO-2CL
  - interface-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-PO
  - MM-PUR-PO-2CL
  - order
  - stock
  - metadata-only
---
# I_STOCKTRANSPORTORDER_2

**Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDER_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `StockTransportOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `StockTransportOrderType` |  | |  |  | `CHAR(4)` | Type of Stock Transport Order |
| `PurchasingDocumentSubtype` |  | |  |  | `CHAR(1)` | Control indicator for purchasing document type |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User of person who created a purchasing document |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Purchasing Document |
| `StockTransportOrderDate` |  | |  |  | `DATS(8)` | Date of Stock Transport Order |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `PurchasingDocumentDeletionCode` |  | |  |  | `CHAR(1)` | Deletion Indicator in Purchasing Document |
| `ReleaseIsNotCompleted` |  | |  |  | `CHAR(1)` | Release Not Yet Completely Effected |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `IsIntrastatReportingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Intrastat Reporting |
| `IsIntrastatReportingExcluded` |  | |  |  | `CHAR(1)` | Exclude from Intrastat Reporting |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Change Time Stamp |
| `VATRegistrationCountry` |  | |  |  | `CHAR(3)` | Country/Region of VAT Registration Number (VAT ID) |
| `PurchasingDocumentProcessCode` |  | |  |  | `CHAR(3)` | Process Indicator for Purchase Order |
