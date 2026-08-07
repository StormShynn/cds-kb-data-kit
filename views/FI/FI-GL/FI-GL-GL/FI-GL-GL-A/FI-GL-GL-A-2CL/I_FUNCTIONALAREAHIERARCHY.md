---
name: I_FUNCTIONALAREAHIERARCHY
description: "Functionalareahierarchy"
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_FUNCTIONALAREAHIERARCHY

**Functionalareahierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FunctionalAreaHierarchy` | ✓ | |  | `cast ( hrrp_dir_n.hryid_42 as fis_hryid_functionalarea_42 preserving type )` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |  |  |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |  |  |
| `LastChangedByUser` |  | |  | `upduser` |  |  |
| `LastChangeDateTime` |  | |  | `updtime` |  |  |
| `LastChangeTime` |  | |  | `updtime` |  |  |
| `HierarchyShortID` |  | |  | `hrysid` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FunctionalAreaHierarchyT` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Functional Area Hierarchy'
@ObjectModel.representativeKey: 'FunctionalAreaHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFIFUNCAREAH'
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'FunctionalAreaHierarchy'

define view I_FunctionalAreaHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_FunctionalAreaHierarchyT as _Text on  $projection.FunctionalAreaHierarchy = _Text.FunctionalAreaHierarchy
                                                            and $projection.ValidityEndDate         = _Text.ValidityEndDate

{

      @ObjectModel.text.association: '_Text'
  key cast ( hrrp_dir_n.hryid_42 as fis_hryid_functionalarea_42 preserving type ) as FunctionalAreaHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )                     as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )                   as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                                          as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                                          as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                                          as LastChangeTime,
      hrrp_dir_n.hrysid                                                           as HierarchyShortID,
      _Text

}
where
  hrytyp = '0112';
```
