---
name: I_DFLTVALSFORINVTRYMGMTANDPINV
description: Dfltvalsforinvtrymgmtandpinv
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
---
# I_DFLTVALSFORINVTRYMGMTANDPINV

**Dfltvalsforinvtrymgmtandpinv**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Plant` | ✓ | |  | `werks` |
| `DeliveryCompletedIsDefault` |  | |  | `xelik` |
| `BookSrlNmbrIsVisibleDuringCnt` |  | |  | `xsera` |
| `IsChangeDocumentsEnabled` |  | |  | `xaebl` |

## Source Code

```abap
@EndUserText.label: 'Default values IM and Physical INV'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: {
                usageType: {
                             serviceQuality: #A,
                             sizeCategory: #S,
                             dataClass: #CUSTOMIZING
                           },
                supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Metadata.ignorePropagatedAnnotations: true
@AbapCatalog.entityBuffer.definitionAllowed: true
define view entity I_DfltValsForInvtryMgmtAndPInv
  as select from t159l
{
  key werks as Plant,
      xelik as DeliveryCompletedIsDefault,
      @Semantics.booleanIndicator: true
      xsera as BookSrlNmbrIsVisibleDuringCnt,
      @Semantics.booleanIndicator: true
      xaebl as IsChangeDocumentsEnabled
}
```
