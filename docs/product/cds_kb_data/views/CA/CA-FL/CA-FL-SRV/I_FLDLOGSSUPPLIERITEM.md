---
name: I_FLDLOGSSUPPLIERITEM
description: "Fldlogssupplieritem"
app_component: CA-FL-SRV
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-FL
  - CA-FL-SRV
  - interface-view
  - supplier
  - item-level
  - component:CA-FL-SRV
  - lob:Cross-Application Components
  - bo:Supplier
---
# I_FLDLOGSSUPPLIERITEM

**Fldlogssupplieritem**

| Property | Value |
|---|---|
| App Component | `CA-FL-SRV` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsSuplrItemUUID` | ✓ | |  | `fldlogssuplritemuuid` | `RAW(16)` | Supplier Item UUID |
| `FldLogsSuplrItemType` |  | |  | `fldlogssuplritemtype` | `CHAR(2)` | Supplier Item Type |
| `FldLogsSuplrParentItemUUID` |  | |  | `fldlogssuplrparentitemuuid` | `RAW(16)` | Supplier Item UUID |
| `FldLogsSuplrItemSerialNumber` |  | |  | `fldlogssuplritemserialnumber` | `CHAR(30)` | Supplier Item Manufacturer's Serial Number |
| `FldLogsSuplrItemName` |  | |  | `fldlogssuplritemname` | `CHAR(40)` | Supplier Item Name |
| `PreferredSupplier` |  | |  | `preferredsupplier` | `CHAR(10)` | Account Number of Supplier |
| `FldLogsSuplrBasePlant` |  | |  | `fldlogssuplrbaseplant` | `CHAR(4)` | Plant |
| `FldLogsRemotePlant` |  | |  | `fldlogsremoteplant` | `CHAR(4)` | Plant |
| `FldLogsSuplrItmPOItmUniqueID` |  | |  | `fldlogssuplritmpoitmuniqueid` | `CHAR(16)` | Purchase Order Item Unique ID |
| `FldLogsSupplyProcess` |  | |  | `fldlogssupplyprocess` | `CHAR(4)` | Supply Process |
| `FldLogsSuplrItemVislInspCode` |  | |  | `fldlogssuplritemvislinspcode` | `CHAR(2)` | Supplier Item Visual Inspection Code |
| `PurgDocNetPriceAmount` |  | |  | `purgdocnetpriceamount` | `CURR(11)` | Net Price in Purchasing Document (in Document Currency) |
| `FldLogsSuplrItemRateUnit` |  | |  | `fldlogssuplritemrateunit` | `CUKY(5)` | Currency Key |
| `FldLogsSuplrItemQuantity` |  | |  | `fldlogssuplritemquantity` | `QUAN(13)` | Quantity |
| `FldLogsSuplrItemQuantityUnit` |  | |  | `fldlogssuplritemquantityunit` | `UNIT(3)` | Base Unit of Measure |
| `FldLogsSuplrItemGrossVolume` |  | |  | `fldlogssuplritemgrossvolume` | `QUAN(13)` | Volume |
| `FldLogsSuplrItmGrossVolumeUnit` |  | |  | `fldlogssuplritmgrossvolumeunit` | `UNIT(3)` | Volume Unit |
| `ProductGrossWeight` |  | |  | `productgrossweight` | `QUAN(13)` | Gross Weight |
| `ProductWeightUnit` |  | |  | `productweightunit` | `UNIT(3)` | Unit of Weight |
| `FldLogsSuplrItemLength` |  | |  | `fldlogssuplritemlength` | `QUAN(13)` | Length |
| `FldLogsSuplrItemWidth` |  | |  | `fldlogssuplritemwidth` | `QUAN(13)` | Width |
| `FldLogsSuplrItemHeight` |  | |  | `fldlogssuplritemheight` | `QUAN(13)` | Height |
| `FldLogsSuplrItemMeasureUnit` |  | |  | `fldlogssuplritemmeasureunit` | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `FldLogsSuplrItemStatusID` |  | |  | `fldlogssuplritemstatusid` | `CHAR(3)` | Supplier Item Status ID |
| `ItemIsDangerousGood` |  | |  | `itemisdangerousgood` | `CHAR(1)` | Boolean Variable (X = True, - = False, Space = Unknown) |
| `FldLogsSuplrItemDngrsGdsCat` |  | |  | `dangerousgoodsidnnumbercnctntd` | `CHAR(52)` | Supplier Item DG ID Number Concatenated |
| `DangerousGoodsIdnNumberCnctntd` |  | |  | `cast(dangerousgoodsidnnumbercnctntd as abap.char( 51 ))` | `CHAR(51)` |  |
| `FldLogsIsWorkOrderOnHold` |  | |  | `fldlogsisworkorderonhold` | `CHAR(1)` | Work Order On Hold Indicator |
| `FldLogsSuplrItemPlndDelivDate` |  | |  | `fldlogssuplritemplnddelivdate` | `DATS(8)` | Item Delivery Date |
| `FldLogsSuplrItmChangeDateTime` |  | |  | `fldlogssuplritmchangedatetime` | `DEC(15)` | Changed On |
| `FldLogsSuplrItmPackggTypeCode` |  | |  | `fldlogssuplritmpackggtypecode` | `CHAR(2)` | Supplier Item Packaging Type |
| `PackagingMaterial` |  | |  | `packagingmaterial` | `CHAR(40)` | Packaging Material |
| `FldLogsContainerOwner` |  | |  | `fldlogscontainerowner` | `CHAR(10)` | Business Partner Number |
| `FldLogsSupplierItemSource` |  | |  | `fldlogssupplieritemsource` | `CHAR(2)` | Source Indicator |
| `FldLogsSealNumber1` |  | |  | `fldlogssealnumber1` | `CHAR(15)` | Seal Number |
| `FldLogsSealNumber2` |  | |  | `fldlogssealnumber2` | `CHAR(15)` | Seal Number |
| `FldLogsSealNumber3` |  | |  | `fldlogssealnumber3` | `CHAR(15)` | Seal Number |
| `FldLogsSealNumber4` |  | |  | `fldlogssealnumber4` | `CHAR(15)` | Seal Number |
| `FldLogsSealNumber5` |  | |  | `fldlogssealnumber5` | `CHAR(15)` | Seal Number |
| `IsBusinessPurposeCompleted` |  | | `_Owner` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `SuplrCoIsBusPrpsCmpltd` |  | | `_PreferredSupplier` | `IsBusinessPurposeCompleted` | `CHAR(1)` | Business Purpose Completed Flag |
| `FldLogsTransferType` |  | |  | `fldlogstransfertype` | `CHAR(1)` | FL: Transfer Type |
| `FieldLogisticsTransferPlant` |  | |  | `fieldlogisticstransferplant` | `CHAR(4)` | Plant |
| `_Supplier` |  | |  | `_PreferredSupplier` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PreferredSupplier` | `I_Supplier` | [0..1] |
| `_Owner` | `I_BusinessPartner` | [0..1] |
| `_SuplritemExtension` | `E_FldLogsSupplierItem` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IFLOGSUPLRITEM'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey: true
@VDM.viewType: #BASIC

