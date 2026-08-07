---
name: I_PAYMENTAPPROVALRULETP
description: Paymentapprovalruletp
app_component: FIN-FSCM-CLM-BAM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-CLM
  - interface-view
  - transactional-processing
  - payment
  - approval
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_PAYMENTAPPROVALRULETP

**Paymentapprovalruletp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PaymentApprovalRule` | ✓ | |  |  |
| `PaymentApprovalRuleName` |  | |  |  |
| `PaymentApprovalRuleStatus` |  | |  |  |
| `PaytApprvlDfltLmtCurrency` |  | |  |  |
| `LastChangeDateTime` |  | |  |  |
| `CreatedByUser` |  | |  |  |
| `CreationDateTime` |  | |  |  |
| `LastChangedByUser` |  | |  |  |
| `LocalLastChangeDateTime` |  | |  |  |
| `_PaymentApprovalRuleItem` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Payment Approval Rule - TP'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER,#UI_PROVIDER_PROJECTION_SOURCE],
               usageType: { serviceQuality: #B,
                            sizeCategory:   #S,
                            dataClass:      #MASTER },
               sapObjectNodeType.name: 'PaymentApprovalRule'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'PaymentApprovalRule' ],
  elementSuffix: 'ARX',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions
define root view entity I_PaymentApprovalRuleTP
  provider contract transactional_interface
  as projection on R_PaymentApprovalRuleTP as PaymentApprovalRule
{
  key PaymentApprovalRule,
      PaymentApprovalRuleName,
      PaymentApprovalRuleStatus,
      PaytApprvlDfltLmtCurrency,
      LastChangeDateTime,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt:true
      LocalLastChangeDateTime,
      /* Associations */
      _PaymentApprovalRuleItem : redirected to composition child I_PaymentApprovalRuleItemTP
}
```
