---
name: I_PERSSETTLMTDOC
description: Perssettlmtdoc
app_component: LO-AB
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-AB
  - interface-view
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOC

**Perssettlmtdoc**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PersonnelSettlementDocument` | ✓ | |  |  |  |  |
| `SettlmtDocType` |  | |  |  |  |  |
| `SettlmtDocCat` |  | |  |  |  |  |
| `SettlmtProcessType` |  | |  |  |  |  |
| `SettlmtProcessCat` |  | |  |  |  |  |
| `LogisticsDataEntryCat` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `PersSettlmtAcctgTransfSts` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `DocumentReferenceID` |  | |  |  |  |  |
| `AssignmentReference` |  | |  |  |  |  |
| `SettlmtApplSts` |  | |  |  |  |  |
| `SettlmtApplStsGrp` |  | |  |  |  |  |
| `PricingProcedure` |  | |  |  |  |  |
| `PricingDocument` |  | |  |  |  |  |
| `PersonWorkAgreement` |  | |  |  |  |  |
| `PersonnelCostCenter` |  | |  |  |  |  |
| `PersonnelControllingArea` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `Division` |  | |  |  |  |  |
| `SalesOffice` |  | |  |  |  |  |
| `SalesGroup` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `PersSettlmtDocCurrency` |  | |  |  |  |  |
| `ExchangeRate` |  | |  |  |  |  |
| `ExchangeRateType` |  | |  |  |  |  |
| `ExchangeRateIsFixed` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `TotalNetAmount` |  | |  | `PersSettlmtDocTotalNetAmount` |  |  |
| `PersSettlmtDocIsReversed` |  | |  |  |  |  |
| `RvsdPersSettlmtDoc` |  | |  |  |  |  |
| `SettlmtDocActivityReason` |  | |  | `PersSettlmtDocActivityReason` |  |  |
| `PaymentReference` |  | |  |  |  |  |
| `CndnContrType` |  | |  |  |  |  |
| `SettlmtReltdCndnContr` |  | |  |  |  |  |
| `CndnContrProcVar` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `SettlmtDateCat` |  | |  |  |  |  |
| `ActualSettlmtDate` |  | |  |  |  |  |
| `SettlmtDateSequentialID` |  | |  |  |  |  |
| `SettlmtDate` |  | |  |  |  |  |
| `PersSettlmtDocIncmpltnsRsn` |  | |  |  |  |  |
| `SettlmtBusProcVar` |  | |  |  |  |  |
| `SettlmtBusProcCat` |  | |  |  |  |  |
| `TotalSettlmtQuantity` |  | |  |  |  |  |
| `TotalSettlmtQuantityUnit` |  | |  |  |  |  |
| `TotalSettlmtNetWeight` |  | |  |  |  |  |
| `TotalSettlmtGrossWeight` |  | |  |  |  |  |
| `TotalSettlmtWeightUnit` |  | |  |  |  |  |
| `TotalSettlmtVolume` |  | |  |  |  |  |
| `TotalSettlmtVolumeUnit` |  | |  |  |  |  |
| `SettlmtPeriodStartDate` |  | |  |  |  |  |
| `SettlmtPeriodEndDate` |  | |  |  |  |  |
| `CndnContrProcessCategory` |  | |  |  |  |  |
| `PostingPartnerCat` |  | |  |  |  |  |
| `JournalEntryCreationDate` |  | |  |  |  |  |
| `JournalEntryCreationTime` |  | |  |  |  |  |
| `SettlmtCompensationReason` |  | |  |  |  |  |
| `SettlmtCompnVar` |  | |  |  |  |  |
| `PersSettlmtDocChangeState` |  | |  | `cast( ' ' as wlf_change_state preserving type )` |  |  |
| `_PersSettlmtDocItem` | | ✓ | | | | |
| `_PersSettlmtDocPrcgElmnt` | | ✓ | | | | |
| `_SettlmtDocType` | | ✓ | | | | |
| `_SettlmtProcessType` | | ✓ | | | | |
| `_SettlmtApplSts` | | ✓ | | | | |
| `_SettlmtApplStsGrp` | | ✓ | | | | |
| `_SettlmtApplStsGrpStsAssgmt` | | ✓ | | | | |
| `_RvsdPersSettlmtDoc` | | ✓ | | | | |
| `_SettlmtDocActivityReason` | | ✓ | | | | |
| `_CndnContrType` | | ✓ | | | | |
| `_SettlmtReltdCndnContr` | | ✓ | | | | |
| `_SettlmtBusProcVar` | | ✓ | | | | |
| `_SettlmtCompnRsn` | | ✓ | | | | |
| `_SettlmtDocCat` | | ✓ | | | | |
| `_SettlmtProcessCat` | | ✓ | | | | |
| `_LogisticsDataEntryCat` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_SalesOffice` | | ✓ | | | | |
| `_SalesGroup` | | ✓ | | | | |
| `_SalesArea` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_PersSettlmtDocCurrency` | | ✓ | | | | |
| `_ExchangeRateType` | | ✓ | | | | |
| `_CndnContrProcVar` | | ✓ | | | | |
| `_SettlmtDateCat` | | ✓ | | | | |
| `_PersSettlmtDocIncmpltnsRsn` | | ✓ | | | | |
| `_SettlmtBusProcCat` | | ✓ | | | | |
| `_TotalSettlmtQuantityUnit` | | ✓ | | | | |
| `_TotalSettlmtWeightUnit` | | ✓ | | | | |
| `_TotalSettlmtVolumeUnit` | | ✓ | | | | |
| `_CndnContrProcessCategory` | | ✓ | | | | |
| `_PostingPartnerCat` | | ✓ | | | | |
| `_PersonWorkAgreement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PersSettlmtDocItem` | `I_PersSettlmtDocItem` | [0..*] |
| `_PersSettlmtDocPrcgElmnt` | `I_PersSettlmtDocPrcgElmnt` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_RvsdPersSettlmtDoc` | `I_PersSettlmtDoc` | [0..1] |
| `_SettlmtDocActivityReason` | `I_SettlmtActivityReasonCode` | [0..1] |
| `_CndnContrType` | `I_CndnContrType` | [0..1] |
| `_SettlmtReltdCndnContr` | `I_ConditionContract` | [0..1] |
| `_SettlmtBusProcVar` | `I_SettlmtBusProcVar` | [0..1] |
| `_SettlmtCompnRsn` | `I_SettlmtCompnRsn` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document'
@AccessControl: { 
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA'),
    privilegedAssociations: [ '_CreatedByUser' ]
    }
