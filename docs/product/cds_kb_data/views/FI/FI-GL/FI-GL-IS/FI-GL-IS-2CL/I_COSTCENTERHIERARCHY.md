---
name: I_COSTCENTERHIERARCHY
description: "Cost CenterHIERARCHY"
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
  - cost-center
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:CostCenter
---
# I_COSTCENTERHIERARCHY

**Cost CenterHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ControllingArea` | ✓ | |  | `cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )` |  |  |
| `CostCenterHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_cctr preserving type )` |  |  |
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
| `_Text` | `I_CostCenterHierarchyText` | [1..*] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |

## Source Code

```abap
// Comment on key fields:
//
// Only three of the four HRRP_DIRECTORY key fields are included in this view.
// The key field HRYVER is left out on purpose, because:
// - by implementation, no semantic meaning is associated with HRYVER
// - by implementation, the time intervals of entries of the same hierarchy ids and version do not overlap. Therefore, there is no need to use HRYVER for selection.
// - The Analytical Engine will "pick" the entry corresponding to the business date (current or specified). This is a desired effect.
//
@ObjectModel.representativeKey: 'CostCenterHierarchy' //Inserted by VDM CDS Suite Plugin
@EndUserText.label: 'Cost Center Hierarchy'
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOSTCENTERH'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}

@Metadata.allowExtensions: true

@Analytics.dataExtraction.enabled: true

//--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
@AccessControl.privilegedAssociations: ['_ControllingAreaText']
// ]--GENERATED
@ObjectModel.sapObjectNodeType.name: 'CostCenterHierarchy'

define view I_CostCenterHierarchy
  as select from hrrp_dir_n
  //  left outer to one join hrrp_dir_owner on hrrp_directory.hryid = hrrp_dir_owner.hryid
  //                                 and hrrp_dir_owner.hier_owner = $session.user
  association [0..1] to I_ControllingArea         as _ControllingAreaText on  $projection.ControllingArea = _ControllingAreaText.ControllingArea
  association [1..*] to I_CostCenterHierarchyText as _Text                on  $projection.CostCenterHierarchy = _Text.CostCenterHierarchy
                                                                          and $projection.ControllingArea     = _Text.ControllingArea

  association [0..1] to I_ControllingArea         as _ControllingArea     on  $projection.ControllingArea = _ControllingArea.ControllingArea

{

      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_ControllingAreaStdVH',
                     element: 'ControllingArea' }
        }]
      @ObjectModel.text.association: '_ControllingAreaText'
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Hierarchy.notAssignedNode.filter: true
  key cast( hrrp_dir_n.kokrs as fis_kokrs preserving type )     as ControllingArea,
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_cctr preserving type ) as CostCenterHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )   as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type ) as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                        as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                        as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                        as LastChangeTime,
      hrrp_dir_n.hrysid                                         as HierarchyShortID,
      @ObjectModel.association.boundFields.dataMatchesSourceAndTargetTypes: true
      _Text,
      _ControllingArea,
      //--[ GENERATED:012:29JlHNUf7jY4ioM8lnJMdG
      @Consumption.hidden: true
      _ControllingAreaText
      // ]--GENERATED


}
where
  hrrp_dir_n.hrytyp = '0101'
```
