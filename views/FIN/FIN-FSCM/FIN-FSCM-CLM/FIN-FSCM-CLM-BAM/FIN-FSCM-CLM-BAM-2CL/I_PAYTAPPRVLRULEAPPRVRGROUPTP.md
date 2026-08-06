---
name: I_PAYTAPPRVLRULEAPPRVRGROUPTP
description: Paytapprvlruleapprvrgrouptp
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
  - component:FIN-FSCM-CLM-BAM-2CL
  - lob:Other
---
# I_PAYTAPPRVLRULEAPPRVRGROUPTP

**Paytapprvlruleapprvrgrouptp**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-CLM-BAM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PaymentApprovalRule` | `PaymentApprovalRule` |
| key `PaymentApprovalRuleItem` | `PaymentApprovalRuleItem` |
| key `PaymentApproverGroupNumber` | `PaymentApproverGroupNumber` |
| `PaymentApproverGroup` | `PaymentApproverGroup` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDateTime` | `CreationDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `LocalLastChangeDateTime` | `LocalLastChangeDateTime` |
| `_PaymentApprovalRule` | *Association* |
| `_PaymentApprovalRuleItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Approver Groups of an Approval Item - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{ modelingPattern:  #TRANSACTIONAL_INTERFACE,
               supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
               usageType: { serviceQuality: #C,
                            sizeCategory: #M,
                            dataClass: #MASTER },
               sapObjectNodeType.name: 'PaytApprovalRuleApproverGroup'}
@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #TRANSACTIONAL }

@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: [ 'PaytApprovalRuleApproverGroup' ],
  elementSuffix: 'ARG',
  quota: { maximumFields: 100, maximumBytes: 100000 }
}
@AbapCatalog.extensibility.allowNewCompositions

define view entity I_PaytApprvlRuleApprvrGroupTP
  as projection on R_PaytApprvlRuleApprvrGroupTP as PaytApprovalRuleApproverGroup
{
  key PaymentApprovalRule,
  key PaymentApprovalRuleItem,
  key PaymentApproverGroupNumber,
      PaymentApproverGroup,
      @Semantics.user.createdBy: true
      CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser,
      @Semantics.systemDateTime.localInstanceLastChangedAt:true
      LocalLastChangeDateTime,
      /* Associations */
      _PaymentApprovalRule : redirected to I_PaymentApprovalRuleTP,
      _PaymentApprovalRuleItem : redirected to parent I_PaymentApprovalRuleItemTP
}
```
