---
name: C_SUPLREVALBYQUALITYCUBE
description: "Suplrevalbyqualitycube"
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
# C_SUPLREVALBYQUALITYCUBE

**Suplrevalbyqualitycube**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLot` | ✓ | |  |  |  |  |
| `PurgDocMigrtnIsCmpltdForAnlyts` | ✓ | |  |  |  |  |
| `SuplrEvalRelevantDocCategory` | ✓ | |  |  |  |  |
| `PurchaseOrder` |  | |  | `cast( QualityVariance.PurchasingDocument as vdm_purchaseorder )` |  |  |
| `PurchaseOrderItem` |  | |  | `cast( QualityVariance.PurchasingDocumentItem as vdm_purchaseorderitem )` |  |  |
| `Supplier` |  | |  |  |  |  |
| `SupplierCountry` |  | |  | `cast( _Supplier.Country as mm_a_supplier_country )` |  |  |
| `Region` |  | | `_Supplier` | `Region` |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `CalendarYear` |  | | `_Date` | `CalendarYear` |  |  |
| `CalendarQuarter` |  | | `_Date` | `CalendarQuarter` |  |  |
| `CalendarMonth` |  | | `_Date` | `CalendarMonth` |  |  |
| `CalendarWeek` |  | | `_Date` | `CalendarWeek` |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingCategory` |  | |  |  |  |  |
| `PurgCatName` |  | |  |  |  |  |
| `InspectionLotQualityScore` |  | |  | `cast( case when UpdatedScore.IsScoreChanged = 'X' then UpdatedScore.InspectionLotQualityScore else QualityVariance.InspectionLotQualityScore end as mm_a_variance_score )` |  |  |
| `NumberOfPurchaseOrders` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurords )` |  |  |
| `NumberOfPurchaseOrderItems` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `NumberOfInspectionLots` |  | |  | `cast( 1 as mm_pur_ana_numbrofpurorditms )` |  |  |
| `PurchaseOrderItemUniqueID` |  | |  |  |  |  |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SupplierRegion` | | ✓ | | | | |
| `_CalendarMonth` | | ✓ | | | | |
| `_PurchasingDocumentCatName` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Date` | `I_CalendarDate` | [1..1] |
| `_Material` | `I_Product` | [1..1] |
| `_MaterialGroup` | `I_ProductGroup_2` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_SupplierRegion` | `I_Region` | [0..1] |
| `_CalendarMonth` | `I_CalendarMonth` | [1..1] |
| `_PurchasingDocumentCatName` | `I_PurchasingDocumentCategory` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CSUPEVALQLTYCUBE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@EndUserText.label: 'Supplier Evaluation by Quality'
@VDM.viewType: #CONSUMPTION
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory:  #L
@Metadata.allowExtensions:true
@Analytics.dataCategory: #CUBE
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_PROVIDER  ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view C_SuplrEvalByQualityCube

  with parameters
    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionStartDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_StartDate : vdm_validitystart,

    @Consumption.derivation: { lookupEntity: 'I_SglGregorianCalDateFunction',
    resultElement: 'DateFunctionEndDate', binding: [ {
      targetParameter: 'P_DateFunction', type: #PARAMETER, value : 'P_DateFunction' } ]
    }
    @Consumption.hidden: true
    P_EndDate   : vdm_validityend

  as select from           P_SuplrEvalByQuality1(P_StartDate: $parameters.P_StartDate , P_EndDate: $parameters.P_EndDate) as QualityVariance

  //    inner join      I_PurchaseOrderItem                                                   as PurchaseOrderItem           on  I_InspectionLotCube.PurchasingDocument     = PurchaseOrderItem.PurchaseOrder
  //                                                                                                                         and I_InspectionLotCube.PurchasingDocumentItem = PurchaseOrderItem.PurchaseOrderItem
  //                                                                                                                         and InspectionLotCreatedOn >= $parameters.P_StartDate
  //                                                                                                                         and InspectionLotCreatedOn <= $parameters.P_EndDate
  //
  //
    left outer to one join I_PurchasingCategoryMatlGroup                                                                  as PurchasingCategoryMatlGroup on QualityVariance.MaterialGroup = PurchasingCategoryMatlGroup.MaterialGroup

    left outer to one join P_QualityVarianceUpdatedScore                                                                  as UpdatedScore                on  QualityVariance.PurchasingDocument     = UpdatedScore.PurchaseOrder
                                                                                                                                                         and QualityVariance.PurchasingDocumentItem = UpdatedScore.PurchaseOrderItem

  association [1..1] to I_CalendarDate               as _Date                      on  QualityVariance.InspectionLotCreatedOn = _Date.CalendarDate
  association [1..1] to I_Product                    as _Material                  on  $projection.Material = _Material.Product
  association [1..1] to I_ProductGroup_2             as _MaterialGroup             on  $projection.MaterialGroup = _MaterialGroup.ProductGroup
  association [1..1] to I_Supplier                   as _Supplier                  on  $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Country                    as _Country                   on  $projection.SupplierCountry = _Country.Country
  association [1..1] to I_Plant                      as _Plant                     on  $projection.Plant = _Plant.Plant
  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization    on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization
  association [1..1] to I_PurchasingGroup            as _PurchasingGroup           on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to I_CompanyCode                as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_Region                     as _SupplierRegion            on  $projection.region          = _SupplierRegion.Region
                                                                                   and $projection.SupplierCountry = _SupplierRegion.Country
  association [1..1] to I_CalendarMonth              as _CalendarMonth             on  _Date.CalendarMonth = _CalendarMonth.CalendarMonth
  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCatName on  $projection.PurchasingDocumentCategory = _PurchasingDocumentCatName.PurchasingDocumentCategory

{
  key QualityVariance.InspectionLot,
      @Consumption.hidden: true
      @Environment.sql.passValue: true
  key PurgDocMigrtnIsCmpltdForAnlyts,

      @Environment.sql.passValue: true
  key SuplrEvalRelevantDocCategory,


      cast( QualityVariance.PurchasingDocument as vdm_purchaseorder )         as PurchaseOrder,
      cast( QualityVariance.PurchasingDocumentItem as vdm_purchaseorderitem ) as PurchaseOrderItem,

      @Consumption.labelElement: 'SupplierName'
      @ObjectModel.foreignKey.association: '_Supplier'
      @Analytics.internalName:#LOCAL
      QualityVariance.Supplier,


      @Consumption.labelElement: 'CountryName'
      @ObjectModel.foreignKey.association: '_Country'
      @Analytics.internalName:#LOCAL
      cast( _Supplier.Country as mm_a_supplier_country )                      as SupplierCountry,

      @ObjectModel.foreignKey.association: '_SupplierRegion'
      @Analytics.internalName:#LOCAL
      _Supplier.Region,

      _Supplier._StandardAddress._Country._Text[1: Language = $session.system_language].CountryName,

      @Consumption.labelElement: 'PurchasingGroupName'
      @Analytics.internalName:#LOCAL
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Analytics.internalName:#LOCAL
      CompanyCode,


      @Consumption.labelElement: 'PurchasingOrganizationName'
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      @Analytics.internalName:#LOCAL
      PurchasingOrganization,

       @Semantics.calendar.year: true
      _Date.CalendarYear,
      _Date.CalendarQuarter,
      @ObjectModel.foreignKey.association: '_CalendarMonth'
      _Date.CalendarMonth,
      _Date.CalendarWeek,

      

      @Consumption.labelElement: 'MaterialName'
      @ObjectModel.foreignKey.association: '_Material'
      @Analytics.internalName:#LOCAL
      QualityVariance.Material,

      @Consumption.labelElement: 'MaterialGroupName'
      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Analytics.internalName:#LOCAL
      QualityVariance.MaterialGroup,

      @ObjectModel.foreignKey.association: '_Plant'
      @Analytics.internalName:#LOCAL
      @Consumption.labelElement: 'PlantName'
      QualityVariance.Plant,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentCatName'
      @Analytics.internalName:#LOCAL
      @Consumption.labelElement: 'PurchasingDocumentCategory'
      //      @ObjectModel.text.element: ['PurchasingDocumentCategory']
      //      @Consumption.valueHelpDefinition: [{ entity: { name : 'I_PurchasingDocumentCategory', element : 'PurchasingDocumentCategory' } }]
      QualityVariance.PurchasingDocumentCategory                              as PurchasingDocumentCategory,


      @ObjectModel.text.element: ['PurgCatName']
      @Consumption.labelElement: 'PurgCatName'
      @Analytics.internalName:#LOCAL
      PurchasingCategoryMatlGroup._PurchasingCategory.PurchasingCategory      as PurchasingCategory,
      @Semantics.text: true
      PurchasingCategoryMatlGroup._PurchasingCategory.PurgCatName             as PurgCatName,

      @DefaultAggregation: #SUM
      cast( case when UpdatedScore.IsScoreChanged = 'X'
        then UpdatedScore.InspectionLotQualityScore
       else QualityVariance.InspectionLotQualityScore
      end as mm_a_variance_score )                                            as InspectionLotQualityScore,

      // @EndUserText.label: 'Purchase Order Count'
      @Aggregation.referenceElement: ['PurchaseOrder']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurords )                                  as NumberOfPurchaseOrders,

      //@EndUserText.label: 'Purchase Order Item Count'
      // @DefaultAggregation: #SUM
      @Aggregation.referenceElement: ['PurchaseOrderItemUniqueID']
      @Aggregation.default: #COUNT_DISTINCT
      cast( 1 as mm_pur_ana_numbrofpurorditms )                               as NumberOfPurchaseOrderItems,

      @DefaultAggregation: #SUM
      cast( 1 as mm_pur_ana_numbrofpurorditms )                               as NumberOfInspectionLots,

      PurchaseOrderItemUniqueID,

      _Supplier,
      _Country,
      _PurchasingOrganization,
      _Material,
      _MaterialGroup,
      _Plant,
      _PurchasingGroup,
      _SupplierRegion,
      _CompanyCode,
      _CalendarMonth,
      _PurchasingDocumentCatName

}
where
  QualityVariance.Supplier <> ''
//and not ( PurchaseOrderItem.IsStatisticalItem = 'X' and PurchaseOrderItem.Material= '' )
```
