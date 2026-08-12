---
name: C_SLSPERFPLANACTUALQUERY
description: "This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SD-ANA-SP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value
semantic_en: "This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Planned and Actual Sales Perf - Query — CDS view tiêu dùng dựa trên I_SlsPerformancePlanActualCube."
keywords:
  - "Sales Performance Plan and Actual - Qry"
  - "planned"
  - "and"
  - "actual"
  - "sales"
  - "perf"
  - "query"
  - "plan"
  - "item"
  - "document"
  - "type"
  - "billing"
tags:
  - SD
  - billing
  - bo:billingdocument
  - component:SD-ANA-SP-2CL
  - consumption-view
  - document
  - lob:sales & distribution
  - order
  - plan
  - product
  - sales-order
  - SD-ANA
  - SD-ANA-SP
  - SD-ANA-SP-2CL
---
# C_SLSPERFPLANACTUALQUERY

**This CDS view retrieves sales performance data, including plan and actual data. This CDS view provides the data to answer the following business questions: What's the planned sales value or sales quantity over a period? What's the actual sales value or sales quantity (based on incoming sales orders) over a period? What's the actual sales value or sales quantity (based on sales volume) over a period? Is the sales target reached as planned for a particular product? The system retrieves the actual data from sales documents if the plan data represents incoming sales orders, and from billing documents if the plan data represents sales volume. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SD-ANA-SP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesPlanItemUUID` | ✓ | |  |  | `RAW(16)` | Sales Plan Item UUID |
| `SDDocument` | ✓ | |  |  | `CHAR(10)` | Sales and Distribution Document Number |
| `SDDocumentItem` | ✓ | |  |  | `NUMC(6)` | Sales and Distribution Document Item |
| `SalesDocumentType` |  | |  |  | `CHAR(4)` | Sales Document Type |
| `BillingDocumentType` |  | |  |  | `CHAR(4)` | Billing Type |
| `SalesPlanPurpose` |  | |  |  | `CHAR(1)` | Purposes of Sales Planning |
| `SalesPlanPeriodName` |  | |  |  | `CHAR(20)` | Sales Plan Period |
| `SalesPerformanceDate` |  | |  |  | `DATS(8)` | Sales Performance Date |
| `SalesPerformanceYearMonth` |  | |  |  | `NUMC(6)` | Month of Sales Performance |
| `SlsPerformanceYearQuarter` |  | |  |  | `NUMC(5)` | Quarter of Sales Performance |
| `SalesPerformanceYear` |  | |  |  | `NUMC(4)` | Year of Sales Performance |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `OrganizationDivision` |  | |  |  | `CHAR(2)` | Organization Division |
| `SalesOffice` |  | |  |  | `CHAR(4)` | Sales Office |
| `SalesGroup` |  | |  |  | `CHAR(3)` | Sales Group |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
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
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `SalesEmployee` |  | |  |  | `NUMC(8)` | Sales Employee |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `ShippingType` |  | |  |  | `CHAR(2)` | Shipping Type |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `BusinessArea` |  | |  |  | `CHAR(4)` | Business Area |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `BillToPartyCountry` |  | |  |  | `CHAR(3)` | Destination Country/Region of Sales Order |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `BillToPartyRegion` |  | |  |  | `CHAR(3)` | Region of Sales Order |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `SalesPlanAmountInDspCrcy` |  | |  |  | `CURR(19)` | Sales Plan Amount in Display Currency |
| `SalesPerfActlAmtInDspCurrency` |  | |  |  | `CURR(15)` | Sales Plan Actual Amount in Display Currency |
| `SalesPlanQuantity` |  | |  |  | `QUAN(15)` | Planned Quantity |
| `SalesPlanUnit` |  | |  |  | `UNIT(3)` | Unit of Measure Used in Sales Plans |
| `SalesPerfActualQtyInBaseUnit` |  | |  |  | `QUAN(15)` | Sales Performance Actual Quantity In Base Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `SalesPerformanceActualQuantity` |  | |  |  | `QUAN(15)` | Sales Performance Actual Quantity |
| `SalesPerfActualQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SLSPERFPLANACTUALQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Planned and Actual Sales Perf - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY 
@AbapCatalog.preserveKey:true 
@AbapCatalog: {
   sqlViewName: 'CSLSPERFPAQ',
   compiler.compareFilter: true
}
@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   }
}
@Analytics.query: true
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Aggregation.allowPrecisionLoss:true
@Metadata.ignorePropagatedAnnotations:true 
@OData.publish: true

define view C_SlsPerfPlanActualQuery with parameters
    @Consumption.defaultValue: 'M'
    P_ExchangeRateType : kurst,
    @Consumption.defaultValue: 'EUR'
    P_DisplayCurrency  : vdm_v_display_currency,
    @Consumption.valueHelpDefinition: [{
        entity:{name: 'C_SalesPlanValueHelp', element :'SalesPlan'}
    }]
    P_SalesPlan : sales_plan,
    @Consumption.valueHelpDefinition: [{
        entity:{name: 'C_SalesPlanVersionValueHelp', element :'SalesPlanVersion' }
    }]
    P_SalesPlanVersion : sales_plan_version,
    @Consumption.valueHelpDefinition: [{
        entity:{name: 'C_SalesPlanCreatedByUserVH', element :'CreatedByUser'}
    }]
    P_CreatedByUser : sd_sp_createdbyuser
as select from I_SlsPerformancePlanActualCube(
                 P_ExchangeRateType: $parameters.P_ExchangeRateType,
                 P_DisplayCurrency:  $parameters.P_DisplayCurrency,
                 P_SalesPlan: $parameters.P_SalesPlan,
                 P_SalesPlanVersion: $parameters.P_SalesPlanVersion,
                 P_CreatedByUser: $parameters.P_CreatedByUser
                 ) as ISP
{
  @AnalyticsDetails.query.hidden
  key SalesPlanItemUUID,
  key SDDocument,
  key SDDocumentItem,

      SalesDocumentType,
      BillingDocumentType,
//      SDDocumentObject,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesPlanPurpose,     
      @AnalyticsDetails.query.axis: #ROWS
      SalesPlanPeriodName,
      @Semantics.systemDate.createdAt: true
      SalesPerformanceDate,
      @Semantics.calendar.yearMonth
      SalesPerformanceYearMonth,
      @Semantics.calendar.yearQuarter
      SlsPerformanceYearQuarter,
      @Semantics.calendar.year
      SalesPerformanceYear,
      
      //Organization
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOrganization,
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.display: #KEY_TEXT 
      DistributionChannel,
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.display: #KEY_TEXT
      OrganizationDivision,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesOffice,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,

      //Customer
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.display: #KEY_TEXT
      SoldToParty,
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
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

      //Product
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
      @Consumption.filter:{selectionType: #RANGE, multipleSelections: true, mandatory: false}
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

      //Employee
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesEmployee,

      //Shipping
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ShippingType,

      //Cost
      @AnalyticsDetails.query.display: #KEY_TEXT
      ProfitCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CostCenter,
      @AnalyticsDetails.query.display: #KEY_TEXT
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      ControllingArea,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BusinessArea,

      //Geography
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToPartyCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillToPartyRegion,

      @Semantics.currencyCode: true
      DisplayCurrency,

      //Planned Value
      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesPlanAmountInDspCrcy,

      @Aggregation.default: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      SalesPerfActlAmtInDspCurrency,

      //Planned Quantity
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SalesPlanUnit'
      SalesPlanQuantity,

      @Semantics.unitOfMeasure: true
      SalesPlanUnit,
 
      //Actual Quantity
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      SalesPerfActualQtyInBaseUnit,
      @Semantics.unitOfMeasure: true
      BaseUnit,

      //Actual Quantity in sales unit
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'SalesPerfActualQuantityUnit'
      SalesPerformanceActualQuantity,
      @Semantics.unitOfMeasure: true
      SalesPerfActualQuantityUnit    
}
```
