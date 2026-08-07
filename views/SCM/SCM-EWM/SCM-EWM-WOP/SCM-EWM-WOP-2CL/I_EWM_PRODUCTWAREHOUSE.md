---
name: I_EWM_PRODUCTWAREHOUSE
description: Ewm Productwarehouse
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SCM
  - SCM-EWM
  - SCM-EWM-WOP
  - interface-view
  - product
  - warehouse
  - component:SCM-EWM-WOP-2CL
  - lob:Other
---
# I_EWM_PRODUCTWAREHOUSE

**Ewm Productwarehouse**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ProductInternalUUID` | ✓ | |  | `matid` |
| `SupplyChainUnitUUID` | ✓ | |  | `scuguid` |
| `EWMPartyEntitledToDisposeUUID` | ✓ | |  | `entitled_id` |
| `EWMWarehouse` |  | |  | `_AssgWhseBusinessPartner[inner].EWMWarehouse` |
| `EWMProductProcessBlockProfile` |  | |  | `procprfl` |
| `EWMWarehouseProcessType` |  | |  | `ptdetind` |
| `EWMProcessTypeControlCode` |  | |  | `ptdetind` |
| `EWMProductLoadCategory` |  | |  | `wrkldgr` |
| `EWMPhysInventoryCountingCycle` |  | |  | `ccind` |
| `RequiredMinShelfLife` |  | |  | `cast( ProductEWMWarehouse.slrq_min as cmd_prd_shelf_life_req_min_n preserving type )` |
| `EWMProdBackflushWthdrwlMethod` |  | |  | `backflush_prod` |
| `EWMKitQuantityCorrelation` |  | |  | `kit_fixed_quan` |
| `EWMIsCnsmpnRlvtForValAddedSrvc` |  | |  | `vasvcp` |
| `EWMQuantityAdjustmentProfile` |  | |  | `medi_aprof_wh` |
| `EWMMrchdsDistrQtyClassfctn` |  | |  | `quancla_merch` |
| `PreferredUnitOfMeasure` |  | |  | `puom_wh` |
| `EWMPreferredUnit` |  | |  | `puom_wh` |
| `EWMQualityInspectionGroup` |  | |  | `qgrp_wh` |
| `EWMPtwyControlStrategy` |  | |  | `put_stra` |
| `EWMStorageBinType` |  | |  | `lptyp` |
| `EWMBulkStorageMethod` |  | |  | `block` |
| `EWMStorageSectionMethod` |  | |  | `lgbkz` |
| `EWMStockRemovalControlStrategy` |  | |  | `rem_stra` |
| `EWMStockDeterminationGroup` |  | |  | `stckdetgr` |
| `EWMProdTwoStepPickingRelevant` |  | |  | `l2skr` |
| `EWMStggAreaDeterminationGroup` |  | |  | `drdetgr` |
| `BaseUnit` |  | |  | `_Product[inner].BaseUnit` |
| `EWMSltgRequirementQuantity` |  | |  | `demqty` |
| `EWMSltgNumberOfSalesOrderItems` |  | |  | `nosoi` |
| `EWMSltgRecmddStorageQuantity` |  | |  | `rsqty` |
| `EWMSlottingWeightSizeCode` |  | |  | `wghtind` |
| `EWMSlottingVolumeSizeCode` |  | |  | `volind` |
| `EWMSlottingLengthSizeCode` |  | |  | `lgthind` |
| `EWMSlottingWidthSizeCode` |  | |  | `wdthind` |
| `EWMSlottingHeightSizeCode` |  | |  | `hghtind` |
| `_Product` | | ✓ | | |
| `_AssgWhseBusinessPartner` | | ✓ | | |
| `_BusinessPartner` | | ✓ | | |
| `_BusinessPartnerNumber` | | ✓ | | |
| `_WarehouseNumber` | | ✓ | | |
| `_WarehouseNumberText` | | ✓ | | |
| `_ProductProcessBlockProfile` | | ✓ | | |
| `_ProcessBlockProfileText` | | ✓ | | |
| `_WhseProcessTypeCtrlInd` | | ✓ | | |
| `_WhseProcTypeCtrlIndText` | | ✓ | | |
| `_WhseProcessTypeCtrlInd_2` | | ✓ | | |
| `_WhseProcTypeCtrlIndText_2` | | ✓ | | |
| `_ProductLoadCategory` | | ✓ | | |
| `_ProductLoadCategoryText` | | ✓ | | |
| `_QtyAdjustmentProfile` | | ✓ | | |
| `_QtyAdjustmentPrflT` | | ✓ | | |
| `_QtyClassification` | | ✓ | | |
| `_QtyClassificationText` | | ✓ | | |
| `_PtwyControlStrategy` | | ✓ | | |
| `_PtwyControlStrategyText` | | ✓ | | |
| `_StorageBinType` | | ✓ | | |
| `_StorageBinTypeText` | | ✓ | | |
| `_BulkStorageMethod` | | ✓ | | |
| `_BulkStorageMethodText` | | ✓ | | |
| `_StkRemovalCtrlStrgy` | | ✓ | | |
| `_StkRemovalCtrlStrgyText` | | ✓ | | |
| `_StockDeterminationGroup` | | ✓ | | |
| `_StkDetnGroupText` | | ✓ | | |
| `_StagingAreaDetnGroup` | | ✓ | | |
| `_StagingAreaDetnGroupText` | | ✓ | | |
| `_StorageSectionIndicator` | | ✓ | | |
| `_StorageSectionIndText` | | ✓ | | |
| `_UnitOfMeasure` | | ✓ | | |
| `_UnitOfMeasureText` | | ✓ | | |
| `_UnitOfMeasure_2` | | ✓ | | |
| `_UnitOfMeasureText_2` | | ✓ | | |
| `_BackflushMethod` | | ✓ | | |
| `_BackflushMethodText` | | ✓ | | |
| `_KitQtyCorrelationType` | | ✓ | | |
| `_KitQtyCorrlnTypeText` | | ✓ | | |
| `_RelevanceTwoStepPicking` | | ✓ | | |
| `_RlvnceTwoStepPickingText` | | ✓ | | |
| `_PhysInvtryCycleCounting` | | ✓ | | |
| `_QualityInspectionGroup` | | ✓ | | |
| `_QualityInspectionGroupT` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_AssgWhseBusinessPartner` | `I_EWM_AssgWhseBusPartner_2` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [1..1] |
| `_BusinessPartnerNumber` | `I_BusinessPartner` | [1..1] |
| `_WarehouseNumber` | `I_EWM_WarehouseNumber_2` | [0..1] |
| `_WarehouseNumberText` | `I_EWM_WarehouseNumberText_2` | [0..*] |
| `_ProductProcessBlockProfile` | `I_EWM_ProcessBlockProfile` | [0..1] |
| `_ProcessBlockProfileText` | `I_EWM_ProcessBlockProfileText` | [0..*] |
| `_WhseProcessTypeCtrlInd` | `I_EWM_WhseProcessTypeCtrlInd` | [0..1] |
| `_WhseProcTypeCtrlIndText` | `I_EWM_WhseProcTypeCtrlIndText` | [0..*] |
| `_WhseProcessTypeCtrlInd_2` | `I_EWM_WhseProcessTypeCtrlInd` | [0..1] |
| `_WhseProcTypeCtrlIndText_2` | `I_EWM_WhseProcTypeCtrlIndText` | [0..*] |
| `_ProductLoadCategory` | `I_EWM_ProductLoadCategory` | [0..1] |
| `_ProductLoadCategoryText` | `I_EWM_ProductLoadCategoryText` | [0..*] |
| `_QtyAdjustmentProfile` | `I_EWM_QtyAdjustmentProfile_2` | [0..1] |
| `_QtyAdjustmentPrflT` | `I_EWM_QtyAdjustmentPrflT_2` | [0..*] |
| `_QtyClassification` | `I_EWMQtyClassification` | [0..1] |
| `_QtyClassificationText` | `I_EWMQtyClassificationText` | [0..*] |
| `_PtwyControlStrategy` | `I_EWM_PtwyControlStrategy` | [0..1] |
| `_PtwyControlStrategyText` | `I_EWM_PtwyControlStrategyText` | [0..*] |
| `_StorageBinType` | `I_EWM_StorageBinType_2` | [0..1] |
| `_StorageBinTypeText` | `I_EWM_StorageBinTypeText_2` | [0..*] |
| `_BulkStorageMethod` | `I_EWM_BulkStorageMethod` | [0..1] |
| `_BulkStorageMethodText` | `I_EWM_BulkStorageMethodText` | [0..*] |
| `_StkRemovalCtrlStrgy` | `I_EWM_StkRemovalCtrlStrgy` | [0..1] |
| `_StkRemovalCtrlStrgyText` | `I_EWM_StkRemovalCtrlStrgyText` | [0..*] |
| `_StockDeterminationGroup` | `I_EWM_StockDeterminationGroup` | [0..1] |
| `_StkDetnGroupText` | `I_EWM_StkDetnGroupText` | [0..*] |
| `_StagingAreaDetnGroup` | `I_EWM_StagingAreaDetnGroup` | [0..1] |
| `_StagingAreaDetnGroupText` | `I_EWM_StagingAreaDetnGroupText` | [0..*] |
| `_StorageSectionIndicator` | `I_EWM_StorageSectionIndicator` | [0..1] |
| `_StorageSectionIndText` | `I_EWM_StorageSectionIndText` | [0..*] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasureText` | `I_UnitOfMeasureText` | [0..*] |
| `_UnitOfMeasure_2` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfMeasureText_2` | `I_UnitOfMeasureText` | [0..*] |
| `_BackflushMethod` | `I_EWM_BackflushMethod` | [0..1] |
| `_BackflushMethodText` | `I_EWM_BackflushMethodText` | [0..*] |
| `_KitQtyCorrelationType` | `I_EWM_KitQtyCorrelationType` | [0..1] |
| `_KitQtyCorrlnTypeText` | `I_EWM_KitQtyCorrlnTypeText` | [0..*] |
| `_RelevanceTwoStepPicking` | `I_EWM_RelevanceTwoStepPicking` | [0..1] |
| `_RlvnceTwoStepPickingText` | `I_EWM_RlvnceTwoStepPickingText` | [0..*] |
| `_PhysInvtryCycleCounting` | `I_EWM_PhysInvtryCycleCounting` | [0..1] |
| `_QualityInspectionGroup` | `I_EWM_QualityInspectionGroup` | [0..1] |
| `_QualityInspectionGroupT` | `I_EWM_QualityInspectionGroupT` | [0..*] |
| `_Extension` | `E_ProdEWMWarehouse` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck:  #MANDATORY
@EndUserText.label: 'Product Warehouse Data'
@VDM.viewType: #BASIC
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER

