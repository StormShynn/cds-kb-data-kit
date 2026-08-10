---
name: I_MOVABLEOBJECTMASTERDATA
description: "Movable Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTMASTERDATA')/$value
semantic_en: "Movable Object Details"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
  - metadata-only
---
# I_MOVABLEOBJECTMASTERDATA

**Movable Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_MOVABLEOBJECTMASTERDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MovableObjectUUID` |  | |  |  | `RAW(16)` | GUID for  CMS_MOVABLES |
| `MovableObjectCategory` |  | |  |  | `CHAR(6)` | Object Category |
| `MovableObjectType` |  | |  |  | `CHAR(6)` | Movable types |
| `MovableObjectID` |  | |  |  | `CHAR(40)` | Identification Number |
| `MovableObjectDescription` |  | |  |  | `CHAR(30)` | Description of the object |
| `MovableObjectIsAccessory` |  | |  |  | `CHAR(1)` | Identification accessories |
| `MovableObjectModelName` |  | |  |  | `CHAR(30)` | Technical  Category/Category term/Description |
| `MovableObjectManufacturerName` |  | |  |  | `CHAR(30)` | Object Manufacturer Builder |
| `MovableObjectManufactureDate` |  | |  |  | `DATS(8)` |  Date of the Manufacture/Purchase |
| `MovableObjectAddressID` |  | |  |  | `CHAR(10)` | Location / Address |
| `MovableObjectLocation` |  | |  |  | `CHAR(6)` | Location Description |
| `MovableObjectLocationComment` |  | |  |  | `CHAR(30)` | Remark Field for Location Description |
| `MovableObjectBankIdnType` |  | |  |  | `CHAR(6)` | Type of identification / Marking of the collateral material |
| `MovableObjectBankIdnDesc` |  | |  |  | `CHAR(30)` | Bank's Own Identifcation |
| `MovableObjectPurchaseDate` |  | |  |  | `DATS(8)` | Date of Purchase |
| `MovableObjectCommercialUsage` |  | |  |  | `CHAR(2)` | Commercial usage |
| `MovableObjectUse` |  | |  |  | `CHAR(6)` | Use of the object |
| `MovableObjectMfgCntry` |  | |  |  | `CHAR(3)` | Manufacturing Country/Region |
| `MovableObjectClassification` |  | |  |  | `CHAR(6)` | Classification |
| `MovableObjectExtRefNumber` |  | |  |  | `CHAR(40)` | Ext. Item no / Number for identification of the objects |
| `DeviceObjectCountryKey` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `DeviceObjectMachineNumber` |  | |  |  | `CHAR(40)` | External Item Number - Machine number |
| `AircraftObjectDeliveryDate` |  | |  |  | `DATS(8)` | Delivery Date |
| `AircraftObjectIsRegistered` |  | |  |  | `CHAR(1)` | Registered |
| `AircraftObjectRegnCntry` |  | |  |  | `CHAR(3)` | Registration Country/Region |
| `AircraftObjectRegistrationMark` |  | |  |  | `CHAR(6)` | Registration Mark |
| `AircraftObjectRegnCmnt` |  | |  |  | `CHAR(30)` | Registration Comments |
| `AircraftObjectEngnMfrName` |  | |  |  | `CHAR(30)` | Engine Manufacturer |
| `AircraftObjectEngineModelName` |  | |  |  | `CHAR(12)` | Engine Model |
| `AircraftObjEngnPoolingTtl` |  | |  |  | `CHAR(10)` | Engine pooling |
| `AircraftObjEngnPoolingCmnt` |  | |  |  | `CHAR(30)` | Engine pooling remarks |
| `AircraftObjectNumberOfEngines` |  | |  |  | `INT4(10)` | Number of Engines |
| `AircraftObjectName` |  | |  |  | `CHAR(30)` | Object name |
| `AircraftObjectMaxTakeoffWeight` |  | |  |  | `QUAN(13)` | Maximum take-off weight |
| `AircraftObjMaxTakeoffWgtUnit` |  | |  |  | `UNIT(3)` | Maximum take off weight (Unit) |
| `AircraftObjectMfrSerialNmbr` |  | |  |  | `CHAR(10)` | MSN Number |
| `AircraftObjectRatingClass` |  | |  |  | `CHAR(6)` | Rating Class |
| `AircraftObjectRatingDate` |  | |  |  | `DATS(8)` | Rating Date |
| `VehicleObjMaxPermissibleWeight` |  | |  |  | `QUAN(13)` | Maximum Permissible Weight |
| `VehObjMaxPermissibleWgtUnit` |  | |  |  | `UNIT(3)` | Unit of the quantity |
| `VehicleObjectRegnLocDesc` |  | |  |  | `CHAR(30)` | Place of Registration |
| `VehicleObjectRegistrationMark` |  | |  |  | `CHAR(30)` | Vehicle registration mark |
| `VehicleObjectRegistrationDocID` |  | |  |  | `CHAR(30)` | Identification of the registration certificate |
| `VehicleObjectChassisNumber` |  | |  |  | `CHAR(30)` | Chassis Number |
| `InventoryObjectBillNumber` |  | |  |  | `CHAR(20)` | Bill number of the inventory |
| `InventoryObjectUnitAmount` |  | |  |  | `CURR(17)` | Unit Price |
| `InventoryObjectUnitCurrency` |  | |  |  | `CUKY(5)` | Currency for unit price |
| `InventoryObjStockExchangeType` |  | |  |  | `CHAR(6)` | Type of stock exchange |
| `InventoryObjStockExchangePlace` |  | |  |  | `CHAR(6)` | Place of stock exchange |
| `InventoryObjPrevQuotationDate` |  | |  |  | `DATS(8)` | Date of previous quotation |
| `InventoryObjectDeterminedAmt` |  | |  |  | `CURR(17)` | Determined price |
| `InventoryObjectDeterminedCrcy` |  | |  |  | `CUKY(5)` | Currency for determined price |
| `InventoryObjectStockQuantity` |  | |  |  | `QUAN(13)` | Quantity of inventory |
| `InventoryObjStockUnitMeasure` |  | |  |  | `UNIT(3)` | Unit of Measure of Quantity |
| `CollateralAdminOrgUnit` |  | |  |  | `CHAR(12)` | Administration Organizational Unit |
| `MovableObjectCreatedDateTime` |  | |  |  | `DEC(15)` | Creation Timestamp |
| `MovableObjLastChangedDateTime` |  | |  |  | `DEC(15)` | Change Timestamp |
