---
name: I_CURRENCYSTDVH
description: Currencystdvh
app_component: BC-SRV-BSF-CUR-2CL
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-BSF
  - interface-view
  - value-help
  - standard-value-help
  - currency
  - component:BC-SRV-BSF-CUR-2CL
  - lob:Basis Components
---
# I_CURRENCYSTDVH

**Currencystdvh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-BSF-CUR-2CL` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Currency` | `Currency` |
| `_Text` | *Association* |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICURRSTDVH'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey:true
@ClientHandling.algorithm: #SESSION_VARIABLE
@VDM.viewType: #COMPOSITE
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: { dataCategory: #VALUE_HELP,
                representativeKey: 'Currency',
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                usageType.serviceQuality: #A,
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                modelingPattern: #VALUE_HELP_PROVIDER }
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true 
@EndUserText.label: 'Currency'
@Search.searchable: true
@Consumption.ranked: true
define view I_CurrencyStdVH as select from I_Currency {
  @Search.defaultSearchElement: true
  @Search.ranking: #HIGH
  @Search.fuzzinessThreshold: 0.8
  @ObjectModel.text.association: '_Text'
  key Currency,
  @Consumption.hidden: true 
  @Search.ranking: #LOW
  _Text
}
```
