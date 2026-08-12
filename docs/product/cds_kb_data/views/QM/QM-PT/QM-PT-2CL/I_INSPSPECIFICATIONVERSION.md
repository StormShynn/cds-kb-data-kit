---
name: I_INSPSPECIFICATIONVERSION
description: "Inspspecificationversion"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPSPECIFICATIONVERSION

**Inspspecificationversion**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionSpecificationPlant` | ✓ | |  | `zaehler` |  |  |
| `InspectionSpecification` | ✓ | |  | `cast( qpmk.mkmnr as vdm_qmerknr preserving type )` |  |  |
| `InspectionSpecificationVersion` | ✓ | |  | `version` |  |  |
| `Plant` |  | |  | `werks` |  |  |
| `ValidityStartDate` |  | |  | `gueltigab` |  |  |
| `InspectionSpecificationSrchTxt` |  | |  | `sortfeld` |  |  |
| `InspSpecGlobalName` |  | |  | `cast( qpmk.charact_id1 as vdm_qcharact_id1 preserving type )` |  |  |
| `InspectionSpecificationStatus` |  | |  | `loekz` |  |  |
| `InspSpecTransferType` |  | |  | `cast( qpmk.konsistent as vdm_qvollst preserving type )` |  |  |
| `InspSpecCreatedByUser` |  | |  | `autor` |  |  |
| `InspSpecCreationDate` |  | |  | `dates` |  |  |
| `InspSpecChangedByUser` |  | |  | `aeaut` |  |  |
| `InspSpecChangeDate` |  | |  | `datae` |  |  |
| `ChangedDateTime` |  | |  | `case qpmk.changeddatetime when 0 then cast( '19000101010101' as tzntstmps ) else qpmk.changeddatetime end` |  |  |
| `InspSpecControlIndicators` |  | |  | `steuerkz` |  |  |
| `InspSpecIsQuantitative` |  | |  | `cast( substring(qpmk.steuerkz,1,1) as vdm_qkzqunmk preserving type )` |  |  |
| `InspSpecCharacteristicType` |  | |  | `case substring(qpmk.steuerkz,1,1) when 'X' then cast ( '1' as vdm_qchar_type_basic ) else cast ( '2' as vdm_qchar_type_basic ) end` |  |  |
| `InspSpecIsMeasuredValueRqd` |  | |  | `cast( substring(qpmk.steuerkz,2,1) as qkzqumk preserving type )` |  |  |
| `InspSpecIsSelectedSetRequired` |  | |  | `cast( substring(qpmk.steuerkz,3,1) as qkzpkat preserving type )` |  |  |
| `InspSpecIsUpperLimitRequired` |  | |  | `cast( substring(qpmk.steuerkz,4,1) as qkztolob preserving type )` |  |  |
| `InspSpecIsLowerLimitRequired` |  | |  | `cast( substring(qpmk.steuerkz,5,1) as qkztolun preserving type )` |  |  |
| `InspSpecIsTargetValueInLimit` |  | |  | `cast( substring(qpmk.steuerkz,6,1) as qkzsollpr preserving type )` |  |  |
| `InspectionScope` |  | |  | `cast( substring(qpmk.steuerkz,7,1) as qpumfkz preserving type )` |  |  |
| `InspSpecIsLongTermInspection` |  | |  | `cast( substring(qpmk.steuerkz,8,1) as qlzeitkz preserving type )` |  |  |
| `InspSpecRecordingType` |  | |  | `cast( substring(qpmk.steuerkz,9,1) as qestukz preserving type )` |  |  |
| `InspResultIsDocumentationRqd` |  | |  | `cast( substring(qpmk.steuerkz,10,1) as vdm_qdokukz preserving type )` |  |  |
| `InspSpecCharcCategory` |  | |  | `cast( substring(qpmk.steuerkz,11,1) as vdm_qrzwang preserving type )` |  |  |
| `InspSpecIsSampleQtyAdditive` |  | |  | `cast( substring(qpmk.steuerkz,13,1) as qaddpro preserving type )` |  |  |
| `InspSpecIsDestructive` |  | |  | `cast( substring(qpmk.steuerkz,14,1) as qkzdestroy preserving type )` |  |  |
| `InspSpecResultCalculation` |  | |  | `cast( substring(qpmk.steuerkz,15,1) as vdm_qkzformel preserving type )` |  |  |
| `InspSpecIsSamplingProcedRqd` |  | |  | `cast( substring(qpmk.steuerkz,16,1) as qstichpr preserving type )` |  |  |
| `InspSpecIsScrapRelevant` |  | |  | `cast( substring(qpmk.steuerkz,17,1) as qausslos preserving type )` |  |  |
| `InspSpecHasFixedCtrlIndicators` |  | |  | `cast( substring(qpmk.steuerkz,18,1) as qnaendkz preserving type )` |  |  |
| `InspSpecIsDefectRecordingRqd` |  | |  | `cast( substring(qpmk.steuerkz,19,1) as qbfhlzhl preserving type )` |  |  |
| `InspSpecIsTestEquipmentRqd` |  | |  | `cast( substring(qpmk.steuerkz,22,1) as qpmzwang preserving type )` |  |  |
| `InspSpecIsDefectsRecgAutomatic` |  | |  | `cast( substring(qpmk.steuerkz,23,1) as qfehlrec preserving type )` |  |  |
| `InspSpecIsChgDocRequired` |  | |  | `cast( substring(qpmk.steuerkz,24,1) as qkzaenbel preserving type )` |  |  |
| `InspSpecIsControlChartUsed` |  | |  | `cast( substring(qpmk.steuerkz,25,1) as qspcmk preserving type )` |  |  |
| `InspSpecPrintControl` |  | |  | `cast( substring(qpmk.steuerkz,26,1) as vdm_qdruck1 preserving type )` |  |  |
| `InspSpecImportanceCode` |  | |  | `cast( qpmk.merkgew as vdm_qmerkgew preserving type )` |  |  |
| `InspectorQualification` |  | |  | `prfql` |  |  |
| `InspSpecInformationField1` |  | |  | `dummy10` |  |  |
| `InspSpecInformationField2` |  | |  | `dummy20` |  |  |
| `InspSpecInformationField3` |  | |  | `dummy40` |  |  |
| `QltyMstrDataAuthorizationGroup` |  | |  | `qauth` |  |  |
| `InspToleranceSpecification` |  | |  | `toleranzsl` |  |  |
| `InspSpecDecimalPlaces` |  | |  | `stellen` |  |  |
| `InspectionSpecificationUnit` |  | |  | `masseinhsw` |  |  |
| `InspSpecTargetValue` |  | |  | `sollwert` |  |  |
| `InspSpecHasTargetValue` |  | |  | `sollwni` |  |  |
| `InspSpecUpperLimit` |  | |  | `toleranzob` |  |  |
| `InspSpecHasUpperLimit` |  | |  | `tolobni` |  |  |
| `InspSpecLowerLimit` |  | |  | `toleranzun` |  |  |
| `InspSpecHasLowerLimit` |  | |  | `tolunni` |  |  |
| `InspSpecFirstUpperSpecLimit` |  | |  | `grenzeob1` |  |  |
| `InspSpecHasFirstUpperSpecLimit` |  | |  | `grenzob1ni` |  |  |
| `InspSpecFirstLowerSpecLimit` |  | |  | `grenzeun1` |  |  |
| `InspSpecHasFirstLowerSpecLimit` |  | |  | `grenzun1ni` |  |  |
| `InspSpecSecondUpperSpecLimit` |  | |  | `grenzeob2` |  |  |
| `InspSpecHasSecondUprSpecLimit` |  | |  | `grenzob2ni` |  |  |
| `InspSpecSecondLowerSpecLimit` |  | |  | `grenzeun2` |  |  |
| `InspSpecHasSecondLowrSpecLimit` |  | |  | `grenzun2ni` |  |  |
| `InspSpecUpperPlausibilityLimit` |  | |  | `plausioben` |  |  |
| `InspSpecHasUprPlausibilityLmt` |  | |  | `plausiobni` |  |  |
| `InspSpecLowerPlausibilityLimit` |  | |  | `plausiunte` |  |  |
| `InspSpecHasLowrPlausibilityLmt` |  | |  | `plausiunni` |  |  |
| `InspSpecUpperSpecLimitChange` |  | |  | `cast( qpmk.tolerweiob as vdm_qtolwob preserving type )` |  |  |
| `InspSpecHasUprSpecLimitChange` |  | |  | `tolwobni` |  |  |
| `InspSpecLowerSpecLimitChange` |  | |  | `cast( qpmk.tolerweiun as vdm_qtolwun preserving type )` |  |  |
| `InspSpecHasLowrSpecLimitChange` |  | |  | `tolwunni` |  |  |
| `InspSpecToleranceChgValidFrom` |  | |  | `cast( qpmk.tolerwab as vdm_qtolwab preserving type )` |  |  |
| `InspSpecToleranceChgValidTo` |  | |  | `cast( qpmk.tolerwbis as vdm_qtolwbis preserving type )` |  |  |
| `InspSpecDefectCodeGrpRjcnLower` |  | |  | `codegr9u` |  |  |
| `InspSpecDefectCodeRjcnLower` |  | |  | `code9u` |  |  |
| `InspSpecDefectCodeGrpRjcnUpper` |  | |  | `codegr9o` |  |  |
| `InspSpecDefectCodeRjcnUpper` |  | |  | `code9o` |  |  |
| `CharcInternalID` |  | |  | `cast( qpmk.atinn as atinn_no_conv preserving type )` |  |  |
| `DefectFractionEstimationProced` |  | |  | `cast( qpmk.eeantverf as vdm_qeantverf preserving type )` |  |  |
| `InspSpecDefectCodeGrpRejection` |  | |  | `codegrqual` |  |  |
| `InspSpecDefectCodeRejection` |  | |  | `codequal` |  |  |
| `InspSpecInputProcedure` |  | |  | `inpproc` |  |  |
| `InspSpecDeterminationRule` |  | |  | `spec_det_rule` |  |  |
| `InspSpecIsDetnRuleActive` |  | |  | `spec_det_active` |  |  |
| `_InspectionSpecification` | | ✓ | | | | |
| `_InspSpecificationPlant` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_InspectionMethod` | | ✓ | | | | |
| `_InspSpecStatus` | | ✓ | | | | |
| `_InspSpecStatusText` | | ✓ | | | | |
| `_InspSpecCreatedByUser` | | ✓ | | | | |
| `_InspSpecChangedByUser` | | ✓ | | | | |
| `_CreatedByUserContactCard` | | ✓ | | | | |
| `_ChangedByUserContactCard` | | ✓ | | | | |
| `_InspToleranceSpec` | | ✓ | | | | |
| `_InspToleranceSpecText` | | ✓ | | | | |
| `_InspSpecTransferType` | | ✓ | | | | |
| `_InspSpecTransferTypeText` | | ✓ | | | | |
| `_InspSpecCharcType` | | ✓ | | | | |
| `_InspSpecCharcTypeText` | | ✓ | | | | |
| `_InspectionScope` | | ✓ | | | | |
| `_InspectionScopeText` | | ✓ | | | | |
| `_InspSpecRecordingType` | | ✓ | | | | |
| `_InspSpecRecordingTypeText` | | ✓ | | | | |
| `_InspResultDocuRequired` | | ✓ | | | | |
| `_InspResultDocuRequiredText` | | ✓ | | | | |
| `_InspectorQualification` | | ✓ | | | | |
| `_InspectorQualificationText` | | ✓ | | | | |
| `_QltyMstrDataAuthznGrp` | | ✓ | | | | |
| `_QltyMstrDataAuthznGrpTxt` | | ✓ | | | | |
| `_InspSpecCharcCategory` | | ✓ | | | | |
| `_InspSpecCharcCategoryText` | | ✓ | | | | |
| `_InspSpecRsltCalculation` | | ✓ | | | | |
| `_InspSpecRsltCalculationText` | | ✓ | | | | |
| `_InspSpecPrintControl` | | ✓ | | | | |
| `_InspSpecPrintControlText` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_InspDefectCodeGrpRejection` | | ✓ | | | | |
| `_InspDefectCodeRejection` | | ✓ | | | | |
| `_InspDefectCodeGrpRjcnLower` | | ✓ | | | | |
| `_InspDefectCodeRjcnLower` | | ✓ | | | | |
| `_InspDefectCodeGrpRjcnUpper` | | ✓ | | | | |
| `_InspDefectCodeRjcnUpper` | | ✓ | | | | |
| `_InspSpecImportanceCode` | | ✓ | | | | |
| `_InspSpecImportanceCodeText` | | ✓ | | | | |
| `_DefectFractionEstnProced` | | ✓ | | | | |
| `_DefectFractionEstnProcedTxt` | | ✓ | | | | |
| `_ClfnCharacteristicForKeyDate` | | ✓ | | | | |
| `_ClfnCharcDescForKeyDate` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InspectionSpecification` | `I_InspectionSpecification` | [1..1] |
| `_InspSpecificationPlant` | `I_Plant` | [0..1] |
| `_Plant` | `I_Plant` | [0..1] |
| `_Text` | `I_InspSpecificationVersionText` | [0..*] |
| `_InspectionMethod` | `I_AssgmtInspMethInspSpec` | [0..*] |
| `_InspSpecStatus` | `I_InspectionMstrDataStatus` | [0..1] |
| `_InspSpecStatusText` | `I_InspectionMstrDataStatusText` | [0..*] |
| `_InspSpecCreatedByUser` | `I_User` | [0..1] |
| `_InspSpecChangedByUser` | `I_User` | [0..1] |
| `_CreatedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_ChangedByUserContactCard` | `I_UserContactCard` | [0..1] |
| `_InspToleranceSpec` | `I_InspToleranceSpecification` | [0..1] |
| `_InspToleranceSpecText` | `I_InspToleranceSpecText` | [0..*] |
| `_InspSpecTransferType` | `I_InspSpecTransferType` | [0..1] |
| `_InspSpecTransferTypeText` | `I_InspSpecTransferTypeText` | [0..*] |
| `_InspSpecCharcType` | `I_InspSpecCharcType` | [1..1] |
| `_InspSpecCharcTypeText` | `I_InspSpecCharcTypeText` | [0..*] |
| `_InspectionScope` | `I_InspectionScope` | [0..1] |
| `_InspectionScopeText` | `I_InspectionScopeText` | [0..*] |
| `_InspSpecRecordingType` | `I_InspSpecRecordingType` | [0..1] |
| `_InspSpecRecordingTypeText` | `I_InspSpecRecordingTypeText` | [0..*] |
| `_InspResultDocuRequired` | `I_InspResultDocuRequired` | [0..1] |
| `_InspResultDocuRequiredText` | `I_InspResultDocuRequiredText` | [0..*] |
| `_InspectorQualification` | `I_InspectorQualification` | [0..1] |
| `_InspectorQualificationText` | `I_InspectorQualificationText` | [0..*] |
| `_QltyMstrDataAuthznGrp` | `I_QltyMstrDataAuthorizationGrp` | [0..1] |
| `_QltyMstrDataAuthznGrpTxt` | `I_QltyMstrDataAuthznGroupTxt` | [0..*] |
| `_InspSpecCharcCategory` | `I_Inspspeccharccategory` | [0..1] |
| `_InspSpecCharcCategoryText` | `I_InspSpecCharcCategoryText` | [0..*] |
| `_InspSpecRsltCalculation` | `I_InspSpecRsltCalculation` | [0..1] |
| `_InspSpecRsltCalculationText` | `I_InspSpecRsltCalculationText` | [0..*] |
| `_InspSpecPrintControl` | `I_InspSpecPrintControl` | [0..1] |
| `_InspSpecPrintControlText` | `I_InspSpecPrintControlText` | [0..*] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_InspDefectCodeGrpRejection` | `I_DefectCodeGroup` | [0..1] |
| `_InspDefectCodeRejection` | `I_DefectCode` | [0..1] |
| `_InspDefectCodeGrpRjcnLower` | `I_DefectCodeGroup` | [0..1] |
| `_InspDefectCodeRjcnLower` | `I_DefectCode` | [0..1] |
| `_InspDefectCodeGrpRjcnUpper` | `I_DefectCodeGroup` | [0..1] |
| `_InspDefectCodeRjcnUpper` | `I_DefectCode` | [0..1] |
| `_InspSpecImportanceCode` | `I_InspSpecImportanceCode` | [0..1] |
| `_InspSpecImportanceCodeText` | `I_Inspspecimportancecodetext` | [0..*] |
| `_DefectFractionEstnProced` | `I_DefectFractionEstnProced` | [0..1] |
| `_DefectFractionEstnProcedTxt` | `I_DefectFractionEstnProcedTxt` | [0..*] |
| `_ClfnCharacteristicForKeyDate` | `I_ClfnCharacteristicForKeyDate` | [0..1] |
| `_ClfnCharcDescForKeyDate` | `I_ClfnCharcDescForKeyDate` | [0..*] |
| `_Extension` | `E_InspSpecificationVersion` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPSPECVERS'
@AbapCatalog.compiler.compareFilter:true
@AbapCatalog.preserveKey: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Version of Master Insp Characteristic'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.authorizationCheck: #CHECK
@AccessControl.privilegedAssociations: ['_INSPSPECCREATEDBYUSER','_CHANGEDBYUSERCONTACTCARD','_INSPECTIONSPECIFICATION','_CREATEDBYUSERCONTACTCARD','_INSPSPECCHANGEDBYUSER']
@Search.searchable: true
@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #SEARCHABLE_ENTITY ]
@ObjectModel: {
    usageType: {
        dataClass: #MASTER,
        sizeCategory: #M, //expected number of rows < 100.000
        serviceQuality: #C // includes A,B as well
    },representativeKey: 'InspectionSpecificationVersion'
}
@Metadata.ignorePropagatedAnnotations: true

define view I_InspSpecificationVersion
  as select from qpmk

  association [1..1] to I_InspectionSpecification      as _InspectionSpecification      on  $projection.InspectionSpecificationPlant = _InspectionSpecification.InspectionSpecificationPlant
                                                                                        and $projection.InspectionSpecification      = _InspectionSpecification.InspectionSpecification

  association [0..1] to I_Plant                        as _InspSpecificationPlant       on  $projection.InspectionSpecificationPlant = _InspSpecificationPlant.Plant

  association [0..1] to I_Plant                        as _Plant                        on  $projection.Plant = _Plant.Plant

  association [0..*] to I_InspSpecificationVersionText as _Text                         on  $projection.InspectionSpecificationPlant   = _Text.InspectionSpecificationPlant
                                                                                        and $projection.InspectionSpecification        = _Text.InspectionSpecification
                                                                                        and $projection.InspectionSpecificationVersion = _Text.InspectionSpecificationVersion

  association [0..*] to I_AssgmtInspMethInspSpec       as _InspectionMethod             on  $projection.InspectionSpecificationPlant   = _InspectionMethod.InspectionSpecificationPlant
                                                                                        and $projection.InspectionSpecification        = _InspectionMethod.InspectionSpecification
                                                                                        and $projection.InspectionSpecificationVersion = _InspectionMethod.InspectionSpecificationVersion

  association [0..1] to I_InspectionMstrDataStatus     as _InspSpecStatus               on  $projection.InspectionSpecificationStatus = _InspSpecStatus.InspectionMasterDataStatus

  association [0..*] to I_InspectionMstrDataStatusText as _InspSpecStatusText           on  $projection.InspectionSpecificationStatus = _InspSpecStatusText.InspectionMasterDataStatus

  association [0..1] to I_User                         as _InspSpecCreatedByUser        on  $projection.InspSpecCreatedByUser = _InspSpecCreatedByUser.UserID

  association [0..1] to I_User                         as _InspSpecChangedByUser        on  $projection.InspSpecChangedByUser = _InspSpecChangedByUser.UserID

  association [0..1] to I_UserContactCard              as _CreatedByUserContactCard     on  $projection.InspSpecCreatedByUser = _CreatedByUserContactCard.ContactCardID

  association [0..1] to I_UserContactCard              as _ChangedByUserContactCard     on  $projection.InspSpecChangedByUser = _ChangedByUserContactCard.ContactCardID

  association [0..1] to I_InspToleranceSpecification   as _InspToleranceSpec            on  $projection.InspToleranceSpecification = _InspToleranceSpec.InspToleranceSpecification

  association [0..*] to I_InspToleranceSpecText        as _InspToleranceSpecText        on  $projection.InspToleranceSpecification = _InspToleranceSpecText.InspToleranceSpecification

  association [0..1] to I_InspSpecTransferType         as _InspSpecTransferType         on  $projection.InspSpecTransferType = _InspSpecTransferType.InspSpecTransferType

  association [0..*] to I_InspSpecTransferTypeText     as _InspSpecTransferTypeText     on  $projection.InspSpecTransferType = _InspSpecTransferTypeText.InspSpecTransferType

  association [1..1] to I_InspSpecCharcType            as _InspSpecCharcType            on  $projection.InspSpecCharacteristicType = _InspSpecCharcType.InspSpecCharacteristicType

  association [0..*] to I_InspSpecCharcTypeText        as _InspSpecCharcTypeText        on  $projection.InspSpecCharacteristicType = _InspSpecCharcTypeText.InspSpecCharacteristicType

  association [0..1] to I_InspectionScope              as _InspectionScope              on  $projection.InspectionScope = _InspectionScope.InspectionScope

  association [0..*] to I_InspectionScopeText          as _InspectionScopeText          on  $projection.InspectionScope = _InspectionScopeText.InspectionScope

  association [0..1] to I_InspSpecRecordingType        as _InspSpecRecordingType        on  $projection.InspSpecRecordingType = _InspSpecRecordingType.InspSpecRecordingType

  association [0..*] to I_InspSpecRecordingTypeText    as _InspSpecRecordingTypeText    on  $projection.InspSpecRecordingType = _InspSpecRecordingTypeText.InspSpecRecordingType

  association [0..1] to I_InspResultDocuRequired       as _InspResultDocuRequired       on  $projection.InspResultIsDocumentationRqd = _InspResultDocuRequired.InspResultIsDocumentationRqd

  association [0..*] to I_InspResultDocuRequiredText   as _InspResultDocuRequiredText   on  $projection.InspResultIsDocumentationRqd = _InspResultDocuRequiredText.InspResultIsDocumentationRqd

  association [0..1] to I_InspectorQualification       as _InspectorQualification       on  $projection.InspectorQualification = _InspectorQualification.InspectorQualification

  association [0..*] to I_InspectorQualificationText   as _InspectorQualificationText   on  $projection.InspectorQualification = _InspectorQualificationText.InspectorQualification

  association [0..1] to I_QltyMstrDataAuthorizationGrp as _QltyMstrDataAuthznGrp        on  $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthznGrp.QltyMstrDataAuthorizationGroup

  association [0..*] to I_QltyMstrDataAuthznGroupTxt   as _QltyMstrDataAuthznGrpTxt     on  $projection.QltyMstrDataAuthorizationGroup = _QltyMstrDataAuthznGrpTxt.QltyMstrDataAuthorizationGroup

  association [0..1] to I_Inspspeccharccategory        as _InspSpecCharcCategory        on  $projection.InspSpecCharcCategory = _InspSpecCharcCategory.InspSpecCharcCategory

  association [0..*] to I_InspSpecCharcCategoryText    as _InspSpecCharcCategoryText    on  $projection.InspSpecCharcCategory = _InspSpecCharcCategoryText.InspSpecCharcCategory

  association [0..1] to I_InspSpecRsltCalculation      as _InspSpecRsltCalculation      on  $projection.InspSpecResultCalculation = _InspSpecRsltCalculation.InspSpecResultCalculation

  association [0..*] to I_InspSpecRsltCalculationText  as _InspSpecRsltCalculationText  on  $projection.InspSpecResultCalculation = _InspSpecRsltCalculationText.InspSpecResultCalculation

  association [0..1] to I_InspSpecPrintControl         as _InspSpecPrintControl         on  $projection.InspSpecPrintControl = _InspSpecPrintControl.InspSpecPrintControl

  association [0..*] to I_InspSpecPrintControlText     as _InspSpecPrintControlText     on  $projection.InspSpecPrintControl = _InspSpecPrintControlText.InspSpecPrintControl

  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.InspectionSpecificationUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_DefectCodeGroup              as _InspDefectCodeGrpRejection   on  _InspDefectCodeGrpRejection.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRejection

  association [0..1] to I_DefectCode                   as _InspDefectCodeRejection      on  _InspDefectCodeRejection.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRejection
                                                                                        and _InspDefectCodeRejection.DefectCode      = $projection.InspSpecDefectCodeRejection

  association [0..1] to I_DefectCodeGroup              as _InspDefectCodeGrpRjcnLower   on  _InspDefectCodeGrpRjcnLower.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRjcnLower

  association [0..1] to I_DefectCode                   as _InspDefectCodeRjcnLower      on  _InspDefectCodeRjcnLower.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRjcnLower
                                                                                        and _InspDefectCodeRjcnLower.DefectCode      = $projection.InspSpecDefectCodeRjcnLower

  association [0..1] to I_DefectCodeGroup              as _InspDefectCodeGrpRjcnUpper   on  _InspDefectCodeGrpRjcnUpper.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRjcnUpper

  association [0..1] to I_DefectCode                   as _InspDefectCodeRjcnUpper      on  _InspDefectCodeRjcnUpper.DefectCodeGroup = $projection.InspSpecDefectCodeGrpRjcnUpper
                                                                                        and _InspDefectCodeRjcnUpper.DefectCode      = $projection.InspSpecDefectCodeRjcnUpper

  //  association [0..1] to I_InspSpecDeterminationRule    as _InspSpecDeterminationRule    on  $projection.InspSpecDeterminationRule = _InspSpecDeterminationRule.InspSpecDeterminationRule

  //  association [0..*] to I_InspSpecDeterminationRuleTxt as _InspSpecDeterminationRuleTxt on  $projection.InspSpecDeterminationRule = _InspSpecDeterminationRuleTxt.InspSpecDeterminationRule

  association [0..1] to I_InspSpecImportanceCode       as _InspSpecImportanceCode       on  $projection.InspSpecImportanceCode = _InspSpecImportanceCode.InspSpecImportanceCode

  association [0..*] to I_Inspspecimportancecodetext   as _InspSpecImportanceCodeText   on  $projection.InspSpecImportanceCode = _InspSpecImportanceCodeText.InspSpecImportanceCode

  association [0..1] to I_DefectFractionEstnProced     as _DefectFractionEstnProced     on  $projection.DefectFractionEstimationProced = _DefectFractionEstnProced.DefectFractionEstimationProced

  association [0..*] to I_DefectFractionEstnProcedTxt  as _DefectFractionEstnProcedTxt  on  $projection.DefectFractionEstimationProced = _DefectFractionEstnProcedTxt.DefectFractionEstimationProced

  /* Classification Characteristic */
  association [0..1] to I_ClfnCharacteristicForKeyDate as _ClfnCharacteristicForKeyDate on  $projection.CharcInternalID = _ClfnCharacteristicForKeyDate.CharcInternalID
  association [0..*] to I_ClfnCharcDescForKeyDate      as _ClfnCharcDescForKeyDate      on  $projection.CharcInternalID = _ClfnCharcDescForKeyDate.CharcInternalID

  //Extension
  association [1..1] to E_InspSpecificationVersion     as _Extension                    on  $projection.InspectionSpecificationPlant   = _Extension.InspectionSpecificationPlant
                                                                                        and $projection.InspectionSpecification        = _Extension.InspectionSpecification
                                                                                        and $projection.InspectionSpecificationVersion = _Extension.InspectionSpecificationVersion

{
      @ObjectModel.foreignKey.association: '_InspSpecificationPlant'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
  key qpmk.zaehler                                                         as InspectionSpecificationPlant,
      @ObjectModel.foreignKey.association: '_InspectionSpecification'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
  key cast( qpmk.mkmnr as vdm_qmerknr preserving type )                    as InspectionSpecification,
  key qpmk.version                                                         as InspectionSpecificationVersion,

      @ObjectModel.foreignKey.association: '_Plant'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      qpmk.werks                                                           as Plant,
      @Semantics.businessDate.from: true
      qpmk.gueltigab                                                       as ValidityStartDate,
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
      qpmk.sortfeld                                                        as InspectionSpecificationSrchTxt,
      cast( qpmk.charact_id1 as vdm_qcharact_id1 preserving type ) as InspSpecGlobalName,
      @ObjectModel.foreignKey.association: '_InspSpecStatus'
      qpmk.loekz                                                           as InspectionSpecificationStatus,
      //qpmk.lsper,
      @ObjectModel.foreignKey.association: '_InspSpecTransferType'
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8 }
      cast( qpmk.konsistent as vdm_qvollst preserving type )               as InspSpecTransferType,
      @ObjectModel.foreignKey.association: '_CreatedByUserContactCard'
      @Semantics.user.createdBy: true
      qpmk.autor                                                           as InspSpecCreatedByUser,
      @Semantics.systemDate.createdAt: true
      qpmk.dates                                                           as InspSpecCreationDate,
      @ObjectModel.foreignKey.association: '_ChangedByUserContactCard'
      @Semantics.user.lastChangedBy: true
      qpmk.aeaut                                                           as InspSpecChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      qpmk.datae                                                           as InspSpecChangeDate,
      case qpmk.changeddatetime
        when 0 then cast( '19000101010101' as tzntstmps )
        else qpmk.changeddatetime                    end                   as ChangedDateTime,
      qpmk.steuerkz                                                        as InspSpecControlIndicators,
      // STEUERKZ is a string, but each single character defines an own semantic (Control indicator, see DDIC structure QMKST):
      cast( substring(qpmk.steuerkz,1,1) as vdm_qkzqunmk preserving type ) as InspSpecIsQuantitative, //Quantitative-Qualitativ
      @ObjectModel.foreignKey.association: '_InspSpecCharcType'
      case substring(qpmk.steuerkz,1,1) // InspSpecIsQuantitative
        when 'X' then cast ( '1' as vdm_qchar_type_basic ) // = Quantitative
                 else cast ( '2' as vdm_qchar_type_basic ) // = Qualitative
      end                                                                  as InspSpecCharacteristicType,
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Measured Value Must Be Recorded'
      cast( substring(qpmk.steuerkz,2,1) as qkzqumk preserving type )      as InspSpecIsMeasuredValueRqd, // Measured Value Must Be Recorded
      @Semantics.booleanIndicator: true
      @EndUserText: { label: 'Characteristic Attribute', quickInfo: 'Reference to Characteristic Attribute Required' }
      cast( substring(qpmk.steuerkz,3,1) as qkzpkat preserving type )      as InspSpecIsSelectedSetRequired, // Selected set is required
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Upper Specification Limit'
      cast( substring(qpmk.steuerkz,4,1) as qkztolob preserving type )     as InspSpecIsUpperLimitRequired,  // Upper Specification Limit Required
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Lower Specification Limit'
      cast( substring(qpmk.steuerkz,5,1) as qkztolun preserving type )     as InspSpecIsLowerLimitRequired,  // Lower Specification Limit Required
      @Semantics.booleanIndicator: true
      cast( substring(qpmk.steuerkz,6,1) as qkzsollpr preserving type )    as InspSpecIsTargetValueInLimit, // Check if target value is between lower and upper limit
      @ObjectModel.foreignKey.association: '_InspectionScope'
      cast( substring(qpmk.steuerkz,7,1) as qpumfkz preserving type )      as InspectionScope, // Inspection Scope
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Long-Term Inspection'
      cast( substring(qpmk.steuerkz,8,1) as qlzeitkz preserving type )     as InspSpecIsLongTermInspection, // Long-Term Inspection
      @ObjectModel.foreignKey.association: '_InspSpecRecordingType'
      cast( substring(qpmk.steuerkz,9,1) as qestukz preserving type )      as InspSpecRecordingType, // RecordingType: Values from domain QESTKUZ
      @Semantics.booleanIndicator: false // Although, the GFN contains 'Is', this is not an indicator.
      @ObjectModel.foreignKey.association: '_InspResultDocuRequired'
      cast( substring(qpmk.steuerkz,10,1) as vdm_qdokukz preserving type ) as InspResultIsDocumentationRqd, // Documentation Required for Inspection Result: Values from domain QDOKUKZ
      @ObjectModel.foreignKey.association: '_InspSpecCharcCategory'
      cast( substring(qpmk.steuerkz,11,1) as vdm_qrzwang preserving type ) as InspSpecCharcCategory, // Characteristic Category
      @Semantics.booleanIndicator: true
      cast( substring(qpmk.steuerkz,13,1) as qaddpro preserving type )     as InspSpecIsSampleQtyAdditive, // Sample Quantity Is Additive
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Destructive Inspection'
      cast( substring(qpmk.steuerkz,14,1) as qkzdestroy preserving type )  as InspSpecIsDestructive, // Destructive Inspection
      @ObjectModel.foreignKey.association: '_InspSpecRsltCalculation'
      cast( substring(qpmk.steuerkz,15,1) as vdm_qkzformel preserving type ) as InspSpecResultCalculation, // Result Calculation for Characteristics
      @Semantics.booleanIndicator: true
      cast( substring(qpmk.steuerkz,16,1) as qstichpr preserving type )    as InspSpecIsSamplingProcedRqd, // Sampling Procedure Is Required
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Characteristic Is Scrap Relevant'
      @EndUserText.quickInfo: 'Characteristic Is Relevant for Quality Score and Scrap Share'
      cast( substring(qpmk.steuerkz,17,1) as qausslos preserving type )    as InspSpecIsScrapRelevant, // Characteristic Relevant for Quality Score and Scrap Share
      @Semantics.booleanIndicator: true
      cast( substring(qpmk.steuerkz,18,1) as qnaendkz preserving type )    as InspSpecHasFixedCtrlIndicators, // Control Indicator fixed
      @Semantics.booleanIndicator: true
      cast( substring(qpmk.steuerkz,19,1) as qbfhlzhl preserving type )    as InspSpecIsDefectRecordingRqd, // Defects Recording required
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Assignment of Test Equipment Required'
      cast( substring(qpmk.steuerkz,22,1) as qpmzwang preserving type )    as InspSpecIsTestEquipmentRqd, // Assignment of Test Equipment Required
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Automatic Defects Recording'
      cast( substring(qpmk.steuerkz,23,1) as qfehlrec preserving type )    as InspSpecIsDefectsRecgAutomatic, // Defects Recording Automatically Called Up
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Change Documents at Results Recording'
      @EndUserText.quickInfo: 'Create Change Documents During Results Recording'
      cast( substring(qpmk.steuerkz,24,1) as qkzaenbel preserving type )   as InspSpecIsChgDocRequired, // Create Change Documents During Results Recording
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'SPC Characteristic'
      cast( substring(qpmk.steuerkz,25,1) as qspcmk preserving type )      as InspSpecIsControlChartUsed, // SPC Characteristic; Control Chart is Used
      @ObjectModel.foreignKey.association: '_InspSpecPrintControl'
      cast( substring(qpmk.steuerkz,26,1) as vdm_qdruck1 preserving type ) as InspSpecPrintControl, // Print Control
      @ObjectModel.foreignKey.association: '_InspSpecImportanceCode'
      cast( qpmk.merkgew as vdm_qmerkgew preserving type ) as InspSpecImportanceCode,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_InspectorQualificationStdVH',
                     element: 'InspectorQualification' }
        }]
      // ]--GENERATED
      @EndUserText: { label: 'Inspector Qualification' , quickInfo: 'Inspector Qualification' }
      @ObjectModel.foreignKey.association: '_InspectorQualification'
      qpmk.prfql                                                           as InspectorQualification,
      qpmk.dummy10                                                         as InspSpecInformationField1,
      qpmk.dummy20                                                         as InspSpecInformationField2,
      qpmk.dummy40                                                         as InspSpecInformationField3,
      @ObjectModel.foreignKey.association: '_QltyMstrDataAuthznGrp'
      qpmk.qauth                                                           as QltyMstrDataAuthorizationGroup,
      @ObjectModel.foreignKey.association: '_InspToleranceSpec'
      qpmk.toleranzsl                                                      as InspToleranceSpecification,
      qpmk.stellen                                                         as InspSpecDecimalPlaces,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      qpmk.masseinhsw                                                      as InspectionSpecificationUnit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.sollwert                                                        as InspSpecTargetValue,
      @Semantics.booleanIndicator: true
      qpmk.sollwni                                                         as InspSpecHasTargetValue,
      
      // Tolerance
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      @EndUserText: { label: 'Upper Specification Limit' , quickInfo: 'Upper Specification Limit' }
      qpmk.toleranzob                                                      as InspSpecUpperLimit,
      @Semantics.booleanIndicator: true
      qpmk.tolobni                                                         as InspSpecHasUpperLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      @EndUserText: { label: 'Lower Specification Limit' , quickInfo: 'Lower Specification Limit' }
      qpmk.toleranzun                                                      as InspSpecLowerLimit,
      @Semantics.booleanIndicator: true
      qpmk.tolunni                                                         as InspSpecHasLowerLimit,
      //qpmk.klasanzahl,
      //qpmk.klasbreite,
      //qpmk.klasbrni,
      //qpmk.klasmitte,
      //qpmk.klasmini,
      
      // Additional Pairs of Limits
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.grenzeob1                                                       as InspSpecFirstUpperSpecLimit,
      @Semantics.booleanIndicator: true
      qpmk.grenzob1ni                                                      as InspSpecHasFirstUpperSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.grenzeun1                                                       as InspSpecFirstLowerSpecLimit,
      @Semantics.booleanIndicator: true
      qpmk.grenzun1ni                                                      as InspSpecHasFirstLowerSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.grenzeob2                                                       as InspSpecSecondUpperSpecLimit,
      @Semantics.booleanIndicator: true
      qpmk.grenzob2ni                                                      as InspSpecHasSecondUprSpecLimit,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.grenzeun2                                                       as InspSpecSecondLowerSpecLimit,
      @Semantics.booleanIndicator: true
      qpmk.grenzun2ni                                                      as InspSpecHasSecondLowrSpecLimit,
      
      // Plausibility
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.plausioben                                                      as InspSpecUpperPlausibilityLimit,
      @Semantics.booleanIndicator: true
      qpmk.plausiobni                                                      as InspSpecHasUprPlausibilityLmt,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      qpmk.plausiunte                                                      as InspSpecLowerPlausibilityLimit,
      @Semantics.booleanIndicator: true
      qpmk.plausiunni                                                      as InspSpecHasLowrPlausibilityLmt,
      
      // Tolerance Change
      // Spec. Limits
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      cast( qpmk.tolerweiob as vdm_qtolwob preserving type )               as InspSpecUpperSpecLimitChange,
      @Semantics.booleanIndicator: true
      qpmk.tolwobni                                                        as InspSpecHasUprSpecLimitChange,
      @Semantics.quantity.unitOfMeasure: 'InspectionSpecificationUnit'
      cast( qpmk.tolerweiun as vdm_qtolwun preserving type )               as InspSpecLowerSpecLimitChange,
      @Semantics.booleanIndicator: true
      qpmk.tolwunni                                                        as InspSpecHasLowrSpecLimitChange,
      // Validity
      cast( qpmk.tolerwab as vdm_qtolwab preserving type )                 as InspSpecToleranceChgValidFrom,
      cast( qpmk.tolerwbis as vdm_qtolwbis preserving type )               as InspSpecToleranceChgValidTo,
      
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeGroupStdVH',
                     element: 'DefectCodeGroup' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeGrpRjcnLower'
      @EndUserText.label: 'Defect Code Group for Reject. (Lo. Lmt.)'
      @EndUserText.quickInfo: 'Defect Code Group for Rejection at Lower Limit'
      qpmk.codegr9u                                                        as InspSpecDefectCodeGrpRjcnLower,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeStdVH',
                     element: 'DefectCode' },
          additionalBinding: [{ localElement: 'InspSpecDefectCodeGrpRjcnLower',
                                element: 'DefectCodeGroup' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeRjcnLower'
      @EndUserText.label: 'Defect Code for Rejection (Lower Limit)'
      @EndUserText.quickInfo: 'Defect Code for Rejection at Lower Limit'
      qpmk.code9u                                                          as InspSpecDefectCodeRjcnLower,
      //qpmk.codevr9u,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeGroupStdVH',
                     element: 'DefectCodeGroup' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeGrpRjcnUpper'
      @EndUserText.label: 'Defect Code Group for Reject. (Up. Lmt.)'
      @EndUserText.quickInfo: 'Defect Code Group for Rejection at Upper Limit'
      qpmk.codegr9o                                                        as InspSpecDefectCodeGrpRjcnUpper,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeStdVH',
                     element: 'DefectCode' },
          additionalBinding: [{ localElement: 'InspSpecDefectCodeGrpRjcnUpper',
                                element: 'DefectCodeGroup' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeRjcnUpper'
      @EndUserText.label: 'Defect Code for Rejection (Upper Limit)'
      @EndUserText.quickInfo: 'Defect Code for Rejection at Upper Limit'
      qpmk.code9o                                                          as InspSpecDefectCodeRjcnUpper,
      //qpmk.codevr9o,
      cast( qpmk.atinn as atinn_no_conv preserving type )                  as CharcInternalID,
      @ObjectModel.foreignKey.association: '_DefectFractionEstnProced'
      cast( qpmk.eeantverf as vdm_qeantverf preserving type )              as DefectFractionEstimationProced,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeGroupStdVH',
                     element: 'DefectCodeGroup' }
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeGrpRejection'
      @EndUserText: { label: 'Defect Code Group for General Rejection' , quickInfo: 'Defect Code Group for General Rejection' }
      qpmk.codegrqual                                                      as InspSpecDefectCodeGrpRejection,
      //--[ GENERATED:012:GFBfhyK17kY4idVcfs7Ldm
      @Consumption.valueHelpDefinition: [
        { entity:  { name:    'I_DefectCodeStdVH',
                     element: 'DefectCode' },
          additionalBinding: [{ localElement: 'InspSpecDefectCodeGrpRejection',
                                element: 'DefectCodeGroup' }]
        }]
      // ]--GENERATED
      @ObjectModel.foreignKey.association: '_InspDefectCodeRejection'
      @EndUserText: { label: 'Defect Code for General Rejection' , quickInfo: 'Defect Code for General Rejection' }
      qpmk.codequal                                                        as InspSpecDefectCodeRejection,
      qpmk.inpproc                                                         as InspSpecInputProcedure,
      //      @ObjectModel.foreignKey.association: '_InspSpecDeterminationRule'
      @EndUserText: { label: 'Specification Determination Rule' , quickInfo: 'Specification Determination Rule' }
      qpmk.spec_det_rule                                                   as InspSpecDeterminationRule,
      @Semantics.booleanIndicator: true
      @EndUserText.label: 'Specification Determination Rule Active'
      @EndUserText.quickInfo: 'Active Indicator for Specification Determination Rule'
      qpmk.spec_det_active                                                 as InspSpecIsDetnRuleActive,
      //qpmk.parameter1,
      //qpmk.parameter2

      /* Associations */
      _Text,
      _InspectionSpecification,
      _InspectionMethod,
      _InspSpecStatus,
      _InspSpecStatusText,
      _InspSpecificationPlant,
      _Plant,
      _InspSpecCreatedByUser,
      _CreatedByUserContactCard,
      _InspSpecChangedByUser,
      _ChangedByUserContactCard,
      _InspToleranceSpec,
      _InspToleranceSpecText,
      _InspSpecTransferType,
      _InspSpecTransferTypeText,
      _InspSpecCharcType,
      _InspSpecCharcTypeText,
      _InspectionScope,
      _InspectionScopeText,
      _InspSpecRecordingType,
      _InspSpecRecordingTypeText,
      _InspResultDocuRequired,
      _InspResultDocuRequiredText,
      _InspectorQualification,
      _InspectorQualificationText,
      _QltyMstrDataAuthznGrp,
      _QltyMstrDataAuthznGrpTxt,
      _InspSpecCharcCategory,
      _InspSpecCharcCategoryText,
      _InspSpecRsltCalculation,
      _InspSpecRsltCalculationText,
      _InspSpecPrintControl,
      _InspSpecPrintControlText,
      _UnitOfMeasure,
      _InspDefectCodeGrpRejection,
      _InspDefectCodeRejection,
      _InspDefectCodeGrpRjcnLower,
      _InspDefectCodeRjcnLower,
      _InspDefectCodeGrpRjcnUpper,
      _InspDefectCodeRjcnUpper,
      //      _InspSpecDeterminationRule,
      //      _InspSpecDeterminationRuleTxt,
      _InspSpecImportanceCode,
      _InspSpecImportanceCodeText,
      _DefectFractionEstnProced,
      _DefectFractionEstnProcedTxt,
      _ClfnCharacteristicForKeyDate,
      _ClfnCharcDescForKeyDate

}
```
