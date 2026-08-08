---
name: I_PROJECTDEMANDEXPENSE
description: "Projectdemandexpense"
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
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Project
---
# I_PROJECTDEMANDEXPENSE

**Projectdemandexpense**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandExpenseUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `ProjectDemandExpenseType` |  | |  |  |  |  |
| `ProjDmndBillingControlCategory` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `_Root` | | ✓ | | | | |
| `_ExpenseDistribution` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Root` | `I_ProjectDemand` | [1..1] |
| `_ExpenseDistribution` | `I_ProjDmndExpenseDistribution` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@VDM: { viewType                 : #BASIC,
        lifecycle.contract.type  : #PUBLIC_LOCAL_API} 

@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #EXTRACTION_DATA_SOURCE ],
    representativeKey       : 'ProjectDemandExpenseUUID',
    sapObjectNodeType.name: 'Expense',
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
@EndUserText.label: 'Project Demand for Expense'

define view entity I_ProjectDemandExpense
  as select from R_ProjectDemandExpense

  association [1..1] to I_ProjectDemand               as _Root                on $projection.ProjectDemandUUID = _Root.ProjectDemandUUID
  association [0..*] to I_ProjDmndExpenseDistribution as _ExpenseDistribution on $projection.ProjectDemandExpenseUUID = _ExpenseDistribution.ProjectDemandExpenseUUID

{
  key ProjectDemandExpenseUUID       as ProjectDemandExpenseUUID,
      ProjectDemandUUID              as ProjectDemandUUID,
      ProjectDemandExpenseType       as ProjectDemandExpenseType,
      ProjDmndBillingControlCategory as ProjDmndBillingControlCategory,
      @Semantics.user.createdBy: true
      CreatedByUser                  as CreatedByUser,
      @Semantics.systemDateTime.createdAt: true
      CreationDateTime               as CreationDateTime,
      @Semantics.user.lastChangedBy: true
      LastChangedByUser              as LastChangedByUser,
      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime             as LastChangeDateTime,
      
      //      Associations
      _Root,
      _ExpenseDistribution

}
```
