---
name: I_PURGOUTPUTOPERATIONCODETEXT
description: "Purgoutputoperationcodetext"
app_component: MM
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
  - MM
  - interface-view
  - text-view
  - text
  - component:MM
  - lob:Sourcing & Procurement
---
# I_PURGOUTPUTOPERATIONCODETEXT

**Purgoutputoperationcodetext**

| Property | Value |
|---|---|
| App Component | `MM` |
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
| `PurgOutputOperationCode` | ✓ | |  | `cast ( dd07t.domvalue_l as druvo )` |  |  |
| `Language` | ✓ | |  | `cast ( dd07t.ddlanguage as spras preserving type )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PurgOutputOperationCodeName` |  | |  | `cast( dd07t.ddtext as mmpur_output_operation_codname preserving type )` |  |  |
| `_Language` | | ✓ | | | | |
| `_PurgOutputOperationCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMMPURGOUTOPCOT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Purchasing Output Operation Code - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.representativeKey: 'PurgOutputOperationCode'
@ObjectModel.dataCategory:#TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
define view I_PurgOutputOperationCodeText
  as select from dd07t
  association        to parent I_PurgOutputOperationCode as _PurgOutputOperationCode on $projection.PurgOutputOperationCode = _PurgOutputOperationCode.PurgOutputOperationCode
  association [0..1] to I_Language                        as _Language                on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_PurgOutputOperationCode'
      @ObjectModel.text.element: ['PurgOutputOperationCodeName']
  key cast ( dd07t.domvalue_l as druvo )                                     as PurgOutputOperationCode,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast ( dd07t.ddlanguage as spras preserving type )                     as Language,
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                       as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      cast( dd07t.ddtext as mmpur_output_operation_codname preserving type ) as PurgOutputOperationCodeName,
      _PurgOutputOperationCode,
      _Language
}
where
      dd07t.domname  = 'DRUVO'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
