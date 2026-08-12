---
name: I_HIERRTMERPRSTNNDEADDLATTRIB
description: "Hierrtmerprstnndeaddlattrib"
app_component: FI-FIO-GL-HIE-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - interface-view
  - component:FI-FIO-GL-HIE-2CL
  - lob:Finance
---
# I_HIERRTMERPRSTNNDEADDLATTRIB

**Hierrtmerprstnndeaddlattrib**

| Property | Value |
|---|---|
| App Component | `FI-FIO-GL-HIE-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `RuntimeHierarchy` | ✓ | |  | `hryid` |  |  |
| `ValidityEndDate` | ✓ | |  | `cast(hryvalto as fis_datbi preserving type )` |  |  |
| `HierarchyNode` | ✓ | |  | `hrynode` |  |  |
| `HierarchyNodeClass` | ✓ | |  | `nodecls` |  |  |
| `ParentNode` | ✓ | |  | `parnode` |  |  |
| `HierarchyNodeAttributeName` | ✓ | |  | `hryattrname` |  |  |
| `HierarchyType` | ✓ | |  | `hrytyp` |  |  |
| `HierNodeAttributeRangeFromVal` | ✓ | |  | `hryattrvalue` |  |  |
| `HierNodeAttributeRangeToVal` |  | |  | `hryattrhvalue` |  |  |
| `_Hierarchy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Hierarchy` | `I_HierRuntimeRepresentation` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IHRRPADDLATTRNOD'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Hierarchy Node Attribute'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel: {
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #B,
    sizeCategory: #L
   }
}
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true

define view I_HierRtmeRprstnNdeAddlAttrib
  as select from hrrp_attr_node_n
  association [0..1] to I_HierRuntimeRepresentation as _Hierarchy on  $projection.RuntimeHierarchy = _Hierarchy.RuntimeHierarchy
                                                                  and $projection.ValidityEndDate  = _Hierarchy.ValidityEndDate
{
  key       hryid                                        as RuntimeHierarchy,
            @Semantics.businessDate.to: true
  key       cast(hryvalto as fis_datbi preserving type ) as ValidityEndDate,
  key       hrynode                                      as HierarchyNode,
  key       nodecls                                      as HierarchyNodeClass,
  key       parnode                                      as ParentNode,
  key       hryattrname                                  as HierarchyNodeAttributeName,
  key       hrytyp                                       as HierarchyType,
  key       hryattrvalue                                 as HierNodeAttributeRangeFromVal,
            hryattrhvalue                                as HierNodeAttributeRangeToVal,

            _Hierarchy
}
```
