---
name: I_PRODUCTSTRUCTURENODE_2
description: "Product Structure Node"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value
semantic_en: "Product Structure Node"
semantic_vi: "Product Structure Node — CDS view giao diện dựa trên I_ProductStructureNodeBasic."
keywords:
  - "product"
  - "structure"
  - "node"
  - "unique"
  - "name"
  - "class"
  - "internal"
  - "type"
tags:
  - PLM
  - bo:material
  - component:PLM-WUI-OBJ-PSM-2CL
  - interface-view
  - PLM-WUI
  - PLM-WUI-OBJ
  - PLM-WUI-OBJ-PSM
  - PLM-WUI-OBJ-PSM-2CL
  - product
---
# I_PRODUCTSTRUCTURENODE_2

**Product Structure Node**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureNodeUUID` | ✓ | |  |  | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureNodeUniqueID` |  | |  |  | `CHAR(32)` |  |
| `ProductStructureNodeName` |  | |  |  | `CHAR(40)` | iPPE Node Description |
| `ClassInternalID` |  | | `_Node` | `ClassInternalID` | `NUMC(10)` | Internal Class Number |
| `ProductStructureNodeType` |  | | `_Node` | `ProductStructureNodeType` | `CHAR(8)` | iPPE Node Type |
| `ProductStructureGnrcObjType` |  | | `_Node` | `ProductStructureGnrcObjType` | `CHAR(10)` | Object Type |
| `ProductStructureCreationDate` |  | |  |  | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | |  |  | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | |  |  | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `_Class` | | ✓ | | | | |
| `_ProdStrucLogAccMActive` | | ✓ | | | | |
| `_ProdStrucSecureIDAssgmt` | | ✓ | | | | |
| `_ProdStrucLogAccMUserAuthzn` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Class` | `I_ClfnClass` | [0..1] |
| `_ProdStrucLogAccMActive` | `I_ProdStrucLogAccMActive` | [0..1] |
| `_ProdStrucSecureIDAssgmt` | `I_ProdStrucLogAccMSecureAssgmt` | [0..*] |
| `_ProdStrucLogAccMUserAuthzn` | `I_ProdStrucLogAccMUserAuthzn` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTURENODE_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSNODE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'ProductStructureNodeUUID'

@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Node'
@ClientHandling.algorithm: #SESSION_VARIABLE

define view I_ProductStructureNode_2
  as select from I_ProductStructureNodeBasic            as _Node
  association [0..1] to I_ClfnClass                     as _Class                       on _Node.ClassInternalID                                = _Class.ClassInternalID
  association [0..1] to I_ProdStrucLogAccMActive        as _ProdStrucLogAccMActive      on  $projection.ProductStructureGnrcObjType             = _ProdStrucLogAccMActive.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMSecureAssgmt  as _ProdStrucSecureIDAssgmt     on  $projection.ProductStructureNodeUniqueID            = _ProdStrucSecureIDAssgmt.LogAccMObjectID
                                                                                        and _ProdStrucSecureIDAssgmt.LogAccMObjectType          = _Node.ProductStructureGnrcObjType
   association [0..*] to I_ProdStrucLogAccMUserAuthzn    as _ProdStrucLogAccMUserAuthzn  on  $projection.ProductStructureNodeUniqueID            = _ProdStrucLogAccMUserAuthzn.LogAccMObjectID
                                                                                        and (
                                                                                            _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPF'
                                                                                        or  _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPI'
                                                                                        or  _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPVW'
                                                                                        )
                                                                                        and (
                                                                                           _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznFrom    = '03'
                                                                                        or _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznFrom    = '*'
                                                                                        )
                                                                                        and _ProdStrucLogAccMUserAuthzn.LogAccMUserAuthznField  = 'ACTVT'
                                                                                        and (
                                                                                           _ProdStrucLogAccMUserAuthzn.LogAccMUserEntityID      = $session.user
                                                                                        or _ProdStrucLogAccMUserAuthzn.UserID                   = $session.user
                                                                                        ) 
{
      @ObjectModel.text.association: '_Text'
  key ProductStructureNodeUUID,
      //bintohex( ProductStructureNodeUUID ) as ProductStructureNodeUniqueID,
      ProductStructureNodeUniqueID,
      ProductStructureNodeName,
      _Node.ClassInternalID,
      _Node.ProductStructureNodeType,
      _Node.ProductStructureGnrcObjType,
      @Semantics.businessDate.at: true
      @Semantics.businessDate.createdAt: true
      ProductStructureCreationDate,
      @Semantics.user.createdBy: true
      ProductStructureCreatedByUser,
      @Semantics.businessDate.at: true
      @Semantics.businessDate.lastChangedAt: true
      ProductStrucLastChangedDate,
      @Semantics.user.lastChangedBy: true
      ProductStrucLastChangedByUser,
      _Text,
      _Class,
      _ProdStrucLogAccMActive,
      _ProdStrucSecureIDAssgmt,
      _ProdStrucLogAccMUserAuthzn
}
```
