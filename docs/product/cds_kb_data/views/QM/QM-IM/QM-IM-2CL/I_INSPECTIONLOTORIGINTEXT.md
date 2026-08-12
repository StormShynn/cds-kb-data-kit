---
name: I_INSPECTIONLOTORIGINTEXT
description: "Inspectionlotorigintext"
app_component: QM-IM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-IM
  - interface-view
  - text-view
  - inspection
  - text
  - component:QM-IM-2CL
  - lob:Quality Management
---
# I_INSPECTIONLOTORIGINTEXT

**Inspectionlotorigintext**

| Property | Value |
|---|---|
| App Component | `QM-IM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InspectionLotOrigin` | ✓ | |  | `herkunft` |  |  |
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionLotOriginText` |  | |  | `herktxt` |  |  |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINSPLOTORIGINT'
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Inspection Lot Origin - Text'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ClientHandling.algorithm: #SESSION_VARIABLE

@ObjectModel.supportedCapabilities:
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT    
@ObjectModel: {
    usageType: {
        dataClass: #META,
        sizeCategory: #M,
        serviceQuality: #A
    },
    dataCategory: #TEXT,
    representativeKey: 'InspectionLotOrigin'
}
@Metadata.ignorePropagatedAnnotations: true
define view I_InspectionLotOriginText as select from tq31t
{
   key tq31t.herkunft as InspectionLotOrigin,
   @Semantics.language: true
   key tq31t.sprache as Language,
   @Semantics.text: true
   tq31t.herktxt as InspectionLotOriginText 
}
```
