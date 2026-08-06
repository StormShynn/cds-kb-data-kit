---
name: I_RECONDITIONTYPEBYCNDNGROUP
description: Reconditiontypebycndngroup
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
  - pricing-condition
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONDITIONTYPEBYCNDNGROUP

**Reconditiontypebycndngroup**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `REConditionGroup` | `condgroup` |
| key `REConditionType` | `condtype` |
| `REConditionTypeDisplayOrder` | `displayorder` |
| `REExtConditionPurpose` | `condpurposeext` |
| `REAdjustmentRule` | `adjmrule` |
| `REConditionTypeIsAutoDefault` | `typeautodefault` |
| `REConditionTypeIsLocked` | `cdtypelocked` |
| `REConditionTypeIsHidden` | `cdtypehide` |
| `REIsExclForNewAssgmt` | `cuexcludeassign` |
| `_REConditionType` | *Association* |
| `_REConditionGroup` | *Association* |
| `_REAdjustmentRule` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REConditionType` | `I_REConditionType` | [0..1] |
| `_REConditionGroup` | `I_REConditionGroup` | [0..1] |
| `_REAdjustmentRule` | `I_REAdjustmentRule` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IRECNDNGROUPREL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true

@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL
@Analytics.dataExtraction.enabled: true
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.representativeKey: 'REConditionGroup'
@ObjectModel.semanticKey: ['REConditionGroup']
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'RE Condition Type per Condition Group'
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@ObjectModel.sapObjectNodeType.name: 'REConditionTypeByCndnGroup'         
                                        
                                        
define view I_REConditionTypeByCndnGroup 
 as select from tivcdcondrel 
 association [0..1] to I_REConditionType as _REConditionType on $projection.REConditionType = _REConditionType.REConditionType
 association [0..1] to I_REConditionGroup  as _REConditionGroup on $projection.REConditionGroup = _REConditionGroup.REConditionGroup
 association [0..1] to I_REAdjustmentRule  as _REAdjustmentRule on $projection.REAdjustmentRule = _REAdjustmentRule.REAdjustmentRule
 {
     @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
//   @ObjectModel.foreignKey.association: '_REConditionGroup' 
  key condgroup as REConditionGroup,
  @Search.defaultSearchElement: true
   @Search.fuzzinessThreshold: 0.8
   @Search.ranking: #HIGH
  @ObjectModel.foreignKey.association: '_REConditionType' 
  key condtype  as REConditionType,
  displayorder as REConditionTypeDisplayOrder, 
  condpurposeext as REExtConditionPurpose,
    @ObjectModel.foreignKey.association: '_REAdjustmentRule' 
  adjmrule as REAdjustmentRule,
  typeautodefault as REConditionTypeIsAutoDefault,
  cdtypelocked as REConditionTypeIsLocked, 
  cdtypehide as REConditionTypeIsHidden, 
  cuexcludeassign as REIsExclForNewAssgmt,
  
  _REConditionType,
  _REConditionGroup,
  _REAdjustmentRule
}
```
