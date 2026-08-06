---
name: I_PHYSINVTRYDOCFISCALYEAR
description: Physinvtrydocfiscalyear
app_component: MM-IM-VDM-PI-2CL
software_component: SAPSCORE
release_state: released
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
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYear` | `FiscalYear` |

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
