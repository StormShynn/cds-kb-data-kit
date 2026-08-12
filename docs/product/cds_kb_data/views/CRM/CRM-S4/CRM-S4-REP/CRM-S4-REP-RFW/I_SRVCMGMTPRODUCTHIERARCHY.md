---
name: I_SRVCMGMTPRODUCTHIERARCHY
description: "Srvcmgmtproducthierarchy"
app_component: CRM-S4-REP-RFW
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - product
  - component:CRM-S4-REP-RFW
  - lob:Other
---
# I_SRVCMGMTPRODUCTHIERARCHY

**Srvcmgmtproducthierarchy**

| Property | Value |
|---|---|
| App Component | `CRM-S4-REP-RFW` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SrvcProductHierarchy` | ✓ | |  | `cast ( ProductHierarchy as abap.char(20) )` |  |  |
| `_SrvcMgmtProductHierarchyText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SrvcMgmtProductHierarchyText` | `I_SrvcMgmtProductHierarchyText` | [1..*] |

## Source Code

```abap
@EndUserText.label: 'Service Product Hierarchy'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog: {
  sqlViewName: 'ISRVCPRODHIER',
  compiler.compareFilter: true,
  preserveKey: true
}
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #NOT_REQUIRED

@ObjectModel: {
   representativeKey: 'SrvcProductHierarchy',
   usageType: {
     dataClass:      #CUSTOMIZING,
     serviceQuality: #X,
     sizeCategory:   #S
   },
   supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
//@Metadata.allowExtensions:true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL

define view I_SrvcMgmtProductHierarchy 
    as select from I_ProductHierarchy 
    association [1..*] to I_SrvcMgmtProductHierarchyText as _SrvcMgmtProductHierarchyText on $projection.SrvcProductHierarchy = _SrvcMgmtProductHierarchyText.SrvcProductHierarchy
    {
    
        @ObjectModel.text.association: '_SrvcMgmtProductHierarchyText'
  key cast ( ProductHierarchy as abap.char(20) ) as SrvcProductHierarchy,

      _SrvcMgmtProductHierarchyText
}
```
