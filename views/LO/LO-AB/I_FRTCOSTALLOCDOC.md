---
name: I_FRTCOSTALLOCDOC
description: Frtcostallocdoc
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
# I_FRTCOSTALLOCDOC

**Frtcostallocdoc**

| Property | Value |
|---|---|
| App Component | `LO-AB` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `FreightCostAllocationDocument` | `}] } key FreightCostAllocationDocument` |
| `SettlmtDocType` | `}] } SettlmtDocType` |
| `SettlmtDocCat` | `SettlmtDocCat` |
| `SettlmtProcessType` | `}] } SettlmtProcessType` |
| `SettlmtProcessCat` | `SettlmtProcessCat` |
| `PostingDate` | `PostingDate` |
| `FrtCostAllocAcctgTransfSts` | `FrtCostAllocAcctgTransfSts` |
| `DocumentDate` | `DocumentDate` |
| `DocumentReferenceID` | `DocumentReferenceID` |
| `AssignmentReference` | `AssignmentReference` |
| `SettlmtApplSts` | `SettlmtApplSts` |
| `SettlmtApplStsGrp` | `SettlmtApplStsGrp` |
| `PricingProcedure` | `PricingProcedure` |
| `PricingDocument` | `PricingDocument` |
| `CompanyCode` | `}] } CompanyCode` |
| `PurchasingOrganization` | `PurchasingOrganization` |
| `PurchasingGroup` | `PurchasingGroup` |
| `SalesOrganization` | `SalesOrganization` |
| `DistributionChannel` | `DistributionChannel` |
| `Division` | `Division` |
| `SalesOffice` | `SalesOffice` |
| `SalesGroup` | `SalesGroup` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `LastChangeDate` | `LastChangeDate` |
| `FrtCostAllocDocCurrency` | `FrtCostAllocDocCurrency` |
| `ExchangeRate` | `ExchangeRate` |
| `ExchangeRateType` | `ExchangeRateType` |
| `ExchangeRateIsFixed` | `ExchangeRateIsFixed` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `FrtCostAllocDocTotGrossAmount` | `FrtCostAllocDocTotGrossAmount` |
| `FrtCostAllocDocTotalNetAmount` | `FrtCostAllocDocTotalNetAmount` |
| `FrtCostAllocDocIsReversed` | `FrtCostAllocDocIsReversed` |
| `RvsdFrtCostAllocDoc` | `}] } RvsdFrtCostAllocDoc` |
| `FrtCostAllocDocActivityReason` | `FrtCostAllocDocActivityReason` |
| `SettlmtClassificationCat` | `SettlmtClassificationCat` |
| `FiscalPeriod` | `FiscalPeriod` |
| `FrtCostAllocDocIncmpltnsRsn` | `FrtCostAllocDocIncmpltnsRsn` |
| `FrtCostAllocBusProcCat` | `FrtCostAllocBusProcCat` |
| `JournalEntryCreationDate` | `JournalEntryCreationDate` |
| `JournalEntryCreationTime` | `JournalEntryCreationTime` |
| `_FrtCostAllocItm` | *Association* |
| `_SettlmtDocType` | *Association* |
| `_SettlmtProcessType` | *Association* |
| `_SettlmtApplSts` | *Association* |
| `_SettlmtApplStsGrp` | *Association* |
| `_SettlmtApplStsGrpStsAssgmt` | *Association* |
| `_FrtCostAllocPrcgElmnt` | *Association* |
| `_RvsdFrtCostAllocDoc` | *Association* |
| `_SettlmtDocCat` | *Association* |
| `_SettlmtProcessCat` | *Association* |
| `_FrtCostAllocAcctgTransfSts` | *Association* |
| `_CompanyCode` | *Association* |
| `_PurchasingOrganization` | *Association* |
| `_PurchasingGroup` | *Association* |
| `_SalesOrganization` | *Association* |
| `_DistributionChannel` | *Association* |
| `_Division` | *Association* |
| `_SalesOffice` | *Association* |
| `_SalesGroup` | *Association* |
| `_CreatedByUser` | *Association* |
| `_FrtCostAllocDocCurrency` | *Association* |
| `_ExchangeRateType` | *Association* |
| `_FrtCostAllocDocActivityReason` | *Association* |
| `_SettlmtClassificationCat` | *Association* |
| `_FrtCostAllocDocIncmpltnsRsn` | *Association* |
| `_FrtCostAllocBusProcCat` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FrtCostAllocItm` | `I_FrtCostAllocItm` | [0..*] |
| `_SettlmtDocType` | `I_SettlmtDocType` | [0..1] |
| `_SettlmtProcessType` | `I_SettlmtProcessType` | [0..1] |
| `_SettlmtApplSts` | `I_SettlmtApplSts` | [0..1] |
| `_SettlmtApplStsGrp` | `I_SettlmtApplStsGrp` | [0..1] |
| `_SettlmtApplStsGrpStsAssgmt` | `I_SettlmtApplStsGrpStsAssgmt` | [0..1] |
| `_FrtCostAllocPrcgElmnt` | `I_FrtCostAllocPrcgElmnt` | [0..*] |
| `_RvsdFrtCostAllocDoc` | `I_FrtCostAllocDoc` | [0..1] |
| `_Extension` | `E_SettlmtMgmtDoc` | [1..1] |

## Source Code

```abap
@EndUserText.label: 'Freight Cost Allocation Document'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA'),
  privilegedAssociations:  ['_CreatedByUser']
}
@ObjectModel: {
  representativeKey: 'FreightCostAllocationDocument',
  modelingPattern: #NONE,
  supportedCapabilities : [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE],
  usageType: {
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #B,
    sizeCategory:   #XXL
  }
}
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: false
}

