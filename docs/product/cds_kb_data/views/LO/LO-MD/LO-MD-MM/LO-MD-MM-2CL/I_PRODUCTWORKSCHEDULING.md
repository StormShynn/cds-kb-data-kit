---
name: I_PRODUCTWORKSCHEDULING
description: "Productworkscheduling"
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTWORKSCHEDULING

**Productworkscheduling**

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
| `MaterialBaseQuantity` |  | |  |  |  |  |
| `UnlimitedOverDelivIsAllowed` |  | |  |  |  |  |
| `OverDelivToleranceLimit` |  | |  |  |  |  |
| `UnderDelivToleranceLimit` |  | |  |  |  |  |
| `ProductionInvtryManagedLoc` |  | |  |  |  |  |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |  |  |
| `ProdnOrderIsBatchRequired` |  | |  |  |  |  |
| `ProdIsWithdrawnFrmProdnBin` |  | |  |  |  |  |
| `TransitionMatrixProductsGroup` |  | |  |  |  |  |
| `OrderChangeManagementProfile` |  | |  |  |  |  |
| `MatlCompIsMarkedForBackflush` |  | |  |  |  |  |
| `SetupAndTeardownTime` |  | |  |  |  |  |
| `ProductionSchedulingProfile` |  | |  |  |  |  |
| `TransitionTime` |  | |  |  |  |  |
| `ProcessingTimeInDays` |  | |  |  |  |  |
| `ProductionSupervisor` |  | |  |  |  |  |
| `ProductProductionQuantityUnit` |  | |  |  |  |  |
| `HasProductionVersion` |  | |  |  |  |  |
| `BaseUnit` |  | | `_Product` | `BaseUnit` |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductionInvtryManagedLoc` | | ✓ | | | | |
| `_ProductionSupervisor` | | ✓ | | | | |
| `_ProductionSchedulingProfile` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ProductProductionQuantityUnit` | | ✓ | | | | |
| `_ProdnOrdBatDetnCodeText` | | ✓ | | | | |
| `_ProdComponentBackflushCodeT` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |
| `_BaseUnitOfMeasureText` | | ✓ | | | | |
| `_ProdProdnQuantityUnitText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProdWorkSchedulingExt` | `E_Productplant` | [0..1] |
| `_ProductionInvtryManagedLoc` | `I_StorageLocation` | [0..1] |
| `_ProductionSupervisor` | `I_ProductionSupervisor` | [0..1] |
| `_ProductionSchedulingProfile` | `I_ProductionSchedulingProfile` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ProductProductionQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_ProdnOrdBatDetnCodeText` | `I_ProdnOrdBatDetnCodeText` | [0..*] |
| `_ProdComponentBackflushCodeT` | `I_ProdComponentBackflushCodeT` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |
| `_BaseUnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_ProdProdnQuantityUnitText` | `I_UnitOfMeasureText` | [0..*] |

## Source Code

```abap
// Product Work scheduling (active)
@AbapCatalog: {
    sqlViewName: 'IPRDWORKSCHED',
    preserveKey:true,
    compiler.compareFilter:true
    }
@VDM.viewType: #BASIC
@AccessControl: {
    authorizationCheck: #MANDATORY,
    privilegedAssociations: ['_ProductionSupervisor']
    }
@EndUserText.label: 'Product WorkScheduling core entity'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics:{
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture :{
      mapping: [{ viewElement: ['Product', 'Plant'],
                  role: #MAIN,
                  table: 'MARC',
                  tableElement: ['MATNR', 'WERKS']},
                { viewElement: ['Product'],
                  role: #LEFT_OUTER_TO_ONE_JOIN,
                  table: 'MARA',
                  tableElement: ['MATNR']}
                ]
    }
  }
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.sapObjectNodeType.name: 'ProductPlantWorkScheduling'

