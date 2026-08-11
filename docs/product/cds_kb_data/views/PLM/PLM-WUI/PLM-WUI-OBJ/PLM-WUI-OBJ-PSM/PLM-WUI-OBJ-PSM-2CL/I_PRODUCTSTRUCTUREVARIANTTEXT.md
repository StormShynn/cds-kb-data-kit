---
name: I_PRODUCTSTRUCTUREVARIANTTEXT
description: "Product Structure Variant - Text"
app_component: PLM-WUI-OBJ-PSM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANTTEXT')/$value
semantic_en: "Product Structure Variant - Text"
semantic_vi: "Product Structure Variant - Text — CDS view giao diện dựa trên posvtx."
keywords:
  - "product"
  - "structure"
  - "variant"
  - "text"
  - "prod"
  - "struc"
  - "state"
  - "language"
  - "description"
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
# I_PRODUCTSTRUCTUREVARIANTTEXT

**Product Structure Variant - Text**

| Property | Value |
|---|---|
| App Component | `PLM-WUI-OBJ-PSM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductStructureVariantUUID` | ✓ | |  | `pvguid` | `RAW(16)` | Internal Number of the PVS Variant |
| `ProdStrucVariantChgStateIntID` | ✓ | |  | `concat('000', cast( pvtxcnt as abap.char(5)))` | `CHAR(8)` |  |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ProdStrucVariantDescription` |  | |  | `pvtext` | `CHAR(60)` | Description of iPPE Variant |
| `_Language` | | ✓ | | | | |
| `_VariantBasic` | | ✓ | | | | |
| `_VariantChangeState` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_VariantBasic` | `I_ProdStrucVariantBasic` | [0..1] |
| `_VariantChangeState` | `I_ProdStrucVariantChangeState` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTSTRUCTUREVARIANTTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPSVARIANTTEXT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'ProductStructureVariantUUID'
@ObjectModel.dataCategory: #TEXT

@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY ]

@EndUserText.label: 'Product Structure Variant - Text'
@ClientHandling.algorithm: #SESSION_VARIABLE
define view I_ProductStructureVariantText
  as select from posvtx
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  association [0..1] to I_ProdStrucVariantBasic as _VariantBasic on $projection.ProductStructureVariantUUID = _VariantBasic.ProductStructureVariantUUID
  association [0..1] to I_ProdStrucVariantChangeState    as _VariantChangeState  on   $projection.ProductStructureVariantUUID    = _VariantChangeState.ProductStructureVariantUUID
                                                                                   and $projection.ProdStrucVariantChgStateIntID = _VariantChangeState.ProdStrucVariantChgStateIntID
  
{
      @ObjectModel.foreignKey.association: '_VariantBasic'
  key pvguid                                            as ProductStructureVariantUUID,
      @ObjectModel.foreignKey.association: '_VariantChangeState'
  key concat('000', cast( pvtxcnt as abap.char(5)))     as ProdStrucVariantChgStateIntID,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key spras                                             as Language,
      @Semantics.text
      pvtext                                            as ProdStrucVariantDescription,
      _Language,
      _VariantBasic,
     _VariantChangeState
}
```
