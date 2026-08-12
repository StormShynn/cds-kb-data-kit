---
name: I_CHARCATTRIBUTECODETEXT
description: "Charcattributecodetext"
app_component: QM-IM-2CL
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
  - QM-IM
  - interface-view
  - text-view
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBUTECODETEXT

**Charcattributecodetext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
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
| `CharacteristicAttributeCodeGrp` | ✓ | |  | `codegruppe` |  |  |
| `CharacteristicAttributeCode` | ✓ | |  | `code` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `CharacteristicAttributeCodeTxt` |  | |  | `cast( kurztext as vdm_qtxt_code preserving type )` |  |  |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Characteristic Attribute Code - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #M, serviceQuality: #A }
@ObjectModel.representativeKey: 'CharacteristicAttributeCode'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ICHARCATTRCODET'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CharcAttributeCodeText as select from qpct
    association [1..1] to I_CharcAttributeCodeGrp as _CharcAttributeCodeGrp
      on $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp
{
   @ObjectModel.foreignKey.association: '_CharcAttributeCodeGrp'
   key codegruppe as CharacteristicAttributeCodeGrp,
   key code       as CharacteristicAttributeCode,
   @Semantics.language: true
   key sprache as Language,
   @Semantics.text: true
   cast( kurztext as vdm_qtxt_code preserving type ) as CharacteristicAttributeCodeTxt,   
   
   // Associations
   _CharcAttributeCodeGrp
}
where katalogart = '1' and version = '000001'
```
