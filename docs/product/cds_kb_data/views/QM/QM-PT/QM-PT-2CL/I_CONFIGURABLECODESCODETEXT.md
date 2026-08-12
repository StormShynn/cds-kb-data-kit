---
name: I_CONFIGURABLECODESCODETEXT
description: "Configurablecodescodetext"
app_component: QM-PT-2CL
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
  - QM
  - QM-PT
  - interface-view
  - text-view
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_CONFIGURABLECODESCODETEXT

**Configurablecodescodetext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
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
| `ConfigurableCodesCatalog` | ✓ | |  | `katalogart` |  |  |
| `ConfigurableCodesCodeGroup` | ✓ | |  | `codegruppe` |  |  |
| `ConfigurableCodesCode` | ✓ | |  | `code` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `ConfigurableCodesCodeText` |  | |  | `cast( kurztext as vdm_qtxt_code preserving type )` |  |  |
| `_ConfigurableCodesCatalog` | | ✓ | | | | |
| `_ConfigurableCodesCodeGroup` | | ✓ | | | | |
| `_ConfigurableCodesCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConfigurableCodesCatalog` | `I_ConfigurableCodesCatalog` | [1..1] |
| `_ConfigurableCodesCodeGroup` | `I_ConfigurableCodesCodeGroup` | [1..1] |
| `_ConfigurableCodesCode` | `I_ConfigurableCodesCode` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Code of Configurable Codes - Text'
@ObjectModel.dataCategory: #TEXT
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel:{
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ],
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #CUSTOMIZING } }
@Analytics: {
  dataExtraction.enabled: true,
  dataExtraction.delta.changeDataCapture.automatic: true
}
@ObjectModel.representativeKey: 'ConfigurableCodesCode'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ConfigurableCodesCodeText
  as select from qpct
  association [1..1] to I_ConfigurableCodesCatalog   as _ConfigurableCodesCatalog   on  $projection.ConfigurableCodesCatalog = _ConfigurableCodesCatalog.ConfigurableCodesCatalog
  association [1..1] to I_ConfigurableCodesCodeGroup as _ConfigurableCodesCodeGroup on  $projection.ConfigurableCodesCatalog   = _ConfigurableCodesCodeGroup.ConfigurableCodesCatalog
                                                                                    and $projection.ConfigurableCodesCodeGroup = _ConfigurableCodesCodeGroup.ConfigurableCodesCodeGroup
  association [1..1] to I_ConfigurableCodesCode      as _ConfigurableCodesCode      on  $projection.ConfigurableCodesCatalog   = _ConfigurableCodesCode.ConfigurableCodesCatalog
                                                                                    and $projection.ConfigurableCodesCodeGroup = _ConfigurableCodesCode.ConfigurableCodesCodeGroup
                                                                                    and $projection.ConfigurableCodesCode      = _ConfigurableCodesCode.ConfigurableCodesCode
{
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCatalog'
  key katalogart                                        as ConfigurableCodesCatalog,
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCodeGroup'
  key codegruppe                                        as ConfigurableCodesCodeGroup,
      @ObjectModel.foreignKey.association: '_ConfigurableCodesCode'
  key code                                              as ConfigurableCodesCode,
      @Semantics.language: true
  key sprache                                           as Language,
      @Semantics.text: true
      cast( kurztext as vdm_qtxt_code preserving type ) as ConfigurableCodesCodeText,

      // Associations
      _ConfigurableCodesCatalog,
      _ConfigurableCodesCodeGroup,
      _ConfigurableCodesCode

}
where
  qpct.version = '000001'
```
