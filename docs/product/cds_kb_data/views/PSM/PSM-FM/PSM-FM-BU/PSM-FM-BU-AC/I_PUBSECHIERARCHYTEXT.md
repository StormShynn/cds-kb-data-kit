---
name: I_PUBSECHIERARCHYTEXT
description: "Public Sector Hierarchy - Text"
app_component: PSM-FM-BU-AC
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHYTEXT')/$value
semantic_en: "Public Sector Hierarchy - Text"
semantic_vi: "Public Sector Hierarchy - Text — CDS view giao diện (master data) dựa trên Public Sector Hierarchy - Text."
keywords:
  - "public"
  - "sector"
  - "hierarchy"
  - "text"
  - "language"
  - "ctrl"
  - "name"
  - "element"
tags:
  - PSM
  - component:PSM-FM-BU-AC
  - interface-view
  - PSM-FM
  - PSM-FM-BU
  - PSM-FM-BU-AC
---
# I_PUBSECHIERARCHYTEXT

**Public Sector Hierarchy - Text**

| Property | Value |
|---|---|
| App Component | `PSM-FM-BU-AC` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHYTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HierarchyID` | ✓ | |  | `hryid` | `CHAR(42)` | Hierarchy ID |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `CtrlObjNameForWBSElement` |  | |  | `hrytxt` | `CHAR(50)` | Hierarchy description |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHYTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PUBSECHIERARCHYTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPUBSECHIERT'
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Public Sector Hierarchy - Text'

@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
//ATC @AbapCatalog.buffering: { status: #ACTIVE, type: #FULL }
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
     representativeKey: 'HierarchyID',
     usageType: {
         dataClass: #MASTER,
         serviceQuality: #A,
         sizeCategory: #L
     },
     supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT ]
}

define view I_PubSecHierarchyText
  as select distinct from hrrp_directoryt as Text
  inner join I_PubSecHierarchy as PsmHier on  PsmHier.HierarchyID = Text.hryid      
                                          and PsmHier.HierarchyType is not null                          
  association [1..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    key Text.hryid as HierarchyID,
        @Semantics.language: true
        @ObjectModel.foreignKey.association: '_Language'
    key Text.spras as Language,
        @Semantics.text: true
        Text.hrytxt as CtrlObjNameForWBSElement,
        _Language
} group by
  Text.hryid,
  Text.spras,
  Text.hrytxt,
  Text.hryver,
  Text.hryvalto
```
