---
name: C_PAYFNSITUATIONTIMEOUT
description: "Situation for Timeout Issue"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value
semantic_en: "Situation for Timeout Issue"
semantic_vi: "Situation for Timeout Issue — CDS view tiêu dùng dựa trên I_PayFnSituationEnhanced."
keywords:
  - "situation"
  - "for"
  - "timeout"
  - "issue"
  - "related"
  - "generic"
  - "object"
  - "type"
  - "funcnl"
  - "approval"
  - "code"
  - "desc"
  - "notify"
  - "duration"
tags:
  - FIN
  - component:FIN-FSCM-PF2-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - FIN-FSCM-PF2-2CL
  - lob:finance
---
# C_PAYFNSITUATIONTIMEOUT

**Situation for Timeout Issue**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-PF2-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PayFnSetUUID` | ✓ | |  |  | `RAW(16)` | Object UUID |
| `PayFnRelatedGenericObjectType` |  | |  |  | `CHAR(10)` | Linked Object Type - Right Side |
| `PayFnFuncnlApprovalCodeDesc` |  | |  |  | `CHAR(36)` | Functional payment approval classifier - Description text |
| `PayFnNotifyTimeoutDurationHr` |  | |  |  | `DEC(10)` |  |
| `PayFnApprovalDurationHr` |  | |  | `max(PayFnApprovalDurationHr)` | `DEC(10)` |  |
| `PayFnNumberOfPayments` |  | |  | `count(*)` | `INT4(10)` |  |
| `SitnBaseTemplateID` |  | |  |  | `CHAR(40)` | Situation Scenario ID |
| `SitnConfignTemplateID` |  | |  |  | `CHAR(40)` | Situation Template ID |
| `SitnTypeID` |  | |  |  | `CHAR(40)` | Situation Type ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONTIMEOUT')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl:{
  authorizationCheck: #MANDATORY,
  personalData.blocking: #REQUIRED
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType:{
  serviceQuality: #C,
  sizeCategory: #XL,
  dataClass: #MIXED
}
@ObjectModel:{
  supportedCapabilities: [#SITUATION_ANCHOR, #SITUATION_TRIGGER],
  semanticKey: ['PayFnSetUUID']
}

@VDM.viewType: #CONSUMPTION
@EndUserText.label: 'Situation for Timeout Issue'
define view entity C_PayFnSituationTimeout 
  as select from I_PayFnSituationEnhanced
{ 
  key PayFnSetUUID,
            
      PayFnRelatedGenericObjectType,
      PayFnFuncnlApprovalCodeDesc,
      
      PayFnNotifyTimeoutDurationHr,
      
      @EndUserText.label: 'Approval Duration'
      max(PayFnApprovalDurationHr) as PayFnApprovalDurationHr,
      
      count(*) as PayFnNumberOfPayments,
      
      SitnBaseTemplateID,
      SitnConfignTemplateID,
      SitnTypeID
}
where PayFnRelatedGenericObjectType = 'PAYMENT' and
      PayFnNotifyTimeoutDurationHr is null
group by PayFnRelatedGenericObjectType,
         PayFnSetUUID,
         PayFnFuncnlApprovalCodeDesc,
         PayFnNotifyTimeoutDurationHr,
         SitnBaseTemplateID,
         SitnConfignTemplateID,
         SitnTypeID
```
