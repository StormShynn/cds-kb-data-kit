---
name: I_FINWBSELEMENTHIERARCHY
description: "Finwbselementhierarchy"
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
  - wbs
  - component:FI-GL-IS-2CL
  - lob:Finance
  - bo:WBS
---
# I_FINWBSELEMENTHIERARCHY

**Finwbselementhierarchy**

| Property | Value |
|---|---|
| App Component | `FI-GL-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WBSElementHierarchy` | ✓ | |  |  |  |  |
| `ValidityEndDate` | ✓ | |  |  |  |  |
| `ValidityStartDate` |  | |  |  |  |  |
| `HierarchyType` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FinWBSElementHierarchyText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics: { dataCategory: #DIMENSION,
              internalName:#LOCAL,
              dataExtraction.enabled: true }

@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Fin WBS Element Hierarchy'
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {
  dataClass: #MASTER,
  serviceQuality: #C,
  sizeCategory: #XL
}
@ObjectModel.representativeKey: 'WBSElementHierarchy'
@Analytics.technicalName: 'IFIWBSELEMENTH'
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION, #EXTRACTION_DATA_SOURCE ]
@ObjectModel.sapObjectNodeType.name:'FinWBSElementHierarchy'

define view entity I_FinWBSElementHierarchy
  as select from R_FinWBSElementHierarchy
  //     inner join hrrp_node on hrrp_directory.hryid = hrrp_node.hryid and
  //                             hrrp_directory.hryver = hrrp_node.hryver and
  //                             hrrp_directory.hryvalto = hrrp_node.hryvalto and
  //                             hrrp_node.nodetype = 'R'

  association [0..*] to I_FinWBSElementHierarchyText as _Text on $projection.WBSElementHierarchy = _Text.WBSElementHierarchy
{
      @ObjectModel.text.association: '_Text'
  key R_FinWBSElementHierarchy.WBSElementHierarchy,

      @Semantics.businessDate.to: true
  key R_FinWBSElementHierarchy.ValidityEndDate,
      @Semantics.businessDate.from: true
      R_FinWBSElementHierarchy.ValidityStartDate,
      R_FinWBSElementHierarchy.HierarchyType,
      @Semantics.user.lastChangedBy: true
      R_FinWBSElementHierarchy.LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      R_FinWBSElementHierarchy.LastChangeDateTime,
      _Text
}
//where
//  hrytyp = '0110'   // WBS Element Hierarchy

union all select from I_SAPClient
association [0..*] to I_FinWBSElementHierarchyText as _Text on $projection.WBSElementHierarchy = _Text.WBSElementHierarchy
{
  key cast('WBSELEMENTHIERARCHY                       ' as hryid preserving type) as WBSElementHierarchy,

  key cast('99991231' as fis_datbi )                                              as ValidityEndDate,

      cast('19000101' as fis_datbi )                                              as ValidityStartDate,
      cast ('0110' as hrytype )                                                   as HierarchyType,
      cast ('SAP         '    as upnam )                                          as LastChangedByUser,
      cast ( tstmp_current_utctimestamp()  as hryupdtime  )                       as LastChangeDateTime,
      _Text
}
```
