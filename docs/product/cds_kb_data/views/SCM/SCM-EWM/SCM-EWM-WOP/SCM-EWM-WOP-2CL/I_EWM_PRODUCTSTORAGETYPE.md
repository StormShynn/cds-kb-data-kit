---
name: I_EWM_PRODUCTSTORAGETYPE
description: "Ewm Productstoragetype"
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - product
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_PRODUCTSTORAGETYPE

**Ewm Productstoragetype**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SupplyChainUnitUUID` | ✓ | |  | `scuguid` |  |  |
| `ProductInternalUUID` | ✓ | |  | `matid` |  |  |
| `EWMPartyEntitledToDisposeUUID` | ✓ | |  | `entitled_id` |  |  |
| `EWMStorageType` | ✓ | |  | `lgtyp` |  |  |
| `EWMWarehouse` |  | |  | `_AssgWhseBusinessPartner[inner].EWMWarehouse` |  |  |
| `EWMStorageSectionMethod` |  | |  | `sectind` |  |  |
| `EWMStorageBinType` |  | |  | `bintype` |  |  |
| `EWMStorageBinSearchRule` |  | |  | `binsrch` |  |  |
| `EWMMaximumNumberOfBins` |  | |  | `maxfixbin` |  |  |
| `EWMSpltPtwyThresholdInPercent` |  | |  | `splitth` |  |  |
| `EWMPtwySequence` |  | |  | `seqput` |  |  |
| `EWMProdQuantityClassification` |  | |  | `quancla` |  |  |
| `EWMProdPtwyQtyClassification` |  | |  | `quanclaput` |  |  |
| `EWMProdIsSplitOnPtwy` |  | |  | `splitput` |  |  |
| `EWMProdIsSkippedOnPtwy` |  | |  | `skipptw` |  |  |
| `EWMHasNoReplenishment` |  | |  | `norpln` |  |  |
| `BaseUnit` |  | |  | `_Product[inner].BaseUnit` |  |  |
| `EWMMinReplnmtQuantity` |  | |  | `repqty` |  |  |
| `EWMMinReplnmtQuantityUnit` |  | |  | `repqty_uom_dsp` |  |  |
| `EWMMinReplnmtQtyDisplayUnit` |  | |  | `repqty_uom_dsp` |  |  |
| `EWMMinimumStorageQuantity` |  | |  | `minqty` |  |  |
| `EWMMinimumStorageQuantityUnit` |  | |  | `minqty_uom_dsp` |  |  |
| `EWMMinStorQuantityDisplayUnit` |  | |  | `minqty_uom_dsp` |  |  |
| `EWMMaximumStorageQuantity` |  | |  | `maxqty` |  |  |
| `EWMMaximumStorageQuantityUnit` |  | |  | `maxqty_uom_dsp` |  |  |
| `EWMMaxStorQuantityDisplayUnit` |  | |  | `maxqty_uom_dsp` |  |  |
| `EWMMinStorQtyOfMaxStorQtyInPct` |  | |  | `permxqty` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_WarehouseNumber` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StorageTypeText` | | ✓ | | | | |
| `_StorageSectionIndicator` | | ✓ | | | | |
| `_StorageSectionIndText` | | ✓ | | | | |
| `_StorageBinType` | | ✓ | | | | |
| `_StorageBinTypeText` | | ✓ | | | | |
| `_QtyClassification` | | ✓ | | | | |
| `_QtyClassificationText` | | ✓ | | | | |
| `_PtwyQtyClassification` | | ✓ | | | | |
| `_PtwyQtyClassificationText` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_StorageBinSearchSortRule` | | ✓ | | | | |
| `_StorageBinSearchSortRuleText` | | ✓ | | | | |
| `_MinReplnmtQuantityUnit` | | ✓ | | | | |
| `_MinReplnmtQuantityUnitText` | | ✓ | | | | |
| `_MinReplnmtQtyDisplayUnit` | | ✓ | | | | |
| `_MinReplnmtQtyDisplayUnitText` | | ✓ | | | | |
| `_MinStorageQuantityUnit` | | ✓ | | | | |
| `_MinStorageQuantityUnitText` | | ✓ | | | | |
| `_MinStorageQtyDisplayUnit` | | ✓ | | | | |
| `_MinStorageQtyDisplayUnitText` | | ✓ | | | | |
| `_MaxStorageQuantityUnit` | | ✓ | | | | |
| `_MaxStorageQuantityUnitText` | | ✓ | | | | |
| `_MaxStorageQtyDisplayUnit` | | ✓ | | | | |
| `_MaxStorageQtyDisplayUnitText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_AssgWhseBusinessPartner` | `I_EWM_AssgWhseBusPartner_2` | [1..1] |
| `_WarehouseNumber` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_StorageTypeText` | `I_EWM_StorageTypeText_2` | [0..*] |
| `_StorageSectionIndicator` | `I_EWM_StorageSectionIndicator` | [0..1] |
| `_StorageSectionIndText` | `I_EWM_StorageSectionIndText` | [0..*] |
| `_StorageBinType` | `I_EWM_StorageBinType_2` | [0..1] |
| `_StorageBinTypeText` | `I_EWM_StorageBinTypeText_2` | [0..*] |
| `_QtyClassification` | `I_EWMQtyClassification` | [0..1] |
| `_QtyClassificationText` | `I_EWMQtyClassificationText` | [0..*] |
| `_PtwyQtyClassification` | `I_EWMQtyClassification` | [0..1] |
| `_PtwyQtyClassificationText` | `I_EWMQtyClassificationText` | [0..*] |
| `_Product` | `I_Product` | [1..1] |
| `_StorageBinSearchSortRule` | `I_EWM_StorageBinSearchSortRule` | [0..1] |
| `_StorageBinSearchSortRuleText` | `I_EWM_StorBinSrchSortRuleText` | [0..*] |
| `_MinReplnmtQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MinReplnmtQuantityUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_MinReplnmtQtyDisplayUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MinReplnmtQtyDisplayUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_MinStorageQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MinStorageQuantityUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_MinStorageQtyDisplayUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MinStorageQtyDisplayUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_MaxStorageQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MaxStorageQuantityUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_MaxStorageQtyDisplayUnit` | `I_UnitOfMeasure` | [0..1] |
| `_MaxStorageQtyDisplayUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_Extension` | `E_ProdEWMWrhsStorageType` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Storage Type'
@VDM.viewType: #BASIC
@ObjectModel: {
    usageType: {
      serviceQuality: #B,
      sizeCategory: #L,
      dataClass: #MASTER
    }
}
@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true
@AccessControl.personalData.blocking: #REQUIRED

define view entity I_EWM_ProductStorageType
  as select from /sapapo/matlwhst as WrhsStorageType

  association [1..1] to I_BusinessPartner              as _BusinessPartner              on  $projection.EWMPartyEntitledToDisposeUUID = _BusinessPartner.BusinessPartnerUUID

  association [1..1] to I_EWM_AssgWhseBusPartner_2     as _AssgWhseBusinessPartner      on  $projection.SupplyChainUnitUUID = _AssgWhseBusinessPartner.SupplyChainUnitUUID

  association [0..1] to I_EWM_WarehouseNumber_2        as _WarehouseNumber              on  $projection.EWMWarehouse = _WarehouseNumber.EWMWarehouse

  association [0..1] to I_EWM_StorageType_2            as _StorageType                  on  $projection.EWMWarehouse   = _StorageType.EWMWarehouse
                                                                                        and $projection.EWMStorageType = _StorageType.EWMStorageType
  association [0..*] to I_EWM_StorageTypeText_2        as _StorageTypeText              on  $projection.EWMWarehouse   = _StorageTypeText.EWMWarehouse
                                                                                        and $projection.EWMStorageType = _StorageTypeText.EWMStorageType

  association [0..1] to I_EWM_StorageSectionIndicator  as _StorageSectionIndicator      on  $projection.EWMWarehouse            = _StorageSectionIndicator.EWMWarehouse
                                                                                        and $projection.EWMStorageSectionMethod = _StorageSectionIndicator.EWMStorageSectionMethod
  association [0..*] to I_EWM_StorageSectionIndText    as _StorageSectionIndText        on  $projection.EWMWarehouse            = _StorageSectionIndText.EWMWarehouse
                                                                                        and $projection.EWMStorageSectionMethod = _StorageSectionIndText.EWMStorageSectionMethod

  association [0..1] to I_EWM_StorageBinType_2         as _StorageBinType               on  $projection.EWMWarehouse      = _StorageBinType.EWMWarehouse
                                                                                        and $projection.EWMStorageBinType = _StorageBinType.EWMStorageBinType
  association [0..*] to I_EWM_StorageBinTypeText_2     as _StorageBinTypeText           on  $projection.EWMWarehouse      = _StorageBinTypeText.EWMWarehouse
                                                                                        and $projection.EWMStorageBinType = _StorageBinTypeText.EWMStorageBinType

  association [0..1] to I_EWMQtyClassification         as _QtyClassification            on  $projection.EWMProdQuantityClassification = _QtyClassification.EWMProdQuantityClassification
  association [0..*] to I_EWMQtyClassificationText     as _QtyClassificationText        on  $projection.EWMProdQuantityClassification = _QtyClassificationText.EWMProdQuantityClassification

  association [0..1] to I_EWMQtyClassification         as _PtwyQtyClassification        on  $projection.EWMProdPtwyQtyClassification = _PtwyQtyClassification.EWMProdQuantityClassification
  association [0..*] to I_EWMQtyClassificationText     as _PtwyQtyClassificationText    on  $projection.EWMProdPtwyQtyClassification = _PtwyQtyClassificationText.EWMProdQuantityClassification

  association [1..1] to I_Product                      as _Product                      on  $projection.ProductInternalUUID = _Product.ProdSupChnMgmtUUID22

  association [0..1] to I_EWM_StorageBinSearchSortRule as _StorageBinSearchSortRule     on  $projection.EWMStorageBinSearchRule = _StorageBinSearchSortRule.EWMStorageBinSearchRule
  association [0..*] to I_EWM_StorBinSrchSortRuleText  as _StorageBinSearchSortRuleText on  $projection.EWMStorageBinSearchRule = _StorageBinSearchSortRuleText.EWMStorageBinSearchRule

  association [0..1] to I_UnitOfMeasure                as _MinReplnmtQuantityUnit       on  $projection.EWMMinReplnmtQuantityUnit = _MinReplnmtQuantityUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MinReplnmtQuantityUnitText   on  $projection.EWMMinReplnmtQuantityUnit = _MinReplnmtQuantityUnitText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _MinReplnmtQtyDisplayUnit     on  $projection.EWMMinReplnmtQtyDisplayUnit = _MinReplnmtQtyDisplayUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MinReplnmtQtyDisplayUnitText on  $projection.EWMMinReplnmtQtyDisplayUnit = _MinReplnmtQtyDisplayUnitText.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure                as _MinStorageQuantityUnit       on  $projection.EWMMinimumStorageQuantityUnit = _MinStorageQuantityUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MinStorageQuantityUnitText   on  $projection.EWMMinimumStorageQuantityUnit = _MinStorageQuantityUnitText.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _MinStorageQtyDisplayUnit     on  $projection.EWMMinStorQuantityDisplayUnit = _MinStorageQtyDisplayUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MinStorageQtyDisplayUnitText on  $projection.EWMMinStorQuantityDisplayUnit = _MinStorageQtyDisplayUnitText.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure                as _MaxStorageQuantityUnit       on  $projection.EWMMaximumStorageQuantityUnit = _MaxStorageQuantityUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MaxStorageQuantityUnitText   on  $projection.EWMMaximumStorageQuantityUnit = _MaxStorageQuantityUnitText.UnitOfMeasure 
  association [0..1] to I_UnitOfMeasure                as _MaxStorageQtyDisplayUnit     on  $projection.EWMMaxStorQuantityDisplayUnit = _MaxStorageQtyDisplayUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _MaxStorageQtyDisplayUnitText on  $projection.EWMMaxStorQuantityDisplayUnit = _MaxStorageQtyDisplayUnitText.UnitOfMeasure

  // Product Warehouse Storage Type Extension
  association [0..1] to E_ProdEWMWrhsStorageType       as _Extension                    on  $projection.SupplyChainUnitUUID           = _Extension.SupplyChainUnitUUID
                                                                                        and $projection.ProductInternalUUID           = _Extension.ProdSupChnMgmtUUID22
                                                                                        and $projection.EWMPartyEntitledToDisposeUUID = _Extension.BusinessPartnerUUID
                                                                                        and $projection.EWMStorageType                = _Extension.EWMStorageType
{

  key     WrhsStorageType.scuguid            as SupplyChainUnitUUID,

          @Semantics.uuid:true
  key     WrhsStorageType.matid              as ProductInternalUUID,
  key     WrhsStorageType.entitled_id        as EWMPartyEntitledToDisposeUUID,

          @ObjectModel.foreignKey.association: '_StorageType'
          @ObjectModel.text.association: '_StorageTypeText'
  key     WrhsStorageType.lgtyp              as EWMStorageType,
          _Product[inner].Product,

          @ObjectModel.foreignKey.association: '_WarehouseNumber'
          _AssgWhseBusinessPartner[inner].EWMWarehouse as EWMWarehouse,
          _BusinessPartner[inner].BusinessPartner,

          @ObjectModel.foreignKey.association: '_StorageSectionIndicator'
          @ObjectModel.text.association: '_StorageSectionIndText'
          WrhsStorageType.sectind            as EWMStorageSectionMethod,

          @ObjectModel.foreignKey.association: '_StorageBinType'
          @ObjectModel.text.association: '_StorageBinTypeText'
          WrhsStorageType.bintype            as EWMStorageBinType,

          @ObjectModel.foreignKey.association: '_StorageBinSearchSortRule'
          @ObjectModel.text.association: '_StorageBinSearchSortRuleText'
          WrhsStorageType.binsrch            as EWMStorageBinSearchRule,

          WrhsStorageType.maxfixbin          as EWMMaximumNumberOfBins,

          WrhsStorageType.splitth            as EWMSpltPtwyThresholdInPercent,

          WrhsStorageType.seqput             as EWMPtwySequence,

          @ObjectModel.foreignKey.association: '_QtyClassification'
          @ObjectModel.text.association: '_QtyClassificationText'
          WrhsStorageType.quancla            as EWMProdQuantityClassification,

          @ObjectModel.foreignKey.association: '_PtwyQtyClassification'
          @ObjectModel.text.association: '_PtwyQtyClassificationText'
          WrhsStorageType.quanclaput         as EWMProdPtwyQtyClassification,

          WrhsStorageType.splitput           as EWMProdIsSplitOnPtwy,

          //@Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
          WrhsStorageType.skipptw            as EWMProdIsSkippedOnPtwy,

          WrhsStorageType.norpln             as EWMHasNoReplenishment,
          
          _Product[inner].BaseUnit           as BaseUnit, 

          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          WrhsStorageType.repqty             as EWMMinReplnmtQuantity,

          @ObjectModel.foreignKey.association: '_MinReplnmtQuantityUnit'
          @ObjectModel.text.association: '_MinReplnmtQuantityUnitText'
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: 'EWMMinReplnmtQtyDisplayUnit'
          WrhsStorageType.repqty_uom_dsp     as EWMMinReplnmtQuantityUnit,
          
          @ObjectModel.foreignKey.association: '_MinReplnmtQtyDisplayUnit'
          @ObjectModel.text.association: '_MinReplnmtQtyDisplayUnitText'
          WrhsStorageType.repqty_uom_dsp     as EWMMinReplnmtQtyDisplayUnit,

          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          WrhsStorageType.minqty             as EWMMinimumStorageQuantity,

          @ObjectModel.foreignKey.association: '_MinStorageQuantityUnit'
          @ObjectModel.text.association: '_MinStorageQuantityUnitText'
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: 'EWMMinStorQuantityDisplayUnit'
          WrhsStorageType.minqty_uom_dsp     as EWMMinimumStorageQuantityUnit,
          
          @ObjectModel.foreignKey.association: '_MinStorageQtyDisplayUnit'
          @ObjectModel.text.association: '_MinStorageQtyDisplayUnitText'
          WrhsStorageType.minqty_uom_dsp     as EWMMinStorQuantityDisplayUnit,

          @Semantics.quantity.unitOfMeasure: 'BaseUnit'
          WrhsStorageType.maxqty             as EWMMaximumStorageQuantity,

          @ObjectModel.foreignKey.association: '_MaxStorageQuantityUnit'
          @ObjectModel.text.association: '_MaxStorageQuantityUnitText'
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: 'EWMMaxStorQuantityDisplayUnit'
          WrhsStorageType.maxqty_uom_dsp     as EWMMaximumStorageQuantityUnit,   
          @ObjectModel.foreignKey.association: '_MaxStorageQtyDisplayUnit'
          @ObjectModel.text.association: '_MaxStorageQtyDisplayUnitText'
          WrhsStorageType.maxqty_uom_dsp     as EWMMaxStorQuantityDisplayUnit,

          WrhsStorageType.permxqty           as EWMMinStorQtyOfMaxStorQtyInPct,

          _PtwyQtyClassificationText,
          _PtwyQtyClassification,
          _QtyClassificationText,
          _QtyClassification,
          _StorageBinTypeText,
          _StorageBinType,
          _StorageSectionIndicator,
          _StorageSectionIndText,
          _StorageTypeText,
          _StorageType,
          
          _Product[inner]._BaseUnitOfMeasure,
          
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MinReplnmtQtyDisplayUnit'
          _MinReplnmtQuantityUnit,
          _MinReplnmtQtyDisplayUnit,
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MinReplnmtQtyDisplayUnitText'
          _MinReplnmtQuantityUnitText,
          _MinReplnmtQtyDisplayUnitText,
          
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MinStorageQtyDisplayUnit'
          _MinStorageQuantityUnit,
          _MinStorageQtyDisplayUnit,
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MinStorageQtyDisplayUnitText'
          _MinStorageQuantityUnitText,
          _MinStorageQtyDisplayUnitText,
          
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MaxStorageQtyDisplayUnit'
          _MaxStorageQuantityUnit,
          _MaxStorageQtyDisplayUnit,
          @API.element.releaseState: #DEPRECATED
          @API.element.successor: '_MaxStorageQtyDisplayUnitText'
          _MaxStorageQuantityUnitText,
          _MaxStorageQtyDisplayUnitText,
          
          _StorageBinSearchSortRule,
          _StorageBinSearchSortRuleText,
          _Product,
          _WarehouseNumber,
          _BusinessPartner

}
```
