---
name: I_WORKCENTERHIERHEADER
description: "Work Center Hierarchy Header"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value
semantic_en: "Work Center Hierarchy Header"
semantic_vi: "Work Center Hierarchy Header — CDS view giao diện dựa trên crhh."
keywords:
  - "work"
  - "center"
  - "hierarchy"
  - "header"
  - "hier"
  - "type"
  - "name"
  - "plant"
  - "group"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
---
# I_WORKCENTERHIERHEADER

**Work Center Hierarchy Header**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrkCtrHierObjType` | ✓ | |  | `objty` | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierObjID` | ✓ | |  | `objid` | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierName` |  | |  | `name` | `CHAR(10)` | Name of Hierarchy |
| `WrkCtrHierPlant` |  | |  | `werks` | `CHAR(4)` | Plant |
| `WorkCenterGroupType` |  | |  | `grptype` | `CHAR(10)` | Work Center Group Type |
| `IsDeleted` |  | |  | `loekz` | `CHAR(1)` | Checkbox |
| `ShiftReportType` |  | |  | `srtype` | `CHAR(10)` | Shift Report Type |
| `ShiftNoteType` |  | |  | `sntype` | `CHAR(2)` | Shift Note Type |
| `CreationDate` |  | |  | `andat` | `DATS(8)` | Date Record Created On |
| `CreatedByUser` |  | |  | `annam` | `CHAR(12)` | User Who Created Record |
| `LastChangeDate` |  | |  | `aedat` | `DATS(8)` | Last Changed On |
| `LastChangedByUser` |  | |  | `aenam` | `CHAR(12)` | Name of Person Who Changed Object |
| `_Text` | | ✓ | | | | |
| `_ProductionResourceTypeCode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_WorkCenterHierarchyHeaderTxt` | [0..*] |
| `_ProductionResourceTypeCode` | `I_ProductionResourceType` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERHEADER')/$value)*

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@EndUserText.label: 'Work Center Hierarchy Header'
@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
       automatic : true
       }
     },
internalName: #LOCAL
}
@Analytics.technicalName: 'IWCHIERHDR'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'WrkCtrHierObjID'
@ObjectModel.sapObjectNodeType.name: 'WorkCenterGroup'
define view entity I_WorkCenterHierHeader
  as select from crhh
  association [0..*] to I_WorkCenterHierarchyHeaderTxt as _Text                       on  $projection.WrkCtrHierObjType = _Text.ProductionResourceType
                                                                                      and $projection.WrkCtrHierObjID   = _Text.ProductionResourceInternalID
  association [1..1] to I_ProductionResourceType       as _ProductionResourceTypeCode on  $projection.WrkCtrHierObjType = _ProductionResourceTypeCode.ProductionResourceType
{
      //crhh
      @ObjectModel.foreignKey.association: '_ProductionResourceTypeCode'
  key objty   as WrkCtrHierObjType,
  key objid   as WrkCtrHierObjID,
      name    as WrkCtrHierName,
      werks   as WrkCtrHierPlant,
      grptype as WorkCenterGroupType,
      loekz   as IsDeleted,
      srtype  as ShiftReportType,
      sntype  as ShiftNoteType,
      andat   as CreationDate,
      annam   as CreatedByUser,
      aedat   as LastChangeDate,
      aenam   as LastChangedByUser,
      _Text,
      _ProductionResourceTypeCode
}
```
