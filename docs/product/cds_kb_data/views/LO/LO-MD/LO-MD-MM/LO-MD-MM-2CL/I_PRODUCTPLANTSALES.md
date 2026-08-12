---
name: I_PRODUCTPLANTSALES
description: "Productplantsales"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTSALES

**Productplantsales**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `LoadingGroup` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `CapPlanningQuantityInBaseUoM` |  | |  |  |  |  |
| `ProductShippingProcessingTime` |  | |  |  |  |  |
| `WrkCentersShipgSetupTimeInDays` |  | |  |  |  |  |
| `ReplacementPartType` |  | |  |  |  |  |
| `AvailabilityCheckType` |  | |  |  |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `_Product` | | ✓ | | | | |
| `_LoadingGroupText` | | ✓ | | | | |
| `_AvailabilityCheckType` | | ✓ | | | | |
| `_AvailabilityCheckType_2` | | ✓ | | | | |
| `_ProductReplacementPartTypeT` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdPlantSalesExt` | `E_Productplant` | [0..1] |
| `_LoadingGroupText` | `I_LoadingGroupText` | [0..*] |
| `_AvailabilityCheckType` | `I_ProdAvailabilityCheckGroup` | [0..1] |
| `_AvailabilityCheckType_2` | `I_ATPCheckingGroup` | [0..1] |
| `_ProductReplacementPartTypeT` | `I_ProductReplacementPartTypeT` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLANTSALES',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product plant sales'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET
]
@AccessControl.personalData.blocking: #NOT_REQUIRED
define view I_Productplantsales
  as select from P_ProductPlantBasic as PlantSales
  association [1..1] to I_Product                    as _Product               on  $projection.Product = _Product.Product
  association [0..1] to E_Productplant               as _ProdPlantSalesExt     on  $projection.Product = _ProdPlantSalesExt.Product
                                                                               and $projection.Plant   = _ProdPlantSalesExt.Plant
  association [0..*] to I_LoadingGroupText           as _LoadingGroupText      on  $projection.LoadingGroup = _LoadingGroupText.LoadingGroup

  association [0..1] to I_ProdAvailabilityCheckGroup as _AvailabilityCheckType on  $projection.AvailabilityCheckType = _AvailabilityCheckType.ProdAvailabilityCheckGroup
  association [0..1] to I_ATPCheckingGroup as _AvailabilityCheckType_2 on  $projection.AvailabilityCheckType = _AvailabilityCheckType_2.ATPCheckingGroup
  

  association [0..*] to I_ProductReplacementPartTypeT as _ProductReplacementPartTypeT on $projection.ReplacementPartType = _ProductReplacementPartTypeT.ReplacementPartType
  association [0..*] to I_ProductDescription_2        as _ProductDescription    on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_UnitOfMeasureText           as _BaseUnitOfMeasureText on  $projection.BaseUnit = _BaseUnitOfMeasureText.UnitOfMeasure
{

  key PlantSales.Product,
  key PlantSales.Plant,
      @ObjectModel.text.association: '_LoadingGroupText'
      @ObjectModel.sapObjectNodeTypeReference:'LoadingGroup'
      PlantSales.LoadingGroup,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      // New fields from MDG model, as part of unified API development
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PlantSales.CapPlanningQuantityInBaseUoM,
      PlantSales.ProductShippingProcessingTime,
      PlantSales.WrkCentersShipgSetupTimeInDays,
      @ObjectModel.sapObjectNodeTypeReference:'ProductReplacementPartType'
      PlantSales.ReplacementPartType,
      @ObjectModel.foreignKey.association: '_AvailabilityCheckType_2'
      PlantSales.AvailabilityCheckType,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
      _Product.BaseUnit                               as BaseUnit,
      _Product,
      _LoadingGroupText,
      _Product._BaseUnitOfMeasure,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_AvailabilityCheckType_2'
      _AvailabilityCheckType,
      _AvailabilityCheckType_2,
      _ProductReplacementPartTypeT,
      _ProductDescription,
      _BaseUnitOfMeasureText
}
```
