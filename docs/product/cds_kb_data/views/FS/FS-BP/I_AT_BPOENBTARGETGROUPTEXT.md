---
name: I_AT_BPOENBTARGETGROUPTEXT
description: "AT Bpoenbtargetgrouptext"
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FS
  - FS-BP
  - interface-view
  - text-view
  - text
  - component:FS-BP
  - lob:Other
---
# I_AT_BPOENBTARGETGROUPTEXT

**AT Bpoenbtargetgrouptext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(td05t_at_fs.spras as spras preserving type)` |  |  |
| `BPOeNBTargetGroup` | ✓ | |  | `cast(td05t_at_fs.szg_at as vvszg_at_fs preserving type)` |  |  |
| `BPOeNBTargetGroupDescription` |  | |  | `xlbez` |  |  |
| `_AT_BPOeNBTargetGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AT_BPOeNBTargetGroup` | `I_AT_BPOeNBTargetGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group According to OeNB - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BPOeNBTargetGroup',
                usageType : { dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [  #LANGUAGE_DEPENDENT_TEXT,
                                          #CDS_MODELING_DATA_SOURCE,
                                          #CDS_MODELING_ASSOCIATION_TARGET,
                                          #SQL_DATA_SOURCE,
                                          #EXTRACTION_DATA_SOURCE,
                                          #SEARCHABLE_ENTITY  ]
              }
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@Search.searchable: true

define view entity I_AT_BPOeNBTargetGroupText
  as select from td05t_at_fs 
  association [0..1] to I_AT_BPOeNBTargetGroup as _AT_BPOeNBTargetGroup on $projection.BPOeNBTargetGroup = _AT_BPOeNBTargetGroup.BPOeNBTargetGroup
  association [0..1] to I_Language             as _Language             on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(td05t_at_fs.spras as spras preserving type)              as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_AT_BPOeNBTargetGroup'
  key cast(td05t_at_fs.szg_at as vvszg_at_fs preserving type) as BPOeNBTargetGroup,

      @Semantics.text: true
      td05t_at_fs.xlbez                                        as BPOeNBTargetGroupDescription,

      _AT_BPOeNBTargetGroup,
      _Language
}
```
