---
name: I_FINANCIALTRANSACTIONNPVTYPE
description: Financialtransactionnpvtype
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
# I_FINANCIALTRANSACTIONNPVTYPE

**Financialtransactionnpvtype**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-MR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialTransactionNPVType` | ✓ | |  | `okuart` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.technicalName: 'IFINTRNPVTYP'
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName:#LOCAL 
@EndUserText.label: 'Fin Transaction Net Present Value Type'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType:{
  serviceQuality: #B,
  sizeCategory: #S,
  dataClass: #CUSTOMIZING
}
@ObjectModel.sapObjectNodeType.name: 'FinancialTransactionNPVType'
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'FinancialTransactionNPVType' }
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE  ]
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER
@VDM:{ viewType: #BASIC }
@Search.searchable: true
define root view entity I_FinancialTransactionNPVType
  as select from atvok
  composition [0..*] of I_FinancialTransactionNPVTypeT as _Text
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key okuart as FinancialTransactionNPVType,
      _Text
}
```