@ObjectModel.supportedCapabilities:  [  #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE ]
@Metadata.ignorePropagatedAnnotations:true                                         
 
@AccessControl.personalData.blocking: #REQUIRED

define view entity I_EWM_ProductWarehouse as select from /sapapo/matlwh as ProductEWMWarehouse 

  
  association [1..1] to I_Product                     as _Product                       on  $projection.ProductInternalUUID           = _Product.ProdSupChnMgmtUUID22
  association [1..1] to I_EWM_AssgWhseBusPartner_2    as _AssgWhseBusinessPartner       on  $projection.SupplyChainUnitUUID           = _AssgWhseBusinessPartner.SupplyChainUnitUUID
  association [1..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.EWMPartyEntitledToDisposeUUID = _BusinessPartner.BusinessPartnerUUID
  association [1..1] to I_BusinessPartner             as _BusinessPartnerNumber         on  $projection.businesspartner               = _BusinessPartnerNumber.BusinessPartner

  association [0..1] to I_EWM_WarehouseNumber_2       as _WarehouseNumber               on  $projection.EWMWarehouse                  = _WarehouseNumber.EWMWarehouse
  association [0..*] to I_EWM_WarehouseNumberText_2   as _WarehouseNumberText           on  $projection.EWMWarehouse                  = _WarehouseNumberText.EWMWarehouse
  association [0..1] to I_EWM_ProcessBlockProfile     as _ProductProcessBlockProfile    on  $projection.EWMWarehouse                  = _ProductProcessBlockProfile.EWMWarehouse
                                                                                        and $projection.EWMProductProcessBlockProfile = _ProductProcessBlockProfile.EWMProcessBlockProfile
  association [0..*] to I_EWM_ProcessBlockProfileText as _ProcessBlockProfileText       on  $projection.EWMWarehouse                  = _ProcessBlockProfileText.EWMWarehouse
                                                                                        and $projection.EWMProductProcessBlockProfile = _ProcessBlockProfileText.EWMProcessBlockProfile
  association [0..1] to I_EWM_WhseProcessTypeCtrlInd  as _WhseProcessTypeCtrlInd        on  $projection.EWMWarehouse                  = _WhseProcessTypeCtrlInd.EWMWarehouse
                                                                                        and $projection.EWMWarehouseProcessType       = _WhseProcessTypeCtrlInd.EWMProcessTypeControlCode
  association [0..*] to I_EWM_WhseProcTypeCtrlIndText as _WhseProcTypeCtrlIndText       on  $projection.EWMWarehouse                  = _WhseProcTypeCtrlIndText.EWMWarehouse
                                                                                        and $projection.EWMWarehouseProcessType       = _WhseProcTypeCtrlIndText.EWMProcessTypeControlCode

  association [0..1] to I_EWM_WhseProcessTypeCtrlInd  as _WhseProcessTypeCtrlInd_2      on  $projection.EWMWarehouse                  = _WhseProcessTypeCtrlInd_2.EWMWarehouse
                                                                                        and $projection.EWMProcessTypeControlCode     = _WhseProcessTypeCtrlInd_2.EWMProcessTypeControlCode
  association [0..*] to I_EWM_WhseProcTypeCtrlIndText as _WhseProcTypeCtrlIndText_2     on  $projection.EWMWarehouse                  = _WhseProcTypeCtrlIndText_2.EWMWarehouse
                                                                                        and $projection.EWMProcessTypeControlCode     = _WhseProcTypeCtrlIndText_2.EWMProcessTypeControlCode                                                                                                                                                                               
                                                                                        
  association [0..1] to I_EWM_ProductLoadCategory     as _ProductLoadCategory           on  $projection.EWMWarehouse                  = _ProductLoadCategory.EWMWarehouse
                                                                                        and $projection.EWMProductLoadCategory        = _ProductLoadCategory.EWMProductLoadCategory
  association [0..*] to I_EWM_ProductLoadCategoryText as _ProductLoadCategoryText       on  $projection.EWMWarehouse                  = _ProductLoadCategoryText.EWMWarehouse
                                                                                        and $projection.EWMProductLoadCategory        = _ProductLoadCategoryText.EWMProductLoadCategory

  association [0..1] to I_EWM_QtyAdjustmentProfile_2  as _QtyAdjustmentProfile          on  $projection.EWMQuantityAdjustmentProfile  = _QtyAdjustmentProfile.EWMQuantityAdjustmentProfile
  association [0..*] to I_EWM_QtyAdjustmentPrflT_2    as _QtyAdjustmentPrflT            on  $projection.EWMQuantityAdjustmentProfile  = _QtyAdjustmentPrflT.EWMQuantityAdjustmentProfile
  association [0..1] to I_EWMQtyClassification        as _QtyClassification             on  $projection.EWMMrchdsDistrQtyClassfctn    = _QtyClassification.EWMProdQuantityClassification
  association [0..*] to I_EWMQtyClassificationText    as _QtyClassificationText         on  $projection.EWMMrchdsDistrQtyClassfctn    = _QtyClassificationText.EWMProdQuantityClassification
  association [0..1] to I_EWM_PtwyControlStrategy     as _PtwyControlStrategy           on  $projection.EWMWarehouse                  = _PtwyControlStrategy.EWMWarehouse                                                                                        
                                                                                        and $projection.EWMPtwyControlStrategy        = _PtwyControlStrategy.EWMPtwyControlStrategy
  association [0..*] to I_EWM_PtwyControlStrategyText as _PtwyControlStrategyText       on  $projection.EWMWarehouse                  = _PtwyControlStrategyText.EWMWarehouse
                                                                                        and $projection.EWMPtwyControlStrategy        = _PtwyControlStrategyText.EWMPtwyControlStrategy
  association [0..1] to I_EWM_StorageBinType_2        as _StorageBinType                on  $projection.EWMWarehouse                  = _StorageBinType.EWMWarehouse
                                                                                        and $projection.EWMStorageBinType             = _StorageBinType.EWMStorageBinType
  association [0..*] to I_EWM_StorageBinTypeText_2    as _StorageBinTypeText            on  $projection.EWMWarehouse                  = _StorageBinTypeText.EWMWarehouse
                                                                                        and $projection.EWMStorageBinType             = _StorageBinTypeText.EWMStorageBinType
  association [0..1] to I_EWM_BulkStorageMethod       as _BulkStorageMethod             on  $projection.EWMWarehouse                  = _BulkStorageMethod.EWMWarehouse
                                                                                        and $projection.EWMBulkStorageMethod          = _BulkStorageMethod.EWMBulkStorageMethod
  association [0..*] to I_EWM_BulkStorageMethodText   as _BulkStorageMethodText         on  $projection.EWMWarehouse                  = _BulkStorageMethodText.EWMWarehouse
                                                                                        and $projection.EWMBulkStorageMethod          = _BulkStorageMethodText.EWMBulkStorageMethod
  association [0..1] to I_EWM_StkRemovalCtrlStrgy     as _StkRemovalCtrlStrgy           on  $projection.EWMWarehouse                  = _StkRemovalCtrlStrgy.EWMWarehouse
                                                                                        and $projection.EWMStockRemovalControlStrategy = _StkRemovalCtrlStrgy.EWMStockRemovalControlStrategy
  association [0..*] to I_EWM_StkRemovalCtrlStrgyText as _StkRemovalCtrlStrgyText       on  $projection.EWMWarehouse                   = _StkRemovalCtrlStrgyText.EWMWarehouse
                                                                                        and $projection.EWMStockRemovalControlStrategy = _StkRemovalCtrlStrgyText.EWMStockRemovalControlStrategy

  association [0..1] to I_EWM_StockDeterminationGroup  as _StockDeterminationGroup      on  $projection.EWMWarehouse                  = _StockDeterminationGroup.EWMWarehouse
                                                                                        and $projection.EWMStockDeterminationGroup    = _StockDeterminationGroup.EWMStockDeterminationGroup
  association [0..*] to I_EWM_StkDetnGroupText         as _StkDetnGroupText             on  $projection.EWMWarehouse                  = _StkDetnGroupText.EWMWarehouse
                                                                                        and $projection.EWMStockDeterminationGroup    = _StkDetnGroupText.EWMStockDeterminationGroup
  association [0..1] to I_EWM_StagingAreaDetnGroup     as _StagingAreaDetnGroup         on  $projection.EWMWarehouse                  = _StagingAreaDetnGroup.EWMWarehouse
                                                                                        and $projection.EWMStggAreaDeterminationGroup = _StagingAreaDetnGroup.EWMStggAreaDeterminationGroup
  association [0..*] to I_EWM_StagingAreaDetnGroupText as _StagingAreaDetnGroupText     on  $projection.EWMWarehouse                  = _StagingAreaDetnGroupText.EWMWarehouse
                                                                                        and $projection.EWMStggAreaDeterminationGroup = _StagingAreaDetnGroupText.EWMStggAreaDeterminationGroup
  association [0..1] to I_EWM_StorageSectionIndicator  as _StorageSectionIndicator      on  $projection.EWMWarehouse                  = _StorageSectionIndicator.EWMWarehouse
                                                                                        and $projection.EWMStorageSectionMethod       = _StorageSectionIndicator.EWMStorageSectionMethod
  association [0..*] to I_EWM_StorageSectionIndText    as _StorageSectionIndText        on  $projection.EWMWarehouse                  = _StorageSectionIndText.EWMWarehouse
                                                                                        and $projection.EWMStorageSectionMethod       = _StorageSectionIndText.EWMStorageSectionMethod

  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.PreferredUnitOfMeasure        = _UnitOfMeasure.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _UnitOfMeasureText            on  $projection.PreferredUnitOfMeasure        = _UnitOfMeasureText.UnitOfMeasure
  
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure_2              on  $projection.EWMPreferredUnit              = _UnitOfMeasure_2.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _UnitOfMeasureText_2          on  $projection.EWMPreferredUnit              = _UnitOfMeasureText_2.UnitOfMeasure

  //DD07L VH------------
  association [0..1] to I_EWM_BackflushMethod          as _BackflushMethod              on  $projection.EWMProdBackflushWthdrwlMethod = _BackflushMethod.EWMProdBackflushWthdrwlMethod
  association [0..*] to I_EWM_BackflushMethodText      as _BackflushMethodText          on  $projection.EWMProdBackflushWthdrwlMethod = _BackflushMethodText.EWMProdBackflushWthdrwlMethod

  association [0..1] to I_EWM_KitQtyCorrelationType    as _KitQtyCorrelationType        on  $projection.EWMKitQuantityCorrelation     = _KitQtyCorrelationType.EWMKitQuantityCorrelation
  association [0..*] to I_EWM_KitQtyCorrlnTypeText     as _KitQtyCorrlnTypeText         on  $projection.EWMKitQuantityCorrelation     = _KitQtyCorrlnTypeText.EWMKitQuantityCorrelation

  association [0..1] to I_EWM_RelevanceTwoStepPicking  as _RelevanceTwoStepPicking      on  $projection.EWMProdTwoStepPickingRelevant = _RelevanceTwoStepPicking.EWMProdTwoStepPickingRelevant
  association [0..*] to I_EWM_RlvnceTwoStepPickingText as _RlvnceTwoStepPickingText     on  $projection.EWMProdTwoStepPickingRelevant = _RlvnceTwoStepPickingText.EWMProdTwoStepPickingRelevant

  association [0..1] to I_EWM_PhysInvtryCycleCounting  as _PhysInvtryCycleCounting      on  $projection.EWMWarehouse                  = _PhysInvtryCycleCounting.EWMWarehouse
                                                                                        and $projection.EWMPhysInventoryCountingCycle = _PhysInvtryCycleCounting.EWMPhysInventoryCountingCycle

  association [0..1] to I_EWM_QualityInspectionGroup   as _QualityInspectionGroup       on  $projection.EWMQualityInspectionGroup     = _QualityInspectionGroup.QualityInspectionGroup
  association [0..*] to I_EWM_QualityInspectionGroupT  as _QualityInspectionGroupT      on  $projection.EWMQualityInspectionGroup     = _QualityInspectionGroupT.QualityInspectionGroup

  //Product Warehouse Data Extension
  association [0..1] to E_ProdEWMWarehouse             as _Extension                    on  $projection.ProductInternalUUID           = _Extension.ProdSupChnMgmtUUID22
                                                                                        and $projection.SupplyChainUnitUUID           = _Extension.SupplyChainUnitUUID
                                                                                        and $projection.EWMPartyEntitledToDisposeUUID = _Extension.BusinessPartnerUUID
                                                                                        


{
      //warehoues fields     
      @Semantics.uuid:true
  key ProductEWMWarehouse.matid                                                            as ProductInternalUUID,
  key ProductEWMWarehouse.scuguid                                                          as SupplyChainUnitUUID, 
  key ProductEWMWarehouse.entitled_id                                                      as EWMPartyEntitledToDisposeUUID, 
  
      _Product[inner].Product,

      @ObjectModel.foreignKey.association: '_BusinessPartnerNumber'
      _BusinessPartner[inner].BusinessPartner,

      @ObjectModel.foreignKey.association: '_WarehouseNumber'
      _AssgWhseBusinessPartner[inner].EWMWarehouse                                         as EWMWarehouse,

      @ObjectModel.foreignKey.association: '_ProductProcessBlockProfile'
      @ObjectModel.text.association: '_ProcessBlockProfileText'
      ProductEWMWarehouse.procprfl                                                         as EWMProductProcessBlockProfile,

      @ObjectModel.foreignKey.association: '_WhseProcessTypeCtrlInd'
      @ObjectModel.text.association: '_WhseProcTypeCtrlIndText'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMProcessTypeControlCode'
      ProductEWMWarehouse.ptdetind                                                         as EWMWarehouseProcessType,
      
      @ObjectModel.foreignKey.association: '_WhseProcessTypeCtrlInd_2'
      @ObjectModel.text.association: '_WhseProcTypeCtrlIndText_2'
      ProductEWMWarehouse.ptdetind                                                         as EWMProcessTypeControlCode,

      @ObjectModel.foreignKey.association: '_ProductLoadCategory'
      @ObjectModel.text.association: '_ProductLoadCategoryText'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.wrkldgr                                                          as EWMProductLoadCategory,

      @ObjectModel.foreignKey.association: '_PhysInvtryCycleCounting'
      ProductEWMWarehouse.ccind                                                            as EWMPhysInventoryCountingCycle,

      cast( ProductEWMWarehouse.slrq_min as cmd_prd_shelf_life_req_min_n preserving type ) as RequiredMinShelfLife,

      @ObjectModel.foreignKey.association: '_BackflushMethod'
      @ObjectModel.text.association: '_BackflushMethodText'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.backflush_prod                                                   as EWMProdBackflushWthdrwlMethod,
      
      @ObjectModel.foreignKey.association: '_KitQtyCorrelationType'
      @ObjectModel.text.association: '_KitQtyCorrlnTypeText'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.kit_fixed_quan                                                   as EWMKitQuantityCorrelation,

      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.vasvcp                                                           as EWMIsCnsmpnRlvtForValAddedSrvc,

      @ObjectModel.foreignKey.association: '_QtyAdjustmentProfile'
      @ObjectModel.text.association: '_QtyAdjustmentPrflT'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.medi_aprof_wh                                                    as EWMQuantityAdjustmentProfile,

      @ObjectModel.foreignKey.association: '_QtyClassification'
      @ObjectModel.text.association: '_QtyClassificationText'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.quancla_merch                                                    as EWMMrchdsDistrQtyClassfctn,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @ObjectModel.text.association: '_UnitOfMeasureText'
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'EWMPreferredUnit'
      ProductEWMWarehouse.puom_wh                                                          as PreferredUnitOfMeasure,
      
      @ObjectModel.foreignKey.association: '_UnitOfMeasure_2'
      @ObjectModel.text.association: '_UnitOfMeasureText_2'
      ProductEWMWarehouse.puom_wh                                                          as EWMPreferredUnit,

      //  quality inspection fields

      @ObjectModel.foreignKey.association: '_QualityInspectionGroup'
      @ObjectModel.text.association: '_QualityInspectionGroupT'
      ProductEWMWarehouse.qgrp_wh                                                          as EWMQualityInspectionGroup,

      //  Putaway fields

      @ObjectModel.foreignKey.association: '_PtwyControlStrategy'
      @ObjectModel.text.association: '_PtwyControlStrategyText'
      ProductEWMWarehouse.put_stra                                                         as EWMPtwyControlStrategy,


      @ObjectModel.foreignKey.association: '_StorageBinType'
      @ObjectModel.text.association: '_StorageBinTypeText'
      ProductEWMWarehouse.lptyp                                                            as EWMStorageBinType,

      @ObjectModel.foreignKey.association: '_BulkStorageMethod'
      @ObjectModel.text.association: '_BulkStorageMethodText'
      ProductEWMWarehouse.block                                                            as EWMBulkStorageMethod,

      @ObjectModel.foreignKey.association: '_StorageSectionIndicator'
      @ObjectModel.text.association: '_StorageSectionIndText'
      ProductEWMWarehouse.lgbkz                                                            as EWMStorageSectionMethod,

      //  Stock Removal fields

      @ObjectModel.foreignKey.association: '_StkRemovalCtrlStrgy'
      @ObjectModel.text.association: '_StkRemovalCtrlStrgyText'
      ProductEWMWarehouse.rem_stra                                                         as EWMStockRemovalControlStrategy,

      @ObjectModel.foreignKey.association: '_StockDeterminationGroup'
      @ObjectModel.text.association: '_StkDetnGroupText'
      ProductEWMWarehouse.stckdetgr                                                        as EWMStockDeterminationGroup,

      @ObjectModel.foreignKey.association: '_RelevanceTwoStepPicking'
      @ObjectModel.text.association: '_RlvnceTwoStepPickingText'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.l2skr                                                            as EWMProdTwoStepPickingRelevant,

      @ObjectModel.foreignKey.association: '_StagingAreaDetnGroup'
      @ObjectModel.text.association: '_StagingAreaDetnGroupText'
      ProductEWMWarehouse.drdetgr                                                          as EWMStggAreaDeterminationGroup,
      
      _Product[inner].BaseUnit                                                             as BaseUnit,
      _Product[inner]._BaseUnitOfMeasure,                                                          
      
      // Slotting relevant
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.demqty                                                           as EWMSltgRequirementQuantity,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.nosoi                                                            as EWMSltgNumberOfSalesOrderItems,
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.rsqty                                                            as EWMSltgRecmddStorageQuantity,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.wghtind                                                          as EWMSlottingWeightSizeCode,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.volind                                                           as EWMSlottingVolumeSizeCode,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.lgthind                                                          as EWMSlottingLengthSizeCode,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.wdthind                                                          as EWMSlottingWidthSizeCode,
      @Feature: 'SW:/SCWM/SFWS_104_ON_PREMISE'
      ProductEWMWarehouse.hghtind                                                          as EWMSlottingHeightSizeCode,

      _Product,
      _AssgWhseBusinessPartner,
      _BusinessPartner,
      _BusinessPartnerNumber,
      
      //_Warehouse,
      _WarehouseNumber,
      _WarehouseNumberText,
      _ProductProcessBlockProfile,
      _ProcessBlockProfileText,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WhseProcessTypeCtrlInd_2'
      _WhseProcessTypeCtrlInd,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_WhseProcTypeCtrlIndText_2'
      _WhseProcTypeCtrlIndText,
      
      _WhseProcessTypeCtrlInd_2,
      _WhseProcTypeCtrlIndText_2,
      
      _ProductLoadCategory,
      _ProductLoadCategoryText,
      
      _QtyAdjustmentProfile,
      _QtyAdjustmentPrflT,
      _QtyClassification,
      _QtyClassificationText,
      _PtwyControlStrategy,
      _PtwyControlStrategyText,

      _StorageBinType,
      _StorageBinTypeText,
      _BulkStorageMethod,
      _BulkStorageMethodText,
      _StkRemovalCtrlStrgy,
      _StkRemovalCtrlStrgyText,
      
      _StockDeterminationGroup,
      _StkDetnGroupText,
      _StagingAreaDetnGroup,
      _StagingAreaDetnGroupText,
      _StorageSectionIndicator,
      _StorageSectionIndText,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_UnitOfMeasure_2'
      _UnitOfMeasure,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_UnitOfMeasureText_2'
      _UnitOfMeasureText,
      
      _UnitOfMeasure_2,
      _UnitOfMeasureText_2,
      
      _BackflushMethod,
      _BackflushMethodText,
      _KitQtyCorrelationType,
      _KitQtyCorrlnTypeText,     
      _RelevanceTwoStepPicking,
      _RlvnceTwoStepPickingText,
      _PhysInvtryCycleCounting,
      
      _QualityInspectionGroup,
      _QualityInspectionGroupT           

}
```
