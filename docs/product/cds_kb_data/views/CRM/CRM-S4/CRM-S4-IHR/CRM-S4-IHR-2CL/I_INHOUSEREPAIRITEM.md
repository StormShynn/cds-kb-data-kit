---
name: I_INHOUSEREPAIRITEM
description: "In-House Service Item"
app_component: CRM-S4-IHR-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value
semantic_en: "In-House Service Item"
semantic_vi: "In-House Service Item — CDS view cơ bản (transactional data) dựa trên crms4d_repa_i."
keywords:
  - "In-House Service Item"
  - "house"
  - "service"
  - "item"
  - "cust"
  - "mgmt"
  - "object"
  - "type"
  - "repair"
  - "char"
tags:
  - CRM
  - component:CRM-S4-IHR-2CL
  - CRM-S4
  - CRM-S4-IHR
  - CRM-S4-IHR-2CL
  - interface-view
---
# I_INHOUSEREPAIRITEM

**In-House Service Item**

| Property | Value |
|---|---|
| App Component | `CRM-S4-IHR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CustMgmtObjectType` | ✓ | |  | `objtype_h` | `CHAR(10)` | Business Trans. Cat. |
| `InHouseRepair` | ✓ | |  | `cast(object_id as crms4_repa_inhouse_repair_lbl preserving type)` | `CHAR(10)` | In-House Repair ID |
| `InHouseRepairItem` | ✓ | |  | `cast(number_int as crms4_repa_item_lbl preserving type)` | `NUMC(6)` | Repair Object |
| `InHouseRepairItemUUID` |  | |  | `item_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `InHouseRepairItemCharUUID` |  | |  | `cast(item_guid_char as crms4_repa_object_guid32 preserving type)` | `CHAR(32)` | Object GUID in Character Format |
| `CreationDateTime` |  | |  | `created_at_i` | `DEC(15)` | Created At |
| `CreatedByUser` |  | |  | `created_by_i` | `CHAR(12)` | User that Created the Transaction |
| `LastChangeDateTime` |  | |  | `changed_at_i` | `DEC(15)` | Changed At |
| `LastChangedByUser` |  | |  | `changed_by_i` | `CHAR(12)` | Transaction Last Changed By |
| `InhRepairItemObjectType` |  | |  | `objtype_i` | `CHAR(10)` | CRM Item Object Type |
| `InHouseRepairUUID` |  | |  | `header_guid` | `RAW(16)` | GUID of a CRM Order Object |
| `ProductUUID` |  | |  | `product` | `RAW(16)` | Internal Unique ID of Product |
| `OriginallyRequestedProduct` |  | |  | `ordered_prod` | `CHAR(54)` | Product Name Entered |
| `Product` |  | |  | `product_id` | `CHAR(40)` | Product |
| `InhRepairItemCategory` |  | |  | `itm_type` | `CHAR(4)` | Item Category |
| `InhRepairItemStatus` |  | |  | `cast(stat_lifecycle as crms4_repa_item_status_lbl preserving type )` | `CHAR(4)` | Repair Object Status |
| `InhRepairItemSuplmntyStatus` |  | |  | `stat_suppl` | `CHAR(4)` | Additional Status |
| `InhRepairItemDeliveryStatus` |  | |  | `stat_delivery` | `CHAR(1)` | Delivery Status |
| `InhRepairItemAvailyStatus` |  | |  | `stat_repair_availability` | `CHAR(5)` | Availability of Repair Object at Repair Center |
| `InhRepairItemHasError` |  | |  | `stat_error` | `CHAR(1)` | Error Status |
| `InhRepairItemIsOpen` |  | |  | `stat_open` | `CHAR(1)` | Status "Open" |
| `InhRepairReferenceEquipment` |  | |  | `equipment_id` | `CHAR(18)` | Equipment Number |
| `SerialNumber` |  | |  | `cast(serial_number as crms4_repa_equip_serialnumber preserving type)` | `CHAR(18)` | Serial Number of Equipment |
| `InhRepairType` |  | |  | `process_type` | `CHAR(4)` | Business Transaction Type |
| `PostingDate` |  | |  | `posting_date` | `DATS(8)` | Posting Date for a Business Transaction |
| `ReferenceCustomerReturnItem` |  | |  | `ref_return_order_item` | `NUMC(6)` | Item number of the SD document |
| `RefRetsMgmtProcessItem` |  | |  | `ref_msr_item` | `NUMC(6)` | Item Number |
| `RefRetsMgmtProcItmQtySplit` |  | |  | `ref_msr_split_id` | `NUMC(3)` | Split Identification Number |
| `_CustMgmtObjectType` | | ✓ | | | | |
| `_InhRepairItemCategory` | | ✓ | | | | |
| `_InhRepairItemStatus` | | ✓ | | | | |
| `_InhRepairItemSuplmntyStatus` | | ✓ | | | | |
| `_InhRepairItemHasError` | | ✓ | | | | |
| `_InhRepairItemIsOpen` | | ✓ | | | | |
| `_InhRepairReferenceEquipment` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_InHouseRepair` | | ✓ | | | | |
| `_InhRepairReferenceEquipText` | | ✓ | | | | |
| `_ProductText` | | ✓ | | | | |
| `_RepairOrder` | | ✓ | | | | |
| `_RepairQuotation` | | ✓ | | | | |
| `_SrvcMgmtObjectStatus` | | ✓ | | | | |
| `_OutboundDelivery` | | ✓ | | | | |
| `_InhRepairItemAvailyStatus` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustMgmtObjectType` | `I_CustMgmtItmBusObjType` | [1..1] |
| `_InhRepairItemCategory` | `I_ServiceDocItemCategory` | [0..1] |
| `_InhRepairItemStatus` | `I_InhRepairItemStatus` | [0..1] |
| `_InhRepairItemSuplmntyStatus` | `I_InhRepairItemStatus` | [0..1] |
| `_InhRepairItemHasError` | `I_ServiceDocErrorStatus` | [0..1] |
| `_InhRepairItemIsOpen` | `I_ServiceDocOpenStatus` | [0..1] |
| `_InhRepairReferenceEquipment` | `I_Equipment` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_InHouseRepair` | `I_InHouseRepair` | [1..1] |
| `_InhRepairReferenceEquipText` | `I_EquipmentText` | [0..*] |
| `_ProductText` | `I_ProductText` | [0..*] |
| `_RepairOrder` | `I_InhRepairTransactionRelation` | [0..1] |
| `_RepairQuotation` | `I_InhRepairTransactionRelation` | [0..1] |
| `_SrvcMgmtObjectStatus` | `I_SrvcMgmtObjectStatus` | [0..1] |
| `_OutboundDelivery` | `I_InhRepairTransactionRelation` | [0..1] |
| `_InhRepairItemAvailyStatus` | `I_InhRepairItemAvailyStatus` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_INHOUSEREPAIRITEM')/$value)*

