---
name: I_FINANCIALTRANSACTIONNPVTYPET
description: "Financialtransactionnpvtypet"
app_component: FIN-FSCM-TRM-MR-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
