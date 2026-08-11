---
name: I_EWM_PHYSINVTRYITEMC
description: "This CDS view provides information about physical inventory items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SCM-EWM-WOP-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value
semantic_en: "This CDS view provides information about physical inventory items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Warehouse Physical Inventory Item - Cube — CDS view giao diện dựa trên I_EWM_PhysicalInventoryItem."
keywords:
  - "warehouse"
  - "physical"
  - "inventory"
  - "item"
  - "cube"
  - "number"
  - "year"
  - "docs"
tags:
  - SCM
  - bo:companycode
  - component:SCM-EWM-WOP-2CL
  - interface-view
  - inventory
  - SCM-EWM
  - SCM-EWM-WOP
  - SCM-EWM-WOP-2CL
---
# I_EWM_PHYSINVTRYITEMC

**This CDS view provides information about physical inventory items in your warehouse. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SCM-EWM-WOP-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PhysicalInventoryDocNumber` | ✓ | |  |  | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryDocYear` | ✓ | |  |  | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMWarehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `PhysicalInventoryItemNumber` | ✓ | |  |  | `NUMC(6)` | Item |
| `EWMNrOfPhysicalInventoryDocs` |  | |  | `cast( case when PhysicalInventoryItemNumber = '000001' then 1 else 0 end as ewm_de_pi_numberofpinvdocs )` | `INT4(10)` | Number of Physical Inventory Documents |
| `EWMNrOfPhysicalInventoryItems` |  | |  | `cast( 1 as ewm_de_pi_numberofpinvitems )` | `INT4(10)` | Number of Physical Inventory Document Items |
| `EWMPhysicalInventoryStatus` |  | |  |  | `CHAR(4)` | Physical Inventory Status |
| `EWMPhysicalInventoryStatusText` |  | |  |  | `CHAR(60)` | Status of Physical Inventory Item |
| `PhysicalInventoryDocumentType` |  | |  |  | `CHAR(2)` | Physical Inventory Procedure (Document Type of Phys. Inv.) |
| `PInvCountedUTCDateTime` |  | |  | `cast(PInvCountedUTCDateTime as timestamp)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCountedDate` |  | |  | `tstmp_to_dats( cast( PInvCountedUTCDateTime as tstmp), 'UTC', $session.client, 'NULL' )` | `DATS(8)` |  |
| `PhysicalInventoryCountUserName` |  | |  |  | `CHAR(12)` | User Name |
| `PhysInventoryCrtnUTCDateTime` |  | |  | `cast(PhysInventoryCrtnUTCDateTime as timestamp)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryCreationDate` |  | |  | `tstmp_to_dats( cast( PhysInventoryCrtnUTCDateTime as tstmp), 'UTC', $session.client, 'NULL' )` | `DATS(8)` |  |
| `EWMPhysInvtryPostingDateTime` |  | |  | `cast(EWMPhysInvtryPostingDateTime as timestamp)` | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `EWMPhysInvtryPostingDate` |  | |  | `tstmp_to_dats( cast( EWMPhysInvtryPostingDateTime as tstmp), 'UTC', $session.client, 'NULL' )` | `DATS(8)` |  |
| `ActivityArea` |  | |  |  | `CHAR(4)` | Activity Area |
| `EWMPhysicalInventoryPriority` |  | |  |  | `NUMC(1)` | Priority of Physical Inventory |
| `EWMPhysInvtryReason` |  | |  |  | `CHAR(4)` | Reason for Physical Inventory/Inventory Difference |
| `PInvDocumentItemIsPrinted` |  | |  |  | `CHAR(1)` | Status: Physical Inventory Document Item Already Printed Out |
| `EWMStorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `EWMStorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `EWMNumberOfStorageBins` |  | |  | `1` | `INT1(3)` |  |
| `EWMStorageSection` |  | | `_StorageBin` | `EWMStorageSection` | `CHAR(4)` | Storage Section |
| `EWMStorageBinType` |  | | `_StorageBin` | `EWMStorageBinType` | `CHAR(4)` | Storage Bin Type |
| `EWMStorageBinAccessType` |  | | `_StorageBin` | `EWMStorageBinAccessType` | `CHAR(4)` | Bin Access Type |
| `EWMStorageBinSubdivision` |  | | `_StorageBin` | `EWMStorageBinSubdivision` | `CHAR(1)` | Storage Bin is Subdivided |
| `Product` |  | |  |  | `CHAR(40)` | Product |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `EWMStockType` |  | |  |  | `CHAR(2)` | Stock Type |
| `EWMStockUsage` |  | |  |  | `CHAR(1)` | Stock Usage |
| `EWMStockOwner` |  | |  |  | `CHAR(10)` | Owner |
| `StockOwnerName` |  | | `_Owner` | `BusinessPartnerName` | `CHAR(81)` |  |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `NameOfEntitledToDisposeParty` |  | | `_Entitled` | `BusinessPartnerName` | `CHAR(81)` |  |
| `StockDocumentCategory` |  | |  |  | `CHAR(3)` | Special Reference Stock Type |
| `WBSElementInternalID` |  | |  |  | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `SpecialStockIdfgSalesOrder` |  | |  |  | `CHAR(10)` | Special Stock Identification Header |
| `SpecialStockIdfgSalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item of Valuated Sales Order Stock |
| `WhseQualityInspectionType` |  | |  |  | `CHAR(1)` | Inspection ID Type |
| `EWMStockReferenceDocCategory` |  | |  |  | `CHAR(3)` | Doc. Category for Doc. Reference and Doc.-Related Stock |
| `EWMStockReferenceDocument` |  | |  |  | `CHAR(35)` | Reference Document |
| `EWMStockReferenceDocumentItem` |  | |  |  | `NUMC(10)` | Reference Document Item |
| `StockIdentificationNumber` |  | |  |  | `CHAR(20)` | Identification Number of Stock |
| `EWMGoodsReceiptDateTime` |  | |  |  | `DEC(15)` | Goods Receipt Date |
| `EWMGoodsReceiptDate` |  | |  | `cast( substring( cast( EWMGoodsReceiptDateTime as abap.char(23) ), 1, 8 ) as ewm_de_gr_date )` | `DATS(8)` | Goods Receipt Date in UTC |
| `ShelfLifeExpirationDate` |  | |  |  | `DATS(8)` | Shelf Life Expiration Date |
| `CountryOfOrigin` |  | |  |  | `CHAR(3)` | Country/Region of Origin |
| `MatlBatchIsInRstrcdUseStock` |  | |  |  | `CHAR(1)` | Batch in Restricted-Use Stock |
| `EWMPhysInventoryCountingCycle` |  | |  |  | `CHAR(1)` | Cycle Counting Indicator |
| `EWMPInvCycCountingIntvlValue` |  | |  |  | `NUMC(4)` | Cycle Counting Interval in Working Days |
| `EWMPInvCycCountingBufferValue` |  | |  |  | `NUMC(2)` | Cycle Counting Buffer in Working Days |
| `EWMStorageBinIsEmpty` |  | |  | `cast( case when _PhysicalInventoryItemInd.EWMValOfStorageBinIsEmpty = 1 then 'X' else '' end as /scwm/lagp_kzler preserving type )` | `CHAR(1)` | Empty Storage Bin |
| `EWMPhysInvtryHasChangeCounting` |  | |  | `cast( case when _PhysicalInventoryItemInd.EWMNrOfChangedCountItem >= 1 then 'X' else '' end as ewm_de_pi_has_cc preserving type )` | `CHAR(1)` | Physical Inventory Has Changed Count Item |
| `EWMPhysInvtryHasDifference` |  | |  | `cast( case when _PhysicalInventoryItemInd.EWMNrOfDifferenceItem >= 1 then 'X' else '' end as ewm_de_pi_has_diff preserving type )` | `CHAR(1)` | Physical Inventory Has Difference Item |
| `WarehouseOrder` |  | |  |  | `NUMC(10)` | Warehouse Order Number |
| `PhysicalInventoryRefDocYear` |  | |  |  | `NUMC(4)` | Document Year of Physical Inventory Document |
| `EWMRefPhysicalInventoryDoc` |  | |  |  | `NUMC(20)` | Physical Inventory Document Number |
| `PhysicalInventoryRefDocItem` |  | |  |  | `NUMC(6)` | Item |
| `PInvFreeDefinedRefText` |  | |  |  | `CHAR(70)` | Document ID of Reference Document |
| `_Warehouse` | | ✓ | | | | |
| `_StorageType` | | ✓ | | | | |
| `_StorageSection` | | ✓ | | | | |
| `_StorageBin` | | ✓ | | | | |
| `_StorageBinType` | | ✓ | | | | |
| `_StorageBinAccessType` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_StockUsage` | | ✓ | | | | |
| `_Owner` | | ✓ | | | | |
| `_Entitled` | | ✓ | | | | |
| `_ActivityArea` | | ✓ | | | | |
| `_PhysInvtryCycleCounting` | | ✓ | | | | |
| `_DocType` | | ✓ | | | | |
| `_Priority` | | ✓ | | | | |
| `_Reason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Warehouse` | `I_EWM_WarehouseNumber_2` | [1..1] |
| `_StorageType` | `I_EWM_StorageType_2` | [0..1] |
| `_StorageSection` | `I_EWM_StorageSection_2` | [0..1] |
| `_StorageBin` | `I_EWM_StorageBin_2` | [0..1] |
| `_StorageBinType` | `I_EWM_StorageBinType_2` | [0..1] |
| `_StorageBinAccessType` | `I_EWM_StorageBinAccessType` | [0..1] |
| `_StockType` | `I_EWM_StockType_2` | [0..1] |
| `_StockUsage` | `I_EWM_StockUsage` | [0..1] |
| `_Owner` | `I_BusinessPartner` | [0..1] |
| `_Entitled` | `I_BusinessPartner` | [0..1] |
| `_PhysicalInventoryItemInd` | `P_EWM_PhysInvtryItemIndicator` | [0..1] |
| `_ActivityArea` | `I_EWM_ActivityArea_2` | [0..1] |
| `_PhysInvtryCycleCounting` | `I_EWM_PhysInvtryCycleCounting` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_EWM_PHYSINVTRYITEMC')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL }
@Metadata: { allowExtensions:true,
             ignorePropagatedAnnotations: true }