```abap
@EndUserText.label: 'In-House Service Item' //2602 CE Commented Repair
@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl: {
  authorizationCheck: #MANDATORY,
  privilegedAssociations: ['_RepairOrder', '_RepairQuotation']
}
@ObjectModel: {
  representativeKey: 'InHouseRepairItem',
  usageType: {serviceQuality: #B, sizeCategory: #L, dataClass: #TRANSACTIONAL} ,    // sizeCategory: #L - expected number of rows is < 10.000.000
  supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET] // Added 2602CE
}
@Analytics.technicalName: 'IINHOUSEREPITEM'
@Metadata: {
  ignorePropagatedAnnotations: true
}
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ] }*/
define view entity I_InHouseRepairItem
  as select from crms4d_repa_i

  association [1..1] to I_CustMgmtItmBusObjType        as _CustMgmtObjectType          on  $projection.CustMgmtObjectType = _CustMgmtObjectType.BusinessObjectType            //2602 CE : Replacement of I_BusinessObjType with I_CustMgmtItmBusObjType
  association [0..1] to I_ServiceDocItemCategory       as _InhRepairItemCategory       on  $projection.InhRepairItemCategory = _InhRepairItemCategory.ServiceDocItemCategory  //2602 CE : Replacement of I_CustMgmtDocItemCategory ( deprecated ) with I_ServiceDocItemCategory ( Successor )
  association [0..1] to I_InhRepairItemStatus          as _InhRepairItemStatus         on  $projection.InhRepairItemCategory = _InhRepairItemStatus.InhRepairItemCategory
                                                                                       and $projection.InhRepairItemStatus   = _InhRepairItemStatus.InhRepairItemStatus
  association [0..1] to I_InhRepairItemStatus          as _InhRepairItemSuplmntyStatus on  $projection.InhRepairItemCategory       = _InhRepairItemSuplmntyStatus.InhRepairItemCategory
                                                                                       and $projection.InhRepairItemSuplmntyStatus = _InhRepairItemSuplmntyStatus.InhRepairItemStatus
  association [0..1] to I_ServiceDocErrorStatus        as _InhRepairItemHasError       on  $projection.InhRepairItemHasError = _InhRepairItemHasError.ServiceDocumentHasError
  association [0..1] to I_ServiceDocOpenStatus         as _InhRepairItemIsOpen         on  $projection.InhRepairItemIsOpen = _InhRepairItemIsOpen.ServiceDocumentIsOpen

  association [0..1] to I_Equipment                    as _InhRepairReferenceEquipment on  $projection.InhRepairReferenceEquipment = _InhRepairReferenceEquipment.Equipment
  association [0..1] to I_Product                      as _Product                     on  $projection.product = _Product.Product

  association [1..1] to I_InHouseRepair                as _InHouseRepair               on  $projection.CustMgmtObjectType = _InHouseRepair.CustMgmtObjectType
                                                                                       and $projection.InHouseRepair      = _InHouseRepair.InHouseRepair

  association [0..*] to I_EquipmentText                as _InhRepairReferenceEquipText on  $projection.InhRepairReferenceEquipment = _InhRepairReferenceEquipText.Equipment

  association [0..*] to I_ProductText                  as _ProductText                 on  $projection.product = _ProductText.Product


  

  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_InhRepairTransactionRelation as _RepairOrder                 on  $projection.InHouseRepairItemUUID          = _RepairOrder.CustMgmtPrdcssrTransactionUUID
                                                                                       and _RepairOrder.CustMgmtTransacRelationType   = 'IHR1'
                                                                                       and _RepairOrder.CustMgmtPrdcssrTransacObjType = 'BUS2000257' //In-House Repair Item
  /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_InhRepairTransactionRelation as _RepairQuotation             on  $projection.InHouseRepairItemUUID              = _RepairQuotation.CustMgmtPrdcssrTransactionUUID
                                                                                       and _RepairQuotation.CustMgmtTransacRelationType   = 'IHR2'
                                                                                       and _RepairQuotation.CustMgmtPrdcssrTransacObjType = 'BUS2000257' //In-House Repair Item

 /*+[hideWarning] { "IDS" : [ "CARDINALITY_CHECK" ] }*/
  association [0..1] to I_SrvcMgmtObjectStatus         as _SrvcMgmtObjectStatus         on  $projection.InHouseRepairItemUUID             = _SrvcMgmtObjectStatus.SrvcMgmtObjectUUID
                                                                                        and _SrvcMgmtObjectStatus.SrvcMgmtObjectStatusIsInactive = ''
                                                                                        and (
                                                                                           _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus            = 'I1002'
                                                                                           or _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus         = 'I1003'
                                                                                           or _SrvcMgmtObjectStatus.SrvcMgmtObjectStatus         = 'I1005'
                                                                                         )
 //Return Order Changes
  association [0..1] to I_InhRepairTransactionRelation as _OutboundDelivery  on  $projection.InHouseRepairItemUUID = _OutboundDelivery.CustMgmtPrdcssrTransactionUUID 
                                                                             and _OutboundDelivery.CustMgmtTransacRelationType   = 'VONA'
                                                                             and _OutboundDelivery.CustMgmtSuccssrTransacObjType = 'LIKP' 
                                                                             
  association [0..1] to I_InhRepairItemAvailyStatus    as _InhRepairItemAvailyStatus          on $projection.InhRepairItemAvailyStatus =  _InhRepairItemAvailyStatus.InhRepairItemAvailyStatus                                                                                                                                                                 

{
      @ObjectModel.foreignKey.association: '_CustMgmtObjectType'
  key objtype_h                                                            as CustMgmtObjectType,
      @ObjectModel.foreignKey.association: '_InHouseRepair'
  key cast(object_id as crms4_repa_inhouse_repair_lbl preserving type)     as InHouseRepair,
  key cast(number_int as crms4_repa_item_lbl preserving type)              as InHouseRepairItem,
      item_guid                                                            as InHouseRepairItemUUID,
      cast(item_guid_char as crms4_repa_object_guid32 preserving type)     as InHouseRepairItemCharUUID,
      created_at_i                                                         as CreationDateTime,
      created_by_i                                                         as CreatedByUser,
      changed_at_i                                                         as LastChangeDateTime,
      changed_by_i                                                         as LastChangedByUser,
      objtype_i                                                            as InhRepairItemObjectType,
      header_guid                                                          as InHouseRepairUUID,
      product                                                              as ProductUUID,
      ordered_prod                                                         as OriginallyRequestedProduct,
      @ObjectModel.foreignKey.association: '_Product'
      product_id                                                           as Product,
      @ObjectModel.foreignKey.association: '_InhRepairItemCategory'
      itm_type                                                             as InhRepairItemCategory,
      @ObjectModel.foreignKey.association: '_InhRepairItemStatus'
      cast(stat_lifecycle as crms4_repa_item_status_lbl preserving type )  as InhRepairItemStatus,
      @ObjectModel.foreignKey.association: '_InhRepairItemSuplmntyStatus'
      stat_suppl                                                           as InhRepairItemSuplmntyStatus,
      stat_delivery                                                        as InhRepairItemDeliveryStatus,
      @ObjectModel.foreignKey.association: '_InhRepairItemAvailyStatus'
      stat_repair_availability                                             as InhRepairItemAvailyStatus,
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_InhRepairItemHasError'
      stat_error                                                           as InhRepairItemHasError,
      @Semantics.booleanIndicator: true
      @ObjectModel.foreignKey.association: '_InhRepairItemIsOpen'
      stat_open                                                            as InhRepairItemIsOpen,
      @ObjectModel.foreignKey.association: '_InhRepairReferenceEquipment'
      equipment_id                                                         as InhRepairReferenceEquipment,

      cast(serial_number as crms4_repa_equip_serialnumber preserving type) as SerialNumber,
      process_type                                                         as InhRepairType,
      posting_date                                                         as PostingDate,
      ref_return_order_item                                                as ReferenceCustomerReturnItem,
      ref_msr_item                                                         as RefRetsMgmtProcessItem,
      ref_msr_split_id                                                     as RefRetsMgmtProcItmQtySplit,
      
      
      /* Associations */
      _CustMgmtObjectType,
      _InhRepairItemCategory,
      _InhRepairItemStatus,
      _InhRepairItemSuplmntyStatus,
      _SrvcMgmtObjectStatus,
      _InhRepairItemHasError,
      _InhRepairItemIsOpen,
      _InhRepairReferenceEquipment,
      _Product,
      _InHouseRepair,
      _RepairOrder,
      _RepairQuotation,
      _InhRepairItemAvailyStatus,

      //text associations are no longer used in our projection views. therefore, we want to remove them. 
      //but these associations are still used in the view ESH_N_INHOUSEREPAIR for our enterprise search modell
      //therefore, removal is not possible 
      _ProductText, 
      _InhRepairReferenceEquipText,
      
      //Return Order Changes
      _OutboundDelivery 

}
```
