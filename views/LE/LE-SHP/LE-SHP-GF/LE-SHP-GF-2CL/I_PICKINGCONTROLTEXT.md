---
name: I_PICKINGCONTROLTEXT
description: Pickingcontroltext
app_component: LE-SHP-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LE
  - LE-SHP
  - LE-SHP-GF
  - interface-view
  - text-view
  - text
  - component:LE-SHP-GF-2CL
  - lob:Logistics Execution
---
# I_PICKINGCONTROLTEXT

**Pickingcontroltext**

| Property | Value |
|---|---|
| App Component | `LE-SHP-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PickingControl` | ✓ | |  | `substring(dd07t.domvalue_l, 1, 1)` |
| `Language` | ✓ | |  | `ddlanguage` |
| `PickingControlDesc` |  | |  | `ddtext` |
| `_PickingControl` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PickingControl` | `I_PickingControl` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.dataExtraction.enabled: true //Inserted by VDM CDS Suite Plugin
@ClientHandling.algorithm: #SESSION_VARIABLE //Inserted by VDM CDS Suite Plugin
@ObjectModel.dataCategory: #TEXT
@ObjectModel.sapObjectNodeType.name: 'PickingControlText'
@ObjectModel.representativeKey: 'PickingControl'
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Picking Control - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ILEPICKINGCTRLT'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.modelingPattern: [ #LANGUAGE_DEPENDENT_TEXT ]

define view I_PickingControlText
as select from
dd07t
association [0..1] to I_PickingControl as _PickingControl on $projection.PickingControl = _PickingControl.PickingControl
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_PickingControl'
    key substring(dd07t.domvalue_l, 1, 1) as PickingControl,

    @Semantics.language
    @ObjectModel.foreignKey.association: '_Language'
    key ddlanguage as Language,

    @Semantics.text: true
    ddtext as PickingControlDesc,

    _PickingControl,
    _Language

}

where domname = 'KOMKZ' and as4local = 'A';
```
