---
name: C_SALESQUOTATIONITEMQRY
description: This CDS view provides prerequisites for analyzing sales quotations on a variety of dimensions. It answers the following business questions: What are the net amounts of my sales quotations on a month-to-month basis? What is the item quantity of my sales quotations? Have my quotations been converted to orders? To what extent? What are the current situations of my quotations? Are they expiring, expired, or rejected?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESQUOTATIONITEMQRY')/$value
semantic_en: This CDS view provides prerequisites for analyzing sales quotations on a variety of dimensions. It answers the following business questions: What are the net amounts of my sales quotations on a month-to-month basis? What is the item quantity of my sales quotations? Have my quotations been converted to orders? To what extent? What are the current situations of my quotations? Are they expiring, expired, or rejected?
semantic_vi: Sales Quotation Item - Query — CDS view tiêu dùng dựa trên I_SalesQuotationItemCube_2.
keywords:
  - Sales Quotation Item - Query
  - sales
  - quotation
  - item
  - query
  - type
  - category
tags:
  - SD
  - bo:plant
  - component:SD-ANA-2CL
  - consumption-view
  - lob:sales & distribution
  - order
  - quotation
  - SD-ANA
  - SD-ANA-2CL
---
# C_SALESQUOTATIONITEMQRY

**This CDS view provides prerequisites for analyzing sales quotations on a variety of dimensions. It answers the following business questions: What are the net amounts of my sales quotations on a month-to-month basis? What is the item quantity of my sales quotations? Have my quotations been converted to orders? To what extent? What are the current situations of my quotations? Are they expiring, expired, or rejected?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESQUOTATIONITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesQuotation` | ✓ | |  |  | `CHAR(10)` | Sales Quotation |
| `SalesQuotationItem` | ✓ | |  |  | `NUMC(6)` | Sales Quotation Item |
| `SalesQuotationType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `SalesQuotationItemType` |  | |  |  | `CHAR(1)` | Item Type |
| `SalesQuotationItemCategory` |  | |  |  | `CHAR(4)` | Sales Document Item Category |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `SalesQuotationDate` |  | |  |  | `DATS(8)` | Document Date (Date Received/Sent) |
| `SalesQuotationDateYear` |  | |  |  | `NUMC(4)` | Year of Quotation |
| `SalesQuotationDateYearQuarter` |  | |  |  | `NUMC(5)` | Quarter of Quotation |
| `SalesQuotationDateYearMonth` |  | |  |  | `NUMC(6)` | Month of Quotation |
| `BindingPeriodValidityStartDate` |  | |  |  | `DATS(8)` | Quotation/Inquiry is Valid From |
| `BindingPeriodValidityEndDate` |  | |  |  | `DATS(8)` | Date Until Which Bid/Quotation is Binding (Valid-To Date) |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `SDDocumentReason` |  | |  |  | `CHAR(3)` | Order Reason (Reason for the Business Transaction) |
| `CustomerPurchaseOrderType` |  | |  |  | `CHAR(4)` | Customer Purchase Order Type |
| `PurchaseOrderByCustomer` |  | |  |  | `CHAR(35)` | Customer Reference |
| `CustomerPurchaseOrderDate` |  | |  |  | `DATS(8)` | Customer Reference Date |
| `SalesQuotationItemText` |  | |  |  | `CHAR(40)` | Short Text for Sales Order Item |
| `SalesDocumentRjcnReason` |  | |  |  | `CHAR(2)` | Reason for Rejection of Sales Documents |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `RequestedDeliveryDate` |  | |  |  | `DATS(8)` | Requested Delivery Date |
| `ShippingCondition` |  | |  |  | `CHAR(2)` | Shipping Conditions |
| `CompleteDeliveryIsDefined` |  | |  |  | `CHAR(1)` | Complete Delivery Defined for Each Sales Order |
| `DeliveryBlockReason` |  | |  |  | `CHAR(2)` | Delivery Block (Document Header) |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `DeliveryPriority` |  | |  |  | `NUMC(2)` | Delivery Priority |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `Route` |  | |  |  | `CHAR(6)` | Route |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `OriginallyRequestedMaterial` |  | |  |  | `CHAR(40)` | Material Entered |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `MainItemPricingRefProduct` |  | |  |  | `CHAR(40)` | Pricing Reference Product of Main Item |
| `HigherLevelItem` |  | |  |  | `NUMC(6)` | Higher-Level Item in Bill of Material Structures |
| `BillOfMaterial` |  | |  |  | `CHAR(8)` | Bill of Material |
| `PropagatePrftbltySgmt2BOM` |  | |  |  | `CHAR(1)` | Propagate Profitability Segment to BOM (Sales Kit) Sub-Items |
| `CostDeterminationIsRequired` |  | |  |  | `CHAR(1)` | Determine cost |
| `PricingDate` |  | |  |  | `DATS(8)` | Date for Pricing and Exchange Rate |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `IncotermsVersion` |  | |  |  | `CHAR(4)` | Incoterms Version |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
| `IncotermsTransferLocation` |  | |  |  | `CHAR(28)` | Incoterms (Part 2) |
| `IncotermsLocation1` |  | |  |  | `CHAR(70)` | Incoterms Location 1 |
| `IncotermsLocation2` |  | |  |  | `CHAR(70)` | Incoterms Location 2 |
| `CustomerPaymentTerms` |  | |  |  | `CHAR(4)` | Key for Terms of Payment |
| `PaymentMethod` |  | |  |  | `CHAR(1)` | Payment Method |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `BillingDocumentDate` |  | |  |  | `DATS(8)` | Billing Date |
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `FiscalPeriod` |  | |  |  | `NUMC(3)` | Posting Period |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CustomerAccountAssignmentGroup` |  | |  |  | `CHAR(2)` | Account Assignment Group for Customer |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | Category of Reference Document |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | SD Document Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `SalesQuotationNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Net Amount of Sales Quotation Items in Display Currency |
| `CnvrtdSalesQtanNetAmtInDspCrcy` |  | |  |  | `CURR(19)` | Converted Sales Quoation Net Amount in Display Currency |
| `SalesQuotationConversionRate` |  | |  | `cast (1 as sd_quotation_conversion_rate)` | `DEC(7)` | Sales Quotation Conversion Rate |
| `SalesQuotationQuantity` |  | |  |  | `QUAN(15)` | Quantity of Sales Quotation Items |
| `NmbrOfOpenSlsQuotationItems` |  | |  |  | `INT8(19)` | Number of Open Sales Quotation Items |
| `SlsQuotationOpenNetAmtInDC` |  | |  |  | `CURR(19)` | Net Value of Open Sales Quotations in Display Currency |
| `NmbrOfExpiredSlsQuotationItems` |  | |  |  | `INT8(19)` | Number of Items in Expired Sales Quotations |
| `SlsQuotationExpiredNetAmtInDC` |  | |  |  | `CURR(19)` | Net Value of Expired Sales Quotations in Display Currency |
| `NmbrOfExprgSlsQuotationItems` |  | |  |  | `INT8(19)` | Number of Items in Expiring Sales Quotations |
| `SlsQuotationExpiringNetAmtInDC` |  | |  |  | `CURR(19)` | Net Value of Expiring Sales Quotations in Display Currency |
| `NmbrOfRejectedSlsQtanItems` |  | |  |  | `INT8(19)` | Number of Rejected Sales Quotation Items |
| `SlsQtanRejectedNetAmountInDC` |  | |  |  | `CURR(19)` | Net Value of Rejected Quotation Items in Display Currency |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
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
| `HdrGeneralIncompletionStatus` |  | |  |  | `CHAR(1)` | Incompletion Status (Header) |
| `HeaderDelivIncompletionStatus` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (Header) |
| `HeaderBillgIncompletionStatus` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (Header) |
| `OvrlItmGeneralIncompletionSts` |  | |  |  | `CHAR(1)` | Incompletion Status (All Items) |
| `OvrlItmBillingIncompletionSts` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (All Items) |
| `OvrlItmDelivIncompletionSts` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (All Items) |
| `SDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Item) |
| `DeliveryConfirmationStatus` |  | |  |  | `CHAR(1)` | Delivery Confirmation Status (Item) |
| `TotalDeliveryStatus` |  | |  |  | `CHAR(1)` | Overall Delivery Status (Item) |
| `DeliveryStatus` |  | |  |  | `CHAR(1)` | Delivery Status (Item) |
| `DeliveryBlockStatus` |  | |  |  | `CHAR(1)` | Delivery Block Status (Item) |
| `OrderRelatedBillingStatus` |  | |  |  | `CHAR(1)` | Order-Related Billing Status (Item) |
| `BillingBlockStatus` |  | |  |  | `CHAR(1)` | Billing Block Status (Item) |
| `ItemGeneralIncompletionStatus` |  | |  |  | `CHAR(1)` | Incompletion Status (Item) |
| `ItemBillingIncompletionStatus` |  | |  |  | `CHAR(1)` | Billing Incompletion Status (Item) |
| `ItemDeliveryIncompletionStatus` |  | |  |  | `CHAR(1)` | Delivery Incompletion Status (Item) |
| `SDDocumentRejectionStatus` |  | |  |  | `CHAR(1)` | Rejection Status (Item) |
| `TotalSDDocReferenceStatus` |  | |  |  | `CHAR(1)` | Overall Reference Status (Item) |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESQUOTATIONITEMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESQUOTATIONITEMQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Quotation Item - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AbapCatalog: {
   sqlViewName: 'CSDSLSQTANITMQRY',
   compiler.compareFilter: true,
   preserveKey: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #L
   }
}
@Analytics.query:true
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true

define view C_SalesQuotationItemQry
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
as select from I_SalesQuotationItemCube_2(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency)
{
      //Key
  key SalesQuotation,
  key SalesQuotationItem,

      //Category
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesQuotationType,
      SalesQuotationItemType,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesQuotationItemCategory,

      //Admin
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @AnalyticsDetails.query.axis: #COLUMNS
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      SalesQuotationDate,
      @Semantics.calendar.year
      SalesQuotationDateYear,
      @Semantics.calendar.yearQuarter
      SalesQuotationDateYearQuarter,
      @Semantics.calendar.yearMonth
      SalesQuotationDateYearMonth,

      //Quotation Valid Period
      BindingPeriodValidityStartDate,
      BindingPeriodValidityEndDate,

      //Orgnization
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.axis: #ROWS
      @AnalyticsDetails.query.totals: #SHOW
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      PartnerCompany, 
      
      //Sales
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true, mandatory: false} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
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
      SDDocumentReason,
      CustomerPurchaseOrderType,
      PurchaseOrderByCustomer,
      CustomerPurchaseOrderDate,
      SalesQuotationItemText,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDocumentRjcnReason,

      //Shipping
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      RequestedDeliveryDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingCondition,
      CompleteDeliveryIsDefined,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryBlockReason,
      ShippingPoint,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DeliveryPriority,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingType,
      Route,

      //Product
      @Consumption.filter: {selectionType: #RANGE, multipleSelections: true} 
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      OriginallyRequestedMaterial,
      MaterialByCustomer,
      @AnalyticsDetails.query.display: #KEY_TEXT
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
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      StorageLocation,
      
      //BoM
      MainItemPricingRefProduct,
      HigherLevelItem,
      BillOfMaterial,
      PropagatePrftbltySgmt2BOM,
      CostDeterminationIsRequired,      

      //Pricing
      PricingDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,

      //Terms of Delivery
      IncotermsVersion,
      IncotermsClassification,
      IncotermsTransferLocation,
      IncotermsLocation1,
      IncotermsLocation2,

      //Payment
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerPaymentTerms,
      PaymentMethod,

      //Billing
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingCompanyCode,
      BillingDocumentDate,

      //Accounting
      FiscalYear,
      FiscalPeriod,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,
      ProfitCenter,
      CustomerAccountAssignmentGroup,

      //Reference
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReferenceSDDocumentCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReferenceSDDocument,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReferenceSDDocumentItem,

      @Semantics.currencyCode: true
      DisplayCurrency,
      @Semantics.currencyCode: true
      TransactionCurrency,
      @Semantics.unitOfMeasure: true
      BaseUnit,

      //KPI of Quotation
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesQuotationNetAmtInDspCrcy,

      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      CnvrtdSalesQtanNetAmtInDspCrcy,

      @EndUserText.label: 'Conversion Rate'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.CnvrtdSalesQtanNetAmtInDspCrcy / $projection.SalesQuotationNetAmtInDspCrcy )'
      cast (1 as sd_quotation_conversion_rate)  as SalesQuotationConversionRate,

      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesQuotationQuantity,
      
      @DefaultAggregation: #SUM
      NmbrOfOpenSlsQuotationItems,
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsQuotationOpenNetAmtInDC,
      
      @DefaultAggregation: #SUM
      NmbrOfExpiredSlsQuotationItems,
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsQuotationExpiredNetAmtInDC,
      
      @DefaultAggregation: #SUM
      NmbrOfExprgSlsQuotationItems,
      
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsQuotationExpiringNetAmtInDC,
      
      @DefaultAggregation: #SUM
      NmbrOfRejectedSlsQtanItems,
   
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SlsQtanRejectedNetAmountInDC,
      
      //Status
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDProcessStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDDocumentRejectionSts,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDelivConfStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallTotalDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDeliveryStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallDeliveryBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallOrdReltdBillgStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallBillingBlockStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallTotalSDDocRefStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OverallSDDocReferenceStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      HdrGeneralIncompletionStatus,
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
      ItemDeliveryIncompletionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentRejectionStatus,
      @AnalyticsDetails.query.display: #KEY_TEXT
      TotalSDDocReferenceStatus
}
```
