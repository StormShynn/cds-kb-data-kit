---
name: C_PAYFNSITUATIONSTATUS
description: "Situation for Status Issue"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value
semantic_en: "Situation for Status Issue"
semantic_vi: "Situation for Status Issue — CDS view tiêu dùng dựa trên I_PayFnSituationEnhanced."
keywords:
  - "situation"
  - "for"
  - "status"
  - "issue"
  - "payment"
  - "business"
  - "reason"
  - "code"
  - "text"
tags:
  - FIN
  - component:FIN-FSCM-PF2-2CL
  - consumption-view
  - FIN-FSCM
  - FIN-FSCM-PF2
  - FIN-FSCM-PF2-2CL
  - lob:finance
---
# C_PAYFNSITUATIONSTATUS

**Situation for Status Issue**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PayFnPaymentUUID` | ✓ | |  |  | `RAW(16)` | Payment UUID |
| `PayFnBusinessStatus` |  | |  |  | `CHAR(4)` | Payment Business Status |
| `PayFnStatusReasonISOCode` |  | |  |  | `CHAR(35)` | Status Reason Standard ISO Code |
| `PayFnBusinessStatusText` |  | |  |  | `CHAR(140)` | Payment Business Status Description |
| `PaymentStatusReasonText` |  | |  |  | `CHAR(140)` | ISO Code Name |
| `PayFnNotificationDurationHr` |  | |  |  | `DEC(10)` |  |
| `SitnBaseTemplateID` |  | |  |  | `CHAR(40)` | Situation Scenario ID |
| `SitnConfignTemplateID` |  | |  |  | `CHAR(40)` | Situation Template ID |
| `SitnTypeID` |  | |  |  | `CHAR(40)` | Situation Type ID |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PAYFNSITUATIONSTATUS')/$value)*

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
  semanticKey: ['PayFnPaymentUUID']
}

@VDM.viewType: #CONSUMPTION

@EndUserText.label: 'Situation for Status Issue'
define view entity C_PayFnSituationStatus 
  as select from I_PayFnSituationEnhanced
{ 
  key PayFnPaymentUUID,
    
      PayFnBusinessStatus,
      PayFnStatusReasonISOCode,
      
      PayFnBusinessStatusText,
      PaymentStatusReasonText,
      PayFnNotificationDurationHr,
      
      SitnBaseTemplateID,
      SitnConfignTemplateID,
      SitnTypeID
  
}where PayFnNotificationDurationHr is null and //Not notified by situation
     ( PayFnBusinessStatus  = 'BS03'  or       //Rejected Internally
       PayFnBusinessStatus  = 'BS05'  or       //Rejected by Approver
       PayFnBusinessStatus  = 'BS09' );        //Rejected by Bank
```
