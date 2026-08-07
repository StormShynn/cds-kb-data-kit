---
name: I_BR_NFADREMICMSREDUCNRSNTEXT
description: Brazil ICMS Ad Rem Reducn Reason - Text
app_component: FI-LOC-LO-BR
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNRSNTEXT')/$value
semantic_en: Brazil ICMS Ad Rem Reducn Reason - Text
semantic_vi: Brazil ICMS Ad Rem Reducn Reason - Text — CDS view giao diện dựa trên dd07t.
keywords:
  - brazil
  - icms
  - rem
  - reducn
  - reason
  - text
  - language
  - reduction
  - desc
tags:
  - FI
  - bo:salesorder
  - component:FI-LOC-LO-BR
  - FI-LOC
  - FI-LOC-LO
  - FI-LOC-LO-BR
  - interface-view
  - lob:finance
  - lob:logistics general
---
# I_BR_NFADREMICMSREDUCNRSNTEXT

**Brazil ICMS Ad Rem Reducn Reason - Text**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNRSNTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `BR_NFAdRemICMSReductionReason` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as j_1bnf_motredadrem preserving type )` | `CHAR(1)` | Reason for ad rem reduction |
| `BR_NFAdRemICMSReducnReasonDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_BR_NFAdRemICMSReducnReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_NFAdRemICMSReducnReason` | `I_BR_NFAdRemICMSReducnReason` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNRSNTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BR_NFADREMICMSREDUCNRSNTEXT')/$value)*

```abap
@EndUserText.label: 'Brazil ICMS Ad Rem Reducn Reason - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRADREMICMSREDT'
@ObjectModel.representativeKey: 'BR_NFAdRemICMSReductionReason'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
define view I_BR_NFAdRemICMSReducnRsnText as select from dd07t
  association [1..1] to I_BR_NFAdRemICMSReducnReason as _BR_NFAdRemICMSReducnReason on $projection.BR_NFAdRemICMSReductionReason = _BR_NFAdRemICMSReducnReason.BR_NFAdRemICMSReductionReason
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_NFAdRemICMSReducnReason'
  key cast( substring(domvalue_l, 1, 1) as j_1bnf_motredadrem preserving type ) as BR_NFAdRemICMSReductionReason, 
  @Semantics.text
  ddtext as BR_NFAdRemICMSReducnReasonDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_NFAdRemICMSReducnReason,
  _Language  
}
where domname  = 'J_1BNF_MOTREDADREM' 
  and as4local = 'A'
```
