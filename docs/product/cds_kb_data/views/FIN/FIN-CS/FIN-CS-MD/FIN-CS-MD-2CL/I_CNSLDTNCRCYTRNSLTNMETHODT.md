---
name: I_CNSLDTNCRCYTRNSLTNMETHODT
description: "Cnsldtncrcytrnsltnmethodt"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNCRCYTRNSLTNMETHODT

**Cnsldtncrcytrnsltnmethodt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
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
| `Language` | ✓ | | `_MethodText` | `Language` |  |  |
| `CnsldtnCrcyTranslationMethod` | ✓ | |  | `cast ( _MethodText.ConsolidationMethod as fincs_crcy_trnsltn_method preserving type )` |  |  |
| `CnsldtnCrcyTrnsltnMethodText` |  | |  | `cast ( _MethodText.ConsolidationMethodText as fincs_crcy_trnsltn_method_text preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CnsldtnCrcyTrnsltnMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_CnsldtnCrcyTrnsltnMethod` | `I_CnsldtnCrcyTrnsltnMethod` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCRCYTRANSMTT',
  compiler.compareFilter: true,
  preserveKey: true
  }
@Analytics:{
  dataExtraction.enabled: true
  }
@AccessControl.authorizationCheck: #MANDATORY
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #S},
  representativeKey: 'CnsldtnCrcyTranslationMethod',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ]
  }
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Currency Translation Method - Txt'

define view I_CnsldtnCrcyTrnsltnMethodT
  as select from I_CnsldtnMethodText        as _MethodText

    inner join   I_CnsldtnCrcyTrnsltnMethod as _Method on _Method.CnsldtnCrcyTranslationMethod = _MethodText.ConsolidationMethod

  association [1..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnCrcyTrnsltnMethod as _CnsldtnCrcyTrnsltnMethod on $projection.CnsldtnCrcyTranslationMethod = _CnsldtnCrcyTrnsltnMethod.CnsldtnCrcyTranslationMethod

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _MethodText.Language                                                                           as Language,

      @ObjectModel.foreignKey.association: '_CnsldtnCrcyTrnsltnMethod'
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnCrcyTrnsltnMethodVH',
                                                     element: 'CnsldtnCrcyTranslationMethod' } }]
  key cast ( _MethodText.ConsolidationMethod as fincs_crcy_trnsltn_method preserving type )          as CnsldtnCrcyTranslationMethod,

      @Semantics.text
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      cast ( _MethodText.ConsolidationMethodText as fincs_crcy_trnsltn_method_text preserving type ) as CnsldtnCrcyTrnsltnMethodText,


      // association
      _Language, // required for value help retrieval
      _CnsldtnCrcyTrnsltnMethod // required for value help retrieval and navigation
};
```
