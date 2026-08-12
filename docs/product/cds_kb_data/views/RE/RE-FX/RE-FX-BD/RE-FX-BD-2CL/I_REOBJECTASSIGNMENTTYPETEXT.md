---
name: I_REOBJECTASSIGNMENTTYPETEXT
description: "Reobjectassignmenttypetext"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - text-view
  - text
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REOBJECTASSIGNMENTTYPETEXT

**Reobjectassignmenttypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REObjectAssignmentType` | ✓ | |  | `objasstype` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `REObjectAssignmentTypeName` |  | |  | `xobjasstype` |  |  |
| `_REObjectAssignmentType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REObjectAssignmentType` | `I_REObjectAssignmentType` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREOBJASTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Object Assignment Type - Txt'
@Analytics.dataExtraction.enabled: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'REObjectAssignmentType',
  semanticKey: ['REObjectAssignmentType'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #LANGUAGE_DEPENDENT_TEXT, 
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REObjectAssignmentTypeText'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_REObjectAssignmentTypeText
  as select from tivbdobjasstypet
  association [1..1] to I_REObjectAssignmentType as _REObjectAssignmentType on $projection.REObjectAssignmentType = _REObjectAssignmentType.REObjectAssignmentType
  association [1..1] to I_Language               as _Language               on $projection.Language = _Language.Language
{
  key objasstype  as REObjectAssignmentType,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras       as Language,
      @Semantics.text: true
      xobjasstype as REObjectAssignmentTypeName,

      _REObjectAssignmentType,
      _Language
}
```
