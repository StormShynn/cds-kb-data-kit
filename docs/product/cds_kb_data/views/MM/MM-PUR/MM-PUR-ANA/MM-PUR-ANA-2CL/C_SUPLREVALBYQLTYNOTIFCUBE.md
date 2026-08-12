---
name: C_SUPLREVALBYQLTYNOTIFCUBE
description: "Suplrevalbyqltynotifcube"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - analytical
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SUPLREVALBYQLTYNOTIFCUBE

**Suplrevalbyqltynotifcube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseOrder` | ✓ | |  |  |  |  |
| `PurchaseOrderItem` | ✓ | |  |  |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` | ✓ | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Date` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_Date` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_Date` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_Date` | `CalendarWeek` |  |  |
| `CompanyCodeName` |  | | `_CompanyCode` | `CompanyCodeName` |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `NmbrOfPOItemWithQltyNotifScr` |  | |  | `case when Scoring.SuplrEvalCriterion is null then 0 else POWithQualityNotif end` |  |  |
| `PurchaseOrderItemUniqueID` |  | |  |  |  |  |
| `NmbrOfPurchaseOrderItemsWithGR` |  | |  | `cast(1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast(1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `UniqueIntSourcingRequest` |  | |  |  |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast(1 as mm_pur_ana_numbrofpurords )` |  |  |
| `QualityNotificationCount` |  | |  |  |  |  |
| `SuplrEvalCalculatedScoreValue` |  | |  | `cast( case when UpdatedScore.IsScoreChanged = 'X' then UpdatedScore.QualityNotificationScore when Scoring.SuplrEvalCriterion is null and QualityNotificationCount = 0 then 100 when Scoring.SuplrEvalCriterion is null then 0 else SupplierEvaluationScore end as /srmsmc/calculated_score )` |  |  |
| `_Plant` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_Date` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_PurchasingDocumentCatName` | | ✓ | | | | |
| `_DocConfigCatText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_Material` | `I_Product` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_Date` | `I_CalendarDate` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_PurchasingDocumentCatName` | `I_PurchasingDocumentCategory` | [1..1] |
| `_DocConfigCatText` | `I_SuplrEvalDocCatConfign` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSEQNCUBE'
@AbapCatalog.preserveKey: true
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck:#CHECK
@VDM.viewType : #CONSUMPTION
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality:  #D
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Cube view for Sup Eval by Quality Notif'
define view C_SuplrEvalByQltyNotifCube  
 with parameters

    P_StartDate       : vdm_validitystart ,
    P_EndDate         :  vdm_validityend 
  as select from    P_SuplrEvalByQltyNotif3(P_StartDate:$parameters.P_StartDate , P_EndDate: $parameters.P_EndDate ) as P_SuplrEvalByQltyNotif

    left outer to one join P_SuplrEvalCritrnVarcScore                                                                       as Scoring // ^3022788

                                                                                                                                     on ( 
                                                                                                                                        ( QualityNotificationCount                           between Scoring.SuplrEvalAbsltVariancePctFrom and Scoring.SuplrEvalAbsltVariancePctTo )
                                                                                                                                     or ( QualityNotificationCount > Scoring.SuplrEvalAbsltVariancePctTo and Scoring.SuplrEvalVarcScrUprLmtIndIsSet = 'X'  ) 
                                                                                                                                     or ( QualityNotificationCount < Scoring.SuplrEvalAbsltVariancePctFrom and Scoring.SuplrEvalScrLowrLmtIndIsSet = 'X' )   )
                                                                                                                                     and Scoring.SuplrEvalCriterion                         =       '06'
                                                                                                                                     and (
                                                                                                                                        (
                                                                                                                                          P_SuplrEvalByQltyNotif.PurchasingOrganization     =       Scoring.PurchasingOrganization
                                                                                                                                        )
                                                                                                                                        or(
                                                                                                                                          IsSupplierEvalSwitchActive                        =       'X'
                                                                                                                                          and(
                                                                                                                                            (
                                                                                                                                              P_SuplrEvalByQltyNotif.PurchasingCategory     =       Scoring.PurchasingCategory
                                                                                                                                            )
                                                                                                                                            or(
                                                                                                                                              P_SuplrEvalByQltyNotif.PurchasingCategory     is null
                                                                                                                                              and Scoring.PurchasingCategory                =       ''
                                                                                                                                            )
                                                                                                                                          )
                                                                                                                                        )
                                                                                                                                      ) // v3022788
    left outer to one join P_QltyNotifUpdatedScore                                                                          as UpdatedScore on  P_SuplrEvalByQltyNotif.PurchaseOrder     = UpdatedScore.PurchaseOrder
                                                                                                                                     and P_SuplrEvalByQltyNotif.PurchaseOrderItem = UpdatedScore.PurchaseOrderItem
  association [1..1] to I_Plant         as _Plant                  on  $projection.Plant                  = _Plant.Plant
                                                                          
  association [1..1] to I_PurchasingOrganization    as _PurchasingOrganization on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization //and

  association [1..1] to I_Supplier      as _Supplier               on  $projection.Supplier    = _Supplier.Supplier
  
  association [0..1] to I_Country      as _Country               on  $projection.SupplierCountry    = _Country.Country
  association [0..1] to I_Region                      as _Region                 on  $projection.region          = _Region.Region
                                                                            and  $projection.SupplierCountry = _Region.Country
  association [1..1] to I_Product                  as _Material               on  $projection.Material = _Material.Product

  association [1..1] to I_ProductGroup as _MaterialGroup          on  $projection.MaterialGroup = _MaterialGroup.MaterialGroup

  association [1..1] to I_PurchasingGroup  as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to I_CompanyCode               as _CompanyCode            on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_CalendarDate              as _Date                   on  $projection.PurchaseOrderDate = _Date.CalendarDate
 association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory     on  $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
 association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCatName on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCatName.PurchasingDocumentCategory
 association [1..1] to I_SuplrEvalDocCatConfign as _DocConfigCatText on $projection.SuplrEvalRelevantDocCategory = _DocConfigCatText.SuplrEvalRelevantDocCategory

