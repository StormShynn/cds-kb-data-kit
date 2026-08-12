---
name: I_ATPCHECKINGGROUPTEXT
description: "Atpcheckinggrouptext"
app_component: CA-ATP-2CL
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
  - CA
  - CA-ATP
  - interface-view
  - text-view
  - text
  - component:CA-ATP-2CL
  - lob:Cross-Application Components
---
# I_ATPCHECKINGGROUPTEXT

**Atpcheckinggrouptext**

| Property | Value |
|---|---|
| App Component | `CA-ATP-2CL` |
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
| `ATPCheckingGroup` | ✓ | |  | `mtvfp` | `CHAR(2)` | Checking Group for Availability Check |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ATPCheckingGroupDescription` |  | |  | `bezei` | `CHAR(20)` | Description |
| `_ATPCheckingGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ATPCheckingGroup` | `I_ATPCheckingGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'ATP Checking Group - Text'

@ObjectModel:
{
  dataCategory: #TEXT,
  representativeKey: 'ATPCheckingGroup',
  usageType.dataClass: #CUSTOMIZING,
  usageType.serviceQuality: #A,
  usageType.sizeCategory: #S,
  modelingPattern:           #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities:  [  #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #LANGUAGE_DEPENDENT_TEXT,
                             #SEARCHABLE_ENTITY   ]
}

@VDM:
{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations:true
@Search.searchable: true

define view entity I_ATPCheckingGroupText
  as select from tmvft
  association [0..1] to I_ATPCheckingGroup as _ATPCheckingGroup on $projection.ATPCheckingGroup = _ATPCheckingGroup.ATPCheckingGroup
  association [0..1] to I_Language         as _Language         on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_ATPCheckingGroup'
  key mtvfp as ATPCheckingGroup,

      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key spras as Language,

      @Semantics.text
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      bezei as ATPCheckingGroupDescription,

      _ATPCheckingGroup,
      _Language

}
```
