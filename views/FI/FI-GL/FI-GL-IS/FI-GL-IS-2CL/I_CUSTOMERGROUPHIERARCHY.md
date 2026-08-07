---
name: I_CUSTOMERGROUPHIERARCHY
description: Customergrouphierarchy
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
  - customer
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:Customer
---
# I_CUSTOMERGROUPHIERARCHY

**Customergrouphierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CustomerGroupHierarchy` | ✓ | |  | `cast(hrrp_dir_n.hryid as fis_hryid_customergroup preserving type )` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |
| `LastChangedByUser` |  | |  | `upduser` |
| `LastChangeDateTime` |  | |  | `updtime` |
| `HierarchyShortID` |  | |  | `hrysid` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustomerGroupHierarchyText` | [1..*] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Group Hierarchy'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'CustomerGroupHierarchy'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@Metadata.allowExtensions: true
@ObjectModel.representativeKey: 'CustomerGroupHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics.internalName:#LOCAL

define view entity I_CustomerGroupHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_CustomerGroupHierarchyText as _Text on  $projection.CustomerGroupHierarchy = _Text.CustomerGroupHierarchy
                                                              and $projection.ValidityEndDate        = _Text.ValidityEndDate

{
      @ObjectModel.text.association: '_Text'
  key cast(hrrp_dir_n.hryid as fis_hryid_customergroup preserving type ) as CustomerGroupHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )            as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )          as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                                 as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                                 as LastChangeDateTime,
      hrrp_dir_n.hrysid                                                  as HierarchyShortID,
      _Text
}
where
  hrrp_dir_n.hrytyp = 'U506'
```
