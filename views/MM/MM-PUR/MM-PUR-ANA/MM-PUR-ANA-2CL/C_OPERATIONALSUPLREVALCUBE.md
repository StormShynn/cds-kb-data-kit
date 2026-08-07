---
name: C_OPERATIONALSUPLREVALCUBE
description: Operationalsuplrevalcube
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
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
# C_OPERATIONALSUPLREVALCUBE

**Operationalsuplrevalcube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingDocument` | ✓ | |  | `cast( PurchaseOrder as mm_a_purchasing_document preserving type )` |  |  |
| `PurchasingDocumentItem` | ✓ | |  | `cast( PurchaseOrderItem as mm_a_purchasing_document_item preserving type )` |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` |  | |  |  |  |  |
| `SuplrEvalCritraDelivCompleted` |  | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Calendar` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_Calendar` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_Calendar` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_Calendar` | `CalendarWeek` |  |  |
| `PurchaseOrderDate` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` |  |  |
| `Plant` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `DisplayCurrency` |  | |  |  |  |  |
| `PurchaseOrderNetPriceAmount` |  | |  |  |  |  |
| `TimeVarianceScore` |  | |  | `cast ( VendorEval.TimeVarianceScore as mm_a_time_variance_score )` |  |  |
| `PriceVarianceScore` |  | |  | `cast( VendorEval.PriceVarianceScore as mm_a_price_variance_score )` |  |  |
| `QuantityVarianceScore` |  | |  | `cast( VendorEval.QuantityVarianceScore as mm_a_quantity_var_score )` |  |  |
| `InspectionLotQualityScore` |  | |  | `cast( VendorEval.InspectionLotQualityScore as mm_a_quality_variance_score )` |  |  |
| `QualityNotificationScore` |  | |  | `cast( VendorEval.QualityNotificationScore as mm_a_quality_notif_score )` |  |  |
| `NmbrOfPOWithPriceVariance` |  | |  | `PriceVarianceCount` |  |  |
| `NmbrOfPOWithQuantityVariance` |  | |  | `QuantityVarianceCount` |  |  |
| `NmbrOfPOWithTimeVariance` |  | |  | `TimeVarianceCount` |  |  |
| `NmbrOfPOWithQualityVariance` |  | |  | `InspectionLotQualityCount` |  |  |
| `QualityNotificationCount` |  | |  |  |  |  |
| `SupplierOperationalScore` |  | |  | `cast( ( QuantityVarianceScore1 * evaluationquantityweight + PriceVarianceScore1 * evaluationpriceweight + TimeVarianceScore1 * evaluationtimeweight + InspectionLotQualityScore1 * evaluationqualityweight + QualityNotificationScore1 * evaluationqualitynotifweight ) * division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight ) , 8 ) as mm_a_supplier_opl_score )` |  |  |
| `SuplrEvalOplScoreValue` |  | |  | `case when InspectionLotQualityScore1 = 0 then cast( round(( QuantityVarianceScore1 * evaluationquantityweight + PriceVarianceScore1 * evaluationpriceweight + TimeVarianceScore1 * evaluationtimeweight + QualityNotificationScore1 * evaluationqualitynotifweight ) * division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualitynotifweight ) , 8 ), 1) as mm_pur_ana_suplreval_opl_score ) else cast( round(( QuantityVarianceScore1 * evaluationquantityweight + PriceVarianceScore1 * evaluationpriceweight + TimeVarianceScore1 * evaluationtimeweight + InspectionLotQualityScore1 * evaluationqualityweight + QualityNotificationScore1 * evaluationqualitynotifweight ) * division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight ) , 8 ), 1) as mm_pur_ana_suplreval_opl_score ) end` |  |  |
| `SupplierEvalQualityWeighting` |  | |  | `cast(evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight as mm_weighting )` |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `NmbrOfScoredSuppliers` |  | |  | `cast( 1 as mm_pur_ana_numbrofscoredsuplrs )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `SupplierClassification` |  | |  | `cast( '' as mm_classification )` |  |  |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingCategory` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_DocConfigCategory` | | ✓ | | | | |
| `_DelivCmpltdConfign` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Product` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_Calendar` | `I_CalendarDate` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PurchasingCategory` | `I_PurchasingCategoryValueHelp` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_DocConfigCategory` | `I_SuplrEvalDocCatConfign` | [1..1] |
| `_DelivCmpltdConfign` | `I_SuplrEvalDelivCmpltdConfign` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMOP1SUPOPCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Analytics.dataCategory: #CUBE
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations:true
@EndUserText.label: 'Operational Suplr Eval Score cube view'
define view C_OperationalSuplrEvalCube
  with parameters

    P_DisplayCurrency : displaycurrency,
    P_StartDate       : vdm_validitystart,
    P_EndDate         : vdm_validityend,
    P_DateFunction    : datefunctionid


  as select from P_OperationalSupplierEval(  P_DisplayCurrency: $parameters.P_DisplayCurrency,
                                             P_StartDate: $parameters.P_StartDate,
                                             P_EndDate : $parameters.P_EndDate
                                          ) as VendorEval


  association [1..1] to I_Product                     as _Material                   on  $projection.Material = _Material.Product
  //   and $projection.Plant    = _Material.plant

  association [1..1] to I_ProductGroup_2              as _MaterialGroup              on  $projection.MaterialGroup = _MaterialGroup.ProductGroup

  association [1..1] to I_Supplier                    as _Supplier                   on  $projection.Supplier = _Supplier.Supplier
  // and $projection.CompanyCode = _Supplier.CompanyCode
  association [0..1] to I_Country                     as _Country                    on  $projection.SupplierCountry = _Country.Country

  association [0..1] to I_Region                      as _Region                     on  $projection.region          = _Region.Region
                                                                                     and $projection.SupplierCountry = _Region.Country

  association [1..1] to I_PurchasingGroup             as _PurchasingGroup            on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_PurchasingOrganization      as _PurchasingOrganization     on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_Plant                       as _Plant                      on  $projection.Plant = _Plant.Plant

  association [1..1] to I_CalendarDate                as _Calendar                   on  $projection.PurchaseOrderDate = _Calendar.CalendarDate
  association [1..1] to I_CompanyCode                 as _CompanyCode                on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_PurchasingCategoryValueHelp as _PurchasingCategory         on  $projection.PurchasingCategory = _PurchasingCategory.PurchasingCategory
  association [1..1] to I_PurchasingDocumentCategory  as _PurchasingDocumentCategory on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory
  association [1..1] to I_SuplrEvalDocCatConfign      as _DocConfigCategory          on  $projection.SuplrEvalRelevantDocCategory = _DocConfigCategory.SuplrEvalRelevantDocCategory
  association [1..1] to I_SuplrEvalDelivCmpltdConfign as _DelivCmpltdConfign         on  $projection.SuplrEvalCritraDelivCompleted = _DelivCmpltdConfign.SuplrEvalCritraDelivCompleted

