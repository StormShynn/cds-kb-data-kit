---
name: I_CREDITMANAGEMENTBP
description: Credit ManagementMENTBP
app_component: FIN-FSCM-CR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CR
  - interface-view
  - credit
  - component:FIN-FSCM-CR-2CL
  - lob:Other
---
# I_CREDITMANAGEMENTBP

**Credit ManagementMENTBP**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `BusinessPartner` | `partner` |
| `BusinessPartnerName` | `_BusinessPartner.BusinessPartnerName` |
| `AuthorizationGroup` | `_BusinessPartner.AuthorizationGroup` |
| `CreditCheckRule` | `check_rule` |
| `CreditScoreAndLimitCalcRule` | `limit_rule` |
| `CreditRiskClass` | `risk_class` |
| `CreditAccountGroup` | `credit_group` |
| `CrdtMgmtBusinessPartnerGroup` | `credit_group` |
| `_BusinessPartner` | *Association* |
| `_CreditRiskClass` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CreditRiskClass` | `I_CreditRiskClass` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICREDMGMNTBP'
@AbapCatalog.compiler.compareFilter:true
@EndUserText.label: 'Credit Management Business Partner'
@VDM.viewType: #BASIC
//@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@Analytics: { dataCategory: #DIMENSION }
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #REQUIRED
@AccessControl.personalData.blockingIndicator:[ '_BusinessPartner.AuthorizationGroup' ]
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'BusinessPartner' 
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET ]
define view I_CreditManagementBP
  as select from ukmbp_cms

  association [0..1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [1..1] to I_CreditRiskClass as _CreditRiskClass on $projection.CreditRiskClass = _CreditRiskClass.CreditRiskClass
{
      @ObjectModel.text.element: ['BusinessPartnerName']
  key partner      as BusinessPartner,

      @Semantics.text:true
      _BusinessPartner.BusinessPartnerName,
      _BusinessPartner.AuthorizationGroup,
      //OWN_RATING
      check_rule   as CreditCheckRule,
      limit_rule   as CreditScoreAndLimitCalcRule,
      //RATING_VAL_DATE
      //RATING_CHG_DATE
      //ALTERNATE_BP
      //OWN_RATING_CALC
      risk_class   as CreditRiskClass,
      //RISK_CLASS_CALC
      //RISK_CLASS_CHGDT

      credit_group as CreditAccountGroup, //obsolete, wrong GFN used

      credit_group as CrdtMgmtBusinessPartnerGroup,

      _BusinessPartner,
      _CreditRiskClass
}
```
