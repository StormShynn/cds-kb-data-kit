---
name: I_PHYSINVTRYDOCFISCALYEAR
description: "Physinvtrydocfiscalyear"
app_component: MM-IM-VDM-PI-2CL
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
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - component:MM-IM-VDM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYDOCFISCALYEAR

**Physinvtrydocfiscalyear**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-PI-2CL` |
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
| `FiscalYear` | ✓ | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Years of physical inventory document'
@ObjectModel: {
                usageType: {
                             sizeCategory: #XL,
                             serviceQuality: #B,
                             dataClass:#TRANSACTIONAL
                           },
                representativeKey: 'FiscalYear',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics: {
              dataCategory: #DIMENSION,
              internalName: #LOCAL,
              technicalName: 'IPHYINTRYDOCFY'
            }
// Access to blocked BP data is excluded because blocking for MM-IM is possible only
// when no BP partner data can be found in table MATDOC during EoP check
@AccessControl: {
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED,
                  authorizationCheck: #NOT_REQUIRED
                }
@Metadata: {
             allowExtensions: true,
             ignorePropagatedAnnotations: true
           }

define view entity I_PhysInvtryDocFiscalYear as select distinct from I_PhysInvtryDocHeader
{
@Semantics.calendar.year: true
  key FiscalYear
}
```