{
      /* key fields*/
  key cast( PurchaseOrder as  mm_a_purchasing_document preserving type )                                                                                       as PurchasingDocument,
  key cast( PurchaseOrderItem as mm_a_purchasing_document_item preserving type )                                                                               as PurchasingDocumentItem,
      @Semantics.booleanIndicator: true
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
      PurgDocMigrtnIsCmpltdForAnlyts,

      @Consumption: {
                          filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
                                    mandatory: false,
                                    hidden: true,
                                    selectionType: #SINGLE,
                                    multipleSelections: false
                                  },
      //                     hidden: true,
                          derivation: {
                                        lookupEntity: 'F_SuplrEvalCriteriaGenConfign',
                                        resultElement: 'SuplrEvalCritraDelivCompleted'
                                      }
                        }
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_DelivCmpltdConfign'
      @Analytics.internalName:#LOCAL
      SuplrEvalCritraDelivCompleted,

      @Consumption: {
                      filter: {                    -- Usage of derviation.lookupEntity requires a filter definition too!
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
      @Environment.sql.passValue: true
      @ObjectModel.foreignKey.association: '_DocConfigCategory'
      @Analytics.internalName:#LOCAL
      SuplrEvalRelevantDocCategory,

      @Semantics.calendar.year: true
      _Calendar.CalendarYear,
      _Calendar.CalendarQuarter,
      _Calendar.CalendarMonth,
      _Calendar.CalendarWeek,
      PurchaseOrderDate,
      /* Org data */
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      VendorEval.PurchasingOrganization                                                                                                                        as PurchasingOrganization,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      @Analytics.internalName:#LOCAL
      PurchasingGroup,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,

      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      Supplier,
      @ObjectModel.foreignKey.association:'_Region'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,

      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country )                                                                                                       as SupplierCountry,

      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      Plant,

      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      Material,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      MaterialGroup,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      @Analytics.internalName:#LOCAL
      PurchasingDocumentCategory,

      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Analytics.internalName:#LOCAL
      VendorEval.PurchasingCategory                                                                                                                            as PurchasingCategory,
      @Semantics.text: true
      PurgCatName                                                                                                                                              as PurgCatName,

      @Semantics.currencyCode: true
      DisplayCurrency,

      //Added for OVP Cards Req
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'DisplayCurrency'
      PurchaseOrderNetPriceAmount,

      //      @DefaultAggregation: #MAX
      //      cast ( 5 as vdm_purchasingsourcetype )                                                                                                                  as PurchasingSourceType,

      /* Criterion Scores*/
      @DefaultAggregation: #SUM
      cast ( VendorEval.TimeVarianceScore as mm_a_time_variance_score )                                                                                        as TimeVarianceScore,
      @DefaultAggregation: #SUM
      cast( VendorEval.PriceVarianceScore as mm_a_price_variance_score )                                                                                       as PriceVarianceScore,
      @DefaultAggregation: #SUM
      cast( VendorEval.QuantityVarianceScore as mm_a_quantity_var_score )                                                                                      as QuantityVarianceScore,
      @DefaultAggregation: #SUM
      cast( VendorEval.InspectionLotQualityScore as mm_a_quality_variance_score )                                                                              as InspectionLotQualityScore,
      @DefaultAggregation: #SUM
      cast( VendorEval.QualityNotificationScore as mm_a_quality_notif_score )                                                                                  as QualityNotificationScore,
      @DefaultAggregation: #SUM
      PriceVarianceCount                                                                                                                                       as NmbrOfPOWithPriceVariance,
      @DefaultAggregation: #SUM
      QuantityVarianceCount                                                                                                                                    as NmbrOfPOWithQuantityVariance,
      @DefaultAggregation: #SUM
      TimeVarianceCount                                                                                                                                        as NmbrOfPOWithTimeVariance,
      @DefaultAggregation: #SUM
      InspectionLotQualityCount                                                                                                                                as NmbrOfPOWithQualityVariance,
      @DefaultAggregation: #SUM
      QualityNotificationCount                                                                                                                                 as QualityNotificationCount,

      @VDM.lifecycle.status:#DEPRECATED
      @VDM.lifecycle.successor: 'SuplrEvalOplScoreValue'
      @DefaultAggregation: #SUM
      cast(
       (  QuantityVarianceScore1     * evaluationquantityweight    +
          PriceVarianceScore1        * evaluationpriceweight       +
          TimeVarianceScore1         * evaluationtimeweight        +
          InspectionLotQualityScore1 * evaluationqualityweight     +
          QualityNotificationScore1  * evaluationqualitynotifweight )   *
          division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight ) , 8 )
          as mm_a_supplier_opl_score  )                                                                                                                        as SupplierOperationalScore,


      @DefaultAggregation: #SUM
      case
        when InspectionLotQualityScore1 = 0             //3326174
          then cast(
            round((  QuantityVarianceScore1     * evaluationquantityweight    +
            PriceVarianceScore1        * evaluationpriceweight       +
            TimeVarianceScore1         * evaluationtimeweight        +
            QualityNotificationScore1  * evaluationqualitynotifweight )   *
            division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualitynotifweight ) , 8 ), 1)
            as mm_pur_ana_suplreval_opl_score     )
          else
      cast(
          round(( QuantityVarianceScore1     * evaluationquantityweight    +
          PriceVarianceScore1        * evaluationpriceweight       +
          TimeVarianceScore1         * evaluationtimeweight        +
          InspectionLotQualityScore1 * evaluationqualityweight     +
          QualityNotificationScore1  * evaluationqualitynotifweight )   *
          division( 1, (evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight ) , 8 ), 1)
          as mm_pur_ana_suplreval_opl_score    ) end                                                                                                           as SuplrEvalOplScoreValue,

      @DefaultAggregation: #SUM
      @UI.hidden: true
      cast(evaluationquantityweight + evaluationpriceweight + evaluationtimeweight + evaluationqualityweight + evaluationqualitynotifweight as  mm_weighting ) as SupplierEvalQualityWeighting,
      //   OperationalSupplierEvalTotWgtg,

      @Aggregation.referenceElement: ['PurchasingDocument']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )                                                                                                                   as NumberOfPurchaseOrders,


      @Aggregation.referenceElement: ['Supplier']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofscoredsuplrs )                                                                                                              as NmbrOfScoredSuppliers,

      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms )                                                                                                                as NumberOfPurchaseOrderItems,
      @UI.hidden: true
      cast( '' as mm_classification )                                                                                                                          as SupplierClassification,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Country,
      _CompanyCode,
      _Supplier,
      _Region,
      _Plant,
      _Material,
      _MaterialGroup,
      _PurchasingCategory,
      _PurchasingDocumentCategory,
      _DocConfigCategory,
      _DelivCmpltdConfign

}
where
  (
       evaluationquantityweight     != 0
    or evaluationpriceweight        != 0
    or evaluationtimeweight         != 0
    or evaluationqualityweight      != 0
    or evaluationqualitynotifweight != 0
  )
```
