---
name: I_FLDLOGSSUPPLIERITEM
description: "Fldlogssupplieritem"
app_component: CA-FL-SRV
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FldLogsSuplrItemUUID` | ✓ | |  | `fldlogssuplritemuuid` |  |  |
| `FldLogsSuplrItemType` |  | |  | `fldlogssuplritemtype` |  |  |
| `FldLogsSuplrParentItemUUID` |  | |  | `fldlogssuplrparentitemuuid` |  |  |
| `FldLogsSuplrItemSerialNumber` |  | |  | `fldlogssuplritemserialnumber` |  |  |
| `FldLogsSuplrItemName` |  | |  | `fldlogssuplritemname` |  |  |
| `PreferredSupplier` |  | |  | `preferredsupplier` |  |  |
| `FldLogsSuplrBasePlant` |  | |  | `fldlogssuplrbaseplant` |  |  |
| `FldLogsRemotePlant` |  | |  | `fldlogsremoteplant` |  |  |
| `FldLogsSuplrItmPOItmUniqueID` |  | |  | `fldlogssuplritmpoitmuniqueid` |  |  |
| `FldLogsSupplyProcess` |  | |  | `fldlogssupplyprocess` |  |  |
| `FldLogsSuplrItemVislInspCode` |  | |  | `fldlogssuplritemvislinspcode` |  |  |
| `PurgDocNetPriceAmount` |  | |  | `purgdocnetpriceamount` |  |  |
| `FldLogsSuplrItemRateUnit` |  | |  | `fldlogssuplritemrateunit` |  |  |
| `FldLogsSuplrItemQuantity` |  | |  | `fldlogssuplritemquantity` |  |  |
| `FldLogsSuplrItemQuantityUnit` |  | |  | `fldlogssuplritemquantityunit` |  |  |
| `FldLogsSuplrItemGrossVolume` |  | |  | `fldlogssuplritemgrossvolume` |  |  |
| `FldLogsSuplrItmGrossVolumeUnit` |  | |  | `fldlogssuplritmgrossvolumeunit` |  |  |
| `ProductGrossWeight` |  | |  | `productgrossweight` |  |  |
| `ProductWeightUnit` |  | |  | `productweightunit` |  |  |
| `FldLogsSuplrItemLength` |  | |  | `fldlogssuplritemlength` |  |  |
| `FldLogsSuplrItemWidth` |  | |  | `fldlogssuplritemwidth` |  |  |
| `FldLogsSuplrItemHeight` |  | |  | `fldlogssuplritemheight` |  |  |
| `FldLogsSuplrItemMeasureUnit` |  | |  | `fldlogssuplritemmeasureunit` |  |  |
| `FldLogsSuplrItemStatusID` |  | |  | `fldlogssuplritemstatusid` |  |  |
| `ItemIsDangerousGood` |  | |  | `itemisdangerousgood` |  |  |
| `FldLogsSuplrItemDngrsGdsCat` |  | |  | `dangerousgoodsidnnumbercnctntd` |  |  |
| `DangerousGoodsIdnNumberCnctntd` |  | |  | `cast(dangerousgoodsidnnumbercnctntd as abap.char( 51 ))` |  |  |
| `FldLogsIsWorkOrderOnHold` |  | |  | `fldlogsisworkorderonhold` |  |  |
| `FldLogsSuplrItemPlndDelivDate` |  | |  | `fldlogssuplritemplnddelivdate` |  |  |
| `FldLogsSuplrItmChangeDateTime` |  | |  | `fldlogssuplritmchangedatetime` |  |  |
| `FldLogsSuplrItmPackggTypeCode` |  | |  | `fldlogssuplritmpackggtypecode` |  |  |
| `PackagingMaterial` |  | |  | `packagingmaterial` |  |  |
| `FldLogsContainerOwner` |  | |  | `fldlogscontainerowner` |  |  |
| `FldLogsSupplierItemSource` |  | |  | `fldlogssupplieritemsource` |  |  |
| `FldLogsSealNumber1` |  | |  | `fldlogssealnumber1` |  |  |
| `FldLogsSealNumber2` |  | |  | `fldlogssealnumber2` |  |  |
| `FldLogsSealNumber3` |  | |  | `fldlogssealnumber3` |  |  |
| `FldLogsSealNumber4` |  | |  | `fldlogssealnumber4` |  |  |
| `FldLogsSealNumber5` |  | |  | `fldlogssealnumber5` |  |  |
| `IsBusinessPurposeCompleted` |  | | `_Owner` | `IsBusinessPurposeCompleted` |  |  |
| `SuplrCoIsBusPrpsCmpltd` |  | | `_PreferredSupplier` | `IsBusinessPurposeCompleted` |  |  |
| `FldLogsTransferType` |  | |  | `fldlogstransfertype` |  |  |
| `FieldLogisticsTransferPlant` |  | |  | `fieldlogisticstransferplant` |  |  |
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
