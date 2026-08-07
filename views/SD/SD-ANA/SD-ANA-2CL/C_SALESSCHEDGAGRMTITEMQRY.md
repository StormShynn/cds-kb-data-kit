---
name: C_SALESSCHEDGAGRMTITEMQRY
description: This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?
app_component: SD-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value
semantic_en: This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?
semantic_vi: Sales Scheduling Agreement Item - Query — CDS view tiêu dùng dựa trên I_SalesSchedgAgrmtItemCube.
keywords:
  - Sales Scheduling Agreement Item - Query
  - sales
  - scheduling
  - agreement
  - item
  - query
  - release
  - type
  - schedg
  - agrmt
  - last
  - change
  - date
tags:
  - SD
  - bo:businesspartner
  - component:SD-ANA-2CL
  - consumption-view
  - customer
  - delivery
  - lob:sales & distribution
  - SD-ANA
  - SD-ANA-2CL
---
# C_SALESSCHEDGAGRMTITEMQRY

**This CDS view provides prerequisites for analyzing to what extent sales scheduling agreements are being processed. It answers the following business questions about sales scheduling agreements with delivery schedules: What is the cumulative delivered quantity? What is the cumulative issued quantity? What is the cumulative quantity received by customer?**

| Property | Value |
|---|---|
| App Component | `SD-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesSchedulingAgreement` | ✓ | |  |  | `CHAR(10)` | Sales Scheduling Agreement |
| `SalesSchedulingAgreementItem` | ✓ | |  |  | `NUMC(6)` | Sales Scheduling Agreement Item |
| `SchedulingAgreementReleaseType` | ✓ | |  |  | `CHAR(1)` | Release type |
| `SalesSchedgAgrmtType` |  | |  |  | `CHAR(4)` | Sales Scheduling Agreement Type |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time at Which Record Was Created |
| `CreationDateYear` |  | |  |  | `NUMC(4)` | Year of Creation |
| `CreationDateYearQuarter` |  | |  |  | `NUMC(5)` | Year/Quarter of Creation |
| `CreationDateYearMonth` |  | |  |  | `NUMC(6)` | Year/Month of Creation |
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
| `MaterialByCustomer` |  | |  |  | `CHAR(35)` | Material Number Used by Customer |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant (Own or External) |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `ProductGroup` |  | |  |  | `CHAR(9)` | Product Group |
| `AdditionalMaterialGroup1` |  | |  |  | `CHAR(3)` | Material Group 1 |
| `AdditionalMaterialGroup2` |  | |  |  | `CHAR(3)` | Material Group 2 |
| `AdditionalMaterialGroup3` |  | |  |  | `CHAR(3)` | Material Group 3 |
| `AdditionalMaterialGroup4` |  | |  |  | `CHAR(3)` | Material Group 4 |
| `AdditionalMaterialGroup5` |  | |  |  | `CHAR(3)` | Material Group 5 |
| `BillingCompanyCode` |  | |  |  | `CHAR(4)` | Company Code to Be Billed |
| `SalesDistrict` |  | |  |  | `CHAR(6)` | Sales District |
| `CustomerFiscalYear` |  | |  |  | `NUMC(4)` | Customer Fiscal Year |
| `OrderQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `CumulativeDeliveredQuantity` |  | |  |  | `QUAN(15)` | Cumulative qty for delivery/MAIS in base unit of measure |
| `CumulativeIssuedQuantity` |  | |  |  | `QUAN(15)` | GI Posted Cumulative Delivered Quantity |
| `CumulativeReceiptQuantity` |  | |  |  | `QUAN(15)` | Cumulative Quantity Received by Customer |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SALESSCHEDGAGRMTITEMQRY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Sales Scheduling Agreement Item - Query'
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@AbapCatalog: {
  sqlViewName: 'CSDSCHEDGAGRMTIQ',
  compiler.compareFilter: true,
  preserveKey: true
}

@ObjectModel: {
   usageType: {
     dataClass:      #MIXED,
     serviceQuality: #D,
     sizeCategory:   #XL
   }
}

@Analytics.query:true
@ObjectModel.supportedCapabilities: 
   [ #ANALYTICAL_QUERY ]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@OData.publish: true
@Metadata.ignorePropagatedAnnotations: true

define view C_SalesSchedgAgrmtItemQry 
  as select from I_SalesSchedgAgrmtItemCube 
{     
      //Key
  key SalesSchedulingAgreement,
  key SalesSchedulingAgreementItem,
      @AnalyticsDetails.query.display: #KEY_TEXT
  key SchedulingAgreementReleaseType,
      
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesSchedgAgrmtType,
      
      //Admin
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.calendar.year
      CreationDateYear,
      @Semantics.calendar.yearQuarter
      CreationDateYearQuarter,
      @Semantics.calendar.yearMonth
      CreationDateYearMonth,
      
      //Organization
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
      
      //Partner
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
      
      //Product
      MaterialByCustomer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Division,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Plant,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Product,
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
  
      //Other
      @AnalyticsDetails.query.display: #KEY_TEXT
      BillingCompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SalesDistrict,

      
      CustomerFiscalYear,
      @Semantics.unitOfMeasure: true
      OrderQuantityUnit,
      @Semantics.unitOfMeasure: true
      BaseUnit,
      
      //KPIs
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CumulativeDeliveredQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      CumulativeIssuedQuantity,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      CumulativeReceiptQuantity
      
      //BOM
      //MainItemPricingRefProduct,
      //HigherLevelItem,
      //BillOfMaterial,
      //PropagatePrftbltySgmt2BOM,
      //CostDeterminationIsRequired
}
```
