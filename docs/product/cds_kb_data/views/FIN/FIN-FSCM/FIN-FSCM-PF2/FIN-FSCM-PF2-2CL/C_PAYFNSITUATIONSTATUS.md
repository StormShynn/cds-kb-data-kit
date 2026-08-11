---
name: C_PAYFNSITUATIONSTATUS
description: "Situation for Status Issue"
app_component: FIN-FSCM-PF2-2CL
software_component: SAPSCORE
release_state: released
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
