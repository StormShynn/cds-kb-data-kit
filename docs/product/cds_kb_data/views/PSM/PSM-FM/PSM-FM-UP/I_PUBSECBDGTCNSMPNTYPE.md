---
name: I_PUBSECBDGTCNSMPNTYPE
description: "Pubsecbdgtcnsmpntype"
app_component: PSM-FM-UP
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetCnsmpnType` | ✓ | |  | `bdgt_cnsmpn_type` |  |  |
| `PubSecBdgtCnsmpnTypeIsBdgtRlvt` |  | |  | `bdgt_relevant_for_cnsty` |  |  |
| `PubSecBudgetCnsmpnTypeGroup` |  | |  | `bdgt_cnsmpn_type_grp` |  |  |
| `_Text` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnTypeGroup` | | ✓ | | | | |

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
