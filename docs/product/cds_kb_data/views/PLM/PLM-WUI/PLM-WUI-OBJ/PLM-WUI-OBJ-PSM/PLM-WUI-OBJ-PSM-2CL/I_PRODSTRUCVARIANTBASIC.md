---
name: I_PRODSTRUCVARIANTBASIC
description: "Product Structure Variant Basic"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value
semantic_en: "Product Structure Variant Basic"
semantic_vi: "Product Structure Variant Basic — CDS view giao diện dựa trên posvid."
keywords:
  - "product"
  - "structure"
  - "variant"
  - "basic"
  - "prod"
  - "struc"
  - "unique"
  - "name"
  - "parent"
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
# I_PRODSTRUCVARIANTBASIC

**Product Structure Variant Basic**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` | ✓ | |  | `pvguid` | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantUniqueID` |  | |  | `bintohex( pvguid )` | `CHAR(32)` |  |
| `ProductStructureVariantName` |  | |  | `pvname` | `CHAR(8)` | Variant |
| `ProdStructureVariantParentUUID` |  | |  | `pnguid` | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureVariantType` |  | |  | `pvtype` | `CHAR(8)` | iPPE Variant Type |
| `ProductStructureGnrcObjType` |  | | `_ppe_c_i2g` | `ProductStructureGnrcObjType` | `CHAR(10)` | Object Type |
| `ProductStructureCreationDate` |  | |  | `creadat` | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | |  | `creaby` | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | |  | `chngdat` | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | |  | `chngby` | `CHAR(12)` | Name of Person Who Changed Object |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ppe_c_i2g` | `I_ProdStrucVarGnrcObjTypeMap` | [0..1] |
| `_LogAccMObjectTypeActive` | `I_ProdStrucLogAccMActive` | [0..1] |
| `_LogAccMObjSecureIDAssgmt` | `I_ProdStrucLogAccMSecureAssgmt` | [0..*] |
| `_LogAccMObjectUserAuthzn` | `I_ProdStrucLogAccMUserAuthzn` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTBASIC')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IVARIANTBASIC'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProductStructureVariantUUID'
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Variant Basic'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_ProdStrucVariantBasic
  as select from posvid
  association [0..1] to I_ProdStrucVarGnrcObjTypeMap as _ppe_c_i2g                on posvid.pvtype = _ppe_c_i2g.ProductStructureVariantType
  association [0..1] to I_ProdStrucLogAccMActive     as _LogAccMObjectTypeActive  on $projection.productstructuregnrcobjtype = _LogAccMObjectTypeActive.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMSecureAssgmt    as _LogAccMObjSecureIDAssgmt on  $projection.ProdStrucVariantUniqueID = _LogAccMObjSecureIDAssgmt.LogAccMObjectID
                                                                                       and $projection.productstructuregnrcobjtype = _LogAccMObjSecureIDAssgmt.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMUserAuthzn     as _LogAccMObjectUserAuthzn  on  $projection.ProdStrucVariantUniqueID = _LogAccMObjectUserAuthzn.LogAccMObjectID
                                                                                   // and (
                                                                                      // _LogAccMObjectUserAuthzn.LogAccMObjectType          = 'PLM_PPEPV'
                                                                                      // or _LogAccMObjectUserAuthzn.LogAccMObjectType       = 'PLM_PPEPIV'
                                                                                    // )
                                                                                   and (
                                                                                           _LogAccMObjectUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPV'
                                                                                        or _LogAccMObjectUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPIV'
                                                                                    )
                                                                                   and (
                                                                                      _LogAccMObjectUserAuthzn.LogAccMUserAuthznFrom      = '03'
                                                                                      or _LogAccMObjectUserAuthzn.LogAccMUserAuthznFrom   = '*'
                                                                                    )
                                                                                   and _LogAccMObjectUserAuthzn.LogAccMUserAuthznField    = 'ACTVT'
                                                                                   and (
                                                                                      _LogAccMObjectUserAuthzn.LogAccMUserEntityID        = $session.user
                                                                                      or _LogAccMObjectUserAuthzn.UserID                  = $session.user
                                                                                    )
{
  key pvguid                             as ProductStructureVariantUUID,
      bintohex( pvguid )                 as ProdStrucVariantUniqueID,
      pvname                             as ProductStructureVariantName,
      pnguid                             as ProdStructureVariantParentUUID,
      pvtype                             as ProductStructureVariantType,
      _ppe_c_i2g.ProductStructureGnrcObjType,
      //@Semantics.businessDate.createdAt: true
      @Semantics.businessDate.at: true
      creadat                            as ProductStructureCreationDate,
      @Semantics.user.createdBy: true
      creaby                             as ProductStructureCreatedByUser,
      //@Semantics.businessDate.lastChangedAt: true
      @Semantics.businessDate.at: true
      chngdat                            as ProductStrucLastChangedDate,
      @Semantics.user.lastChangedBy: true
      chngby                             as ProductStrucLastChangedByUser,
      //_LogAccMObjSecureIDAssgmt.LogAccMObjectID,
      _LogAccMObjectTypeActive,
      _LogAccMObjSecureIDAssgmt,
      _LogAccMObjectUserAuthzn
} where  applobj_type = 'CMP'  and pnguid != hextobin('00000000000000000000000000000000')
```
