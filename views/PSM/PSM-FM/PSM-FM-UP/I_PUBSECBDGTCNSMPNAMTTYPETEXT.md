---
name: I_PUBSECBDGTCNSMPNAMTTYPETEXT
description: Pubsecbdgtcnsmpnamttypetext
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
# I_PUBSECBDGTCNSMPNAMTTYPETEXT

**Pubsecbdgtcnsmpnamttypetext**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PubSecBudgetCnsmpnAmtType` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 4 ) as abap.char( 4 ) ) as psm_bdgt_cnsmpn_amount_type )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PubSecBdgtCnsmpnAmtTypeText` |  | |  | `cast ( dd07t.ddtext as psm_bdgt_cnsmpn_amt_type_text preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_PubSecBdgtCnsmpnAmtType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDCNATYT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Budget Consumption Amount Type - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'PubSecBudgetCnsmpnAmtType',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_PubSecBdgtCnsmpnAmtTypeText
  as select from dd07t
  association        to parent I_PubSecBdgtCnsmpnAmtType as _PubSecBdgtCnsmpnAmtType on $projection.PubSecBudgetCnsmpnAmtType = _PubSecBdgtCnsmpnAmtType.PubSecBudgetCnsmpnAmtType
  association [0..1] to I_Language                       as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PubSecBdgtCnsmpnAmtType'
      @ObjectModel.text.element: ['PubSecBdgtCnsmpnAmtTypeText']
  key cast( cast ( substring( dd07t.domvalue_l, 1, 4 )
                   as abap.char( 4 ) ) as psm_bdgt_cnsmpn_amount_type )      as PubSecBudgetCnsmpnAmtType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                      as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast ( dd07t.ddtext as psm_bdgt_cnsmpn_amt_type_text preserving type ) as PubSecBdgtCnsmpnAmtTypeText,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,

      _PubSecBdgtCnsmpnAmtType,
      _Language

}
where
      domname    =  'PSM_BDGT_CNSMPN_AMOUNT_TYPE'
  and domvalue_l <> ''
  and as4local   =  'A'
```