@AccessControl: {
authorizationCheck: #CHECK,
personalData.blocking: #REQUIRED
}
@EndUserText.label: 'Field Logistics Supplier Items'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #TRANSACTIONAL
//@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET]
@Search.searchable: true

//@AbapCatalog.extensibility.allowNewCompositions:true

define view entity I_FldLogsSupplierItem
  as select from flog_suplritem
  association [0..1] to I_Supplier            as _PreferredSupplier  on $projection.PreferredSupplier = _PreferredSupplier.Supplier
  association [0..1] to I_BusinessPartner     as _Owner              on $projection.FldLogsContainerOwner = _Owner.BusinessPartner
  association [0..1] to E_FldLogsSupplierItem as _SuplritemExtension on $projection.FldLogsSuplrItemUUID = _SuplritemExtension.FldLogsSuplrItemUUID
{
  key fldlogssuplritemuuid                                    as FldLogsSuplrItemUUID,
      fldlogssuplritemtype                                    as FldLogsSuplrItemType,
      fldlogssuplrparentitemuuid                              as FldLogsSuplrParentItemUUID,
      @Search.defaultSearchElement: true
      fldlogssuplritemserialnumber                            as FldLogsSuplrItemSerialNumber,
      @Search.defaultSearchElement: true
      fldlogssuplritemname                                    as FldLogsSuplrItemName,
      preferredsupplier                                       as PreferredSupplier,
      fldlogssuplrbaseplant                                   as FldLogsSuplrBasePlant,
      fldlogsremoteplant                                      as FldLogsRemotePlant,
      fldlogssuplritmpoitmuniqueid                            as FldLogsSuplrItmPOItmUniqueID,
      fldlogssupplyprocess                                    as FldLogsSupplyProcess,
      fldlogssuplritemvislinspcode                            as FldLogsSuplrItemVislInspCode,
      @Semantics.amount.currencyCode: 'FldLogsSuplrItemRateUnit'
      purgdocnetpriceamount                                   as PurgDocNetPriceAmount,
      fldlogssuplritemrateunit                                as FldLogsSuplrItemRateUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemQuantityUnit'
      fldlogssuplritemquantity                                as FldLogsSuplrItemQuantity,
      fldlogssuplritemquantityunit                            as FldLogsSuplrItemQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItmGrossVolumeUnit'
      fldlogssuplritemgrossvolume                             as FldLogsSuplrItemGrossVolume,
      fldlogssuplritmgrossvolumeunit                          as FldLogsSuplrItmGrossVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'ProductWeightUnit'
      productgrossweight                                      as ProductGrossWeight,
      productweightunit                                       as ProductWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      fldlogssuplritemlength                                  as FldLogsSuplrItemLength,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      fldlogssuplritemwidth                                   as FldLogsSuplrItemWidth,
      @Semantics.quantity.unitOfMeasure: 'FldLogsSuplrItemMeasureUnit'
      fldlogssuplritemheight                                  as FldLogsSuplrItemHeight,
      fldlogssuplritemmeasureunit                             as FldLogsSuplrItemMeasureUnit,
      fldlogssuplritemstatusid                                as FldLogsSuplrItemStatusID,
      itemisdangerousgood                                     as ItemIsDangerousGood,
      dangerousgoodsidnnumbercnctntd                          as FldLogsSuplrItemDngrsGdsCat,
      @API.element: { releaseState: #DEPRECATED, successor: 'FldLogsSuplrItemDngrsGdsCat' }
      cast(dangerousgoodsidnnumbercnctntd as abap.char( 51 )) as DangerousGoodsIdnNumberCnctntd,
      fldlogsisworkorderonhold                                as FldLogsIsWorkOrderOnHold,
      fldlogssuplritemplnddelivdate                           as FldLogsSuplrItemPlndDelivDate,
      fldlogssuplritmchangedatetime                           as FldLogsSuplrItmChangeDateTime,
      fldlogssuplritmpackggtypecode                           as FldLogsSuplrItmPackggTypeCode,
      packagingmaterial                                       as PackagingMaterial,
      fldlogscontainerowner                                   as FldLogsContainerOwner,
      fldlogssupplieritemsource                               as FldLogsSupplierItemSource,
      fldlogssealnumber1                                      as FldLogsSealNumber1,
      fldlogssealnumber2                                      as FldLogsSealNumber2,
      fldlogssealnumber3                                      as FldLogsSealNumber3,
      fldlogssealnumber4                                      as FldLogsSealNumber4,
      fldlogssealnumber5                                      as FldLogsSealNumber5,
      @Semantics.booleanIndicator: true
      _Owner.IsBusinessPurposeCompleted                       as IsBusinessPurposeCompleted,
      @Semantics.booleanIndicator: true
      _PreferredSupplier.IsBusinessPurposeCompleted           as SuplrCoIsBusPrpsCmpltd,
      fldlogstransfertype                                     as FldLogsTransferType,
      fieldlogisticstransferplant                             as FieldLogisticsTransferPlant,
      _PreferredSupplier                                      as _Supplier
      //      _PreferredSupplier.DataControllerSet as DataControllerSet ,
      //       _PreferredSupplier.DataController1 as DataController1 ,
      //       _PreferredSupplier.DataController2 as DataController2 ,
      //       _PreferredSupplier.DataController3 as DataController3 ,
      //       _PreferredSupplier.DataController4 as DataController4 ,
      //       _PreferredSupplier.DataController5 as DataController5 ,
      //       _PreferredSupplier.DataController6 as DataController6 ,
      //       _PreferredSupplier.DataController7 as DataController7 ,
      //       _PreferredSupplier.DataController8 as DataController8 ,
      //       _PreferredSupplier.DataController9 as DataController9 ,
      //       _PreferredSupplier.DataController10 as DataController10
}
```
