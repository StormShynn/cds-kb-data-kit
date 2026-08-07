---
name: I_STSTCLKEYFIGUREHIERARCHY
description: Ststclkeyfigurehierarchy
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
# I_STSTCLKEYFIGUREHIERARCHY

**Ststclkeyfigurehierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )` |
| `StatisticalKeyFigureHierarchy` | ✓ | |  | `hryid_42` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |
| `LastChangedByUser` |  | |  | `upduser` |
| `LastChangeDateTime` |  | |  | `updtime` |
| `HierarchyShortID` |  | |  | `hrysid` |
| `_ControllingAreaText` | | ✓ | | |
| `_Text` | | ✓ | | |
| `_ControllingArea` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_StstclKeyFigureHierarchyT` | [1..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IFISTSTCLKEYFIGH'
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Statistical Key Figure Hierarchy'
@ObjectModel.representativeKey: 'StatisticalKeyFigureHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Analytics.dataExtraction.enabled: true
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@ObjectModel.sapObjectNodeType.name:'StatisticalKeyFigureHierarchy'

define view I_StstclKeyFigureHierarchy
  as select from hrrp_dir_n
  //
  association [0..1] to I_ControllingArea           as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  //
  association [1..*] to I_StstclKeyFigureHierarchyT as _Text                on  $projection.StatisticalKeyFigureHierarchy = _Text.StatisticalKeyFigureHierarchy
                                                                            and $projection.ControllingArea               = _Text.ControllingArea
                                                                            and $projection.ValidityEndDate               = _Text.ValidityEndDate

  association [0..1] to I_ControllingArea           as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea


{

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Hierarchy.notAssignedNode.filter: true
  key cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )     as ControllingArea,
      @ObjectModel.text.association: '_Text'
  key hrrp_dir_n.hryid_42                                       as StatisticalKeyFigureHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )   as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                        as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                        as LastChangeDateTime,
      hrrp_dir_n.hrysid                                         as HierarchyShortID,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText

}
where
  hrytyp = '0104';
```
