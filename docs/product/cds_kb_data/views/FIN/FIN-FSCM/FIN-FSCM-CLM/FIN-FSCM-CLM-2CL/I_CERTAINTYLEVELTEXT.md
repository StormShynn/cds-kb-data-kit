---
name: I_CERTAINTYLEVELTEXT
description: "Certaintyleveltext"
app_component: FIN-FSCM-CLM-2CL
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
  - FIN-FSCM-CLM
  - interface-view
  - text-view
  - text
  - component:FIN-FSCM-CLM-2CL
  - lob:Other
---
# I_CERTAINTYLEVELTEXT

**Certaintyleveltext**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-2CL` |
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
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `CertaintyLevel` | ✓ | |  | `cast( dd07t.domvalue_l as fqm_certainty_level )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `CertaintyLevelName` |  | |  | `cast( dd07t.ddtext as fclm_cl_name preserving type )` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CertaintyLevel` | `I_CertaintyLevel_2` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Certainty Level - Text'
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ICERTLEVELT'
@ObjectModel.representativeKey: 'CertaintyLevel'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name:'CashFlowCertaintyLevel'
@ObjectModel.supportedCapabilities:[ #LANGUAGE_DEPENDENT_TEXT,#EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE

define view entity I_CertaintyLevelText
  as select from dd07t
  association [0..1] to I_Language                as _Language       on $projection.Language = _Language.Language
  association [0..1] to I_CertaintyLevel_2        as _CertaintyLevel  on $projection.CertaintyLevel = _CertaintyLevel.CertaintyLevel
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.text.element: ['CertaintyLevelName']
  key cast( dd07t.domvalue_l as fqm_certainty_level )     as CertaintyLevel,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as fclm_cl_name preserving type )  as CertaintyLevelName,

      _Language
//      _CertaintyLevel
}
where
      dd07t.domname  = 'FQM_CERTAINTY_LEVEL'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
