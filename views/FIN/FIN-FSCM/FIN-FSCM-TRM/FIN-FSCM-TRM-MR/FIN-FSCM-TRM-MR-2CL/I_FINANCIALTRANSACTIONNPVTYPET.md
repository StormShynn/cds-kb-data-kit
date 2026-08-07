---
name: I_FINANCIALTRANSACTIONNPVTYPET
description: Financialtransactionnpvtypet
app_component: FIN-FSCM-TRM-MR-2CL
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
  - component:FIN-FSCM-TRM-MR-2CL
  - lob:Other
---
# I_FINANCIALTRANSACTIONNPVTYPET

**Financialtransactionnpvtypet**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `FinancialTransactionNPVType` | ✓ | |  | `okuart` |  |  |
| `FinancialTransactionNPVTypeTxt` |  | |  | `xtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_NPVType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IFINTRNPVTYPT'
@EndUserText.label: 'Fin Trans Net Present Value Type - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel:{ dataCategory: #TEXT,
               representativeKey: 'FinancialTransactionNPVType',
               usageType:{ serviceQuality: #B,
                           dataClass: #CUSTOMIZING,
                           sizeCategory: #S } }
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET  ]                          
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM:{ lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC }
@Search.searchable: true
define view entity I_FinancialTransactionNPVTypeT
  as select from atvokt
  association        to parent I_FinancialTransactionNPVType as _NPVType  on $projection.FinancialTransactionNPVType = _NPVType.FinancialTransactionNPVType
  association [1..1] to I_Language                           as _Language on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras  as Language,
      @ObjectModel.text.element:['FinancialTransactionNPVTypeTxt']
  key okuart as FinancialTransactionNPVType,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      xtext  as FinancialTransactionNPVTypeTxt,
      _NPVType,
      _Language
}
```
