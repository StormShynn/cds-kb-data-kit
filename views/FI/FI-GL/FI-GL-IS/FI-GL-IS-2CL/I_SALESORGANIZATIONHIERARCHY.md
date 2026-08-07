---
name: I_SALESORGANIZATIONHIERARCHY
description: Sales OrganizationHIERARCHY
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
  - sales-organization
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:SalesOrganization
---
# I_SALESORGANIZATIONHIERARCHY

**Sales OrganizationHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrganizationHierarchy` | ✓ | |  | `cast ( hrrp_dir_n.hryid as fis_hryid_salesorg preserving type )` |
| `ValidityEndDate` | ✓ | |  | `cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )` |
| `ValidityStartDate` |  | |  | `cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )` |
| `LastChangedByUser` |  | |  | `upduser` |
| `LastChangeDateTime` |  | |  | `updtime` |
| `HierarchyShortID` |  | |  | `hrysid` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SlsOrganizationHierarchyT` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Sales Organization Hierarchy'
@ObjectModel.representativeKey: 'SalesOrganizationHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'SalesOrganizationHierarchy'
@Analytics.internalName:#LOCAL

define view entity I_SalesOrganizationHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_SlsOrganizationHierarchyT as _Text on  $projection.SalesOrganizationHierarchy = _Text.SalesOrganizationHierarchy
                                                             and $projection.ValidityEndDate            = _Text.ValidityEndDate
{
      @ObjectModel.text.association: '_Text'
  key cast ( hrrp_dir_n.hryid as fis_hryid_salesorg preserving type ) as SalesOrganizationHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )         as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )       as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                              as LastChangeDateTime,
      hrrp_dir_n.hrysid                                               as HierarchyShortID,
      _Text
}
where
  hrrp_dir_n.hrytyp = 'U512';
```
