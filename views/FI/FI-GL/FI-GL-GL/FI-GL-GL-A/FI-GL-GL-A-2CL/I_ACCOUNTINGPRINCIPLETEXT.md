---
name: I_ACCOUNTINGPRINCIPLETEXT
description: Accountingprincipletext
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCOUNTINGPRINCIPLETEXT

**Accountingprincipletext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( langu as spras)` |  |  |
| `AccountingPrinciple` | ✓ | |  | `acc_principle` |  |  |
| `AccountingPrincipleName` |  | |  | `acc_princtxt` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IACCPRINCIPLET', preserveKey: true}
@EndUserText.label: 'Accounting Principle - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AccountingPrinciple',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AccountingPrincipleText
  as select from tacc_principlet
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language
  key cast( langu as spras)         as Language,
  key tacc_principlet.acc_principle as AccountingPrinciple,
      @Semantics.text: true
      @EndUserText.label: 'Name of Accounting Principle'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      acc_princtxt                  as AccountingPrincipleName,

      _Language
}
```
