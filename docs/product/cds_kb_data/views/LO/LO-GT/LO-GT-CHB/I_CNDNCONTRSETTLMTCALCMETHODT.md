---
name: I_CNDNCONTRSETTLMTCALCMETHODT
description: "Cndncontrsettlmtcalcmethodt"
app_component: LO-GT-CHB
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
  - LO
  - LO-GT
  - LO-GT-CHB
  - interface-view
  - component:LO-GT-CHB
  - lob:Logistics General
---
# I_CNDNCONTRSETTLMTCALCMETHODT

**Cndncontrsettlmtcalcmethodt**

| Property | Value |
|---|---|
| App Component | `LO-GT-CHB` |
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
| `CndnContrSettlmtCalcMethod` | ✓ | |  | `cast( dd07t.domvalue_l as wb2_settlmt_calc_method )` |  |  |
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CndnContrSettlmtCalcMethodName` |  | |  | `cast( dd07t.ddtext as wb2_settlmt_calc_method_descr preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_CndnContrSettlmtCalcMethod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Settlement Calculation Method - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
  dataCategory: #TEXT,
  sapObjectNodeType.name: 'CndnContrSettlmtCalcMethodText',
  representativeKey: 'CndnContrSettlmtCalcMethod',
  modelingPattern:          #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities:  [ #CDS_MODELING_ASSOCIATION_TARGET,
                            #CDS_MODELING_DATA_SOURCE,
                            #EXTRACTION_DATA_SOURCE,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #SEARCHABLE_ENTITY,
                            #SQL_DATA_SOURCE ],
  usageType: {
    serviceQuality: #A,
    dataClass:      #META,
    sizeCategory:   #S
  }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #BASIC
}
@Search.searchable: true
@Analytics: {
  dataExtraction.enabled: true,
  technicalName: 'ICCSETCATMETHT',
  internalName: #LOCAL
}
@Metadata: {
  ignorePropagatedAnnotations: true
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_CndnContrSettlmtCalcMethodT
  as select from dd07t

  association        to parent I_CndnContrSettlmtCalcMethod as _CndnContrSettlmtCalcMethod on $projection.CndnContrSettlmtCalcMethod = _CndnContrSettlmtCalcMethod.CndnContrSettlmtCalcMethod

  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_CndnContrSettlmtCalcMethod'
      @ObjectModel.text.element: ['CndnContrSettlmtCalcMethodName']
  key cast( dd07t.domvalue_l as wb2_settlmt_calc_method )                   as CndnContrSettlmtCalcMethod,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                      as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as wb2_settlmt_calc_method_descr preserving type ) as CndnContrSettlmtCalcMethodName,

      /* Associations */
      _CndnContrSettlmtCalcMethod,
      _Language
}
where
      dd07t.domname  = 'WB2_SETTLMT_CALC_METHOD'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
