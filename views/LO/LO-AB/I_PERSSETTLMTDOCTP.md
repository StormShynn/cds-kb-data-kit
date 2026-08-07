---
name: I_PERSSETTLMTDOCTP
description: Perssettlmtdoctp
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
  - transactional-processing
  - component:LO-AB
  - lob:Logistics General
---
# I_PERSSETTLMTDOCTP

**Perssettlmtdoctp**

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
| `TotalNetAmount` |  | |  |  |  |  |
| `PersSettlmtDocIsReversed` |  | |  |  |  |  |
| `RvsdPersSettlmtDoc` |  | |  |  |  |  |
| `PersSettlmtDocActivityReason` |  | |  |  |  |  |
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
| `ApplElmntBehaviorGrp` |  | |  |  |  |  |
| `PersSettlmtDocChangeState` |  | |  |  |  |  |
| `_PersonWorkAgreement` | | ✓ | | | | |
| `_PersSettlmtDocItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Personnel Settlement Document - TP'
@AccessControl: {
    authorizationCheck: #MANDATORY,
    personalData.blocking: #('TRANSACTIONAL_DATA')
    }
@ObjectModel: {
    sapObjectNodeType.name: 'PersonnelSettlementDocument',
    semanticKey: [ 'PersonnelSettlementDocument' ],
    usageType: { 
      serviceQuality: #B,
      sizeCategory: #XXL,
      dataClass: #TRANSACTIONAL
      },
    modelingPattern:       #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
    }
@VDM: {
    viewType: #TRANSACTIONAL,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
    }
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: false
    }
@AbapCatalog.extensibility: {
    extensible: true,
    dataSources: [ 'PersonnelSettlementDocument' ],
    elementSuffix: 'SMH',
    quota: {
      maximumFields: 170, //This is calculated with report CFD_CALCULATE_DEV_EXT_QUOTA
      maximumBytes: 3400 //This is calculated with report CFD_CALCULATE_DEV_EXT_QUOTA
      }
    }

define root view entity I_PersSettlmtDocTP
  provider contract transactional_interface
  as projection on R_PersSettlmtDocTP as PersonnelSettlementDocument
{
  key PersonnelSettlementDocument,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PersSettlmtDocTypeStdVH', element: 'SettlmtDocType' } }]
      }
      SettlmtDocType,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtDocCat', element: 'SettlmtDocCat' } }]
      }
      SettlmtDocCat,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessTypeStdVH', element: 'SettlmtProcessType' }, useAsTemplate: true }]
      }
      SettlmtProcessType,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessCat', element: 'SettlmtProcessCat' }, useAsTemplate: true }]
      }
      SettlmtProcessCat,
      LogisticsDataEntryCat,

      PostingDate,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PersSettlmtAcctgTransfSts', element: 'PersSettlmtAcctgTransfSts' }, useAsTemplate: true }]
      }
      PersSettlmtAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtApplStsStdVH', element: 'SettlmtApplSts' }, useAsTemplate: true }]
      }
      SettlmtApplSts,
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure,
      PricingDocument,

      /* Worker related information */
      PersonWorkAgreement,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CostCenterStdVH', element: 'CostCenter'},
                                additionalBinding: [{ localElement: 'PersonnelControllingArea', element: 'ControllingArea' }]
                             }]
      }
      PersonnelCostCenter,
      PersonnelControllingArea,

      /* Organizational Data */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' }, useAsTemplate: true }]
      }
      CompanyCode,
      SalesOrganization,
      DistributionChannel,
      Division,
      SalesOffice,
      SalesGroup,

      /* Administrative Data */
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangeDate,

      /* Currency and Exchange Rate */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CurrencyStdVH', element: 'Currency' }, useAsTemplate: true }]
      }
      PersSettlmtDocCurrency,
      ExchangeRate,
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @Semantics.amount.currencyCode: 'PersSettlmtDocCurrency'
      TotalNetAmount,

      /* Reversal Information */
      PersSettlmtDocIsReversed,
      RvsdPersSettlmtDoc,
      
      PersSettlmtDocActivityReason,
      PaymentReference,

      /* Settlement related Condition Contract */
      CndnContrType,
      SettlmtReltdCndnContr,
      CndnContrProcVar,

      FiscalPeriod,

      SettlmtDateCat,
      ActualSettlmtDate,
      SettlmtDateSequentialID,
      SettlmtDate,
      PersSettlmtDocIncmpltnsRsn,

      SettlmtBusProcVar,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_PersSettlmtBusProcCat', element: 'PersSettlmtBusProcCat' }, useAsTemplate: true }]
      }
      SettlmtBusProcCat,

      /* Units */
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtQuantityUnit'
      TotalSettlmtQuantity,
      TotalSettlmtQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtNetWeight,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtWeightUnit'
      TotalSettlmtGrossWeight,
      TotalSettlmtWeightUnit,
      @Semantics.quantity.unitOfMeasure: 'TotalSettlmtVolumeUnit'
      TotalSettlmtVolume,
      TotalSettlmtVolumeUnit,

      SettlmtPeriodStartDate,
      SettlmtPeriodEndDate,

      CndnContrProcessCategory,
      PostingPartnerCat,

      /* Journal Entry related fields */
      JournalEntryCreationDate,
      JournalEntryCreationTime,

      SettlmtCompensationReason,
      SettlmtCompnVar,

      ApplElmntBehaviorGrp,

      /* Entity Tag */
      PersSettlmtDocChangeState,

      @Consumption.hidden: true
      _PersonWorkAgreement,

      /* Compositions */
      _PersSettlmtDocItem : redirected to composition child I_PersSettlmtDocItemTP

}
```
