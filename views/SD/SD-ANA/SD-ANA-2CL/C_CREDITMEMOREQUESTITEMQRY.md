---
name: C_CREDITMEMOREQUESTITEMQRY
description: This CDS view provides the prerequisites for answering questions about credit memo request items. Example business questions are: What is the sold-to party of a given credit memo request? What is the order reason for a given credit memo request? What is the overall processing status of a given credit memo request? What is the total net value of the items in my credit memo requests?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITMEMOREQUESTITEMQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about credit memo request items. Example business questions are: What is the sold-to party of a given credit memo request? What is the order reason for a given credit memo request? What is the overall processing status of a given credit memo request? What is the total net value of the items in my credit memo requests?
keywords:
  - Credit Memo Request Item - Query
tags:
  - SD
  - bo:billingdocument
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - order
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_CREDITMEMOREQUESTITEMQRY

**This CDS view provides the prerequisites for answering questions about credit memo request items. Example business questions are: What is the sold-to party of a given credit memo request? What is the order reason for a given credit memo request? What is the overall processing status of a given credit memo request? What is the total net value of the items in my credit memo requests?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CREDITMEMOREQUESTITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CreditMemoRequest` |  | |  |  | `CHAR(10)` | Credit Memo Request |
| `CreditMemoRequestItem` |  | |  |  | `NUMC(6)` | Credit Memo Request Item |
| `CreditMemoRequestType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `CreditMemoRequestItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `CreditMemoRequestItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
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
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `SDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Item) |
| `OrderRelatedBillingStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (Item) |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `CreditMemoRequestNetAmtInDC` |  | |  |  | `CURR(19)` | Net Amount of Credit Memo Request Items in Display Currency |
| `CreditMemoRequestQuantity` |  | |  |  | `QUAN(15)` | Quantity of Credit Memo Request Items |
| `NumberOfCreditMemoRequestItems` |  | |  |  | `INT8(19)` | Number of Items in Credit Memo Requests |
