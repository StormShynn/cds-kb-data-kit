---
name: I_WASTEANALYTICSCUBE
description: "Waste Data Analytics - Cube"
app_component: EHS-SUS-WA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value
semantic_en: "Waste Data Analytics - Cube"
semantic_vi: "Waste Data Analytics - Cube — CDS view giao diện dựa trên I_WasteAnalyticsDimension."
keywords:
  - "waste"
  - "data"
  - "analytics"
  - "cube"
  - "envrmt"
  - "transp"
  - "matl"
  - "assgd"
  - "code"
  - "stream"
  - "rgty"
  - "value"
tags:
  - EHS
  - component:EHS-SUS-WA
  - EHS-SUS
  - EHS-SUS-WA
  - interface-view
  - bo:salesorganization
---
# I_WASTEANALYTICSCUBE

**Waste Data Analytics - Cube**

| Property | Value |
|---|---|
| App Component | `EHS-SUS-WA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `EnvrmtWasteTranspDocUUID` | ✓ | |  |  | `RAW(16)` | Waste Transportation Document UUID |
| `EnvWstTranspDocMatlAssgdUUID` | ✓ | |  |  | `RAW(16)` | Waste Transportation Document Material Assigned |
| `EnvrmtWasteCodeUUID` | ✓ | | `_ProductWasteCode` | `EnvrmtWasteCodeUUID` | `RAW(16)` | NodeID |
| `WasteStreamRgtyCode` | ✓ | | `_RgtyCode` | `WasteStreamRgtyCode` | `CHAR(4)` | Waste Stream Regulatory Code |
| `WasteStreamRgtyCodeValue` | ✓ | | `_RgtyCode` | `WasteStreamRgtyCodeValue` | `CHAR(4)` | Waste Stream Regulatory Code Value |
| `EnvrmtWastePartnerNmbr` | ✓ | | `_EnvrmtWasteTransporter` | `EnvrmtWastePartnerNmbr` | `CHAR(10)` | Business Partner Number |
| `EHSMainLocationID` | ✓ | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID` | `CHAR(20)` | Location ID |
| `EHSMainLocationName` |  | |  | `_EHSLocationForFiltering(P_Date: $parameters.P_Date)._EHSLocationRevisionNameT[1: Language = $parameters.P_Language and RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date ].EHSLocationName` | `CHAR(60)` | Location |
| `CmplRqVersUUID` |  | | `_DangerousGoods` | `CmplRqVersUUID` | `RAW(16)` | Compliance Requirement UUID |
| `ClassifiedAsDangerousGood` |  | | `_DangerousGoods` | `ClassifiedAsDangerousGood` | `CHAR(2)` | Classified As |
| `WasteTranspDocID` |  | |  |  | `CHAR(20)` | ID of Waste Transportation Document |
| `EnvrmtWasteTranspDocType` |  | |  |  | `CHAR(10)` | Waste Transportation Document Type ID |
| `EnvrmtWasteTranspDocStatus` |  | |  |  | `CHAR(3)` | Waste Transportation Document Status |
| `CmplRqVersPermitNumber` |  | |  |  | `CHAR(80)` | Permit Number |
| `EnvWstTranspDocPrintedDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Print Date |
| `EnvWstTranspDocHandoverDate` |  | |  |  | `DATS(8)` | Waste Transportation Document Handover Date |
| `EnvWstTranspDocTakeAcceptDate` |  | | `_EnvrmtWasteTransporter` | `EnvWstTranspDocTakeAcceptDate` | `DATS(8)` | Transportation Document Take/Accept date |
| `EnvrmtWasteTransptrRegnID` |  | | `_EnvrmtWasteTransporter` | `EnvrmtWasteTransptrRegnID` | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWasteGnrtrUUID` |  | |  |  | `RAW(16)` | Waste Generator UUID |
| `EnvrmtWasteGnrtrID` |  | |  |  | `CHAR(20)` | Waste Generator ID |
| `WasteRegistrationNumber` |  | |  |  | `CHAR(60)` | Waste Registration Number |
| `WasteTransferRequestNumber` |  | |  |  | `CHAR(20)` | Number of Waste Transfer Request |
| `WasteStreamPtOfGnrtnLocUUID` |  | | `_WasteTransferRequest` | `WasteStreamPtOfGnrtnLocUUID` | `RAW(16)` | Waste Stream - Point of Generation UUID |
| `EHSLocationID` |  | | `_WasteTransferRequest` | `EHSLocationID` | `CHAR(20)` | Location ID |
| `WasteTransfReqStatus` |  | | `_WasteTransferRequest` | `WasteTransfReqStatus` | `CHAR(2)` | Status of Waste Transfer Request |
| `CostCenter` |  | | `_WasteTransferRequest` | `CostCenter` | `CHAR(10)` | Cost Center |
| `WasteStreamUUID` |  | |  |  | `RAW(16)` | Waste Stream UUID |
| `WasteStreamDsplChnlUUID` |  | |  |  | `RAW(16)` | Waste Stream Disposal Channel UUID |
| `WasteDisposalChannelNumber` |  | |  |  | `CHAR(20)` | Disposal Channel Number |
| `WasteDisposalChannelName` |  | |  |  | `CHAR(40)` | Disposal Channel Name |
| `EnvrmtWasteFcltyRegistrationID` |  | |  |  | `CHAR(20)` | Waste Registration Number |
| `EnvrmtWastePartFcltyName` |  | |  |  | `CHAR(60)` | Waste Disposal Facility Name |
| `BusinessPartner` |  | |  |  | `CHAR(10)` | Business Partner Number |
| `EnvWstTranspDocDisposerDate` |  | |  |  | `DATS(8)` | Transportation Document Take/Accept date |
| `Material` |  | |  |  | `CHAR(40)` | Product |
| `WasteStreamContainerType` |  | |  |  | `CHAR(4)` | Waste Stream Container Type |
| `EnvrmtWasteMgmtMethCode` |  | | `_MethCode` | `EnvrmtWasteMgmtMethCode` | `CHAR(10)` | Waste Management Method Code |
| `EnvrmtWasteHazardCharcID` |  | |  |  | `CHAR(2)` | Waste Type ID |
| `EnvrmtWasteCode` |  | | `_ProductWasteCode` | `EnvrmtWasteCode` | `CHAR(20)` | Waste Code |
| `EnvrmtWasteCodeShortDesc` |  | | `_ProductWasteCode` | `EnvrmtWasteCodeShortDesc` | `CHAR(132)` | Normalized text used for searching |
| `WasteStreamRgtyCodeValueText` |  | | `_RgtyCode._RegCodeValue` | `WasteStreamRgtyCodeValueText` | `CHAR(255)` | Description (Extra Long) |
| `CmplRqVers` |  | | `_DangerousGoods` | `CmplRqVers` | `CHAR(40)` | Compliance Requirement Version ID |
| `CmplRqVersName` |  | | `_DangerousGoods` | `CmplRqVersName` | `CHAR(255)` | Name of the Compliance Requirement Version |
| `ComplianceRequirement` |  | |  |  | `CHAR(30)` | Compliance Requirement |
| `DngrsGoodsModeOfTransport` |  | |  |  | `CHAR(10)` | Mode of Transport |
| `EnvrmtWasteOutgoingQuantity` |  | |  |  | `DEC(10)` |  |
| `EnvrmtWasteConfirmedQuantity` |  | |  |  | `DEC(10)` |  |
| `EnvrmtWasteOutgoingQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWasteConfirmedQtyCode` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EnvrmtWastePartDsplFcltyUUID` |  | |  |  | `RAW(16)` | Waste Disposal Facility UUID |
| `EnvrmtWastePartnerUUID` |  | |  |  | `RAW(16)` | Waste Partner UUID |
| `ChmlCmplncInfoUUID` |  | |  |  | `RAW(16)` | Chemical Compliance Information |
| `_MethCode` | | ✓ | | | | |
| `_MethCodeDimn` | | ✓ | | | | |
| `_PartnerTransporterDimn` | | ✓ | | | | |
| `_RgtyCode` | | ✓ | | | | |
| `_DangerousGoods` | | ✓ | | | | |
| `_ClassifiedAs` | | ✓ | | | | |
| `_WasteCodeDimn` | | ✓ | | | | |
| `_CmplRqVers` | | ✓ | | | | |
| `_EHSLocationForFiltering` | | ✓ | | | | |
| `_WasteTransferRequest` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_CalendarPrinted` | | ✓ | | | | |
| `_CalendarHandover` | | ✓ | | | | |
| `_UnitOfMeasureOutgoingQty` | | ✓ | | | | |
| `_UnitOfMeasureConfirmedQty` | | ✓ | | | | |
| `_Permit` | | ✓ | | | | |
| `_ContainerTypeDimn` | | ✓ | | | | |
| `_TranspDocType` | | ✓ | | | | |
| `_TranspDocSts` | | ✓ | | | | |
| `_TranspDocGnrtr` | | ✓ | | | | |
| `_DisposalChnlDimn` | | ✓ | | | | |
| `_PartnerDisposerDimn` | | ✓ | | | | |
| `_HazardCharacteristic` | | ✓ | | | | |
| `_HazardCharacteristicIMG` | | ✓ | | | | |
| `_TranspDocMat` | | ✓ | | | | |
| `_Location` | | ✓ | | | | |
| `_LocTextDesc` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MethCode` | `I_EnvrmtWastePartMatlAssgmt` | [0..1] |
| `_MethCodeDimn` | `I_WasteMgmtMethCodeDimension` | [0..1] |
| `_PartnerTransporterDimn` | `I_WasteTransporterDimension` | [0..1] |
| `_RgtyCode` | `I_WstStmRgtyCodeDstct` | [0..*] |
| `_DangerousGoods` | `I_EnvrmtWasteDngrsGdsCmbnd` | [0..*] |
| `_ClassifiedAs` | `I_WasteDangerousGoodDimension` | [0..1] |
| `_ProductWasteCode` | `I_EnvrmtProductWasteCode` | [0..*] |
| `_WasteCodeDimn` | `I_EnvrmtWasteCodeDimension` | [0..1] |
| `_CmplRqVers` | `I_WasteCmplRqVersDimn` | [0..1] |
| `_EHSLocationForFiltering` | `I_EHSLocationForFiltering` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_WASTEANALYTICSCUBE')/$value)*

```abap
@AbapCatalog: { sqlViewName: 'IWANALYTC',
                compiler.compareFilter: true }
                