{
  key P_SuplrEvalByQltyNotif.PurchaseOrder,
  key P_SuplrEvalByQltyNotif.PurchaseOrderItem,
  
      @Consumption.hidden: true
      @Environment.sql.passValue: true
  key PurgDocMigrtnIsCmpltdForAnlyts,

      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_DocConfigCatText'
      @Analytics.internalName:#LOCAL
  key SuplrEvalRelevantDocCategory,
  
     @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      P_SuplrEvalByQltyNotif.Supplier,
    
//      _Country._Text[1: Language = $session.system_language].CountryName as SupplierCountryName,
       @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country )                         as SupplierCountry,
     
       @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
       PurchasingGroup,
 
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,
       @ObjectModel.foreignKey.association:'_Region'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,
       @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      P_SuplrEvalByQltyNotif.PurchasingOrganization,

    @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      P_SuplrEvalByQltyNotif.Plant,

      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      P_SuplrEvalByQltyNotif.Material,

     @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      MaterialGroup,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCatName'
      @Analytics.internalName:#LOCAL
      @Consumption.labelElement: 'PurchasingDocumentCategory'
      PurchasingDocumentCategory,      
      
      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      P_SuplrEvalByQltyNotif.PurchasingCategory,
      
      @Semantics.text: true
      PurgCatName,

      @Semantics.calendar.year: true
      _Date.CalendarYear,
      _Date.CalendarQuarter,
      _Date.CalendarMonth,
      _Date.CalendarWeek,
      _CompanyCode.CompanyCodeName,
      P_SuplrEvalByQltyNotif.PurchaseOrderDate,

/* ***************************Fields used to calculate measure********************************/

/* Number of PO's having QN */
      @DefaultAggregation: #SUM
      case when Scoring.SuplrEvalCriterion is null then 0 else
      POWithQualityNotif end                                                     as NmbrOfPOItemWithQltyNotifScr,
      
/* Identifier to count POI's having GR */
     PurchaseOrderItemUniqueID,
      
/* Number of POI's having GR */
      @Aggregation.referenceElement: ['PurchaseOrderItemUniqueID']
      @Aggregation.default: #COUNT_DISTINCT
      cast(1 as  mm_pur_ana_numbrofpurorditms )                                                      as NmbrOfPurchaseOrderItemsWithGR,
      
      @DefaultAggregation: #SUM
      cast(1 as  mm_pur_ana_numbrofpurorditms ) as NumberOfPurchaseOrderItems,
      
/*  Idetifier for PO's having GR */     
       UniqueIntSourcingRequest, 
/* Number of PO's having GR */
     @Aggregation.referenceElement: ['UniqueIntSourcingRequest']
      @Aggregation.default: #COUNT_DISTINCT
      cast(1 as  mm_pur_ana_numbrofpurords )      as NumberOfPurchaseOrders ,
///* Number of Quality Notifications */
      @DefaultAggregation: #SUM
      P_SuplrEvalByQltyNotif.QualityNotificationCount,
/* Quality Notification Score */
      @DefaultAggregation: #SUM
   cast( case 
        when UpdatedScore.IsScoreChanged = 'X'
            then UpdatedScore.QualityNotificationScore
        when Scoring.SuplrEvalCriterion is null and QualityNotificationCount = 0
            then 100    
        when Scoring.SuplrEvalCriterion is null
            then 0           
         else SupplierEvaluationScore
        end  as   /srmsmc/calculated_score )                                           as SuplrEvalCalculatedScoreValue,

     _Supplier,
     _Country,
     _Region,
     _PurchasingOrganization,
     _PurchasingGroup,
     _Plant,
     _Date,
     _CompanyCode,
     _Material,
     _PurchasingCategory,
     _MaterialGroup,
     _PurchasingDocumentCatName,
     _DocConfigCatText
}
```
