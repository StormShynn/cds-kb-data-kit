---
name: I_PRODUCTSTRUCTUREVARIANT_2
description: "Product Structure Variant"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value
semantic_en: "Product Structure Variant"
semantic_vi: "Product Structure Variant — CDS view giao diện dựa trên I_ProdStrucVariantBasic."
keywords:
  - "product"
  - "structure"
  - "variant"
  - "prod"
  - "struc"
  - "state"
  - "unique"
  - "name"
  - "parent"
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
# I_PRODUCTSTRUCTUREVARIANT_2

**Product Structure Variant**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` | ✓ | | `_Variant` | `ProductStructureVariantUUID` | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantChgStateIntID` | ✓ | | `_VntChangeState` | `ProdStrucVariantChgStateIntID` | `NUMC(8)` | Internal Counter for iPPE Objects |
| `ProdStrucVariantUniqueID` |  | | `_Variant` | `ProdStrucVariantUniqueID` | `CHAR(32)` |  |
| `ProductStructureVariantName` |  | | `_Variant` | `ProductStructureVariantName` | `CHAR(8)` | Variant |
| `ProdStructureVariantParentUUID` |  | | `_Variant` | `ProdStructureVariantParentUUID` | `RAW(16)` | Internal Number of iPPE Node |
| `ProductStructureCreationDate` |  | | `_Variant` | `ProductStructureCreationDate` | `DATS(8)` | Date of Application |
| `ProductStructureCreatedByUser` |  | | `_Variant` | `ProductStructureCreatedByUser` | `CHAR(12)` | User who created record |
| `ProductStrucLastChangedDate` |  | | `_Variant` | `ProductStrucLastChangedDate` | `DATS(8)` | Date of Last Change |
| `ProductStrucLastChangedByUser` |  | | `_Variant` | `ProductStrucLastChangedByUser` | `CHAR(12)` | Name of Person Who Changed Object |
| `ProdStrucVariantChangeNumber` |  | | `_VntChangeState` | `ProdStrucVariantChangeNumber` | `CHAR(12)` | Change Number in iPPE |
| `ProdStrucVariantConcatenated` |  | |  | `concat(_Variant.ProdStrucVariantUniqueID, _VntChangeState.ProdStrucVariantChangeNumber)` | `CHAR(44)` |  |
| `AuthorizationGroup` |  | | `_VntChangeState` | `AuthorizationGroup` | `CHAR(4)` | Change Master Authorization Group |
| `ProdStrucVarIsMrkdForDeletion` |  | | `_VntChangeState` | `ProdStrucVarIsMrkdForDeletion` | `CHAR(1)` | Deletion Indicator |
| `ProdStrucVarChgNmbrDescription` |  | | `_VntChangeState` | `ProdStrucVarChgNmbrDescription` | `CHAR(40)` | Change number description |
| `ProductStructureVariantQty` |  | | `_VariantMaterial` | `ProductStructureVariantQty` | `QUAN(13)` | Fixed Quantity in Variant of iPPE Product Structure |
| `ProductStructureVariantUnit` |  | | `_VariantMaterial` | `ProductStructureVariantUnit` | `UNIT(3)` | Unit of Measure |
| `Material` |  | | `_VariantMaterial` | `Material` | `CHAR(40)` | Product |
| `MaterialAuthorizationGroup` |  | | `_VariantMaterial` | `MaterialAuthorizationGroup` | `CHAR(4)` | Authorization Group |
| `ProductStructureVariantType` |  | | `_Variant` | `ProductStructureVariantType` | `CHAR(8)` | iPPE Variant Type |
| `ProductStructureGnrcObjType` |  | | `_Variant` | `ProductStructureGnrcObjType` | `CHAR(10)` | Object Type |
| `_VariantChangeState` | | ✓ | | | | |
| `_VariantBasic` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_PSVMasterLogAccMActive` | | ✓ | | | | |
| `_PSVMstrLogAccMSecureIDAssgmt` | | ✓ | | | | |
| `_PSVMstrLogAccMUserAuthzn` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_VariantChangeState` | `I_ProdStrucVariantChangeState` | [0..1] |
| `_VariantBasic` | `I_ProdStrucVariantBasic` | [0..1] |
| `_Text` | `I_ProductStructureVariantText` | [0..*] |
| `_PSVMasterLogAccMActive` | `I_ProdStrucLogAccMActive` | [0..1] |
| `_PSVMstrLogAccMSecureIDAssgmt` | `I_ProdStrucLogAccMSecureAssgmt` | [0..*] |
| `_PSVMstrLogAccMUserAuthzn` | `I_ProdStrucLogAccMUserAuthzn` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANT_2')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSV'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_Text']
@VDM.viewType: #COMPOSITE
@AbapCatalog.preserveKey:true 
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'ProductStructureVariantUUID'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Variant'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_ProductStructureVariant_2
  as select from    I_ProdStrucVariantBasic               as _Variant
    inner join I_ProdStrucVariantChangeState              as _VntChangeState               on _Variant.ProductStructureVariantUUID                 = _VntChangeState.ProductStructureVariantUUID
    left outer to one join I_ProdStrucVariantMaterial     as _VariantMaterial              on  _Variant.ProductStructureVariantUUID                = _VariantMaterial.ProductStructureVariantUUID
                                                                                           and _VntChangeState.ProdStrucVariantChgStateIntID       = _VariantMaterial.ProdStrucVarBasicDataChgState
  association [0..1] to I_ProdStrucVariantChangeState     as _VariantChangeState           on   _Variant.ProductStructureVariantUUID               = _VariantChangeState.ProductStructureVariantUUID
                                                                                           and $projection.ProdStrucVariantChgStateIntID           = _VariantChangeState.ProdStrucVariantChgStateIntID
  association [0..1] to I_ProdStrucVariantBasic           as _VariantBasic                 on $projection.ProductStructureVariantUUID              = _VariantBasic.ProductStructureVariantUUID
  association [0..*] to I_ProductStructureVariantText     as _Text                         on  _Variant.ProductStructureVariantUUID                = _Text.ProductStructureVariantUUID
                                                                                           and _VntChangeState.ProdStrucVariantChgStateIntID       = _Text.ProdStrucVariantChgStateIntID
  association [0..1] to I_ProdStrucLogAccMActive          as _PSVMasterLogAccMActive       on  $projection.ProductStructureGnrcObjType             = _PSVMasterLogAccMActive.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMSecureAssgmt    as _PSVMstrLogAccMSecureIDAssgmt on  $projection.ProdStrucVariantUniqueID                = _PSVMstrLogAccMSecureIDAssgmt.LogAccMObjectID
                                                                                           and $projection.ProductStructureGnrcObjType             = _PSVMstrLogAccMSecureIDAssgmt.LogAccMObjectType
  association [0..*] to I_ProdStrucLogAccMUserAuthzn      as _PSVMstrLogAccMUserAuthzn     on  $projection.ProdStrucVariantUniqueID                = _PSVMstrLogAccMUserAuthzn.LogAccMObjectID
                                                                                           and (
                                                                                                 _PSVMstrLogAccMUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPV'
                                                                                              or _PSVMstrLogAccMUserAuthzn.LogAccMUserAuthznObject = 'PLM_PPEPIV'
                                                                                            )
                                                                                           and (
                                                                                                 _PSVMstrLogAccMUserAuthzn.LogAccMUserAuthznFrom   = '03'
                                                                                              or _PSVMstrLogAccMUserAuthzn.LogAccMUserAuthznFrom   = '*'
                                                                                            )
                                                                                           and _PSVMstrLogAccMUserAuthzn.LogAccMUserAuthznField    = 'ACTVT'
                                                                                           and (
                                                                                                 _PSVMstrLogAccMUserAuthzn.LogAccMUserEntityID     = $session.user
                                                                                              or _PSVMstrLogAccMUserAuthzn.UserID                  = $session.user
                                                                                            )
{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.foreignKey.association: '_VariantBasic'
  key _Variant.ProductStructureVariantUUID,
      @ObjectModel.foreignKey.association: '_VariantChangeState'
  key _VntChangeState.ProdStrucVariantChgStateIntID,
      _Variant.ProdStrucVariantUniqueID,
      _Variant.ProductStructureVariantName,
      _Variant.ProdStructureVariantParentUUID,
      @Semantics.businessDate.at: true
      @Semantics.businessDate.createdAt: true
      _Variant.ProductStructureCreationDate,
      @Semantics.user.createdBy: true
      _Variant.ProductStructureCreatedByUser,
      @Semantics.businessDate.at: true
      @Semantics.businessDate.lastChangedAt: true
      _Variant.ProductStrucLastChangedDate,
      @Semantics.user.lastChangedBy: true
      _Variant.ProductStrucLastChangedByUser,
      _VntChangeState.ProdStrucVariantChangeNumber,
      concat(_Variant.ProdStrucVariantUniqueID,  _VntChangeState.ProdStrucVariantChangeNumber) as ProdStrucVariantConcatenated,
      _VntChangeState.AuthorizationGroup,
      _VntChangeState.ProdStrucVarIsMrkdForDeletion,
      _VntChangeState.ProdStrucVarChgNmbrDescription,
      @Semantics.quantity.unitOfMeasure: 'ProductStructureVariantUnit'
      _VariantMaterial.ProductStructureVariantQty,
      @Semantics.unitOfMeasure: true
      _VariantMaterial.ProductStructureVariantUnit,
      _VariantMaterial.Material,
      _VariantMaterial.MaterialAuthorizationGroup,
      _Variant.ProductStructureVariantType,
      _Variant.ProductStructureGnrcObjType,
      _Text,
      _VariantChangeState,
      _VariantBasic,
      _PSVMasterLogAccMActive,
      _PSVMstrLogAccMSecureIDAssgmt,
      _PSVMstrLogAccMUserAuthzn
}
```
