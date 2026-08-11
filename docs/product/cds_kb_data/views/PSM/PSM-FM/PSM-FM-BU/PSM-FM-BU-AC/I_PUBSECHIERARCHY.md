---
name: I_PUBSECHIERARCHY
description: "Public Sector Hierarchy"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHY')/$value
semantic_en: "Public Sector Hierarchy"
semantic_vi: "Public Sector Hierarchy — CDS view giao diện dựa trên Public Sector Hierarchy."
keywords:
  - "public"
  - "sector"
  - "hierarchy"
  - "type"
tags:
  - PSM
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECHIERARCHY

**Public Sector Hierarchy**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyID` | ✓ | |  | `hryid` | `CHAR(42)` | Hierarchy ID |
| `HierarchyType` |  | |  | `hrytyp` | `CHAR(4)` | Hierarchy Type |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_PubSecHierarchyText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHY')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECHIER'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@ObjectModel.representativeKey: 'HierarchyID'
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Hierarchy'
@ClientHandling.type: #CLIENT_DEPENDENT
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE ]
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true

define view I_PubSecHierarchy as select distinct from hrrp_directory as HrDir
  association [0..*] to I_PubSecHierarchyText as _Text on $projection.HierarchyID = _Text.HierarchyID
{
  @ObjectModel.text.association: '_Text'
  key HrDir.hryid as HierarchyID,
      HrDir.hrytyp as HierarchyType,
      _Text
}
where HrDir.hrytyp = '0101' or HrDir.hrytyp = '0110' or HrDir.hrytyp = '0111' or HrDir.hrytyp = '0112' or HrDir.hrytyp = '0113' 
   or HrDir.hrytyp = '0114' or HrDir.hrytyp = '0115' or HrDir.hrytyp = '0116' or HrDir.hrytyp = '0314'
group by
  HrDir.hryid,
  HrDir.hrytyp,
  HrDir.hryver,
  HrDir.hryvalto
```