@ObjectModel: {
    representativeKey: 'PersonnelSettlementDocument',
    modelingPattern: #NONE,
    supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
    usageType: {
      dataClass:      #TRANSACTIONAL,
      serviceQuality: #A,
      sizeCategory:   #XXL
      }
    }
@Analytics.technicalName: 'IWLFPERSSMTDOC'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    allowExtensions: false,
    ignorePropagatedAnnotations: true
    }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PersSettlmtDoc
  as select from R_PersSettlmtDoc

  association [0..*] to I_PersSettlmtDocItem         as _PersSettlmtDocItem         on  $projection.PersonnelSettlementDocument = _PersSettlmtDocItem.PersonnelSettlementDocument
  association [0..*] to I_PersSettlmtDocPrcgElmnt    as _PersSettlmtDocPrcgElmnt    on  $projection.PersonnelSettlementDocument = _PersSettlmtDocPrcgElmnt.PersonnelSettlementDocument

  association [0..1] to I_SettlmtDocType             as _SettlmtDocType             on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcessType         on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType

  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts             on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp          on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                    and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts

  association [0..1] to I_PersSettlmtDoc             as _RvsdPersSettlmtDoc         on  $projection.RvsdPersSettlmtDoc = _RvsdPersSettlmtDoc.PersonnelSettlementDocument
  association [0..1] to I_SettlmtActivityReasonCode  as _SettlmtDocActivityReason   on  $projection.SettlmtDocActivityReason = _SettlmtDocActivityReason.SettlmtActivityReason

  association [0..1] to I_CndnContrType              as _CndnContrType              on  $projection.CndnContrType = _CndnContrType.CndnContrType
  association [0..1] to I_ConditionContract          as _SettlmtReltdCndnContr      on  $projection.SettlmtReltdCndnContr = _SettlmtReltdCndnContr.ConditionContract

  association [0..1] to I_SettlmtBusProcVar          as _SettlmtBusProcVar          on  $projection.SettlmtBusProcVar = _SettlmtBusProcVar.SettlmtBusProcVar

  association [0..1] to I_SettlmtCompnRsn            as _SettlmtCompnRsn            on  $projection.SettlmtCompensationReason = _SettlmtCompnRsn.SettlmtCompensationReason

  //Extension Association
  association [1..1] to E_SettlmtMgmtDoc             as _Extension                  on  $projection.PersonnelSettlementDocument = _Extension.SettlmtMgmtDoc

