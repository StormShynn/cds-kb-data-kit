---
name: I_ENTPROJSETTLMTDISTRRULE
description: "Ent Project Settlement Distribution Rule"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value
semantic_en: "Ent Project Settlement Distribution Rule"
semantic_vi: "Ent Project Settlement Distribution Rule — CDS view cơ bản dựa trên I_EntProjElmntInternal."
keywords:
  - "ent"
  - "project"
  - "settlement"
  - "distribution"
  - "rule"
  - "element"
  - "ledger"
  - "group"
  - "settlmt"
  - "distr"
  - "sequence"
tags:
  - CO
  - bo:project
  - CO-OM
  - CO-OM-2CL
  - component:CO-OM-2CL
  - interface-view
  - lob:controlling
  - project
---
# I_ENTPROJSETTLMTDISTRRULE

**Ent Project Settlement Distribution Rule**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` | ✓ | | `_ProjSettlmtRuleWbsElement` | `ProjectElementUUID` | `RAW(16)` | Entity Guid |
| `Ledger` | ✓ | | `_CtrlgObjSettlmtDistrRule` | `Ledger` | `CHAR(2)` | Ledger in General Ledger Accounting |
| `LedgerGroup` | ✓ | | `_CtrlgObjSettlmtDistrRule` | `LedgerGroup` | `CHAR(4)` | Ledger Group |
| `SettlmtDistrRuleSequence` | ✓ | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistrRuleSequence` | `NUMC(7)` | Sequence Number of Distribution Rule |
| `SettlementDistributionRuleGrp` | ✓ | | `_CtrlgObjSettlmtDistrRule` | `SettlementDistributionRuleGrp` | `NUMC(10)` | Distribution Rule Group |
| `ControllingObject` |  | | `_ProjSettlmtRuleWbsElement` | `WBSElementObject` | `CHAR(22)` | Object Number |
| `ProjectUUID` |  | | `_ProjSettlmtRuleWbsElement` | `ProjectUUID` | `RAW(16)` | Entity Guid |
| `SettlementType` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementType` | `CHAR(3)` | Settlement Type |
| `ValidityStartFiscalYear` |  | | `_CtrlgObjSettlmtDistrRule` | `ValidityStartFiscalYear` | `NUMC(4)` | Valid-from Year |
| `ValidityStartFiscalPeriod` |  | | `_CtrlgObjSettlmtDistrRule` | `ValidityStartFiscalPeriod` | `NUMC(3)` | Valid-from Period |
| `ValidityEndFiscalYear` |  | | `_CtrlgObjSettlmtDistrRule` | `ValidityEndFiscalYear` | `NUMC(4)` | Valid-to Year |
| `ValidityEndFiscalPeriod` |  | | `_CtrlgObjSettlmtDistrRule` | `ValidityEndFiscalPeriod` | `NUMC(3)` | Valid To |
| `SettlementPercentageRate` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementPercentageRate` | `DEC(5)` | Settlement Percentage Rate |
| `SettlementEquivalenceFactor` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementEquivalenceFactor` | `DEC(10)` | Equivalence Number for Order Settlement |
| `SettlementAmount` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementAmount` | `CURR(23)` | Amount for Amount Rule |
| `SettlementTransaction` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementTransaction` | `CHAR(4)` | Settlement Transaction |
| `SettlementAmountCurrency` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementAmountCurrency` | `CUKY(5)` | Currency for the Amount in the Amount Rule |
| `SettlementDistrAmountRuleType` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementDistrAmountRuleType` | `CHAR(2)` | Amount Rule Type |
| `SettlmtDistrManipulationRule` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistrManipulationRule` | `CHAR(4)` | Manipulation Rule |
| `SettlmtDistrRuleSrceAssignment` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistrRuleSrceAssignment` | `CHAR(3)` | Source Assignment |
| `SettlmtDistributionRuleNumber` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistributionRuleNumber` | `NUMC(7)` | Distribution Rule Number |
| `SettlmtDistrRuleIsUsedInLedger` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistrRuleIsUsedInLedger` | `CHAR(1)` | Distribution Rule was used in Ledger Settlement |
| `AccountAssignmentType` |  | | `_CtrlgObjSettlmtDistrRule` | `AccountAssignmentType` | `CHAR(2)` | Account Assignment Type |
| `SettlementReceiver` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementReceiver` | `CHAR(22)` | Object Number for Settlement Receiver |
| `SettlementDefaultRule` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementDefaultRule` | `CHAR(3)` | Default Rule |
| `GLAccount` |  | | `_CtrlgObjSettlmtDistrRule` | `GLAccount` | `CHAR(10)` | G/L Account Number |
| `ProfitCenter` |  | | `_CtrlgObjSettlmtDistrRule` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `BusinessArea` |  | | `_CtrlgObjSettlmtDistrRule` | `BusinessArea` | `CHAR(4)` | Business Area |
| `CostCenter` |  | | `_CtrlgObjSettlmtDistrRule` | `CostCenter` | `CHAR(10)` | Cost Center |
| `OrderID` |  | | `_CtrlgObjSettlmtDistrRule` | `OrderID` | `CHAR(12)` | Order Number |
| `WBSElementInternalID` |  | | `_CtrlgObjSettlmtDistrRule` | `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `MasterFixedAsset` |  | | `_CtrlgObjSettlmtDistrRule` | `MasterFixedAsset` | `CHAR(12)` | Main Asset Number |
| `FixedAsset` |  | | `_CtrlgObjSettlmtDistrRule` | `FixedAsset` | `CHAR(4)` | Asset Subnumber |
| `CompanyCode` |  | | `_CtrlgObjSettlmtDistrRule` | `CompanyCode` | `CHAR(4)` | Company Code |
| `ProfitabilitySegment` |  | | `_CtrlgObjSettlmtDistrRule` | `ProfitabilitySegment` | `CHAR(10)` | Profitability Segment |
| `SettlementDistrRuleRmngAmount` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementDistrRuleRmngAmount` | `CURR(23)` | Remaining Amount for Amount Settlement w. Amount Rule Cat. |
| `ControllingArea` |  | | `_CtrlgObjSettlmtDistrRule` | `ControllingArea` | `CHAR(4)` | Controlling Area |
| `ServiceDocumentType` |  | | `_CtrlgObjSettlmtDistrRule` | `ServiceDocumentType` | `CHAR(4)` | Service Document Type |
| `ServiceDocument` |  | | `_CtrlgObjSettlmtDistrRule` | `ServiceDocument` | `CHAR(10)` | Service Document ID |
| `ServiceDocumentItem` |  | | `_CtrlgObjSettlmtDistrRule` | `ServiceDocumentItem` | `NUMC(6)` | Service Document Item ID |
| `SettlementDistributionRuleUUID` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlementDistributionRuleUUID` | `RAW(16)` | Unique ID of a Distribution Rule |
| `SettlmtDistrRulePassDownUUID` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtDistrRulePassDownUUID` | `RAW(16)` | Unique ID of a Pass-Down Distribution Rule |
| `SettlmtRule1stUsgeFiscalPeriod` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtRule1stUsgeFiscalPeriod` | `NUMC(3)` | Period of First Use |
| `SettlmtRule1stUsageFiscalYear` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtRule1stUsageFiscalYear` | `NUMC(4)` | Year First Used |
| `SettlmtRuleLastUsgeFsclPeriod` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtRuleLastUsgeFsclPeriod` | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` |  | | `_CtrlgObjSettlmtDistrRule` | `SettlmtRuleLastUsageFiscalYear` | `NUMC(4)` | Year Last Used |
| `SenderProfitCenter` |  | | `_ProjSettlmtRuleWbsElement` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `SenderCompanyCode` |  | | `_ProjSettlmtRuleWbsElement` | `CompanyCode` | `CHAR(4)` | Company code for WBS element |
| `SenderResponsibleCostCenter` |  | | `_ProjSettlmtRuleWbsElement` | `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `SenderPlant` |  | | `_ProjSettlmtRuleWbsElement` | `Plant` | `CHAR(4)` | Plant |
| `SenderFunctionalArea` |  | | `_ProjSettlmtRuleWbsElement` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `SenderProjectType` |  | | `_ProjSettlmtRuleWbsElement._EnterpriseProject` | `EnterpriseProjectType` | `CHAR(2)` | Project Type |
| `SenderProjectProfileCode` |  | | `_ProjSettlmtRuleWbsElement._EnterpriseProject` | `ProjectProfileCode` | `CHAR(7)` | Project Profile |
| `_EnterpriseProjectForUser` | | ✓ | | | | |
| `_ProjectSettlementRule` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProjectForUser` | `I_EnterpriseProjectForUser` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTDISTRRULE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Ent Project Settlement Distribution Rule'

@ObjectModel:{
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType:{
    serviceQuality: #X,
    sizeCategory: #S,
    dataClass: #MIXED
  }
}

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_EntProjSettlmtDistrRule
  as select from I_EntProjElmntInternal                      as _ProjSettlmtRuleWbsElement
  inner join I_CtrlgObjSettlmtDistrRule                      as _CtrlgObjSettlmtDistrRule on _ProjSettlmtRuleWbsElement.WBSElementObject = _CtrlgObjSettlmtDistrRule.ControllingObject
  association of one to exact one I_EnterpriseProject        as _EnterpriseProject        on _EnterpriseProject.ProjectUUID = $projection.ProjectUUID
  association [0..1] to           I_EnterpriseProjectForUser as _EnterpriseProjectForUser on _EnterpriseProjectForUser.ProjectUUID = $projection.ProjectUUID
  association of one to exact one I_EntProjSettlmtRule       as _ProjectSettlementRule    on $projection.ProjectElementUUID = _ProjectSettlementRule.ProjectElementUUID
{
  key _ProjSettlmtRuleWbsElement.ProjectElementUUID,
  key _CtrlgObjSettlmtDistrRule.Ledger,
  key _CtrlgObjSettlmtDistrRule.LedgerGroup,
  key _CtrlgObjSettlmtDistrRule.SettlmtDistrRuleSequence,
  key _CtrlgObjSettlmtDistrRule.SettlementDistributionRuleGrp,
      _ProjSettlmtRuleWbsElement.WBSElementObject             as ControllingObject,
      _ProjSettlmtRuleWbsElement.ProjectUUID,
      _CtrlgObjSettlmtDistrRule.SettlementType,

      @Semantics.fiscal.year: true
      _CtrlgObjSettlmtDistrRule.ValidityStartFiscalYear,

      @Semantics.fiscal.period: true
      _CtrlgObjSettlmtDistrRule.ValidityStartFiscalPeriod,

      @Semantics.fiscal.year: true
      _CtrlgObjSettlmtDistrRule.ValidityEndFiscalYear,

      @Semantics.fiscal.period: true
      _CtrlgObjSettlmtDistrRule.ValidityEndFiscalPeriod,

      _CtrlgObjSettlmtDistrRule.SettlementPercentageRate,
      _CtrlgObjSettlmtDistrRule.SettlementEquivalenceFactor,
      @Semantics.amount.currencyCode: 'SettlementAmountCurrency'
      _CtrlgObjSettlmtDistrRule.SettlementAmount,
      _CtrlgObjSettlmtDistrRule.SettlementTransaction,
      _CtrlgObjSettlmtDistrRule.SettlementAmountCurrency,
      _CtrlgObjSettlmtDistrRule.SettlementDistrAmountRuleType,
      _CtrlgObjSettlmtDistrRule.SettlmtDistrManipulationRule,
      _CtrlgObjSettlmtDistrRule.SettlmtDistrRuleSrceAssignment,
      _CtrlgObjSettlmtDistrRule.SettlmtDistributionRuleNumber,
      _CtrlgObjSettlmtDistrRule.SettlmtDistrRuleIsUsedInLedger,
      _CtrlgObjSettlmtDistrRule.AccountAssignmentType,
      _CtrlgObjSettlmtDistrRule.SettlementReceiver,
      _CtrlgObjSettlmtDistrRule.SettlementDefaultRule,
      _CtrlgObjSettlmtDistrRule.GLAccount,
      _CtrlgObjSettlmtDistrRule.ProfitCenter,
      _CtrlgObjSettlmtDistrRule.BusinessArea,
      _CtrlgObjSettlmtDistrRule.CostCenter,
      _CtrlgObjSettlmtDistrRule.OrderID,
      _CtrlgObjSettlmtDistrRule.WBSElementInternalID,
      _CtrlgObjSettlmtDistrRule.MasterFixedAsset,
      _CtrlgObjSettlmtDistrRule.FixedAsset,
      _CtrlgObjSettlmtDistrRule.CompanyCode,
      _CtrlgObjSettlmtDistrRule.ProfitabilitySegment,
      @Semantics.amount.currencyCode: 'SettlementAmountCurrency'
      _CtrlgObjSettlmtDistrRule.SettlementDistrRuleRmngAmount,
      _CtrlgObjSettlmtDistrRule.ControllingArea,
      
      _CtrlgObjSettlmtDistrRule.ServiceDocumentType,
      _CtrlgObjSettlmtDistrRule.ServiceDocument,
      _CtrlgObjSettlmtDistrRule.ServiceDocumentItem,
      _CtrlgObjSettlmtDistrRule.SettlementDistributionRuleUUID,
      _CtrlgObjSettlmtDistrRule.SettlmtDistrRulePassDownUUID,
       
      _CtrlgObjSettlmtDistrRule.SettlmtRule1stUsgeFiscalPeriod,
      _CtrlgObjSettlmtDistrRule.SettlmtRule1stUsageFiscalYear,
      _CtrlgObjSettlmtDistrRule.SettlmtRuleLastUsgeFsclPeriod,
      _CtrlgObjSettlmtDistrRule.SettlmtRuleLastUsageFiscalYear,
 
       // Sender Project Fields for DCL authorization (from I_EntProjElmntInternal)
      _ProjSettlmtRuleWbsElement.ProfitCenter                             as SenderProfitCenter,
      _ProjSettlmtRuleWbsElement.CompanyCode                              as SenderCompanyCode,
      _ProjSettlmtRuleWbsElement.ResponsibleCostCenter                    as SenderResponsibleCostCenter,
      _ProjSettlmtRuleWbsElement.Plant                                    as SenderPlant,
      _ProjSettlmtRuleWbsElement.FunctionalArea                           as SenderFunctionalArea,
      _ProjSettlmtRuleWbsElement._EnterpriseProject.EnterpriseProjectType as SenderProjectType,
      _ProjSettlmtRuleWbsElement._EnterpriseProject.ProjectProfileCode    as SenderProjectProfileCode,
      
       // Associations
      _ProjectSettlementRule,
      _EnterpriseProject,
      _EnterpriseProjectForUser
}
```
