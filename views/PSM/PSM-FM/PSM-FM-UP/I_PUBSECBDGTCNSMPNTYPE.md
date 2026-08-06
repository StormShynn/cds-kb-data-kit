---
name: I_PUBSECBDGTCNSMPNTYPE
description: Pubsecbdgtcnsmpntype
app_component: PSM-FM-UP
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PSM
  - PSM-FM
  - PSM-FM-UP
  - interface-view
  - component:PSM-FM-UP
  - lob:Other
---
# I_PUBSECBDGTCNSMPNTYPE

**Pubsecbdgtcnsmpntype**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PubSecBudgetCnsmpnType` | `bdgt_cnsmpn_type` |
| `PubSecBdgtCnsmpnTypeIsBdgtRlvt` | `bdgt_relevant_for_cnsty` |
| `PubSecBudgetCnsmpnTypeGroup` | `bdgt_cnsmpn_type_grp` |
| `_Text` | *Association* |
| `_PubSecBudgetCnsmpnTypeGroup` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PubSecBdgtCnsmpnTypeText` | [0..*] |
| `_PubSecBudgetCnsmpnTypeGroup` | `I_PubSecBudgetCnsmpnTypeGroup` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDCNSTY'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Consumption Type'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     representativeKey: 'PubSecBudgetCnsmpnType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #ANALYTICAL_DIMENSION ]
}
@Search.searchable: true
define view I_PubSecBdgtCnsmpnType 
  as select from psm_d_bdgtcnsty 
  association [0..*] to I_PubSecBdgtCnsmpnTypeText as _Text on $projection.PubSecBudgetCnsmpnType = _Text.PubSecBudgetCnsmpnType
   association [0..1] to I_PubSecBudgetCnsmpnTypeGroup as _PubSecBudgetCnsmpnTypeGroup on $projection.PubSecBudgetCnsmpnTypeGroup = _PubSecBudgetCnsmpnTypeGroup.PubSecBudgetCnsmpnTypeGroup
{
  @ObjectModel.text.association: '_Text'
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  key bdgt_cnsmpn_type as PubSecBudgetCnsmpnType,
      bdgt_relevant_for_cnsty as PubSecBdgtCnsmpnTypeIsBdgtRlvt,
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
      bdgt_cnsmpn_type_grp as PubSecBudgetCnsmpnTypeGroup,
      
  _Text,
  _PubSecBudgetCnsmpnTypeGroup
    
}
```
