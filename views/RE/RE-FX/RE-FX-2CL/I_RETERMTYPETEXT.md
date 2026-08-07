---
name: I_RETERMTYPETEXT
description: Retermtypetext
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - text-view
  - text
  - component:RE-FX-2CL
  - lob:Other
---
# I_RETERMTYPETEXT

**Retermtypetext**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` |  |  |
| `RealEstateObjectType` | ✓ | |  | `objtype` |  |  |
| `RETermType` | ✓ | |  | `termtype` |  |  |
| `RETermTypeName` |  | |  | `xtermtype` |  |  |
| `_RETermType` | | ✓ | | | | |
| `_REObjectType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RETermType` | `I_RETermType` | [0..1] |
| `_REObjectType` | `I_REObjectType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRETERMTYPETEXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Real Estate Term Type - Text'
@Analytics: {
              dataExtraction.enabled: true
}

@ObjectModel: {
                usageType: {
                              dataClass: #CUSTOMIZING,
                              serviceQuality: #A,
                              sizeCategory: #S
                            },
                dataCategory: #TEXT,
                representativeKey: 'RETermType',
                semanticKey: ['RETermType'],
                modelingPattern:           #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                         #EXTRACTION_DATA_SOURCE],
                sapObjectNodeType.name: 'RealEstateTermTypeText'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC


define view entity I_RETermTypeText
  as select from tivtmtermtypet
  association [0..1] to I_RETermType   as _RETermType   on  $projection.RETermType           = _RETermType.RETermType
                                                        and $projection.RealEstateObjectType = _RETermType.RealEstateObjectType
  association [1..1] to I_REObjectType as _REObjectType on  $projection.RealEstateObjectType = _REObjectType.RealEstateObjectType
  association [0..1] to I_Language     as _Language     on  $projection.Language = _Language.Language
{

        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
  key   spras     as Language,
        @ObjectModel.foreignKey.association: '_REObjectType'
  key   objtype   as RealEstateObjectType,
        @ObjectModel.foreignKey.association: '_RETermType'
  key   termtype  as RETermType,
        @Semantics.text: true
        xtermtype as RETermTypeName,

        _Language,
        _RETermType,
        _REObjectType

}
```
