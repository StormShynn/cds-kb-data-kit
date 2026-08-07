---
name: I_STOCKTRANSPORTORDER
description: "Stock Transport Order"
app_component: MM-PUR-PO-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDER')/$value
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
# I_STOCKTRANSPORTORDER

**Stock Transport Order**

| Property | Value |
|---|---|
| App Component | `MM-PUR-PO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_STOCKTRANSPORTORDER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Stock Transport Order |
| `PurchaseOrderType` |  | |  |  | `CHAR(4)` | Purchase Order Type |
| `PurchaseOrderSubtype` |  | |  |  | `CHAR(1)` | Control indicator for purchasing document type |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User of person who created a purchasing document |
| `CreationDate` |  | |  |  | `DATS(8)` | Creation Date of Purchasing Document |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchase Order Date |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `PurchasingDocumentDeletionCode` |  | |  |  | `CHAR(1)` | Deletion Indicator in Purchasing Document |
| `ReleaseIsNotCompleted` |  | |  |  | `CHAR(1)` | Release Not Yet Completely Effected |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `ManualSupplierAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `SupplierAddressID` |  | |  |  | `CHAR(10)` | Address Number |
| `SupplierRespSalesPersonName` |  | |  |  | `CHAR(30)` | Responsible Salesperson at Supplier's Office |
| `SupplierPhoneNumber` |  | |  |  | `CHAR(16)` | Supplier's Phone Number |
| `SupplyingSupplier` |  | |  |  | `CHAR(10)` | Goods Supplier |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `InvoicingParty` |  | |  |  | `CHAR(10)` | Different Invoicing Party |
| `PaymentTerms` |  | |  |  | `CHAR(4)` | Terms of Payment Key |
| `PurchasingDocumentCondition` |  | |  |  | `CHAR(10)` | Number of the Document Condition |
| `PricingProcedure` |  | |  |  | `CHAR(6)` | Procedure (Pricing, Output Control, Acct. Det., Costing,...) |
| `DocumentCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Start of Validity Period |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | End of Validity Period |
| `ExchangeRate` |  | |  |  | `DEC(9)` | Exchange Rate |
| `ExchangeRateIsFixed` |  | |  |  | `CHAR(1)` | Indicator for Fixed Exchange Rate |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Change Time Stamp |
