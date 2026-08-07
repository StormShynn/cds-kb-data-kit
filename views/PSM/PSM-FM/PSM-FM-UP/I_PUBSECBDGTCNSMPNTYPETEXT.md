---
name: I_PUBSECBDGTCNSMPNTYPETEXT
description: Pubsecbdgtcnsmpntypetext
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
  - text-view
  - text
  - component:PSM-FM-UP
  - lob:Other
---
# I_PUBSECBDGTCNSMPNTYPETEXT

**Pubsecbdgtcnsmpntypetext**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetCnsmpnType` | ✓ | |  | `bdgt_cnsmpn_type` |  |  |
| `Language` | ✓ | |  | `language` |  |  |
| `PubSecBudgetCnsmpnTypeText` |  | |  | `bdgt_cnsmpn_type_text` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDCNSTYT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Consumption Type - Text'

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'PubSecBudgetCnsmpnType',
     usageType: {
         dataClass: #CUSTOMIZING,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}

define view I_PubSecBdgtCnsmpnTypeText 
  as select from psm_d_bdgtcnstyt 
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key bdgt_cnsmpn_type  as PubSecBudgetCnsmpnType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key language    as Language,
      @Semantics.text: true
      bdgt_cnsmpn_type_text as PubSecBudgetCnsmpnTypeText,
      _Language    
}
```
