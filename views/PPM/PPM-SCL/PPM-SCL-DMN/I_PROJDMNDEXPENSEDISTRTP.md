---
name: I_PROJDMNDEXPENSEDISTRTP
description: Projdmndexpensedistrtp
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - transactional-processing
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDEXPENSEDISTRTP

**Projdmndexpensedistrtp**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDmndExpnDistributionUUID` | ✓ | |  |  |  |  |
| `ProjectDemandExpenseUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjDmndReferencedPlanDataUUID` |  | |  |  |  |  |
| `ProjDmndExpnDistrPeriodVal` |  | |  |  |  |  |
| `ProjDmndExpnDistrYearVal` |  | |  |  |  |  |
| `ProjDmndExpnDistrAmount` |  | |  |  |  |  |
| `ProjDmndExpnDistrRevenueAmt` |  | |  |  |  |  |
| `ProjectUUID` |  | |  |  |  |  |
| `ReferencedObjectUUID` |  | |  |  |  |  |
| `ProjDmndExpnDistrAmountCrcy` |  | |  |  |  |  |
| `ProjDmndExpnDistrRevnAmtCrcy` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_ProjectDemandExpense` | | ✓ | | | | |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {authorizationCheck   : #MANDATORY,
                 personalData.blocking: #NOT_REQUIRED}
                 
@VDM: { viewType                : #TRANSACTIONAL,
        lifecycle.contract.type : #PUBLIC_LOCAL_API}

@ObjectModel: { representativeKey     : 'ProjDmndExpnDistributionUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                modelingPattern       :  #TRANSACTIONAL_INTERFACE,
                usageType: { dataClass      : #TRANSACTIONAL,
                             serviceQuality : #B,
                             sizeCategory   : #L } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Distribution of Demand for Expense - TP'
                
define view entity I_ProjDmndExpenseDistrTP
  as projection on R_ProjDmndExpenseDistrTP as ExpenseDistribution
{
  key ProjDmndExpnDistributionUUID,
      ProjectDemandExpenseUUID,
      ProjectDemandUUID,
      ProjDmndReferencedPlanDataUUID,
      ProjDmndExpnDistrPeriodVal,
      ProjDmndExpnDistrYearVal,
      @Semantics.amount.currencyCode: 'ProjDmndExpnDistrAmountCrcy'
      ProjDmndExpnDistrAmount,
      @Semantics.amount.currencyCode: 'ProjDmndExpnDistrRevnAmtCrcy'
      ProjDmndExpnDistrRevenueAmt,
      ProjectUUID,
      ReferencedObjectUUID,
      ProjDmndExpnDistrAmountCrcy,
      ProjDmndExpnDistrRevnAmtCrcy,
      CreatedByUser,
      CreationDateTime,
      LastChangedByUser,
      LastChangeDateTime,

      _ProjectDemandExpense : redirected to parent I_ProjectDemandExpenseTP,
      _Root                 : redirected to I_ProjectDemandTP_2
}
```
