---
name: I_CUSTABAPPACKAGE
description: Custabappackage
app_component: BC-CTS-ORG
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-CTS
  - BC-CTS-ORG
  - interface-view
  - component:BC-CTS-ORG
  - lob:Basis Components
---
# I_CUSTABAPPACKAGE

**Custabappackage**

| Property | Value |
|---|---|
| App Component | `BC-CTS-ORG` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ABAPPackage` | `I_ABAPPackage.ABAPPackage` |
| `ABAPPackageResponsibleUser` | `I_ABAPPackage.ABAPPackageResponsibleUser` |
| `ABAPSoftwareComponent` | `I_ABAPPackage.ABAPSoftwareComponent` |
| `ABAPNamespace` | `I_ABAPPackage.ABAPNamespace` |
| `CreatedByUser` | `I_ABAPPackage.CreatedByUser` |
| `CreationDate` | `I_ABAPPackage.CreationDate` |
| `LastChangedByUser` | `I_ABAPPackage.LastChangedByUser` |
| `LastChangeDate` | `I_ABAPPackage.LastChangeDate` |

## Source Code

```abap
/* ---------------------------------------------------------------
This view provides access to the set of customer defined packages
for software structuring and delivery. Customer packages are
defined by the fact that they are assigned to a software component
with component type 'B' (add-on), 'J' (local) or 'K' (customer)
--------------------------------------------------------------- */
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Customer ABAP Package'
@VDM.viewType: #COMPOSITE
@ObjectModel.compositionRoot: true
@ObjectModel.representativeKey: 'ABAPPackage'
define view entity I_CustABAPPackage
  as select from I_ABAPPackage
    join         I_ABAPSoftwareComponent on I_ABAPSoftwareComponent.ABAPSoftwareComponent = I_ABAPPackage.ABAPSoftwareComponent
{
  key I_ABAPPackage.ABAPPackage,
      I_ABAPPackage.ABAPPackageResponsibleUser,
      I_ABAPPackage.ABAPSoftwareComponent,
      I_ABAPPackage.ABAPNamespace,
      I_ABAPPackage.CreatedByUser,
      I_ABAPPackage.CreationDate,
      I_ABAPPackage.LastChangedByUser,
      I_ABAPPackage.LastChangeDate
}
where ( 
  I_ABAPSoftwareComponent.ABAPSoftwareComponentType = 'C' or
  I_ABAPSoftwareComponent.ABAPSoftwareComponentType = 'B' or
  I_ABAPSoftwareComponent.ABAPSoftwareComponentType = 'J' or
  I_ABAPSoftwareComponent.ABAPSoftwareComponentType = 'K'
)
```
