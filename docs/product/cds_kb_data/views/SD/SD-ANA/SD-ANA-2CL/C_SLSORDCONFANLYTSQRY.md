---
name: C_SLSORDCONFANLYTSQRY
description: "This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders?"
semantic_vi: "Confirmation of Sales Orders - Query — CDS view tiêu dùng dựa trên I_SlsOrdConfAnalyticsCube."
keywords:
  - "Analytics - Analyze Confirmations of Sales Orders"
  - "confirmation"
  - "sales"
  - "orders"
  - "query"
  - "order"
  - "item"
  - "type"
  - "category"
  - "document"
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
  - bo:companycode
---
# C_SLSORDCONFANLYTSQRY

**This CDS view provides the prerequisites for answering the following business questions, for example: Have my sales order items been confirmed for delivery on the date requested by the customer? Have I got backlogs or bottlenecks regarding my customer's requested quantity and delivery date, for example, in the form of backorders?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  | `CHAR(10)` | Sales Order |
| `SalesOrderItem` | ✓ | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesOrderItemCategory` |  | |  |  | `CHAR(4)` | Sales Order Item Category |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `IsReturnsItem` |  | |  |  | `CHAR(1)` | Returns Item |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NetAmountInDisplayCurrency` |  | |  |  | `CURR(19)` | Net Value in Display Currency |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreatedByUserName` |  | |  |  | `CHAR(80)` | User Description |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `SalesOrderDateYear` |  | |  |  | `NUMC(4)` | Year of Order |
| `SalesOrderDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter of Order |
| `SalesOrderDateYearMonth` |  | |  |  | `NUMC(6)` | Month of Order |
| `SalesOrderDateYearWeek` |  | |  |  | `NUMC(6)` | Week of Order |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `OriginallyRequestedMaterial` |  | |  |  | `CHAR(40)` | Material Entered |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `InternationalArticleNumber` |  | |  |  | `CHAR(18)` | International Article Number (EAN/UPC) |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `ProductCatalog` |  | |  |  | `CHAR(10)` | Product Catalog Number |
| `MaterialSubstitutionReason` |  | |  |  | `CHAR(4)` | Reason for Material Substitution |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductionPlant` |  | |  | `Plant` | `CHAR(4)` | Plant (Own or External) |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `ProductConfiguration` |  | |  |  | `NUMC(18)` | Product Configuration |
| `MainItemPricingRefProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` |  | |  |  | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` |  | |  |  | `CHAR(1)` | Determine cost |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SoldToPartyClassification` |  | |  |  | `CHAR(2)` | Customer Classification |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `ResponsibleEmployee` |  | |  |  | `NUMC(8)` | Employee Responsible |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `CreditControlArea` |  | |  |  | `CHAR(4)` | Credit Control Area |
| `CustomerRebateAgreement` |  | |  |  | `CHAR(10)` | Customer Rebate Agreement |
| `SalesOrderDate` |  | |  |  | `DATS(8)` | Document Date (Date Received/Sent) |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `SDDocumentCollectiveNumber` |  | |  |  | `CHAR(10)` | Collective Number (SD) |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `CustomerPurchaseOrderSuplmnt` |  | |  |  | `CHAR(4)` | Purchase order number supplement |
| `SalesOrderItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `UnderlyingPurchaseOrderItem` |  | |  |  | `CHAR(6)` | Item Number of the Underlying Purchase Order |
| `ServicesRenderedDate` |  | |  |  | `DATS(8)` | Date on which services are rendered |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `SalesDeal` |  | |  |  | `CHAR(10)` | Sales Deal |
| `SalesDealDescription` |  | |  |  | `CHAR(40)` | Sales Deal Description |
| `SalesPromotion` |  | |  |  | `CHAR(10)` | Sales Promotion |
| `RetailPromotion` |  | |  |  | `CHAR(10)` | Retail Promotion |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ItemOrderProbabilityInPercent` |  | |  |  | `NUMC(3)` | Order Probability of the Item |
| `SalesOrderCondition` |  | |  |  | `CHAR(10)` | Sales Order Condition |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Translation Date |
| `StatisticalValueControl` |  | |  |  | `CHAR(1)` | Statistical Values |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `CompleteDeliveryIsDefined` |  | |  |  | `CHAR(1)` | Complete Delivery Defined for Each Sales Order |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Indicator |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `DeliveryDateQuantityIsFixed` |  | |  |  | `CHAR(1)` | Fixed Delivery Date and Quantity |
| `PartialDeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Partial Delivery at Item Level |
| `MaxNmbrOfPartialDelivery` |  | |  |  | `DEC(1)` | Number of Allowed Partial Deliveries |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  | `CHAR(1)` | Unlimited Overdelivery Allowed |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `OpenDeliveryLeadingUnitCode` |  | |  |  | `CHAR(1)` | ID: Leading unit of measure for completing a transaction |
| `ItemIsDeliveryRelevant` |  | |  |  | `CHAR(1)` | Item Is Relevant for Delivery |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `HeaderBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block in SD Document |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `ItemBillingBlockReason` |  | |  |  | `CHAR(2)` | Billing Block Reason for Item |
| `BillingPlan` |  | |  |  | `CHAR(10)` | Billing Plan Number / Invoicing Plan Number |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `FixedValueDate` |  | |  |  | `DATS(8)` | Fixed Value Date |
| `AdditionalValueDays` |  | |  |  | `NUMC(2)` | Additional Value Days |
| `CustomerProject` |  | |  |  | `CHAR(40)` | Commercial Project ID |
| `EngagementProjectName` |  | | `_CustomerProject` | `EngagementProjectName` | `CHAR(40)` | Customer Project Name |
| `ExchangeRateType` |  | |  |  | `CHAR(4)` | Exchange Rate Type (Document) |
| `CostCenterBusinessArea` |  | |  |  | `CHAR(4)` | Business Area from Cost Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Account Assignment Group for Customer |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `WBSElement` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) - Deprecated |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `OrderID` |  | |  |  | `CHAR(12)` | Order Number |
| `ControllingObject` |  | |  |  | `CHAR(22)` | Controlling Object |
| `ProfitabilitySegment` |  | |  |  | `NUMC(10)` | Deprecated: Profitability Segment |
| `ProfitabilitySegment_2` |  | |  |  | `CHAR(10)` | Profitability Segment |
| `OriginSDDocument` |  | |  |  | `CHAR(10)` | Originating Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BusinessSolutionOrder` |  | |  |  | `CHAR(10)` | Solution Order |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallPurchaseConfStatus` |  | |  |  | `CHAR(1)` | Purchase Order Confirmation Status (All Items) |
| `OverallSDDocumentRejectionSts` |  | |  |  | `CHAR(1)` | Rejection Status (All Items) |
| `TotalBlockStatus` |  | |  |  | `CHAR(1)` | Overall Block Status (Header) |
| `OverallTotalDeliveryStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Status (All Items) |
| `OverallDeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status (All Items) |
| `OverallDeliveryBlockStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Block Status (All Items) |
| `OverallOrdReltdBillgStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (All Items) |
| `OverallBillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (All Items) |
| `TotalCreditCheckStatus` |  | |  |  | `CHAR(1)` | Overall Status of Credit Checks |
| `PaymentTermCreditCheckStatus` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Terms of Payment |
| `PaytAuthsnCreditCheckSts` |  | |  |  | `CHAR(1)` | Status of Credit Check Against Payment Card Authorization |
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
| `SlsDocItmReqdDelivConfSts` |  | |  |  | `CHAR(1)` | Sales Order Item Confirmation Status |
| `OrderQuantity` |  | |  |  | `QUAN(15)` | Cumulative Order Quantity in Sales Unit |
| `ConfdDelivQtyInOrderQtyUnit` |  | |  |  | `QUAN(15)` | Cumulative Confirmed Quantity in Sales Unit |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `SlsDocItmSchdLnConfdQty` |  | |  |  | `QUAN(15)` | Overall confirmed sales order schedule lines: quantity |
| `SlsDocItmSchdLnDlydQty` |  | |  |  | `QUAN(15)` | Overall delayed sales order schedule lines: qty |
| `SlsDocItmSchdLnUnconfdQty` |  | |  |  | `QUAN(15)` | Overall unconfirmed sales order schedule lines: quantity |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `TotDelayOfSchdLnConfdToReqdDte` |  | |  |  | `INT8(19)` | Total delay of requested delivery date in days |
| `MaxDelayOfSchdLnConfdToReqdDte` |  | |  |  | `INT4(10)` | Maximum delay of requested delivery date in days |
| `MinDelayOfSchdLnConfdToReqdDte` |  | |  |  | `INT4(10)` | Minimum delay of requested delivery date in days |
| `SlsDocItmSchdLnConfdAmtInDC` |  | |  | `cast (currency_conversion( amount => SlsDocItmSchdLnConfdAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesOrderDate, exchange_rate_type => :P_ExchangeRateType ) as ovr_conf_so_sl_amt_idc)` | `CURR(19)` | Overall confirmed SO schedule lines: amt in display curr. |
| `SlsDocItmSchdLnDlydAmtInDC` |  | |  | `cast (currency_conversion( amount => SlsDocItmSchdLnDlydAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesOrderDate, exchange_rate_type => :P_ExchangeRateType ) as ovr_conf_delayed_so_sl_amt_idc)` | `CURR(19)` | Overall delayed SO sched. lines: amt in disp.curr. |
| `SlsDocItmSchdLnUnconfdAmtInDC` |  | |  | `cast (currency_conversion( amount => SlsDocItmSchdLnUnconfdAmt, source_currency => TransactionCurrency, target_currency => :P_DisplayCurrency, exchange_rate_date => SalesOrderDate, exchange_rate_type => :P_ExchangeRateType ) as ovr_unconf_so_sl_amt_idc)` | `CURR(19)` | Overall unconfirmed SO schedule lines: amt in display curr. |
| `NmbrOfSlsDocItemsConfdAsReqd` |  | |  |  | `DEC(9)` | Number of confirmed sales order items as requested |
| `NmbrOfSlsDocItemsConfdDlyd` |  | |  |  | `DEC(9)` | Number of delayed sales order items as requested |
| `NmbrOfSlsDocItemsConfdPrtly` |  | |  |  | `DEC(9)` | Number of partially confirmed sales order items as requested |
| `NmbrOfSlsDocItemsUnconfd` |  | |  |  | `DEC(9)` | Number of unconfirmed sales order items  as requested |
| `DelivBlockReasonForSchedLine` |  | |  |  | `CHAR(2)` | Schedule Line Blocked for Delivery |
| `SlsDocItemsConfdAsReqdRatio` |  | |  | `cast(1 as req_conf_so_itm_ratio)` | `DEC(13)` | Ratio of Confirmed Sales Order Items as Requested |
| `SlsDocItemsConfdDlydRatio` |  | |  | `cast(1 as req_conf_delayed_so_itm_ratio)` | `DEC(13)` | Ratio of Delayed Sales Order Items as Requested |
| `SlsDocItemsConfdPrtlyRatio` |  | |  | `cast(1 as req_part_conf_so_itm_ratio)` | `DEC(13)` | Ratio of Partially Confirmed Sales Order Items  as Requested |
| `SlsDocItemsUnconfdRatio` |  | |  | `cast(1 as req_unconf_so_itm_ratio)` | `DEC(13)` | Ratio of Unconfirmed Sales Order Items as Requested |
| `_DelivBlockReasonForSchedLine` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSORDCONFANLYTSQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #XL
@EndUserText.label: 'Confirmation of Sales Orders - Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CSDSLSORDCONFAQ'
@AbapCatalog.compiler.compareFilter: true
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true --AT^2: 8.5.2019
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@ObjectModel.supportedCapabilities:  [ #ANALYTICAL_QUERY ]

/////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTE  (AT 16.5.2018)                                      //   
//                                                                     //                                               
// This model exposes abstracted business driven KPIs.                 //
//                                                                     //
// To achieve an acceptable performance, please consider to use        // 
// this model in a business suitable manner:                           //    
// - use only the minimal viable set of dimensions and KPIs            //
// - consider using filters, like salesOrganization, MaterialGroup,    //
//   Plant, TotalDeliveryStatus, CreationDate etc., that allow  a      //
//   good focus on the relevant data                                   //
//                                                                     //
/////////////////////////////////////////////////////////////////////////


define view C_SlsOrdConfAnlytsQry
  with parameters
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_ExchangeRateType',
        element:'ExchangeRateType'
      }
    }]     
    P_ExchangeRateType : kurst,
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_SlsOrdConfAnalyticsCube(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      //Keys
  key SalesOrder,
  key SalesOrderItem,
                                   
      //Category
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrderType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrderItemCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentCategory,
      --SalesOrderItemType,
      IsReturnsItem,

      @Semantics.currencyCode: true
      @UI.hidden: true
      DisplayCurrency,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      NetAmountInDisplayCurrency,
      
      //Admin
      CreatedByUser,
      CreatedByUserName,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      @Semantics.calendar.year
      SalesOrderDateYear,
      @Semantics.calendar.yearQuarter
      SalesOrderDateYearQuarter,
      @Semantics.calendar.yearMonth
      SalesOrderDateYearMonth,
      @Semantics.calendar.yearWeek
      SalesOrderDateYearWeek,
      

      //Orgnization
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      PartnerCompany,                                   -- AT BK1.7.2021 CE2111

      //Product
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED            --AT25.10.2019: deprecation added
      @API.element.successor: 'Product'
      Material,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      InternationalArticleNumber,
      Batch,
      ProductHierarchyNode,
      ProductCatalog,
      @AnalyticsDetails.query.display: #KEY_TEXT
      MaterialSubstitutionReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @API.element.releaseState: #DEPRECATED        --AT25.10.2019: deprecation & ProductGroup added
      @API.element.successor: 'ProductGroup'
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      ProductGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup1,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup3,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup4,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalMaterialGroup5,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant                 as   ProductionPlant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      StorageLocation,
      ProductConfiguration,
      
      //BoM
      MainItemPricingRefProduct,
      BillOfMaterial,
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,

      //Partner
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToPartyClassification,
      //Country,
      //_SalesOrder._SoldToParty._Address._Country._Text[1: Language=$parameters.P_Language].CountryName,
      //Region,
      //Regionname wait for correction in I_address, association on condition
      //CityName,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PayerParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ResponsibleEmployee,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesEmployee,

      //Sales
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup1,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup3,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup4,
      @AnalyticsDetails.query.display: #KEY_TEXT
      AdditionalCustomerGroup5,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CreditControlArea,
      CustomerRebateAgreement,
      SalesOrderDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentReason,
      SDDocumentCollectiveNumber,
      CustomerPurchaseOrderType,
      CustomerPurchaseOrderDate,
      CustomerPurchaseOrderSuplmnt,
      SalesOrderItemText,
      PurchaseOrderByCustomer,
      UnderlyingPurchaseOrderItem,

      ServicesRenderedDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      SalesDeal,
      SalesDealDescription,
      SalesPromotion,
      RetailPromotion,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDocumentRjcnReason,

      //Quotation
      ItemOrderProbabilityInPercent,

      //Contract
      //Comment due to infoobjects error while activating:OrderQuantityUnitDcmls,

      //Pricing
      SalesOrderCondition,
      PricingDate,
      ExchangeRateDate,
      //Comment due to infoobjects error while activating:PriceDetnExchangeRate,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      StatisticalValueControl,

      //Shipping
      RequestedDeliveryDate,
      //_SalesOrder.ShippingType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingCondition,
      CompleteDeliveryIsDefined,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryBlockReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingPoint,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingType,
      InventorySpecialStockType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryPriority,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Route,
      DeliveryDateQuantityIsFixed,
      @Analytics.internalName: #LOCAL
      PartialDeliveryIsAllowed,
      MaxNmbrOfPartialDelivery,
      UnlimitedOverdeliveryIsAllowed,
      //Comment due to infoobjects error while activating:OverdelivTolrtdLmtRatioInPct,
      //Comment due to infoobjects error while activating:UnderdelivTolrtdLmtRatioInPct,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,
      @AnalyticsDetails.query.display: #KEY_TEXT
      IncotermsVersion,
      OpenDeliveryLeadingUnitCode,
      ItemIsDeliveryRelevant,

      //Billing
      BillingCompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderBillingBlockReason,

      BillingDocumentDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ItemBillingBlockReason,
      --ItemIsBillingRelevant,
      BillingPlan,

      //Payment
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPaymentTerms,
      PaymentMethod,
      FixedValueDate,
      AdditionalValueDays,
      CustomerProject,
      // _CustomerProject._Text[1: Language=$parameters.P_Language].CustomerProjectName,
      _CustomerProject.EngagementProjectName,

      //Accounting
      ExchangeRateType,
      CostCenterBusinessArea,
      CostCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      FiscalYear,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerAccountAssignmentGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      ProfitCenter,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'WBSElementInternalID'
      WBSElement,
      @Analytics.internalName: #LOCAL
      WBSElementInternalID,
      @Analytics.internalName: #LOCAL
      WBSElementExternalID,
      OrderID,
      ControllingObject,
      --ProfitabilitySegment,  --AT14.04.2021 Deprecation of ProfitabilitySegment (Email Rene de V.)
      @API.element.releaseState: #DECOMMISSIONED
      @API.element.successor:    'ProfitabilitySegment_2'
      ProfitabilitySegment,
      ProfitabilitySegment_2 ,
      
      OriginSDDocument,
      --OriginSDDocumentItem,


      //Reference
      //ReferenceSDDocument,
      ReferenceSDDocumentItem,
      --ReferenceSDDocumentCategory,
      HigherLevelItem,
      @Analytics.internalName: #LOCAL
      BusinessSolutionOrder,  --AT19May2020: Added for CE2008
//      @Analytics.internalName: #LOCAL
//      BusinessSolutionOrderItem,  --AT4.6.2020 ignore Item Reference due to framework problems

      //Status
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDProcessStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallPurchaseConfStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDDocumentRejectionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalBlockStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --OverallDelivConfStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
//      @EndUserText.label: 'Ovrl Delivery Status (All Items)'  --ATce2002 no longer needed - underlying dataelement reworked !
      OverallTotalDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
//      @EndUserText.label: 'Delivery Status (All Items)'        --ATce2002 no longer needed - underlying dataelement reworked !
      OverallDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDeliveryBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallOrdReltdBillgStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallBillingBlockStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --OverallTotalSDDocRefStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --OverallSDDocReferenceStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalCreditCheckStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --MaxDocValueCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaymentTermCreditCheckStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --FinDocCreditCheckStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --ExprtInsurCreditCheckStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PaytAuthsnCreditCheckSts,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --CentralCreditCheckStatus,
      --@AnalyticsDetails.query.display: #KEY_TEXT
      --CentralCreditChkTechErrSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HdrGeneralIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallPricingIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderDelivIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HeaderBillgIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmGeneralIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmBillingIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OvrlItmDelivIncompletionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDProcessStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryConfirmationStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PurchaseConfirmationStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrderRelatedBillingStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ItemGeneralIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ItemBillingIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PricingIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ItemDeliveryIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentRejectionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalSDDocReferenceStatus,   
           
      --- as calculated dimension
      @AnalyticsDetails.query.display: #KEY_TEXT
      SlsDocItmReqdDelivConfSts, 
      
      
      //Measures
      //Quantities
      OrderQuantity,
      ConfdDelivQtyInOrderQtyUnit,
      OrderQuantityUnit,
             
   
      // KPI: Confirmation Info
     --Raw KPIs: Quantities
     SlsDocItmSchdLnConfdQty,   --Quantity Confirmed In Time (CiTQ)
     SlsDocItmSchdLnDlydQty,    --Quantity Confirmed With Delay (CwDQ = CumCQ – CiTQ )
     SlsDocItmSchdLnUnconfdQty, -- Quantity Not Confirmed   ( NCQ = CumReqQ – CumCQ )
     @Semantics.unitOfMeasure: true
     BaseUnit,

//    For consumer only converted amounts are relevant !
//    --Raw KPIs: Values/Amounts
//    SlsDocItmSchdLnConfdAmt,   --Value Confirmed in Time (CiTV = CiTV = GesamtWert * CiTQ / CumReqQ )
//    SlsDocItmSchdLnDlydAmt,    -- Value Confirmed With Delay (Ges.W. * CwDQ / CumReqQ)  
//    SlsDocItmSchdLnUnconfdAmt, -- Value Not Confirmed (Ges.W. * NCQ / CumReqQ)
   
    --Raw KPIs: Delays
    --AvgDelayOfSchdLnConfdToReqdDte,   --AvgDelay,  seems not to be supported by AE
    TotDelayOfSchdLnConfdToReqdDte,   --SumDelay ,
    MaxDelayOfSchdLnConfdToReqdDte,   --MaxDelay ,
    MinDelayOfSchdLnConfdToReqdDte,   --MINDelay    
   
    -- CurrencyConverted Value Confirmed in Time                                                                                                                                                                     as         DisplayCurrency,
//    @DefaultAggregation: #SUM
//    @Semantics.amount.currencyCode: 'DisplayCurrency'
//    SlsDocItmSchdLnConfdAmtInDC,
   @DefaultAggregation: #FORMULA
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   cast (currency_conversion(
    amount => SlsDocItmSchdLnConfdAmt,
    source_currency => TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesOrderDate,
    exchange_rate_type => :P_ExchangeRateType
   ) as ovr_conf_so_sl_amt_idc) as  SlsDocItmSchdLnConfdAmtInDC,


    -- CurrencyConverted Value Confirmed with Delay                                                                                                                                                                   as         DisplayCurrency,
//    @DefaultAggregation: #SUM
//    @Semantics.amount.currencyCode: 'DisplayCurrency'
//    SlsDocItmSchdLnDlydAmtInDC,
   @DefaultAggregation: #FORMULA
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   cast (currency_conversion(
    amount => SlsDocItmSchdLnDlydAmt,
    source_currency => TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesOrderDate,
    exchange_rate_type => :P_ExchangeRateType
   ) as ovr_conf_delayed_so_sl_amt_idc) as  SlsDocItmSchdLnDlydAmtInDC,    
    
  
    -- CurrencyConverted Value Not Confirmed                                                                                                                                                                     as         DisplayCurrency,
//    @DefaultAggregation: #SUM
//    @Semantics.amount.currencyCode: 'DisplayCurrency'
//    SlsDocItmSchdLnUnconfdAmtInDC,
   @DefaultAggregation: #FORMULA
   @Semantics.amount.currencyCode: 'DisplayCurrency'
   cast (currency_conversion(
    amount => SlsDocItmSchdLnUnconfdAmt,
    source_currency => TransactionCurrency,
    target_currency => :P_DisplayCurrency,
    exchange_rate_date => SalesOrderDate,
    exchange_rate_type => :P_ExchangeRateType
   ) as ovr_unconf_so_sl_amt_idc) as  SlsDocItmSchdLnUnconfdAmtInDC,      
  
  
    --Derived Number: Confirmed (Perfectly in quantity and time)
    @DefaultAggregation: #SUM
    NmbrOfSlsDocItemsConfdAsReqd,    
 
   --Derived Number: Confirmed with delay (Completely in Quantities but with delay)
    @DefaultAggregation: #SUM
    NmbrOfSlsDocItemsConfdDlyd,
  
    --Derived Number: Partially Confirmed (Partially in quantity)
    @DefaultAggregation: #SUM
    NmbrOfSlsDocItemsConfdPrtly,          

    --Derived Number: Not Confirmed (not at all)
    @DefaultAggregation: #SUM
    NmbrOfSlsDocItemsUnconfd ,
  
    @ObjectModel.foreignKey.association: '_DelivBlockReasonForSchedLine'
    DelivBlockReasonForSchedLine,
   _DelivBlockReasonForSchedLine,
   
    // Measures calculated by Analytical Engine  ---(calculated after aggregation -> Analytical Engine)
    -- Ratio Confirmed (Perfectly in quantity and time)
    @AnalyticsDetails.query.decimals: 3
    @AnalyticsDetails.query.formula: 'NDIV0($projection.NmbrOfSlsDocItemsConfdAsReqd / ( $projection.NmbrOfSlsDocItemsConfdAsReqd + $projection.NmbrOfSlsDocItemsConfdDlyd + $projection.NmbrOfSlsDocItemsConfdPrtly + $projection.NmbrOfSlsDocItemsUnconfd        ) )'
    cast(1 as req_conf_so_itm_ratio) as SlsDocItemsConfdAsReqdRatio, 
  
    --Ratio Confirmed with Delay (Completely in Quantity)
    @AnalyticsDetails.query.decimals: 3
    @AnalyticsDetails.query.formula: 'NDIV0($projection.NmbrOfSlsDocItemsConfdDlyd / ( $projection.NmbrOfSlsDocItemsConfdAsReqd + $projection.NmbrOfSlsDocItemsConfdDlyd + $projection.NmbrOfSlsDocItemsConfdPrtly + $projection.NmbrOfSlsDocItemsUnconfd        ) )'
    cast(1 as req_conf_delayed_so_itm_ratio) as SlsDocItemsConfdDlydRatio,

    --Ratio Partially Confirmed (Partially in quantity)
    @AnalyticsDetails.query.decimals: 3
    @AnalyticsDetails.query.formula: 'NDIV0($projection.NmbrOfSlsDocItemsConfdPrtly / ( $projection.NmbrOfSlsDocItemsConfdAsReqd + $projection.NmbrOfSlsDocItemsConfdDlyd + $projection.NmbrOfSlsDocItemsConfdPrtly + $projection.NmbrOfSlsDocItemsUnconfd        ) )'  
    cast(1 as req_part_conf_so_itm_ratio) as SlsDocItemsConfdPrtlyRatio,
  
    --Ratio Not Confirmed (not at all)
    @AnalyticsDetails.query.decimals: 3
    @AnalyticsDetails.query.formula: 'NDIV0($projection.NmbrOfSlsDocItemsUnconfd / ( $projection.NmbrOfSlsDocItemsConfdAsReqd + $projection.NmbrOfSlsDocItemsConfdDlyd + $projection.NmbrOfSlsDocItemsConfdPrtly + $projection.NmbrOfSlsDocItemsUnconfd        ) )'                                                   
    cast(1 as req_unconf_so_itm_ratio) as SlsDocItemsUnconfdRatio
      
}
where StatisticalValueControl = '' and IsReturnsItem = ''
```
