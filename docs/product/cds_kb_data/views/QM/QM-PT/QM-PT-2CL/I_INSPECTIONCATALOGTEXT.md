---
name: I_INSPECTIONCATALOGTEXT
description: "Inspectioncatalogtext"
app_component: QM-PT-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - QM
  - QM-PT
  - interface-view
  - text-view
  - inspection
  - text
  - component:QM-PT-2CL
  - lob:Quality Management
---
# I_INSPECTIONCATALOGTEXT

**Inspectioncatalogtext**

| Property | Value |
|---|---|
| App Component | `QM-PT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `sprache` |  |  |
| `InspectionCatalog` | ✓ | |  | `katalogart` |  |  |
| `InspSpecAdditionalCatalogText` |  | |  | `katalogtxt` |  |  |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Inspection Catalog - Text'
@VDM: {
    viewType: #BASIC,
    lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel.supportedCapabilities: 
    [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT ]
@ObjectModel: {
    usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING },
    dataCategory: #TEXT,
    representativeKey: 'InspectionCatalog'
}
@Analytics.technicalName: 'IINSPCATALOGTXT'
@Metadata.ignorePropagatedAnnotations: true
define view entity I_InspectionCatalogText as select from tq15t 
{
   @Semantics.language: true
   key tq15t.sprache    as Language,
   key tq15t.katalogart  as InspectionCatalog,
   
   @Semantics.text: true
   tq15t.katalogtxt     as InspSpecAdditionalCatalogText
    
}
```