@Consumption.dbHints: [ 'OPTIMIZATION_LEVEL(RULE_BASED)' ]                

@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel:
{
  usageType:
  {
    dataClass: #MIXED,
    sizeCategory: #XL,
    serviceQuality: #D
  }
}

@Analytics.dataCategory: #CUBE

@Analytics.internalName:#LOCAL

@VDM.viewType: #COMPOSITE

@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [#ANALYTICAL_PROVIDER]
@ObjectModel.modelingPattern: #ANALYTICAL_CUBE
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Waste Data Analytics - Cube'
define view I_WasteAnalyticsCube
  with parameters
    P_Date     : sydatum,
    P_Language : sylangu

  as select from I_WasteAnalyticsDimension
  association [0..1] to I_EnvrmtWastePartMatlAssgmt   as _MethCode                on  $projection.EnvrmtWastePartDsplFcltyUUID = _MethCode.EnvrmtWastePartDsplFcltyUUID
                                                                                  and $projection.EnvrmtWastePartnerUUID       = _MethCode.EnvrmtWastePartnerUUID
                                                                                  and $projection.ChmlCmplncInfoUUID           = _MethCode.ChmlCmplncInfoUUID
  association [0..1] to I_WasteMgmtMethCodeDimension  as _MethCodeDimn            on  $projection.envrmtwastemgmtmethcode = _MethCodeDimn.EnvrmtWasteMgmtMethCode
  association [0..1] to I_WasteTransporterDimension   as _PartnerTransporterDimn  on  $projection.envrmtwastepartnernmbr = _PartnerTransporterDimn.BusinessPartner
  association [0..*] to I_WstStmRgtyCodeDstct         as _RgtyCode                on  $projection.WasteStreamUUID = _RgtyCode.WasteStreamUUID
  association [0..*] to I_EnvrmtWasteDngrsGdsCmbnd    as _DangerousGoods          on  $projection.ChmlCmplncInfoUUID          = _DangerousGoods.ChmlCmplncInfoUUID
                                                                                  and $projection.ComplianceRequirement       = _DangerousGoods.ComplianceRequirement
                                                                                  and (
                                                                                     $projection.DngrsGoodsModeOfTransport    = _DangerousGoods.DngrsGoodsModeOfTransport
                                                                                     or $projection.DngrsGoodsModeOfTransport is initial
                                                                                   )
  association [0..1] to I_WasteDangerousGoodDimension as _ClassifiedAs            on  $projection.classifiedasdangerousgood = _ClassifiedAs.ClassifiedAsDangerousGood
  association [0..*] to I_EnvrmtProductWasteCode      as _ProductWasteCode        on  $projection.ChmlCmplncInfoUUID = _ProductWasteCode.ChmlCmplncInfoUUID
  association [0..1] to I_EnvrmtWasteCodeDimension    as _WasteCodeDimn           on  $projection.envrmtwastecode = _WasteCodeDimn.EnvrmtWasteCode
  association [0..1] to I_WasteCmplRqVersDimn         as _CmplRqVers              on  $projection.cmplrqvers = _CmplRqVers.CmplRqVers

  association [1..*] to I_EHSLocationForFiltering     as _EHSLocationForFiltering on  $projection.EnvrmtWasteGnrtrUUID = _EHSLocationForFiltering.EHSLocationUUID
{

  key EnvrmtWasteTranspDocUUID,
      @ObjectModel.foreignKey.association: '_TranspDocMat'
  key EnvWstTranspDocMatlAssgdUUID,

  key _ProductWasteCode.EnvrmtWasteCodeUUID,
      @ObjectModel.foreignKey.association: '_RegCode'
  key _RgtyCode.WasteStreamRgtyCode,
      @ObjectModel.foreignKey.association: '_RgtyCodeValDimn'
  key _RgtyCode.WasteStreamRgtyCodeValue,
      @ObjectModel.foreignKey.association: '_PartnerTransporterDimn'
  key _EnvrmtWasteTransporter.EnvrmtWastePartnerNmbr,

      @EndUserText.label: 'Main Location ID'
  key _EHSLocationForFiltering(P_Date: $parameters.P_Date).EHSParentLocationID                                                                                                                                                     as EHSMainLocationID,

      @EndUserText.label: 'Main Location Name'
      _EHSLocationForFiltering(P_Date: $parameters.P_Date)._EHSLocationRevisionNameT[1: Language = $parameters.P_Language and RevisionStartDate <= $parameters.P_Date and RevisionEndDate >= $parameters.P_Date  ].EHSLocationName as EHSMainLocationName,

      _DangerousGoods.CmplRqVersUUID,
      @ObjectModel.foreignKey.association: '_ClassifiedAs'
      _DangerousGoods.ClassifiedAsDangerousGood,
      /* Transportation Document */
      WasteTranspDocID,
      @ObjectModel.foreignKey.association: '_TranspDocType'
      EnvrmtWasteTranspDocType,
      @ObjectModel.foreignKey.association: '_TranspDocSts'
      EnvrmtWasteTranspDocStatus,
      
      @ObjectModel.foreignKey.association: '_Permit'
      CmplRqVersPermitNumber,
      @ObjectModel.foreignKey.association: '_CalendarPrinted'
      EnvWstTranspDocPrintedDate,
      @ObjectModel.foreignKey.association: '_CalendarHandover'
      EnvWstTranspDocHandoverDate,

      /* Transporter */

      _EnvrmtWasteTransporter.EnvWstTranspDocTakeAcceptDate,
      _EnvrmtWasteTransporter.EnvrmtWasteTransptrRegnID,

      /* Waste Generator */

      EnvrmtWasteGnrtrUUID,
      @ObjectModel.foreignKey.association: '_TranspDocGnrtr'
      EnvrmtWasteGnrtrID,
      WasteRegistrationNumber,
      //Waste Generator Registration Number (e.g., HST32114) ?

      /* Waste Transfer Request */

      @ObjectModel.foreignKey.association: '_WasteTransferRequest'
      WasteTransferRequestNumber,
      _WasteTransferRequest.WasteStreamPtOfGnrtnLocUUID,
      @ObjectModel.foreignKey.association: '_WastePtOfGnrtn'      
      _WasteTransferRequest.EHSLocationID,
      @ObjectModel.foreignKey.association: '_WasteStatus'      
      _WasteTransferRequest.WasteTransfReqStatus,
      _WasteTransferRequest.CostCenter,
      WasteStreamUUID,

      /* Disposal Channel */

      WasteStreamDsplChnlUUID,
      @ObjectModel.foreignKey.association: '_DisposalChnlDimn'
      WasteDisposalChannelNumber,
      WasteDisposalChannelName,
      EnvrmtWasteFcltyRegistrationID,
      EnvrmtWastePartFcltyName,

      /* Disposer */

      @ObjectModel.foreignKey.association: '_PartnerDisposerDimn'
      BusinessPartner,
      EnvWstTranspDocDisposerDate,

      /* Product */
      @ObjectModel.foreignKey.association: '_Product'
      Material,   
      @ObjectModel.foreignKey.association: '_ContainerTypeDimn'
      WasteStreamContainerType,
      @ObjectModel.foreignKey.association: '_MethCodeDimn'
      _MethCode.EnvrmtWasteMgmtMethCode,
      @ObjectModel.foreignKey.association: '_HazardCharacteristicIMG'
      EnvrmtWasteHazardCharcID,
      @ObjectModel.foreignKey.association: '_WasteCodeDimn'
      _ProductWasteCode.EnvrmtWasteCode,
      _ProductWasteCode.EnvrmtWasteCodeShortDesc,
      _RgtyCode._RegCodeValue.WasteStreamRgtyCodeValueText,
      //      Unit of Measure? default?

      /*Dangerous Goods*/
      @ObjectModel.foreignKey.association: '_CmplRqVers'
      _DangerousGoods.CmplRqVers,
      _DangerousGoods.CmplRqVersName,
      ComplianceRequirement,
      DngrsGoodsModeOfTransport,

      /* Key Figures */

      @EndUserText.label: 'Outgoing Quantity'
      @Semantics.quantity: { unitOfMeasure: 'EnvrmtWasteOutgoingQtyCode' }
      EnvrmtWasteOutgoingQuantity,

      @EndUserText.label: 'Outgoing Quantity'
      @Semantics.quantity: { unitOfMeasure: 'EnvrmtWasteConfirmedQtyCode' }
      EnvrmtWasteConfirmedQuantity,

      @ObjectModel.foreignKey.association: '_UnitOfMeasureOutgoingQty'
//      @Semantics.unitOfMeasure: true
      EnvrmtWasteOutgoingQtyCode,
//      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_UnitOfMeasureConfirmedQty'
      EnvrmtWasteConfirmedQtyCode,
      //     Cost (tbd)

      /* Identifiers */

      EnvrmtWastePartDsplFcltyUUID,
      EnvrmtWastePartnerUUID,
      ChmlCmplncInfoUUID,

      /* Associations */

      _WasteTransferRequest._WasteStatus,
      _WasteTransferRequest._WastePtOfGnrtn,
      //      _WasteTransferRequest._CostCenter,
      _MethCode,
      _MethCodeDimn,
      _WasteTransferRequest,
      _Product,
      _CalendarPrinted,
      _CalendarHandover,
      _UnitOfMeasureOutgoingQty,
      _UnitOfMeasureConfirmedQty,
      _Permit,
      _ContainerTypeDimn,
      _TranspDocType,
      _TranspDocSts,
      _TranspDocGnrtr,
      _DisposalChnlDimn,
      //      _DisposalFacilityDimn,
      _PartnerDisposerDimn,
      _PartnerTransporterDimn,
      _WasteCodeDimn,
      _RgtyCode,
      _RgtyCode._RegCode,
      _RgtyCode._RgtyCodeValDimn,
      
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_HazardCharacteristicIMG'      
      _HazardCharacteristic,
      _HazardCharacteristicIMG,
      _DangerousGoods,
      _ClassifiedAs,

      _CmplRqVers,
      _TranspDocMat,
      _EHSLocationForFiltering,
      /* DCL */

      _Location,
      _LocTextDesc
}
```
