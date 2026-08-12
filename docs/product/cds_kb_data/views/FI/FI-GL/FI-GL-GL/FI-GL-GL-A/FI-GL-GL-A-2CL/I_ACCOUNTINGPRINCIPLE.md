---
name: I_ACCOUNTINGPRINCIPLE
description: "Accountingprinciple"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_ACCOUNTINGPRINCIPLE

**Accountingprinciple**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AccountingPrinciple` | ✓ | |  | `acc_principle` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AccountingPrincipleText` | [0..*] |

## Source Code

```abap
@AbapCatalog: {sqlViewName: 'IACCPRINCIPLE', preserveKey: true}
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Accounting Principle'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AccountingPrinciple',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AccountingPrinciple
  as select from tacc_principle
  association [0..*] to I_AccountingPrincipleText as _Text on $projection.AccountingPrinciple = _Text.AccountingPrinciple
{
      @ObjectModel.text.association: '_Text'
      @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
  key acc_principle as AccountingPrinciple,
      _Text
}
```
