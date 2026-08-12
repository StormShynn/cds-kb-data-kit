---
name: I_BILLOFMATERIALWITHKEYDATE
description: "Bill of MaterialWITHKEYDATE"
app_component: LO-MD-BOM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BOM
  - interface-view
  - material
  - bill-of-material
  - component:LO-MD-BOM-2CL
  - lob:Logistics General
  - bo:Material
---
# I_BILLOFMATERIALWITHKEYDATE

**Bill of MaterialWITHKEYDATE**

| Property | Value |
|---|---|
| App Component | `LO-MD-BOM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfMaterialCategory` | ✓ | |  |  |  |  |
| `BillOfMaterialVariantUsage` | ✓ | |  |  |  |  |
| `BillOfMaterial` | ✓ | |  |  |  |  |
| `BillOfMaterialVariant` | ✓ | |  |  |  |  |
| `BillOfMaterialVersion` | ✓ | |  |  |  |  |
| `BOMHeaderInternalChangeCount` | ✓ | |  |  |  |  |
| `IsMultipleBOMAlt` |  | |  |  |  |  |
| `BOMPrioritizedVersion` |  | |  |  |  |  |
| `BOMExplosionApplication` |  | |  |  |  |  |
| `BOMUsagePriority` |  | |  |  |  |  |
| `BillOfMaterialAuthsnGrp` |  | |  |  |  |  |
| `BOMVersionStatus` |  | |  |  |  |  |
| `IsVersionBillOfMaterial` |  | |  |  |  |  |
| `IsLatestBOMVersion` |  | |  |  |  |  |
| `BOMIsConfigurable` |  | |  |  |  |  |
| `IsConfiguredMaterial` |  | |  |  |  |  |
| `BOMTechnicalType` |  | |  | `cast ( bom_header.BOMTechnicalType as tetyp_d preserving type)` |  |  |
| `BOMGroup` |  | |  |  |  |  |
| `BOMHeaderText` |  | |  |  |  |  |
| `BOMAlternativeText` |  | |  |  |  |  |
| `BillOfMaterialStatus` |  | |  |  |  |  |
| `HeaderValidityStartDate` |  | |  |  |  |  |
| `HeaderValidityEndDate` |  | |  |  |  |  |
| `EngineeringChangeDocument` |  | |  |  |  |  |
| `ChgToEngineeringChgDocument` |  | |  |  |  |  |
| `IsMarkedForDeletion` |  | |  |  |  |  |
| `IsALE` |  | |  |  |  |  |
| `BOMHeaderBaseUnit` |  | |  |  |  |  |
| `BOMHeaderQuantityInBaseUnit` |  | |  |  |  |  |
| `RecordCreationDate` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `BOMIsToBeDeleted` |  | |  |  |  |  |
| `DocumentIsCreatedByCAD` |  | |  |  |  |  |
| `LaboratoryOrDesignOffice` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `BOMAssetNtwkHndovrIsRelevant` |  | |  |  |  |  |
| `BOMPredecessorVersion` |  | |  |  |  |  |
| `_BillOfMaterialItem` | | ✓ | | | | |
| `_Mast` | | ✓ | | | | |
| `_Dost` | | ✓ | | | | |
| `_Prst` | | ✓ | | | | |
| `_Kdst` | | ✓ | | | | |
| `_Eqst` | | ✓ | | | | |
| `_Tpst` | | ✓ | | | | |
| `_Stst` | | ✓ | | | | |
| `_BillOfMaterialVariantUsage` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfMaterialItem` | `I_BOMComponentWithKeyDate` | [0..*] |
| `_Mast` | `I_MaterialBOMLink` | [0..*] |
| `_Dost` | `I_DocumentBOMLink` | [0..*] |
| `_Prst` | `I_ProjectBOMLink` | [0..*] |
| `_Kdst` | `I_SalesOrderBOMLink` | [0..*] |
| `_Eqst` | `I_EquipmentBOMLink` | [0..*] |
| `_Tpst` | `I_FunctionalLocBOMLink` | [0..*] |
| `_Stst` | `I_StandardBOMLink` | [0..*] |
| `_BillOfMaterialVariantUsage` | `I_BillOfMaterialUsage` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBOMWITHKEYDATE'
@ClientHandling.type : #INHERITED
@ClientHandling.algorithm : #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #COMPOSITE
@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Bill of Material Header Details'
@Metadata.ignorePropagatedAnnotations: true

define view I_BillOfMaterialWithKeyDate
 with parameters
    @Environment.systemField: #SYSTEM_DATE
    P_KeyDate : sydate
  as select from I_BOMHeaderDetermine as bom_header
  association [0..*] to I_BOMComponentWithKeyDate  as _BillOfMaterialItem         on  $projection.BillOfMaterialCategory = _BillOfMaterialItem.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _BillOfMaterialItem.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _BillOfMaterialItem.BillOfMaterialVariant
                                                                             and $projection.BillOfMaterialVersion = _BillOfMaterialItem.BillOfMaterialVersion
  association [0..*] to I_MaterialBOMLink     as _Mast                       on  $projection.BillOfMaterialCategory = _Mast.BillOfMaterialCategory       
                                                                             and $projection.BillOfMaterial         = _Mast.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Mast.BillOfMaterialVariant
                                                                             and $projection.BillOfMaterialVariantUsage   = _Mast.BillOfMaterialVariantUsage
                                                                             
  association [0..*] to I_DocumentBOMLink     as _Dost                       on  $projection.BillOfMaterialCategory = _Dost.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Dost.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Dost.BillOfMaterialVariant
  association [0..*] to I_ProjectBOMLink      as _Prst                       on  $projection.BillOfMaterialCategory = _Prst.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Prst.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Prst.BillOfMaterialVariant
  association [0..*] to I_SalesOrderBOMLink   as _Kdst                       on  $projection.BillOfMaterialCategory = _Kdst.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Kdst.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Kdst.BillOfMaterialVariant
  association [0..*] to I_EquipmentBOMLink    as _Eqst                       on  $projection.BillOfMaterialCategory = _Eqst.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Eqst.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Eqst.BillOfMaterialVariant
  association [0..*] to I_FunctionalLocBOMLink    as _Tpst                   on  $projection.BillOfMaterialCategory = _Tpst.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Tpst.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Tpst.BillOfMaterialVariant
  association [0..*] to I_StandardBOMLink     as _Stst                       on  $projection.BillOfMaterialCategory = _Stst.BillOfMaterialCategory
                                                                             and $projection.BillOfMaterial         = _Stst.BillOfMaterial
                                                                             and $projection.BillOfMaterialVariant  = _Stst.BillOfMaterialVariant
  
  association [0..1] to I_BillOfMaterialUsage as _BillOfMaterialVariantUsage on  $projection.BillOfMaterialVariantUsage = _BillOfMaterialVariantUsage.BillOfMaterialVariantUsage
                                                                             and _BillOfMaterialVariantUsage.Language = $session.system_language
  
  association [0..1] to I_UnitOfMeasure       as _UnitOfMeasure              on  $projection.BOMHeaderBaseUnit = _UnitOfMeasure.UnitOfMeasure
{

 key   bom_header.BillOfMaterialCategory as BillOfMaterialCategory,
 key   bom_header.BillOfMaterialVariantUsage                                                                                                                                      as BillOfMaterialVariantUsage,
 key   bom_header.BillOfMaterial                                                                                                                    as BillOfMaterial,
 key   bom_header.BillOfMaterialVariant                                                                                                                                           as BillOfMaterialVariant,
 key   bom_header.BillOfMaterialVersion                                                                                                                                           as BillOfMaterialVersion,  
 key   bom_header.BOMHeaderInternalChangeCount                                                                                                                                    as BOMHeaderInternalChangeCount,
       bom_header.IsMultipleBOMAlt                                                                                                                                                as IsMultipleBOMAlt,
       bom_header.BOMPrioritizedVersion                                                                                                                                           as BOMPrioritizedVersion,
      bom_header.BOMExplosionApplication                                                                                                                                         as BOMExplosionApplication,
      bom_header.BOMUsagePriority                                                                                                                                                as BOMUsagePriority,
      bom_header.BillOfMaterialAuthsnGrp                                                                                                                                         as BillOfMaterialAuthsnGrp,
      bom_header.BOMVersionStatus                                                                                                                                                as BOMVersionStatus,
      bom_header.IsVersionBillOfMaterial                                                                                                                                         as IsVersionBillOfMaterial,
      bom_header.IsLatestBOMVersion                                                                                                                                              as IsLatestBOMVersion,
      bom_header.BOMIsConfigurable                                                                                                                                               as BOMIsConfigurable,
      bom_header.IsConfiguredMaterial                                                                                                                                            as IsConfiguredMaterial,
      cast ( bom_header.BOMTechnicalType as tetyp_d preserving type)                                                                                                             as BOMTechnicalType,
      bom_header.BOMGroup                                                                                                                                                        as BOMGroup,
      bom_header.BOMHeaderText                                                                                                                                                   as BOMHeaderText,
      bom_header.BOMAlternativeText                                                                                                                                              as BOMAlternativeText,
      bom_header.BillOfMaterialStatus                                                                                                                                            as BillOfMaterialStatus,
      bom_header.HeaderValidityStartDate                                                                                                                                         as HeaderValidityStartDate,
      bom_header.HeaderValidityEndDate                                                                                                                                           as HeaderValidityEndDate,
      bom_header.EngineeringChangeDocument                                                                                                                                       as EngineeringChangeDocument,
      bom_header.ChgToEngineeringChgDocument                                                                                                                                     as ChgToEngineeringChgDocument,
      bom_header.IsMarkedForDeletion                                                                                                                                               as IsMarkedForDeletion,
      bom_header.IsALE                                                                                                                                                           as IsALE,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      bom_header.BOMHeaderBaseUnit                                                                                                                                               as BOMHeaderBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'BOMHeaderBaseUnit'
      @DefaultAggregation :#NONE
      bom_header.BOMHeaderQuantityInBaseUnit                                                                                                                                     as BOMHeaderQuantityInBaseUnit,
      bom_header.RecordCreationDate                                                                                                                                              as RecordCreationDate,
      bom_header.LastChangeDate                                                                                                                                                  as LastChangeDate,
      bom_header.CreatedByUser                                                                                                                                                   as CreatedByUser,
      bom_header.LastChangedByUser                                                                                                                                               as LastChangedByUser,
      bom_header.BOMIsToBeDeleted                                                                                                                                                as BOMIsToBeDeleted,
      bom_header.DocumentIsCreatedByCAD                                                                                                                                          as DocumentIsCreatedByCAD,
      bom_header.LaboratoryOrDesignOffice                                                                                                                                        as LaboratoryOrDesignOffice,
      bom_header.LastChangeDateTime                                                                                                                                              as LastChangeDateTime,
      bom_header.BOMAssetNtwkHndovrIsRelevant                                                                                                                                    as BOMAssetNtwkHndovrIsRelevant,
      bom_header.BOMPredecessorVersion as BOMPredecessorVersion,
      _BillOfMaterialItem,
      _BillOfMaterialVariantUsage,
      _UnitOfMeasure,
      _Mast,
      _Dost,
      _Prst,
      _Kdst,
      _Eqst,
      _Tpst,
      _Stst
}
where
      HeaderValidityStartDate <= $parameters.P_KeyDate
  and HeaderValidityEndDate   >= $parameters.P_KeyDate
```
