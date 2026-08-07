---
name: I_RECONDITIONGROUPTEXT
description: Reconditiongrouptext
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - text-view
  - pricing-condition
  - text
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONGROUPTEXT

**Reconditiongrouptext**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |
| `REConditionGroup` | ✓ | |  | `condgroup` |
| `REConditionGroupName` |  | |  | `xmcondgroup` |
| `_Language` | | ✓ | | |
| `_REConditionGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECNDNGROUPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Condition Group - Text'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.dataCategory:#TEXT
@ObjectModel.representativeKey: 'REConditionGroup'
@ObjectModel.semanticKey: ['REConditionGroup']
@Search.searchable: true
@VDM.viewType:#BASIC

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]

define view I_REConditionGroupText 
    as select from tivcdcondgroupt
    association  to parent I_REConditionGroup as _REConditionGroup      on $projection.REConditionGroup = _REConditionGroup.REConditionGroup
    association [0..1] to I_Language            as _Language            on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
            
  key spras            as Language,
      @ObjectModel.foreignKey.association: '_REConditionGroup'
      @ObjectModel.text.element: ['REConditionGroupName']
      key condgroup as REConditionGroup,
      @Semantics.text: true
      @Search.fuzzinessThreshold: 0.8
      @Search.defaultSearchElement: true
      xmcondgroup as REConditionGroupName,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _REConditionGroup,
      _Language
}
```
