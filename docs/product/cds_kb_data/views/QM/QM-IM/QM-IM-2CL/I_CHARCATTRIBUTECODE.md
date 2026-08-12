---
name: I_CHARCATTRIBUTECODE
description: "Charcattributecode"
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
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_CHARCATTRIBUTECODE

**Charcattributecode**

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
| `CharcAttributeCodeStatus` |  | |  | `inaktiv` |  |  |
| `CharcAttribCodeCreatedBy` |  | |  | `ersteller` |  |  |
| `CharcAttribCodeCreatedOn` |  | |  | `e_datum` |  |  |
| `CharcAttribCodeLastChgdBy` |  | |  | `aenderer` |  |  |
| `CharcAttribCodeLastChangedOn` |  | |  | `a_datum` |  |  |
| `_CharcAttributeCodeGrp` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CharcAttributeCodeGrp` | `I_CharcAttributeCodeGrp` | [1..1] |
| `_Text` | `I_CharcAttributeCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Characteristic Attribute Code'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.usageType: { dataClass: #CUSTOMIZING, sizeCategory: #S, serviceQuality: #A }
@ObjectModel.representativeKey: 'CharacteristicAttributeCode'
@Analytics.technicalName: 'ICHARCATTRIBCODE'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_CharcAttributeCode as select from qpcd
    association [1..1] to I_CharcAttributeCodeGrp as _CharcAttributeCodeGrp
      on $projection.CharacteristicAttributeCodeGrp = _CharcAttributeCodeGrp.CharacteristicAttributeCodeGrp
    association [0..*] to I_CharcAttributeCodeText as _Text 
      on $projection.CharacteristicAttributeCodeGrp = _Text.CharacteristicAttributeCodeGrp 
      and $projection.CharacteristicAttributeCode = _Text.CharacteristicAttributeCode
{
    @Consumption.valueHelpDefinition: [ 
      { entity:  { name:    'I_CharcAttributeCodeGrpStdVH',
                   element: 'CharacteristicAttributeCodeGrp' }
      }]
    @ObjectModel.foreignKey.association: '_CharcAttributeCodeGrp'
    key codegruppe as CharacteristicAttributeCodeGrp,
//  key qpcd.version --> is always 1 so we could leave out
    @ObjectModel.text.association: '_Text'
    key code as  CharacteristicAttributeCode,
    inaktiv  as CharcAttributeCodeStatus,    

    @Semantics.user.createdBy: true
    qpcd.ersteller      as CharcAttribCodeCreatedBy,
    @Semantics.businessDate.at: true
    qpcd.e_datum        as CharcAttribCodeCreatedOn,
    @Semantics.user.lastChangedBy: true
    qpcd.aenderer       as CharcAttribCodeLastChgdBy,
    @Semantics.businessDate.at: true
    qpcd.a_datum        as CharcAttribCodeLastChangedOn,
    
    //Associations
    @Semantics.text: true
    _Text[1:Language = $session.system_language].CharacteristicAttributeCodeTxt,
    _Text,
    _CharcAttributeCodeGrp
}
where katalogart = '1' and version = '000001'
```
