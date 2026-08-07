---
name: I_PROJDMNDEXPENSEDISTRIBUTION
description: Projdmndexpensedistribution
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
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDEXPENSEDISTRIBUTION

**Projdmndexpensedistribution**

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
| `ProjDmndExpnDistrAmountCrcy` |  | |  |  |  |  |
| `ProjDmndExpnDistrRevnAmtCrcy` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_Expense` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1] |
| `_Expense` | `I_ProjectDemandExpense` | [1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.technicalName: 'IPrjDmndExpnsDst'
@VDM: { viewType                 : #BASIC,
        lifecycle.contract.type  : #PUBLIC_LOCAL_API} 

@ObjectModel: { 
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    representativeKey       : 'ProjDmndExpnDistributionUUID',
    sapObjectNodeType.name: 'ExpenseDistribution',
    usageType.dataClass     : #TRANSACTIONAL,
    usageType.serviceQuality: #A,
    usageType.sizeCategory  : #M
}

@Analytics: {
  dataExtraction: { 
    enabled: true,
    delta.changeDataCapture: {
      automatic: true
    }
  }
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Distribution of Proj Demand for Expense'

define view entity I_ProjDmndExpenseDistribution
  as select from R_ProjDmndExpenseDistribution

  association [1] to I_ProjectDemand        as _Root              on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID 
  association [1] to I_ProjectDemandExpense as _Expense           on $projection.ProjectDemandExpenseUUID = _Expense.ProjectDemandExpenseUUID

{
  key ProjDmndExpnDistributionUUID   as ProjDmndExpnDistributionUUID,
      ProjectDemandExpenseUUID       as ProjectDemandExpenseUUID,
      ProjectDemandUUID              as ProjectDemandUUID,
      ProjDmndReferencedPlanDataUUID as ProjDmndReferencedPlanDataUUID,
      ProjDmndExpnDistrPeriodVal     as ProjDmndExpnDistrPeriodVal,
      ProjDmndExpnDistrYearVal       as ProjDmndExpnDistrYearVal,
      @Semantics.amount.currencyCode: 'ProjDmndExpnDistrAmountCrcy'
      ProjDmndExpnDistrAmount        as ProjDmndExpnDistrAmount,
      @Semantics.amount.currencyCode: 'ProjDmndExpnDistrRevnAmtCrcy'
      ProjDmndExpnDistrRevenueAmt    as ProjDmndExpnDistrRevenueAmt,
      ProjDmndExpnDistrAmountCrcy    as ProjDmndExpnDistrAmountCrcy,
      ProjDmndExpnDistrRevnAmtCrcy   as ProjDmndExpnDistrRevnAmtCrcy,
      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,

      _Root,
      _Expense

}
```
