---
name: I_PHYSINVTRYDOCITEM
description: Physinvtrydocitem
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - item-level
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCITEM

**Physinvtrydocitem**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `FiscalYear` | ✓ | |  | `gjahr` |
| `PhysicalInventoryDocument` | ✓ | |  | `cast(iseg.iblnr as pi_item_document preserving type)` |
| `PhysicalInventoryDocumentItem` | ✓ | |  | `cast(iseg.zeili as pi_item_number preserving type)` |
| `Material` |  | |  | `matnr` |
| `Plant` |  | |  | `werks` |
| `StorageLocation` |  | |  | `lgort` |
| `Batch` |  | |  | `charg` |
| `RealProductBatch` |  | |  | `cast( case when ( _ProductPlantBasic.ValuationCategory <> '' and _ProductPlantBasic.IsBatchManagementRequired = '' ) then ( '' ) else ( iseg.charg ) end as charg_d )` |
| `ValuationType` |  | | `_BatchPlant` | `InventoryValuationType` |
| `InventorySpecialStockType` |  | |  | `cast(iseg.sobkz as nsdm_spcl_stock_type preserving type)` |
| `PhysicalInventoryStockType` |  | |  | `bstar` |
| `SalesOrder` |  | |  | `kdauf` |
| `SalesOrderItem` |  | |  | `cast(iseg.kdpos as pi_sales_order_item preserving type)` |
| `ScheduleLine` |  | |  | `cast(iseg.kdein as pi_sales_order_sched_line preserving type)` |
| `Supplier` |  | |  | `cast(iseg.lifnr as mmim_supplier preserving type)` |
| `Customer` |  | |  | `cast(iseg.kunnr as mmim_customer preserving type)` |
| `StockOwner` |  | |  | `disub_owner` |
| `LastChangeUser` |  | |  | `usnam` |
| `LastChangeDate` |  | |  | `aedat` |
| `CountedByUser` |  | |  | `usnaz` |
| `PhysicalInventoryLastCountDate` |  | |  | `zldat` |
| `AdjustmentPostingMadeByUser` |  | |  | `cast(iseg.usnad as pi_item_adjustment_posting_usr preserving type)` |
| `PostingDate` |  | |  | `cast(iseg.budat as mmim_postingdate preserving type)` |
| `PhysInventoryReferenceNumber` |  | |  | `cast(iseg.xblni as pi_item_reference preserving type )` |
| `PhysicalInventoryItemIsCounted` |  | |  | `cast(iseg.xzael as pi_is_item_counted preserving type)` |
| `PhysInvtryDifferenceIsPosted` |  | |  | `cast(iseg.xdiff as pi_is_item_difference_posted preserving type)` |
| `PhysInvtryItemIsRecounted` |  | |  | `cast(iseg.xnzae as pi_is_item_recounted preserving type)` |
| `PhysInvtryItemIsDeleted` |  | |  | `cast(iseg.xloek as pi_is_item_deleted preserving type)` |
| `IsHandledInAltvUnitOfMsr` |  | |  | `cast(iseg.xamei as pi_item_is_handled_in_altv_uom preserving type)` |
| `BookQtyBfrCountInMatlBaseUnit` |  | |  | `buchm` |
| `PhysicalInventoryItemIsZero` |  | |  | `cast(iseg.xnull as pi_item_is_zero_count preserving type)` |
| `Quantity` |  | |  | `cast(iseg.menge as pi_item_cntd_qty preserving type)` |
| `MaterialBaseUnit` |  | |  | `meins` |
| `QuantityInUnitOfEntry` |  | |  | `cast(iseg.erfmg as pi_item_qty_in_entry_uom preserving type)` |
| `UnitOfEntry` |  | |  | `cast(iseg.erfme as pi_item_entry_uom preserving type)` |
| `MaterialDocumentYear` |  | |  | `cast(iseg.mjahr as nsdm_mjahr preserving type)` |
| `MaterialDocument` |  | |  | `mblnr` |
| `MaterialDocumentItem` |  | |  | `cast(iseg.zeile as nsdm_mblpo preserving type)` |
| `PhysInvtryRecountDocument` |  | |  | `nblnr` |
| `DifferenceAmountInCoCodeCrcy` |  | |  | `cast(iseg.dmbtr as pi_item_diff_value preserving type)` |
| `Currency` |  | |  | `cast(iseg.waers as nsdm_comp_code_currency preserving type)` |
| `CycleCountType` |  | |  | `cast(iseg.abcin as pi_item_cycle_count_type preserving type)` |
| `WBSElementInternalID` |  | |  | `ps_psp_pnr` |
| `WBSElementInternalID_2` |  | |  | `cast ( iseg.ps_psp_pnr as ps_s4_pspnr )` |
| `SlsPrcAmtInclVATInCoCodeCrcy` |  | |  | `vkwrt` |
| `SlsPrcAmtExclVATInCoCodeCrcy` |  | |  | `vkwra` |
| `DiffAmountOnCountEntryInCCCrcy` |  | |  | `diwzl` |
| `EnteredSlsAmtInCoCodeCrcy` |  | |  | `cast(iseg.exvkw as pi_item_ext_value_sp preserving type)` |
| `SlsPriceAmountInCoCodeCrcy` |  | |  | `cast(iseg.buchw as pi_item_sp_of_book_qty preserving type)` |
| `IsValueOnlyMaterial` |  | |  | `cast(iseg.kwart as pi_item_is_value_only_mat preserving type)` |
| `PhysInvtryCtAmtInCoCodeCrcy` |  | |  | `cast(iseg.wrtzl as pi_item_counted_qty_value preserving type)` |
| `BookQtyAmountInCoCodeCrcy` |  | |  | `cast(iseg.wrtbm as pi_item_book_value preserving type)` |
| `ProductCategory` |  | |  | `cast(iseg.attyp as prodcategory preserving type)` |
| `ReasonForPhysInvtryDifference` |  | |  | `cast(iseg.grund as pi_item_difference_reason preserving type)` |
| `CrossPlantConfigurableMaterial` |  | |  | `cast(iseg.samat as pi_item_cross_plant_cnf_mat preserving type)` |
| `PhysInvtryDiffIsDistributed` |  | |  | `cast(iseg.xdispatch as pi_item_is_diff_distributed preserving type)` |
| `_Material` | | ✓ | | |
| `_Product` | | ✓ | | |
| `_ProductPlant` | | ✓ | | |
| `_ProductPlantBasic` | | ✓ | | |
| `_ProductStorageLocation` | | ✓ | | |
| `_BatchPlant` | | ✓ | | |
| `_CrossPlantConfigurableMatl` | | ✓ | | |
| `_CrossPlantConfigurableProd` | | ✓ | | |
| `_LastChangeUser` | | ✓ | | |
| `_CountedByUser` | | ✓ | | |
| `_AdjustmentPostingMadeByUser` | | ✓ | | |
| `_MaterialBaseUnit` | | ✓ | | |
| `_UnitOfEntry` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_Supplier` | | ✓ | | |
| `_SupplierCompanyByPlant` | | ✓ | | |
| `_Customer` | | ✓ | | |
| `_CustomerCompanyByPlant` | | ✓ | | |
| `_SalesOrder` | | ✓ | | |
| `_SalesOrderItem` | | ✓ | | |
| `_SalesOrderScheduleLine` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_StorageLocation` | | ✓ | | |
| `_PhysInvtryStatusT` | | ✓ | | |
| `_PhysInvtryDocHeader` | | ✓ | | |
| `_PhysicalInventoryStockType` | | ✓ | | |
| `_InventorySpecialStockType` | | ✓ | | |
| `_ProductCategory` | | ✓ | | |
| `_WBSElement` | | ✓ | | |
| `_WBSElementBasic` | | ✓ | | |
| `_PhysInvtryDocFiscalYear` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Material` | `I_Material` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductPlant` | `I_ProductPlant` | [0..1] |
| `_ProductPlantBasic` | `I_ProductPlantBasic` | [0..1] |
| `_ProductStorageLocation` | `I_ProductStorageLocation` | [0..1] |
| `_BatchPlant` | `I_BatchPlant` | [0..1] |
| `_CrossPlantConfigurableMatl` | `I_Material` | [0..1] |
| `_CrossPlantConfigurableProd` | `I_Product` | [0..1] |
| `_LastChangeUser` | `I_User` | [0..1] |
| `_CountedByUser` | `I_User` | [0..1] |
| `_AdjustmentPostingMadeByUser` | `I_User` | [0..1] |
| `_MaterialBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_UnitOfEntry` | `I_UnitOfMeasure` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_SupplierCompanyByPlant` | `I_SupplierCompanyByPlant` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_CustomerCompanyByPlant` | `I_CustomerCompanyByPlant` | [1..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_SalesOrderScheduleLine` | `I_SalesOrderScheduleLine` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [0..1] |
| `_PhysInvtryStatusT` | `I_PhysInvtryStatusT` | [0..*] |
| `_PhysInvtryDocHeader` | `I_PhysInvtryDocHeader` | [1..1] |
| `_PhysicalInventoryStockType` | `I_PhysInvtryStockType` | [0..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_ProductCategory` | `I_ProductCategory` | [0..1] |
| `_WBSElement` | `I_WBSElementByInternalKey` | [0..1] |
| `_WBSElementBasic` | `I_WBSElementBasicData` | [0..1] |
| `_PhysInvtryDocFiscalYear` | `I_PhysInvtryDocFiscalYear` | [1..1] |
| `_Extension` | `E_PhysInvtryDocumentItem` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Physical Inventory Document Item'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  privilegedAssociations: ['_LastChangeUser', '_CountedByUser', '_AdjustmentPostingMadeByUser'],
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@ObjectModel: {
                 usageType: {
                              sizeCategory: #XL,
                              serviceQuality: #B,
                              dataClass: #TRANSACTIONAL
                            },
                 representativeKey: 'PhysicalInventoryDocumentItem',
--                 semanticKey: ['PhysicalInventoryDocument', 'FiscalYear', 'PhysicalInventoryDocumentItem'],             removed due to P2 ATC compatibility error
                 supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #EXTRACTION_DATA_SOURCE, #ANALYTICAL_DIMENSION],
                 sapObjectNodeType.name: 'PhysicalInventoryDocumentItem'
              }
@VDM: {
        viewType: #BASIC,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata: {
             ignorePropagatedAnnotations: true
           }

@Metadata.allowExtensions:true

@Analytics: {
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
        }
    },
    internalName: #LOCAL,
    technicalName: 'IPIDOCITEM'
}

