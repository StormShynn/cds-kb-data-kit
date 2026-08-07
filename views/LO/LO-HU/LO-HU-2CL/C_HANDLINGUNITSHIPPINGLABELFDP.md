---
name: C_HANDLINGUNITSHIPPINGLABELFDP
description: "This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: LO-HU-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value
semantic_en: "This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Form Data Provider HU Shippping Label — CDS view tiêu dùng dựa trên I_HandlingUnitShippingLabelFDP."
keywords:
  - "Form Data Provider Handling Units"
  - "form"
  - "data"
  - "provider"
  - "shippping"
  - "label"
  - "handling"
  - "unit"
  - "number"
  - "warehouse"
  - "packaging"
  - "material"
  - "tare"
  - "weight"
tags:
  - LO
  - bo:companycode
  - component:LO-HU-2CL
  - consumption-view
  - LO-HU
  - LO-HU-2CL
  - lob:logistics general
---
# C_HANDLINGUNITSHIPPINGLABELFDP

**This CDS view represents a form data provider for output management. The CDS view provides data that can be used for the handling unit shipping label. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `LO-HU-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `HandlingUnitNumber` | ✓ | |  |  | `CHAR(20)` | External Handling Unit Identification |
| `Warehouse` | ✓ | |  |  | `CHAR(4)` | Warehouse Number/Warehouse Complex |
| `PackagingMaterial` |  | |  |  | `CHAR(40)` | Packaging Material |
| `HandlingUnitTareWeight` |  | |  |  | `QUAN(15)` | Tare Weight of Handling Unit |
| `HandlingUnitTareWeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `GrossVolume` |  | |  |  | `QUAN(15)` | Total Volume of Handling Unit |
| `HandlingUnitNetVolume` |  | |  |  | `QUAN(15)` | Loading Volume of Handling Unit |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitTareVolume` |  | |  |  | `QUAN(15)` | Tare Volume of Handling Unit |
| `HandlingUnitTareVolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `HandlingUnitLength` |  | |  |  | `QUAN(13)` | Length |
| `HandlingUnitWidth` |  | |  |  | `QUAN(13)` | Width |
| `HandlingUnitHeight` |  | |  |  | `QUAN(13)` | Height |
| `UnitOfMeasureDimension` |  | |  |  | `UNIT(3)` | Unit of Dimension for Length/Width/Height |
| `HandlingUnitReferenceDocument` |  | |  |  | `CHAR(20)` | Key for Object to Which the Handling Unit is Assigned |
| `HandlingUnitProcessStatus` |  | |  |  | `CHAR(1)` | Handling Unit Process Status |
| `HandlingUnitIndicator` |  | |  | `cast ( ' ' as /scwm/vhi preserving type)` | `CHAR(1)` | Virtual Handling Unit |
| `HandlingUnitQuantity` |  | |  | `cast ( 0 as /scwm/de_quantity )` | `QUAN(31)` | Quantity Field |
| `HandlingUnitQuantityUnit` |  | |  | `cast ( ' ' as meins )` | `UNIT(3)` | Base Unit of Measure |
| `Batch` |  | |  | `cast ( ' ' as /scwm/de_charg preserving type)` | `CHAR(10)` | Batch |
| `InternationalArticleNumber` |  | |  | `cast ( ' ' as ean11 preserving type )` | `CHAR(18)` | International Article Number (EAN/UPC) |
| `Product` |  | |  | `cast ( ' ' as /scwm/de_matnr preserving type)` | `CHAR(40)` | Product |
| `ProductDescription` |  | |  | `cast ( ' ' as /scwm/de_ui_maktx preserving type)` | `CHAR(40)` | Product Short Description |
| `ShipToPartyAddressLine1Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine2Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine3Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine4Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine5Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine6Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine7Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipToPartyAddressLine8Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine1Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine2Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine3Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine4Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine5Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine6Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine7Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `ShipFromPartyAddressLine8Text` |  | |  | `cast ( ' ' as lines preserving type)` | `CHAR(80)` | Address line |
| `BarCodeLine1` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `BarCodeLine2` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `BarCodeLine3` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `BarCodeLine1Text` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `BarCodeLine2Text` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `BarCodeLine3Text` |  | |  | `cast ( ' ' as /scwm/barcode_print preserving type)` | `CHAR(64)` | Bar Code |
| `HandlingUnitWeightTolerance` |  | |  |  | `DEC(3)` |  |
| `HandlingUnitVolumeTolerance` |  | |  |  | `DEC(3)` |  |
| `HandlingUnitIsClosed` |  | |  |  | `CHAR(1)` | Closed Packaging Material |
| `HandlingUnitMaxVolume` |  | |  |  | `QUAN(15)` | Allowed Loading Volume for Handling Unit |
| `HandlingUnitMaxLength` |  | |  |  | `QUAN(15)` | Maximum Packing Length of a Packaging Material |
| `HandlingUnitMaxWidth` |  | |  |  | `QUAN(15)` | Maximum Allowed Packing Width of a Packaging Material |
| `HandlingUnitMaxHeight` |  | |  |  | `QUAN(15)` | Maximum Packing Height of a Packaging Material |
| `HandlingUnitMaxDimensionUnit` |  | |  |  | `UNIT(3)` | Unit of Measure for Maximum Packing Length/Width/Height |
| `HandlingUnitType` |  | |  |  | `CHAR(4)` | Handling Unit Type |
| `StorageType` |  | |  |  | `CHAR(4)` | Storage Type |
| `StorageSection` |  | |  |  | `CHAR(4)` | Storage Section |
| `StorageBin` |  | |  |  | `CHAR(18)` | Storage Bin |
| `ConsolidationGroup` |  | |  |  | `CHAR(10)` | Consolidation Group |
| `WorkloadIdentification` |  | |  |  | `NUMC(12)` | Workload Identification |
| `EntitledToDisposeParty` |  | |  |  | `CHAR(10)` | Party Entitled to Dispose |
| `HandlingUnitPackingGroup` |  | |  |  | `CHAR(4)` | Packing Group |
| `HazardousSubstanceIndicator` |  | |  |  | `CHAR(1)` | Hazardous Substance |
| `HandlingUnitLogicalPosition` |  | |  |  | `CHAR(2)` | Logical Position of Handling Unit |
| `ExternalStorageProcessStep` |  | |  |  | `CHAR(4)` | External Storage Process Step |
| `ProcessStepCompletedInd` |  | |  |  | `CHAR(1)` | Process Step for HU Completed |
| `StorageProcess` |  | |  |  | `CHAR(4)` | Storage Process |
| `GrossWeight` |  | |  |  | `QUAN(15)` | Total Weight of Handling Unit |
| `NetWeight` |  | |  |  | `QUAN(15)` | Loading Weight of Handling Unit |
| `HandlingUnitMaxWeight` |  | |  |  | `QUAN(15)` | Allowed Loading Weight of a Handling Unit |
| `WeightUnit` |  | |  |  | `UNIT(3)` | Unit of Weight |
| `PackagingMaterialType` |  | |  |  | `CHAR(4)` | Packaging Material Type |
| `HandlingUnitBarCodePart1Value` |  | |  | `concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', ' ' ) ) ) ) ) ) ) ) ) ) ) ) )` | `CHAR(1333)` |  |
| `HandlingUnitBarCodePart2Value` |  | |  | `concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', ' ' ) ) ) ) ) ) ) ) ) )` | `CHAR(1002)` |  |
| `MatrixBarCodeNorm4994Value` |  | |  | `concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', concat(' ', ' ' ) ) ) ) ) ) ) ) ) ) ) ) )` | `CHAR(1333)` |  |
| `DeliveryDocument` |  | |  | `cast ( ' ' as vbeln_vl preserving type )` | `CHAR(10)` | Delivery |
| `DeliveryItem` |  | |  | `cast ( '000000' as posnr_vl preserving type )` | `NUMC(6)` | Delivery Item |
| `UnloadingPointName` |  | |  | `cast ( ' ' as ablad preserving type )` | `CHAR(25)` | Unloading Point |
| `CustomerPartnerDescription` |  | |  | `cast ( ' ' as knref preserving type )` | `CHAR(30)` | Cust.-Specif. Descr. of Business Partner (Plant, Stor. Loc.) |
| `ManufactureDate` |  | |  | `cast ( '00010101' as hsdat )` | `DATS(8)` | Date of Manufacture |
| `ShelfLifeExpirationDate` |  | |  | `cast ( '00010101' as hsdat )` | `DATS(8)` | Date of Manufacture |
| `ActualGoodsMovementDate` |  | |  | `cast ('00010101' as wadat_ist )` | `DATS(8)` | Actual Goods Movement Date |
| `GoodsMovementDate` |  | |  | `cast ('00010101' as wadat )` | `DATS(8)` | Goods Issue Date |
| `DeliveryDate` |  | |  | `cast ( '00010101' as dats )` | `DATS(8)` | Field of type DATS |
| `HandlingUnitShippingLabelDate` |  | |  | `cast ( '00010101' as dats )` | `DATS(8)` | Field of type DATS |
| `DeliveryTime` |  | |  | `cast ( '000101' as tims )` | `TIMS(6)` | Field of type TIMS |
| `CountryOfOrigin` |  | |  | `cast ( ' ' as land1 )` | `CHAR(3)` | Country/Region Key |
| `HandlingUnitShipLabelDateCode` |  | |  | `cast ( ' ' as hu_shipping_label_date_code preserving type )` | `CHAR(1)` | Type of Date used in the Shipping Label for Handling Units |
| `Customer` |  | |  | `cast ( ' ' as name1 preserving type )` | `CHAR(30)` | Name |
| `DestinationPlant` |  | |  | `cast ( ' ' as werks_d preserving type )` | `CHAR(4)` | Plant |
| `DestinationLocationName` |  | |  | `cast ( ' ' as empst preserving type )` | `CHAR(25)` | Receiving Point |
| `Quantity` |  | |  | `cast ( 0 as vemng )` | `QUAN(15)` | Base Quantity Packed in the Handling Unit Item |
| `Material` |  | |  | `cast ( ' ' as matnr preserving type )` | `CHAR(40)` | Material Number |
| `SupplierAccountNumberSoldTo` |  | |  | `cast ( ' ' as eikto_m preserving type )` | `CHAR(12)` | Our account number with the supplier |
| `SupplierAccountNumberShipTo` |  | |  | `cast ( ' ' as eikto_m preserving type )` | `CHAR(12)` | Our account number with the supplier |
| `CustEngineeringChgStatus` |  | |  | `cast ( ' ' as aeskd preserving type )` | `CHAR(17)` | Customer Engineering Change Status |
| `CustomerPointOfConsumption` |  | |  | `cast ( ' ' as vbrst preserving type )` | `CHAR(14)` | Customer point of consumption |
| `MaterialByCustomer` |  | |  | `cast ( ' ' as matnr_ku preserving type )` | `CHAR(35)` | Material Number Used by Customer |
| `HandlingUnitCustomerPackMat` |  | |  | `cast ( ' ' as matnr_ku preserving type )` | `CHAR(35)` | Material Number Used by Customer |
| `MaterialDescriptionByCustomer` |  | |  | `cast ( ' ' as kdptx preserving type )` | `CHAR(40)` | Customer Description of Material |
| `NumberOfItems` |  | |  | `cast ( 1234567890 as int4 preserving type )` | `INT4(10)` | 4 Byte Signed Integer |
| `HandlingUnitLabelType` |  | |  | `cast ( ' ' as char10 preserving type )` | `CHAR(10)` | Character Field with Length 10 |
| `HandlingUnitContentType` |  | |  | `cast ( ' ' as hu_content_type preserving type )` | `CHAR(2)` | Handling Unit Content Type  for Shipping Label |
| `Route` |  | |  | `cast (' ' as route preserving type)` | `CHAR(6)` | Route |
| `TimeZoneName` |  | |  | `cast (' ' as /scdl/dl_tzone preserving type)` | `CHAR(6)` | Time Zone |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_HandlingUnitHeader` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_HANDLINGUNITSHIPPINGLABELFDP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CHUSHIPLABEL'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Form Data Provider HU Shippping Label'
@VDM.viewType: #CONSUMPTION
@AccessControl.personalData.blocking
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #OUTPUT_FORM_DATA_PROVIDER
@ObjectModel.supportedCapabilities:  [  #OUTPUT_FORM_DATA_PROVIDER   ]

define view C_HandlingUnitShippingLabelFDP
  as select from I_HandlingUnitShippingLabelFDP as huhdr

  //Extensibility
  association [0..1] to E_HandlingUnitHeader as _Extension on  $projection.HandlingUnitNumber = _Extension.HandlingUnitExternalID
                                                           and huhdr.HandlingUnitInternalID   = _Extension.HandlingUnitInternalID
{
  key huhdr.HandlingUnitNumber,
  key Warehouse,
      PackagingMaterial,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareWeightUnit'
      HandlingUnitTareWeight,
      @Semantics.unitOfMeasure:true
      HandlingUnitTareWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      GrossVolume,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      HandlingUnitNetVolume,
      @Semantics.unitOfMeasure:true
      VolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitTareVolumeUnit'
      HandlingUnitTareVolume,
      //      HandlingUnitVolumeTolerance,
      @Semantics.unitOfMeasure:true
      HandlingUnitTareVolumeUnit,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitLength,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitWidth,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      HandlingUnitHeight,
      @Semantics.unitOfMeasure:true
      UnitOfMeasureDimension,

      HandlingUnitReferenceDocument,

      HandlingUnitProcessStatus,

      // EWM specific fields
      cast ( ' ' as /scwm/vhi preserving type)                                                                            as HandlingUnitIndicator,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      cast ( 0 as /scwm/de_quantity )                                                                                     as HandlingUnitQuantity,
      cast ( '   ' as meins )                                                                                             as HandlingUnitQuantityUnit,
      cast ( '          '                                    as /scwm/de_charg preserving type)                           as Batch,

      cast ( '                  ' as ean11 preserving type )                                                              as InternationalArticleNumber,
      cast ( '                                        ' as /scwm/de_matnr preserving type)                                as Product,
      cast ( '                                        ' as /scwm/de_ui_maktx preserving type)                             as ProductDescription,

      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine1Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine2Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine3Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine4Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine5Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine6Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine7Text,
      cast ( '                                                                                ' as lines preserving type) as ShipToPartyAddressLine8Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine1Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine2Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine3Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine4Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine5Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine6Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine7Text,
      cast ( '                                                                                ' as lines preserving type) as ShipFromPartyAddressLine8Text,

      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine1,
      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine2,
      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine3,

      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine1Text,
      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine2Text,
      cast ( '                                                                ' as /scwm/barcode_print preserving type)   as BarCodeLine3Text,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      huhdr.HandlingUnitWeightTolerance,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      huhdr.HandlingUnitVolumeTolerance,
      huhdr.HandlingUnitIsClosed,
      @Semantics.quantity.unitOfMeasure: 'VolumeUnit'
      huhdr.HandlingUnitMaxVolume,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      huhdr.HandlingUnitMaxLength,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      huhdr.HandlingUnitMaxWidth,
      @Semantics.quantity.unitOfMeasure: 'HandlingUnitMaxDimensionUnit'
      huhdr.HandlingUnitMaxHeight,
      huhdr.HandlingUnitMaxDimensionUnit,
      huhdr.HandlingUnitType,

      @ObjectModel.virtualElement: true
      @ObjectModel.virtualElementCalculatedBy: 'CL_P_EWM_HANDLINGUNITHEADER02'
      huhdr.StorageType,
      @ObjectModel.virtualElement: true
      @ObjectModel.virtualElementCalculatedBy: 'CL_P_EWM_HANDLINGUNITHEADER02'
      huhdr.StorageSection,
      @ObjectModel.virtualElement: true
      @ObjectModel.virtualElementCalculatedBy: 'CL_P_EWM_HANDLINGUNITHEADER02'
      huhdr.StorageBin,

      huhdr.ConsolidationGroup,
      huhdr.WorkloadIdentification,
      huhdr.EntitledToDisposeParty,
      huhdr.HandlingUnitPackingGroup,
      huhdr.HazardousSubstanceIndicator,
      huhdr.HandlingUnitLogicalPosition,
      huhdr.ExternalStorageProcessStep,
      huhdr.ProcessStepCompletedInd,
      huhdr.StorageProcess,

      // LE Fields
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      GrossWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      NetWeight,
      @Semantics.quantity.unitOfMeasure: 'WeightUnit'
      HandlingUnitMaxWeight,
      @Semantics.unitOfMeasure:true
      WeightUnit,
      PackagingMaterialType,
      // there is a maximum of 1333 for Char so we concatenate 13 times char100 and once char33
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
             '                                 ' ) ) ) ) ) ) ) ) ) ) ) ) )                                                as HandlingUnitBarCodePart1Value,
      // altogether DataMatrix ECC200 can store 2.335 Char so we put 1002 Char in the second part

      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
             '  ' ) ) ) ) ) ) ) ) ) )                                                                                     as HandlingUnitBarCodePart2Value,
      // there is a maximum of 1333 for Char so we concatenate 13 times char100 and once char33
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
      concat('                                                                                                    ',
             '                                 ' ) ) ) ) ) ) ) ) ) ) ) ) )                                                as MatrixBarCodeNorm4994Value,

      cast ( '          '                     as vbeln_vl preserving type )                                               as DeliveryDocument,
      cast ( '000000'                         as posnr_vl preserving type )                                               as DeliveryItem,
      cast ( '                         '      as ablad preserving type )                                                  as UnloadingPointName,
      cast ( '                              ' as knref preserving type )                                                  as CustomerPartnerDescription,
      // date fields
      cast ( '00010101'                       as hsdat  )                                                                 as ManufactureDate,
      cast ( '00010101'                       as hsdat )                                                                  as ShelfLifeExpirationDate,
      cast ('00010101'                        as wadat_ist  )                                                             as ActualGoodsMovementDate, //GoodsIssueDate
      cast ('00010101'                        as wadat  )                                                                 as GoodsMovementDate,       //GoodsIssueDate
      cast ( '00010101'                       as dats                  )                                                  as DeliveryDate,
      cast ( '00010101'                       as dats                  )                                                  as HandlingUnitShippingLabelDate,
      cast ( '000101'                         as tims                  )                                                  as DeliveryTime,
      cast ( '   '                            as land1                 )                                                  as CountryOfOrigin,
      cast ( ' '                              as hu_shipping_label_date_code preserving type )                            as HandlingUnitShipLabelDateCode,
      cast ( '                              ' as name1 preserving type )                                                  as Customer,
      cast ( '    '                           as werks_d preserving type )                                                as DestinationPlant,
      cast ( '                         '      as empst   preserving type )                                                as DestinationLocationName,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureDimension'
      cast ( 0                                as vemng )                                                                  as Quantity,
      cast ( '                                        ' as matnr preserving type )                                        as Material,
      cast ( '            '                   as eikto_m preserving type )                                                as SupplierAccountNumberSoldTo,
      cast ( '            '                   as eikto_m preserving type )                                                as SupplierAccountNumberShipTo,
      cast ( '                 '              as aeskd preserving type )                                                  as CustEngineeringChgStatus,
      cast ( '              '                 as vbrst preserving type )                                                  as CustomerPointOfConsumption,
      cast (  '                                   ' as matnr_ku preserving type )                                         as MaterialByCustomer,
      cast (  '                                   ' as matnr_ku preserving type )                                         as HandlingUnitCustomerPackMat,
      cast (  '                                        ' as kdptx preserving type )                                       as MaterialDescriptionByCustomer,
      cast ( 1234567890                       as int4 preserving type )                                                   as NumberOfItems,
      cast ( '          '                     as char10 preserving type )                                                 as HandlingUnitLabelType,
      cast ( '  '                            as hu_content_type preserving type )                                         as HandlingUnitContentType,

      // for feature parity with WM HU Label
      cast ('      ' as route preserving type)                                                                            as Route,
      cast ('      ' as /scdl/dl_tzone preserving type)                                                                   as TimeZoneName
}
```
