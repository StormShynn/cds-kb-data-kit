---
name: V_MMIM_DDL_OM_PARAM
description: V Mmim Ddl OM Param
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# V_MMIM_DDL_OM_PARAM

**V Mmim Ddl OM Param**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `SAPClient` | `document.mandt` |
| key `MaterialDocument` | `cast( document.MaterialDocument as mblnr preserving type )` |
| key `MaterialDocumentYear` | `cast( document.MaterialDocumentYear as nsdm_mjahr preserving type )` |
| key `MaterialDocumentItem` | `cast( document.MaterialDocumentItem as nsdm_mblpo preserving type )` |
| `matdockey` | `concat( document.MaterialDocument, concat (document.MaterialDocumentYear, document.MaterialDocumentItem ) )` |
| `PurchasingDocument` | `cast( document.PurchaseOrder as bstnr preserving type )` |
| `InventoryTransactionType` | `cast( document.InventoryTransactionType as vgart preserving type )` |
| `VersionForPrintingSlip` | `cast( document.VersionForPrintingSlip as wever preserving type )` |
| `CreationUserName` | `cast( document.CreatedByUser as usnam preserving type )` |
| `QuantityDebitCreditCode` | `cast( document.DebitCreditCode as shkzg preserving type )` |
| `GoodsReceiptIsMovedToBlkdStock` | `cast( printind.kzwes as kzwes preserving type )` |
| `Plant` | `cast( document.Plant as werks_d preserving type )` |
| `StorageLocation` | `cast( document.StorageLocation as lgort_d preserving type )` |
| `GoodsMovementType` | `cast( document.GoodsMovementType as bwart preserving type )` |
| `NmbrOfGROrGISlipsToPrintQty` | `cast( document.NumberOfSlipsToBePrinted as weanz preserving type )` |
| `MatlDocLatestPostgDate` | `cast( document.PostingDate as budat preserving type )` |
| `PrintingOfDocumentItem` | `cast( printind.kzdru as kzdru preserving type )` |
| `IndGoodsReceiptMessage` | `cast( printpo.weakt as weakt preserving type )` |
| `OperationIsPrinted` | `case when document.VersionForPrintingSlip = '3' and printind.kzdru = '3' then printlf.xprint when document.IsAutomaticallyCreated = 'X' then ' ' else document.ManualPrintIsTriggered end` |
| `CompanyCode` | `cast( document.CompanyCode as bukrs )` |
| `Supplier` | `cast( document.Supplier as elifn )` |
| `LabelForm` | `cast( master.etifo as etifo )` |
| `LabelType` | `cast( master.etiar as etiar )` |
| `UnderOverdelivery` | `case when pudocum.weakt = 'X' then printpd.lmbmv else ' ' end` |
| `PercentageVarcInOrdPrcUnit` | `case when pudocum.weakt = 'X' then printpv.pabpm else 00.00 end` |
| `MaterialComponentIsMissing` | `printpl.xfmat` |
| `Material` | `cast( document.Material as matnr preserving type )` |
| `TransactionCode` | `cast( document.TransactionCode as nsdm_tcode preserving type )` |
| `SpecialStockType` | `cast( document.InventorySpecialStockType as nsdm_spcl_stock_type preserving type )` |
| `ProductTypeCode` | `cast( mattype.prod_type_code as product_type preserving type )` |
| `PrintKanbanCard` | `cast ( ' ' as pk_print_kanban_card )` |
| `PrintKanbanCardByGoodsMovement` | `cast ( ' ' as pk_print_kanban_card_by_gm )` |
| `_MaterialDocumentItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PrintExtension` | `E_MaterialDocumentItem` | [0..1] |
| `_PrintExtensionMatdoc` | `E_MaterialDocumentItem_2` | [0..1] |
| `_MaterialDocumentItem` | `I_MaterialDocumentItem_2` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.sqlViewName: 'V_MMIM_OM_PARAM'
@AbapCatalog.compiler.compareFilter: true
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass:      #TRANSACTIONAL
@ObjectModel.usageType.sizeCategory:   #XL
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking:#NOT_REQUIRED
@ObjectModel.supportedCapabilities: [ #OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE ]
@ObjectModel.modelingPattern:#OUTPUT_PARAMETER_DETERMINATION_DATA_SOURCE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Goods Movement Parameters'
/* View used for BRF plus application GOODS_MOVEMENT */
define view V_Mmim_DDL_Om_Param
  as select from    I_MaterialDocumentRecord as document
    inner join      t156                     as printind on document.GoodsMovementType = printind.bwart //Document print indicator
    left outer join V_Mmim_Ddl_Om_Bypo       as printpo  on  printpo.mblnr = document.MaterialDocument //GR Mail per Purchase Order
                                                         and printpo.mjahr = document.MaterialDocumentYear
                                                         and printpo.zeile = document.MaterialDocumentItem
    left outer join V_MMIM_DDL_OM_BYLF       as printlf  on  printlf.mblnr = document.MaterialDocument //SC collective slip per supplier
                                                         and printlf.mjahr = document.MaterialDocumentYear
                                                         and printlf.zeile = document.MaterialDocumentItem
    left outer join V_MMIM_DDL_OM_BYPL       as printpl  on  printpl.mblnr = document.MaterialDocument //MP Mail per MRP controller (dispo area)
                                                         and printpl.mjahr = document.MaterialDocumentYear
                                                         and printpl.zeile = document.MaterialDocumentItem
    left outer join V_MMIM_DDL_OM_BYPD       as printpd  on  printpd.mblnr = document.MaterialDocument //Underdelivery Mail per Purchase Order
                                                         and printpd.mjahr = document.MaterialDocumentYear
                                                         and printpd.zeile = document.MaterialDocumentItem
                                                         and printpd.ebeln = document.PurchaseOrder
    left outer join V_MMIM_DDL_OM_BYPV       as printpv  on  printpv.mblnr = document.MaterialDocument //Price variance Mail per Purchase Order
                                                         and printpv.mjahr = document.MaterialDocumentYear
                                                         and printpv.zeile = document.MaterialDocumentItem
                                                         and printpv.ebeln = document.PurchaseOrder
    left outer join ekko                     as pudocum  on pudocum.ebeln = document.PurchaseOrder //Purchase Order Header
    left outer join mara                     as master   on document.Material = master.matnr
    left outer join t134                     as mattype  on mattype.mtart = master.mtart

  // Custom Fields extensibility
  association [0..1] to E_MaterialDocumentItem   as _PrintExtension       on  $projection.MaterialDocumentYear           = _PrintExtension.MaterialDocumentYear
                                                                          and $projection.MaterialDocument               = _PrintExtension.MaterialDocument
                                                                          and $projection.MaterialDocumentItem           = _PrintExtension.MaterialDocumentItem
                                                                          and _PrintExtension.MaterialDocumentRecordType = 'MDOC'

  // Custom Fields extensibility for Business Context: MaterialDocumentItem
  association [0..1] to E_MaterialDocumentItem_2 as _PrintExtensionMatdoc on  $projection.MaterialDocumentYear                 = _PrintExtensionMatdoc.MaterialDocumentYear
                                                                          and $projection.MaterialDocument                     = _PrintExtensionMatdoc.MaterialDocument
                                                                          and $projection.MaterialDocumentItem                 = _PrintExtensionMatdoc.MaterialDocumentItem
                                                                          and _PrintExtensionMatdoc.MaterialDocumentRecordType = 'MDOC'
  
  // Data Source Extensibility
  association [0..1] to I_MaterialDocumentItem_2 as _MaterialDocumentItem on  $projection.MaterialDocumentYear                 = _MaterialDocumentItem.MaterialDocumentYear
                                                                          and $projection.MaterialDocument                     = _MaterialDocumentItem.MaterialDocument
                                                                          and $projection.MaterialDocumentItem                 = _MaterialDocumentItem.MaterialDocumentItem
{
  key document.mandt                                                                                              as SAPClient,
  key cast( document.MaterialDocument as mblnr preserving type )                                                  as MaterialDocument,
  key cast( document.MaterialDocumentYear as nsdm_mjahr preserving type )                                         as MaterialDocumentYear,
  key cast( document.MaterialDocumentItem as nsdm_mblpo preserving type )                                         as MaterialDocumentItem,
      concat( document.MaterialDocument, concat (document.MaterialDocumentYear, document.MaterialDocumentItem ) ) as matdockey,
      cast( document.PurchaseOrder as bstnr preserving type )                                                     as PurchasingDocument,
      cast( document.InventoryTransactionType as vgart preserving type )                                          as InventoryTransactionType,
      cast( document.VersionForPrintingSlip as wever preserving type )                                            as VersionForPrintingSlip,
      cast( document.CreatedByUser as usnam preserving type )                                                     as CreationUserName,
      cast( document.DebitCreditCode as shkzg preserving type )                                                   as QuantityDebitCreditCode,
      cast( printind.kzwes as kzwes  preserving type )                                                            as GoodsReceiptIsMovedToBlkdStock,
      cast( document.Plant as werks_d  preserving type )                                                          as Plant,
      cast( document.StorageLocation as lgort_d preserving type )                                                 as StorageLocation,
      cast( document.GoodsMovementType as bwart preserving type )                                                 as GoodsMovementType,
      cast( document.NumberOfSlipsToBePrinted as weanz preserving type )                                          as NmbrOfGROrGISlipsToPrintQty,
      cast( document.PostingDate as budat preserving type )                                                       as MatlDocLatestPostgDate,
      cast( printind.kzdru as kzdru preserving type )                                                             as PrintingOfDocumentItem,
      cast( printpo.weakt as weakt preserving type )                                                              as IndGoodsReceiptMessage,
      case
      //subcontracting collective slip - print collective slip per LIFNR
      //as there could be more than one LIFNR in one material document
        when document.VersionForPrintingSlip = '3' and //collective slip
             printind.kzdru = '3'     //SC slip
             then printlf.xprint      //return aggregated print flag
        when document.IsAutomaticallyCreated = 'X'     //xauto lines should not be printed
             then ' '
        else document.ManualPrintIsTriggered          //return print flag of document item
      end                                                                                                         as OperationIsPrinted,
      cast( document.CompanyCode as bukrs )                                                                       as CompanyCode,
      cast( document.Supplier as elifn )                                                                          as Supplier,
      cast( master.etifo as etifo )                                                                               as LabelForm,
      cast( master.etiar as etiar )                                                                               as LabelType,
      //printpd.lmbmv                                                    as  UnderOverdelivery,
      case
      //underdelivery
        when pudocum.weakt = 'X'
             then printpd.lmbmv      //return aggregated print flag
        else ' '                     //return no print
      end                                                                                                         as UnderOverdelivery,
      //printpv.pabpm                                                    as  PercentageVarcInOrdPrcUnit,
      case
      //price difference
        when pudocum.weakt = 'X'
             then printpv.pabpm     //return aggregated print flag
        else 00.00                  //return no print
      end                                                                                                         as PercentageVarcInOrdPrcUnit,
      printpl.xfmat                                                                                               as MaterialComponentIsMissing,
      cast( document.Material as matnr preserving type )                                                          as Material,
      cast( document.TransactionCode as nsdm_tcode preserving type )                                              as TransactionCode,
      cast( document.InventorySpecialStockType as nsdm_spcl_stock_type preserving type )                          as SpecialStockType,
      cast( mattype.prod_type_code as product_type preserving type )                                              as ProductTypeCode,
      //print kanban card on goods receipt (transient data)
      cast ( ' ' as pk_print_kanban_card )                                                                        as PrintKanbanCard,
      cast ( ' ' as pk_print_kanban_card_by_gm )                                                                  as PrintKanbanCardByGoodsMovement,
      
      _MaterialDocumentItem
}
where
  document.MaterialDocumentRecordType = 'MDOC'
```
