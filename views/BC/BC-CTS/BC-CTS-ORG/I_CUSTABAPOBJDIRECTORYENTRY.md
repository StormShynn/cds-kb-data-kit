---
name: I_CUSTABAPOBJDIRECTORYENTRY
description: Custabapobjdirectoryentry
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
# I_CUSTABAPOBJDIRECTORYENTRY

**Custabapobjdirectoryentry**

| Property | Value |
|---|---|
| App Component | `BC-CTS-ORG` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABAPObjectCategory` | ✓ | |  |  | `CHAR(4)` | Program ID in Requests and Tasks |
| `ABAPObjectType` | ✓ | |  |  | `CHAR(4)` | Object Type in Object Directory |
| `ABAPObject` | ✓ | |  |  | `CHAR(40)` | Object Name in Object Directory |
| `ABAPObjectResponsibleUser` |  | |  |  | `CHAR(12)` | Person Responsible for a Repository Object |
| `ABAPObjectIsDeleted` |  | |  |  | `CHAR(1)` | Deletion Flag |
| `ABAPPackage` |  | |  |  | `CHAR(30)` | Package |
| `ABAPSoftwareComponent` |  | |  |  | `CHAR(30)` | Software Component |
| `_CustABAPPackage` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CustABAPPackage` | `I_CustABAPPackage` | [0..1] |

## Source Code

```abap
/* ---------------------------------------------------------------
This view provides access to the set of customer defined objects
in the object directory. This information is essential for
either gaining an overview of own developments and for
determining transport properties.
A customer object is defined as an object that is assigned to a
customer package, a package assigned to a software component
with component type 'C'.
--------------------------------------------------------------- */
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Customer ABAP Object Directory Entry'
@VDM.viewType: #COMPOSITE
define view entity I_CustABAPObjDirectoryEntry
  as select from I_ABAPObjectDirectoryEntry
    join         I_CustABAPPackage on I_CustABAPPackage.ABAPPackage = I_ABAPObjectDirectoryEntry.ABAPPackage
  association [0..1] to I_CustABAPPackage as _CustABAPPackage on $projection.ABAPPackage = _CustABAPPackage.ABAPPackage
{
  key I_ABAPObjectDirectoryEntry.ABAPObjectCategory,
  key I_ABAPObjectDirectoryEntry.ABAPObjectType,
  key I_ABAPObjectDirectoryEntry.ABAPObject,
      I_ABAPObjectDirectoryEntry.ABAPObjectResponsibleUser,
      I_ABAPObjectDirectoryEntry.ABAPObjectIsDeleted,
      @ObjectModel.foreignKey.association: '_CustABAPPackage'
      I_ABAPObjectDirectoryEntry.ABAPPackage,
      I_CustABAPPackage.ABAPSoftwareComponent,
      _CustABAPPackage
}
```