define view entity I_PhysInvtryDocItem
  as select from iseg

  association [0..1] to I_Material                  as _Material                    on  $projection.Material = _Material.Material

  association [0..1] to I_Product                   as _Product                     on  $projection.Material = _Product.Product

  association [0..1] to I_ProductPlant              as _ProductPlant                on  $projection.Material = _ProductPlant.Product
                                                                                    and $projection.Plant    = _ProductPlant.Plant
  association [0..1] to I_ProductPlantBasic         as _ProductPlantBasic           on  $projection.Material = _ProductPlantBasic.Product
                                                                                    and $projection.Plant    = _ProductPlantBasic.Plant

  association [0..1] to I_ProductStorageLocation    as _ProductStorageLocation      on  $projection.Material        = _ProductStorageLocation.Product
                                                                                    and $projection.Plant           = _ProductStorageLocation.Plant
                                                                                    and $projection.StorageLocation = _ProductStorageLocation.StorageLocation

  association [0..1] to I_BatchPlant                as _BatchPlant                  on  $projection.Material = _BatchPlant.Material
                                                                                    and $projection.Plant = _BatchPlant.Plant
                                                                                    and $projection.Batch = _BatchPlant.Batch

  association [0..1] to I_Material                  as _CrossPlantConfigurableMatl  on  $projection.CrossPlantConfigurableMaterial = _CrossPlantConfigurableMatl.Material

  association [0..1] to I_Product                   as _CrossPlantConfigurableProd  on  $projection.CrossPlantConfigurableMaterial = _CrossPlantConfigurableProd.Product

  association [0..1] to I_User                      as _LastChangeUser              on  $projection.LastChangeUser = _LastChangeUser.UserID

  association [0..1] to I_User                      as _CountedByUser               on  $projection.CountedByUser = _CountedByUser.UserID

  association [0..1] to I_User                      as _AdjustmentPostingMadeByUser on  $projection.AdjustmentPostingMadeByUser = _AdjustmentPostingMadeByUser.UserID

  association [0..1] to I_UnitOfMeasure             as _MaterialBaseUnit            on  $projection.MaterialBaseUnit = _MaterialBaseUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _UnitOfEntry                 on  $projection.UnitOfEntry = _UnitOfEntry.UnitOfMeasure

  association [0..1] to I_Currency                  as _Currency                    on  $projection.Currency = _Currency.Currency

  association [0..1] to I_Supplier                  as _Supplier                    on  $projection.Supplier = _Supplier.Supplier

  association [1..1] to I_SupplierCompanyByPlant    as _SupplierCompanyByPlant      on  $projection.Supplier = _SupplierCompanyByPlant.Supplier
                                                                                    and $projection.Plant    = _SupplierCompanyByPlant.Plant

  association [0..1] to I_Customer                  as _Customer                    on  $projection.Customer = _Customer.Customer

  association [1..1] to I_CustomerCompanyByPlant    as _CustomerCompanyByPlant      on  $projection.Customer = _CustomerCompanyByPlant.Customer
                                                                                    and $projection.Plant    = _CustomerCompanyByPlant.Plant

  association [0..1] to I_SalesOrder                as _SalesOrder                  on  $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..1] to I_SalesOrderItem            as _SalesOrderItem              on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
                                                                                    and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem

  association [0..1] to I_SalesOrderScheduleLine    as _SalesOrderScheduleLine      on  $projection.SalesOrder     = _SalesOrderScheduleLine.SalesOrder
                                                                                    and $projection.SalesOrderItem = _SalesOrderScheduleLine.SalesOrderItem
                                                                                    and $projection.ScheduleLine   = _SalesOrderScheduleLine.ScheduleLine

  association [0..1] to I_Plant                     as _Plant                       on  $projection.Plant = _Plant.Plant

  association [0..1] to I_StorageLocation           as _StorageLocation             on  $projection.Plant           = _StorageLocation.Plant
                                                                                    and $projection.StorageLocation = _StorageLocation.StorageLocation

  association [0..*] to I_PhysInvtryStatusT         as _PhysInvtryStatusT           on  $projection.PhysicalInventoryItemIsCounted = _PhysInvtryStatusT.PhysicalInventoryItemIsCounted
                                                                                    and $projection.PhysInvtryDifferenceIsPosted   = _PhysInvtryStatusT.PhysInvtryDifferenceIsPosted
                                                                                    and $projection.PhysInvtryItemIsRecounted      = _PhysInvtryStatusT.PhysInvtryItemIsRecounted
                                                                                    and $projection.PhysInvtryItemIsDeleted        = _PhysInvtryStatusT.PhysInvtryItemIsDeleted

  association [1..1] to I_PhysInvtryDocHeader       as _PhysInvtryDocHeader         on  $projection.PhysicalInventoryDocument = _PhysInvtryDocHeader.PhysicalInventoryDocument
                                                                                    and $projection.FiscalYear                = _PhysInvtryDocHeader.FiscalYear

