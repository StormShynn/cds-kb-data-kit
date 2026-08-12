---
name: I_COLLECTIONPRIORITYTEXT
description: "Collectionprioritytext"
app_component: FIN-FSCM-COL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_COLLECTIONPRIORITYTEXT

**Collectionprioritytext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectionPriority` | ✓ | |  | `cast(priority as udm_coll_priority preserving type)` |  |  |
| `Language` | ✓ | |  | `lang` |  |  |
| `CollectionPriorityName` |  | |  | `priority_text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Collection Priority - Text'
@Analytics: { dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'ICOLLPRIOT'
@AbapCatalog.preserveKey:true
//@AbapCatalog.compiler.compareFilter:true 
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.dataCategory: #TEXT
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'CollectionPriority'
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT,
                                     #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CollectionPriorityText
  as select from udm_coll_priot
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key cast(priority as udm_coll_priority preserving type) as CollectionPriority,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key lang                                                as Language,
      @Semantics.text: true
      priority_text                                       as CollectionPriorityName,
      _Language
};
```
