---
name: I_CUSTABAPPACKAGE
description: "Custabappackage"
app_component: BC-CTS-ORG
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
key_user_ext_status: not_released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Not Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABAPPackage` | ✓ | |  |  | `CHAR(30)` | Package |
| `ABAPPackageResponsibleUser` |  | |  |  | `CHAR(12)` | Person responsible for a package |
| `ABAPSoftwareComponent` |  | |  |  | `CHAR(30)` | Software Component |
| `ABAPNamespace` |  | |  |  | `CHAR(10)` | Namespace |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Author |
| `CreationDate` |  | |  |  | `DATS(8)` | Created On |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Last changed by |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Changed On |

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
