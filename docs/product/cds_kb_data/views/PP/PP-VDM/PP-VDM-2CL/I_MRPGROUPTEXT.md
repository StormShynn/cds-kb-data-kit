---
name: I_MRPGROUPTEXT
description: "Mrpgrouptext"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_MRPGROUPTEXT

**Mrpgrouptext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MRPGroup` | ✓ | |  | `disgr` |  |  |
| `MRPPlant` | ✓ | |  | `werks` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `MRPGroupName` |  | |  | `cast(txt.text40 as mrpgroupname preserving type)` |  |  |
| `_MRPGroup` | | ✓ | | | | |
| `_MRPPlant` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MRPGroup` | `I_MRPGroup` | [1..1] |
| `_MRPPlant` | `I_Plant` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPMRPGROUPTXT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'MRPGroup'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'MRP Group - Text'

define view I_MRPGroupText
  as select from t438x as txt

  association [1..1] to I_MRPGroup as _MRPGroup on  $projection.MRPGroup = _MRPGroup.MRPGroup 
                                                and $projection.MRPPlant = _MRPGroup.MRPPlant
  association [1..1] to I_Plant    as _MRPPlant on  $projection.MRPPlant = _MRPPlant.Plant
  association [0..1] to I_Language as _Language on  $projection.Language = _Language.Language

{
      @ObjectModel.text.element: ['MRPGroupName']
  key txt.disgr as MRPGroup,
      @ObjectModel.foreignKey.association: '_MRPPlant'
  key txt.werks as MRPPlant,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key txt.spras as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(txt.text40 as mrpgroupname preserving type) as MRPGroupName,

      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _MRPGroup,
      _MRPPlant,
      _Language
};
```
