---
name: C_CUSTOMERRETURNITEMQRY_2
description: This query provides the prerequisites for answering questions about relevant aspects of customer return items. Example business questions are: What is the net value or quantity of a given customer return item? How many items does a given customer return contain? Why are the items returned? Who is the responsible employee?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNITEMQRY_2')/$value
semantic_en: This query provides the prerequisites for answering questions about relevant aspects of customer return items. Example business questions are: What is the net value or quantity of a given customer return item? How many items does a given customer return contain? Why are the items returned? Who is the responsible employee?
keywords:
  - Customer Return Item - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_CUSTOMERRETURNITEMQRY_2

**This query provides the prerequisites for answering questions about relevant aspects of customer return items. Example business questions are: What is the net value or quantity of a given customer return item? How many items does a given customer return contain? Why are the items returned? Who is the responsible employee?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNITEMQRY_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustomerReturn` |  | |  |  | `CHAR(10)` | Customer Return |
| `CustomerReturnItem` |  | |  |  | `NUMC(6)` | Customer Return Item |
| `CustomerReturnType` |  | |  |  | `CHAR(4)` | Customer Return Type |
| `CustomerReturnItemType` |  | |  |  | `CHAR(1)` | Item Type |
| `CustomerReturnItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `CustomerReturnItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ReturnReason` |  | |  |  | `CHAR(3)` | Return Reason |
| `RetsMgmtProcessingBlock` |  | |  |  | `CHAR(1)` | Approval Block |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `MainItemPricingRefProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` |  | |  |  | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` |  | |  |  | `CHAR(1)` | Determine cost |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `ItemIsBillingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Billing |
| `ItemBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block Reason for Item |
| `StatisticalValueControl` |  | |  |  | `CHAR(1)` | Statistical Values |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | Category of Reference Document |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `IncomingCustReturnsNetAmtInDC` |  | |  |  | `CURR(19)` | Net Amount of Customer Return Items in Display Currency |
| `IncomingCustReturnsQuantity` |  | |  |  | `QUAN(15)` | Customer Return Item Quantity |
| `NumberOfIncomingCustRetItems` |  | |  |  | `INT4(10)` | Number of Items in Customer Returns |
| `SDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Item) |
| `OrderRelatedBillingStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (Item) |