{

  key PersonnelSettlementDocument,
      SettlmtDocType,
      SettlmtDocCat,
      SettlmtProcessType,
      SettlmtProcessCat,
      LogisticsDataEntryCat,

      PostingDate,
      PersSettlmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      SettlmtApplSts,
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure,
      PricingDocument,

      /* Worker related fields */
      PersonWorkAgreement,
      PersonnelCostCenter,
      PersonnelControllingArea,

      /* Organizational Data */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,

      /* Administrative Data */
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDate.createdAt: true
      CreationDate,
      CreationTime,
      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      /* Currency and Exchange Rate */
      @ObjectModel.foreignKey.association: '_PersSettlmtDocCurrency'
      PersSettlmtDocCurrency,
      ExchangeRate,
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      PersSettlmtDocTotalNetAmount                       as TotalNetAmount,

      /* Reversal Information */
      PersSettlmtDocIsReversed,
      RvsdPersSettlmtDoc,

      PersSettlmtDocActivityReason                       as SettlmtDocActivityReason,
      PaymentReference,

      /* Settlement Related Condition Contract */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrTypeStdVH', element: 'CndnContrType' } }]
      }
      CndnContrType,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_ConditionContractStdVH', element: 'ConditionContract' } }]
      }
      SettlmtReltdCndnContr,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CndnContrProcVarStdVH', element: 'CndnContrProcVar' } }]
      }
      CndnContrProcVar,

      FiscalPeriod,

      SettlmtDateCat,
      ActualSettlmtDate,
      SettlmtDateSequentialID,
      SettlmtDate,
      PersSettlmtDocIncmpltnsRsn,

      SettlmtBusProcVar,
      SettlmtBusProcCat,

      /* Units */
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      TotalSettlmtQuantity,
      @ObjectModel.foreignKey.association: '_TotalSettlmtQuantityUnit'
      TotalSettlmtQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtNetWeight,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtGrossWeight,
      @ObjectModel.foreignKey.association: '_TotalSettlmtWeightUnit'
      TotalSettlmtWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      TotalSettlmtVolume,
      @ObjectModel.foreignKey.association: '_TotalSettlmtVolumeUnit'
      TotalSettlmtVolumeUnit,

      SettlmtPeriodStartDate,
      SettlmtPeriodEndDate,
      CndnContrProcessCategory,

      PostingPartnerCat,

      JournalEntryCreationDate,
      JournalEntryCreationTime,

      SettlmtCompensationReason,
      SettlmtCompnVar,

      /* Entity Tag */
      @API.element.releaseState: #DEPRECATED
      cast( '    ' as wlf_change_state preserving type ) as PersSettlmtDocChangeState,

      /* Associations */
      _PersSettlmtDocItem,
      _PersSettlmtDocPrcgElmnt,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _SettlmtProcessCat,
      _LogisticsDataEntryCat,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _CompanyCode,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _SalesArea,
      _CreatedByUser,
      _PersSettlmtDocCurrency,
      _ExchangeRateType,
      _RvsdPersSettlmtDoc,
      _SettlmtDocActivityReason,
      _CndnContrType,
      _SettlmtReltdCndnContr,
      _CndnContrProcVar,
      _SettlmtDateCat,
      _PersSettlmtDocIncmpltnsRsn,
      _SettlmtBusProcVar,
      _SettlmtBusProcCat,
      _TotalSettlmtQuantityUnit,
      _TotalSettlmtWeightUnit,
      _TotalSettlmtVolumeUnit,
      _CndnContrProcessCategory,
      _PostingPartnerCat,
      _PersonWorkAgreement,
      _SettlmtCompnRsn

}
```
