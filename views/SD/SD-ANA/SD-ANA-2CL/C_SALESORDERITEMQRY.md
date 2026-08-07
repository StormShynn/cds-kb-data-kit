---
name: C_SALESORDERITEMQRY
description: This CDS view provides the total net values of sales order items by various dimensions, such as sales organization, product, fiscal year, customer group, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of sales orders in my sales organizations? What are my top 10 products based on my incoming sales orders? Who are my top 10 customers? Will I reach my business goals this year?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERITEMQRY')/$value
semantic_en: This CDS view provides the total net values of sales order items by various dimensions, such as sales organization, product, fiscal year, customer group, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of sales orders in my sales organizations? What are my top 10 products based on my incoming sales orders? Who are my top 10 customers? Will I reach my business goals this year?
keywords:
  - Sales Order Item - Query
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - order
  - product
  - sales-order
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SALESORDERITEMQRY

**This CDS view provides the total net values of sales order items by various dimensions, such as sales organization, product, fiscal year, customer group, and many more. This CDS view provides the prerequisites for answering the following business questions: What are the total net values of sales orders in my sales organizations? What are my top 10 products based on my incoming sales orders? Who are my top 10 customers? Will I reach my business goals this year?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESORDERITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Order Item Category |
| `SalesOrderItemType` |  | |  |  | `CHAR(1)` | Sales Order Item Type |
| `IsReturnsItem` |  | |  |  | `CHAR(1)` | Returns Item |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `NetAmountInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `IncomingSalesOrdersNetAmtInDC` |  | |  |  | `CURR(19)` | Incoming Sales Orders Net Value In Display Currency |
| `IncomingSalesOrdersQuantity` |  | |  |  | `QUAN(15)` | Incoming Sales Orders Quantity |
| `NumberOfIncomingSlsOrderItems` |  | |  |  | `INT8(19)` | Number of Incoming Sales Order Items |
| `ConfdDeliveryQtyInBaseUnit` |  | |  |  | `QUAN(15)` | Cumulative Confirmed Quantity in Base Unit |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `SalesOrderDateYear` |  | |  |  | `NUMC(4)` | Year of Order |
| `SalesOrderDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter of Order |
| `SalesOrderDateYearMonth` |  | |  |  | `NUMC(6)` | Month of Order |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerRebateAgreement` |  | |  |  | `CHAR(10)` | Customer Rebate Agreement |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `SalesOrderDate` |  | |  |  | `DATS(8)` | Document Date (Date Received/Sent) |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `SalesDeal` |  | |  |  | `CHAR(10)` | Sales Deal |
| `SalesPromotion` |  | |  |  | `CHAR(10)` | Sales Promotion |
| `RetailPromotion` |  | |  |  | `CHAR(10)` | Retail Promotion |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `MainItemPricingRefProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` |  | |  |  | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` |  | |  |  | `CHAR(1)` | Determine cost |
| `SalesOrderCondition` |  | |  |  | `CHAR(10)` | Sales Order Condition |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `ItemIsDeliveryRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Delivery |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `ItemBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block Reason for Item |
| `ItemIsBillingRelevant` |  | |  |  | `CHAR(1)` | Relevant for Billing |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `CustomerProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Account Assignment Group for Customer |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `CostCenterBusinessArea` |  | |  |  | `CHAR(4)` | Business Area from Cost Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | Category of Reference Document |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallPurchaseConfStatus` |  | |  |  | `CHAR(1)` | Purchase Order Confirmation Status (All Items) |
| `OverallSDDocumentRejectionSts` |  | |  |  | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` |  | |  |  | `CHAR(1)` | Overall Block Status (Header) |
| `OverallDelivConfStatus` |  | |  |  | `CHAR(1)` | Delivery Confirmation Status (All Items) |
| `OverallTotalDeliveryStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (All Items) |
| `OverallTotalSDDocRefStatus` |  | |  |  | `CHAR(1)` | Overall Reference Status (All Items) |
| `OverallSDDocReferenceStatus` |  | |  |  | `CHAR(1)` | Reference Status (All Items) |
| `TotalCreditCheckStatus` |  | |  |  | `CHAR(1)` | Overall Status of Credit Checks |
| `MaxDocValueCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Maximum Document Value |
| `PaymentTermCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Terms of Payment |
| `FinDocCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Financial Document |
| `ExprtInsurCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Export Credit Insurance |
| `PaytAuthsnCreditCheckSts` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Payment Card Authorization |
| `CentralCreditCheckStatus` |  | |  |  | `CHAR(1)` | Central Credit Check Status |
| `CentralCreditChkTechErrSts` |  | |  |  | `CHAR(1)` | Status of Technical Error SAP Credit Management |
| `HdrGeneralIncompletionStatus` |  | |  |  | `CHAR(1)` | Incompletion Status (Header) |
| `OverallPricingIncompletionSts` |  | |  |  | `CHAR(1)` | Pricing Incompletion Status (All Items) |
| `HeaderDelivIncompletionStatus` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` |  | |  |  | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (All Items) |
| `SDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Item) |
| `DeliveryConfirmationStatus` |  | |  |  | `CHAR(1)` | Delivery Confirmation Status (Item) |
| `PurchaseConfirmationStatus` |  | |  |  | `CHAR(1)` | Purchase Order Confirmation Status (Item) |
| `TotalDeliveryStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Status (Item) |
| `DeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status (Item) |
| `DeliveryBlockStatus` |  | |  |  | `CHAR(1)` | Delivery Block Status (Item) |
| `OrderRelatedBillingStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (Item) |
| `ItemGeneralIncompletionStatus` |  | |  |  | `CHAR(1)` | Incompletion Status (Item) |
| `ItemBillingIncompletionStatus` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (Item) |
| `PricingIncompletionStatus` |  | |  |  | `CHAR(1)` | Pricing Incompletion Status (Item) |
| `ItemDeliveryIncompletionStatus` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (Item) |
| `SDDocumentRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status (Item) |
| `TotalSDDocReferenceStatus` |  | |  |  | `CHAR(1)` | Overall Reference Status (Item) |
