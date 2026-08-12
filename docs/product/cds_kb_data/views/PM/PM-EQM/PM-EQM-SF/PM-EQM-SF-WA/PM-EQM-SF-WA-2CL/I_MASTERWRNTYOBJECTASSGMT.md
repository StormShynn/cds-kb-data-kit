---
name: I_MASTERWRNTYOBJECTASSGMT
description: "Masterwrntyobjectassgmt"
app_component: PM-EQM-SF-WA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - component:PM-EQM-SF-WA-2CL
  - lob:Plant Maintenance
---
# I_MASTERWRNTYOBJECTASSGMT

**Masterwrntyobjectassgmt**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-WA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectInternalID` | ✓ | |  | `j_objnr` |  |  |
| `WarrantyType` | ✓ | |  | `gaart` |  |  |
| `MasterWarranty` |  | |  | `mganr` |  |  |
| `WarrantyStartDate` |  | |  | `gwldt` |  |  |
| `WarrantyEndDate` |  | |  | `gwlen` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `WrntyIsPassedOnToChildObject` |  | |  | `gaerb` |  |  |
| `WrntyIsInhtdFromSuperiorObject` |  | |  | `waget` |  |  |
| `_MasterWarranty` | | ✓ | | | | |
| `_WarrantyType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MasterWarranty` | `I_MasterWarranty` | [0..1] |
| `_WarrantyType` | `I_WarrantyType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IWRNTYOBJASSGMT'

@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Master Warranty Object Assignment'

--@Analytics: { dataCategory: #DIMENSION}
@VDM.viewType: #BASIC

@ObjectModel.representativeKey: 'ObjectInternalID'
@ObjectModel.semanticKey:  [ 'WarrantyType', 'ObjectInternalID' ]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L

define view I_MasterWrntyObjectAssgmt
  as select from bgmkobj
  association [0..1] to I_MasterWarranty as _MasterWarranty on $projection.MasterWarranty = _MasterWarranty.MasterWarranty
  association [0..1] to I_WarrantyType   as _WarrantyType   on $projection.WarrantyType = _WarrantyType.WarrantyType
{

  key j_objnr as ObjectInternalID,
      @ObjectModel.foreignKey.association: '_WarrantyType'
  key gaart   as WarrantyType,

      @ObjectModel.foreignKey.association: '_MasterWarranty'
      mganr   as MasterWarranty,

      gwldt   as WarrantyStartDate,
      gwlen   as WarrantyEndDate,
      erdat   as CreationDate,
      //      erzei,
      //      lvorm,
      begru   as AuthorizationGroup,
      //      gener,
      @Semantics.booleanIndicator: true
      gaerb   as WrntyIsPassedOnToChildObject,
      @Semantics.booleanIndicator: true
      waget   as WrntyIsInhtdFromSuperiorObject,

      _MasterWarranty,
      _WarrantyType
}
```
