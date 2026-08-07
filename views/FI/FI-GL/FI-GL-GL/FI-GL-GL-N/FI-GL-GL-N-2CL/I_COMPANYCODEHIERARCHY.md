---
name: I_COMPANYCODEHIERARCHY
description: Company CodeHIERARCHY
app_component: FI-GL-GL-N-2CL
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
  - company-code
  - component:FI-GL-GL-N-2CL
  - lob:Finance
  - bo:CompanyCode
---
# I_COMPANYCODEHIERARCHY

**Company CodeHIERARCHY**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-N-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCodeHierarchy` | ✓ | |  | `cast ( hrrp_dir_n.hryid_42 as fis_hryid_ccode_42 preserving type )` |  |  |
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
| `_Text` | `I_CompanyCodeHierarchyT` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Company Code Hierarchy'
@ObjectModel.representativeKey: 'CompanyCodeHierarchy' //Inserted by VDM CDS Suite Plugin
@Analytics: { dataCategory: #DIMENSION }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IFICOCODEH'
@AccessControl.authorizationCheck: #CHECK
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.compiler.compareFilter
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #A,
  sizeCategory: #XL
}
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'CompanyCodeHierarchy'

define view I_CompanyCodeHierarchy
  as select from hrrp_dir_n
  association [1..*] to I_CompanyCodeHierarchyT as _Text on  $projection.CompanyCodeHierarchy = _Text.CompanyCodeHierarchy
                                                         and $projection.ValidityEndDate      = _Text.ValidityEndDate


{

      @ObjectModel.text.association: '_Text'
  key cast ( hrrp_dir_n.hryid_42 as fis_hryid_ccode_42 preserving type ) as CompanyCodeHierarchy,
      @Semantics.businessDate.to: true
  key cast(hrrp_dir_n.hryvalto as fis_datbi preserving type )            as ValidityEndDate,
      @Semantics.businessDate.from: true
      cast(hrrp_dir_n.hryvalfrom as fis_datab preserving type )          as ValidityStartDate,
      @Semantics.user.lastChangedBy: true
      hrrp_dir_n.upduser                                                 as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      hrrp_dir_n.updtime                                                 as LastChangeDateTime,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor:    'LastChangeDateTime'
      @VDM.lifecycle.status:     #DEPRECATED
      @VDM.lifecycle.successor:  'LastChangeDateTime'
      //@Semantics.systemDate.lastChangedAt: true
      hrrp_dir_n.updtime                                                 as LastChangeTime,
      hrrp_dir_n.hrysid                                                  as HierarchyShortID,
      _Text

}
where
  hrrp_dir_n.hrytyp = 'COCD';
```
