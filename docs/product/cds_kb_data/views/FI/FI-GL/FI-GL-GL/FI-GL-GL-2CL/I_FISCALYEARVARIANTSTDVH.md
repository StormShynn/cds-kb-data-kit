---
name: I_FISCALYEARVARIANTSTDVH
description: "Fiscalyearvariantstdvh"
app_component: FI-GL-GL-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - value-help
  - standard-value-help
  - component:FI-GL-GL-2CL
  - lob:Finance
---
# I_FISCALYEARVARIANTSTDVH

**Fiscalyearvariantstdvh**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYearVariant` | ✓ | |  |  |  |  |

## Source Code

```abap
@VDM: {lifecycle.contract.type: #PUBLIC_LOCAL_API,
       viewType: #BASIC 
}
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@EndUserText.label: 'Fiscal Year Variant'
@ObjectModel: { dataCategory: #VALUE_HELP,
                usageType: { serviceQuality: #A, 
                             sizeCategory: #S,     
                             dataClass: #CUSTOMIZING},
                modelingPattern: #VALUE_HELP_PROVIDER,                               
                supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY],
                representativeKey: 'FiscalYearVariant'   
}
@Analytics.technicalName: 'IFIFISCYEARVARVH'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Consumption.ranked: true

define view entity I_FiscalYearVariantStdVH 
  as select from I_FiscalYearVariant as I_FiscalYearVariant
{
  @Search: { defaultSearchElement: true, 
             ranking: #HIGH, 
             fuzzinessThreshold: 0.8 }
  @ObjectModel.text.association: '_Text'
  key I_FiscalYearVariant.FiscalYearVariant, 
  
//  @Search: { defaultSearchElement: true, 
//             ranking: #LOW, 
//             fuzzinessThreshold: 0.8 }
//  _Text[1:Language = $session.system_language].FiscalYearVariantDescription as FiscalYearVariantDescription,

  I_FiscalYearVariant._Text
}
```