define view entity I_FrtCostAllocDoc
  as select from R_FrtCostAllocDoc

  association [0..*] to I_FrtCostAllocItm            as _FrtCostAllocItm            on  $projection.FreightCostAllocationDocument = _FrtCostAllocItm.FreightCostAllocationDocument
  /* Settlement Document Type */
  association [0..1] to I_SettlmtDocType             as _SettlmtDocType             on  $projection.SettlmtDocType = _SettlmtDocType.SettlmtDocType
  /* Settlement Process Type */
  association [0..1] to I_SettlmtProcessType         as _SettlmtProcessType         on  $projection.SettlmtProcessType = _SettlmtProcessType.SettlmtProcessType
  /* Settlement Application Status */
  association [0..1] to I_SettlmtApplSts             as _SettlmtApplSts             on  $projection.SettlmtApplSts = _SettlmtApplSts.SettlmtApplSts
  /*Settlement Application Status Group*/
  association [0..1] to I_SettlmtApplStsGrp          as _SettlmtApplStsGrp          on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrp.SettlmtApplStsGrp
  /*Settlmt Appl Status Group Assignment*/
  association [0..1] to I_SettlmtApplStsGrpStsAssgmt as _SettlmtApplStsGrpStsAssgmt on  $projection.SettlmtApplStsGrp = _SettlmtApplStsGrpStsAssgmt.SettlmtApplStsGrp
                                                                                    and $projection.SettlmtApplSts    = _SettlmtApplStsGrpStsAssgmt.SettlmtApplSts
  /* Pricing Elements */
  association [0..*] to I_FrtCostAllocPrcgElmnt      as _FrtCostAllocPrcgElmnt      on  $projection.FreightCostAllocationDocument = _FrtCostAllocPrcgElmnt.FreightCostAllocationDocument
  /* Reversal Information */
  association [0..1] to I_FrtCostAllocDoc            as _RvsdFrtCostAllocDoc        on  $projection.RvsdFrtCostAllocDoc = _RvsdFrtCostAllocDoc.FreightCostAllocationDocument
  /* Extension Association */
  association [1..1] to E_SettlmtMgmtDoc             as _Extension                  on  $projection.FreightCostAllocationDocument = _Extension.SettlmtMgmtDoc

{
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' } }]
      }
  key FreightCostAllocationDocument,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocTypeVH', element: 'SettlmtDocType' } }]
      }
      SettlmtDocType,
      SettlmtDocCat,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_SettlmtProcessTypeStdVH', element: 'SettlmtProcessType' } }]
      }
      SettlmtProcessType,
      SettlmtProcessCat,
      PostingDate,
      FrtCostAllocAcctgTransfSts,
      DocumentDate,
      DocumentReferenceID,
      AssignmentReference,
      SettlmtApplSts,
      SettlmtApplStsGrp,

      /* Pricing */
      PricingProcedure,
      PricingDocument,

      /* Organizational Data */
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_CompanyCodeStdVH', element: 'CompanyCode' } }]
      }
      CompanyCode,
      PurchasingOrganization,
      PurchasingGroup,
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
      @ObjectModel.foreignKey.association: '_FrtCostAllocDocCurrency'
      FrtCostAllocDocCurrency,
      ExchangeRate,
      ExchangeRateType,
      ExchangeRateIsFixed,
      ExchangeRateDate,

      /* Amount fields */
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
      FrtCostAllocDocTotGrossAmount,
      @DefaultAggregation: #SUM
      @Semantics.amount.currencyCode: 'FrtCostAllocDocCurrency'
      FrtCostAllocDocTotalNetAmount,

      /* Reversal Information */
      FrtCostAllocDocIsReversed,
      @Consumption: {
        valueHelpDefinition: [{ entity: { name: 'I_FrtCostAllocDocStdVH', element: 'FreightCostAllocationDocument' } }]
      }
      RvsdFrtCostAllocDoc,
      FrtCostAllocDocActivityReason,
      SettlmtClassificationCat,
      FiscalPeriod,
      FrtCostAllocDocIncmpltnsRsn,
      FrtCostAllocBusProcCat,

      /* Journal Entry */
      JournalEntryCreationDate,
      JournalEntryCreationTime,


      /* Associations */
      _FrtCostAllocItm,
      _FrtCostAllocPrcgElmnt,
      _SettlmtDocType,
      _SettlmtDocCat,
      _SettlmtProcessType,
      _SettlmtProcessCat,
      _FrtCostAllocAcctgTransfSts,
      _SettlmtApplSts,
      _SettlmtApplStsGrp,
      _SettlmtApplStsGrpStsAssgmt,
      _CompanyCode,
      _PurchasingOrganization,
      _PurchasingGroup,
      _SalesOrganization,
      _DistributionChannel,
      _Division,
      _SalesOffice,
      _SalesGroup,
      _CreatedByUser,
      _FrtCostAllocDocCurrency,
      _ExchangeRateType,
      _RvsdFrtCostAllocDoc,
      _FrtCostAllocDocActivityReason,
      _SettlmtClassificationCat,
      _FrtCostAllocDocIncmpltnsRsn,
      _FrtCostAllocBusProcCat
}
```
