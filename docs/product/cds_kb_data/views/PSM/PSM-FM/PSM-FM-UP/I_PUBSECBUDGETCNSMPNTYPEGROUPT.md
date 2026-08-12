---
name: I_PUBSECBUDGETCNSMPNTYPEGROUPT
description: "Pubsecbudgetcnsmpntypegroupt"
app_component: PSM-FM-UP
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_PUBSECBUDGETCNSMPNTYPEGROUPT

**Pubsecbudgetcnsmpntypegroupt**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetCnsmpnTypeGroup` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 2) as abap.char( 2 ) ) as psm_bdgt_cnsmpn_type_grp )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PubSecBudgetCnsmpnTypeGrpText` |  | |  | `cast ( dd07t.ddtext as psm_bdgt_cnsmpn_type_grp_text preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_PubSecBudgetCnsmpnTypeGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDCNTGPT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Consumption Type Group - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'PubSecBudgetCnsmpnTypeGroup',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT , #EXTRACTION_DATA_SOURCE ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
define view I_PubSecBudgetCnsmpnTypeGroupT 
as select from dd07t
  association        to parent I_PubSecBudgetCnsmpnTypeGroup as _PubSecBudgetCnsmpnTypeGroup on $projection.PubSecBudgetCnsmpnTypeGroup = _PubSecBudgetCnsmpnTypeGroup.PubSecBudgetCnsmpnTypeGroup
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{ 
      @ObjectModel.foreignKey.association: '_PubSecBudgetCnsmpnTypeGroup'
      @ObjectModel.text.element: ['PubSecBudgetCnsmpnTypeGrpText']
  key cast( cast ( substring( dd07t.domvalue_l, 1,  2)
                   as abap.char( 2 ) ) as psm_bdgt_cnsmpn_type_grp )      as PubSecBudgetCnsmpnTypeGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast ( dd07t.ddtext as psm_bdgt_cnsmpn_type_grp_text preserving type ) as PubSecBudgetCnsmpnTypeGrpText,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,

      _PubSecBudgetCnsmpnTypeGroup,
      _Language

}
where
      domname    =  'PSM_BDGT_CNSMPN_TYPE_GRP'
  and domvalue_l <> ''
  and as4local   =  'A'
```
