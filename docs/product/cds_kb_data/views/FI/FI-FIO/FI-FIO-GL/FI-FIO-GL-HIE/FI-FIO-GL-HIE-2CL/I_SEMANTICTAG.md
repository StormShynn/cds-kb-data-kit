---
name: I_SEMANTICTAG
description: "Semantictag"
app_component: FI-FIO-GL-HIE-2CL
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
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_SEMANTICTAG

**Semantictag**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
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
| `SemanticTag` | ✓ | |  | `fins_sem_tag` |  |  |
| `ParentSemanticTag` |  | |  | `fins_sem_tag_parent` |  |  |
| `SemanticTagGroup` |  | |  | `fins_sem_tag_group` |  |  |
| `_Text` | | ✓ | | | | |
| `_ParentSemanticTag` | | ✓ | | | | |
| `_SemanticTagGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SemanticTagText` | [0..*] |
| `_ParentSemanticTag` | `I_SemanticTag` | [0..1] |
| `_SemanticTagGroup` | `I_SemanticTagGroup` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Semantic Tag'
@AbapCatalog.sqlViewName: 'IFISEMTAG'
@AbapCatalog.preserveKey:true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {dataCategory: #DIMENSION, dataExtraction.enabled: true}
@ObjectModel.representativeKey: 'SemanticTag'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.sapObjectNodeType.name: 'SemanticTag'

define view I_SemanticTag
  as select from finsc_sem_tag

  association [0..*] to I_SemanticTagText  as _Text              on $projection.SemanticTag = _Text.SemanticTag
  association [0..1] to I_SemanticTag      as _ParentSemanticTag on $projection.ParentSemanticTag = _ParentSemanticTag.SemanticTag
  association [0..1] to I_SemanticTagGroup as _SemanticTagGroup  on $projection.SemanticTagGroup = _SemanticTagGroup.SemanticTagGroup

{
      @ObjectModel.text.association: '_Text'
  key fins_sem_tag        as SemanticTag,
      @ObjectModel.foreignKey.association: '_ParentSemanticTag'
      fins_sem_tag_parent as ParentSemanticTag,
      @ObjectModel.foreignKey.association: '_SemanticTagGroup'
      fins_sem_tag_group  as SemanticTagGroup,

      _Text,
      _SemanticTagGroup,
      _ParentSemanticTag

}
```
