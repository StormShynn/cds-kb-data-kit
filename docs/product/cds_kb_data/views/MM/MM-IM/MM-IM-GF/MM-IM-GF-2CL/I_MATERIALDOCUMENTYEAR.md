---
name: I_MATERIALDOCUMENTYEAR
description: "Materialdocumentyear"
app_component: MM-IM-GF-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-GF
  - interface-view
  - material
  - document
  - component:MM-IM-GF-2CL
  - lob:Sourcing & Procurement
  - bo:Material
---
# I_MATERIALDOCUMENTYEAR

**Materialdocumentyear**

| Property | Value |
|---|---|
| App Component | `MM-IM-GF-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentYear` | ✓ | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Years in material documents'
@ObjectModel: {
                usageType: {
                             sizeCategory: #XXL,
                             serviceQuality: #B,
                             dataClass:#TRANSACTIONAL
                           },
                representativeKey: 'MaterialDocumentYear',
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
              }
@VDM: {
        viewType: #COMPOSITE,
        lifecycle.contract.type: #PUBLIC_LOCAL_API
      }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IMATDOCYEAR'
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

define view entity I_MaterialDocumentYear
  as select distinct from I_MaterialDocumentRecord
{
@Semantics.calendar.year: true
  key MaterialDocumentYear
}
where MaterialDocumentRecordType = 'MDOC'
```
