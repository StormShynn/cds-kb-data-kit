---
name: I_COSTCTRACTIVITYTYPEHIERARCHY
description: "Costctractivitytypehierarchy"
app_component: FI-GL-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_COSTCTRACTIVITYTYPEHIERARCHY

**Costctractivitytypehierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` |  | |  | `true key cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )` |  |  |
| `CostCtrActivityTypeHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_cctracttytpe preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `LastChangeTime` |  | |  | `updtime` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `_ControllingAreaText` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingAreaText` | `I_ControllingArea` | [0..1] |
| `_Text` | `I_CostCtrActivityTypeHierText` | [1..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
@ObjectModel.representativeKey: 'CostCtrActivityTypeHierarchy'
@EndUserText.label: 'Cost Center Activity Type Hierarchy'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFCOSTCTRACTTYPH'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@Metadata.allowExtensions: true
@Analytics.internalName:#LOCAL
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@Analytics.dataExtraction: {enabled:true}

@AccessControl.privilegedAssociations: ['_ControllingAreaText']
@ObjectModel.sapObjectNodeType.name:'CostCtrActivityTypeHierarchy'

define view I_CostCtrActivityTypeHierarchy
  as select from hrrp_dir_n
  association [0..1] to I_ControllingArea             as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [1..*] to I_CostCtrActivityTypeHierText as _Text                on  $projection.CostCtrActivityTypeHierarchy = _Text.CostCtrActivityTypeHierarchy
                                                                              and $projection.ControllingArea              = _Text.ControllingArea

  association [0..1] to I_ControllingArea             as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

{

      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Hierarchy.notAssignedNode.filter: true
  key cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )             as ControllingArea,
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_cctracttytpe preserving type ) as CostCtrActivityTypeHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )           as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )         as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                                as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                                as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                                as LastChangeTime,
      hrrp_dir_n.hrysid                                                 as HierarchyShortID,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text,
      _ControllingArea,
      @Consumption.hidden: true
      _ControllingAreaText

}
where
  hrrp_dir_n.hrytyp = '0105';
```
