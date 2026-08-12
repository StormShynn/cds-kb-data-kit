---
name: I_SLSCONTRACTITEMBILLINGPLANTP
description: "Slscontractitembillingplantp"
app_component: SD-SLS-OA-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-OA
  - interface-view
  - transactional-processing
  - billing
  - plant
  - contract
  - item-level
  - component:SD-SLS-OA-2CL
  - lob:Sales & Distribution
  - bo:Plant
---
# I_SLSCONTRACTITEMBILLINGPLANTP

**Slscontractitembillingplantp**

| Property | Value |
|---|---|
| App Component | `SD-SLS-OA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesContract` | ✓ | |  |  |  |  |
| `SalesContractItem` | ✓ | |  |  |  |  |
| `BillingPlan` | ✓ | |  |  |  |  |
| `BillingPlanType` |  | |  |  |  |  |
| `BillingPlanStartDate` |  | |  |  |  |  |
| `BillingPlanStartDateRule` |  | |  |  |  |  |
| `ReferenceBillingPlan` |  | |  |  |  |  |
| `SalesContractType` |  | |  |  |  |  |
| `SalesOrganization` |  | |  |  |  |  |
| `DistributionChannel` |  | |  |  |  |  |
| `OrganizationDivision` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |
| `_SalesContract` | | ✓ | | | | |
| `_ItemBillingPlanItem` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Billing Plan for Sales Contract Item - TP'

@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern:        #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
     serviceQuality: #C,
     sizeCategory:   #XL,
     dataClass:      #TRANSACTIONAL
   },
   semanticKey: ['SalesContract', 'SalesContractItem', 'BillingPlan']
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_SlsContractItemBillingPlanTP
  as projection on R_SlsContractItemBillingPlanTP as SalesContractItemBillingPlan
{
  key SalesContractItemBillingPlan.SalesContract,
  key SalesContractItemBillingPlan.SalesContractItem,
  key SalesContractItemBillingPlan.BillingPlan,

      SalesContractItemBillingPlan.BillingPlanType,
      SalesContractItemBillingPlan.BillingPlanStartDate,
      SalesContractItemBillingPlan.BillingPlanStartDateRule,
      SalesContractItemBillingPlan.ReferenceBillingPlan,

      //for DCL
      @Consumption.hidden: true
      SalesContractItemBillingPlan.SalesContractType,
      @Consumption.hidden: true
      SalesContractItemBillingPlan.SalesOrganization,
      @Consumption.hidden: true
      SalesContractItemBillingPlan.DistributionChannel,
      @Consumption.hidden: true
      SalesContractItemBillingPlan.OrganizationDivision,

      //Association
      _Item                : redirected to parent I_SalesContractItemTP,
      _SalesContract       : redirected to I_SalesContractTP,
      _ItemBillingPlanItem : redirected to composition child I_SlsContrItmBillingPlanItemTP
}
```
