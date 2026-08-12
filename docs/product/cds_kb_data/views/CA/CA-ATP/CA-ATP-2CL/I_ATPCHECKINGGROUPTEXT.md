---
name: I_ATPCHECKINGGROUPTEXT
description: "Atpcheckinggrouptext"
app_component: CA-ATP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
