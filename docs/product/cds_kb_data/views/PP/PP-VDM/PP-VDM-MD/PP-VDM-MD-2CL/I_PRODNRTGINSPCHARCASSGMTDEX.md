---
name: I_PRODNRTGINSPCHARCASSGMTDEX
description: "Prodn Rtg Insp Charcs Assignment"
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCASSGMTDEX')/$value
semantic_en: "Prodn Rtg Insp Charcs Assignment"
semantic_vi: "Prodn Rtg Insp Charcs Assignment — CDS view giao diện dựa trên P_ProdnRtgInspCharcsAssgmtDEX."
keywords:
  - "prodn"
  - "rtg"
  - "insp"
  - "charcs"
  - "assignment"
  - "bill"
  - "operations"
  - "type"
  - "production"
  - "routing"
  - "group"
  - "characteristic"
tags:
  - PP
  - component:PP-VDM-MD-2CL
  - interface-view
  - lob:manufacturing
  - PP-VDM
  - PP-VDM-MD
  - PP-VDM-MD-2CL
---
# I_PRODNRTGINSPCHARCASSGMTDEX

**Prodn Rtg Insp Charcs Assignment**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCASSGMTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  |  | `CHAR(1)` | Task List Type |
| `ProductionRoutingGroup` | ✓ | |  |  | `CHAR(8)` | Key for Task List Group |
| `BOOCharacteristicType` | ✓ | |  |  | `CHAR(1)` | Characteristic Type |
| `ProductionRoutingOpIntID` | ✓ | |  |  | `NUMC(8)` | Number of the Task List Node |
| `BOOCharacteristic` | ✓ | |  |  | `NUMC(4)` | Inspection Characteristic Number |
| `BOOCharacteristicVersion` | ✓ | |  |  | `NUMC(8)` | Internal counter |
| `ValidityStartDate` |  | |  |  | `DATS(8)` | Valid-From Date |
| `ValidityEndDate` |  | |  |  | `DATS(8)` | Valid-to date |
| `ChangeNumber` |  | |  |  | `CHAR(12)` | Change Number |
| `IsDeleted` |  | |  |  | `CHAR(1)` | Deletion Indicator |
| `InspectionMethodPlant` |  | |  |  | `CHAR(4)` | Plant for Inspection Method |
| `InspectionMethod` |  | |  |  | `CHAR(8)` | Inspection Method |
| `InspectionMethodVersion` |  | |  |  | `CHAR(6)` | Version Number of Inspection Method |
| `InspSpecImportanceCode` |  | |  |  | `CHAR(2)` | Weighting of Characteristic |
| `InspectorQualification` |  | |  |  | `CHAR(5)` | Inspector Qualification |
| `BOOOperationPRTInternalID` |  | |  |  | `NUMC(8)` | Assigned Test Equipment |
| `InspectionSpecificationPlant` |  | |  |  | `CHAR(4)` | Plant for Master Inspection Characteristic |
| `InspectionSpecification` |  | |  |  | `CHAR(8)` | Master Inspection Characteristic |
| `InspectionSpecificationVersion` |  | |  |  | `CHAR(6)` | Version Number of Master Inspection Characteristic |
| `BOOCharcHasInspSpecReference` |  | |  |  | `CHAR(1)` | Reference to Master Insp. Characteristic in Task List |
| `InspSpecControlIndicators` |  | |  |  | `CHAR(30)` | Cntrl Indicator String for Insp. Char./Master Insp. Char. |
| `InspToleranceSpecification` |  | |  |  | `CHAR(4)` | Tolerance Key |
| `InspSpecDecimalPlaces` |  | |  |  | `INT1(3)` | Number of Places to the Right of a Decimal Point (Accuracy) |
| `InspectionSpecificationUnit` |  | |  |  | `UNIT(3)` | Unit of Measurement in Which Quantitative Data Is Stored |
| `InspSpecTargetValue` |  | |  |  | `FLTP(16)` | Target Value for a Quantitative Characteristic |
| `InspSpecHasTargetValue` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecUpperLimit` |  | |  |  | `FLTP(16)` | Upper Specification Limit |
| `InspSpecLowerLimit` |  | |  |  | `FLTP(16)` | Lower Specification Limit |
| `InspSpecHasUpperLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecHasLowerLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecUpperPlausibilityLimit` |  | |  |  | `FLTP(16)` | Upper Plausibility Limit |
| `InspSpecHasUprPlausibilityLmt` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecLowerPlausibilityLimit` |  | |  |  | `FLTP(16)` | Lower Plausibility Limit |
| `InspSpecHasLowrPlausibilityLmt` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecFirstUpperSpecLimit` |  | |  |  | `FLTP(16)` | First Upper Specification Limit |
| `InspSpecHasFirstUpperSpecLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecFirstLowerSpecLimit` |  | |  |  | `FLTP(16)` | First Lower Specification Limit |
| `InspSpecHasFirstLowerSpecLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecSecondUpperSpecLimit` |  | |  |  | `FLTP(16)` | Second Upper Specification Limit |
| `InspSpecHasSecondUprSpecLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecSecondLowerSpecLimit` |  | |  |  | `FLTP(16)` | Second Lower Specification Limit |
| `InspSpecHasSecondLowrSpecLimit` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecToleranceChgValidFrom` |  | |  |  | `DATS(8)` | Date from Which the Tolerance Change Is Valid |
| `InspSpecToleranceChgValidTo` |  | |  |  | `DATS(8)` | Date Until Which the Tolerance Change Is Valid |
| `InspSpecUpperSpecLimitChange` |  | |  |  | `FLTP(16)` | Change to Upper Specification Limit |
| `InspSpecHasUprSpecLimitChange` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecLowerSpecLimitChange` |  | |  |  | `FLTP(16)` | Change to Lower Specification Limit |
| `InspSpecHasLowrSpecLimitChange` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecNumberOfClasses` |  | |  |  | `INT1(3)` | Number of Value Classes for Inspection Results |
| `InspSpecClassWidthQty` |  | |  |  | `FLTP(16)` | Class Width |
| `InspSpecHasClassWidth` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecClassMidpointQty` |  | |  |  | `FLTP(16)` | Class Midpoint |
| `InspSpecHasClassMidpoint` |  | |  |  | `CHAR(1)` | Value Not Initial If Set |
| `InspSpecHasFormula` |  | |  |  | `CHAR(1)` | Check and Calculate Formula in QM |
| `InspSpecFormula1` |  | |  |  | `CHAR(60)` | Formula Field |
| `InspSpecFormula2` |  | |  |  | `CHAR(60)` | Formula Field |
| `InspSpecDefectCodeGrpRejection` |  | |  |  | `CHAR(8)` | Defect Code Group for General Rejection |
| `InspSpecDefectCodeRejection` |  | |  |  | `CHAR(4)` | Defect Code for Rejection: General |
| `InspSpecDefectCodeGrpRjcnUpper` |  | |  |  | `CHAR(8)` | Defect Code Group for Rejection at Upper Tolerance |
| `InspSpecDefectCodeRjcnUpper` |  | |  |  | `CHAR(4)` | Defect Code for Rejection at Upper Specification Limit |
| `InspSpecDefectCodeGrpRjcnLower` |  | |  |  | `CHAR(8)` | Defect Code Group for Rejection at Lower Tolerance |
| `InspSpecDefectCodeRjcnLower` |  | |  |  | `CHAR(4)` | Defect Code for Rejection at Lower Specification Limit |
| `SelectedCodeSet` |  | |  |  | `CHAR(8)` | Assigned Code Group or Selected Set |
| `SelectedCodeSetPlant` |  | |  |  | `CHAR(4)` | Plant of the Assigned Selected Set |
| `InspSpecAdditionalCatalog2` |  | |  |  | `CHAR(1)` | Catalog Type of Assigned Code Group or Selected Set |
| `CatalogEntryIsSelectedSet2` |  | |  |  | `CHAR(1)` | Catalog Entry Is a Selected Set |
| `InspSpecAddlCodeGrpSeldSet2` |  | |  |  | `CHAR(8)` | Assigned Code Group or Selected Set |
| `InspSpecAddlSeldCodeSetPlant2` |  | |  |  | `CHAR(4)` | Plant of the Assigned Selected Set |
| `InspSpecAdditionalCatalog3` |  | |  |  | `CHAR(1)` | Catalog Type of Assigned Code Group or Selected Set |
| `CatalogEntryIsSelectedSet3` |  | |  |  | `CHAR(1)` | Catalog Entry Is a Selected Set |
| `InspSpecAddlCodeGrpSeldSet3` |  | |  |  | `CHAR(8)` | Assigned Code Group or Selected Set |
| `InspSpecAddlSeldCodeSetPlant3` |  | |  |  | `CHAR(4)` | Plant of the Assigned Selected Set |
| `InspSpecAdditionalCatalog4` |  | |  |  | `CHAR(1)` | Catalog Type of Assigned Code Group or Selected Set |
| `CatalogEntryIsSelectedSet4` |  | |  |  | `CHAR(1)` | Catalog Entry Is a Selected Set |
| `InspSpecAddlCodeGrpSeldSet4` |  | |  |  | `CHAR(8)` | Assigned Code Group or Selected Set |
| `InspSpecAddlSeldCodeSetPlant4` |  | |  |  | `CHAR(4)` | Plant of the Assigned Selected Set |
| `InspSpecAdditionalCatalog5` |  | |  |  | `CHAR(1)` | Catalog Type of Assigned Code Group or Selected Set |
| `CatalogEntryIsSelectedSet5` |  | |  |  | `CHAR(1)` | Catalog Entry Is a Selected Set |
| `InspSpecAddlCodeGrpSeldSet5` |  | |  |  | `CHAR(8)` | Assigned Code Group or Selected Set |
| `InspSpecAddlSeldCodeSetPlant5` |  | |  |  | `CHAR(4)` | Plant of the Assigned Selected Set |
| `SamplingProcedure` |  | |  |  | `CHAR(8)` | Sampling Procedure in Inspection Characteristic |
| `InspCharacteristicSampleUnit` |  | |  |  | `UNIT(3)` | Sample Unit of Measure |
| `BOOCharcSampleQuantity` |  | |  |  | `DEC(5)` | Sample Quantity Factor for Sample(Mult. Sample Unit of Msr.) |
| `InspSpecInformationField1` |  | |  |  | `CHAR(10)` | Text Line for Additional Information |
| `InspSpecInformationField2` |  | |  |  | `CHAR(20)` | Text Line for Additional Information |
| `InspSpecInformationField3` |  | |  |  | `CHAR(40)` | Text Line for Additional Information |
| `InspectionSpecificationText` |  | |  |  | `CHAR(40)` | Short Text for Inspection Characteristic |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | User Who Created Record |
| `CreationDate` |  | |  |  | `DATS(8)` | System Date on Which Data Record Was Created |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of User Who Last Changed Data Record |
| `LastChangeDate` |  | |  |  | `DATS(8)` | System Date on Which Data Record Was Changed |
| `InspLotDynamicCriteria` |  | |  |  | `CHAR(10)` | String for Dynamic Modification Criteria (Database Relevant) |
| `InspLotDynamicRule` |  | |  |  | `CHAR(3)` | Dynamic Modification Rule |
| `InspCharcDynModifRef` |  | |  |  | `NUMC(4)` | Characteristic (in Plan) whose Q-Level Will Be Copied |
| `QltyCtrlChartAggrgnCriterion` |  | |  |  | `CHAR(3)` | SPC Criterion |
| `InspSpecInputProcedure` |  | |  |  | `CHAR(3)` | Parameters for Input Processing in QM Results Recording |
| `BOOCharcGroup` |  | |  |  | `CHAR(10)` | Characteristic Group |
| `BOOCharcSourceCharc` |  | |  |  | `NUMC(4)` | Source Characteristic of Characteristic Group Division |
| `BOOCharcGroupDivision` |  | |  |  | `NUMC(4)` | Internal Division ID |
| `BillOfOperationsVersion` |  | |  |  | `CHAR(4)` | Routing Version |
| `_ProductionRouting` | | ✓ | | | | |
| `_BillOfOperationsGroup` | | ✓ | | | | |
| `_BillOfOperationsType` | | ✓ | | | | |
| `_BOOCharacteristic` | | ✓ | | | | |
| `_BOOOperationInternalID` | | ✓ | | | | |
| `_ProdnRtgCharacteristicType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionRouting` | `I_ProductionRoutingDEX` | [1..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCASSGMTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODNRTGINSPCHARCASSGMTDEX')/$value)*

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BOOCharacteristicVersion'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
@Analytics: {
dataCategory: #DIMENSION,
    dataExtraction: {
       enabled: true,
       delta.changeDataCapture: {
          mapping: [
          {
          table: 'PLMK',
          role: #MAIN,
          viewElement: [ 'BillOfOperationsType','ProductionRoutingGroup','BOOCharacteristicType','ProductionRoutingOpIntID','BOOCharacteristic','BOOCharacteristicVersion' ],
          tableElement: [ 'PLNTY','PLNNR','KZEINSTELL','PLNKN','MERKNR','ZAEHL' ],
          filter: [{ operator: #EQ,tableElement: 'kzeinstell',value: ' '  }]
          }
          ]
       }
     },
internalName: #LOCAL
}
@ObjectModel.sapObjectNodeType.name: 'ProductionRtgInspCharcsAssgmt'
@Metadata.allowExtensions: true
@ObjectModel.supportedCapabilities:[#CDS_MODELING_ASSOCIATION_TARGET,#ANALYTICAL_DIMENSION,#EXTRACTION_DATA_SOURCE]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@EndUserText.label: 'Prodn Rtg Insp Charcs Assignment'

define view entity I_ProdnRtgInspCharcAssgmtDEX
  as select from P_ProdnRtgInspCharcsAssgmtDEX

  association [1..*] to I_ProductionRoutingDEX       as _ProductionRouting      on  $projection.BillOfOperationsType   = _ProductionRouting.BillOfOperationsType
                                                                                and $projection.ProductionRoutingGroup = _ProductionRouting.ProductionRoutingGroup

//  association [1..*] to I_ProductionRoutingHeaderDEX as _ProdnRtgHeader         on  $projection.BillOfOperationsType   =  _ProdnRtgHeader.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup =  _ProdnRtgHeader.ProductionRoutingGroup
//                                                                                and $projection.ValidityEndDate        >= _ProdnRtgHeader.ValidityStartDate
//
//  association [1..*] to I_ProdnRoutingOpSubordOpDEX  as _ProdnRoutingOpSubordOp on  $projection.BillOfOperationsType     =  _ProdnRoutingOpSubordOp.BillOfOperationsType
//                                                                                and $projection.ProductionRoutingGroup   =  _ProdnRoutingOpSubordOp.ProductionRoutingGroup
//                                                                                and $projection.ProductionRoutingOpIntID =  _ProdnRoutingOpSubordOp.ProductionRoutingOpIntID
//                                                                                and $projection.ValidityEndDate          >= _ProdnRoutingOpSubordOp.ValidityStartDate
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate
//                                                                                and $projection.ValidityStartDate        <= _ProdnRoutingOpSubordOp.ValidityEndDate
{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
  key ProductionRoutingGroup,
      @ObjectModel.foreignKey.association: '_ProdnRtgCharacteristicType'
  key BOOCharacteristicType,
      @ObjectModel.foreignKey.association: '_BOOOperationInternalID'
  key ProductionRoutingOpIntID,
      @ObjectModel.foreignKey.association: '_BOOCharacteristic'
  key BOOCharacteristic,
  key BOOCharacteristicVersion,
      ValidityStartDate,
      ValidityEndDate,
      // --------------------------------------------------------------------------------------------------------
      // General Data
      // --------------------------------------------------------------------------------------------------------
      ChangeNumber,
      IsDeleted,

      // Reference to inspection method (table QMTB)
      InspectionMethodPlant,
      InspectionMethod,
      InspectionMethodVersion,
      InspSpecImportanceCode,
      InspectorQualification,
      // Assigned Test Equipment (Item counter for production resources/tools)
      BOOOperationPRTInternalID,

      // --------------------------------------------------------------------------------------------------------
      //    Reference to Inspection Specification Version (Inspection Characteristic Master, table QPMK)
      // --------------------------------------------------------------------------------------------------------
      InspectionSpecificationPlant,
      InspectionSpecification,
      InspectionSpecificationVersion,
      @Semantics.booleanIndicator: true
      BOOCharcHasInspSpecReference,

      // --------------------------------------------------------------------------------------------------------
      // Control indicators
      // --------------------------------------------------------------------------------------------------------
      // STEUERKZ is a string consisting of several flags (characters of length 1) each having an own
      // semantic (Control indicator, see DDIC structure QMKST) which have to are mapped to one single field each
      InspSpecControlIndicators, // Publish structure as a whole


      // --------------------------------------------------------------------------------------------------------
      // Quantitative Data/ Tolerances
      // --------------------------------------------------------------------------------------------------------
      InspToleranceSpecification,
      InspSpecDecimalPlaces,
      InspectionSpecificationUnit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecTargetValue,
      @Semantics.booleanIndicator: true
      InspSpecHasTargetValue,

      // Tolerance
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecUpperLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecLowerLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasUpperLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasLowerLimit,

      // Plausibility
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecUpperPlausibilityLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasUprPlausibilityLmt,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecLowerPlausibilityLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasLowrPlausibilityLmt,

      // Additional Pairs of Limits
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecFirstUpperSpecLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasFirstUpperSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecFirstLowerSpecLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasFirstLowerSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecSecondUpperSpecLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasSecondUprSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecSecondLowerSpecLimit,
      @Semantics.booleanIndicator: true
      InspSpecHasSecondLowrSpecLimit,

      // Tolerance Change
      // Validity
      InspSpecToleranceChgValidFrom,
      InspSpecToleranceChgValidTo,

      // Spec. Limits
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecUpperSpecLimitChange,
      @Semantics.booleanIndicator: true
      InspSpecHasUprSpecLimitChange,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecLowerSpecLimitChange,
      @Semantics.booleanIndicator: true
      InspSpecHasLowrSpecLimitChange,

      // Classed Recording
      InspSpecNumberOfClasses,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecClassWidthQty,
      @Semantics.booleanIndicator: true
      InspSpecHasClassWidth,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      InspSpecClassMidpointQty,
      @Semantics.booleanIndicator: true
      InspSpecHasClassMidpoint,
      @Semantics.booleanIndicator: true
      InspSpecHasFormula,
      InspSpecFormula1, // formula (if control indicator calculated characteristic is set)
      InspSpecFormula2, // formula (if control indicator calculated characteristic is set)

      // --------------------------------------------------------------------------------------------------------
      //  Cataloges
      // --------------------------------------------------------------------------------------------------------
      InspSpecDefectCodeGrpRejection,
      InspSpecDefectCodeRejection,
      InspSpecDefectCodeGrpRjcnUpper,
      InspSpecDefectCodeRjcnUpper,
      InspSpecDefectCodeGrpRjcnLower,
      InspSpecDefectCodeRjcnLower,
      SelectedCodeSet,
      SelectedCodeSetPlant,
      InspSpecAdditionalCatalog2,
      @Semantics.booleanIndicator: true
      CatalogEntryIsSelectedSet2,
      InspSpecAddlCodeGrpSeldSet2,
      InspSpecAddlSeldCodeSetPlant2,

      InspSpecAdditionalCatalog3,
      @Semantics.booleanIndicator: true
      CatalogEntryIsSelectedSet3,
      InspSpecAddlCodeGrpSeldSet3,
      InspSpecAddlSeldCodeSetPlant3,

      InspSpecAdditionalCatalog4,
      @Semantics.booleanIndicator: true
      CatalogEntryIsSelectedSet4,
      InspSpecAddlCodeGrpSeldSet4,
      InspSpecAddlSeldCodeSetPlant4,

      InspSpecAdditionalCatalog5,
      @Semantics.booleanIndicator: true
      CatalogEntryIsSelectedSet5,
      InspSpecAddlCodeGrpSeldSet5,
      InspSpecAddlSeldCodeSetPlant5,

      // --------------------------------------------------------------------------------------------------------
      // Sample Data
      // --------------------------------------------------------------------------------------------------------
      SamplingProcedure,
      InspCharacteristicSampleUnit,
      @Semantics.quantity.unitOfMeasure: 'InspCharacteristicSampleUnit'
      BOOCharcSampleQuantity,

      // --------------------------------------------------------------------------------------------------------
      // Additional Data
      // --------------------------------------------------------------------------------------------------------
      InspSpecInformationField1,
      InspSpecInformationField2,
      InspSpecInformationField3,

      // --------------------------------------------------------------------------------------------------------
      // Texts
      // --------------------------------------------------------------------------------------------------------
      InspectionSpecificationText,

      // --------------------------------------------------------------------------------------------------------
      // Administrative Data
      // --------------------------------------------------------------------------------------------------------
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,
      InspLotDynamicCriteria,
      InspLotDynamicRule,
      InspCharcDynModifRef,
      QltyCtrlChartAggrgnCriterion,
      InspSpecInputProcedure,
      BOOCharcGroup,
      BOOCharcSourceCharc,
      BOOCharcGroupDivision,
      BillOfOperationsVersion,
      /* Associations */
      _BillOfOperationsGroup,
      _BillOfOperationsType,
      _BOOCharacteristic,
      _BOOOperationInternalID,
      _ProdnRtgCharacteristicType,
      _ProductionRouting
//      _ProdnRtgHeader,
//      _ProdnRoutingOpSubordOp
}
```
