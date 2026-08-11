---
name: I_REARCHTROBJECTBUILDINGLAND
description: "RE Architecture Object Building or Land"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJECTBUILDINGLAND')/$value
semantic_en: "RE Architecture Object Building or Land"
semantic_vi: "RE Architecture Object Building or Land — CDS view giao diện dựa trên I_REArchitectureObject."
keywords:
  - "architecture"
  - "object"
  - "building"
  - "land"
  - "type"
  - "internal"
  - "real"
  - "estate"
  - "number"
  - "status"
tags:
  - RE
  - component:RE-FX-BD-2CL
  - interface-view
  - RE-FX
  - RE-FX-BD
  - RE-FX-BD-2CL
---
# I_REARCHTROBJECTBUILDINGLAND

**RE Architecture Object Building or Land**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJECTBUILDINGLAND')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectUUID` | ✓ | |  |  | `RAW(16)` | UUID for Real Estate Architecture Object |
| `REArchitectureObjectType` |  | |  |  | `CHAR(4)` | Real Estate Architecture Object Type |
| `InternalRealEstateNumber` |  | |  |  | `CHAR(13)` | Internal Key of Real Estate Object |
| `REStatusObject` |  | |  |  | `CHAR(22)` | Object Number |
| `REArchitectureObjectOID` |  | |  |  | `CHAR(128)` | One Domain Model ID for Real Estate Architecture Object |
| `REArchitectureObjectNumber` |  | |  |  | `CHAR(20)` | Real Estate Architecture Object Number |
| `REArchtrObjectAlternativeID` |  | |  |  | `CHAR(50)` | Architecture Object Alternative ID |
| `REArchitectureObjectName` |  | |  |  | `CHAR(60)` | Real Estate Architecture Object Name |
| `REIdentificationKey` |  | |  |  | `CHAR(45)` | ID Part Key, for example "1000/123" |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Validity Start Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Validity End Date |
| `REAuthorizationGroup` |  | |  |  | `CHAR(40)` | Authorization Group |
| `CreationDateTime` |  | |  |  | `DEC(21)` | Creation Date Time |
| `LastChangeDateTime` |  | |  |  | `DEC(21)` | Last Change Date Time |
| `LocalLastChangeDateTime` |  | |  |  | `DEC(21)` | Local Instance Last Change Date Time |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REArchitectureObjectType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_REArchtrObjectAncestor` | | ✓ | | | | |
| `_REArchtrObjectDescendant` | | ✓ | | | | |
| `_REArchitectureObjRoot` | | ✓ | | | | |
| `_REArchitectureObjSite` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJECTBUILDINGLAND')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_REARCHTROBJECTBUILDINGLAND')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'RE Architecture Object Building or Land'

@ObjectModel.semanticKey: ['REArchitectureObjectOID', 'REArchitectureObjectNumber']
@ObjectModel.representativeKey: 'REArchitectureObjectUUID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET ]

@Metadata.ignorePropagatedAnnotations: true

@Metadata.allowExtensions: true
@Search.searchable: true
@VDM.viewType:  #COMPOSITE

@Analytics.internalName:#LOCAL
@Analytics:{
    dataCategory: #DIMENSION
}
define view entity I_REArchtrObjectBuildingLand
  as select from I_REArchitectureObject
{
      @ObjectModel.text.element: [ 'REArchitectureObjectName' ]
  key REArchitectureObjectUUID,
      @ObjectModel.foreignKey.association: '_REArchitectureObjectType'
      REArchitectureObjectType,
      InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      REStatusObject,
      REArchitectureObjectOID,
      @ObjectModel.text.element: [ 'REArchitectureObjectName' ]
      REArchitectureObjectNumber,
      REArchtrObjectAlternativeID,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      REArchitectureObjectName,
      REIdentificationKey,
      ValidityStartDate,
      ValidityEndDate,
      REAuthorizationGroup,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      LocalLastChangeDateTime,

      /* Associations */
      _REKeyAssgmt,
      _REAuthorizationGroup,
      _REArchitectureObjectType,
      _Text,
      _StatusObject,
      _REArchtrObjectAncestor,
      _REArchtrObjectDescendant,
      _REArchitectureObjRoot,
      _REArchitectureObjSite

}
where
     _REArchitectureObjectType.REArchitectureObjectCategory = '2' //Building
  or _REArchitectureObjectType.REArchitectureObjectCategory = '3' //Land
```
