---
name: C_RECRRGSUPLRINVCTMPLITEM
description: "Recrrgsuplrinvctmplitem"
app_component: FI-FIO-AP-2CL
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
  - FI
  - consumption-view
  - item-level
  - component:FI-FIO-AP-2CL
  - lob:Finance
---
# C_RECRRGSUPLRINVCTMPLITEM

**Recrrgsuplrinvctmplitem**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AP-2CL` |
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
| `RecrrgSuplrInvcTmplItemUUID` | ✓ | | `_GlLine` | `RecrrgSuplrInvcTmplItemUUID` |  |  |
| `RecrrgSuplrInvcTmplUUID` |  | | `_GlLine` | `RecrrgSuplrInvcTmplUUID` |  |  |
| `RecrrgSuplrInvoiceTemplateItem` |  | | `_GlLine` | `RecrrgSuplrInvoiceTemplateItem` |  |  |
| `GLAccount` |  | | `_GlLine` | `GLAccount` |  |  |
| `AmountInTransactionCurrency` |  | | `_GlLine` | `AmountInTransactionCurrency` |  |  |
| `DebitCreditCode` |  | | `_GlLine` | `DebitCreditCode` |  |  |
| `DebitCreditCodeName` |  | |  | `_DebitCreditCodeText._Text[ Language = $session.system_language ].DebitCreditCodeName` |  |  |
| `IsNegativePosting` |  | | `_GlLine` | `IsNegativePosting` |  |  |
| `CompanyCode` |  | | `_GlLine` | `CompanyCode` |  |  |
| `TaxCode` |  | | `_GlLine` | `TaxCode` |  |  |
| `TaxCountry` |  | | `_GlLine` | `TaxCountry` |  |  |
| `TaxJurisdiction` |  | | `_GlLine` | `TaxJurisdiction` |  |  |
| `DocumentItemText` |  | | `_GlLine` | `DocumentItemText` |  |  |
| `CostCenter` |  | | `_GlLine` | `CostCenter` |  |  |
| `SalesDocument` |  | | `_GlLine` | `SalesDocument` |  |  |
| `SalesDocumentItem` |  | | `_GlLine` | `SalesDocumentItem` |  |  |
| `InternalOrder` |  | | `_GlLine` | `InternalOrder` |  |  |
| `SettlementReferenceDate` |  | | `_GlLine` | `SettlementReferenceDate` |  |  |
| `FundsCenter` |  | | `_GlLine` | `FundsCenter` |  |  |
| `FunctionalArea` |  | | `_GlLine` | `FunctionalArea` |  |  |
| `ProfitCenter` |  | | `_GlLine` | `ProfitCenter` |  |  |
| `Fund` |  | | `_GlLine` | `Fund` |  |  |
| `CostObject` |  | | `_GlLine` | `CostObject` |  |  |
| `ProjectNetwork` |  | | `_GlLine` | `ProjectNetwork` |  |  |
| `NetworkActivity` |  | | `_GlLine` | `NetworkActivity` |  |  |
| `WBSElementExternalID` |  | | `_GlLine` | `WBSElementExternalID` |  |  |
| `CostCtrActivityType` |  | | `_GlLine` | `CostCtrActivityType` |  |  |
| `PersonnelNumber` |  | | `_GlLine` | `PersonnelNumber` |  |  |
| `REInternalFinNumber` |  | | `_GlLine` | `REInternalFinNumber` |  |  |
| `BusinessProcess` |  | | `_GlLine` | `BusinessProcess` |  |  |
| `GrantID` |  | | `_GlLine` | `GrantID` |  |  |
| `CommitmentItem` |  | | `_GlLine` | `CommitmentItem` |  |  |
| `Quantity` |  | | `_GlLine` | `Quantity` |  |  |
| `BaseUnit` |  | | `_GlLine` | `BaseUnit` |  |  |
| `AssignmentReference` |  | | `_GlLine` | `AssignmentReference` |  |  |
| `IsNotCashDiscountLiable` |  | | `_GlLine` | `IsNotCashDiscountLiable` |  |  |
| `TaxBaseAmountInTransCrcy` |  | | `_GlLine` | `TaxBaseAmountInTransCrcy` |  |  |
| `ProfitabilitySegment` |  | | `_GlLine` | `ProfitabilitySegment` |  |  |
| `Plant` |  | | `_GlLine` | `Plant` |  |  |
| `BudgetPeriod` |  | | `_GlLine` | `BudgetPeriod` |  |  |
| `ControllingArea` |  | | `_GlLine` | `ControllingArea` |  |  |
| `JointVentureCostRecoveryCode` |  | | `_GlLine` | `JointVentureCostRecoveryCode` |  |  |
| `WorkItem` |  | | `_GlLine` | `WorkItem` |  |  |
| `TransactionCurrency` |  | | `_Tmpl` | `TransactionCurrency` |  |  |
| `_Tmpl` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Tmpl` | `C_RecrrgSuplrInvcTmpl` | [1..1] |
| `_DebitCreditCodeText` | `I_DebitCreditCode` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'G/L Items in Recurring Suplr Invc Tmpl'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #X,
  sizeCategory: #L,
  dataClass: #MIXED
}
@VDM.viewType: #CONSUMPTION
@ObjectModel.supportedCapabilities:[#EXTRACTION_DATA_SOURCE]
@ObjectModel.modelingPattern: #NONE
@ObjectModel.sapObjectNodeType.name:'RecrrgSuplrInvcTmplItm'
@ObjectModel.semanticKey: ['RecrrgSuplrInvoiceTemplateItem']
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@Analytics:{
  dataExtraction: {
    enabled: true
  }
}

define view entity C_RecrrgSuplrInvcTmplItem
  as select from I_RecrrgSuplrInvcTmplItem as _GlLine

  association [1..1] to C_RecrrgSuplrInvcTmpl as _Tmpl                on $projection.RecrrgSuplrInvcTmplUUID = _Tmpl.RecrrgSuplrInvcTmplUUID

  association [0..1] to I_DebitCreditCode     as _DebitCreditCodeText on $projection.DebitCreditCode = _DebitCreditCodeText.DebitCreditCode

{
   
  key _GlLine.RecrrgSuplrInvcTmplItemUUID                                                   as RecrrgSuplrInvcTmplItemUUID,

      _GlLine.RecrrgSuplrInvcTmplUUID                                                       as RecrrgSuplrInvcTmplUUID,

      _GlLine.RecrrgSuplrInvoiceTemplateItem                                                as RecrrgSuplrInvoiceTemplateItem,

      _GlLine.GLAccount                                                                     as GLAccount,

      _GlLine.AmountInTransactionCurrency                                                   as AmountInTransactionCurrency,

      _GlLine.DebitCreditCode                                                               as DebitCreditCode,

      _DebitCreditCodeText._Text[ Language = $session.system_language ].DebitCreditCodeName as DebitCreditCodeName,

      _GlLine.IsNegativePosting                                                             as IsNegativePosting,

      _GlLine.CompanyCode                                                                   as CompanyCode,

      _GlLine.TaxCode                                                                       as TaxCode,

      _GlLine.TaxCountry                                                                    as TaxCountry,

      _GlLine.TaxJurisdiction                                                               as TaxJurisdiction,

      _GlLine.DocumentItemText                                                              as DocumentItemText,

      _GlLine.CostCenter                                                                    as CostCenter,

      _GlLine.SalesDocument                                                                 as SalesDocument,

      _GlLine.SalesDocumentItem                                                             as SalesDocumentItem,

      _GlLine.InternalOrder                                                                 as InternalOrder,

      _GlLine.SettlementReferenceDate                                                       as SettlementReferenceDate,

      _GlLine.FundsCenter                                                                   as FundsCenter,

      _GlLine.FunctionalArea                                                                as FunctionalArea,

      _GlLine.ProfitCenter                                                                  as ProfitCenter,

      _GlLine.Fund                                                                          as Fund,

      _GlLine.CostObject                                                                    as CostObject,

      _GlLine.ProjectNetwork                                                                as ProjectNetwork,

      _GlLine.NetworkActivity                                                               as NetworkActivity,

      _GlLine.WBSElementExternalID                                                          as WBSElementExternalID,

      _GlLine.CostCtrActivityType                                                           as CostCtrActivityType,

      _GlLine.PersonnelNumber                                                               as PersonnelNumber,

      _GlLine.REInternalFinNumber                                                           as REInternalFinNumber,

      _GlLine.BusinessProcess                                                               as BusinessProcess,

      _GlLine.GrantID                                                                       as GrantID,

      _GlLine.CommitmentItem                                                                as CommitmentItem,

      @Semantics.quantity.unitOfMeasure : 'BaseUnit'
      _GlLine.Quantity                                                                      as Quantity,

      _GlLine.BaseUnit                                                                      as BaseUnit,

      _GlLine.AssignmentReference                                                           as AssignmentReference,

      _GlLine.IsNotCashDiscountLiable                                                       as IsNotCashDiscountLiable,

      _GlLine.TaxBaseAmountInTransCrcy                                                      as TaxBaseAmountInTransCrcy,

      _GlLine.ProfitabilitySegment                                                          as ProfitabilitySegment,

      _GlLine.Plant                                                                         as Plant,

      _GlLine.BudgetPeriod                                                                  as BudgetPeriod,

      _GlLine.ControllingArea                                                               as ControllingArea,

      _GlLine.JointVentureCostRecoveryCode                                                  as JointVentureCostRecoveryCode,

      _GlLine.WorkItem                                                                      as WorkItem,

      _Tmpl.TransactionCurrency                                                             as TransactionCurrency,

      _Tmpl
}
```
