---
name: C_PURCHASEORDERVALUEQUERY
description: "Spend Analysis"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value
semantic_en: "Spend Analysis"
semantic_vi: "Spend Analysis — CDS view tiêu dùng dựa trên C_PurchaseOrderValue."
keywords:
  - "spend"
  - "analysis"
  - "purchase"
  - "order"
  - "item"
  - "account"
  - "assignment"
  - "number"
  - "purg"
  - "migrtn"
  - "cmpltd"
  - "anlyts"
  - "calendar"
  - "month"
tags:
  - MM
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
---
# C_PURCHASEORDERVALUEQUERY

**Spend Analysis**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `AccountAssignmentNumber` | ✓ | |  |  | `NUMC(2)` | Sequential Number of Account Assignment |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `PostingMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `CountryName` |  | |  |  | `CHAR(50)` | Country/Region Name |
| `DisplayCurrency` |  | |  |  | `CUKY(5)` | Display Currency |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialName` |  | |  |  | `CHAR(40)` | Product Description |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `MaterialGroupName` |  | |  |  | `CHAR(20)` | Product Group Description |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantName` |  | |  |  | `CHAR(30)` | Plant Name |
| `ProductTypeCode` |  | |  |  | `CHAR(2)` | Product Type Group |
| `ProductType` |  | |  |  | `CHAR(4)` | Product Type |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchasing Document Date |
| `IsCompletelyDelivered` |  | |  |  | `CHAR(1)` | "Delivery Completed" Indicator |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatRelatedToMaterialGroup` |  | |  |  | `CHAR(20)` |  |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingGroupName` |  | |  |  | `CHAR(18)` | Purchasing Group Name |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingOrganizationName` |  | |  |  | `CHAR(20)` | Purchasing Organization Name |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `ServicePerformer` |  | |  |  | `CHAR(10)` | Service Performer |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Country` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `SupplierName` |  | |  |  | `CHAR(80)` | Name of Supplier |
| `WBSDescription` |  | |  |  | `CHAR(40)` | Work Breakdown Structure Element Name |
| `WBSElement` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | Work Breakdown Structure Element (WBS Element) |
| `PurOrdNetAmountInDisplayCrcy` |  | |  |  | `CURR(21)` | Purchase Order Net Amount |
| `NumberOfPurchaseOrders` |  | |  |  | `INT4(10)` |  |
| `NmbrOfCmpltlyDlvrdPurOrdItms` |  | |  |  | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PURCHASEORDERVALUEQUERY')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@AbapCatalog.sqlViewName: 'CMMPURORDVALUEQ'
@AbapCatalog.compiler.compareFilter: true

@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L

@VDM.viewType: #CONSUMPTION
@Metadata.ignorePropagatedAnnotations: true
@Analytics.query: true
@OData.publish: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'Spend Analysis'
define view C_PurchaseOrderValueQuery

  with parameters
    @Consumption.defaultValue: 'EUR'
//    @Consumption.valueHelpDefinition: [{
//      entity: {
//        name:'I_Currency',
//        element:'Currency'
//      }
//    }]
    P_DisplayCurrency : displaycurrency,

    @Consumption.defaultValue: 'YEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction    : datefunctionid,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_StartDate       : bedat,

    @Consumption.derivation: { lookupEntity: 'C_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' },
       { targetParameter : 'P_Language' , type : #SYSTEM_FIELD, value : '#SYSTEM_LANGUAGE'  } ]
    }
    @Consumption.hidden: true
    P_EndDate         : bedat,


    @Consumption.hidden : true
    @Environment.systemField : #SYSTEM_LANGUAGE
    P_Language        : sylangu

  as select from C_PurchaseOrderValue(
                  P_DisplayCurrency : $parameters.P_DisplayCurrency ,
                  P_DateFunction : $parameters.P_DateFunction ,
                  P_StartDate : $parameters.P_StartDate ,
                  P_EndDate : $parameters.P_EndDate,
                   P_Language: $parameters.P_Language )
{
  key PurchaseOrder,
  key PurchaseOrderItem,
  key AccountAssignmentNumber,

  @Consumption: {
                  filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                            mandatory: false,
                            hidden: true,
                            selectionType: #SINGLE,
                            multipleSelections: false
                          },
                  derivation: {
                                lookupEntity: 'F_ProcmtAnalyticsDataSelMeth',
                                resultElement: 'PurgDocMigrtnIsCmpltdForAnlyts'
                              }
                }

      @Consumption.hidden : true
      PurgDocMigrtnIsCmpltdForAnlyts,

      CalendarMonth,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @EndUserText.label: 'Posting Month'
      PostingMonth,
      CalendarQuarter,
      CalendarWeek,
      CalendarYear,
      CompanyCode,
      CostCenter,

      @Semantics.text: true
      CountryName,
      //    CustProjWorkPackageName,
      //    CustomerProjectName,
      @UI.hidden: true
      @Semantics.currencyCode:true
      DisplayCurrency,
      Material,
      @Semantics.text: true
      MaterialName,
      MaterialGroup,

      @Semantics.text: true
      MaterialGroupName,

      Plant,
      @Semantics.text: true
      PlantName,
      ProductTypeCode,

      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor:'ProductTypeCode'
      ProductType,

      PurchaseOrderDate,
      IsCompletelyDelivered,

      @EndUserText.label: 'Purchasing Category(Deprecated)'
      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'PurgCatRelatedToMaterialGroup'
      PurchasingCategory,

      @EndUserText.label: 'Purchasing Category'             //3445487
      PurgCatRelatedToMaterialGroup,

      PurchasingGroup,
      @Semantics.text: true
      PurchasingGroupName,
      PurchasingOrganization,
      @Semantics.text: true
      PurchasingOrganizationName,
      PurgCatName,
      //    PurgCatUUID,
      ServicePerformer,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Supplier,
      @AnalyticsDetails.query.display: #KEY_TEXT
      SupplierCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Country,
      @AnalyticsDetails.query.display: #KEY_TEXT
      Region,

      @Semantics.text: true
      SupplierName,
      WBSDescription,
      WBSElement,
      WBSElementInternalID,
      //    YearQuarter,
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      @DefaultAggregation:#SUM
      PurOrdNetAmountInDisplayCrcy,

      @EndUserText.label: 'Number of Purchase Orders'       //3445487
      NumberOfPurchaseOrders,

      // Deprecating the field 'NmbrOfCmpltlyDlvrdPurOrdItms' (Count of delivery completed PO Items) as this  measure not achievable since the key definition of the CDS is not at Purchase Order Item.
      // The key definition is at Account Assignment Number level. The successor field 'NumberOfPurchaseOrderItems' would show the count of Purchaser Order Items as a measure.
      //  JIRA reference - https://jira.tools.sap/browse/S4HPROCANALYTICS-1476
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'NumberOfPurchaseOrderItems'
      @EndUserText.label: 'No of Purchase Order Items(Deprecated)'
      NmbrOfCmpltlyDlvrdPurOrdItms,

      @EndUserText.label: 'Number of Purchase Order Items'
      NumberOfPurchaseOrderItems
}
```
