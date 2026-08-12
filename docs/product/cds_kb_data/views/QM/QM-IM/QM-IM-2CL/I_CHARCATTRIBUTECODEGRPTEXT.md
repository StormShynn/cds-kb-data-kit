---
name: I_CHARCATTRIBUTECODEGRPTEXT
description: "Charcattributecodegrptext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CHARCATTRIBUTECODEGRPTEXT

**Charcattributecodegrptext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharacteristicAttributeCodeGrp` | ✓ | |  | `codegruppe` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `CharacteristicAttribCodeGrpTxt` |  | |  | `cast( kurztext as vdm_qktextgr preserving type )` |  |  |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICHRCATTRBCDGRPT'
//@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Characteristic Attribute Code Group - Text' 
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.usageType: {
    dataClass: #CUSTOMIZING,
    sizeCategory: #M,
    serviceQuality: #A 
}
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'CharacteristicAttributeCodeGrp'
@Metadata.ignorePropagatedAnnotations: true
define view I_CharcAttributeCodeGrpText as select from qpgt 

   association [1..1] to I_CharcAttributeCodeGrp     as _CharcAttributeCodeGrp
      on     $projection.CharacteristicAttributeCodeGrp   = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp

   association [0..1] to I_Language as _Language
      on     $projection.Language = _Language.Language
{
   key qpgt.codegruppe as CharacteristicAttributeCodeGrp,
   @Semantics.language: true
   key sprache as Language,
   @Semantics.text: true
   cast( kurztext as vdm_qktextgr preserving type ) as CharacteristicAttribCodeGrpTxt,
   
   /* Associations */
   _CharcAttributeCodeGrp,
   _Language 
}
where katalogart = '1'
```