//  association [0..*] to I_PhysInvtryDocSrlNmbr      as _PhysInvtryDocSrlNmbr        on  $projection.PhysicalInventoryDocument     = _PhysInvtryDocSrlNmbr.PhysicalInventoryDocument
//                                                                                    and $projection.FiscalYear                    = _PhysInvtryDocSrlNmbr.FiscalYear
//                                                                                    and $projection.PhysicalInventoryDocumentItem = _PhysInvtryDocSrlNmbr.PhysicalInventoryDocumentItem

  association [0..1] to I_PhysInvtryStockType       as _PhysicalInventoryStockType  on  $projection.PhysicalInventoryStockType = _PhysicalInventoryStockType.PhysicalInventoryStockType

  association [0..1] to I_InventorySpecialStockType as _InventorySpecialStockType   on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [0..1] to I_ProductCategory           as _ProductCategory             on  $projection.ProductCategory = _ProductCategory.ProductCategory

  association [0..1] to I_WBSElementByInternalKey as _WBSElement on  $projection.WBSElementInternalID = _WBSElement.WBSElementInternalID
                                                                 and $projection.WBSElementInternalID <> '00000000'

  association [0..1] to I_WBSElementBasicData as _WBSElementBasic on  $projection.WBSElementInternalID = _WBSElementBasic.WBSElementInternalID
                                                                  and $projection.WBSElementInternalID <> '00000000'

  association [1..1] to I_PhysInvtryDocFiscalYear    as _PhysInvtryDocFiscalYear   on  $projection.FiscalYear = _PhysInvtryDocFiscalYear.FiscalYear

  // Custom Fields extensibility
  association [0..1] to E_PhysInvtryDocumentItem    as _Extension                   on  $projection.FiscalYear = _Extension.FiscalYear
                                                                                    and $projection.PhysicalInventoryDocument = _Extension.PhysicalInventoryDocument
                                                                                    and $projection.PhysicalInventoryDocumentItem = _Extension.PhysicalInventoryDocumentItem

