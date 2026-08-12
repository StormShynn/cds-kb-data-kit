---
name: I_RETERMTYPETEXT
description: "Retermtypetext"
app_component: RE-FX-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
