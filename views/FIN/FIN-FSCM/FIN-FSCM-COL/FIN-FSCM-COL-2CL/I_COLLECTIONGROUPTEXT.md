---
name: I_COLLECTIONGROUPTEXT
description: "Collectiongrouptext"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-COL
  - interface-view
  - text-view
  - text
  - collection
  - component:FIN-FSCM-COL-2CL
  - lob:Other
---
# I_COLLECTIONGROUPTEXT

**Collectiongrouptext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionGroup` | ✓ | |  | `cast(coll_group as udm_coll_group preserving type)` |  |  |
| `Language` | ✓ | |  | `lang` |  |  |
| `CollectionGroupName` |  | |  | `coll_group_text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Collection Group - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLGRPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CollectionGroup'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CollectionGroupText
  as select from udm_coll_grpt
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(coll_group as udm_coll_group preserving type) as CollectionGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key lang                                               as Language,
      @Semantics.text: true
      coll_group_text                                    as CollectionGroupName,
      _Language
};
```
