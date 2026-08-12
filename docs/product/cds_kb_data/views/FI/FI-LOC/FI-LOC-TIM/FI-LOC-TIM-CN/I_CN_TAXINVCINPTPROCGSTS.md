---
name: I_CN_TAXINVCINPTPROCGSTS
description: "CN Taxinvcinptprocgsts"
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
# I_CN_TAXINVCINPTPROCGSTS

**CN Taxinvcinptprocgsts**

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
| `CN_TaxInvcInptProcgSts` | ✓ | |  | `cast(dd07v.domvalue_l as ficntaxinvc_input_status)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `Language` |  | |  | `ddlanguage` |  |  |
| `DocumentStatusDesc` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'ICNTXIIPTSTS'
@AbapCatalog.compiler.compareFilter: true
@Search.searchable
@ObjectModel: {
  representativeKey: 'CN_TaxInvcInptProcgSts',
  dataCategory: #VALUE_HELP,
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@ObjectModel.sapObjectNodeType.name: 'CN_ValueAddedTaxInvcProcgSts'
@Analytics: { 
  dataCategory: #DIMENSION,
  dataExtraction.enabled: true
}
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]
@Metadata.ignorePropagatedAnnotations:true                                    
@VDM: { viewType: #BASIC }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@EndUserText.label: 'CN Tax Invoice Incoming Processing Sts'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CN_TaxInvcInptProcgSts
  as select from dd07v
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
      @ObjectModel.text.element: 'DocumentStatusDesc'
      @Consumption.labelElement: 'DocumentStatusDesc'
  key cast(dd07v.domvalue_l as ficntaxinvc_input_status) as CN_TaxInvcInptProcgSts,
      
      @Consumption.hidden: true
      @Analytics.hidden: true
      @Search.ranking: #LOW
      dd07v.domvalue_l                                   as DomainValue,

      @Semantics.language: true
      ddlanguage                                         as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.75
      dd07v.ddtext                                       as DocumentStatusDesc,

      _Language
}
where
      dd07v.domname    = 'FICNTAXINVC_INPUT_STATUS'
  and dd07v.ddlanguage = $session.system_language
```
