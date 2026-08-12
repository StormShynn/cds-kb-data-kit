---
name: I_TREASURYUPDATETYPETEXT
description: "Treasuryupdatetypetext"
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
  - text-view
  - text
  - treasury
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TREASURYUPDATETYPETEXT

**Treasuryupdatetypetext**

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
| `TreasuryUpdateType` | ✓ | |  | `dis_flowtype` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `TreasuryUpdateTypeName` |  | |  | `cast(TreasuryUpdateTypeText.dis_flowtypetext as ftr_gen_update_type_name preserving type )` |  |  |
| `_TreasuryUpdateType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TreasuryUpdateType` | `I_TreasuryUpdateType` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
@ObjectModel.dataCategory: #TEXT
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'ITRUPDTPTXT'
@ObjectModel.representativeKey: 'TreasuryUpdateType'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.sapObjectNodeType.name: 'TreasuryUpdateType'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Treasury Update Type - Text'
define view entity I_TreasuryUpdateTypeText
  as select from trdc_dflowtype_t as TreasuryUpdateTypeText

  association [0..1] to I_TreasuryUpdateType as _TreasuryUpdateType on $projection.TreasuryUpdateType = _TreasuryUpdateType.TreasuryUpdateType
  association [0..1] to I_Language           as _Language           on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_TreasuryUpdateType'
      
  key TreasuryUpdateTypeText.dis_flowtype                                        as TreasuryUpdateType,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key TreasuryUpdateTypeText.spras                                               as Language,
      @Semantics.text: true
      cast(TreasuryUpdateTypeText.dis_flowtypetext as ftr_gen_update_type_name preserving type )  as TreasuryUpdateTypeName,

      _TreasuryUpdateType,
      _Language
}
```
