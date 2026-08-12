---
name: I_CN_TAXINVCDEDUCTIONTYPET
description: "CN Taxinvcdeductiontypet"
app_component: FI-LOC-TIM-CN
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
  - FI
  - FI-LOC
  - FI-LOC-TIM
  - interface-view
  - tax
  - component:FI-LOC-TIM-CN
  - lob:Finance
---
# I_CN_TAXINVCDEDUCTIONTYPET

**CN Taxinvcdeductiontypet**

| Property | Value |
|---|---|
| App Component | `FI-LOC-TIM-CN` |
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
| `CN_TaxInvcDeductionType` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `CN_TaxInvcDeductionTypeTxt` |  | |  |  |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: { sqlViewName: 'ICNTXIDEDUT', compiler.compareFilter: true }
@VDM: { viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'China Tax Invoice Deduction Type - Text'
@ObjectModel: {
  dataCategory: #TEXT,
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #MASTER
  },
  representativeKey: 'CN_TaxInvcDeductionType'
}
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #EXTRACTION_DATA_SOURCE ]
@Analytics.dataExtraction.enabled: true
@Search.searchable: true  
@Metadata.ignorePropagatedAnnotations:true

define view I_CN_TaxInvcDeductionTypeT
  as select from P_CN_TaxInvcDeductionTypeT as dedt

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key dedt.CN_TaxInvcDeductionType,

      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key Language,
      _Language,
      @Search.defaultSearchElement: true
      @Semantics.text: true
      dedt.CN_TaxInvcDeductionTypeTxt
}
```
