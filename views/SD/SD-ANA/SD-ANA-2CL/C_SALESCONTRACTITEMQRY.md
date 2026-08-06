---
name: C_SALESCONTRACTITEMQRY
description: This CDS view provides the prerequisites for answering questions about various aspects of sales contracts. The example questions are: What is the target value or quantity of a given contact item? Which contracts are soon to be expired?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITEMQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering questions about various aspects of sales contracts. The example questions are: What is the target value or quantity of a given contact item? Which contracts are soon to be expired?
keywords:
  - Sales Contract Item - Query
tags:
  - SD
  - bo:plant
  - component:SD-ANA-2CL
  - consumption-view
  - contract
  - lob:sales & distribution
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SALESCONTRACTITEMQRY

**This CDS view provides the prerequisites for answering questions about various aspects of sales contracts. The example questions are: What is the target value or quantity of a given contact item? Which contracts are soon to be expired?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESCONTRACTITEMQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesContract` | `CHAR(10)` | Sales Contract |
| `SalesContractItem` | `NUMC(6)` | Sales Contract Item |
| `SalesContractType` | `CHAR(4)` | Sales Document Type |
| `SalesContractItemType` | `CHAR(1)` | Item Type |
| `SalesContractItemCategory` | `CHAR(4)` | Sales Document Item Category |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
| `SalesContractValidityStartDate` | `DATS(8)` | Valid-From Date (Outline Agreements, Product Proposals) |
| `SalesContractValidityEndDate` | `DATS(8)` | Valid-To Date (Outline Agreements, Product Proposals) |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `SDDocumentReason` | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `PurchaseOrderByCustomer` | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` | `DATS(8)` | Customer Reference Date |
| `SalesContractItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesDocumentRjcnReason` | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `SalesEmployee` | `NUMC(8)` | Sales Employee |
| `ResponsibleEmployee` | `NUMC(8)` | Employee Responsible |
| `Product` | `CHAR(40)` | Product |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `Division` | `CHAR(2)` | Division |
| `Plant` | `CHAR(4)` | Plant (Own or External) |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `MainItemPricingRefProduct` | `CHAR(40)` | Pricing Reference Product of Main Item |
| `HigherLevelItem` | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BillOfMaterial` | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` | `CHAR(1)` | Determine cost |
| `PricingDate` | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `CustomerPaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `BillingDocumentDate` | `DATS(8)` | Billing Date |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CustomerAccountAssignmentGroup` | `CHAR(2)` | Account Assignment Group for Customer |
| `ReferenceSDDocumentCategory` | `CHAR(4)` | Category of Reference Document |
| `ReferenceSDDocument` | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` | `NUMC(6)` | Item Number of the Reference Item |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `TransactionCurrency` | `CUKY(5)` | SD Document Currency |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `SalesContractTargetAmountInDC` | `CURR(19)` | Target Value of Sales Contracts in Display Currency |
| `SalesContractTargetQuantity` | `QUAN(15)` | Target Quantity of Sales Contract Items |
| `IncomingSlsContractNetAmtInDC` | `CURR(19)` | Incoming Sales Contracts Net Value in Display Currency |
| `IncomingSlsContractQuantity` | `QUAN(15)` | Quantity of Incoming Sales Contract Items |
| `SalesContractReleasedAmtInDC` | `CURR(19)` | Released Value in Sales Contracts in Display Currency |
| `SalesContractFulfillmentRate` | `INT1(3)` |  |
| `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallSDDocumentRejectionSts` | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` | `CHAR(1)` | Overall Block Status (Header) |
| `OverallDelivConfStatus` | `CHAR(1)` | Delivery Confirmation Status (All Items) |
| `OverallTotalDeliveryStatus` | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` | `CHAR(1)` | Billing Block Status (All Items) |
| `OverallTotalSDDocRefStatus` | `CHAR(1)` | Overall Reference Status (All Items) |
| `OverallSDDocReferenceStatus` | `CHAR(1)` | Reference Status (All Items) |
| `HdrGeneralIncompletionStatus` | `CHAR(1)` | Incompletion Status (Header) |
| `HeaderDelivIncompletionStatus` | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` | `CHAR(1)` | Delivery Incompletion Status (All Items) |
| `SDProcessStatus` | `CHAR(1)` | Overall Processing Status (Item) |
| `DeliveryConfirmationStatus` | `CHAR(1)` | Delivery Confirmation Status (Item) |
| `TotalDeliveryStatus` | `CHAR(1)` | Overall Delivery Status (Item) |
| `DeliveryStatus` | `CHAR(1)` | Delivery Status (Item) |
| `DeliveryBlockStatus` | `CHAR(1)` | Delivery Block Status (Item) |
| `OrderRelatedBillingStatus` | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` | `CHAR(1)` | Billing Block Status (Item) |
| `ItemGeneralIncompletionStatus` | `CHAR(1)` | Incompletion Status (Item) |
| `ItemBillingIncompletionStatus` | `CHAR(1)` | Billing Incompletion Status (Item) |
| `ItemDeliveryIncompletionStatus` | `CHAR(1)` | Delivery Incompletion Status (Item) |
| `SDDocumentRejectionStatus` | `CHAR(1)` | Rejection Status (Item) |
| `TotalSDDocReferenceStatus` | `CHAR(1)` | Overall Reference Status (Item) |
