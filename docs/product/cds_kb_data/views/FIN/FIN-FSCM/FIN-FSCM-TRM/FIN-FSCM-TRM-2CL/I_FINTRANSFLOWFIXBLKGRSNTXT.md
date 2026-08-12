---
name: I_FINTRANSFLOWFIXBLKGRSNTXT
description: "Fintransflowfixblkgrsntxt"
app_component: FIN-FSCM-TRM-2CL
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
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_FINTRANSFLOWFIXBLKGRSNTXT

**Fintransflowfixblkgrsntxt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
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
| `FinTransFlowFixingBlkgReason` | ✓ | |  | `cast( dd07t.domvalue_l as tb_ssprgrd )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `FinTransFlowFixingBlkgRsnName` |  | |  | `cast( dd07t.ddtext as tb_ssprgrd_name preserving type )` |  |  |
| `_FixingBlockingReason` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FixingBlockingReason` | `I_FinTransFlowFixingBlkgRsn` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Fin Trans Flow Fixing Blkg Rsn - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #META
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #SEARCHABLE_ENTITY ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'FinTransFlowFixingBlkgReason'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view entity I_FinTransFlowFixBlkgRsnTxt
  as select from dd07t
  association [0..1] to I_FinTransFlowFixingBlkgRsn as _FixingBlockingReason  on $projection.FinTransFlowFixingBlkgReason = _FixingBlockingReason.FinTransFlowFixingBlkgReason
  association [0..1] to I_Language                 as _Language              on $projection.Language                      = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )       as Language, 
      @ObjectModel.foreignKey.association: '_FixingBlockingReason'
      @ObjectModel.text.element: ['FinTransFlowFixingBlkgRsnName']
  key cast( dd07t.domvalue_l as tb_ssprgrd )                  as FinTransFlowFixingBlkgReason,
  
      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                        as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as tb_ssprgrd_name preserving type ) as FinTransFlowFixingBlkgRsnName,
      
      _FixingBlockingReason,
      _Language
} 
where dd07t.domname  = 'T_SSPRGRD'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
