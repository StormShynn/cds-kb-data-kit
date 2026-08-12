---
name: C_NONMNGDPURGSPEND
description: "Non Managed Purchasing Spend"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value
semantic_en: "Non Managed Purchasing Spend"
semantic_vi: "Non Managed Purchasing Spend — CDS view tiêu dùng dựa trên C_NonMngdPurchasingSpend3."
keywords:
  - "non"
  - "managed"
  - "purchasing"
  - "spend"
  - "fiscal"
  - "year"
  - "accounting"
  - "document"
  - "supplier"
  - "company"
  - "code"
  - "name"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_NONMNGDPURGSPEND

**Non Managed Purchasing Spend**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `AccountingDocument` |  | |  |  | `CHAR(10)` | Accounting Document Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date |
| `SupplierName` |  | | `_Supplier` | `SupplierName` | `CHAR(80)` | Name of Supplier |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `WBSElement` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element Internal ID |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account |
| `AccountingDocCreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `Fund` |  | |  |  | `CHAR(10)` | Fund |
| `ProfitCenter` |  | |  |  | `CHAR(10)` | Profit Center |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | | `_Plant` | `PlantName` | `CHAR(30)` | Plant Name |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `Material` |  | |  | `Product` | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  | `_Product._Text[1: Language = $session.system_language ].ProductName` | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  | `ProductGroup` | `CHAR(9)` | Material Group |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `TotalSpendAmount` |  | |  |  | `CURR(24)` | Total Spend Amount |
| `NonManagedSpendAmount` |  | |  |  | `CURR(24)` | Non Managed Spend Amount in Display Currency |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `NonManagedSpendInPct` |  | |  | `cast( 1 as abap.dec(13,3))` | `DEC(13)` |  |
| `NonManagedSpendRatio` |  | |  | `cast( 1 as abap.dec(13,3))` | `DEC(13)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_NONMNGDPURGSPEND')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory:  #XXL
@EndUserText.label: 'Non Managed Purchasing Spend'
@VDM.viewType: #CONSUMPTION
@AbapCatalog.sqlViewName: 'CMMNONMGDPUSPND'
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
define view C_NonMngdPurgSpend

with parameters
    @Consumption.defaultValue: 'EUR'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'I_Currency',
        element:'Currency'
      }
    }]
    P_DisplayCurrency           : displaycurrency,

    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language                  : sylangu,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate: mm_a_delivery_date,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate: mm_a_delivery_date,
   @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
   @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction              : datefunctionid

as select from C_NonMngdPurchasingSpend3(
                P_DisplayCurrency : $parameters.P_DisplayCurrency , P_DateFunction : $parameters.P_DateFunction , P_StartDate : $parameters.P_StartDate , P_EndDate : $parameters.P_EndDate,  P_Language: $parameters.P_Language)

{

      FiscalYear,

      @Consumption.hidden: true
      AccountingDocument,

      Supplier,

      CompanyCode,
      _CompanyCode.CompanyCodeName,

      AccountingDocumentType,
//
//    @Consumption.filter: {
//    selectionType: #RANGE,
//    multipleSelections: false,
//    mandatory: false,
//    hidden: true }
//
//    @Consumption.derivation: {
//      lookupEntity: 'C_SglGregorianCalDateFunction',
//      resultElement: 'DateFunctionStartDate',
//      resultElementHigh: 'DateFunctionEndDate',
//      binding:
//      [
//          { targetParameter : 'P_DateFunction' , type : #PARAMETER, value : 'P_DateFunction' },
//          { targetParameter : 'P_Language' , type : #PARAMETER, value : 'P_Language' }
//      ]
//     }
      PostingDate,

      _Supplier.SupplierName,

      @Semantics.currencyCode:true
      @EndUserText.label: 'Company Code Currency'
      CompanyCodeCurrency,
      
      @EndUserText.label: 'WBS Element(Deprecated)'
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'WBSElementInternalID'
      WBSElement,
      @EndUserText.label: 'WBS Element'
      WBSElementInternalID,

      GLAccount,
      @Semantics.text: true       //2937033
      _GLAccount._Text[1: Language = $parameters.P_Language].GLAccountName,    //2937033

      AccountingDocCreatedByUser as AccountingDocCreatedByUser,

//      @ObjectModel.text.element: ['CostCenterDescription'] //Inserted by VDM CDS Suite Plugin

//Commented by VDM CDS Suite Plugin:@Consumption.labelElement: 'CostCenterDescription'
//Commented by VDM CDS Suite Plugin:
      CostCenter,
      @Semantics.text: true
      _CostCenter._Text[1: Language = $parameters.P_Language].CostCenterDescription,

      ControllingArea,

      Fund,

      ProfitCenter,

      Plant,
      _Plant.PlantName,
      
      
      CalendarYear,

      CalendarQuarter,

      CalendarMonth,

      CalendarWeek,

      Product as Material,
      @Semantics.text: true
       _Product._Text[1: Language = $session.system_language ].ProductName as MaterialName,

      ProductGroup as MaterialGroup,
      @Semantics.text: true
     _ProductGroup._Text[1: Language = $session.system_language ].MaterialGroupName,

      PurchasingCategory,
      @Semantics.text: true
      PurgCatName,

      TotalSpendAmount,

      NonManagedSpendAmount ,

      @Semantics.currencyCode:true
      DisplayCurrency,

      @AnalyticsDetails.query.decimals: 0
      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula:  'CASE WHEN $projection.TotalSpendAmount > 0 THEN ( $projection.NonManagedSpendAmount * 100 ) / $projection.TotalSpendAmount  ELSE 0 END'
      @EndUserText.label: 'Non Managed Spend %'
      cast( 1 as abap.dec(13,3)) as NonManagedSpendInPct,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula:  'CASE WHEN $projection.TotalSpendAmount > 0 THEN  $projection.NonManagedSpendAmount  / $projection.TotalSpendAmount ELSE 0 END'
      @EndUserText.label: 'Non Managed Spend Ratio'
      cast( 1 as abap.dec(13,3)) as NonManagedSpendRatio


}
```
