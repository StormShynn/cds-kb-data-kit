---
name: I_TRSYCTPTYLMTUTILZNBASETEXT
description: Trsyctptylmtutilznbasetext
app_component: FIN-FSCM-TRM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-TRM-CR-2CL
  - lob:Other
---
# I_TRSYCTPTYLMTUTILZNBASETEXT

**Trsyctptylmtutilznbasetext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `LimitUtilizationBase` | ✓ | |  | `sli` |  |  |
| `LimitUtilizationBaseName` |  | |  | `cast( text as ftr_cra_lmt_utilzn_base_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog: { sqlViewName: 'ITRSYCTPTYLUBT',
                compiler.compareFilter: true,
                preserveKey: true,
                buffering.status: #SWITCHED_OFF }

@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel: { dataCategory: #TEXT,
                representativeKey: 'LimitUtilizationBase',
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #D,
                usageType.sizeCategory: #S,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET  ],
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT }

@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Treasury Counterparty Limit Utilization Base - Text'
define view I_TrsyCtptyLmtUtilznBaseText
  as select from atlslit
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
  key spras                                                        as Language,
  key sli                                                          as LimitUtilizationBase,
      @Semantics.text: true
      cast( text as ftr_cra_lmt_utilzn_base_name preserving type ) as LimitUtilizationBaseName,
      _Language
}
```
