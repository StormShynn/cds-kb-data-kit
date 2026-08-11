---
name: I_WORKCENTERHIERSTRUCTURE
description: "Work Center Hierarchy Structure"
app_component: PP-BD-WKC-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value
semantic_en: "Work Center Hierarchy Structure"
semantic_vi: "Work Center Hierarchy Structure — CDS view giao diện dựa trên crhs."
keywords:
  - "work"
  - "center"
  - "hierarchy"
  - "structure"
  - "hier"
  - "parent"
  - "type"
  - "child"
tags:
  - PP
  - component:PP-BD-WKC-2CL
  - interface-view
  - lob:manufacturing
  - PP-BD
  - PP-BD-WKC
  - PP-BD-WKC-2CL
---
# I_WORKCENTERHIERSTRUCTURE

**Work Center Hierarchy Structure**

| Property | Value |
|---|---|
| App Component | `PP-BD-WKC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `WrkCtrHierParentType` | ✓ | |  | `objty_hy` | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierParentID` | ✓ | |  | `objid_hy` | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierChildType` | ✓ | |  | `objty_ho` | `CHAR(2)` | Object types of the CIM resource |
| `WrkCtrHierChildID` | ✓ | |  | `objid_ho` | `NUMC(8)` | Object ID of the resource |
| `WrkCtrHierUpObjType` | ✓ | |  | `objty_up` | `CHAR(2)` | Type of resource which is superior in the hierarchy |
| `WrkCtrHierUpObjID` | ✓ | |  | `objid_up` | `NUMC(8)` | ID of superior object in the hierarchy |
| `_Header` | | ✓ | | | | |
| `_WrkCtrHierParentTypeCode` | | ✓ | | | | |
| `_WrkCtrHierChildTypeCode` | | ✓ | | | | |
| `_WrkCtrHierUpObjTypeCode` | | ✓ | | | | |
| `_WrkCtrHierUpObjID` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Header` | `I_WorkCenterHierHeader` | [1..1] |
| `_WrkCtrHierParentTypeCode` | `I_ProductionResourceType` | [1..1] |
| `_WrkCtrHierChildTypeCode` | `I_ProductionResourceType` | [1..1] |
| `_WrkCtrHierUpObjTypeCode` | `I_ProductionResourceType` | [1..1] |
| `_WrkCtrHierUpObjID` | `I_WorkCenterHierHeader` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WORKCENTERHIERSTRUCTURE')/$value)*

```abap
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #MANDATORY
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER}
@EndUserText.label: 'Work Center Hierarchy Structure'
//@AbapCatalog.preserveKey:true
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
@Analytics.technicalName: 'IWCHIERSTRUC'
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE,#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.allowExtensions:true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'WrkCtrHierChildID'
@ObjectModel.sapObjectNodeType.name:'WorkCenterHierGroupStructure'
define view entity I_WorkCenterHierStructure
  as select from crhs
  association [1..1] to I_WorkCenterHierHeader   as _Header                   on  $projection.WrkCtrHierParentType = _Header.WrkCtrHierObjType
                                                                              and $projection.WrkCtrHierParentID   = _Header.WrkCtrHierObjID
  association [1..1] to I_ProductionResourceType as _WrkCtrHierParentTypeCode on  $projection.WrkCtrHierParentType = _WrkCtrHierParentTypeCode.ProductionResourceType
  association [1..1] to I_ProductionResourceType as _WrkCtrHierChildTypeCode  on  $projection.WrkCtrHierChildType = _WrkCtrHierChildTypeCode.ProductionResourceType
  association [1..1] to I_ProductionResourceType as _WrkCtrHierUpObjTypeCode  on  $projection.WrkCtrHierUpObjType = _WrkCtrHierUpObjTypeCode.ProductionResourceType
  association [1..1] to I_WorkCenterHierHeader   as _WrkCtrHierUpObjID        on  $projection.WrkCtrHierUpObjType = _WrkCtrHierUpObjID.WrkCtrHierObjType
                                                                              and $projection.WrkCtrHierUpObjID   = _WrkCtrHierUpObjID.WrkCtrHierObjID
{
      //crhs
      @ObjectModel.foreignKey.association: '_WrkCtrHierParentTypeCode'
  key objty_hy as WrkCtrHierParentType,
      @ObjectModel.foreignKey.association: '_Header'
  key objid_hy as WrkCtrHierParentID,
      @ObjectModel.foreignKey.association: '_WrkCtrHierChildTypeCode'
  key objty_ho as WrkCtrHierChildType,
  key objid_ho as WrkCtrHierChildID,
      @ObjectModel.foreignKey.association: '_WrkCtrHierUpObjTypeCode'
  key objty_up as WrkCtrHierUpObjType,
      @ObjectModel.foreignKey.association: '_WrkCtrHierUpObjID'
  key objid_up as WrkCtrHierUpObjID,
      _Header,
      _WrkCtrHierParentTypeCode,
      _WrkCtrHierChildTypeCode,
      _WrkCtrHierUpObjTypeCode,
      _WrkCtrHierUpObjID

}
```
