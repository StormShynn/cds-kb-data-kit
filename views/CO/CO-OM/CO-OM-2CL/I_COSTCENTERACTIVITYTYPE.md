---
name: I_COSTCENTERACTIVITYTYPE
description: "Cost CenterACTIVITYTYPE"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CO
  - CO-OM
  - interface-view
  - cost-center
  - component:CO-OM-2CL
  - lob:Controlling
  - bo:CostCenter
---
# I_COSTCENTERACTIVITYTYPE

**Cost CenterACTIVITYTYPE**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` |  |  |
| `CostCtrActivityType` | ✓ | |  | `lstar` |  |  |
| `ValidityEndDate` | ✓ | |  | `datbi` |  |  |
| `ValidityStartDate` |  | |  | `datab` |  |  |
| `CostCtrActivityTypeQtyUnit` |  | |  | `leinh` |  |  |
| `CostCtrActivityTypeCategory` |  | |  | `latyp` |  |  |
| `AllocationCostElement` |  | |  | `vksta` |  |  |
| `CostCtrActivityTypeOutpQtyUnit` |  | |  | `auseh` |  |  |
| `CreationDate` |  | |  | `ersda` |  |  |
| `EnteredByUser` |  | |  | `usnam` |  |  |
| `CostOriginGroup` |  | |  | `hrkft` |  |  |
| `ActlPostgCostCenterActyTypeCat` |  | |  | `latypi` |  |  |
| `OutputQuantityFactor` |  | |  | `ausfk` |  |  |
| `ActivityTypeIsBlocked` |  | |  | `sprkz` |  |  |
| `FixedCostIsPredistributed` |  | |  | `fixvo` |  |  |
| `PriceAllocationMethod` |  | |  | `tarkz` |  |  |
| `PeriodPriceIsAverage` |  | |  | `yrate` |  |  |
| `ActualPriceAllocationMethod` |  | |  | `tarkz_i` |  |  |
| `ActualQuantityIsSetManually` |  | |  | `manist` |  |  |
| `PlanQuantityIsSetManually` |  | |  | `manplan` |  |  |
| `CostCtrActivityTypeValidCat` |  | |  | `kstty` |  |  |
| `CostCtrActyTypeIsCtrlgRlvtComp` |  | |  | `lark1` |  |  |
| `CostCtrActyTypeIsHumRsceRlvt` |  | |  | `lark2` |  |  |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCenterCategory` | | ✓ | | | | |
| `_CostCtrActivityTypeCategory` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CostCtrActivityTypeHierNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_CostCenterActivityTypeText` | [0..*] |
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CostCenterCategory` | `I_CostCtrActytypeCostCtrCat` | [0..*] |
| `_CostCtrActivityTypeCategory` | `I_CostCenterActivityTypeCat` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1] |
| `_CostCtrActivityTypeHierNode` | `I_CostCtrActivityTypeHierNode` | [0..*] |

## Source Code

```abap
@ObjectModel.representativeKey: 'CostCtrActivityType'
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #ANALYTICAL_DIMENSION ]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}

@ObjectModel.sapObjectNodeType.name: 'CostCenterActivityType'

@EndUserText.label: 'Cost Center Activity Type'
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
        automatic: true
        }
    }
}
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICCACTTYP'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@Consumption.filter.businessDate.at: true

define view I_CostCenterActivityType
as select from csla

  //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
  association [0..1] to I_ControllingArea      as _ControllingAreaText on   $projection.ControllingArea = _ControllingAreaText.ControllingArea
  // ]--GENERATED
association [0..*] to I_CostCenterActivityTypeText   as _Text                on $projection.ControllingArea     = _Text.ControllingArea 
                                                                                   and $projection.CostCtrActivityType = _Text.CostCtrActivityType
                                                                                   and $projection.ValidityEndDate     = _Text.ValidityEndDate
association[1]     to I_ControllingArea              as _ControllingArea     on $projection.ControllingArea     = _ControllingArea.ControllingArea
association [0..*] to I_CostCtrActytypeCostCtrCat    as _CostCenterCategory  on  $projection.ControllingArea     = _CostCenterCategory.ControllingArea
                                                                                   and $projection.CostCtrActivityType = _CostCenterCategory.CostCtrActivityType
                                                                                   and $projection.ValidityEndDate     = _CostCenterCategory.ValidityEndDate
association[0..1]  to I_CostCenterActivityTypeCat    as _CostCtrActivityTypeCategory on $projection.CostCtrActivityTypeCategory = _CostCtrActivityTypeCategory.CostCtrActivityTypeCategory
association[1]     to I_UnitOfMeasure                as _UnitOfMeasure       on $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure
association [0..*] to I_CostCtrActivityTypeHierNode  as _CostCtrActivityTypeHierNode on $projection.ControllingArea = _CostCtrActivityTypeHierNode.ControllingArea
                                                                                   and $projection.CostCtrActivityType = _CostCtrActivityTypeHierNode.CostCtrActivityType 
{
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [ 
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
@ObjectModel.foreignKey.association: '_ControllingArea' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Controlling Area'
  key cast( kokrs as fis_kokrs preserving type ) as ControllingArea,
@ObjectModel.hierarchy.association: '_CostCtrActivityTypeHierNode'
@ObjectModel.text.association: '_Text'
  key lstar as CostCtrActivityType,
@Semantics.businessDate.to: true  
  key datbi as ValidityEndDate,
@Semantics.businessDate.from: true
      datab as ValidityStartDate,
@Semantics.unitOfMeasure:true
      leinh as CostCtrActivityTypeQtyUnit,
@ObjectModel.foreignKey.association: '_CostCtrActivityTypeCategory' //Inserted by VDM CDS Suite Plugin
      latyp as CostCtrActivityTypeCategory,
      vksta as AllocationCostElement,
      auseh as CostCtrActivityTypeOutpQtyUnit,
@Semantics.systemDate.createdAt: true      
      ersda as CreationDate,
      usnam as EnteredByUser,
      hrkft as CostOriginGroup,
      latypi  as ActlPostgCostCenterActyTypeCat,
@DefaultAggregation: #SUM
//@Semantics: { quantity : {unitOfMeasure: 'CostCtrActivityTypeQtyUnit'} } 
      ausfk   as OutputQuantityFactor,
      sprkz   as ActivityTypeIsBlocked,
      fixvo   as FixedCostIsPredistributed,
      tarkz   as PriceAllocationMethod,
      yrate   as PeriodPriceIsAverage,
      tarkz_i as ActualPriceAllocationMethod,
      manist  as ActualQuantityIsSetManually,
      manplan as PlanQuantityIsSetManually,
      kstty   as CostCtrActivityTypeValidCat,
      lark1   as CostCtrActyTypeIsCtrlgRlvtComp,
      lark2   as CostCtrActyTypeIsHumRsceRlvt,
  _Text,
  _ControllingArea,
  _CostCenterCategory,
  _CostCtrActivityTypeCategory,
  _CostCtrActivityTypeHierNode,
  _UnitOfMeasure,
 // _CostCtrActivityTypeHierNode,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


};
```
