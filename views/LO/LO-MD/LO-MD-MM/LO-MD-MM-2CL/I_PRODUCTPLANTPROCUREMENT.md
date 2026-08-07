---
name: I_PRODUCTPLANTPROCUREMENT
description: Productplantprocurement
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
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
# I_PRODUCTPLANTPROCUREMENT

**Productplantprocurement**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `Plant` | ✓ | |  |  |  |  |
| `IsAutoPurOrdCreationAllowed` |  | |  |  |  |  |
| `IsSourceListRequired` |  | |  |  |  |  |
| `IsPurgAcrossPurgGroup` |  | |  |  |  |  |
| `SourceOfSupplyCategory` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `ProposedProductSupplyArea` |  | |  |  |  |  |
| `ItmIsRlvtToJITDelivSchedules` |  | |  |  |  |  |
| `_Product` | | ✓ | | | | |
| `_SourceOfSupplyCategory` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProdPlantProcExt` | `E_Productplant` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_SourceOfSupplyCategory` | `I_SourceOfSupplyCategory` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLANTPROC',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Procurement'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'Product'
@ObjectModel.sapObjectNodeType.name:'ProductPlantProcurement'
define view I_Productplantprocurement
  as select from P_ProductPlantBasic as PlantProc

  association [0..1] to E_Productplant           as _ProdPlantProcExt       on  $projection.Product = _ProdPlantProcExt.Product
                                                                            and $projection.Plant   = _ProdPlantProcExt.Plant
  association [1..1] to I_Product                as _Product                on  $projection.Product = _Product.Product

  association [0..1] to I_SourceOfSupplyCategory as _SourceOfSupplyCategory on  $projection.SourceOfSupplyCategory = _SourceOfSupplyCategory.SourceOfSupplyCategory
  association [0..1] to I_PurchasingGroup        as _PurchasingGroup        on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [1..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant
  association [0..*] to I_ProductDescription_2   as _ProductDescription     on  $projection.Product = _ProductDescription.Product
{

  key PlantProc.Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key PlantProc.Plant,
      //      PlantProc.maxlz                                 as MaximumStoragePeriod,
      PlantProc.IsAutoPurOrdCreationAllowed,
      PlantProc.IsSourceListRequired,
      PlantProc.IsPurgAcrossPurgGroup,
      @ObjectModel.foreignKey.association: '_SourceOfSupplyCategory'
      PlantProc.SourceOfSupplyCategory,
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PlantProc.PurchasingGroup,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      // New fields from MDG model, as part of unified API development
      // PlantProc.usequ                                      as QuotaArrangementUsage,
      PlantProc.ProposedProductSupplyArea,
      @Semantics.booleanIndicator: true
      PlantProc.ItmIsRlvtToJITDelivSchedules,

      _SourceOfSupplyCategory,
      _PurchasingGroup,
      _Product,
      _Plant,
      _ProductDescription

}
```
