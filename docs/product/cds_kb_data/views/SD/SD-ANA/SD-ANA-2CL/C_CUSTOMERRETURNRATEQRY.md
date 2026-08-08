---
name: C_CUSTOMERRETURNRATEQRY
description: "This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?"
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value
semantic_en: "This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?"
semantic_vi: "Customer Return Rate - Query — CDS view tiêu dùng dựa trên I_CustomerReturnRateCube."
keywords:
  - "Customer Return Rate - Query"
  - "customer"
  - "return"
  - "rate"
  - "query"
  - "sales"
  - "document"
  - "item"
  - "category"
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - lob:sales & distribution
  - product
  - SD-ANA
  - SD-ANA-2CL
---
# C_CUSTOMERRETURNRATEQRY

**This CDS view provides customer return rates by various dimensions such as sales organization, customer group, sold-to-party, product, and time period, among others. The customer return rates are either value-based or quantity-based. The CDS view provides the prerequisites for answering the following business questions: What items have been returned? What are the top return reasons? How many items have been returned? What is the returned value? Are there customers with a very high return rate? Are there products with a very high return rate? How do customer return rates change over time?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDocument` | ✓ | |  |  | `CHAR(10)` | Sales Document |
| `SalesDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales Document Item |
| `CustomerReturn` |  | |  |  | `CHAR(10)` | Customer Return |
| `CustomerReturnItem` |  | |  |  | `NUMC(6)` | Customer Return Item |
| `SDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | Category of Reference Document |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `PartnerCompany` |  | |  |  | `CHAR(6)` | Company ID of Trading Partner |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `CustomerGroup` |  | |  |  | `CHAR(2)` | Customer Group |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `BillToParty` |  | |  |  | `CHAR(10)` | Bill-to Party |
| `PayerParty` |  | |  |  | `CHAR(10)` | Payer |
| `AdditionalCustomerGroup1` |  | |  |  | `CHAR(3)` | Customer Group 1 |
| `AdditionalCustomerGroup2` |  | |  |  | `CHAR(3)` | Customer Group 2 |
| `AdditionalCustomerGroup3` |  | |  |  | `CHAR(3)` | Customer Group 3 |
| `AdditionalCustomerGroup4` |  | |  |  | `CHAR(3)` | Customer Group 4 |
| `AdditionalCustomerGroup5` |  | |  |  | `CHAR(3)` | Customer Group 5 |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `ProductHierarchyNode` |  | |  |  | `CHAR(18)` | Product Hierarchy |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `ReturnReason` |  | |  |  | `CHAR(3)` | Return Reason |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ReferenceSlsDocItmBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Reference Document Item |
| `ReferenceSlsDocItmNetAmtInDC` |  | |  |  | `CURR(19)` | Net Value of Reference Items in Display Currency |
| `ReferenceSlsDocItmQuantity` |  | |  |  | `QUAN(15)` | Quantity of Reference Items |
| `IncomingSalesOrdersNetAmtInDC` |  | |  |  | `CURR(19)` | Incoming Sales Orders Net Value In Display Currency |
| `IncomingSalesOrdersQuantity` |  | |  |  | `QUAN(15)` | Incoming Sales Orders Quantity |
| `IncomingCustReturnsNetAmtInDC` |  | |  |  | `CURR(19)` | Net Amount of Customer Return Items in Display Currency |
| `IncomingCustReturnsQuantity` |  | |  |  | `QUAN(15)` | Customer Return Item Quantity |
| `CustomerReturnAmountReturnRate` |  | |  | `cast (1 as sd_amt_bsd_return_rate)` | `DEC(7)` | Return Rate (Value-Based) |
| `CustomerReturnQtyReturnRate` |  | |  | `cast (1 as sd_qty_bsd_return_rate)` | `DEC(7)` | Return Rate (Quantity-Based) |
| `NumberOfIncomingCustRetItems` |  | |  |  | `INT4(10)` | Number of Items in Customer Returns |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CUSTOMERRETURNRATEQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Customer Return Rate - Query'
@AbapCatalog: {
  sqlViewName: 'CSDCUSTRETRATEQ',
  compiler.compareFilter: true,
  preserveKey: true
}
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@ObjectModel.usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
}
@VDM.viewType: #CONSUMPTION
@Analytics.query:true
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true

define view C_CustomerReturnRateQry
  with parameters
    @Consumption.defaultValue: 'M'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_ExchangeRateType',
        element:'ExchangeRateType'
      }
    }]      
    P_ExchangeRateType : kurst,
    @Consumption.valueHelpDefinition: [{
       entity:{name: 'I_Currency', element :'Currency'}
    }]
    P_DisplayCurrency  : vdm_v_display_currency
  as select from I_CustomerReturnRateCube(P_ExchangeRateType:$parameters.P_ExchangeRateType, P_DisplayCurrency: $parameters.P_DisplayCurrency) as CRRC
{
      // Key
  key SalesDocument,
  key SalesDocumentItem,

      CustomerReturn,
      CustomerReturnItem,

      @AnalyticsDetails.query.display: #KEY_TEXT
      SDDocumentCategory,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDocumentType,

      // Date
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @Semantics.calendar.year
      CreationDateYear,

      // Reference
      ReferenceSDDocument,
      ReferenceSDDocumentItem,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReferenceSDDocumentCategory,

      // Sales Organization
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @AnalyticsDetails.query.display: #KEY_TEXT
      DistributionChannel,
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @Analytics.internalName: #LOCAL
      PartnerCompany,
      
      // Partner
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CustomerGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShipToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToParty,
      @AnalyticsDetails.query.display: #KEY_TEXT
      PayerParty, 
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

      // Product
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProductGroup,
      MaterialByCustomer,
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
      ProductHierarchyNode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,

      // Others
      @AnalyticsDetails.query.display: #KEY_TEXT
      ReturnReason,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingCompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      CostCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,

      @Semantics.currencyCode: true
      @UI.hidden: true
      DisplayCurrency,
      @Semantics.unitOfMeasure: true
      BaseUnit,
      @Semantics.unitOfMeasure: true
      ReferenceSlsDocItmBaseUnit,

      // KPI: Reference Amount & Quantity
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      ReferenceSlsDocItmNetAmtInDC,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'ReferenceSlsDocItmBaseUnit'
      ReferenceSlsDocItmQuantity,

      // KPI: Incoming Orders         
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      IncomingSalesOrdersNetAmtInDC,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      IncomingSalesOrdersQuantity,

      // KPI: Incoming Returns
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      IncomingCustReturnsNetAmtInDC,
                    
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      IncomingCustReturnsQuantity,

      // KPI: Customer Returns Rate (Value based)
      @EndUserText.label: 'Return Rate (Value-Based)'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.IncomingCustReturnsNetAmtInDC / $projection.IncomingSalesOrdersNetAmtInDC )'
      cast (1 as sd_amt_bsd_return_rate)  as CustomerReturnAmountReturnRate,

      // KPI: Customer Returns Rate (quantity based)
      @EndUserText.label: 'Return Rate (Quantity-Based)'
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula: 'NDIV0( $projection.IncomingCustReturnsQuantity / $projection.IncomingSalesOrdersQuantity )'
      cast (1 as sd_qty_bsd_return_rate)  as CustomerReturnQtyReturnRate,

      @DefaultAggregation: #SUM
      NumberOfIncomingCustRetItems
}
```
