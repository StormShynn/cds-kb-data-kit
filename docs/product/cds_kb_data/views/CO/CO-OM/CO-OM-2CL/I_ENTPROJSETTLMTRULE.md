---
name: I_ENTPROJSETTLMTRULE
description: "Enterprise Project Settlement Rule"
app_component: CO-OM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value
semantic_en: "Enterprise Project Settlement Rule"
semantic_vi: "Enterprise Project Settlement Rule — CDS view cơ bản dựa trên I_EntProjElmntInternal."
keywords:
  - "enterprise"
  - "project"
  - "settlement"
  - "rule"
  - "element"
  - "controlling"
  - "object"
  - "created"
  - "user"
  - "creation"
  - "date"
  - "last"
  - "changed"
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
# I_ENTPROJSETTLMTRULE

**Enterprise Project Settlement Rule**

| Property | Value |
|---|---|
| App Component | `CO-OM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectElementUUID` | ✓ | | `_ProjSettlmtRuleWbsElement` | `ProjectElementUUID` | `RAW(16)` | Entity Guid |
| `ControllingObject` |  | | `_ProjSettlmtRuleWbsElement` | `WBSElementObject` | `CHAR(22)` | Object Number |
| `CreatedByUser` |  | | `_CtrlgObjectSettlementRule` | `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDate` |  | | `_CtrlgObjectSettlementRule` | `CreationDate` | `DATS(8)` | Created On |
| `LastChangedByUser` |  | | `_CtrlgObjectSettlementRule` | `LastChangedByUser` | `CHAR(12)` | Last Changed By |
| `LastChangeDate` |  | | `_CtrlgObjectSettlementRule` | `LastChangeDate` | `DATS(8)` | Changed On |
| `CtrlgObjectSettlementRuleName` |  | | `_CtrlgObjectSettlementRule` | `CtrlgObjectSettlementRuleName` | `CHAR(40)` | Description of Settlement Rule |
| `AllocationStructure` |  | | `_CtrlgObjectSettlementRule` | `AllocationStructure` | `CHAR(6)` | Allocation Structure for Settlement/Assessment |
| `SettlementSourceStructure` |  | | `_CtrlgObjectSettlementRule` | `SettlementSourceStructure` | `CHAR(2)` | Source Structure |
| `ControllingSettlementProfile` |  | | `_CtrlgObjectSettlementRule` | `ControllingSettlementProfile` | `CHAR(6)` | Settlement Profile |
| `AssetValueDate` |  | | `_CtrlgObjectSettlementRule` | `AssetValueDate` | `DATS(8)` | Asset Value Date |
| `SettlmtRuleLastUsgeFsclPeriod` |  | | `_CtrlgObjectSettlementRule` | `SettlmtRuleLastUsgeFsclPeriod` | `NUMC(3)` | Period of Last Use |
| `SettlmtRuleLastUsageFiscalYear` |  | | `_CtrlgObjectSettlementRule` | `SettlmtRuleLastUsageFiscalYear` | `NUMC(4)` | Year Last Used |
| `SettlmtRuleProcessingSequence` |  | | `_CtrlgObjectSettlementRule` | `SettlmtRuleProcessingSequence` | `NUMC(3)` | Hierarchy Number for Settlement |
| `SettlmtWithFreeDefinedCurrency` |  | | `_CtrlgObjectSettlementRule` | `SettlmtWithFreeDefinedCurrency` | `CHAR(1)` | Settlement of freely defined currencies & parallel ledgers |
| `LastChangeDateTime` |  | | `_CtrlgObjectSettlementRule` | `LastChangeDateTime` | `DEC(21)` | Last Change Date Time |
| `ProjectUUID` |  | | `_ProjSettlmtRuleWbsElement` | `ProjectUUID` | `RAW(16)` | Entity Guid |
| `WBSElementInternalID` |  | | `_ProjSettlmtRuleWbsElement` | `WBSElementInternalID` | `NUMC(8)` | WBS Element |
| `ControllingArea` |  | | `_ProjSettlmtRuleWbsElement` | `ControllingArea` | `CHAR(4)` | Controlling area for WBS element |
| `ProfitCenter` |  | | `_ProjSettlmtRuleWbsElement` | `ProfitCenter` | `CHAR(10)` | Profit Center |
| `CompanyCode` |  | | `_ProjSettlmtRuleWbsElement` | `CompanyCode` | `CHAR(4)` | Company code for WBS element |
| `ResponsibleCostCenter` |  | | `_ProjSettlmtRuleWbsElement` | `ResponsibleCostCenter` | `CHAR(10)` | Responsible Cost Center |
| `Plant` |  | | `_ProjSettlmtRuleWbsElement` | `Plant` | `CHAR(4)` | Plant |
| `FunctionalArea` |  | | `_ProjSettlmtRuleWbsElement` | `FunctionalArea` | `CHAR(16)` | Functional Area |
| `_EnterpriseProjectForUser` | | ✓ | | | | |
| `_EnterpriseProject` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_EnterpriseProjectForUser` | `I_EnterpriseProjectForUser` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ENTPROJSETTLMTRULE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Enterprise Project Settlement Rule'

@ObjectModel.sapObjectNodeType.name: 'ProjectSettlementRule'
@ObjectModel:{
  supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ],
  usageType:{
    serviceQuality: #C,
    sizeCategory: #L,
    dataClass: #MIXED
  }
}

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

define view entity I_EntProjSettlmtRule
  as select from I_EntProjElmntInternal                       as _ProjSettlmtRuleWbsElement
  association of one to exact one I_CtrlgObjectSettlementRule as _CtrlgObjectSettlementRule on _CtrlgObjectSettlementRule.ControllingObject = $projection.ControllingObject
  association of one to exact one I_EnterpriseProject         as _EnterpriseProject         on _EnterpriseProject.ProjectUUID = $projection.ProjectUUID
  association [0..1] to           I_EnterpriseProjectForUser  as _EnterpriseProjectForUser  on _EnterpriseProjectForUser.ProjectUUID = $projection.ProjectUUID

{
  key _ProjSettlmtRuleWbsElement.ProjectElementUUID,
      _ProjSettlmtRuleWbsElement.WBSElementObject as ControllingObject,
      
      @Semantics.user.createdBy: true
      _CtrlgObjectSettlementRule.CreatedByUser,
      @Semantics.systemDate.createdAt: true
      _CtrlgObjectSettlementRule.CreationDate,
      @Semantics.user.lastChangedBy : true
      _CtrlgObjectSettlementRule.LastChangedByUser,
      @Semantics.systemDate.lastChangedAt: true
      _CtrlgObjectSettlementRule.LastChangeDate,
      _CtrlgObjectSettlementRule.CtrlgObjectSettlementRuleName,
      _CtrlgObjectSettlementRule.AllocationStructure,
      _CtrlgObjectSettlementRule.SettlementSourceStructure,
      _CtrlgObjectSettlementRule.ControllingSettlementProfile,
      _CtrlgObjectSettlementRule.AssetValueDate,
      @Semantics.fiscal.period: true
      _CtrlgObjectSettlementRule.SettlmtRuleLastUsgeFsclPeriod,
      @Semantics.fiscal.year: true
      _CtrlgObjectSettlementRule.SettlmtRuleLastUsageFiscalYear,
      _CtrlgObjectSettlementRule.SettlmtRuleProcessingSequence,
      _CtrlgObjectSettlementRule.SettlmtWithFreeDefinedCurrency,
      // total ETag field
      @Semantics.systemDateTime.lastChangedAt: true
      _CtrlgObjectSettlementRule.LastChangeDateTime,
      
      @Semantics.uuid: true
      _ProjSettlmtRuleWbsElement.ProjectUUID,
      
      // Fields for DCL authorization (from I_EntProjElmntInternal)
      _ProjSettlmtRuleWbsElement.WBSElementInternalID,
      _ProjSettlmtRuleWbsElement.ControllingArea,
      _ProjSettlmtRuleWbsElement.ProfitCenter,
      _ProjSettlmtRuleWbsElement.CompanyCode,
      _ProjSettlmtRuleWbsElement.ResponsibleCostCenter,
      _ProjSettlmtRuleWbsElement.Plant,
      _ProjSettlmtRuleWbsElement.FunctionalArea,

      // Associations
      _EnterpriseProject,
      _EnterpriseProjectForUser,
      
      // Access control - privilaged associations
      _CtrlgObjectSettlementRule._CreatedByUser,
      _CtrlgObjectSettlementRule._LastChangedByUser
}
```
