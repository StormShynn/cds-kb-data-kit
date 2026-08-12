---
name: I_REARCHITECTUREOBJECT
description: "Rearchitectureobject"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REARCHITECTUREOBJECT

**Rearchitectureobject**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REArchitectureObjectUUID` | ✓ | |  | `architectureobjectuuid` |  |  |
| `REArchitectureObjectType` |  | |  | `objtype` |  |  |
| `InternalRealEstateNumber` |  | |  | `intreno` |  |  |
| `REStatusObject` |  | |  | `objnr` |  |  |
| `REArchitectureObjectOID` |  | |  | `oid` |  |  |
| `REArchitectureObjectNumber` |  | |  | `obnr` |  |  |
| `REArchtrObjectAlternativeID` |  | |  | `alternativeid` |  |  |
| `REArchitectureObjectName` |  | |  | `name` |  |  |
| `REArchitectureObjectParentOID` |  | | `_REArchitectureObjectNode` | `REArchitectureObjectParentOID` |  |  |
| `REIdentificationKey` |  | | `_REKeyAssgmt` | `REIdentificationKey` |  |  |
| `ValidityStartDate` |  | |  | `validfrom` |  |  |
| `ValidityEndDate` |  | |  | `validto` |  |  |
| `REAuthorizationGroup` |  | |  | `authgrp` |  |  |
| `CreationDateTime` |  | |  | `creationdatetime` |  |  |
| `LastChangeDateTime` |  | |  | `lastchangedatetime` |  |  |
| `LocalLastChangeDateTime` |  | |  | `locallastchangedatetime` |  |  |
| `_REKeyAssgmt` | | ✓ | | | | |
| `_REAuthorizationGroup` | | ✓ | | | | |
| `_REArchitectureObjectType` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_StatusObject` | | ✓ | | | | |
| `_REArchitectureObjectNode` | | ✓ | | | | |
| `_REArchtrObjectAncestor` | | ✓ | | | | |
| `_REArchtrObjectDescendant` | | ✓ | | | | |
| `_REArchitectureObjRoot` | | ✓ | | | | |
| `_REArchitectureObjSite` | | ✓ | | | | |
| `_REArchitectureObjBuilding` | | ✓ | | | | |
| `_REArchitectureObjLand` | | ✓ | | | | |
| `_REArchitectureObjAddress` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REAuthorizationGroup` | `I_REAuthorizationGroup` | [0..1] |
| `_REArchitectureObjectType` | `I_REArchitectureObjectType` | [1..1] |
| `_Text` | `I_REArchitectureObjectText` | [1..*] |
| `_StatusObject` | `I_StatusObject` | [0..1] |
| `_REArchitectureObjectNode` | `I_REArchitectureObjectNode` | [0..1] |
| `_REArchtrObjectAncestor` | `I_REArchtrObjectAncestor` | [0..*] |
| `_REArchtrObjectDescendant` | `I_REArchtrObjectDescendant` | [0..*] |
| `_REArchitectureObjRoot` | `I_REArchtrObjectAncestor` | [1..1] |
| `_REArchitectureObjSite` | `I_REArchtrObjectAncestor` | [0..1] |
| `_REArchitectureObjBuilding` | `I_REArchtrObjectAncestor` | [0..1] |
| `_REArchitectureObjLand` | `I_REArchtrObjectAncestor` | [0..1] |
| `_REArchitectureObjAddress` | `I_REArchitectureObjAddress` | [1..1] |
| `_Extension` | `E_REArchitectureObject` | [1..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_StatusObject', '_REArchitectureObjAddress']
}
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@EndUserText.label: 'Real Estate Architecture Object'
@ObjectModel: {
  representativeKey: 'REArchitectureObjectUUID',
  semanticKey: ['REArchitectureObjectOID', 'REArchitectureObjectNumber'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateArchitectureObject',
  objectIdentifier.oidElement: 'REArchitectureObjectOID'
}
@ODM.oid: 'REArchitectureObjectOID'
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_REArchitectureObject
  as select from viobbd
  association [1..1] to I_REKeyAssgmt                as _REKeyAssgmt                on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [0..1] to I_REAuthorizationGroup       as _REAuthorizationGroup       on  $projection.REAuthorizationGroup           = _REAuthorizationGroup.REAuthorizationGroup
                                                                                    and _REAuthorizationGroup.RealEstateObjectType = 'J8'
  association [1..1] to I_REArchitectureObjectType   as _REArchitectureObjectType   on  $projection.REArchitectureObjectType = _REArchitectureObjectType.REArchitectureObjectType
  association [1..*] to I_REArchitectureObjectText   as _Text                       on  $projection.REArchitectureObjectUUID = _Text.REArchitectureObjectUUID

  association [0..1] to I_StatusObject               as _StatusObject               on  $projection.REStatusObject = _StatusObject.StatusObject

  association [0..1] to I_REArchitectureObjectNode   as _REArchitectureObjectNode   on  $projection.REArchitectureObjectUUID = _REArchitectureObjectNode.REArchitectureObjectUUID
  association [0..*] to I_REArchtrObjectAncestor     as _REArchtrObjectAncestor     on  $projection.REArchitectureObjectOID             =  _REArchtrObjectAncestor.REArchitectureObjectOID
                                                                                    and _REArchtrObjectAncestor.REArchitectureObjectOID <> _REArchtrObjectAncestor.REArchtrObjectAncestorOID
  association [0..*] to I_REArchtrObjectDescendant   as _REArchtrObjectDescendant   on  $projection.REArchitectureObjectOID               =  _REArchtrObjectDescendant.REArchitectureObjectOID
                                                                                    and _REArchtrObjectDescendant.REArchitectureObjectOID <> _REArchtrObjectDescendant.REArchtrObjectDescendantOID
  association [1..1] to I_REArchtrObjectAncestor     as _REArchitectureObjRoot      on  $projection.REArchitectureObjectOID   = _REArchitectureObjRoot.REArchitectureObjectOID
                                                                                    and _REArchitectureObjRoot.HierarchyLevel = 1
  association [0..1] to I_REArchtrObjectAncestor     as _REArchitectureObjSite      on  $projection.REArchitectureObjectOID                 = _REArchitectureObjSite.REArchitectureObjectOID
                                                                                    and _REArchitectureObjSite.REArchitectureObjectCategory = '1'
  association [0..1] to I_REArchtrObjectAncestor     as _REArchitectureObjBuilding  on  $projection.REArchitectureObjectOID                     = _REArchitectureObjBuilding.REArchitectureObjectOID
                                                                                    and _REArchitectureObjBuilding.REArchitectureObjectCategory = '2'
  association [0..1] to I_REArchtrObjectAncestor     as _REArchitectureObjLand      on  $projection.REArchitectureObjectOID                 = _REArchitectureObjLand.REArchitectureObjectOID
                                                                                    and _REArchitectureObjLand.REArchitectureObjectCategory = '3'

  association [1..1] to I_REArchitectureObjAddress   as _REArchitectureObjAddress   on  $projection.InternalRealEstateNumber = _REArchitectureObjAddress.InternalRealEstateNumber

  // extensibility
  association [1..1] to E_REArchitectureObject       as _Extension                  on  $projection.REArchitectureObjectUUID = _Extension.REArchitectureObjectUUID
{
      @ObjectModel.text.element: [ 'REArchitectureObjectName' ]
  key architectureobjectuuid                                     as REArchitectureObjectUUID,
      @ObjectModel.foreignKey.association: '_REArchitectureObjectType'
      objtype                                                    as REArchitectureObjectType,
      intreno                                                    as InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_StatusObject'
      objnr                                                      as REStatusObject,
      oid                                                        as REArchitectureObjectOID,
      @ObjectModel.text.element: [ 'REArchitectureObjectName' ]
      obnr                                                       as REArchitectureObjectNumber,
      //      extident                         as REExternalIDArchitectureObject,
      alternativeid                                              as REArchtrObjectAlternativeID,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.ranking: #LOW
      name                                                       as REArchitectureObjectName,
      _REArchitectureObjectNode.REArchitectureObjectParentOID    as REArchitectureObjectParentOID,
      _REKeyAssgmt.REIdentificationKey                           as REIdentificationKey,
      validfrom                                                  as ValidityStartDate,
      validto                                                    as ValidityEndDate,
      @ObjectModel.foreignKey.association: '_REAuthorizationGroup'
      authgrp                                                    as REAuthorizationGroup,
      @Semantics.systemDateTime.createdAt: true
      creationdatetime                                           as CreationDateTime,
      @Semantics.systemDateTime.lastChangedAt: true
      lastchangedatetime                                         as LastChangeDateTime,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      locallastchangedatetime                                    as LocalLastChangeDateTime,

      /* Associations */
      _REKeyAssgmt,
      _REAuthorizationGroup,
      _REArchitectureObjectType,
      _Text,
      _StatusObject,
      _REArchitectureObjectNode,
      _REArchtrObjectAncestor,
      _REArchtrObjectDescendant,
      _REArchitectureObjRoot,
      _REArchitectureObjSite,
      _REArchitectureObjBuilding,
      _REArchitectureObjLand,
      _REArchitectureObjAddress
}
```