{
  @ObjectModel.foreignKey.association: '_PhysInvtryDocFiscalYear'
  key iseg.gjahr                                                            as FiscalYear,
  @ObjectModel.foreignKey.association: '_PhysInvtryDocHeader'
  key cast(iseg.iblnr as pi_item_document preserving type)                  as PhysicalInventoryDocument,
  key cast(iseg.zeili as pi_item_number preserving type)                    as PhysicalInventoryDocumentItem,

      @ObjectModel.foreignKey.association: '_Material'
      iseg.matnr                                                            as Material,
      @ObjectModel.foreignKey.association: '_Plant'
      iseg.werks                                                            as Plant,
      @ObjectModel.foreignKey.association: '_StorageLocation'
      iseg.lgort                                                            as StorageLocation,
      iseg.charg                                                            as Batch,
      cast(
        case when ( _ProductPlantBasic.ValuationCategory <> '' and _ProductPlantBasic.IsBatchManagementRequired = '' )
        then ( '' )
        else ( iseg.charg ) end
      as charg_d ) as RealProductBatch,
      _BatchPlant.InventoryValuationType                                    as ValuationType,
      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      cast(iseg.sobkz as nsdm_spcl_stock_type preserving type)              as InventorySpecialStockType,
      @ObjectModel.foreignKey.association: '_PhysicalInventoryStockType'
      iseg.bstar                                                            as PhysicalInventoryStockType,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      iseg.kdauf                                                            as SalesOrder,
      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(iseg.kdpos as pi_sales_order_item preserving type)               as SalesOrderItem,
      @ObjectModel.foreignKey.association: '_SalesOrderScheduleLine'
      cast(iseg.kdein as pi_sales_order_sched_line preserving type)         as ScheduleLine,
      @ObjectModel.foreignKey.association: '_Supplier'
      cast(iseg.lifnr as mmim_supplier preserving type)                     as Supplier,
      @ObjectModel.foreignKey.association: '_Customer'
      cast(iseg.kunnr as mmim_customer preserving type)                     as Customer,

      iseg.disub_owner                                                      as StockOwner,

      iseg.usnam                                                            as LastChangeUser,
      iseg.aedat                                                            as LastChangeDate,
      iseg.usnaz                                                            as CountedByUser,
      iseg.zldat                                                            as PhysicalInventoryLastCountDate,
      cast(iseg.usnad as pi_item_adjustment_posting_usr preserving type)    as AdjustmentPostingMadeByUser,
      cast(iseg.budat as mmim_postingdate preserving type)                  as PostingDate,
      cast(iseg.xblni as pi_item_reference preserving type )                as PhysInventoryReferenceNumber,
      cast(iseg.xzael as pi_is_item_counted preserving type)                as PhysicalInventoryItemIsCounted,
      cast(iseg.xdiff as pi_is_item_difference_posted preserving type)      as PhysInvtryDifferenceIsPosted,
      cast(iseg.xnzae as pi_is_item_recounted preserving type)              as PhysInvtryItemIsRecounted,
      cast(iseg.xloek as pi_is_item_deleted preserving type)                as PhysInvtryItemIsDeleted,
      cast(iseg.xamei as pi_item_is_handled_in_altv_uom preserving type)    as IsHandledInAltvUnitOfMsr,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      //@DefaultAggregation: #NONE
      iseg.buchm                                                            as BookQtyBfrCountInMatlBaseUnit,
      cast(iseg.xnull as pi_item_is_zero_count preserving type)             as PhysicalInventoryItemIsZero,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      //@DefaultAggregation: #NONE
      cast(iseg.menge as pi_item_cntd_qty preserving type)                  as Quantity,
      @ObjectModel.foreignKey.association: '_MaterialBaseUnit'
      iseg.meins                                                            as MaterialBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfEntry'
      //@DefaultAggregation: #NONE
      cast(iseg.erfmg as pi_item_qty_in_entry_uom preserving type)          as QuantityInUnitOfEntry,
      @ObjectModel.foreignKey.association: '_UnitOfEntry'
      cast(iseg.erfme as pi_item_entry_uom preserving type)                 as UnitOfEntry,
      cast(iseg.mjahr as nsdm_mjahr preserving type)                        as MaterialDocumentYear,
      iseg.mblnr                                                            as MaterialDocument,
      cast(iseg.zeile as nsdm_mblpo preserving type)                        as MaterialDocumentItem,
      iseg.nblnr                                                            as PhysInvtryRecountDocument,
      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      cast(iseg.dmbtr as pi_item_diff_value preserving type)                as DifferenceAmountInCoCodeCrcy,
      @ObjectModel.foreignKey.association: '_Currency'
      cast(iseg.waers as nsdm_comp_code_currency preserving type)           as Currency,
      cast(iseg.abcin as pi_item_cycle_count_type preserving type)          as CycleCountType,

      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: 'WBSElementInternalID_2'
      }
      @API.element: {
        releaseState: #DEPRECATED,
        successor: 'WBSElementInternalID_2'
      }
      iseg.ps_psp_pnr                                                       as WBSElementInternalID,
      cast ( iseg.ps_psp_pnr as ps_s4_pspnr )                               as WBSElementInternalID_2,

      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      iseg.vkwrt                                                            as SlsPrcAmtInclVATInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      iseg.vkwra                                                            as SlsPrcAmtExclVATInCoCodeCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      iseg.diwzl                                                            as DiffAmountOnCountEntryInCCCrcy,

      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      cast(iseg.exvkw as pi_item_ext_value_sp preserving type)              as EnteredSlsAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      cast(iseg.buchw as pi_item_sp_of_book_qty preserving type)            as SlsPriceAmountInCoCodeCrcy,
      cast(iseg.kwart as pi_item_is_value_only_mat preserving type)         as IsValueOnlyMaterial,

      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      cast(iseg.wrtzl as pi_item_counted_qty_value preserving type)         as PhysInvtryCtAmtInCoCodeCrcy,
      @Semantics.amount.currencyCode: 'Currency'
      //@DefaultAggregation: #NONE
      cast(iseg.wrtbm as pi_item_book_value preserving type)                as BookQtyAmountInCoCodeCrcy,

      @ObjectModel.foreignKey.association: '_ProductCategory'
      cast(iseg.attyp as prodcategory preserving type)                      as ProductCategory,
      cast(iseg.grund as pi_item_difference_reason preserving type)         as ReasonForPhysInvtryDifference,
      @ObjectModel.foreignKey.association: '_CrossPlantConfigurableMatl'
      cast(iseg.samat as pi_item_cross_plant_cnf_mat preserving type)       as CrossPlantConfigurableMaterial,
      cast(iseg.xdispatch as pi_item_is_diff_distributed preserving type)   as PhysInvtryDiffIsDistributed,

      _Material,
      _Product,
      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: '_ProductPlantBasic'
      }
      @API.element: {
        releaseState: #DEPRECATED,
        successor: '_ProductPlantBasic'
      }
      _ProductPlant,
      _ProductPlantBasic,
      _BatchPlant,
      _ProductStorageLocation,
      _CrossPlantConfigurableMatl,
      _CrossPlantConfigurableProd,
      _LastChangeUser,
      _CountedByUser,
      _AdjustmentPostingMadeByUser,
      _MaterialBaseUnit,
      _Currency,
      _Supplier,
      _Customer,
      _SalesOrder,
      _SalesOrderItem,
      _SalesOrderScheduleLine,
      _Plant,
      _StorageLocation,
      _UnitOfEntry,
      _PhysInvtryStatusT,
      _PhysInvtryDocHeader,
//      _PhysInvtryDocSrlNmbr,
      _PhysicalInventoryStockType,
      _InventorySpecialStockType,
      _ProductCategory,
      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: '_WBSElementBasic'
      }
      @API.element: {
        releaseState: #DEPRECATED,
        successor: '_WBSElementBasic'
      }
      _WBSElement,
      _WBSElementBasic,
      _PhysInvtryDocFiscalYear,
      @Consumption.hidden: true
      _SupplierCompanyByPlant,
      @Consumption.hidden: true
      _CustomerCompanyByPlant
}
```
