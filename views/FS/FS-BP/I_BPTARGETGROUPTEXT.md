---
name: I_BPTARGETGROUPTEXT
description: Bptargetgrouptext
app_component: FS-BP
software_component: SAP_BASIS
release_state: released
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
# I_BPTARGETGROUPTEXT

**Bptargetgrouptext**

| Property | Value |
|---|---|
| App Component | `FS-BP` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(tp13t.langu as langu preserving type)` |
| key `BusinessPartnerTargetGroup` | `cast(tp13t.group_d as bp_group_d preserving type)` |
| `BusinessPartnerTargetGroupDesc` | `tp13t.group_d_t` |
| `_BusinessPartnerTargetGroup` | *Association* |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartnerTargetGroup` | `I_BusinessPartnerTargetGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Target Group for Business Partner - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'BusinessPartnerTargetGroup',
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

define view entity I_BPTargetGroupText
  as select from tp13t
  association [0..1] to I_BusinessPartnerTargetGroup as _BusinessPartnerTargetGroup on $projection.BusinessPartnerTargetGroup = _BusinessPartnerTargetGroup.BusinessPartnerTargetGroup
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast(tp13t.langu as langu preserving type)        as Language,
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      @ObjectModel.foreignKey.association: '_BusinessPartnerTargetGroup'
  key cast(tp13t.group_d as bp_group_d preserving type) as BusinessPartnerTargetGroup,

      @Semantics.text: true
      tp13t.group_d_t                                   as BusinessPartnerTargetGroupDesc,

      _BusinessPartnerTargetGroup,
      _Language
}
```
