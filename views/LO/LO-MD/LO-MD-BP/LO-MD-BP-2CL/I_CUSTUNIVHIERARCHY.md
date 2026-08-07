---
name: I_CUSTUNIVHIERARCHY
description: Custunivhierarchy
app_component: LO-MD-BP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-2CL
  - lob:Logistics General
---
# I_CUSTUNIVHIERARCHY

**Custunivhierarchy**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `UniversalHierarchy` | ✓ | |  | `hryid` |  |  |
| `CustUnivHierarchyValidEndDate` | ✓ | |  | `hryvalto` |  |  |
| `CustUnivHierarchyValidStartDte` |  | |  | `hryvalfrom` |  |  |
| `CustUnivHierarchyShortID` |  | |  | `hrysid` |  |  |
| `SalesOrganization` |  | |  | `salesorganization` |  |  |
| `DistributionChannel` |  | |  | `distributionchannel` |  |  |
| `Division` |  | |  | `division` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CustUnivHierarchyNodeText_2` | [0..*] |

## Source Code

```abap
@Analytics.technicalName: 'ICUSTUH'
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Customer Universal Hierarchy'
@VDM.viewType: #BASIC
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #L,
  dataClass: #MASTER
}
@ObjectModel.representativeKey: 'UniversalHierarchy'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true

define view entity I_CustUnivHierarchy
as select from hrrp_dir_n as dir

association [0..*] to I_CustUnivHierarchyNodeText_2   as _Text  on $projection.UniversalHierarchy             = _Text.UniversalHierarchy
                                                                and $projection.CustUnivHierarchyValidEndDate = _Text.CustUnivHierarchyValidEndDate
{
  @ObjectModel.text.association: '_Text'
  key dir.hryid                                                 as UniversalHierarchy,
  @Semantics.businessDate.to: true
  key dir.hryvalto                                              as CustUnivHierarchyValidEndDate,
  @Semantics.businessDate.from: true
  dir.hryvalfrom                                                as CustUnivHierarchyValidStartDte,
  dir.hrysid                                                    as CustUnivHierarchyShortID,
  dir.salesorganization                                         as SalesOrganization,
  dir.distributionchannel                                       as DistributionChannel,
  dir.division                                                  as Division,
                                      
  //Association
  _Text
}
where dir.hrytyp  = 'CH02' or dir.hrytyp  = 'CH01'
```
