---
name: I_CREDITMANAGEMENTBP
description: "Credit ManagementMENTBP"
app_component: FIN-FSCM-CR-2CL
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  | `partner` |  |  |
| `BusinessPartnerName` |  | | `_BusinessPartner` | `BusinessPartnerName` |  |  |
| `AuthorizationGroup` |  | | `_BusinessPartner` | `AuthorizationGroup` |  |  |
| `CreditCheckRule` |  | |  | `check_rule` |  |  |
| `CreditScoreAndLimitCalcRule` |  | |  | `limit_rule` |  |  |
| `CreditRiskClass` |  | |  | `risk_class` |  |  |
| `CreditAccountGroup` |  | |  | `credit_group` |  |  |
| `CrdtMgmtBusinessPartnerGroup` |  | |  | `credit_group` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_CreditRiskClass` | | ✓ | | | | |

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
