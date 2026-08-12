---
name: C_SUPLREVALBYQLTYNOTIFQRY
description: "By Quality Notification"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value
semantic_en: "By Quality Notification"
semantic_vi: "By Quality Notification — CDS view tiêu dùng dựa trên C_SuplrEvalByQltyNotifCube."
keywords:
  - "quality"
  - "notification"
  - "purchase"
  - "order"
  - "item"
  - "purchasing"
  - "group"
  - "supplier"
  - "date"
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - notification
---
# C_SUPLREVALBYQLTYNOTIFQRY

**By Quality Notification**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  | `cast( PurchaseOrder as vdm_purchaseorder )` | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` | ✓ | |  | `cast( PurchaseOrderItem as vdm_purchaseorderitem )` | `NUMC(5)` | Item Number of Purchase Order |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `Supplier` |  | |  |  | `CHAR(10)` | Supplier |
| `PurchaseOrderDate` |  | |  |  | `DATS(8)` | Purchase Order Date |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `SupplierCountry` |  | |  |  | `CHAR(3)` | Supplier Country/Region |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `PurchasingDocumentCategory` |  | |  |  | `CHAR(1)` | Purchasing Document Category |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  | `CHAR(1)` | Indicator for Data Migration of Schedule Line |
| `SuplrEvalRelevantDocCategory` |  | |  |  | `NUMC(1)` | Supplier Evaluation Configuration for Document Category type |
| `CalendarYear` |  | |  |  | `NUMC(4)` | Calendar Year |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Calendar Quarter |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Calendar Month |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `PurchasingCategory` |  | |  |  | `CHAR(20)` | Purchasing Category ID |
| `PurgCatName` |  | |  |  | `CHAR(60)` | Name of Purchasing Category |
| `QualityNotificationCount` |  | |  |  | `INT4(10)` |  |
| `PurchaseOrderItemUniqueID` |  | |  |  | `CHAR(15)` |  |
| `UniqueIntSourcingRequest` |  | |  |  | `CHAR(15)` |  |
| `SuplrEvalCalculatedScoreValue` |  | |  |  | `FLTP(16)` | Calculated Score |
| `NumberOfPurchaseOrders` |  | |  | `case when UniqueIntSourcingRequest <> '' then NumberOfPurchaseOrders else 0 end` | `INT4(10)` | Number of Purchase Orders |
| `NmbrOfPurchaseOrderItemsWithGR` |  | |  | `case when PurchaseOrderItemUniqueID <> '' then NmbrOfPurchaseOrderItemsWithGR else 0 end` | `INT4(10)` | Number of Purchase Order Items |
| `NmbrOfPOItemWithQltyNotifScr` |  | |  |  | `INT4(10)` |  |
| `NumberOfPurchaseOrderItems` |  | |  |  | `INT4(10)` | Number of Purchase Order Items |
| `QualityNotifVarianceScoreValue` |  | |  | `cast( 1 as abap.dec(15,3) )` | `DEC(15)` |  |
| `QltyNotifScrRltvToPOWthGRValue` |  | |  | `cast( 1 as mm_a_sup_relative_score )` | `FLTP(16)` | Relative score of a Supplier |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALBYQLTYNOTIFQRY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CMMASEBYQNQRY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:#D
@ObjectModel.usageType.sizeCategory:  #XL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AbapCatalog.dataMaintenance: #DISPLAY_ONLY
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #CONSUMPTION
//@AbapCatalog.dbHints:[ {dbSystem: #HDB, hint: 'OPTIMIZATION_LEVEL(MINIMAL_COST_BASED)'} ,{dbSystem: #HDB, hint:'NO_CALC_VIEW_UNFOLDING'}]
@Analytics.settings.zeroValues.handling: #HIDE_IF_ALL
@Analytics.query: true
@OData.publish: true
@Analytics.settings.maxProcessingEffort:#LOW
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_QUERY]
@ObjectModel.modelingPattern: #ANALYTICAL_QUERY
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'By Quality Notification'
define view C_SuplrEvalByQltyNotifQry
  with parameters
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
     resultElement: 'DateFunctionStartDate', binding: [ {
       targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
     }
    @Consumption.hidden: true
    P_StartDate    : bedat,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate      : bedat,

    @Consumption.defaultValue: 'PREVIOUSYEARTODATE'
    @Consumption.valueHelpDefinition: [{
      entity: {
        name:'C_GregorianCalDateFuncVH',
        element:'DateFunction'
      }
    }]
    P_DateFunction : datefunctionid


  as select from C_SuplrEvalByQltyNotifCube(P_StartDate: $parameters.P_StartDate,
                                         P_EndDate : $parameters.P_EndDate)
{
      @EndUserText.label: 'Purchasing Document'      -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document'
  key cast( PurchaseOrder as vdm_purchaseorder )                                                as PurchaseOrder,
      @EndUserText.label: 'Purchasing Document Item' -- Label added as key field cannot be deprecated in a released CDS
      @EndUserText.quickInfo: 'Purchasing Document Item'
  key cast( PurchaseOrderItem as vdm_purchaseorderitem )                                        as PurchaseOrderItem,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Supplier,
      PurchaseOrderDate,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Plant,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      SupplierCountry,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Region,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      CompanyCode,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,

      @EndUserText.label: 'Purchasing Document Category'
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,

      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                mandatory: false,
                                hidden: true,
                                selectionType: #SINGLE,
                                multipleSelections: false
                              },
      //                     hidden: true,
                      derivation: {
                                    lookupEntity: 'F_ProcmtAnalyticsDataSelMeth',
                                    resultElement: 'PurgDocMigrtnIsCmpltdForAnlyts'
                                  }
                    }
      @Environment.sql.passValue: true
      @UI.hidden: true
      PurgDocMigrtnIsCmpltdForAnlyts,

      @Consumption: {
         filter: {
                   mandatory: false,
                   hidden: true,
                   selectionType: #SINGLE,
                   multipleSelections: false
                 },
         derivation: {
                       lookupEntity: 'F_SuplrEvalDocCatConfign',
                       resultElement: 'SuplrEvalRelevantDocCategory'
                     }
       }
      //      @Semantics.booleanIndicator:true
      @Environment.sql.passValue: true
      @UI.hidden: true
      //@UI.hidden: true
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      SuplrEvalRelevantDocCategory,


      CalendarYear,
      CalendarQuarter,
      CalendarMonth,
      CalendarWeek,

      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      Material,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      MaterialGroup,
      @AnalyticsDetails.query.display: #KEY_TEXT
      @AnalyticsDetails.query.axis: #FREE
      @Analytics.internalName:#LOCAL
      @Consumption.labelElement: 'PurgCatName'
      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingCategoryValueHelp', element : 'PurchasingCategory' } }]
      PurchasingCategory,
      PurgCatName,
      /* ***************************Fields used to calculate measure********************************/

      @EndUserText.label: 'Number of Quality Notifications'
      QualityNotificationCount,
      @UI.hidden: true
      PurchaseOrderItemUniqueID,
      @UI.hidden: true
      UniqueIntSourcingRequest,
      @UI.hidden: true
      SuplrEvalCalculatedScoreValue,

      @EndUserText.label: 'Number of POs'
      case when UniqueIntSourcingRequest <> '' then NumberOfPurchaseOrders else 0 end           as NumberOfPurchaseOrders,
      case when PurchaseOrderItemUniqueID <> '' then NmbrOfPurchaseOrderItemsWithGR  else 0 end as NmbrOfPurchaseOrderItemsWithGR,
      @UI.hidden: true
      NmbrOfPOItemWithQltyNotifScr,
      
      @UI.hidden: true
      NumberOfPurchaseOrderItems,

      @DefaultAggregation: #FORMULA
      @EndUserText.label: 'Quality Notification Score'
     //@AnalyticsDetails.query.formula :' case when $projection.NmbrOfPOItemWithQltyNotifScr > 0 then $projection.SuplrEvalCalculatedScoreValue /  $projection.NmbrOfPOItemWithQltyNotifScr else case when $projection.qualitynotificationcount = 0 then 100 else 0 end end'
      //@AnalyticsDetails.query.formula :' case when $projection.qualitynotificationcount = 0 then 100 else case when $projection.NmbrOfPOItemWithQltyNotifScr > 0 and $projection.qualitynotificationcount <> 0 then $projection.SuplrEvalCalculatedScoreValue / $projection.NmbrOfPOItemWithQltyNotifScr else 0 end end'
      @AnalyticsDetails.query.formula :' case when $projection.NumberOfPurchaseOrderItems > 0 then $projection.SuplrEvalCalculatedScoreValue / $projection.NumberOfPurchaseOrderItems else 0 end'
      cast( 1 as abap.dec(15,3) )                                                               as QualityNotifVarianceScoreValue,

      @DefaultAggregation: #FORMULA
      @AnalyticsDetails.query.formula :' $projection.QualityNotificationCount /  $projection.NmbrOfPurchaseOrderItemsWithGR'
      cast( 1 as mm_a_sup_relative_score )                                                      as QltyNotifScrRltvToPOWthGRValue





}
```
