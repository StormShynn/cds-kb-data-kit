---
name: I_COSTCENTERACTIVITYTYPECTRL
description: "Cost Center Activity Type Control Data"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value
semantic_en: "Cost Center Activity Type Control Data"
semantic_vi: "Cost Center Activity Type Control Data — CDS view giao diện dựa trên cssl."
keywords:
  - "cost"
  - "center"
  - "activity"
  - "type"
  - "control"
  - "data"
  - "controlling"
  - "area"
  - "fiscal"
  - "year"
  - "collector"
tags:
  - FI
  - component:FI-GL-IS-2CL
  - FI-GL
  - FI-GL-IS
  - FI-GL-IS-2CL
  - interface-view
  - lob:finance
---
# I_COSTCENTERACTIVITYTYPECTRL

**Cost Center Activity Type Control Data**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( kokrs as fis_kokrs preserving type )` | `CHAR(4)` | Controlling Area |
| `CostCenter` | ✓ | |  | `kostl` | `CHAR(10)` | Cost Center |
| `CostCtrActivityType` | ✓ | |  | `lstar` | `CHAR(6)` | Activity Type |
| `FiscalYear` | ✓ | |  | `gjahr` | `NUMC(4)` | Fiscal Year |
| `CostCollector` |  | |  | `cckey` | `CHAR(23)` | Cost Collector Key |
| `CostCtrActivityTypeCategory` |  | |  | `latyp` | `CHAR(1)` | Activity Type Category |
| `CostCtrActivityTypeQtyUnit` |  | |  | `leinh` | `UNIT(3)` | Activity Unit |
| `OutputQuantityFactor` |  | |  | `ausfk` | `DEC(5)` | Output factor |
| `CostCtrActivityTypeOutpQtyUnit` |  | |  | `auseh` | `UNIT(3)` | Output Unit |
| `ControllingObject` |  | |  | `cast(objnr as j_objnr preserving type )` | `CHAR(22)` | Object Number |
| `ActlPostgCostCenterActyTypeCat` |  | |  | `latypi` | `CHAR(1)` | Variant Activity Type Category for Actual Postings |
| `_ControllingArea` | | ✓ | | | | |
| `_CostCtrActivityType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CostCtrActivityTypeCategory` | | ✓ | | | | |
| `_ActlPostgCostCtrActyTypeCat` | | ✓ | | | | |
| `_FiscalYear` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_ControllingArea` | [1] |
| `_CostCtrActivityType` | `I_CostCenterActivityType` | [0..*] |
| `_Text` | `I_CostCenterActivityTypeText` | [0..*] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CostCtrActivityTypeCategory` | `I_CostCenterActivityTypeCat` | [0..1] |
| `_ActlPostgCostCtrActyTypeCat` | `I_ActlPostgCostCtrActyTypeCat` | [0..1] |
| `_FiscalYear` | `I_FiscalYear` | [0..*] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COSTCENTERACTIVITYTYPECTRL')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFICCACTCTRL'
@ObjectModel.representativeKey: 'CostCtrActivityType'

@EndUserText.label: 'Cost Center Activity Type Control Data'

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #M
}
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions: true

define view I_CostCenterActivityTypeCtrl as select from cssl
association [1]          to       I_ControllingArea                   as _ControllingArea             on  $projection.ControllingArea     = _ControllingArea.ControllingArea
association [0..*]       to       I_CostCenterActivityType            as _CostCtrActivityType         on  $projection.ControllingArea     = _CostCtrActivityType.ControllingArea 
                                                                                                          and $projection.CostCtrActivityType = _CostCtrActivityType.CostCtrActivityType
association [0..*]       to       I_CostCenterActivityTypeText        as _Text                        on $projection.ControllingArea      = _Text.ControllingArea 
                                                                                                         and $projection.CostCtrActivityType = _Text.CostCtrActivityType                                                                             
association [0..*]       to       I_CostCenter                        as _CostCenter                  on  $projection.ControllingArea     = _CostCenter.ControllingArea
                                                                                                         and $projection.CostCenter   = _CostCenter.CostCenter
--association [0..*]       to       I_CostCenterText                    as _CCText                      on  $projection.ControllingArea     = _CCText.ControllingArea 
association [0..1]       to       I_CostCenterActivityTypeCat         as _CostCtrActivityTypeCategory on $projection.CostCtrActivityTypeCategory = _CostCtrActivityTypeCategory.CostCtrActivityTypeCategory
association [0..1]       to       I_ActlPostgCostCtrActyTypeCat       as _ActlPostgCostCtrActyTypeCat on $projection.ActlPostgCostCenterActyTypeCat = _ActlPostgCostCtrActyTypeCat.ActlPostgCostCenterActyTypeCat
association [0..*]       to       I_FiscalYear                        as _FiscalYear                  on  $projection.FiscalYear  = _FiscalYear.FiscalYear
association [0..1]       to       I_UnitOfMeasure                     as _UnitOfMeasure               on $projection.CostCtrActivityTypeQtyUnit = _UnitOfMeasure.UnitOfMeasure                                                                                                          
                                                                          
{
  //CSSL 
  @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast( kokrs as fis_kokrs preserving type )      as ControllingArea,
  @ObjectModel.foreignKey.association: '_CostCenter' 
  --@ObjectModel.text.association: '_CCText'
  key kostl                                           as CostCenter, 
  --@ObjectModel.foreignKey.association: '_CostCtrActivityType'
  @ObjectModel.text.association: '_Text'
  key lstar                                           as CostCtrActivityType,
  @ObjectModel.foreignKey.association: '_FiscalYear'
  key gjahr                                           as FiscalYear, 
  cckey                                               as CostCollector, 
  @ObjectModel.foreignKey.association: '_CostCtrActivityTypeCategory'
  latyp                                               as CostCtrActivityTypeCategory, 
  @ObjectModel.foreignKey.association: '_UnitOfMeasure'
  @Semantics.unitOfMeasure:true
  leinh                                               as CostCtrActivityTypeQtyUnit,
  @DefaultAggregation: #SUM
  //@Semantics: { quantity : {unitOfMeasure: 'CostCtrActivityTypeQtyUnit'} } 
  ausfk                                               as OutputQuantityFactor, 
  auseh                                               as CostCtrActivityTypeOutpQtyUnit, 
  cast(objnr as j_objnr preserving type )             as ControllingObject,
   @ObjectModel.foreignKey.association: '_ActlPostgCostCtrActyTypeCat' 
  latypi                                              as ActlPostgCostCenterActyTypeCat,
  _ControllingArea,
  _CostCenter,
  _CostCtrActivityType,
  _CostCtrActivityTypeCategory,
  _ActlPostgCostCtrActyTypeCat,
  _FiscalYear,
  _UnitOfMeasure,
  --_CCText,
  _Text
}
```
