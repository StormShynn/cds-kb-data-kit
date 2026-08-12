---
name: I_CRDTMBUSINESSPARTNERTP
description: "CRDTMBusiness PartnerTP"
app_component: FIN-FIO-CCD-CR-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - interface-view
  - transactional-processing
  - business-partner
  - partner
  - component:FIN-FIO-CCD-CR-2CL
  - lob:Other
  - bo:BusinessPartner
---
# I_CRDTMBUSINESSPARTNERTP

**CRDTMBusiness PartnerTP**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  |  |  |
| `CrdtMgmtBusinessPartnerGroup` |  | |  |  |  |  |
| `CreditWorthinessScoreValue` |  | |  |  |  |  |
| `CrdtWrthnssScoreValdtyEndDate` |  | |  |  |  |  |
| `CrdtWorthinessScoreLastChgDate` |  | |  |  |  |  |
| `CalcdCrdtWorthinessScoreValue` |  | |  |  |  |  |
| `CreditRiskClass` |  | |  |  |  |  |
| `CalculatedCreditRiskClass` |  | |  |  |  |  |
| `CreditRiskClassLastChangeDate` |  | |  |  |  |  |
| `CreditCheckRule` |  | |  |  |  |  |
| `CreditScoreAndLimitCalcRule` |  | |  |  |  |  |
| `CustBusinessRelshpStartYear` |  | |  |  |  |  |
| `_CreditMgmtAccountTP` | | ✓ | | | | |
| `_CrdtMBPCollateralTP` | | ✓ | | | | |
| `_CrdtMBPCreditInsuranceTP` | | ✓ | | | | |
| `_CrdtMBPNegativeEventTP` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Business Partners - TP'

@AccessControl.authorizationCheck: #MANDATORY

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   sapObjectNodeType:{
      name: 'CreditMgmtBusinessPartner'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #X,
     sizeCategory:   #L,
     dataClass:      #MASTER
   },
   semanticKey: ['BusinessPartner']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define root view entity I_CrdtMBusinessPartnerTP
  provider contract transactional_interface
  as projection on R_CrdtMBusinessPartnerTP as CrdtMgmtBusinessPartner
{

  key     BusinessPartner,
          CrdtMgmtBusinessPartnerGroup,

          CreditWorthinessScoreValue,
          CrdtWrthnssScoreValdtyEndDate,
          CrdtWorthinessScoreLastChgDate,
          CalcdCrdtWorthinessScoreValue,

          CreditRiskClass,
          CalculatedCreditRiskClass,
          CreditRiskClassLastChangeDate,

          CreditCheckRule,
          CreditScoreAndLimitCalcRule,

          CustBusinessRelshpStartYear,

          // BO Composition
          _CreditMgmtAccountTP : redirected to composition child I_CreditMgmtAccountTP,
          _CrdtMBPCollateralTP : redirected to composition child I_CrdtMgmtBPCollateralTP,
          _CrdtMBPCreditInsuranceTP : redirected to composition child I_CrdtMgmtBPCreditInsuranceTP,
          _CrdtMBPNegativeEventTP : redirected to composition child I_CrdtMgmtBPNegativeEventTP,

          // Exposed Associations (for DCL)
          _BusinessPartner

}
```
