---
name: I_STSTCLKEYFIGUREHIERARCHYT
description: Ststclkeyfigurehierarchyt
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-IS
  - interface-view
  - component:FI-GL-IS-2CL
  - lob:Finance
---
# I_STSTCLKEYFIGUREHIERARCHYT

**Ststclkeyfigurehierarchyt**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `hrycls` |
| `StatisticalKeyFigureHierarchy` | ✓ | |  | `hryid_42` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )` |
| `Language` | ✓ | |  | `spras` |
| `ValidityStartDate` |  | |  | `cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type )` |
| `StatKeyFigureHierarchyName` |  | |  | `hrytxt` |
| `_ControllingAreaText` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTCLKEYFIGHT'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Statistical Key Figure Hierarchy - Text'
@ObjectModel.representativeKey: 'StatisticalKeyFigureHierarchy'
@Analytics: { dataExtraction.enabled: true }
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Metadata.ignorePropagatedAnnotations:true
@Analytics.internalName:#LOCAL
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name:'StstclKeyFigureHierarchyText'

define view I_StstclKeyFigureHierarchyT
  as select from hrrp_dirt_n
  //
  association [0..1] to I_ControllingArea as _ControllingAreaText on $projection.ControllingArea = _ControllingAreaText.ControllingArea
  //
  association [0..1] to I_ControllingArea as _ControllingArea     on $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..1] to I_Language        as _Language            on $projection.Language = _Language.Language

{
        //
        @Consumption.valueHelpDefinition: [
          { entity:  { name:    'I_ControllingAreaStdVH',
                       element: 'ControllingArea' }
          }]
        @ObjectModel.text.association: '_ControllingAreaText'
        //
        @ObjectModel.foreignKey.association: '_ControllingArea'
        //  key   hrrp_directoryt.hrycls                        as ControllingArea,
        //  key   cast( hrrp_directory.hrycls as fis_kokrs )    as ControllingArea,
  key   hrrp_dirt_n.hrycls                                         as ControllingArea,
  key   hrrp_dirt_n.hryid_42                                       as StatisticalKeyFigureHierarchy,
        @Semantics.businessDate.to: true
  key   cast(hrrp_dirt_n.hryvalto as fis_datbi preserving type )   as ValidityEndDate,
        @Semantics.language
  key   spras                                                      as Language,
        @Semantics.businessDate.from: true
        cast(hrrp_dirt_n.hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
        @Semantics.text
        hrytxt                                                     as StatKeyFigureHierarchyName,
        _Language,
        _ControllingArea,
        //
        @Consumption.hidden: true
        _ControllingAreaText
        //
}
where
  hrrp_dirt_n.hrytyp = '0104'
```
