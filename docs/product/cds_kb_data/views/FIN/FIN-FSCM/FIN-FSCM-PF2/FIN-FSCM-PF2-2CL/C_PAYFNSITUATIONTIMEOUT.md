---
name: C_PAYFNSITUATIONTIMEOUT
description: "Situation for Timeout Issue"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
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
