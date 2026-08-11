---
name: I_MOVABLEOBJECTDATA
description: "Movable Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTDATA')/$value
semantic_en: "Movable Object Details"
semantic_vi: "Movable Object Details — CDS view giao diện dựa trên P_MovableObject_TF."
keywords:
  - "movable"
  - "object"
  - "details"
  - "internal"
  - "category"
  - "type"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_MOVABLEOBJECTDATA

**Movable Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovableObjectUUID` | ✓ | |  | `mov_guid` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `MovableObjectInternalID` |  | |  | `mov_guid_conv` | `CHAR(40)` | Reference ID for the object |
| `MovableObjectCategory` |  | |  | `mov_category` | `CHAR(6)` | Object Category |
| `MovableObjectType` |  | |  | `mov_typ` | `CHAR(6)` | Movable types |
| `MovableObjectID` |  | |  | `mov_id` | `CHAR(40)` | Identification Number |
| `MovableObjectDescription` |  | |  | `mov_desc` | `CHAR(30)` | Description of the object |
| `MovableObjectIsAccessory` |  | |  | `mov_idt_acc` | `CHAR(1)` | Identification accessories |
| `MovableObjectModelName` |  | |  | `mov_model_nam` | `CHAR(30)` | Technical  Category/Category term/Description |
| `MovableObjectManufacturerName` |  | |  | `mov_manufacturer` | `CHAR(30)` | Object Manufacturer Builder |
| `MovableObjectManufactureDate` |  | |  | `mov_manu_dat` | `DATS(8)` |  Date of the Manufacture/Purchase |
| `MovableObjectAddressID` |  | |  | `addr_id` | `CHAR(10)` | Location / Address |
| `MovableObjectLocation` |  | |  | `mov_loc_desc` | `CHAR(6)` | Location Description |
| `MovableObjectLocationComment` |  | |  | `mov_loc_de_rmrk` | `CHAR(30)` | Remark Field for Location Description |
| `MovableObjectBankIdnType` |  | |  | `mov_iden_typ` | `CHAR(6)` | Type of identification / Marking of the collateral material |
| `MovableObjectBankIdnDesc` |  | |  | `mov_desc_col_mat` | `CHAR(30)` | Bank's Own Identifcation |
| `MovableObjectPurchaseDate` |  | |  | `mov_dop` | `DATS(8)` | Date of Purchase |
| `MovableObjectCommercialUsage` |  | |  | `mov_ident` | `CHAR(2)` | Commercial usage |
| `MovableObjectUse` |  | |  | `mov_uob` | `CHAR(6)` | Use of the object |
| `MovableObjectMfgCntry` |  | |  | `mov_manu_cntry` | `CHAR(3)` | Manufacturing Country/Region |
| `MovableObjectClassification` |  | |  | `mov_type_feat` | `CHAR(6)` | Classification |
| `MovableObjectExtRefNumber` |  | |  | `ext_itm_no` | `CHAR(40)` | Ext. Item no / Number for identification of the objects |
| `DeviceObjectCountryKey` |  | |  | `dev_country_key` | `CHAR(3)` | Country/Region Key |
| `DeviceObjectMachineNumber` |  | |  | `dev_mac_no` | `CHAR(40)` | External Item Number - Machine number |
| `AircraftObjectDeliveryDate` |  | |  | `acr_delvdat` | `DATS(8)` | Delivery Date |
| `AircraftObjectIsRegistered` |  | |  | `acr_reg` | `CHAR(1)` | Registered |
| `AircraftObjectRegnCntry` |  | |  | `acr_regc` | `CHAR(3)` | Registration Country/Region |
| `AircraftObjectRegistrationMark` |  | |  | `acr_regm` | `CHAR(6)` | Registration Mark |
| `AircraftObjectRegnCmnt` |  | |  | `acr_rc` | `CHAR(30)` | Registration Comments |
| `AircraftObjectEngnMfrName` |  | |  | `acr_eman` | `CHAR(30)` | Engine Manufacturer |
| `AircraftObjectEngineModelName` |  | |  | `acr_emod` | `CHAR(12)` | Engine Model |
| `AircraftObjEngnPoolingTtl` |  | |  | `acr_epool` | `CHAR(10)` | Engine pooling |
| `AircraftObjEngnPoolingCmnt` |  | |  | `acr_eprmk` | `CHAR(30)` | Engine pooling remarks |
| `AircraftObjectNumberOfEngines` |  | |  | `acr_noe` | `INT4(10)` | Number of Engines |
| `AircraftObjectName` |  | |  | `acr_name` | `CHAR(30)` | Object name |
| `AircraftObjectMaxTakeoffWeight` |  | |  | `acr_mtow` | `QUAN(13)` | Maximum take-off weight |
| `AircraftObjMaxTakeoffWgtUnit` |  | |  | `acr_mtow_unt` | `UNIT(3)` | Maximum take off weight (Unit) |
| `AircraftObjectMfrSerialNmbr` |  | |  | `acr_msnno` | `CHAR(10)` | MSN Number |
| `AircraftObjectRatingClass` |  | |  | `acr_ratcls` | `CHAR(6)` | Rating Class |
| `AircraftObjectRatingDate` |  | |  | `acr_ratd` | `DATS(8)` | Rating Date |
| `VehicleObjMaxPermissibleWeight` |  | |  | `perm_wght` | `QUAN(13)` | Maximum Permissible Weight |
| `VehObjMaxPermissibleWgtUnit` |  | |  | `perm_wght_unt` | `UNIT(3)` | Unit of the quantity |
| `VehicleObjectRegnLocDesc` |  | |  | `place_lic` | `CHAR(30)` | Place of Registration |
| `VehicleObjectRegistrationMark` |  | |  | `veh_reg_no` | `CHAR(30)` | Vehicle registration mark |
| `VehicleObjectRegistrationDocID` |  | |  | `off_ident` | `CHAR(30)` | Identification of the registration certificate |
| `VehicleObjectChassisNumber` |  | |  | `chais_no` | `CHAR(30)` | Chassis Number |
| `InventoryObjectBillNumber` |  | |  | `bill_no` | `CHAR(20)` | Bill number of the inventory |
| `InventoryObjectUnitAmount` |  | |  | `unit_price` | `CURR(17)` | Unit Price |
| `InventoryObjectUnitCurrency` |  | |  | `unit_price_curr` | `CUKY(5)` | Currency for unit price |
| `InventoryObjStockExchangeType` |  | |  | `type_stk_exch` | `CHAR(6)` | Type of stock exchange |
| `InventoryObjStockExchangePlace` |  | |  | `stk_exch_id` | `CHAR(6)` | Place of stock exchange |
| `InventoryObjPrevQuotationDate` |  | |  | `rate_fix_dat` | `DATS(8)` | Date of previous quotation |
| `InventoryObjectDeterminedAmt` |  | |  | `det_price` | `CURR(17)` | Determined price |
| `InventoryObjectDeterminedCrcy` |  | |  | `det_curr` | `CUKY(5)` | Currency for determined price |
| `InventoryObjectStockQuantity` |  | |  | `stock_quantity` | `QUAN(13)` | Quantity of inventory |
| `InventoryObjStockUnitMeasure` |  | |  | `stock_uom` | `UNIT(3)` | Unit of Measure of Quantity |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `MovableObjectCreatedDateTime` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `MovableObjLastChangedDateTime` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_ObjectAssetData` | | ✓ | | | | |
| `_MovableObjectPartner` | | ✓ | | | | |
| `_MovableObjectDocument` | | ✓ | | | | |
| `_ObjectValuationLinkData` | | ✓ | | | | |
| `_ObjectPrtLinkData` | | ✓ | | | | |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_MovableObjectCategory` | | ✓ | | | | |
| `_MovableObjectType` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_MovableObjectClassification` | | ✓ | | | | |
| `_MovableObjectLocation` | | ✓ | | | | |
| `_MovableObjectBankIdnType` | | ✓ | | | | |
| `_MovableObjectUse` | | ✓ | | | | |
| `_AircraftObjectRatingClass` | | ✓ | | | | |
| `_InventoryObjStockExchangeType` | | ✓ | | | | |
| `_InventoryObjStkExchangePlace` | | ✓ | | | | |
| `_MovableObjectMfgCntry` | | ✓ | | | | |
| `_DeviceObjectCountryKey` | | ✓ | | | | |
| `_AircraftObjectRegnCntry` | | ✓ | | | | |
| `_InventoryObjectUnitCurrency` | | ✓ | | | | |
| `_InventoryObjectDeterminedCrcy` | | ✓ | | | | |
| `_InventoryObjStockUnitMeasure` | | ✓ | | | | |
| `_AircraftObjMaxTakeoffWgtUnit` | | ✓ | | | | |
| `_VehObjMaxPermissibleWgtUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..1] |
| `_ObjectAssetData` | `I_ObjectAssetData` | [0..*] |
| `_MovableObjectPartner` | `I_ObjectAssetPartner` | [0..*] |
| `_MovableObjectDocument` | `I_ObjectAssetDocument` | [0..*] |
| `_ObjectValuationLinkData` | `I_ObjectValuationLinkData` | [0..*] |
| `_ObjectPrtLinkData` | `I_ObjectPrtLinkData` | [0..*] |
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..*] |
| `_MovableObjectCategory` | `I_CollateralObjectCategory` | [0..1] |
| `_MovableObjectType` | `I_MovableObjectType` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_MovableObjectClassification` | `I_CollateralObjClassification` | [0..1] |
| `_MovableObjectLocation` | `I_CollateralAttributeIndType` | [0..1] |
| `_MovableObjectBankIdnType` | `I_CollateralAttributeIndType` | [0..1] |
| `_MovableObjectUse` | `I_CollateralAttributeIndType` | [0..1] |
| `_AircraftObjectRatingClass` | `I_CollateralAttributeIndType` | [0..1] |
| `_InventoryObjStockExchangeType` | `I_CollateralAttributeIndType` | [0..1] |
| `_InventoryObjStkExchangePlace` | `I_CollateralAttributeIndType` | [0..1] |
| `_MovableObjectMfgCntry` | `I_Country` | [0..1] |
| `_DeviceObjectCountryKey` | `I_Country` | [0..1] |
| `_AircraftObjectRegnCntry` | `I_Country` | [0..1] |
| `_InventoryObjectUnitCurrency` | `I_Currency` | [0..1] |
| `_InventoryObjectDeterminedCrcy` | `I_Currency` | [0..1] |
| `_InventoryObjStockUnitMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_AircraftObjMaxTakeoffWgtUnit` | `I_UnitOfMeasure` | [0..1] |
| `_VehObjMaxPermissibleWgtUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IMOVOBJDATA',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'MovableObjectUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
    delta.changeDataCapture: {
        mapping: [ {
           table : 'CMS_MOVABLES',
           role : #MAIN,
           viewElement : ['MovableObjectUUID'],
           tableElement : ['MOV_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Movable Object Details'
define view I_MovableObjectData
  as select from P_MovableObject_TF(P_SAPClient: $session.client)
  association [0..1] to I_MovableObjectMasterData      as _MovableObjectMasterData       on  $projection.MovableObjectUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..*] to I_ObjectAssetData              as _ObjectAssetData               on  $projection.MovableObjectInternalID = _ObjectAssetData.ObjectAssetReferenceNumber
  association [0..*] to I_ObjectAssetPartner           as _MovableObjectPartner          on  $projection.MovableObjectUUID = _MovableObjectPartner.ObjectAssetUUID
  association [0..*] to I_ObjectAssetDocument          as _MovableObjectDocument         on  $projection.MovableObjectUUID = _MovableObjectDocument.ObjectAssetUUID
  association [0..*] to I_ObjectValuationLinkData      as _ObjectValuationLinkData       on  $projection.MovableObjectUUID = _ObjectValuationLinkData.ObjectValuationLinkUUID
  association [0..*] to I_ObjectPrtLinkData            as _ObjectPrtLinkData             on  $projection.MovableObjectUUID = _ObjectPrtLinkData.ObjectReferenceUUID
  association [0..*] to I_ObjectInsuranceLinkData      as _ObjectInsuranceLinkData       on  $projection.MovableObjectUUID = _ObjectInsuranceLinkData.ObjectReferenceUUID
  association [0..*] to I_LiquidationData              as _LiquidationData               on  $projection.MovableObjectUUID = _LiquidationData.ObjectReferenceUUID
  association [0..1] to I_CollateralObjectCategory     as _MovableObjectCategory         on  $projection.MovableObjectCategory = _MovableObjectCategory.CollateralObjectCategory
  association [0..1] to I_MovableObjectType            as _MovableObjectType             on  $projection.MovableObjectType     = _MovableObjectType.MovableObjectType
                                                                                         and $projection.MovableObjectCategory = _MovableObjectType.MovableObjectCategory
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib  on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_CollateralObjClassification  as _MovableObjectClassification   on  $projection.MovableObjectCategory       = _MovableObjectClassification.CollateralObjectCategory
                                                                                         and $projection.MovableObjectClassification = _MovableObjectClassification.CollateralObjClassification
  association [0..1] to I_CollateralAttributeIndType   as _MovableObjectLocation         on  $projection.MovableObjectLocation                = _MovableObjectLocation.CollateralAttributeIndType
                                                                                         and _MovableObjectLocation.CollateralAttributeIndCat = 'MOV001'
  association [0..1] to I_CollateralAttributeIndType   as _MovableObjectBankIdnType      on  $projection.MovableObjectBankIdnType                = _MovableObjectBankIdnType.CollateralAttributeIndType
                                                                                         and _MovableObjectBankIdnType.CollateralAttributeIndCat = 'MOV004'
  association [0..1] to I_CollateralAttributeIndType   as _MovableObjectUse              on  $projection.MovableObjectUse                = _MovableObjectUse.CollateralAttributeIndType
                                                                                         and _MovableObjectUse.CollateralAttributeIndCat = 'MOV003'
  association [0..1] to I_CollateralAttributeIndType   as _AircraftObjectRatingClass     on  $projection.AircraftObjectRatingClass                = _AircraftObjectRatingClass.CollateralAttributeIndType
                                                                                         and _AircraftObjectRatingClass.CollateralAttributeIndCat = 'MOV005'
  association [0..1] to I_CollateralAttributeIndType   as _InventoryObjStockExchangeType on  $projection.InventoryObjStockExchangeType                = _InventoryObjStockExchangeType.CollateralAttributeIndType
                                                                                         and _InventoryObjStockExchangeType.CollateralAttributeIndCat = 'MOV006'
  association [0..1] to I_CollateralAttributeIndType   as _InventoryObjStkExchangePlace  on  $projection.InventoryObjStockExchangePlace              = _InventoryObjStkExchangePlace.CollateralAttributeIndType
                                                                                         and _InventoryObjStkExchangePlace.CollateralAttributeIndCat = 'MOV007'
  association [0..1] to I_Country                      as _MovableObjectMfgCntry         on  $projection.MovableObjectMfgCntry = _MovableObjectMfgCntry.Country
  association [0..1] to I_Country                      as _DeviceObjectCountryKey        on  $projection.DeviceObjectCountryKey = _DeviceObjectCountryKey.Country
  association [0..1] to I_Country                      as _AircraftObjectRegnCntry       on  $projection.AircraftObjectRegnCntry = _AircraftObjectRegnCntry.Country
  association [0..1] to I_Currency                     as _InventoryObjectUnitCurrency   on  $projection.InventoryObjectUnitCurrency = _InventoryObjectUnitCurrency.Currency
  association [0..1] to I_Currency                     as _InventoryObjectDeterminedCrcy on  $projection.InventoryObjectDeterminedCrcy = _InventoryObjectDeterminedCrcy.Currency
  association [0..1] to I_UnitOfMeasure                as _InventoryObjStockUnitMeasure  on  $projection.InventoryObjStockUnitMeasure = _InventoryObjStockUnitMeasure.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _AircraftObjMaxTakeoffWgtUnit  on  $projection.AircraftObjMaxTakeoffWgtUnit = _AircraftObjMaxTakeoffWgtUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _VehObjMaxPermissibleWgtUnit   on  $projection.VehObjMaxPermissibleWgtUnit = _VehObjMaxPermissibleWgtUnit.UnitOfMeasure
{
  key mov_guid         as MovableObjectUUID,
      mov_guid_conv    as MovableObjectInternalID,
      @ObjectModel.foreignKey.association: '_MovableObjectCategory'
      mov_category     as MovableObjectCategory,
      @ObjectModel.foreignKey.association: '_MovableObjectType'
      mov_typ          as MovableObjectType,
      mov_id           as MovableObjectID,
      mov_desc         as MovableObjectDescription,
      @Semantics.booleanIndicator: true
      mov_idt_acc      as MovableObjectIsAccessory,
      mov_model_nam    as MovableObjectModelName,
      mov_manufacturer as MovableObjectManufacturerName,
      mov_manu_dat     as MovableObjectManufactureDate,
      addr_id          as MovableObjectAddressID,
      @ObjectModel.foreignKey.association: '_MovableObjectLocation'
      mov_loc_desc     as MovableObjectLocation,
      mov_loc_de_rmrk  as MovableObjectLocationComment,
      @ObjectModel.foreignKey.association: '_MovableObjectBankIdnType'
      mov_iden_typ     as MovableObjectBankIdnType,
      mov_desc_col_mat as MovableObjectBankIdnDesc,
      mov_dop          as MovableObjectPurchaseDate,
      mov_ident        as MovableObjectCommercialUsage,
      mov_uob          as MovableObjectUse,
      @ObjectModel.foreignKey.association: '_MovableObjectMfgCntry'
      mov_manu_cntry   as MovableObjectMfgCntry,
      @ObjectModel.foreignKey.association: '_MovableObjectClassification'
      mov_type_feat    as MovableObjectClassification,
      ext_itm_no       as MovableObjectExtRefNumber,
      @ObjectModel.foreignKey.association: '_DeviceObjectCountryKey'
      dev_country_key  as DeviceObjectCountryKey,
      dev_mac_no       as DeviceObjectMachineNumber,
      acr_delvdat      as AircraftObjectDeliveryDate,
      @Semantics.booleanIndicator: true
      acr_reg          as AircraftObjectIsRegistered,
      @ObjectModel.foreignKey.association: '_AircraftObjectRegnCntry'
      acr_regc         as AircraftObjectRegnCntry,
      acr_regm         as AircraftObjectRegistrationMark,
      acr_rc           as AircraftObjectRegnCmnt,
      acr_eman         as AircraftObjectEngnMfrName,
      acr_emod         as AircraftObjectEngineModelName,
      acr_epool        as AircraftObjEngnPoolingTtl,
      acr_eprmk        as AircraftObjEngnPoolingCmnt,
      acr_noe          as AircraftObjectNumberOfEngines,
      acr_name         as AircraftObjectName,
      @Semantics.quantity.unitOfMeasure: 'AircraftObjMaxTakeoffWgtUnit'
      acr_mtow         as AircraftObjectMaxTakeoffWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_AircraftObjMaxTakeoffWgtUnit'
      acr_mtow_unt     as AircraftObjMaxTakeoffWgtUnit,
      acr_msnno        as AircraftObjectMfrSerialNmbr,
      @ObjectModel.foreignKey.association: '_AircraftObjectRatingClass'
      acr_ratcls       as AircraftObjectRatingClass,
      acr_ratd         as AircraftObjectRatingDate,
      @Semantics.quantity.unitOfMeasure: 'VehObjMaxPermissibleWgtUnit'
      perm_wght        as VehicleObjMaxPermissibleWeight,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_VehObjMaxPermissibleWgtUnit'
      perm_wght_unt    as VehObjMaxPermissibleWgtUnit,
      place_lic        as VehicleObjectRegnLocDesc,
      veh_reg_no       as VehicleObjectRegistrationMark,
      off_ident        as VehicleObjectRegistrationDocID,
      chais_no         as VehicleObjectChassisNumber,
      bill_no          as InventoryObjectBillNumber,
      @Semantics.amount.currencyCode: 'InventoryObjectUnitCurrency'
      unit_price       as InventoryObjectUnitAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_InventoryObjectUnitCurrency'
      unit_price_curr  as InventoryObjectUnitCurrency,
      @ObjectModel.foreignKey.association: '_InventoryObjStockExchangeType'
      type_stk_exch    as InventoryObjStockExchangeType,
      @ObjectModel.foreignKey.association: '_InventoryObjStkExchangePlace'
      stk_exch_id      as InventoryObjStockExchangePlace,
      rate_fix_dat     as InventoryObjPrevQuotationDate,
      @Semantics.amount.currencyCode: 'InventoryObjectDeterminedCrcy'
      det_price        as InventoryObjectDeterminedAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_InventoryObjectDeterminedCrcy'
      det_curr         as InventoryObjectDeterminedCrcy,
      @Semantics.quantity.unitOfMeasure: 'InventoryObjStockUnitMeasure'
      stock_quantity   as InventoryObjectStockQuantity,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_InventoryObjStockUnitMeasure'
      stock_uom        as InventoryObjStockUnitMeasure,
      admin_org_unit   as CollateralAdminOrgUnit,
      created_at       as MovableObjectCreatedDateTime,
      changed_at       as MovableObjLastChangedDateTime,

      _MovableObjectMasterData,
      _ObjectAssetData,
      _MovableObjectPartner,
      _MovableObjectDocument,
      _ObjectValuationLinkData,
      _ObjectInsuranceLinkData,
      _LiquidationData,
      _ObjectPrtLinkData,
      _MovableObjectCategory,
      _MovableObjectType,
      _CollateralAdminOrgUnitAttrib,
      _MovableObjectMfgCntry,
      _MovableObjectClassification,
      _MovableObjectLocation,
      _MovableObjectBankIdnType,
      _MovableObjectUse,
      _AircraftObjectRatingClass,
      _InventoryObjStockExchangeType,
      _InventoryObjStkExchangePlace,
      _DeviceObjectCountryKey,
      _AircraftObjectRegnCntry,
      _InventoryObjectUnitCurrency,
      _InventoryObjectDeterminedCrcy,
      _InventoryObjStockUnitMeasure,
      _AircraftObjMaxTakeoffWgtUnit,
      _VehObjMaxPermissibleWgtUnit
}
```
