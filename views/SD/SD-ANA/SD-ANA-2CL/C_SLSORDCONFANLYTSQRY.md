---
name: C_SLSORDCONFANLYTSQRY
description: This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value
semantic_en: This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.
keywords:
  - Analytics - Analyze Confirmations of Sales Orders
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - delivery
  - lob:sales & distribution
  - order
  - sales-order
  - SD-ANA
  - SD-ANA-2CL
  - metadata-only
---
# C_SLSORDCONFANLYTSQRY

**This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders? To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesOrder` | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | `NUMC(6)` | Sales Order Item |
| `SalesOrderType` | `CHAR(4)` | Sales Document Type |
| `SalesOrderItemCategory` | `CHAR(4)` | Sales Order Item Category |
| `SDDocumentCategory` | `CHAR(4)` | SD Document Category |
| `IsReturnsItem` | `CHAR(1)` | Returns Item |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `NetAmountInDisplayCurrency` | `CURR(19)` | Net Value in Display Currency |
| `CreatedByUser` | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreatedByUserName` | `CHAR(80)` | User Description |
| `CreationDate` | `DATS(8)` | Record Creation Date |
| `CreationTime` | `TIMS(6)` | Time at Which Record Was Created |
| `CreationDateYear` | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` | `NUMC(6)` | Year/Month of Creation |
| `LastChangeDate` | `DATS(8)` | Last Changed On |
| `SalesOrderDateYear` | `NUMC(4)` | Year of Order |
| `SalesOrderDateYearQuarter` | `NUMC(5)` | Quarter of Order |
| `SalesOrderDateYearMonth` | `NUMC(6)` | Month of Order |
| `SalesOrderDateYearWeek` | `NUMC(6)` | Week of Order |
| `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` | `CHAR(2)` | Organization Division |
| `SalesGroup` | `CHAR(3)` | Sales Group |
| `SalesOffice` | `CHAR(4)` | Sales Office |
| `Division` | `CHAR(2)` | Division |
| `PartnerCompany` | `CHAR(6)` | Company ID of Trading Partner |
| `Material` | `CHAR(40)` | Material Number |
| `Product` | `CHAR(40)` | Product |
| `OriginallyRequestedMaterial` | `CHAR(40)` | Material Entered |
| `MaterialByCustomer` | `CHAR(35)` | Material Number Used by Customer |
| `InternationalArticleNumber` | `CHAR(18)` | International Article Number (EAN/UPC) |
| `Batch` | `CHAR(10)` | Batch Number |
| `ProductHierarchyNode` | `CHAR(18)` | Product Hierarchy |
| `ProductCatalog` | `CHAR(10)` | Product Catalog Number |
| `MaterialSubstitutionReason` | `CHAR(4)` | Reason for Material Substitution |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `ProductGroup` | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` | `CHAR(3)` | Material Group 5 |
| `ProductionPlant` | `CHAR(4)` | Plant (Own or External) |
| `StorageLocation` | `CHAR(4)` | Storage Location |
| `ProductConfiguration` | `NUMC(18)` | Product Configuration |
| `MainItemPricingRefProduct` | `CHAR(40)` | Pricing Reference Product of Main Item |
| `BillOfMaterial` | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` | `CHAR(1)` | Determine cost |
| `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `SoldToPartyClassification` | `CHAR(2)` | Customer Classification |
| `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `PayerParty` | `CHAR(10)` | Payer |
| `BillToParty` | `CHAR(10)` | Bill-to Party |
| `ResponsibleEmployee` | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` | `NUMC(8)` | Sales Employee |
| `AdditionalCustomerGroup1` | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` | `CHAR(3)` | Customer Group 5 |
| `CreditControlArea` | `CHAR(4)` | Credit Control Area |
| `CustomerRebateAgreement` | `CHAR(10)` | Customer Rebate Agreement |
| `SalesOrderDate` | `DATS(8)` | Document Date (Date Received/Sent) |
| `SDDocumentReason` | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SDDocumentCollectiveNumber` | `CHAR(10)` | Collective Number (SD) |
| `CustomerPurchaseOrderType` | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderDate` | `DATS(8)` | Customer Reference Date |
| `CustomerPurchaseOrderSuplmnt` | `CHAR(4)` | Purchase order number supplement |
| `SalesOrderItemText` | `CHAR(40)` | Short Text for Sales Order Item |
| `PurchaseOrderByCustomer` | `CHAR(35)` | Customer Reference |
| `UnderlyingPurchaseOrderItem` | `CHAR(6)` | Item Number of the Underlying Purchase Order |
| `ServicesRenderedDate` | `DATS(8)` | Date on which services are rendered |
| `SalesDistrict` | `CHAR(6)` | Sales District |
| `SalesDeal` | `CHAR(10)` | Sales Deal |
| `SalesDealDescription` | `CHAR(40)` | Sales Deal Description |
| `SalesPromotion` | `CHAR(10)` | Sales Promotion |
| `RetailPromotion` | `CHAR(10)` | Retail Promotion |
| `CustomerGroup` | `CHAR(2)` | Customer Group |
| `SalesDocumentRjcnReason` | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ItemOrderProbabilityInPercent` | `NUMC(3)` | Order Probability of the Item |
| `SalesOrderCondition` | `CHAR(10)` | Sales Order Condition |
| `PricingDate` | `DATS(8)` | Date for Pricing and Exchange Rate |
| `ExchangeRateDate` | `DATS(8)` | Translation Date |
| `StatisticalValueControl` | `CHAR(1)` | Statistical Values |
| `RequestedDeliveryDate` | `DATS(8)` | Requested Delivery Date |
| `ShippingCondition` | `CHAR(2)` | Shipping Conditions |
| `CompleteDeliveryIsDefined` | `CHAR(1)` | Complete Delivery Defined for Each Sales Order |
| `DeliveryBlockReason` | `CHAR(2)` | Delivery Block (Document Header) |
| `ShippingPoint` | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShippingType` | `CHAR(2)` | Shipping Type |
| `InventorySpecialStockType` | `CHAR(1)` | Special Stock Indicator |
| `DeliveryPriority` | `NUMC(2)` | Delivery Priority |
| `Route` | `CHAR(6)` | Route |
| `DeliveryDateQuantityIsFixed` | `CHAR(1)` | Fixed Delivery Date and Quantity |
| `PartialDeliveryIsAllowed` | `CHAR(1)` | Partial Delivery at Item Level |
| `MaxNmbrOfPartialDelivery` | `DEC(1)` | Number of Allowed Partial Deliveries |
| `UnlimitedOverdeliveryIsAllowed` | `CHAR(1)` | Unlimited Overdelivery Allowed |
| `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` | `CHAR(70)` | Incoterms Location 2 |
| `IncotermsVersion` | `CHAR(4)` | Incoterms Version |
| `OpenDeliveryLeadingUnitCode` | `CHAR(1)` | ID: Leading unit of measure for completing a transaction |
| `ItemIsDeliveryRelevant` | `CHAR(1)` | Item Is Relevant for Delivery |
| `BillingCompanyCode` | `CHAR(4)` | Company Code to Be Billed |
| `HeaderBillingBlockReason` | `CHAR(2)` | Billing Block in SD Document |
| `BillingDocumentDate` | `DATS(8)` | Billing Date |
| `ItemBillingBlockReason` | `CHAR(2)` | Billing Block Reason for Item |
| `BillingPlan` | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `CustomerPaymentTerms` | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` | `CHAR(1)` | Payment Method |
| `FixedValueDate` | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` | `NUMC(2)` | Additional Value Days |
| `CustomerProject` | `CHAR(40)` | Commercial Project ID |
| `EngagementProjectName` | `CHAR(40)` | Customer Project Name |
| `ExchangeRateType` | `CHAR(4)` | Exchange Rate Type (Document) |
| `CostCenterBusinessArea` | `CHAR(4)` | Business Area from Cost Center |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ControllingArea` | `CHAR(4)` | Controlling Area |
| `FiscalYear` | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` | `NUMC(3)` | Posting Period |
| `CustomerAccountAssignmentGroup` | `CHAR(2)` | Account Assignment Group for Customer |
| `BusinessArea` | `CHAR(4)` | Business Area |
| `ProfitCenter` | `CHAR(10)` | Profit Center |
| `WBSElement` | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `OrderID` | `CHAR(12)` | Order Number |
| `ControllingObject` | `CHAR(22)` | Controlling Object |
| `ProfitabilitySegment` | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` | `CHAR(10)` | Profitability Segment |
| `OriginSDDocument` | `CHAR(10)` | Originating Document |
| `ReferenceSDDocumentItem` | `NUMC(6)` | Item Number of the Reference Item |
| `HigherLevelItem` | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BusinessSolutionOrder` | `CHAR(10)` | Solution Order |
| `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallPurchaseConfStatus` | `CHAR(1)` | Purchase Order Confirmation Status (All Items) |
| `OverallSDDocumentRejectionSts` | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` | `CHAR(1)` | Overall Block Status (Header) |
| `OverallTotalDeliveryStatus` | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` | `CHAR(1)` | Billing Block Status (All Items) |
| `TotalCreditCheckStatus` | `CHAR(1)` | Overall Status of Credit Checks |
| `PaymentTermCreditCheckStatus` | `CHAR(1)` | Status of Credit Check Against Terms of Payment |
| `PaytAuthsnCreditCheckSts` | `CHAR(1)` | Status of Credit Check Against Payment Card Authorization |
| `HdrGeneralIncompletionStatus` | `CHAR(1)` | Incompletion Status (Header) |
| `OverallPricingIncompletionSts` | `CHAR(1)` | Pricing Incompletion Status (All Items) |
| `HeaderDelivIncompletionStatus` | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` | `CHAR(1)` | Delivery Incompletion Status (All Items) |
| `SDProcessStatus` | `CHAR(1)` | Overall Processing Status (Item) |
| `DeliveryConfirmationStatus` | `CHAR(1)` | Delivery Confirmation Status (Item) |
| `PurchaseConfirmationStatus` | `CHAR(1)` | Purchase Order Confirmation Status (Item) |
| `TotalDeliveryStatus` | `CHAR(1)` | Overall Delivery Status (Item) |
| `DeliveryStatus` | `CHAR(1)` | Delivery Status (Item) |
| `DeliveryBlockStatus` | `CHAR(1)` | Delivery Block Status (Item) |
| `OrderRelatedBillingStatus` | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` | `CHAR(1)` | Billing Block Status (Item) |
| `ItemGeneralIncompletionStatus` | `CHAR(1)` | Incompletion Status (Item) |
| `ItemBillingIncompletionStatus` | `CHAR(1)` | Billing Incompletion Status (Item) |
| `PricingIncompletionStatus` | `CHAR(1)` | Pricing Incompletion Status (Item) |
| `ItemDeliveryIncompletionStatus` | `CHAR(1)` | Delivery Incompletion Status (Item) |
| `SDDocumentRejectionStatus` | `CHAR(1)` | Rejection Status (Item) |
| `TotalSDDocReferenceStatus` | `CHAR(1)` | Overall Reference Status (Item) |
| `SlsDocItmReqdDelivConfSts` | `CHAR(1)` | Sales Order Item Confirmation Status |
| `OrderQuantity` | `QUAN(15)` | Cumulative Order Quantity in Sales Unit |
| `ConfdDelivQtyInOrderQtyUnit` | `QUAN(15)` | Cumulative Confirmed Quantity in Sales Unit |
| `OrderQuantityUnit` | `UNIT(3)` | Sales Unit |
| `SlsDocItmSchdLnConfdQty` | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `SlsDocItmSchdLnDlydQty` | `QUAN(15)` | Overall delayed sales order schedule lines: qty |
| `SlsDocItmSchdLnUnconfdQty` | `QUAN(15)` | Overall unconfirmed sales order schedule lines: quantity |
| `BaseUnit` | `UNIT(3)` | Base Unit of Measure |
| `TotDelayOfSchdLnConfdToReqdDte` | `INT8(19)` | Total delay of requested delivery date in days |
| `MaxDelayOfSchdLnConfdToReqdDte` | `INT4(10)` | Maximum delay of requested delivery date in days |
| `MinDelayOfSchdLnConfdToReqdDte` | `INT4(10)` | Minimum delay of requested delivery date in days |
| `SlsDocItmSchdLnConfdAmtInDC` | `CURR(19)` | Overall confirmed SO schedule lines: amt in display curr. |
| `SlsDocItmSchdLnDlydAmtInDC` | `CURR(19)` | Overall delayed SO sched. lines: amt in disp.curr. |
| `SlsDocItmSchdLnUnconfdAmtInDC` | `CURR(19)` | Overall unconfirmed SO schedule lines: amt in display curr. |
| `NmbrOfSlsDocItemsConfdAsReqd` | `DEC(9)` | Number of confirmed sales order items as requested |
| `NmbrOfSlsDocItemsConfdDlyd` | `DEC(9)` | Number of delayed sales order items as requested |
| `NmbrOfSlsDocItemsConfdPrtly` | `DEC(9)` | Number of partially confirmed sales order items as requested |
| `NmbrOfSlsDocItemsUnconfd` | `DEC(9)` | Number of unconfirmed sales order items  as requested |
| `DelivBlockReasonForSchedLine` | `CHAR(2)` | Schedule Line Blocked for Delivery |
| `SlsDocItemsConfdAsReqdRatio` | `DEC(13)` | Ratio of Confirmed Sales Order Items as Requested |
| `SlsDocItemsConfdDlydRatio` | `DEC(13)` | Ratio of Delayed Sales Order Items as Requested |
| `SlsDocItemsConfdPrtlyRatio` | `DEC(13)` | Ratio of Partially Confirmed Sales Order Items  as Requested |
| `SlsDocItemsUnconfdRatio` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