@ObjectModel: { usageType.sizeCategory: #XL,
                usageType.dataClass:  #MIXED,
                usageType.serviceQuality: #D,
                supportedCapabilities: [#ANALYTICAL_PROVIDER,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE],
                modelingPattern:#ANALYTICAL_CUBE}
@VDM.viewType:#COMPOSITE
@EndUserText.label: 'Warehouse Physical Inventory Item - Cube'
define view entity I_EWM_PhysInvtryItemC
  as select from I_EWM_PhysicalInventoryItem as _PIItem
  association [1..1] to I_EWM_WarehouseNumber_2       as _Warehouse                on  $projection.EWMWarehouse = _Warehouse.EWMWarehouse
  //association [0..1] to I_Product                      as _Product                   on  $projection.Product = _Product.Product                                                                                 and $projection.EWMWarehouse        = _Reason.EWMWarehouse
  association [0..1] to I_EWM_StorageType_2           as _StorageType              on  $projection.EWMStorageType = _StorageType.EWMStorageType
                                                                                   and $projection.EWMWarehouse   = _StorageType.EWMWarehouse
  association [0..1] to I_EWM_StorageSection_2        as _StorageSection           on  $projection.EWMStorageSection = _StorageSection.EWMStorageSection
                                                                                   and $projection.EWMStorageType    = _StorageSection.EWMStorageType
                                                                                   and $projection.EWMWarehouse      = _StorageSection.EWMWarehouse
  association [0..1] to I_EWM_StorageBin_2            as _StorageBin               on  $projection.EWMStorageBin = _StorageBin.EWMStorageBin
                                                                                   and $projection.EWMWarehouse  = _StorageBin.EWMWarehouse
  association [0..1] to I_EWM_StorageBinType_2        as _StorageBinType           on  $projection.EWMWarehouse      = _StorageBinType.EWMWarehouse
                                                                                   and $projection.EWMStorageBinType = _StorageBinType.EWMStorageBinType
  association [0..1] to I_EWM_StorageBinAccessType    as _StorageBinAccessType     on  $projection.EWMWarehouse            = _StorageBinAccessType.EWMWarehouse
                                                                                   and $projection.EWMStorageBinAccessType = _StorageBinAccessType.EWMStorageBinAccessType
  association [0..1] to I_EWM_StockType_2             as _StockType                on  $projection.EWMStockType = _StockType.EWMStockType
                                                                                   and $projection.EWMWarehouse = _StockType.EWMWarehouse
  association [0..1] to I_EWM_StockUsage              as _StockUsage               on  $projection.EWMStockUsage = _StockUsage.EWMStockUsage
  association [0..1] to I_BusinessPartner             as _Owner                    on  $projection.EWMStockOwner = _Owner.BusinessPartner
  association [0..1] to I_BusinessPartner             as _Entitled                 on  $projection.EntitledToDisposeParty = _Entitled.BusinessPartner
  association [0..1] to P_EWM_PhysInvtryItemIndicator as _PhysicalInventoryItemInd on  $projection.PhysicalInventoryDocNumber  = _PhysicalInventoryItemInd.PhysicalInventoryDocNumber
                                                                                   and $projection.PhysicalInventoryDocYear    = _PhysicalInventoryItemInd.PhysicalInventoryDocYear
                                                                                   and $projection.PhysicalInventoryItemNumber = _PhysicalInventoryItemInd.PhysicalInventoryItemNumber
  association [0..1] to I_EWM_ActivityArea_2          as _ActivityArea             on  $projection.ActivityArea = _ActivityArea.ActivityArea
                                                                                   and $projection.EWMWarehouse = _ActivityArea.EWMWarehouse
  association [0..1] to I_EWM_PhysInvtryCycleCounting as _PhysInvtryCycleCounting  on  $projection.EWMPhysInventoryCountingCycle = _PhysInvtryCycleCounting.EWMPhysInventoryCountingCycle
                                                                                   and $projection.EWMWarehouse                  = _PhysInvtryCycleCounting.EWMWarehouse
{
  key PhysicalInventoryDocNumber,
  key PhysicalInventoryDocYear,
      @ObjectModel.foreignKey.association:'_Warehouse'
  key EWMWarehouse,
  key PhysicalInventoryItemNumber,

      @Aggregation.default: #SUM
      cast( case when PhysicalInventoryItemNumber = '000001' then 1 else 0 end as ewm_de_pi_numberofpinvdocs ) as EWMNrOfPhysicalInventoryDocs,
      @Aggregation.default: #SUM
      cast( 1  as ewm_de_pi_numberofpinvitems )                                                                as EWMNrOfPhysicalInventoryItems,

      EWMPhysicalInventoryStatus,
      EWMPhysicalInventoryStatusText,
      @ObjectModel.foreignKey.association:'_DocType'
      PhysicalInventoryDocumentType,

      cast(PInvCountedUTCDateTime as timestamp)                                                                as PInvCountedUTCDateTime,
      //cast( substring( cast( PInvCountedUTCDateTime as abap.char(23) ), 1, 8 ) as ewm_de_pi_cnt_utc_date )           as EWMPhysInvtryCountedDate,
      @EndUserText.label: 'Physical Inventory Count Date in UTC'
      tstmp_to_dats( cast( PInvCountedUTCDateTime as tstmp),
                     'UTC',
                     $session.client,
                     'NULL' )                                                                                  as EWMPhysInvtryCountedDate,
      PhysicalInventoryCountUserName,      
      cast(PhysInventoryCrtnUTCDateTime as timestamp)                                                          as PhysInventoryCrtnUTCDateTime,
      @EndUserText.label: 'Physical Inventory Creation Date in UTC'
      tstmp_to_dats( cast( PhysInventoryCrtnUTCDateTime as tstmp),
                     'UTC',
                     $session.client,
                     'NULL' )                                                                                  as EWMPhysInvtryCreationDate,
      cast(EWMPhysInvtryPostingDateTime as timestamp)                                                          as EWMPhysInvtryPostingDateTime,
      @EndUserText.label: 'Physical Inventory Posting Date in UTC'
      tstmp_to_dats( cast( EWMPhysInvtryPostingDateTime as tstmp),
                     'UTC',
                     $session.client,
                     'NULL' )                                                                                  as EWMPhysInvtryPostingDate,
      @ObjectModel.foreignKey.association:'_ActivityArea'
      ActivityArea,
      @ObjectModel.foreignKey.association:'_Priority'
      EWMPhysicalInventoryPriority,
      @ObjectModel.foreignKey.association:'_Reason'
      EWMPhysInvtryReason,
      @Semantics.booleanIndicator
      PInvDocumentItemIsPrinted,
      //SequenceOfPInvDocumentItems,
      @ObjectModel.foreignKey.association:'_StorageType'
      EWMStorageType,

      //@ObjectModel.foreignKey.association:'_StorageBin'
      EWMStorageBin,
      
      @EndUserText.label: 'Number of Storage Bins'
      @Aggregation.default:#SUM
      1 as EWMNumberOfStorageBins,
 
      @ObjectModel.foreignKey.association: '_StorageSection'
      _StorageBin.EWMStorageSection                                                                            as EWMStorageSection,       
      @ObjectModel.foreignKey.association: '_StorageBinType'
      _StorageBin.EWMStorageBinType                                                                            as EWMStorageBinType,
      @ObjectModel.foreignKey.association: '_StorageBinAccessType'
      _StorageBin.EWMStorageBinAccessType                                                                      as EWMStorageBinAccessType,
      _StorageBin.EWMStorageBinSubdivision                                                                     as EWMStorageBinSubdivision,
      Product,
      Batch,
      @ObjectModel.foreignKey.association:'_StockType'
      EWMStockType,
      @ObjectModel.foreignKey.association:'_StockUsage'
      EWMStockUsage,
      @ObjectModel.foreignKey.association:'_Owner'
      EWMStockOwner,
      @EndUserText.label: 'Stock Owner Name'
      _Owner.BusinessPartnerName                                                                               as StockOwnerName,
      @ObjectModel.foreignKey.association:'_Entitled'
      EntitledToDisposeParty,
      @EndUserText.label: 'Name of Party Entitled to Dispose'
      _Entitled.BusinessPartnerName                                                                            as NameOfEntitledToDisposeParty,      
      StockDocumentCategory,
      //StockDocumentNumber,
      //StockItemNumber,
      WBSElementInternalID,
      WBSElementExternalID,
      SpecialStockIdfgSalesOrder,
      SpecialStockIdfgSalesOrderItem,
      WhseQualityInspectionType,
      //QualityInspectionDocument,
      EWMStockReferenceDocCategory,
      EWMStockReferenceDocument,
      EWMStockReferenceDocumentItem,
      StockIdentificationNumber,
      EWMGoodsReceiptDateTime,
      cast( substring( cast( EWMGoodsReceiptDateTime as abap.char(23) ), 1, 8 ) as ewm_de_gr_date )            as EWMGoodsReceiptDate,
      ShelfLifeExpirationDate,
      CountryOfOrigin,
      MatlBatchIsInRstrcdUseStock,
      @ObjectModel.foreignKey.association: '_PhysInvtryCycleCounting'
      EWMPhysInventoryCountingCycle,
      EWMPInvCycCountingIntvlValue,
      EWMPInvCycCountingBufferValue,
      
      @Semantics.booleanIndicator
      cast( case when _PhysicalInventoryItemInd.EWMValOfStorageBinIsEmpty = 1
         then 'X'
         else ''  end as /scwm/lagp_kzler preserving type )                                                    as EWMStorageBinIsEmpty,
      
      @Semantics.booleanIndicator
      cast( case when _PhysicalInventoryItemInd.EWMNrOfChangedCountItem >= 1
         then 'X'
         else ''  end as ewm_de_pi_has_cc preserving type )                                                    as EWMPhysInvtryHasChangeCounting,
      
      @Semantics.booleanIndicator
      cast( case when _PhysicalInventoryItemInd.EWMNrOfDifferenceItem >= 1
         then 'X'
         else ''  end as ewm_de_pi_has_diff preserving type )                                                  as EWMPhysInvtryHasDifference,

      WarehouseOrder,
      PhysicalInventoryRefDocYear,
      EWMRefPhysicalInventoryDoc,
      PhysicalInventoryRefDocItem,
      PInvFreeDefinedRefText,
      _DocType,
      _Priority,
      _Reason,
      //_Product,
      _Warehouse,
      _ActivityArea,
      _StorageBin,
      _StorageBinType,
      _StorageBinAccessType,
      _StorageSection,
      _StorageType,
      _StockType,
      _StockUsage,
      _Owner,
      _Entitled,
      _PhysInvtryCycleCounting
}
```
