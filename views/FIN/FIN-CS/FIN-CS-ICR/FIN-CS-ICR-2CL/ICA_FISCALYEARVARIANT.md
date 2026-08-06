---
name: ICA_FISCALYEARVARIANT
description: Ica Fiscalyearvariant
app_component: FIN-CS-ICR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-ICR
  - component:FIN-CS-ICR-2CL
  - lob:Other
---
# ICA_FISCALYEARVARIANT

**Ica Fiscalyearvariant**

| Property | Value |
|---|---|
| App Component | `FIN-CS-ICR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| `mandt` | `mandt` |
| `periv` | `periv` |
| `xkale` | `xkale` |
| `xjabh` | `xjabh` |
| `anzbp` | `anzbp` |
| `anzsp` | `anzsp` |
| `xweek` | `xweek` |
| `fyofb` | `fyofb` |
| `fyofe` | `fyofe` |
| `xweekquart` | `xweekquart` |
| `xperiodquart` | `xperiodquart` |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICAFYV'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #S
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@AbapCatalog.preserveKey:true
@AbapCatalog.compiler.compareFilter:true
@ObjectModel.supportedCapabilities: [#DERIVATION_FUNCTION]
@EndUserText.label: 'Fiscal Year Variant'
define view ICA_FiscalYearVariant as select from t009 {
    mandt,
    periv,
    xkale,
    xjabh,
    anzbp,
    anzsp,
    xweek,
    fyofb,
    fyofe,
    xweekquart,
    xperiodquart
} where mandt = $session.client
```
