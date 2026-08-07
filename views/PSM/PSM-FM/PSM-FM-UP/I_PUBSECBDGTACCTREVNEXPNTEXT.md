---
name: I_PUBSECBDGTACCTREVNEXPNTEXT
description: Pubsecbdgtacctrevnexpntext
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
# I_PUBSECBDGTACCTREVNEXPNTEXT

**Pubsecbdgtacctrevnexpntext**

| Property | Value |
|---|---|
| App Component | `PSM-FM-UP` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `PubSecBdgtAcctRevnExpnCode` | ✓ | |  | `cast( cast ( substring( dd07t.domvalue_l, 1, 1 ) as abap.char( 1 ) ) as psm_bdgt_acct_rev_or_exp preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PubSecBdgtAcctRevnExpnCodeText` |  | |  | `cast ( dd07t.ddtext as psm_bdgt_acct_rev_or_exp_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PubSecBdgtAcctRevnExpnCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPSMS4CBDREEXT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Revenue and Expense Code - Text'

@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
     dataCategory: #TEXT,
     representativeKey: 'PubSecBdgtAcctRevnExpnCode',
     usageType: {
         dataClass: #META,
         serviceQuality: #A,
         sizeCategory: #S
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]     
}
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_PubSecBdgtAcctRevnExpnText
  as select from dd07t
  association        to parent I_PubSecBdgtAcctRevnExpnCode as _PubSecBdgtAcctRevnExpnCode on $projection.PubSecBdgtAcctRevnExpnCode = _PubSecBdgtAcctRevnExpnCode.PubSecBdgtAcctRevnExpnCode
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                              as Language,
      @ObjectModel.foreignKey.association: '_PubSecBdgtAcctRevnExpnCode'
      @ObjectModel.text.element: ['PubSecBdgtAcctRevnExpnCodeText']
  key cast( cast ( substring( dd07t.domvalue_l, 1, 1 )
                   as abap.char( 1 ) ) as psm_bdgt_acct_rev_or_exp preserving type ) as PubSecBdgtAcctRevnExpnCode,
      @Consumption.hidden: true
      dd07t.domvalue_l                                                               as DomainValue,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      cast ( dd07t.ddtext as psm_bdgt_acct_rev_or_exp_text preserving type )         as PubSecBdgtAcctRevnExpnCodeText,

      _PubSecBdgtAcctRevnExpnCode,
      _Language

}
where
      domname  = 'PSM_BDGT_ACCT_REV_OR_EXP'
  and as4local = 'A'
```