define view I_ProductWorkScheduling
  as select from P_ProductPlantBasic as WorkScheduling


  association [1..1] to I_Product                     as _Product                       on  $projection.Product = _Product.Product
  association [0..1] to E_Productplant                as _ProdWorkSchedulingExt         on  $projection.Product = _ProdWorkSchedulingExt.Product
                                                                                        and $projection.Plant   = _ProdWorkSchedulingExt.Plant
  association [0..1] to I_StorageLocation             as _ProductionInvtryManagedLoc    on  $projection.Plant                      = _ProductionInvtryManagedLoc.Plant
                                                                                        and $projection.ProductionInvtryManagedLoc = _ProductionInvtryManagedLoc.StorageLocation
  association [0..1] to I_ProductionSupervisor        as _ProductionSupervisor          on  $projection.Plant                = _ProductionSupervisor.Plant
                                                                                        and $projection.ProductionSupervisor = _ProductionSupervisor.ProductionSupervisor
  association [0..1] to I_ProductionSchedulingProfile as _ProductionSchedulingProfile   on  $projection.Plant                       = _ProductionSchedulingProfile.Plant
                                                                                        and $projection.ProductionSchedulingProfile = _ProductionSchedulingProfile.ProductionSchedulingProfile
  association [1..1] to I_Plant                       as _Plant                         on  $projection.Plant = _Plant.Plant
  association [0..1] to I_UnitOfMeasure               as _ProductProductionQuantityUnit on  $projection.ProductProductionQuantityUnit = _ProductProductionQuantityUnit.UnitOfMeasure
  association [0..*] to I_ProdnOrdBatDetnCodeText     as _ProdnOrdBatDetnCodeText       on  $projection.ProdnOrderIsBatchRequired = _ProdnOrdBatDetnCodeText.ProductionOrderBatchCode
  association [0..*] to I_ProdComponentBackflushCodeT as _ProdComponentBackflushCodeT   on $projection.MatlCompIsMarkedForBackflush = _ProdComponentBackflushCodeT.ProductComponentBackflushCode

  association [0..*] to I_ProductDescription_2        as _ProductDescription            on  $projection.Product = _ProductDescription.Product
  association [0..*] to I_UnitOfMeasureText           as _BaseUnitOfMeasureText         on  $projection.BaseUnit = _BaseUnitOfMeasureText.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText           as _ProdProdnQuantityUnitText     on  $projection.ProductProductionQuantityUnit = _ProdProdnQuantityUnitText.UnitOfMeasure
{
  key    WorkScheduling.Product,
         @ObjectModel.foreignKey.association: '_Plant'
  key    WorkScheduling.Plant,
         @Semantics.quantity.unitOfMeasure: 'BaseUnit'
         WorkScheduling.MaterialBaseQuantity,
         WorkScheduling.UnlimitedOverDelivIsAllowed,
         WorkScheduling.OverDelivToleranceLimit,
         WorkScheduling.UnderDelivToleranceLimit,

         @ObjectModel.foreignKey.association: '_ProductionInvtryManagedLoc'
         @ObjectModel.sapObjectNodeTypeReference:'StorageLocation'
         WorkScheduling.ProductionInvtryManagedLoc, //PSTAT Revert
         cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

         // New fields from MDG model, as part of unified API development
         @Semantics.booleanIndicator: true
         WorkScheduling.ProdnOrderIsBatchRequired,
         WorkScheduling.ProdIsWithdrawnFrmProdnBin,
         WorkScheduling.TransitionMatrixProductsGroup,
         WorkScheduling.OrderChangeManagementProfile,
         @Semantics.booleanIndicator: true
         WorkScheduling.MatlCompIsMarkedForBackflush,
         WorkScheduling.SetupAndTeardownTime,
         @ObjectModel.foreignKey.association: '_ProductionSchedulingProfile'
         @ObjectModel.sapObjectNodeTypeReference:'ProductionSchedulingProfile'
         WorkScheduling.ProductionSchedulingProfile,
         WorkScheduling.TransitionTime,
         WorkScheduling.ProcessingTimeInDays,
         @ObjectModel.foreignKey.association: '_ProductionSupervisor'
         WorkScheduling.ProductionSupervisor,
         @ObjectModel.foreignKey.association: '_ProductProductionQuantityUnit'
         WorkScheduling.ProductProductionQuantityUnit,
         WorkScheduling.HasProductionVersion, //calculated field  pstat A
         @Semantics.unitOfMeasure: true
         @ObjectModel.foreignKey.association: '_BaseUnitOfMeasure'
         _Product.BaseUnit                               as BaseUnit,

         _Product,
         _Plant,
         _ProductionInvtryManagedLoc,
         _ProductionSupervisor,
         _ProductionSchedulingProfile,
         _Product._BaseUnitOfMeasure,
         _ProductProductionQuantityUnit,
         _ProdnOrdBatDetnCodeText,
         _ProdComponentBackflushCodeT,
         _ProductDescription,
         _BaseUnitOfMeasureText,
         _ProdProdnQuantityUnitText
         
}
```
