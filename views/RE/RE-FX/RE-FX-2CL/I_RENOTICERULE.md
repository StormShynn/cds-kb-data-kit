---
name: I_RENOTICERULE
description: Renoticerule
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RENOTICERULE

**Renoticerule**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RENoticeRule` | ✓ | |  | `ntrule` |  |  |
| `RENoticeRuleType` |  | |  | `ntruletype` |  |  |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |  |  |
| `_Text` | | ✓ | | | | |
| `_NoticeRuleType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_RENoticeRuleText` | [0..*] |
| `_NoticeRuleType` | `I_RENoticeRuleType` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRENTRULE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Notice Rules'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.representativeKey: 'RENoticeRule'
@ObjectModel.semanticKey: ['RENoticeRule'] 
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]


define view I_RENoticeRule as select from tivtmntrule 
      association [0..*] to I_RENoticeRuleText as _Text             on $projection.RENoticeRule     = _Text.RENoticeRule
      association [0..1] to I_RENoticeRuleType as _NoticeRuleType   on $projection.RENoticeRuleType = _NoticeRuleType.RENoticeRuleType
{        
          @ObjectModel.text.association: '_Text'
    key   ntrule                        as RENoticeRule,
          @ObjectModel.foreignKey.association:  '_NoticeRuleType'
          ntruletype                    as RENoticeRuleType,
          cuexcludeassign               as REIsExclForNewAssgmt,

          
          _NoticeRuleType,
          _Text
     
          
}
```
