---
name: I_PRODSTRUCVARIANTCHANGESTATE
description: "Product Structure Variant Change State"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value
semantic_en: "Product Structure Variant Change State"
semantic_vi: "Product Structure Variant Change State — CDS view giao diện dựa trên pvcmp."
keywords:
  - "product"
  - "structure"
  - "variant"
  - "change"
  - "state"
  - "prod"
  - "struc"
  - "unique"
  - "basic"
  - "data"
  - "number"
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
# I_PRODSTRUCVARIANTCHANGESTATE

**Product Structure Variant Change State**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` | ✓ | |  | `pvguid` | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantChgStateIntID` | ✓ | |  | `pvcnt` | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantUniqueID` |  | | `_VariantBasic` | `ProdStrucVariantUniqueID` | `CHAR(32)` |  |
| `ProdStrucVarBasicDataChgState` |  | |  | `pvcdcnt` | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantChangeNumber` |  | |  | `aennr` | `CHAR(12)` | Change Number in iPPE |
| `ProdStrucVarIsMrkdForDeletion` |  | |  | `delflg` | `CHAR(1)` | Deletion Indicator |
| `ProdStrucVarChgNmbrDescription` |  | |  | `aetxt` | `CHAR(40)` | Change number description |
| `AuthorizationGroup` |  | |  | `aenbe` | `CHAR(4)` | Change Master Authorization Group |
| `ProductStructureGnrcObjType` |  | | `_VariantBasic` | `ProductStructureGnrcObjType` | `CHAR(10)` | Object Type |
| `_VariantBasic` | | ✓ | | | | |
| `_LogAccMObjectTypeActive` | | ✓ | | | | |
| `_LogAccMObjSecureIDAssgmt` | | ✓ | | | | |
| `_LogAccMObjectUserAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VariantBasic` | `I_ProdStrucVariantBasic` | [0..1] |
| `_LogAccMObjectTypeActive` | `I_ProdStrucLogAccMActive` | [0..1] |
| `_LogAccMObjSecureIDAssgmt` | `I_ProdStrucLogAccMSecureAssgmt` | [0..*] |
| `_LogAccMObjectUserAuthzn` | `I_ProdStrucLogAccMUserAuthzn` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODSTRUCVARIANTCHANGESTATE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSVARCHGSTATE'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProdStrucVariantChgStateIntID'


@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Variant Change State'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_ProdStrucVariantChangeState
  as select  from pvcmp
    left outer join       aenr on pvcmp.aennr = aenr.aennr
  association [0..1] to I_ProdStrucVariantBasic as _VariantBasic on $projection.ProductStructureVariantUUID = _VariantBasic.ProductStructureVariantUUID
  association [0..1] to I_ProdStrucLogAccMActive  as _LogAccMObjectTypeActive       on  $projection.productstructuregnrcobjtype = _LogAccMObjectTypeActive.LogAccMObjectType 
  association [0..*] to I_ProdStrucLogAccMSecureAssgmt as _LogAccMObjSecureIDAssgmt on  $projection.prodstrucvariantuniqueid = _LogAccMObjSecureIDAssgmt.LogAccMObjectID
                                                                                    and $projection.productstructuregnrcobjtype = _LogAccMObjSecureIDAssgmt.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMUserAuthzn  as _LogAccMObjectUserAuthzn  on  $projection.prodstrucvariantuniqueid = _LogAccMObjectUserAuthzn.LogAccMObjectID
                                                                                // and (
                                                                                   // _LogAccMObjectUserAuthzn.LogAccMObjectType          = 'PLM_PPEPV'
                                                                                   // or _LogAccMObjectUserAuthzn.LogAccMObjectType       = 'PLM_PPEPIV'
                                                                                 // )
                                                                                and (
                                                                                   _LogAccMObjectUserAuthzn.LogAccMUserAuthznObject    = 'PLM_PPEPV'
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
      @ObjectModel.foreignKey.association: '_VariantBasic'
  key pvcmp.pvguid                       as ProductStructureVariantUUID,
  key pvcmp.pvcnt                        as ProdStrucVariantChgStateIntID,
      ///bintohex( pvguid )                 as ProdStrucVariantUniqueID,
      _VariantBasic.ProdStrucVariantUniqueID,
      pvcmp.pvcdcnt                      as ProdStrucVarBasicDataChgState,
      pvcmp.aennr                        as ProdStrucVariantChangeNumber,
      pvcmp.delflg                       as ProdStrucVarIsMrkdForDeletion,
      aenr.aetxt                         as ProdStrucVarChgNmbrDescription,
      aenr.aenbe                         as AuthorizationGroup,
      _VariantBasic.ProductStructureGnrcObjType,
      //_LogAccMObjSecureIDAssgmt.LogAccMObjectID,
      _VariantBasic,
      _LogAccMObjectTypeActive,
      _LogAccMObjSecureIDAssgmt,
      _LogAccMObjectUserAuthzn
}
```
